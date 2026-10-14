"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  RenacerDocument,
  DocumentStatus,
  AuditLogEntry,
  LegalProcess,
  JsonImportQueueItem,
  DocumentVersion,
} from "@/types";
import { useAuth } from "./AuthContext";
import { recordAuditLog } from "@/lib/audit";
import { calculateNextVersion, createVersionSnapshot } from "@/lib/versioning";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";

interface DocumentContextType {
  documents: RenacerDocument[];
  auditLogs: AuditLogEntry[];
  legalProcesses: LegalProcess[];
  importQueue: JsonImportQueueItem[];
  getDocumentBySlug: (slug: string) => RenacerDocument | undefined;
  updateDocumentContent: (docId: string, newContent: string, changeNote: string, changeType: 'minor' | 'major') => void;
  updateDocumentStatus: (docId: string, newStatus: DocumentStatus) => void;
  addComment: (docId: string, content: string, parentId?: string) => void;
  requestReview: (docId: string, reviewerRole: any) => void;
  addJsonToQueue: (filename: string, rawContent: string, parsedData?: any, meta?: any) => void;
  approveAndPublishJson: (queueId: string) => void;
  toggleChecklistItem: (processId: string, itemId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Documentos arquitecturales iniciales oficiales de RENACER
const INITIAL_DOCUMENTS: RenacerDocument[] = [
  {
    id: "doc-identidad-001",
    title: "Identidad y Fundación de RENACER CHURCH",
    slug: "identidad-y-fundacion",
    docNumber: "REN-ID-001",
    type: "DOCTRINA",
    category: "Identidad y Fundación",
    status: "ADOPTADO",
    currentVersionNum: "1.0",
    content: `# IDENTIDAD Y FUNDACIÓN DE RENACER CHURCH

**Nombre Legal Propuesto:** RENACER CHURCH, INC.
**Nombre Público:** RENACER CHURCH
**Lema Oficial:** "Renacer, un nuevo inicio"
**Tipo Eclesial:** Iglesia cristiana evangélica pentecostal independiente / no denominacional.
**Ciudad Sede Inicial:** Paterson, New Jersey, Estados Unidos.
**Pastor Fundador:** Luis Uchubanda Falconí.
**Institución Académica:** Seminario Bíblico RENACER.

---

### Misión
Proclamar el evangelio de Jesucristo, formar discípulos y líderes consagrados, y servir como un faro de transformación espiritual y social en la comunidad.

### Visión
Construir una comunidad de fe fundamentada sólidamente en las Sagradas Escrituras, organizada con excelencia, gobierno bíblico y transparencia administrativa.`,
    authorId: "usr-fundador-001",
    authorName: "Luis Uchubanda Falconí",
    versions: [
      {
        id: "ver-id-001",
        versionNum: "1.0",
        content: `# IDENTIDAD Y FUNDACIÓN DE RENACER CHURCH\n\n**Nombre Legal Propuesto:** RENACER CHURCH, INC.\n**Nombre Público:** RENACER CHURCH\n**Lema Oficial:** "Renacer, un nuevo inicio"\n**Tipo Eclesial:** Iglesia cristiana evangélica pentecostal independiente / no denominacional.\n**Ciudad Sede Inicial:** Paterson, New Jersey, Estados Unidos.\n**Pastor Fundador:** Luis Uchubanda Falconí.\n**Institución Académica:** Seminario Bíblico RENACER.`,
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        status: "ADOPTADO",
        changeNote: "Documento fundacional inicial",
        createdAt: "2026-09-02T12:00:00.000Z",
      },
    ],
    comments: [],
    reviews: [],
    references: [],
    tags: ["fundacion", "identidad", "paterson", "lema"],
    moduleKey: "identidad",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-02T12:00:00.000Z",
  },
  {
    id: "doc-declaracion-fe-base",
    title: "Estructura de la Declaración de Fe y Doctrina",
    slug: "declaracion-de-fe-estructura",
    docNumber: "REN-DOC-002",
    type: "DOCTRINA",
    category: "Declaración de Fe y Doctrina",
    status: "BORRADOR",
    currentVersionNum: "0.9",
    content: `# DECLARACIÓN DE FE Y DOCTRINA (EN PREPARACIÓN)

*Este documento estructural está preparado para recibir los artículos doctrinales oficiales de RENACER CHURCH mediante el sistema de importación JSON.*

---

### Artículos Fundamentales en Proceso:
1. Las Sagradas Escrituras como Palabra inerrante de Dios.
2. La Trinidad Santa (Padre, Hijo y Espíritu Santo).
3. La Deidad y Salvación en Jesucristo.
4. El Bautismo en el Espíritu Santo y los Dones Espirituales.
5. Las Ordenanzas: Bautismo en Agua y Santa Cena.
6. La Iglesia, su Gobierno y Gran Comisión.

> **Nota del Sistema:** Por política estricta de RENACER CHURCH MAESTRO, ningún artículo se adoptará como doctrina oficial hasta que sea redactado, revisado por el Consejo y adoptado formalmente.`,
    authorId: "usr-fundador-001",
    authorName: "Luis Uchubanda Falconí",
    versions: [
      {
        id: "ver-doc-002-v1",
        versionNum: "0.9",
        content: `# DECLARACIÓN DE FE Y DOCTRINA (EN PREPARACIÓN)\n\n*Documento base.*`,
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        status: "BORRADOR",
        changeNote: "Estructura base para importación JSON",
        createdAt: "2026-09-02T12:00:00.000Z",
      },
    ],
    comments: [],
    reviews: [],
    references: [],
    tags: ["doctrina", "declaracion-de-fe", "borrador"],
    moduleKey: "doctrina",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-02T12:00:00.000Z",
  },
];

// Procesos del Centro Legal Iniciales
const INITIAL_LEGAL_PROCESSES: LegalProcess[] = [
  {
    id: "legal-proc-01",
    code: "CONST-NJ",
    title: "Constitución e Incorporación Legal en New Jersey",
    category: "CONSTITUCION",
    description: "Proceso para constituir legalmente RENACER CHURCH, INC. ante el Estado de New Jersey.",
    status: "EN_PROGRESO",
    responsible: "Luis Uchubanda Falconí",
    officialSourceUrl: "https://www.nj.gov/treasury/revenue/",
    updatedAt: "2026-09-02T12:00:00.000Z",
    checklist: [
      { id: "chk-1", title: "Verificar disponibilidad de nombre: RENACER CHURCH, INC.", isCompleted: true, order: 1 },
      { id: "chk-2", title: "Preparar Certificate / Articles of Incorporation", isCompleted: true, order: 2 },
      { id: "chk-3", title: "Presentar registro ante NJ Division of Revenue", isCompleted: false, order: 3 },
      { id: "chk-4", title: "Obtener Employer Identification Number (EIN) ante el IRS", isCompleted: false, order: 4 },
      { id: "chk-5", title: "Registro NJ-REG (New Jersey Business Registration)", isCompleted: false, order: 5 },
      { id: "chk-6", title: "Apertura de cuenta bancaria institucional de la iglesia", isCompleted: false, order: 6 },
      { id: "chk-7", title: "Redacción y adopción de Bylaws (Estatutos Internos)", isCompleted: false, order: 7 },
      { id: "chk-8", title: "Revisar requisitos de exención fiscal 501(c)(3)", isCompleted: false, order: 8 },
    ],
    documents: [
      { id: "ldoc-1", title: "Articles of Incorporation (Borrador)", isRequired: true, status: "SUBIDO" },
      { id: "ldoc-2", title: "Formulario SS-4 (IRS EIN Application)", isRequired: true, status: "PENDIENTE" },
      { id: "ldoc-3", title: "Bylaws Aprobados", isRequired: true, status: "PENDIENTE" },
    ],
  },
];

const DocumentContext = createContext<DocumentContextType | undefined>(undefined);

export function DocumentProvider({ children }: { children: React.ReactNode }) {
  const { user, currentRole } = useAuth();
  const [documents, setDocuments] = useState<RenacerDocument[]>(INITIAL_DOCUMENTS);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([]);
  const [legalProcesses, setLegalProcesses] = useState<LegalProcess[]>(INITIAL_LEGAL_PROCESSES);
  const [importQueue, setImportQueue] = useState<JsonImportQueueItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Sincronización en tiempo real con Firestore cuando esté disponible
  useEffect(() => {
    try {
      if (db) {
        const docCol = collection(db, "documents");
        const unsubscribe = onSnapshot(
          docCol,
          (snapshot) => {
            if (!snapshot.empty) {
              const loadedDocs: RenacerDocument[] = [];
              snapshot.forEach((d) => loadedDocs.push(d.data() as RenacerDocument));
              setDocuments(loadedDocs);
            }
          },
          (err) => {
            console.warn("Firestore live sync (using local initialized cache):", err.message);
          }
        );
        return () => unsubscribe();
      }
    } catch (e) {
      console.warn("Firestore connection initialized with default foundation documents.");
    }
  }, []);

  const getDocumentBySlug = (slug: string) => {
    return documents.find((doc) => doc.slug === slug);
  };

  const updateDocumentContent = async (
    docId: string,
    newContent: string,
    changeNote: string,
    changeType: 'minor' | 'major' = 'minor'
  ) => {
    if (!user) return;

    const targetDoc = documents.find((d) => d.id === docId);
    if (!targetDoc) return;

    const nextVer = calculateNextVersion(targetDoc.currentVersionNum, changeType);
    const newVersionSnapshot: DocumentVersion = createVersionSnapshot(
      nextVer,
      newContent,
      user.id,
      user.displayName,
      targetDoc.status,
      changeNote
    );

    const updatedDoc: RenacerDocument = {
      ...targetDoc,
      content: newContent,
      currentVersionNum: nextVer,
      versions: [newVersionSnapshot, ...targetDoc.versions],
      updatedAt: new Date().toISOString(),
    };

    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === docId ? updatedDoc : doc))
    );

    // Guardar en Firestore si está disponible
    try {
      if (db) {
        await setDoc(doc(db, "documents", docId), updatedDoc);
      }
    } catch (err) {
      console.warn("Firestore sync on update:", err);
    }

    recordAuditLog({
      userId: user.id,
      userName: user.displayName,
      userEmail: user.email,
      userRole: currentRole,
      action: "DOC_UPDATE",
      resource: updatedDoc.moduleKey,
      resourceId: updatedDoc.id,
      detail: `Actualizó versión a ${nextVer}: ${changeNote}`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  const updateDocumentStatus = async (docId: string, newStatus: DocumentStatus) => {
    if (!user) return;

    const targetDoc = documents.find((d) => d.id === docId);
    if (!targetDoc) return;

    const updatedDoc: RenacerDocument = {
      ...targetDoc,
      status: newStatus,
      updatedAt: new Date().toISOString(),
    };

    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === docId ? updatedDoc : doc))
    );

    try {
      if (db) {
        await setDoc(doc(db, "documents", docId), updatedDoc);
      }
    } catch (err) {
      console.warn("Firestore sync on status change:", err);
    }

    recordAuditLog({
      userId: user.id,
      userName: user.displayName,
      userEmail: user.email,
      userRole: currentRole,
      action: "DOC_STATUS_CHANGE",
      resource: updatedDoc.moduleKey,
      resourceId: updatedDoc.id,
      detail: `Cambió estado de [${targetDoc.status}] a [${newStatus}]`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  const addComment = (docId: string, content: string, parentId?: string) => {
    if (!user) return;

    setDocuments((prevDocs) =>
      prevDocs.map((doc) => {
        if (doc.id !== docId) return doc;

        const newComment = {
          id: `comment-${Date.now()}`,
          authorId: user.id,
          authorName: user.displayName,
          authorRole: currentRole,
          content,
          createdAt: new Date().toISOString(),
          parentId,
        };

        return {
          ...doc,
          comments: [...doc.comments, newComment],
        };
      })
    );

    recordAuditLog({
      userId: user.id,
      userName: user.displayName,
      userEmail: user.email,
      userRole: currentRole,
      action: "COMMENT_ADDED",
      resource: "doctrina",
      resourceId: docId,
      detail: `Comentó en documento: "${content.substring(0, 40)}..."`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  const requestReview = (docId: string, reviewerRole: any) => {
    if (!user) return;

    setDocuments((prevDocs) =>
      prevDocs.map((doc) => {
        if (doc.id !== docId) return doc;

        const newReview = {
          id: `rev-${Date.now()}`,
          reviewerId: "pending",
          reviewerName: `Asignado a: ${reviewerRole}`,
          reviewerRole: reviewerRole,
          status: "PENDIENTE" as const,
          createdAt: new Date().toISOString(),
        };

        return {
          ...doc,
          status: "EN_REVISION" as const,
          reviews: [...doc.reviews, newReview],
        };
      })
    );

    recordAuditLog({
      userId: user.id,
      userName: user.displayName,
      userEmail: user.email,
      userRole: currentRole,
      action: "REVIEW_REQUESTED",
      resource: "doctrina",
      resourceId: docId,
      detail: `Solicitó revisión a: ${reviewerRole}`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  const addJsonToQueue = (filename: string, rawContent: string, parsedData?: any, meta?: any) => {
    const newItem: JsonImportQueueItem = {
      id: `queue-${Date.now()}`,
      filename,
      type: meta?.type || "doctrina",
      itemCount: parsedData?.length || 1,
      status: "PREVISUALIZADO",
      validationErrors: [],
      rawContent,
      createdAt: new Date().toISOString(),
    };
    setImportQueue((prev) => [newItem, ...prev]);

    recordAuditLog({
      userId: user?.id || "admin",
      userName: user?.displayName || "Administrador",
      userEmail: user?.email || "admin@renacerchurch.org",
      userRole: currentRole,
      action: "JSON_IMPORT_PREVIEW",
      resource: "import_queue",
      detail: `Validó y previsualizó lote JSON: ${filename} (${newItem.itemCount} registros)`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  const approveAndPublishJson = async (queueId: string) => {
    if (!user) return;

    const queueItem = importQueue.find((i) => i.id === queueId);
    if (!queueItem) return;

    try {
      const parsed = JSON.parse(queueItem.rawContent);
      const newDocsToInsert: RenacerDocument[] = [];

      if (Array.isArray(parsed?.data)) {
        for (let i = 0; i < parsed.data.length; i++) {
          const item = parsed.data[i];
          const docId = `doc-${item.slug || Math.random().toString(36).substring(2, 8)}`;
          const initialVersion: DocumentVersion = {
            id: `ver-${docId}-1.0`,
            versionNum: "1.0",
            content: item.content || "",
            authorId: user.id,
            authorName: parsed?.meta?.author || user.displayName,
            status: item.status || "BORRADOR",
            changeNote: `Importación inicial desde ${queueItem.filename}`,
            createdAt: new Date().toISOString(),
          };

          const newDoc: RenacerDocument = {
            id: docId,
            title: item.title || `Documento ${i + 1}`,
            slug: item.slug || `doc-${Date.now()}-${i}`,
            docNumber: item.docNumber || `REN-DOC-${Date.now()}`,
            type: "DOCTRINA",
            category: item.category || "Declaración de Fe y Doctrina",
            subcategory: item.subcategory,
            status: item.status || "BORRADOR",
            currentVersionNum: "1.0",
            content: item.content || "",
            authorId: user.id,
            authorName: parsed?.meta?.author || user.displayName,
            versions: [initialVersion],
            comments: [],
            reviews: [],
            references: [],
            tags: item.tags || ["doctrina"],
            moduleKey: "doctrina",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          newDocsToInsert.push(newDoc);

          // Guardar en Firestore
          if (db) {
            try {
              await setDoc(doc(db, "documents", docId), newDoc);
            } catch (err) {
              console.warn("Firestore error publishing doc:", err);
            }
          }
        }
      }

      // Agregar los documentos nuevos al estado
      setDocuments((prev) => [...newDocsToInsert, ...prev]);

      // Marcar el lote como PUBLICADO
      setImportQueue((prev) =>
        prev.map((item) => {
          if (item.id !== queueId) return item;
          return {
            ...item,
            status: "PUBLICADO",
            approvedBy: user.displayName,
            approvedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
          };
        })
      );

      recordAuditLog({
        userId: user.id,
        userName: user.displayName,
        userEmail: user.email,
        userRole: currentRole,
        action: "JSON_IMPORT_APPROVED",
        resource: "import_queue",
        detail: `Aprobó y publicó ${newDocsToInsert.length} documentos desde ${queueItem.filename}`,
      }).then((log) => setAuditLogs((prev) => [log, ...prev]));
    } catch (e: any) {
      console.error("Error al publicar JSON:", e.message);
    }
  };

  const toggleChecklistItem = (processId: string, itemId: string) => {
    if (!user) return;

    setLegalProcesses((prevProcesses) =>
      prevProcesses.map((proc) => {
        if (proc.id !== processId) return proc;

        const updatedChecklist = proc.checklist.map((item) => {
          if (item.id !== itemId) return item;
          const nextState = !item.isCompleted;
          return {
            ...item,
            isCompleted: nextState,
            completedAt: nextState ? new Date().toISOString() : undefined,
            completedBy: nextState ? user.displayName : undefined,
          };
        });

        return {
          ...proc,
          checklist: updatedChecklist,
          updatedAt: new Date().toISOString(),
        };
      })
    );

    recordAuditLog({
      userId: user.id,
      userName: user.displayName,
      userEmail: user.email,
      userRole: currentRole,
      action: "LEGAL_CHECKLIST_UPDATE",
      resource: "centro_legal",
      resourceId: processId,
      detail: `Actualizó checklist en proceso legal: ${processId}`,
    }).then((log) => setAuditLogs((prev) => [log, ...prev]));
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        auditLogs,
        legalProcesses,
        importQueue,
        getDocumentBySlug,
        updateDocumentContent,
        updateDocumentStatus,
        addComment,
        requestReview,
        addJsonToQueue,
        approveAndPublishJson,
        toggleChecklistItem,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useDocuments must be used within a DocumentProvider");
  }
  return context;
}
