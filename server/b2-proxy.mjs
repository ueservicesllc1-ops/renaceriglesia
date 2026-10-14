import http from "node:http";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const PORT = parseInt(process.env.B2_PROXY_PORT || "3001", 10);
const BUCKET_NAME = process.env.B2_BUCKET_NAME || "renacerchurch";
const ENDPOINT = process.env.B2_ENDPOINT || "https://s3.us-east-005.backblazeb2.com";
const REGION = process.env.B2_REGION || "us-east-005";
const KEY_ID = process.env.B2_KEY_ID || "005c2b526be0baa0000000040";
const APPLICATION_KEY = process.env.B2_APPLICATION_KEY || "K005tn3cVRzzHXIsC7iVqMwWO9UGhLg";

// Inicializar cliente S3 compatible con Backblaze B2
const s3Client = new S3Client({
  endpoint: ENDPOINT,
  region: REGION,
  credentials: {
    accessKeyId: KEY_ID,
    secretAccessKey: APPLICATION_KEY,
  },
});

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-amz-date, x-amz-content-sha256, x-amz-user-agent, Range");
  res.setHeader("Access-Control-Expose-Headers", "Content-Length, Content-Range, Content-Type, ETag");
  res.setHeader("Access-Control-Max-Age", "86400");
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  // Manejar preflight CORS (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);

  // 1. Healthcheck
  if (pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "online",
      service: "RENACER Backblaze B2 CORS Proxy",
      port: PORT,
      bucket: BUCKET_NAME,
      endpoint: ENDPOINT,
    }));
    return;
  }

  // 2. Generar Presigned URL para subida directa
  if (pathname === "/sign-upload" && req.method === "GET") {
    try {
      const key = url.searchParams.get("key");
      const contentType = url.searchParams.get("contentType") || "application/octet-stream";

      if (!key) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Parámetro 'key' es obligatorio" }));
        return;
      }

      const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        ContentType: contentType,
      });

      const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        uploadUrl: signedUrl,
        key,
        bucket: BUCKET_NAME,
      }));
    } catch (err) {
      console.error("Error signing upload URL:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // 3. Subir archivo a través del proxy (PUT /upload/:key o POST /upload)
  if ((pathname.startsWith("/upload/") || pathname === "/upload") && (req.method === "PUT" || req.method === "POST")) {
    try {
      let key = pathname.startsWith("/upload/") ? pathname.replace("/upload/", "") : url.searchParams.get("key");
      if (!key) {
        key = `media/${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      }

      const contentType = req.headers["content-type"] || "application/octet-stream";

      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);

      const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      });

      await s3Client.send(command);

      const publicUrl = `${ENDPOINT}/${BUCKET_NAME}/${key}`;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        success: true,
        key,
        bucket: BUCKET_NAME,
        size: buffer.length,
        contentType,
        url: publicUrl,
      }));
    } catch (err) {
      console.error("Error uploading file via proxy:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // 4. Descargar / Servir archivo a través del proxy (GET /files/:key)
  if (pathname.startsWith("/files/") && req.method === "GET") {
    try {
      const key = pathname.replace("/files/", "");
      const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      });

      const response = await s3Client.send(command);

      if (response.ContentType) {
        res.setHeader("Content-Type", response.ContentType);
      }
      if (response.ContentLength) {
        res.setHeader("Content-Length", response.ContentLength);
      }
      if (response.ETag) {
        res.setHeader("ETag", response.ETag);
      }

      // Stream the response body directly to the client
      response.Body.pipe(res);
    } catch (err) {
      console.error("Error downloading file via proxy:", err);
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Archivo no encontrado o error en Backblaze B2" }));
    }
    return;
  }

  // Ruta no encontrada
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    error: "Ruta no encontrada en el proxy de Backblaze B2",
    availableRoutes: [
      "GET /health",
      "GET /sign-upload?key=...&contentType=...",
      "PUT /upload/:key",
      "GET /files/:key"
    ]
  }));
});

server.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`🔥 [RENACER CHURCH MAESTRO] Servidor Proxy CORS para Backblaze B2`);
  console.log(`🚀 Escuchando en: http://localhost:${PORT}`);
  console.log(`📦 Bucket: ${BUCKET_NAME} | Endpoint: ${ENDPOINT}`);
  console.log(`🌐 CORS habilitado para todas las solicitudes`);
  console.log(`================================================================`);
});
