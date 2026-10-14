// ============================================================================
// RENACER CHURCH MAESTRO — FASE 39: EXPEDIENTE TÉCNICO DEL ARTÍCULO 46
// PREVALENCIA EN CONFLICTO DOCUMENTAL Y ARMONIZACIÓN NORMATIVA (REN-DOC-002)
// ============================================================================

export interface InstitutionalDocumentStructureItem {
  documentName: string;
  documentCode: string;
  primaryFunction: string;
  jurisdictionScope: "CIVIL_ESTATAL" | "CORPORATIVO_FIDUCIARIO" | "CONSTITUCIONAL_ECLESIAL" | "DOCTRINAL_ESPIRITUAL" | "OPERATIVO_MINISTERIAL";
  governingAuthority: string;
  status: string;
  observations: string;
}

export interface DocumentConflictTypeItem {
  conflictCode: "TIPO_A" | "TIPO_B" | "TIPO_C" | "TIPO_D" | "TIPO_E";
  conflictName: string;
  exampleScenario: string;
  proposedResolutionProcedure: string;
  legalReviewRequired: boolean;
  involvedDocuments: string;
}

export interface SpiritualCorporateSeparationRow {
  matter: string;
  sphereType: "ESPIRITUAL_DOCTRINAL" | "CORPORATIVO_FIDUCIARIO" | "MIXTO_COORDINADO";
  primaryDocument: string;
  institutionalAuthority: string;
  potentialConflict: string;
  legalReviewRequired: boolean;
}

export interface ConflictResolutionStep {
  stepNumber: number;
  stepName: string;
  description: string;
  responsibleRole: string;
}

export interface PrecedenceOptionArt46 {
  optionCode: string;
  name: string;
  description: string;
  advantages: string[];
  risks: string[];
  spiritualImpact: string;
  corporateImpact: string;
  administrativeImpact: string;
  legalReviewNeed: string;
  proposalNotice: "PROPUESTA — NO ADOPTADA";
}

export interface NjAttorneyQuestionArt46 {
  questionNumber: number;
  questionText: string;
  consultationReason: string;
  affectedDocument: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface Article46DocumentPrecedenceDossier {
  articleNumber: 46;
  documentId: "REN-DOC-002";
  title: "Prevalencia en Conflicto Documental y Jerarquía Normativa";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  documentInventory: InstitutionalDocumentStructureItem[];
  preliminaryHierarchyNotice: string;
  preliminaryHierarchy: { level: number; layer: string; scope: string; legalNature: string }[];
  conflictTypes: DocumentConflictTypeItem[];
  separationMatrix: SpiritualCorporateSeparationRow[];
  resolutionProtocol: ConflictResolutionStep[];
  options: PrecedenceOptionArt46[];
  attorneyQuestions: NjAttorneyQuestionArt46[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_46_DOSSIER: Article46DocumentPrecedenceDossier = {
  articleNumber: 46,
  documentId: "REN-DOC-002",
  title: "Prevalencia en Conflicto Documental y Jerarquía Normativa",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 1 — INVENTARIO DE LA ESTRUCTURA DOCUMENTAL
  documentInventory: [
    {
      documentName: "Certificate of Incorporation",
      documentCode: "REN-DOC-000",
      primaryFunction: "Nacimiento corporativo público, personería jurídica en NJ, objeto social y cláusula 501(c)(3).",
      jurisdictionScope: "CIVIL_ESTATAL",
      governingAuthority: "Estado de New Jersey / Board of Trustees",
      status: "VIGENTE_REGISTRADO",
      observations: "Documento registral público radicado en Trenton, NJ.",
    },
    {
      documentName: "Declaración de Fe (20 Artículos)",
      documentCode: "REN-DOC-001",
      primaryFunction: "Fundamento bíblico inerrante, cuerpo doctrinal inmutable y comunión teológica.",
      jurisdictionScope: "DOCTRINAL_ESPIRITUAL",
      governingAuthority: "Pastor Fundador exclusivamente",
      status: "BORRADOR v1.0 (NO ADOPTADA)",
      observations: "Inmutable por vía constitucional; soberanía doctrinal del Fundador.",
    },
    {
      documentName: "Constitución de RENACER",
      documentCode: "REN-DOC-002",
      primaryFunction: "Carta Magna eclesial de 48 artículos, gobierno espiritual, membresía y sucesión.",
      jurisdictionScope: "CONSTITUCIONAL_ECLESIAL",
      governingAuthority: "Pastor Fundador / Consejo de Gobierno / Asamblea",
      status: "EN_REDACCION v0.1 (NO ADOPTADA)",
      observations: "Norma interna eclesiástica suprema subordinada a la Declaración de Fe.",
    },
    {
      documentName: "Bylaws de RENACER CHURCH, INC.",
      documentCode: "REN-DOC-003",
      primaryFunction: "Estatutos corporativos civiles bajo N.J.S.A. 15A & 16, quórums de directores y facultades bancarias.",
      jurisdictionScope: "CORPORATIVO_FIDUCIARIO",
      governingAuthority: "Consejo de Gobierno / Board of Trustees",
      status: "PLANIFICADO v0.1",
      observations: "Reglamentación fiduciaria civil sujeta a revisión legal de New Jersey.",
    },
    {
      documentName: "Manuales Ministeriales y Reglamentos Departamentales",
      documentCode: "REN-DOC-004 a REN-DOC-020",
      primaryFunction: "Procedimientos operativos estándar (SOPs), manuales de departamentos y reglamentos internos.",
      jurisdictionScope: "OPERATIVO_MINISTERIAL",
      governingAuthority: "Consejo Ministerial / Directores Departamentales",
      status: "PLANIFICADOS / EN_DESARROLLO",
      observations: "Subordinados en todo momento a la Constitución y la Declaración de Fe.",
    },
  ],

  // PARTE 2 — JERARQUÍA PRELIMINAR PROPUESTA (NO ES OPINIÓN JURÍDICA DEFINITIVA)
  preliminaryHierarchyNotice: "JERARQUÍA PRELIMINAR DE TRABAJO — PROPUESTA NO ADOPTADA. SUJETA A REVISIÓN POR ABOGADO DE NEW JERSEY.",
  preliminaryHierarchy: [
    { level: 1, layer: "Legislación Civil Imperativa", scope: "IRS 501(c)(3), N.J.S.A. Title 15A & Title 16", legalNature: "Orden público estatal y federal" },
    { level: 2, layer: "Certificate of Incorporation", scope: "Acta fundacional pública registrada en Trenton, NJ", legalNature: "Estatuto público corporativo" },
    { level: 3, layer: "Bylaws Corporativos (REN-DOC-003)", scope: "Gobernanza de directores, facultades fiduciarias y bancarias", legalNature: "Estatutos civiles internos" },
    { level: 4, layer: "Constitución de RENACER (REN-DOC-002)", scope: "Gobierno eclesial, ministerios, membresía y disciplina", legalNature: "Carta Magna eclesiástica interna" },
    { level: 5, layer: "Declaración de Fe (REN-DOC-001)", scope: "Doctrina bíblica inmutable de fe (primacía espiritual suprema)", legalNature: "Pacto de fe eclesiástico" },
    { level: 6, layer: "Manuales Operativos y SOPs (REN-DOC-004+)", scope: "Procedimientos departamentales y disciplina operativa", legalNature: "Reglamentación subordinada" },
  ],

  // PARTE 3 — TIPOS DE CONFLICTO DOCUMENTAL
  conflictTypes: [
    {
      conflictCode: "TIPO_A",
      conflictName: "Conflicto Legal / Corporativo (Constitución vs Certificate of Incorporation / Ley de NJ)",
      exampleScenario: "Una cláusula constitucional eclesial contradice una disposición imperativa del Certificate of Incorporation radicado en Trenton o la ley de NJ.",
      proposedResolutionProcedure: "Prevalece el Certificate of Incorporation y la ley civil de New Jersey. Se redacta enmienda constitucional de armonización previa revisión del asesor legal.",
      legalReviewRequired: true,
      involvedDocuments: "REN-DOC-002 vs Certificate of Incorporation / N.J.S.A.",
    },
    {
      conflictCode: "TIPO_B",
      conflictName: "Conflicto Corporativo / Operativo (Bylaws vs Manual SOP)",
      exampleScenario: "Un manual departamental establece un límite de compras de $5,000 pero los Bylaws fijan firma conjunta a partir de $2,500.",
      proposedResolutionProcedure: "Prevalecen los Bylaws corporativos (REN-DOC-003). Se ajusta administrativamente el manual operativo mediante circular de tesorería.",
      legalReviewRequired: false,
      involvedDocuments: "REN-DOC-003 vs REN-DOC-010/Manuales",
    },
    {
      conflictCode: "TIPO_C",
      conflictName: "Conflicto Constitucional / Operativo (Constitución vs Manual Ministerial)",
      exampleScenario: "Un manual de discipulado fija un requisito de membresía incompatible con el Artículo 22 de la Constitución.",
      proposedResolutionProcedure: "Prevalece la Constitución (REN-DOC-002). El Consejo Ministerial revoca la disposición contradictoria del manual.",
      legalReviewRequired: false,
      involvedDocuments: "REN-DOC-002 vs Manuales Ministeriales",
    },
    {
      conflictCode: "TIPO_D",
      conflictName: "Conflicto Doctrinal (Declaración de Fe vs Texto Constitucional / Operativo)",
      exampleScenario: "Una norma operativa o un artículo constitucional contiene una formulación ambigua que desvirtúa un punto de la Declaración de Fe (REN-DOC-001).",
      proposedResolutionProcedure: "Prevalece de forma absoluta e inerrante la Declaración de Fe (REN-DOC-001) y las Sagradas Escrituras bajo dictamen del Pastor Fundador.",
      legalReviewRequired: false,
      involvedDocuments: "REN-DOC-001 vs REN-DOC-002 / Manuales",
    },
    {
      conflictCode: "TIPO_E",
      conflictName: "Conflicto Espiritual / Corporativo (Decisión Pastoral vs Impacto Fiduciario)",
      exampleScenario: "Una decisión de ordenación pastoral o apertura de misión genera obligaciones contractuales o compromisos inmobiliarios no presupuestados.",
      proposedResolutionProcedure: "La dimensión espiritual corresponde al Pastor Fundador; la formalización fiduciaria y contractual corresponde al Consejo de Gobierno mediante armonización fiduciaria previa.",
      legalReviewRequired: true,
      involvedDocuments: "REN-DOC-002 vs REN-DOC-003",
    },
  ],

  // PARTE 5 — MATRIZ DE SEPARACIÓN ENTRE ESFERA ESPIRITUAL Y CORPORATIVA (15 MATERIAS)
  separationMatrix: [
    {
      matter: "1. Doctrina y Teología Bíblica",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Declaración de Fe (REN-DOC-001)",
      institutionalAuthority: "Pastor Fundador exclusivamente",
      potentialConflict: "Interpretaciones teológicas divergentes en asambleas",
      legalReviewRequired: false,
    },
    {
      matter: "2. Liturgia, Culto y Sacramentos (Bautismos, Santa Cena)",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Constitución (Art. 9, 10, 11)",
      institutionalAuthority: "Pastor Fundador y Consejo Ministerial",
      potentialConflict: "Controversias litúrgicas",
      legalReviewRequired: false,
    },
    {
      matter: "3. Ordenación y Nombramientos Ministeriales",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Constitución (Art. 45)",
      institutionalAuthority: "Pastor Fundador",
      potentialConflict: "Reclamos laborales civiles por remoción pastoral",
      legalReviewRequired: true,
    },
    {
      matter: "4. Disciplina Eclesiástica y Restauración",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Manual de Disciplina (REN-DOC-011)",
      institutionalAuthority: "Consejo Ministerial",
      potentialConflict: "Demandas de miembros por difamación o debido proceso",
      legalReviewRequired: true,
    },
    {
      matter: "5. Calificación de Membresía Activa Eclesial",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Constitución (Art. 21, 22)",
      institutionalAuthority: "Pastores / Secretaría Eclesiástica",
      potentialConflict: "Impugnación de padrón electoral en asambleas",
      legalReviewRequired: true,
    },
    {
      matter: "6. Estructura Celular y Familias de Grupo",
      sphereType: "ESPIRITUAL_DOCTRINAL",
      primaryDocument: "Manual Celular (REN-DOC-006)",
      institutionalAuthority: "Pastor Principal / Líderes de Área",
      potentialConflict: "Discrepancias operativas entre supervisores",
      legalReviewRequired: false,
    },
    {
      matter: "7. Propiedad Inmobiliaria y Bienes Raíces",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "Articles of Incorporation / REN-DOC-003",
      institutionalAuthority: "Board of Trustees / Asamblea",
      potentialConflict: "Disputas de titularidad y registro de escrituras en NJ",
      legalReviewRequired: true,
    },
    {
      matter: "8. Contratación Mercantil y Arrendamientos",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "Bylaws (REN-DOC-003)",
      institutionalAuthority: "Consejo de Gobierno / Trustees",
      potentialConflict: "Firma de contratos sin autorización de quórum",
      legalReviewRequired: true,
    },
    {
      matter: "9. Cuentas Bancarias y Firmas Autorizadas",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "Bylaws (REN-DOC-003) / REN-DOC-010",
      institutionalAuthority: "Tesorero / Firmantes Designados por Board",
      potentialConflict: "Exigencias de bancos de resoluciones corporativas",
      legalReviewRequired: true,
    },
    {
      matter: "10. Cumplimiento Tributario IRS 501(c)(3) y Estado de NJ",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "Articles of Incorporation / N.J.S.A. 15A",
      institutionalAuthority: "Consejo de Gobierno / Contador Público",
      potentialConflict: "Riesgo de beneficio privado o lucro indebido",
      legalReviewRequired: true,
    },
    {
      matter: "11. Deberes Fiduciarios y Responsabilidad de Trustees",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "N.J.S.A. 15A:6-14 / Bylaws",
      institutionalAuthority: "Board of Trustees individualmente",
      potentialConflict: "Conflictos de interés o negligencia fiduciaria",
      legalReviewRequired: true,
    },
    {
      matter: "12. Sesiones y Quórums del Board of Trustees",
      sphereType: "CORPORATIVO_FIDUCIARIO",
      primaryDocument: "Bylaws (REN-DOC-003) / Art. 17",
      institutionalAuthority: "Board of Trustees",
      potentialConflict: "Nulidad de acuerdos por quórum defectuoso",
      legalReviewRequired: true,
    },
    {
      matter: "13. Asambleas Generales de Miembros (Voto Corporativo)",
      sphereType: "MIXTO_COORDINADO",
      primaryDocument: "Constitución (Art. 22) / Bylaws",
      institutionalAuthority: "Asamblea General de Miembros Activos",
      potentialConflict: "Disputas sobre qué materias exigen voto asambleario",
      legalReviewRequired: true,
    },
    {
      matter: "14. Modificación de Estatutos y Artículos Públicos",
      sphereType: "MIXTO_COORDINADO",
      primaryDocument: "Constitución (Art. 43) / N.J.S.A. 15A:9",
      institutionalAuthority: "Fundador + Board + Asamblea",
      potentialConflict: "Inscripción en Trenton de reformas no armonizadas",
      legalReviewRequired: true,
    },
    {
      matter: "15. Sucesión Pastoral con Presidencia Corporativa",
      sphereType: "MIXTO_COORDINADO",
      primaryDocument: "Constitución (Art. 13) / Bylaws (Art. 5)",
      institutionalAuthority: "Fundador / Comisión Mixta / Board",
      potentialConflict: "Traspaso de poderes bancarios y presidencia civil",
      legalReviewRequired: true,
    },
  ],

  // PARTE 6 — PROCEDIMIENTO INSTITUCIONAL PROPUESTO DE 12 PASOS (PROPUESTA NO ADOPTADA)
  resolutionProtocol: [
    { stepNumber: 1, stepName: "Detección Formal", description: "Cualquier oficial, pastor o miembro notifica por escrito la discrepancia a la Secretaría.", responsibleRole: "Notificante" },
    { stepNumber: 2, stepName: "Registro en Bitácora", description: "La Secretaría radica el expediente en el Registro Oficial de Conflictos Documentales.", responsibleRole: "Secretario Eclesiástico" },
    { stepNumber: 3, stepName: "Clasificación de Tipo", description: "Se tipifica el conflicto como Tipo A, B, C, D o E según la materia involucrada.", responsibleRole: "Comité de Normativa" },
    { stepNumber: 4, stepName: "Identificación de Documentos", description: "Se cotejan las cláusulas contradictorias en los documentos involucrados.", responsibleRole: "Comité de Normativa" },
    { stepNumber: 5, stepName: "Determinación de Ámbito", description: "Se define si el conflicto es estrictamente doctrinal, fiduciario o mixto.", responsibleRole: "Pastor Fundador / Consejo de Gobierno" },
    { stepNumber: 6, stepName: "Cotejo con Documento Superior", description: "Se revisa la regla de jerarquía aplicable en la materia.", responsibleRole: "Comité de Normativa" },
    { stepNumber: 7, stepName: "Audiencia de Liderazgo", description: "Se escucha a los líderes o directores de los departamentos afectados.", responsibleRole: "Consejo Ministerial / Consejo de Gobierno" },
    { stepNumber: 8, stepName: "Consulta Legal Externa (NJ)", description: "Si involucra ley civil, inmuebles, bancos o 501(c)(3), se remite al asesor legal de NJ.", responsibleRole: "Asesor Legal en New Jersey" },
    { stepNumber: 9, stepName: "Dictamen y Propuesta de Ajuste", description: "Se elabora el proyecto de armonización o enmienda correspondiente.", responsibleRole: "Comité de Normativa" },
    { stepNumber: 10, stepName: "Aprobación del Cuerpo Competente", description: "Votación por el órgano institucional facultado para reformar la norma subordinada.", responsibleRole: "Consejo de Gobierno / Ministerial" },
    { stepNumber: 11, stepName: "Adopción Oficial Solemne", description: "Firma y promulgación por el Pastor Fundador (ADOPT_OFFICIAL) cuando proceda.", responsibleRole: "Pastor Fundador" },
    { stepNumber: 12, stepName: "Inscripción y Custodia Histórica", description: "Registro del texto definitivo y custodia inmutable en el Archivo Institucional.", responsibleRole: "Secretaría General" },
  ],

  // PARTE 10 — OPCIONES INSTITUCIONALES EN ESTUDIO (PROPUESTAS NO ADOPTADAS)
  options: [
    {
      optionCode: "OPC-46-A",
      name: "Alternativa A: Jerarquía Piramidal Rígida y Unificada",
      description: "Establece una pirámide vertical estricta (Ley -> Certificate of Incorporation -> Bylaws -> Constitución -> Declaración de Fe -> Manuales) donde cada nivel inferior cede ante cualquier discrepancia con el superior.",
      advantages: [
        "Simplicidad formal aparente en la resolución de discrepancias textuales.",
      ],
      risks: [
        "Riesgo de subordinar indebidamente la doctrina bíblica interna a estatutos civiles operativos en controversias teológicas.",
      ],
      spiritualImpact: "Riesgo de secularización de materias de fe.",
      corporateImpact: "Alineación legal unificada pero rígida.",
      administrativeImpact: "Fácil de invocar administrativamente.",
      legalReviewNeed: "Revisión obligatoria por abogado de New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-46-B",
      name: "Alternativa B: Separación Estricta por Esferas de Competencia Soberana",
      description: "Divide los documentos en dos mundos autónomos: Esfera Civil/Fiduciaria (gobernada por Certificate/Bylaws/Board) y Esfera Espiritual/Doctrinal (gobernada por Sagradas Escrituras/Declaración de Fe/Constitución/Fundador), sin pirámide común.",
      advantages: [
        "Protección total de la doctrina y la libertad religiosa bajo la Primera Enmienda.",
        "Evita interferencias entre directores fiduciarios y el liderazgo pastoral.",
      ],
      risks: [
        "Complejidad para resolver zonas grises mixtas (ej. remociones pastorales con consecuencias económicas o traspaso de inmuebles).",
      ],
      spiritualImpact: "Máxima protección de la autoridad teocrática y doctrinal.",
      corporateImpact: "Requiere coordinación precisa en los Bylaws.",
      administrativeImpact: "Exige criterios claros para delimitar materias mixtas.",
      legalReviewNeed: "Revisión estatutaria por abogado de NJ.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-46-C",
      name: "Alternativa C: Modelo Híbrido Coordinado (Armonización Fiduciaria y Primacía Doctrinal)",
      description: "Reconoce la supremacía civil de las leyes de New Jersey y el Certificate en materia fiduciaria y patrimonial, y la primacía absoluta de la Declaración de Fe y la Constitución en materia doctrinal y de gobierno eclesiástico, con un protocolo formal de armonización en 12 pasos.",
      advantages: [
        "Equilibrio óptimo entre el blindaje jurídico civil ante cortes de NJ y la pureza bíblica teocrática.",
        "Mecanismo procedimental claro para resolver discrepancias sin litigios.",
      ],
      risks: [
        "Requiere capacitación de los oficiales sobre la frontera entre ambas esferas.",
      ],
      spiritualImpact: "Inerrancia bíblica y pureza doctrinal plenamente preservadas.",
      corporateImpact: "Cumplimiento fiduciario impecable y transparente en New Jersey.",
      administrativeImpact: "Alta certidumbre operativa y orden protocolar.",
      legalReviewNeed: "Validación por el asesor legal de la corporación en New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 11 — CUESTIONARIO JURÍDICO PARA EL ASESOR LEGAL DE NEW JERSEY (14 PREGUNTAS)
  attorneyQuestions: [
    {
      questionNumber: 1,
      questionText: "¿Cómo resuelven los tribunales de New Jersey un conflicto entre la Constitución eclesiástica interna y los Bylaws corporativos registrados bajo N.J.S.A. 15A?",
      consultationReason: "Conocer la jurisprudencia civil aplicable en disputas sobre validez de estatutos religiosos.",
      affectedDocument: "REN-DOC-002 vs REN-DOC-003",
      riskIfNotDefined: "Incertidumbre jurídica en caso de litigios contractuales o patrimoniales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 2,
      questionText: "¿Hasta qué punto la doctrina de abstención judicial en materia eclesiástica (First Amendment Ecclesiastical Abstention Doctrine) protege las decisiones doctrinales y disciplinarias frente a reclamos civiles?",
      consultationReason: "Blindar a la Iglesia de demandas por disciplina eclesiástica o remociones ministeriales.",
      affectedDocument: "REN-DOC-001 y REN-DOC-011",
      riskIfNotDefined: "Exposición a demandas por daños y perjuicios de miembros disciplinados.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 3,
      questionText: "¿Qué cláusula de prevalencia documental expresa es aconsejable incluir en los Bylaws (REN-DOC-003) para evitar colisiones con la Constitución de RENACER?",
      consultationReason: "Armonización estatutaria formal en New Jersey.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Interpretaciones contradictorias por oficiales o bancos.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 4,
      questionText: "¿Prevalece imperativamente el Certificate of Incorporation registrado en Trenton sobre cualquier disposición eclesiástica en materia de objeto social y disolución?",
      consultationReason: "Asegurar que la cláusula de disolución no colisione con el documento público.",
      affectedDocument: "Certificate of Incorporation y REN-DOC-002",
      riskIfNotDefined: "Nulidad de acuerdos de disolución o liquidación.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 5,
      questionText: "¿Cómo deben delimitarse en los Bylaws las facultades del Board of Trustees para que no invadan la autoridad espiritual del Pastor Fundador?",
      consultationReason: "Separación clara entre deberes fiduciarios de directores y ministerio pastoral.",
      affectedDocument: "REN-DOC-002 (Art. 17, 19) y REN-DOC-003",
      riskIfNotDefined: "Conflictos de poder entre directores y pastores.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 6,
      questionText: "¿Qué jerarquía probatoria exige una entidad bancaria de New Jersey cuando se presenta un conflicto entre resoluciones de la Asamblea y acuerdos del Board?",
      consultationReason: "Garantizar la operatividad continua de cuentas corrientes e hipotecas.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Congelamiento preventivo de cuentas bancarias institucionales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 7,
      questionText: "¿Es jurídicamente exigible que las enmiendas a los manuales operativos (SOPs) no requieran radicación estatal si no alteran los Bylaws?",
      consultationReason: "Facilitar la agilidad administrativa sin sobrecostos notariales o registrales.",
      affectedDocument: "REN-DOC-004 a REN-DOC-020",
      riskIfNotDefined: "Cargas burocráticas innecesarias en cambios de procedimientos operativos.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 8,
      questionText: "¿Qué recaudos contractuales deben tomarse para que los contratos con proveedores reconozcan expresamente los límites fiduciarios fijados en los Bylaws?",
      consultationReason: "Evitar que administradores comprometan fondos por encima de sus límites autorizados.",
      affectedDocument: "REN-DOC-003 y REN-DOC-010",
      riskIfNotDefined: "Obligaciones vinculantes frente a terceros de buena fe no autorizadas por el Board.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 9,
      questionText: "¿Qué efecto tiene en New Jersey una disposición constitucional interna que restrinja la enajenación de inmuebles al voto de 2/3 de la Asamblea?",
      consultationReason: "Validar que la restricción sea oponible en el Registro de la Propiedad del Condado de Passaic, NJ.",
      affectedDocument: "REN-DOC-002 (Art. 17, 22) y escrituras públicas",
      riskIfNotDefined: "Venta o gravamen de inmuebles sin la debida autorización asamblearia.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 10,
      questionText: "¿Cómo debe estructurarse la cláusula de arbitraje eclesiástico interno para que sea vinculante bajo el New Jersey Alternative Procedure for Dispute Resolution Act?",
      consultationReason: "Evitar litigios judiciales ordinarios entre miembros conforme a 1 Corintios 6:1-8.",
      affectedDocument: "REN-DOC-002 (Art. 42)",
      riskIfNotDefined: "Rechazo judicial de la cláusula de arbitraje por defectos formales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 11,
      questionText: "¿Qué impacto tributario tiene una discrepancia entre la Constitución y el Formulario 1023 de solicitud de exención fiscal 501(c)(3)?",
      consultationReason: "Preservación absoluta del estatus de exención tributaria federal.",
      affectedDocument: "REN-DOC-002 y expediente IRS",
      riskIfNotDefined: "Observaciones o revocación de exención fiscal por el IRS.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 12,
      questionText: "¿Es legalmente válida la cláusula que establece que, en materia de fe y doctrina, la Declaración de Fe prevalece sobre cualquier otra norma interna?",
      consultationReason: "Garantizar la inmutabilidad de la doctrina pentecostal frente a cualquier impugnación.",
      affectedDocument: "REN-DOC-001 y REN-DOC-002",
      riskIfNotDefined: "Intentos de litigar controversias teológicas ante tribunales civiles.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 13,
      questionText: "¿Qué procedimiento de notificación formal debe seguirse si se detecta que una norma de la Constitución colisiona con una reforma legislativa reciente de NJ?",
      consultationReason: "Actualización normativa preventiva y ordenada.",
      affectedDocument: "REN-DOC-002 (Art. 43, 46)",
      riskIfNotDefined: "Mantenimiento de normas inaplicables o contrarias a la ley.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 14,
      questionText: "¿Debe incluirse en los manuales departamentales una cláusula estándar de subordinación constitucional obligatoria?",
      consultationReason: "Blindaje automático de todos los SOPs operativos frente a la Carta Magna.",
      affectedDocument: "REN-DOC-004 a REN-DOC-020",
      riskIfNotDefined: "Proliferación de manuales con normas contradictorias no detectadas.",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 46
  proposedDraftText: `ARTÍCULO 46 — PREVALENCIA EN CONFLICTO DOCUMENTAL Y ARMONIZACIÓN NORMATIVA (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 46.1. Reconocimiento del Orden Normativo y Primacía Bíblica.
La estructura normativa de RENACER CHURCH se fundamenta en la sujeción incondicional a las Sagradas Escrituras y en el fiel cumplimiento del ordenamiento jurídico aplicable a corporaciones religiosas sin fines de lucro en el Estado de New Jersey. Toda norma, reglamento, manual o acuerdo interno deberá interpretarse y aplicarse de manera armónica, preservando la unidad institucional y la pureza doctrinal de la Iglesia.

Sección 46.2. Separación de Esferas y Regla de Prevalencia.
En caso de conflicto, contradicción o discrepancia entre documentos institucionales, regirán los siguientes criterios de prevalencia según la naturaleza de la materia:
a) Esfera Doctrinal y Espiritual: Las Sagradas Escrituras y la Declaración de Fe de RENACER CHURCH (REN-DOC-001) poseen primacía absoluta sobre cualquier otra disposición constitucional, manual, reglamento o acuerdo eclesiástico. La interpretación auténtica y custodia de la doctrina bíblica corresponde con soberanía exclusiva al Pastor Fundador, oído el Consejo Ministerial.
b) Esfera Corporativa y Fiduciaria: Las leyes imperativas del Estado de New Jersey y el Certificate of Incorporation registrado prevalecen sobre cualquier disposición interna en materia de personería civil, deberes fiduciarios de directores, relaciones con entidades bancarias, exención fiscal 501(c)(3) y liquidación patrimonial.
c) Esfera Constitucional y Ministerial: La presente Constitución (REN-DOC-002) prevalece de forma plena sobre los manuales departamentales, reglamentos de áreas, resoluciones operativas y procedimientos estándar (SOPs).

Sección 46.3. Relación Armónica entre Constitución y Bylaws.
La Constitución (REN-DOC-002) y los Bylaws corporativos (REN-DOC-003) constituyen instrumentos complementarios de gobierno eclesial y corporativo respectivamente. Ninguna enmienda a los Bylaws podrá contradecir las cláusulas protegidas, principios de gobierno o autoridad fundacional establecidos en esta Constitución, y ninguna reforma constitucional podrá desatender los requisitos fiduciarios civiles indispensables bajo las leyes de New Jersey.

Sección 46.4. Protocolo Formal de Resolución de Conflictos.
Cuando se detecte una discrepancia normativa o ambigüedad entre documentos institucionales, la Secretaría General radicará el expediente ante el Comité de Normativa para su evaluación. Si la discrepancia involucra materias legales, bancarias o patrimoniales, se requerirá preceptivamente el dictamen formal del asesor legal en New Jersey antes de elevar la propuesta de armonización o enmienda ante el Consejo de Gobierno y el Pastor Fundador para su adopción oficial solemne.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle46Dossier(): Article46DocumentPrecedenceDossier {
  return ARTICLE_46_DOSSIER;
}
