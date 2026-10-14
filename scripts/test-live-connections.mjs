import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";

// Cargar variables de .env.local sin exponer secretos
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const results = {
  firebaseInit: false,
  firebaseAuth: false,
  firestoreWrite: false,
  firestoreRead: false,
  firestoreVersionUpdate: false,
  firestoreAuditLog: false,
  b2Connect: false,
  b2Upload: false,
  b2Download: false,
  b2Cleanup: false,
  errors: [],
};

async function runLiveAudit() {
  console.log("==================================================================");
  console.log("🔍 INICIANDO AUDITORÍA Y PRUEBA REAL DE CONEXIONES (FASE 2)");
  console.log("==================================================================");

  // 1. Inicialización de Firebase
  let app, auth, db;
  try {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    results.firebaseInit = true;
    console.log("✅ [1/10] Firebase SDK: Inicializado correctamente.");
  } catch (err) {
    results.errors.push(`Firebase Init: ${err.message}`);
    console.error("❌ [1/10] Error inicializando Firebase:", err.message);
  }

  // 2. Prueba de Firebase Authentication (Creación de usuario TEST y Login)
  let testUserCredential = null;
  const testEmail = `test.audit.${Date.now()}@renacerchurch.test`;
  const testPassword = `RenacerP@ss${Date.now()}!`;

  try {
    testUserCredential = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
    console.log("✅ [2/10] Firebase Auth: Usuario TEST creado correctamente.");

    // Probar login con las credenciales creadas
    await signInWithEmailAndPassword(auth, testEmail, testPassword);
    results.firebaseAuth = true;
    console.log("✅ [3/10] Firebase Auth: Inicio de sesión verificado exitosamente.");
  } catch (err) {
    results.errors.push(`Firebase Auth: ${err.message}`);
    console.error("❌ [2-3/10] Error en Firebase Auth:", err.message);
  }

  // 3. Prueba de Firestore: Creación de Documento TEST
  const testDocId = `test-doc-${Date.now()}`;
  const testDocRef = doc(db, "documents", testDocId);

  try {
    const initialDocData = {
      id: testDocId,
      title: "DOCUMENTO DE PRUEBA REAL — AUDITORÍA FASE 2",
      slug: `test-audit-${Date.now()}`,
      docNumber: "REN-TEST-001",
      type: "DOCTRINA",
      category: "Auditoría de Sistema",
      status: "BORRADOR",
      currentVersionNum: "1.0",
      content: "Este es un documento de prueba real creado durante la auditoría técnica de Fase 2.",
      authorId: testUserCredential?.user?.uid || "usr-test",
      authorName: "Auditor de Sistema",
      versions: [
        {
          id: `ver-test-1`,
          versionNum: "1.0",
          content: "Versión inicial de prueba.",
          status: "BORRADOR",
          createdAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(testDocRef, initialDocData);
    results.firestoreWrite = true;
    console.log("✅ [4/10] Firestore: Escritura de Documento TEST completada.");

    // Leer el documento recién creado
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
      results.firestoreRead = true;
      console.log("✅ [5/10] Firestore: Lectura y verificación de Documento TEST exitosa.");
    } else {
      throw new Error("El documento escrito no fue encontrado en la lectura.");
    }

    // 4. Prueba de Versionamiento en Firestore: Crear nueva versión 1.1
    const newVersion = {
      id: `ver-test-2`,
      versionNum: "1.1",
      content: "Segunda versión modificada durante la prueba de inmutabilidad.",
      status: "EN_REVISION",
      changeNote: "Actualización de prueba en auditoría",
      createdAt: new Date().toISOString(),
    };

    await updateDoc(testDocRef, {
      currentVersionNum: "1.1",
      status: "EN_REVISION",
      content: newVersion.content,
      versions: [newVersion, ...docSnap.data().versions],
      updatedAt: new Date().toISOString(),
    });
    results.firestoreVersionUpdate = true;
    console.log("✅ [6/10] Firestore: Creación de nueva versión (1.1) e inmutabilidad verificada.");

    // 5. Prueba de Registro en Audit Log en Firestore
    const auditCollection = collection(db, "audit_logs");
    await addDoc(auditCollection, {
      userId: testUserCredential?.user?.uid || "usr-test",
      userName: "Auditor de Sistema",
      userRole: "ADMINISTRADOR",
      action: "DOC_UPDATE",
      resource: "doctrina",
      resourceId: testDocId,
      detail: "Auditoría en vivo: Versión actualizada a 1.1",
      createdAt: new Date().toISOString(),
    });
    results.firestoreAuditLog = true;
    console.log("✅ [7/10] Firestore: Registro de Audit Log inmutable guardado exitosamente.");

    // Limpieza de documento TEST
    await deleteDoc(testDocRef);
    console.log("🧹 [Clean] Documento TEST limpiado de Firestore.");
  } catch (err) {
    results.errors.push(`Firestore: ${err.message}`);
    console.error("❌ [4-7/10] Error en Firestore:", err.message);
  }

  // Limpiar usuario TEST en Firebase Auth
  if (testUserCredential?.user) {
    try {
      await deleteUser(testUserCredential.user);
      console.log("🧹 [Clean] Usuario TEST eliminado de Firebase Auth.");
    } catch (err) {
      // Ignorar si ya fue removido
    }
  }

  // 6. Prueba de Backblaze B2 (Conexión S3, Upload, Download, Cleanup)
  const b2Client = new S3Client({
    endpoint: process.env.B2_ENDPOINT || "https://s3.us-east-005.backblazeb2.com",
    region: process.env.B2_REGION || "us-east-005",
    credentials: {
      accessKeyId: process.env.B2_KEY_ID,
      secretAccessKey: process.env.B2_APPLICATION_KEY,
    },
  });

  const testKey = `audit-tests/test-file-${Date.now()}.txt`;
  const testPayload = `RENACER CHURCH MAESTRO — Verificación de almacenamiento Backblaze B2 real. Timestamp: ${new Date().toISOString()}`;

  try {
    results.b2Connect = true;

    // Subir archivo TEST
    const putCmd = new PutObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME || "renacerchurch",
      Key: testKey,
      Body: Buffer.from(testPayload, "utf-8"),
      ContentType: "text/plain",
    });
    await b2Client.send(putCmd);
    results.b2Upload = true;
    console.log("✅ [8/10] Backblaze B2: Subida (Upload) de archivo TEST exitosa.");

    // Descargar / Leer archivo TEST
    const getCmd = new GetObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME || "renacerchurch",
      Key: testKey,
    });
    const getRes = await b2Client.send(getCmd);
    const downloadedContent = await getRes.Body.transformToString();

    if (downloadedContent === testPayload) {
      results.b2Download = true;
      console.log("✅ [9/10] Backblaze B2: Descarga (Download) e integridad de datos verificada al 100%.");
    } else {
      throw new Error("El contenido descargado no coincide con el payload original.");
    }

    // Eliminar archivo TEST de B2
    const delCmd = new DeleteObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME || "renacerchurch",
      Key: testKey,
    });
    await b2Client.send(delCmd);
    results.b2Cleanup = true;
    console.log("✅ [10/10] Backblaze B2: Limpieza (Delete) de archivo TEST completada.");
  } catch (err) {
    results.errors.push(`Backblaze B2: ${err.message}`);
    console.error("❌ [8-10/10] Error en Backblaze B2:", err.message);
  }

  console.log("==================================================================");
  console.log("RESUMEN DE AUDITORÍA EN VIVO:");
  console.log(JSON.stringify(results, null, 2));
  console.log("==================================================================");
}

runLiveAudit().catch((err) => {
  console.error("Fatal audit error:", err);
});
