// ============================================================================
// RENACER CHURCH MAESTRO — FASE 33: SERVICIO DE RESOLUCIÓN CONTROLADA
// DE LAS 6 MATERIAS PENDIENTES (REN-DOC-002)
// ============================================================================

export type PendingMatterStatus =
  | "DEFINIDO"
  | "PENDIENTE"
  | "PENDIENTE_DEFINIR"
  | "REQUIERE_REVISION_LEGAL"
  | "NO_ADOPTADO";

export type TargetDocumentLayer =
  | "CONSTITUCION"
  | "CONSTITUCION_BYLAWS"
  | "BYLAWS"
  | "ARTICLES_OF_INCORPORATION"
  | "DECLARACION_DE_FE"
  | "MANUAL_REGLAMENTO";

export interface PendingMatterDetail {
  id: string;
  articleNumber: number;
  matterTitle: string;
  currentStatus: PendingMatterStatus;
  riskLevel: "CRITICO" | "ALTO" | "MEDIO" | "BAJO";
  relatedDecisionIds: string[];
  definedCriteria: string[];
  pendingQuestions: string[];
  legalReviewRequired: boolean;
  legalReviewNotes: string;
  targetDocument: TargetDocumentLayer;
  whatBelongsToConstitution: string;
  whatBelongsToBylaws: string;
  whatBelongsToArticles: string;
  whatBelongsToManuals: string;
  whatMustNotBeDefinedYet: string;
  options: string[];
  recommendation: string;
  finalStatus: PendingMatterStatus;
}

export interface DocumentPrecedenceItem {
  documentName: string;
  layerFunction: string;
  authority: string;
  limits: string;
  possibleConflict: string;
  legalReviewNotes: string;
}

export const SIX_PENDING_MATTERS: PendingMatterDetail[] = [
  // 1. ARTÍCULO 13 — SUCESIÓN DEL PASTOR FUNDADOR
  {
    id: "matter-art-13",
    articleNumber: 13,
    matterTitle: "Sucesión del Pastor Fundador y Continuidad Institucional",
    currentStatus: "PENDIENTE_DEFINIR",
    riskLevel: "CRITICO",
    relatedDecisionIds: ["DEC-DEF-001", "DEC-PEND-001", "DEC-DEF-177"],
    definedCriteria: [
      "El Pastor Fundador Luis Uchubanda Falconí conserva la autoridad espiritual vitalicia mientras viva y conserve capacidad mental.",
      "El Pastor Fundador puede designar exclusivamente por escrito en vida a su sucesor ministerial.",
      "En caso de incapacidad médica, se requiere dictamen unánime de al menos 2 médicos especialistas certificados e independientes.",
      "Si ocurre vacancia definitiva imprevista sin designación en vida, el Consejo de Gobierno y el Consejo Ministerial activan conjuntamente el protocolo.",
      "El candidato a sucesor debe ser miembro activo, ministro ordenado de RENACER, graduado del Seminario Bíblico RENACER, con buen testimonio y alineación doctrinal.",
    ],
    pendingQuestions: [
      "¿Cuáles son los plazos exactos de la comisión de transición interina si no hay sucesor designado?",
      "¿Qué porcentaje exacto de ratificación asamblearia se requerirá para confirmar al sucesor propuesto colegiadamente?",
      "¿Cómo se delimitan los poderes notariales fiduciarios corporativos de New Jersey frente a la investidura espiritual?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "Revisar conformidad con poderes médicos (Healthcare Proxy), poderes fiduciarios duraderos (Durable Power of Attorney) y sucesión de Trustees bajo N.J.S.A. Title 16.",
    targetDocument: "CONSTITUCION",
    whatBelongsToConstitution: "Principios teológicos de sucesión, perfil bíblico del sucesor, autoridad exclusiva de designación en vida del Fundador y protocolo de emergencia colegiado.",
    whatBelongsToBylaws: "Procedimiento asambleario de ratificación, registro de actas corporativas y notificación a entidades bancarias y del Estado de NJ.",
    whatBelongsToArticles: "Cláusula de no interrupción de la personalidad jurídica corporativa sin fines de lucro.",
    whatBelongsToManuals: "Ceremonial litúrgico de investidura y traspaso de manto ministerial (REN-DOC-012).",
    whatMustNotBeDefinedYet: "NO inventar nombres de personas sucesoras, NO alterar la autoridad del Fundador, NO asumir plazos no ratificados.",
    options: [
      "Opción A: Designación directa por documento sucesorio reservado del Fundador con ratificación congregacional.",
      "Opción B: Propuesta colegiada unánime de Consejo de Gobierno + Consejo Ministerial en caso de vacancia imprevista.",
    ],
    recommendation: "Mantener estrictamente en PENDIENTE_DEFINIR hasta que el Pastor Fundador y el abogado corporativo de NJ emitan la redacción final.",
    finalStatus: "PENDIENTE_DEFINIR",
  },

  // 2. ARTÍCULO 17 — QUÓRUMS Y PODERES CORPORATIVOS DEL CONSEJO
  {
    id: "matter-art-17",
    articleNumber: 17,
    matterTitle: "Quórums y Poderes Corporativos del Consejo de Gobierno",
    currentStatus: "PENDIENTE_DEFINIR",
    riskLevel: "ALTO",
    relatedDecisionIds: ["DEC-DEF-002", "DEC-DEF-004"],
    definedCriteria: [
      "Consejo de Gobierno compuesto de 3 a 5 miembros activos.",
      "Quórums definidos: 3 miembros -> quórum 2; 4 miembros -> quórum 3; 5 miembros -> quórum 3.",
      "Decisiones ordinarias por mayoría simple de presentes con quórum.",
      "Decisiones extraordinarias requieren 2/3 del Consejo + aprobación del Pastor Fundador.",
      "Empate en votación equivale a propuesta rechazada.",
      "Período de servicio de 2 años renovable (Pastor propone -> Consejo evalúa -> Congregación confirma).",
    ],
    pendingQuestions: [
      "¿Cuáles son los umbrales monetarios exactos ($) que convierten un gasto o contrato en 'extraordinario'?",
      "¿Cómo se armonizan los poderes corporativos de los Trustees de New Jersey con la autoridad del Consejo de Gobierno?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "Revisar compatibilidad de la tabla de quórum y mayorías de 2/3 con el Nonprofit Corporation Act de New Jersey (N.J.S.A. 15A:1-1 et seq.).",
    targetDocument: "CONSTITUCION_BYLAWS",
    whatBelongsToConstitution: "Estructura teocrática, composición (3-5 miembros), períodos de servicio y catálogo de materias extraordinarias.",
    whatBelongsToBylaws: "Mecánica corporativa detallada, convocatorias de Trustees, firma de cheques, límites cuantitativos de gastos y formalidades de votación.",
    whatBelongsToArticles: "Número mínimo de directores/trustees registrados y cláusulas de inmunidad corporativa.",
    whatBelongsToManuals: "Reglamento interno de sesiones del Consejo (REN-DOC-004).",
    whatMustNotBeDefinedYet: "NO inventar cantidades monetarias no acordadas ni quórums adicionales no autorizados.",
    options: [
      "Opción A: Fijar en Bylaws un umbral porcentual del presupuesto anual para calificar contratos extraordinarios.",
      "Opción B: Establecer un monto fijo indexable que requiera aprobación de 2/3 y visto bueno del Pastor Fundador.",
    ],
    recommendation: "Mantener en PENDIENTE_DEFINIR / Coordinación con Bylaws bajo revisión legal de New Jersey.",
    finalStatus: "PENDIENTE_DEFINIR",
  },

  // 3. ARTÍCULO 22 — DERECHOS ESPECÍFICOS DE VOTO Y PADRÓN
  {
    id: "matter-art-22",
    articleNumber: 22,
    matterTitle: "Derechos Específicos de Voto y Calificación Congregacional",
    currentStatus: "PENDIENTE_DEFINIR",
    riskLevel: "ALTO",
    relatedDecisionIds: ["DEC-DEF-001", "DEC-DEF-002"],
    definedCriteria: [
      "Voto reservado a miembros formales y activos de RENACER.",
      "Requisitos de miembro activo: fe en Cristo, bautismo por inmersión, Escuela de Discípulos y vida de comunión y sostenimiento.",
      "Quórum de Asamblea Congregacional del 50% de miembros activos con derecho a voto.",
      "Mayoría simple para materias ordinarias; mayoría de 2/3 para materias extraordinarias congregacionales.",
    ],
    pendingQuestions: [
      "¿Cuáles son las materias corporativas exclusivas donde la ley de NJ exige voto de la membresía frente a las materias delegadas al Board?",
      "¿Qué mecanismo formal de impugnación o resolución de disputas de padrón electoral rige antes de una asamblea?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "Determinar si la corporación opera con miembros votantes estatutarios (Voting Members) o miembros eclesiásticos con Board autoperpetuado bajo N.J.S.A. Title 16.",
    targetDocument: "CONSTITUCION_BYLAWS",
    whatBelongsToConstitution: "Requisitos espirituales de membresía activa, derecho a voz y voto en asambleas ordinarias y extraordinarias, y quórum del 50%.",
    whatBelongsToBylaws: "Procedimiento de emisión de votos, actas asamblearias, padrón electoral y reglas de asambleas no presenciales / telemáticas.",
    whatBelongsToArticles: "Cláusula corporativa de definición de miembros con derecho a voto.",
    whatBelongsToManuals: "Manual de Membresía y Formulario de Solicitud (REN-DOC-005, REN-DOC-020).",
    whatMustNotBeDefinedYet: "NO inventar edades ni antigüedades no aprobadas, NO modificar el quórum del 50%.",
    options: [
      "Opción A: Estructura bicameral eclesial (Voto congregacional para inmuebles/disolución y confirmación del Consejo de Gobierno).",
      "Opción B: Consejo fiduciario con ratificación congregacional calificada.",
    ],
    recommendation: "Mantener en PENDIENTE_DEFINIR hasta emitir la redacción final coordinada con los Bylaws (REN-DOC-003).",
    finalStatus: "PENDIENTE_DEFINIR",
  },

  // 4. ARTÍCULO 43 — PROCEDIMIENTO DE ENMIENDA Y REFORMA CONSTITUCIONAL
  {
    id: "matter-art-43",
    articleNumber: 43,
    matterTitle: "Procedimiento de Enmienda y Reforma Constitucional",
    currentStatus: "PENDIENTE_DEFINIR",
    riskLevel: "CRITICO",
    relatedDecisionIds: ["DEC-DEF-001", "DEC-DEF-002"],
    definedCriteria: [
      "La Constitución no puede enmendarse de manera que altere la autoridad inerrante de las Escrituras o el propósito supremo espiritual.",
      "El Pastor Fundador conserva la potestad de iniciativa en materias doctrinales y de gobierno fundacional.",
      "Estructura preliminar en tres niveles de enmienda: Nivel A (Doctrina y propósito), Nivel B (Estructura de gobierno), Nivel C (Reglamentos operativos).",
    ],
    pendingQuestions: [
      "¿Cuáles son las mayorías exactas requeridas para enmiendas de Nivel B (2/3 del Consejo + 2/3 de Asamblea vs. consentimiento del Fundador)?",
      "¿Cuáles son las cláusulas pétreas inmodificables de la corporación bajo la ley de New Jersey?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "Revisar requisitos de enmienda de Certificate of Incorporation y Bylaws ante el Departamento del Tesoro de New Jersey.",
    targetDocument: "CONSTITUCION",
    whatBelongsToConstitution: "Cláusulas pétreas doctrinales, iniciativa de reforma del Fundador y mayorías requeridas para reformar la Carta Magna.",
    whatBelongsToBylaws: "Procedimiento de notificación de propuestas de enmienda con 30 días de anticipación y registro de resoluciones.",
    whatBelongsToArticles: "Procedimiento de enmienda del Certificate of Incorporation conforme a N.J.S.A.",
    whatBelongsToManuals: "Formato y registro documental de enmiendas históricas (REN-DOC-019).",
    whatMustNotBeDefinedYet: "NO inventar porcentajes ni quórums no acordados, NO suprimir la potestad del Pastor Fundador.",
    options: [
      "Opción A: Nivel A (Inmutable salvo iniciativa del Fundador) / Nivel B (2/3 Consejo + 2/3 Asamblea) / Nivel C (Mayoría de Consejo).",
      "Opción B: Mayoría calificada de 3/4 para cualquier enmienda estructural.",
    ],
    recommendation: "Mantener formalmente en PENDIENTE_DEFINIR hasta la consolidación de la política final de enmiendas.",
    finalStatus: "PENDIENTE_DEFINIR",
  },

  // 5. ARTÍCULO 46 — PREVALENCIA EN CONFLICTO DOCUMENTAL E INTERPRETACIÓN
  {
    id: "matter-art-46",
    articleNumber: 46,
    matterTitle: "Prevalencia en Conflicto Documental e Interpretación",
    currentStatus: "REQUIERE_REVISION_LEGAL",
    riskLevel: "CRITICO",
    relatedDecisionIds: ["DEC-DEF-001", "DEC-DEF-002"],
    definedCriteria: [
      "Jerarquía interna planificada: 1. Ley aplicable -> 2. Articles of Incorporation -> 3. Bylaws -> 4. Constitución -> 5. Declaración de Fe -> 6. Manuales -> 7. Reglamentos -> 8. SOPs.",
      "Ningún documento interno puede pretender prevalecer sobre la legislación civil aplicable de New Jersey o Estados Unidos.",
      "En materias puramente doctrinales y espirituales, las Sagradas Escrituras y la Declaración de Fe rigen la vida de fe de la Iglesia.",
    ],
    pendingQuestions: [
      "¿Cómo se resuelve un posible conflicto entre una disposición de la Constitución y una norma de los Bylaws corporativos bajo la doctrina de no interferencia judicial eclesiástica?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "Dictamen legal corporativo requerido para asegurar que los Bylaws y la Constitución no colisionen con los Articles of Incorporation registrados en Trenton, NJ.",
    targetDocument: "CONSTITUCION",
    whatBelongsToConstitution: "Principio de primacía bíblica en lo eclesial y orden de jerarquía institucional interna.",
    whatBelongsToBylaws: "Regla de prevalencia corporativa en materias fiduciarias y comerciales civiles.",
    whatBelongsToArticles: "Supremacía legal corporativa como documento fundacional público ante el Estado.",
    whatBelongsToManuals: "Regla de subordinación de manuales y procedimientos operativos frente a la Constitución.",
    whatMustNotBeDefinedYet: "NO afirmar que la Constitución prevalece automáticamente sobre la ley civil de New Jersey.",
    options: [
      "Opción A: Cláusula de separación dual (Prevalencia de Articles/Bylaws en lo civil/fiduciario y prevalencia de Constitución/Doctrina en lo espiritual/eclesial).",
      "Opción B: Pirámide documental unificada subordinada a la ley de New Jersey.",
    ],
    recommendation: "Mantener en REQUIERE_REVISION_LEGAL / PENDIENTE_DEFINIR hasta recibir el dictamen del abogado corporativo de NJ.",
    finalStatus: "REQUIERE_REVISION_LEGAL",
  },

  // 6. ARTÍCULO 47 — FECHA DE VIGENCIA OFICIAL Y PROMULGACIÓN
  {
    id: "matter-art-47",
    articleNumber: 47,
    matterTitle: "Fecha de Vigencia Oficial y Promulgación",
    currentStatus: "PENDIENTE_DEFINIR",
    riskLevel: "CRITICO",
    relatedDecisionIds: ["DEC-DEF-001"],
    definedCriteria: [
      "REN-DOC-002 permanece estrictamente en BORRADOR EN REDACCIÓN v0.1 (NO ADOPTADA).",
      "La entrada en vigor oficial solo podrá producirse mediante el acto formal y solemne de adopción por el Pastor Fundador y los órganos correspondientes.",
      "0 fechas ficticias, 0 firmas ficticias, 0 actas ficticias.",
    ],
    pendingQuestions: [
      "¿Cuándo se celebrará la sesión formal de consideración y adopción de la Constitución por el Pastor Fundador?",
    ],
    legalReviewRequired: true,
    legalReviewNotes: "La fecha de vigencia debe coordinarse con la fecha de efectividad del registro corporativo ante el Estado de NJ y la adopción formal.",
    targetDocument: "CONSTITUCION",
    whatBelongsToConstitution: "Cláusula formal de vigencia sujeta al acto de adopción.",
    whatBelongsToBylaws: "Fecha de efectividad de los estatutos corporativos.",
    whatBelongsToArticles: "Fecha de radicación del Certificate of Incorporation en New Jersey.",
    whatBelongsToManuals: "Fecha de puesta en vigor de los reglamentos operativos.",
    whatMustNotBeDefinedYet: "NO colocar fecha de vigencia, NO asumir fecha del archivo ni fecha del build.",
    options: [
      "Opción A: Vigencia a partir del día siguiente a la firma solemne del Pastor Fundador y ratificación.",
      "Opción B: Vigencia diferida sujeta a la aprobación conjunta de los Bylaws.",
    ],
    recommendation: "Mantener estrictamente en PENDIENTE_DEFINIR sin inventar fechas de calendario.",
    finalStatus: "PENDIENTE_DEFINIR",
  },
];

export const DOCUMENT_PRECEDENCE_MATRIX: DocumentPrecedenceItem[] = [
  {
    documentName: "Legislación Aplicable (New Jersey / Federal EE.UU.)",
    layerFunction: "Marco legal civil, penal, laboral y tributario (IRS 501(c)(3)).",
    authority: "Estado de New Jersey / Gobierno Federal de EE.UU.",
    limits: "Sujeto a las cláusulas de libertad religiosa de la Primera Enmienda.",
    possibleConflict: "Normas internas que pretendan desconocer leyes imperativas de NJ.",
    legalReviewNotes: "Primacía absoluta en el orden civil y fiduciario.",
  },
  {
    documentName: "Articles of Incorporation (REN-DOC-003)",
    layerFunction: "Nacimiento corporativo, objeto legal, trustees iniciales y disolución.",
    authority: "Departamento del Tesoro del Estado de New Jersey.",
    limits: "No regula la doctrina ni la liturgia eclesiástica.",
    possibleConflict: "Contradicciones entre el nombre legal o cláusula de disolución y la Constitución.",
    legalReviewNotes: "Requiere registro oficial ante el Estado de NJ.",
  },
  {
    documentName: "Bylaws Corporativos (REN-DOC-003)",
    layerFunction: "Mecánica corporativa, quórums de trustees, contratos y cuentas bancarias.",
    authority: "Board of Trustees / Consejo de Gobierno.",
    limits: "Subordinados a los Articles of Incorporation y a la ley de NJ.",
    possibleConflict: "Fijación de quórums que contradigan la Constitución o la ley.",
    legalReviewNotes: "Revisión obligatoria por abogado de New Jersey.",
  },
  {
    documentName: "Constitución de RENACER (REN-DOC-002)",
    layerFunction: "Carta Magna de gobierno eclesiástico, identidad, ministerios y sucesión.",
    authority: "Pastor Fundador y órganos institucionales de RENACER.",
    limits: "No sustituye los Articles ni la ley civil en materias fiduciarias.",
    possibleConflict: "Pretender gobernar actos corporativos sin su correlato en Bylaws.",
    legalReviewNotes: "Revisión final de compatibilidad eclesiástica y corporativa.",
  },
  {
    documentName: "Declaración de Fe (REN-DOC-001)",
    layerFunction: "Fundamento doctrinal confesional de 20 artículos bíblicos.",
    authority: "Soberanía doctrinal exclusiva del Pastor Fundador.",
    limits: "Estrictamente doctrinal y espiritual; inmutable.",
    possibleConflict: "Alteraciones lingüísticas no autorizadas por el Fundador.",
    legalReviewNotes: "Protegida bajo la cláusula eclesiástica de libertad de culto.",
  },
  {
    documentName: "Manuales y Reglamentos (REN-DOC-004 a REN-DOC-020)",
    layerFunction: "Procedimientos operativos, currículos, credenciales y protocolos.",
    authority: "Consejo Ministerial y Consejos de Área.",
    limits: "Subordinados a la Constitución y Declaración de Fe.",
    possibleConflict: "Reglamentos que impongan cargas contrarias a la Constitución.",
    legalReviewNotes: "Revisión en políticas de protección de menores (REN-DOC-014).",
  },
];

export function getSixPendingMatters(): PendingMatterDetail[] {
  return SIX_PENDING_MATTERS;
}

export function getPendingMatterByArticle(articleNumber: number): PendingMatterDetail | undefined {
  return SIX_PENDING_MATTERS.find((m) => m.articleNumber === articleNumber);
}
