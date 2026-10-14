import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const B2_CONFIG = {
  endpoint: process.env.B2_ENDPOINT || "https://s3.us-east-005.backblazeb2.com",
  region: process.env.B2_REGION || "us-east-005",
  bucketName: process.env.B2_BUCKET_NAME || "renacerchurch",
  bucketId: process.env.B2_BUCKET_ID || "9cb20b35b2966b4ea00b0a1a",
  keyId: process.env.B2_KEY_ID || "005c2b526be0baa0000000040",
  applicationKey: process.env.B2_APPLICATION_KEY || "K005tn3cVRzzHXIsC7iVqMwWO9UGhLg",
  proxyUrl: process.env.NEXT_PUBLIC_B2_PROXY_URL || "http://localhost:3001",
};

/**
 * Cliente S3 SDK para operaciones directas en el servidor
 */
export const b2Client = new S3Client({
  endpoint: B2_CONFIG.endpoint,
  region: B2_CONFIG.region,
  credentials: {
    accessKeyId: B2_CONFIG.keyId,
    secretAccessKey: B2_CONFIG.applicationKey,
  },
});

/**
 * Genera una URL firmada de subida para clientes
 */
export async function getUploadPresignedUrl(
  key: string,
  contentType: string,
  expiresInSeconds = 3600
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: B2_CONFIG.bucketName,
    Key: key,
    ContentType: contentType,
  });
  return await getSignedUrl(b2Client, command, { expiresIn: expiresInSeconds });
}

/**
 * Genera una URL firmada de descarga para documentos confidenciales
 */
export async function getDownloadPresignedUrl(
  key: string,
  expiresInSeconds = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: B2_CONFIG.bucketName,
    Key: key,
  });
  return await getSignedUrl(b2Client, command, { expiresIn: expiresInSeconds });
}

/**
 * Obtiene la URL pública o proxied para un recurso multimedia
 */
export function getMediaUrl(key: string, useProxy = false): string {
  if (useProxy) {
    return `${B2_CONFIG.proxyUrl}/files/${key}`;
  }
  return `${B2_CONFIG.endpoint}/${B2_CONFIG.bucketName}/${key}`;
}
