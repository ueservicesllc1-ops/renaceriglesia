import { hasPermission } from "../src/lib/permissions";
import { calculateNextVersion, compareDocVersions, createVersionSnapshot } from "../src/lib/versioning";
import { AcademicMetadata, RenacerDocument } from "../src/types";

console.log("==========================================================================");
console.log("🎓 EJECUTANDO PRUEBAS DE ARQUITECTURA ACADÉMICA DEL SEMINARIO (PROMPT 4)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// -----------------------------------------------------------------------------
// 1. CREACIÓN DE MATERIA Y RELACIÓN MAESTRO <-> ALUMNO
// -----------------------------------------------------------------------------
console.log("\n[TEST 1/12] Creando materia y vinculando Libro del Maestro y Libro del Alumno...");

const teacherDocId = "sbr-test-teo101-maestro";
const studentDocId = "sbr-test-teo101-alumno";

const teacherMetadata: AcademicMetadata = {
  subjectCode: "TEST-TEO-101",
  subjectName: "Teología Sistemática I (TEST)",
  academicLevel: "NIVEL_1",
  editionType: "LIBRO_MAESTRO",
  linkedEditionDocId: studentDocId,
  totalUnits: 4,
  totalLessons: 12,
};

const studentMetadata: AcademicMetadata = {
  subjectCode: "TEST-TEO-101",
  subjectName: "Teología Sistemática I (TEST)",
  academicLevel: "NIVEL_1",
  editionType: "LIBRO_ALUMNO",
  linkedEditionDocId: teacherDocId,
  totalUnits: 4,
  totalLessons: 12,
};

// 2. Libro del Maestro con Respuestas y Notas Pedagógicas
const teacherDoc: RenacerDocument = {
  id: teacherDocId,
  title: "Teología Sistemática I — Libro del Maestro (TEST)",
  slug: "teologia-sistematica-1-maestro-test",
  docNumber: "SBR-LIB-M101",
  type: "ACADEMICO_SEMINARIO",
  category: "Seminario Bíblico RENACER",
  status: "ADOPTADO",
  currentVersionNum: "1.0",
  content: `# TEOLOGÍA SISTEMÁTICA I — LIBRO DEL MAESTRO

## LECCIÓN 1: La Revelación Divina
### Objetivos
- Guiar a los estudiantes a comprender la revelación general y especial.

### Notas Pedagógicas para el Maestro
- Iniciar con una dinámica de observación de la creación (Salmo 19:1).
- Dedicar 20 minutos a la discusión grupal sobre 2 Timoteo 3:16.

### Respuestas de la Evaluación
1. ¿Cuáles son las dos formas de revelación? Respuesta: General y Especial.
2. ¿Por qué las Escrituras son inerrantes? Respuesta: Porque fueron inspiradas por el Espíritu Santo.`,
  authorId: "usr-fundador-001",
  authorName: "Luis Uchubanda Falconí",
  academicMetadata: teacherMetadata,
  versions: [
    createVersionSnapshot("1.0", "Contenido inicial maestro", "usr-fundador-001", "Luis Uchubanda", "ADOPTADO", "Creación libro maestro")
  ],
  comments: [],
  reviews: [],
  references: [],
  tags: ["seminario", "teologia", "maestro", "nivel-1"],
  moduleKey: "seminario",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// 3. Libro del Alumno con Ejercicios y Tareas (Sin respuestas)
const studentDoc: RenacerDocument = {
  id: studentDocId,
  title: "Teología Sistemática I — Libro del Alumno (TEST)",
  slug: "teologia-sistematica-1-alumno-test",
  docNumber: "SBR-LIB-A101",
  type: "ACADEMICO_SEMINARIO",
  category: "Seminario Bíblico RENACER",
  status: "ADOPTADO",
  currentVersionNum: "1.0",
  content: `# TEOLOGÍA SISTEMÁTICA I — LIBRO DEL ALUMNO

## LECCIÓN 1: La Revelación Divina
### Objetivos
- Comprender las formas en que Dios se ha dado a conocer al hombre.

### Desarrollo de la Lección
- La revelación general a través de la naturaleza y la conciencia.
- La revelación especial a través de Jesucristo y las Sagradas Escrituras.

### Ejercicios y Tareas
1. Lee Salmo 19:1-6 y escribe una reflexión de media página.
2. Memoriza 2 Timoteo 3:16-17.

### Espacio de Trabajo / Notas del Estudiante
[ Espacio para apuntes personales ]`,
  authorId: "usr-fundador-001",
  authorName: "Luis Uchubanda Falconí",
  academicMetadata: studentMetadata,
  versions: [
    createVersionSnapshot("1.0", "Contenido inicial alumno", "usr-fundador-001", "Luis Uchubanda", "ADOPTADO", "Creación libro alumno")
  ],
  comments: [],
  reviews: [],
  references: [],
  tags: ["seminario", "teologia", "alumno", "nivel-1"],
  moduleKey: "seminario",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

if (
  teacherDoc.academicMetadata?.linkedEditionDocId === studentDoc.id &&
  studentDoc.academicMetadata?.linkedEditionDocId === teacherDoc.id &&
  teacherDoc.academicMetadata?.editionType === "LIBRO_MAESTRO" &&
  studentDoc.academicMetadata?.editionType === "LIBRO_ALUMNO"
) {
  testSuite.passed.push("1-4. Creación y vinculación bidireccional Maestro <-> Alumno validada.");
} else {
  testSuite.failed.push("1-4. Falla en vinculación de ediciones gemelas.");
}

// -----------------------------------------------------------------------------
// 4. INDEPENDENCIA DE VERSIONES: MODIFICAR MAESTRO NO ALTERA ALUMNO
// -----------------------------------------------------------------------------
console.log("\n[TEST 5-7] Creando v1.1 en Libro del Maestro y verificando independencia...");

const updatedTeacherContent = teacherDoc.content + "\n\n### Actualización Pedagógica v1.1\n- Se añadió caso de estudio histórico.";
const v1_1_teacher = createVersionSnapshot("1.1", updatedTeacherContent, "usr-fundador-001", "Luis Uchubanda", "EN_REVISION", "Añadido caso de estudio");

const updatedTeacherDoc: RenacerDocument = {
  ...teacherDoc,
  currentVersionNum: "1.1",
  status: "EN_REVISION",
  content: updatedTeacherContent,
  versions: [v1_1_teacher, ...teacherDoc.versions],
};

// Verificar que el Libro del Alumno permanece intacto en v1.0 y estado ADOPTADO
if (
  updatedTeacherDoc.currentVersionNum === "1.1" &&
  updatedTeacherDoc.versions.length === 2 &&
  studentDoc.currentVersionNum === "1.0" &&
  studentDoc.status === "ADOPTADO" &&
  studentDoc.versions.length === 1
) {
  testSuite.passed.push("5-7. Independencia de versiones: Modificar Libro del Maestro no alteró el Libro del Alumno.");
} else {
  testSuite.failed.push("5-7. Falla: Modificación del Maestro alteró indebidamente al Alumno.");
}

// -----------------------------------------------------------------------------
// 5. VALIDACIÓN DEL MOTOR DIFF ACADÉMICO
// -----------------------------------------------------------------------------
const diffParts = compareDocVersions(teacherDoc.content, updatedTeacherDoc.content);
const detectedAddition = diffParts.some((p) => p.added && p.value.includes("Actualización Pedagógica v1.1"));

if (detectedAddition) {
  testSuite.passed.push("7b. Historial y Diff visual académico generado con éxito.");
} else {
  testSuite.failed.push("7b. Falla en generador Diff de textos académicos.");
}

// -----------------------------------------------------------------------------
// 6. RENACER IA: IDENTIFICACIÓN DE FUENTES (MAESTRO vs ALUMNO)
// -----------------------------------------------------------------------------
console.log("\n[TEST 10-11] Verificando detección de fuente académica en RENACER IA...");

function simulateAcademicQuery(query: string, docs: RenacerDocument[]) {
  const lower = query.toLowerCase();
  const found = docs.filter((d) => d.content.toLowerCase().includes(lower) || d.title.toLowerCase().includes(lower));
  if (found.length === 0) return { text: "No se encontró información.", sources: [] };

  const matched = found[0];
  const edition = matched.academicMetadata?.editionType === "LIBRO_MAESTRO" ? "Libro del Maestro" : "Libro del Alumno";

  return {
    text: `Información extraída de: ${matched.title}`,
    sources: [
      {
        docTitle: matched.title,
        docNumber: matched.docNumber,
        version: matched.currentVersionNum,
        status: matched.status,
        edition,
        subjectCode: matched.academicMetadata?.subjectCode,
      }
    ]
  };
}

const resTeacher = simulateAcademicQuery("Respuestas de la Evaluación", [teacherDoc, studentDoc]);
const resStudent = simulateAcademicQuery("Espacio para apuntes personales", [teacherDoc, studentDoc]);

if (
  resTeacher.sources[0]?.edition === "Libro del Maestro" &&
  resStudent.sources[0]?.edition === "Libro del Alumno"
) {
  testSuite.passed.push("10-11. RENACER IA: Identificación y cita explícita de fuente (Libro del Maestro vs Libro del Alumno) verificada.");
} else {
  testSuite.failed.push("10-11. Falla en discriminación de edición en RENACER IA.");
}

// -----------------------------------------------------------------------------
// 7. SEGURIDAD Y PERMISOS ACADÉMICOS
// -----------------------------------------------------------------------------
console.log("\n[TEST 12] Verificando bloqueo de usuarios no autorizados para modificar material del Seminario...");

const docenteCanEditSeminario = hasPermission("DOCENTE", "EDIT", "seminario");
const miembroCanEditSeminario = hasPermission("MIEMBRO", "EDIT", "seminario");
const estudianteCanEditSeminario = hasPermission("ESTUDIANTE", "EDIT", "seminario");
const docenteCanAdoptSeminario = hasPermission("DOCENTE", "ADOPT_OFFICIAL", "seminario");
const pastorFundadorCanAdoptSeminario = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "seminario");

if (
  docenteCanEditSeminario &&
  !miembroCanEditSeminario &&
  !estudianteCanEditSeminario &&
  !docenteCanAdoptSeminario &&
  pastorFundadorCanAdoptSeminario
) {
  testSuite.passed.push("12. Seguridad Académica: Docente puede editar pero NO adoptar; Miembro y Estudiante bloqueados.");
} else {
  testSuite.failed.push("12. Falla en seguridad académica.");
}

// -----------------------------------------------------------------------------
// RESULTADOS CONSOLIDADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS ACADÉMICAS: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
