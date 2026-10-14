// ============================================================================
// RENACER CHURCH MAESTRO — FASE 43: EXPEDIENTE MAESTRO DE DECISIONES
// AGENDA INSTITUCIONAL DEL PASTOR FUNDADOR LUIS UCHUBANDA FALCONÍ
// ============================================================================

export type DecisionCategoryType =
  | "CATEGORIA_A_YA_DEFINIDO"
  | "CATEGORIA_B_DECISION_PENDIENTE"
  | "CATEGORIA_C_REQUIERE_REVISION_LEGAL"
  | "CATEGORIA_D_PROPUESTA_NO_ADOPTADA";

export type DecisionActionStatus =
  | "DEFINIDO"
  | "DECISION_PENDIENTE"
  | "REQUIERE_REVISION_LEGAL"
  | "PROPUESTA"
  | "NO_REQUIERE_DECISION";

export interface MasterAgendaItemRow {
  agendaId: string; // DF-001 a DF-006 o HIST-001+
  articleNumber: 13 | 17 | 22 | 43 | 46 | 47;
  matter: string;
  category: DecisionCategoryType;
  status: DecisionActionStatus;
  whatIsDefined: string;
  whatIsPending: string;
  whyItMatters: string;
  optionsAvailable: { code: string; label: string; consequence: string; recommendation?: boolean }[];
  legalReviewRequirement: "NO_REQUIERE_REVISION_LEGAL" | "REQUIERE_REVISION_LEGAL" | "DEPENDE_DE_OPINION_LEGAL";
  affectedDocuments: string;
  sourceDecision: string;
  dossierPath: string;
  futureAnswerSlot: {
    realDate: string; // Vacio
    founderAnswer: string; // Vacio
    observations: string; // Vacio
    status: "PENDIENTE";
  };
}

export interface PastorFounderMasterDecisionAgenda {
  title: string;
  founderName: "Luis Uchubanda Falconí";
  churchName: "RENACER CHURCH, INC.";
  location: "Paterson, New Jersey";
  constitutionStatus: {
    code: "REN-DOC-002";
    version: "0.1";
    status: "EN_REDACCION";
    adoption: "NO ADOPTADA";
  };
  totalHistoricalDecisions: 107;
  totalPendingPastorDecisions: 6;
  categoriesSummary: {
    alreadyDefinedCount: number;
    pendingPastorDecisionsCount: number;
    requiresLegalReviewCount: number;
    proposalsAvailableCount: number;
  };
  agendaItems: MasterAgendaItemRow[];
}

export const PASTOR_FOUNDER_AGENDA: PastorFounderMasterDecisionAgenda = {
  title: "Expediente Maestro de Decisiones del Pastor Fundador",
  founderName: "Luis Uchubanda Falconí",
  churchName: "RENACER CHURCH, INC.",
  location: "Paterson, New Jersey",
  constitutionStatus: {
    code: "REN-DOC-002",
    version: "0.1",
    status: "EN_REDACCION",
    adoption: "NO ADOPTADA",
  },
  totalHistoricalDecisions: 107,
  totalPendingPastorDecisions: 6,
  categoriesSummary: {
    alreadyDefinedCount: 12,
    pendingPastorDecisionsCount: 6,
    requiresLegalReviewCount: 6,
    proposalsAvailableCount: 6,
  },
  agendaItems: [
    // -------------------------------------------------------------------------
    // ARTÍCULO 13 — SUCESIÓN DEL PASTOR FUNDADOR
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-13-01",
      articleNumber: 13,
      matter: "Autoridad Espiritual Vitalicia del Pastor Fundador",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "El Pastor Fundador ejerce el liderazgo pastoral supremo y vitalicio conforme al llamamiento divino originario (DEC-DEF-001).",
      whatIsPending: "Nada. Materia plenamente resuelta en el Registro Maestro.",
      whyItMatters: "Principio fundacional inmutable de gobierno teocrático.",
      optionsAvailable: [],
      legalReviewRequirement: "NO_REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-001 y REN-DOC-002 (Art. 13)",
      sourceDecision: "DEC-DEF-001 (Fundación e Identidad)",
      dossierPath: "/constitucion/decision-pastor-fundador/13",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-001", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "HIST-13-02",
      articleNumber: 13,
      matter: "Protocolo de Incapacidad Médica (2 Médicos Independientes)",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "La incapacidad sólo puede determinarse por dictamen coincidente de dos médicos especialistas independientes de New Jersey (DEC-DEF-002).",
      whatIsPending: "Nada. Garantía médica objetiva inmutable.",
      whyItMatters: "Protege la estabilidad institucional e impide falsas declaraciones de incapacidad.",
      optionsAvailable: [],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 13)",
      sourceDecision: "DEC-DEF-002 (Gobierno Institucional)",
      dossierPath: "/constitucion/decision-pastor-fundador/13",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-002", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-001",
      articleNumber: 13,
      matter: "Plazo de Comisión Interina y Porcentaje de Ratificación del Sucesor",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Comisión Mixta de Emergencia, prohibición de venta de inmuebles durante el interinato y ratificación asamblearia.",
      whatIsPending: "Fijar si la comisión interina dura un máximo de 90 o 180 días, y si la asamblea ratifica por Mayoría Simple o Mayoría de 2/3.",
      whyItMatters: "Define la duración del gobierno de emergencia y el respaldo congregacional indispensable del nuevo Pastor Principal.",
      optionsAvailable: [
        { code: "OPC-13-A", label: "Plazo de 180 días + Ratificación por Mayoría Simple (50%+1)", consequence: "Mayor tiempo de discernimiento ministerial y ratificación ágil.", recommendation: true },
        { code: "OPC-13-B", label: "Plazo de 90 días + Ratificación por Mayoría Calificada de 2/3", consequence: "Transición rápida y exigencia de consenso congregacional muy alto." },
        { code: "OPC-13-C", label: "Plazo de 180 días + Ratificación por 2/3 de la Asamblea", consequence: "Máxima prudencia temporal y máximo consenso congregacional." },
      ],
      legalReviewRequirement: "DEPENDE_DE_OPINION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 13) y REN-DOC-003 (Bylaws)",
      sourceDecision: "DEC-PEND-001 (Sucesión Institucional)",
      dossierPath: "/constitucion/decision-pastor-fundador/13",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },

    // -------------------------------------------------------------------------
    // ARTÍCULO 17 — QUÓRUMS Y PODERES CORPORATIVOS
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-17-01",
      articleNumber: 17,
      matter: "Composición del Consejo (3 a 5 miembros) y Tabla de Quórum",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "Consejo integrado por 3 a 5 directores. Quórums: 3 miembros -> quórum 2; 4 miembros -> quórum 3; 5 miembros -> quórum 3 (DEC-DEF-002).",
      whatIsPending: "Nada. Tabla escalonada aprobada institucionalmente.",
      whyItMatters: "Garantiza la operatividad fiduciaria sin parálisis del Board.",
      optionsAvailable: [],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 17) y REN-DOC-003",
      sourceDecision: "DEC-DEF-002 (Gobierno Institucional)",
      dossierPath: "/constitucion/decision-pastor-fundador/17",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-002", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "HIST-17-02",
      articleNumber: 17,
      matter: "Régimen de Mayorías y Regla de Desempate del Consejo",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "Mayoría simple para actos ordinarios; Mayoría de 2/3 + V.B. del Fundador para actos extraordinarios; en caso de empate la moción queda desestimada (DEC-DEF-002).",
      whatIsPending: "Nada. Régimen fiduciario cerrado.",
      whyItMatters: "Evita concentración unipersonal indebida en decisiones administrativas.",
      optionsAvailable: [],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 17)",
      sourceDecision: "DEC-DEF-002",
      dossierPath: "/constitucion/decision-pastor-fundador/17",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-002", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-002",
      articleNumber: 17,
      matter: "Umbral Económico Cuantitativo ($) para Contratos Extraordinarios en Bylaws",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Los actos extraordinarios exigen 2/3 del Consejo.",
      whatIsPending: "Fijar el criterio cuantitativo en los Bylaws (porcentaje presupuestario vs suma fija en dólares).",
      whyItMatters: "Delimita cuándo la tesorería puede firmar contratos ordinarios y cuándo requiere aprobación de 2/3 del Board.",
      optionsAvailable: [
        { code: "OPC-17-A", label: "Criterio Porcentual: 10% del presupuesto operativo anual", consequence: "Ajuste dinámico conforme crece la economía de la Iglesia.", recommendation: true },
        { code: "OPC-17-B", label: "Criterio Fijo Escalonado: $25,000 USD", consequence: "Certeza nominal inmediata pero requiere actualización periódica." },
        { code: "OPC-17-C", label: "Criterio Mixto: El menor valor entre $25,000 y el 10% del presupuesto", consequence: "Máximo control fiduciario conservador." },
      ],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-003 (Bylaws)",
      sourceDecision: "Expediente Artículo 17 (Fase 36)",
      dossierPath: "/constitucion/decision-pastor-fundador/17",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },

    // -------------------------------------------------------------------------
    // ARTÍCULO 22 — DERECHOS ESPECÍFICOS DE VOTO Y ASAMBLEA
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-22-01",
      articleNumber: 22,
      matter: "Requisitos de Miembro Activo (18 Años) y Quórum del 50%",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "Voto reservado a miembros activos mayores de 18 años con al menos 6 meses de membresía y asistencia regular; quórum de asamblea fijado en 50% del padrón (DEC-DEF-001, DEC-DEF-007).",
      whatIsPending: "Nada. Requisitos de membresía plena confirmados.",
      whyItMatters: "Garantiza madurez espiritual y compromiso congregacional.",
      optionsAvailable: [],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 22)",
      sourceDecision: "DEC-DEF-001, DEC-DEF-007",
      dossierPath: "/constitucion/decision-pastor-fundador/22",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-001/007", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-003",
      articleNumber: 22,
      matter: "Regla de Segunda Convocatoria ante Falta de Quórum del 50%",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Quórum del 50% en primera convocatoria y catálogo reservado de materias asamblearias.",
      whatIsPending: "Fijar el procedimiento estatutario si en la primera citación no se alcanza el 50% de los miembros activos.",
      whyItMatters: "Evita que la inasistencia bloquee decisiones trascendentales como la compra de un inmueble.",
      optionsAvailable: [
        { code: "OPC-22-A", label: "Segunda convocatoria a los 15 días: válida con los miembros presentes (mín. 25%)", consequence: "Garantiza que la asamblea pueda deliberar sin quedar paralizada.", recommendation: true },
        { code: "OPC-22-B", label: "Segunda convocatoria inmediata a los 30 minutos: válida con el tercio (33%)", consequence: "Acelera trámites en una sola jornada pero con menor margen de aviso." },
      ],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 22) y REN-DOC-003",
      sourceDecision: "Expediente Artículo 22 (Fase 37)",
      dossierPath: "/constitucion/decision-pastor-fundador/22",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },

    // -------------------------------------------------------------------------
    // ARTÍCULO 43 — PROCEDIMIENTO DE ENMIENDA
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-43-01",
      articleNumber: 43,
      matter: "Inmutabilidad de la Declaración de Fe y Clasificación en 3 Niveles",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "Nivel A (Doctrina: iniciativa exclusiva del Fundador e inmutable); Nivel B (Estructura); Nivel C (Reglamentos ordinarios) (DEC-DEF-001, REN-DOC-001).",
      whatIsPending: "Nada. Sistema escalonado aprobado.",
      whyItMatters: "Protege la doctrina bíblica contra cualquier intento de adulteración.",
      optionsAvailable: [],
      legalReviewRequirement: "NO_REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-001 y REN-DOC-002 (Art. 43)",
      sourceDecision: "DEC-DEF-001",
      dossierPath: "/constitucion/decision-pastor-fundador/43",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-001", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-004",
      articleNumber: 43,
      matter: "Mayoría Calificada Exacta para Enmiendas Estructurales de Nivel B",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Iniciativa fundacional y dictamen del Consejo.",
      whatIsPending: "Fijar si la aprobación de reformas de Nivel B exige Doble Mayoría de 2/3 (Consejo + Asamblea) o Mayoría de 2/3 Consejo + Mayoría Simple Asamblea.",
      whyItMatters: "Establece el nivel de rigidez constitucional para modificar estatutos de gobierno.",
      optionsAvailable: [
        { code: "OPC-43-A", label: "Doble Mayoría Calificada: 2/3 Consejo de Gobierno + 2/3 Asamblea General", consequence: "Máxima protección y consenso calificado en ambas instancias.", recommendation: true },
        { code: "OPC-43-B", label: "Mayoría de 2/3 del Consejo de Gobierno + Mayoría Simple de Asamblea", consequence: "Mayor agilidad en la ratificación congregacional." },
      ],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 43) y Bylaws",
      sourceDecision: "Expediente Artículo 43 (Fase 38)",
      dossierPath: "/constitucion/decision-pastor-fundador/43",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },

    // -------------------------------------------------------------------------
    // ARTÍCULO 46 — PREVALENCIA EN CONFLICTO DOCUMENTAL
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-46-01",
      articleNumber: 46,
      matter: "Primacía Bíblica Absoluta en Materia Doctrinal y Espiritual",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "Las Sagradas Escrituras y la Declaración de Fe tienen primacía absoluta sobre cualquier norma interna (DEC-DEF-001).",
      whatIsPending: "Nada. Principio supremo inalterable.",
      whyItMatters: "Custodia de la fe y sometimiento a la Palabra de Dios.",
      optionsAvailable: [],
      legalReviewRequirement: "NO_REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-001 y REN-DOC-002 (Art. 46)",
      sourceDecision: "DEC-DEF-001",
      dossierPath: "/constitucion/decision-pastor-fundador/46",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-001", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-005",
      articleNumber: 46,
      matter: "Validación Formal del Modelo Híbrido de Prevalencia y Protocolo de 12 Pasos",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Separación de esferas espiritual (Fundador) vs fiduciaria civil (Leyes NJ / Certificate).",
      whatIsPending: "Aprobación institucional del protocolo de resolución armónica en 12 pasos tras el dictamen del abogado.",
      whyItMatters: "Proporciona una ruta pacífica y reglamentada para dirimir discrepancias normativas.",
      optionsAvailable: [
        { code: "OPC-46-C", label: "Modelo Híbrido Coordinado con Protocolo de 12 Pasos", consequence: "Armoniza la primacía doctrinal con las exigencias fiduciarias civiles de New Jersey.", recommendation: true },
        { code: "OPC-46-B", label: "Separación Estricta de Esferas Soberanas sin protocolo detallado", consequence: "Mayor simplicidad pero menor guía procedimental en casos mixtos." },
      ],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 46) y REN-DOC-003",
      sourceDecision: "Expediente Artículo 46 (Fase 39)",
      dossierPath: "/constitucion/decision-pastor-fundador/46",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },

    // -------------------------------------------------------------------------
    // ARTÍCULO 47 — FECHA DE VIGENCIA OFICIAL Y ADOPCIÓN
    // -------------------------------------------------------------------------
    {
      agendaId: "HIST-47-01",
      articleNumber: 47,
      matter: "Soberanía Exclusiva del Pastor Fundador en la Adopción (ADOPT_OFFICIAL)",
      category: "CATEGORIA_A_YA_DEFINIDO",
      status: "NO_REQUIERE_DECISION",
      whatIsDefined: "La adopción oficial de la Constitución y la Declaración de Fe está reservada con soberanía exclusiva al Pastor Fundador (DEC-DEF-001, DEC-DEF-002).",
      whatIsPending: "Nada. Atribución fundacional exclusiva.",
      whyItMatters: "Garantiza que ningún borrador adquiera vigencia sin la firma solemne del Fundador.",
      optionsAvailable: [],
      legalReviewRequirement: "NO_REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 47)",
      sourceDecision: "DEC-DEF-001, DEC-DEF-002",
      dossierPath: "/constitucion/decision-pastor-fundador/47",
      futureAnswerSlot: { realDate: "", founderAnswer: "YA DECIDIDO EN DEC-DEF-001/002", observations: "No requiere nueva decisión.", status: "PENDIENTE" },
    },
    {
      agendaId: "DF-006",
      articleNumber: 47,
      matter: "Modalidad de Entrada en Vigor (Simultánea vs Diferida Vacatio)",
      category: "CATEGORIA_B_DECISION_PENDIENTE",
      status: "DECISION_PENDIENTE",
      whatIsDefined: "Inexistencia actual de fechas; prohibición de retroactividad.",
      whatIsPending: "Fijar si la Constitución entra en vigor en la misma fecha de adopción o con un plazo de vacatio constitutionis (30 o 60 días).",
      whyItMatters: "Permite adecuar los manuales de ministerios y capacitar a la congregación antes de la plena exigibilidad.",
      optionsAvailable: [
        { code: "OPC-47-A", label: "Vigencia Simultánea e Inmediata con la firma del Decreto de Adopción", consequence: "Eficacia inmediata y total sincronía temporal.", recommendation: true },
        { code: "OPC-47-B", label: "Vigencia Diferida a 30 o 60 días (Vacatio Constitutionis)", consequence: "Tiempo para adecuar formularios y realizar asambleas de capacitación." },
      ],
      legalReviewRequirement: "REQUIERE_REVISION_LEGAL",
      affectedDocuments: "REN-DOC-002 (Art. 47) y Decreto de Adopción",
      sourceDecision: "Expediente Artículo 47 (Fase 40)",
      dossierPath: "/constitucion/decision-pastor-fundador/47",
      futureAnswerSlot: { realDate: "", founderAnswer: "", observations: "", status: "PENDIENTE" },
    },
  ],
};

export function getPastorFounderMasterAgenda(): PastorFounderMasterDecisionAgenda {
  return PASTOR_FOUNDER_AGENDA;
}
