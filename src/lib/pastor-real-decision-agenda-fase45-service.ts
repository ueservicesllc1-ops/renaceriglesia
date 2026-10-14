// ============================================================================
// RENACER CHURCH MAESTRO — FASE 45: AGENDA REAL DE DECISIÓN DEL PASTOR FUNDADOR
// REGISTRO INDEPENDIENTE Y CONTROL DE DISCERNIMIENTO SOBERANO
// ============================================================================

export type DecisionStateFase45 =
  | "PENDIENTE_DEFINIR"
  | "EN_DISCERNIMIENTO"
  | "DECIDIDO"
  | "REQUIERE_REVISION_LEGAL"
  | "PROPUESTA_NO_ADOPTADA"
  | "LISTO_PARA_ADOPCION"
  | "ADOPTADO";

export interface DecisionOptionFase45 {
  optionCode: string;
  title: string;
  whatItEstablishes: string;
  whatItResolves: string;
  whatItLeavesPending: string;
  consequences: string;
  requiresLegalReview: boolean;
  isTechnicalRecommendation?: boolean;
}

export interface MatterAgendaFase45 {
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: 13 | 17 | 22 | 43 | 46 | 47;
  matterTitle: string;
  currentState: DecisionStateFase45;
  whatIsAlreadyDefined: string[];
  whatNeedsDecision: string;
  options: DecisionOptionFase45[];
  requiresLegalReview: boolean;
  attorneyQuestions: string[];
  technicalRecommendation: string;
  // Campos de decisión formal inicialmente vacíos
  decisionSlot: {
    decisionText: string;
    rationale: string;
    observations: string;
    requiresLegalFiling: boolean;
    postAction: string;
    sessionDate: string;
    isConfirmedByFounder: boolean;
    recordedAtIso?: string;
  };
}

export interface Phase45RealRecordedDecision {
  recordId: string; // REG-F45-DF-001...
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: number;
  sessionDate: string;
  decisionText: string;
  rationale: string;
  observations: string;
  requiresLegalReview: boolean;
  postAction: string;
  confirmedAtIso: string;
}

export interface PastorRealDecisionAgendaFase45 {
  agendaTitle: string;
  pastorFounder: "Luis Uchubanda Falconí";
  churchLegalName: "RENACER CHURCH, INC.";
  location: "Paterson, New Jersey";
  constitutionStatus: {
    code: "REN-DOC-002";
    version: "0.1";
    status: "EN_REDACCION";
    adoption: "NO ADOPTADA";
  };
  faithDeclarationStatus: {
    code: "REN-DOC-001";
    version: "1.0";
    status: "BORRADOR";
    adoption: "NO ADOPTADA";
  };
  totalHistoricalDecisions: 107;
  totalMatters: 6;
  disclaimer: "LA IA NO DECIDE. NINGUNA RECOMENDACIÓN CONSTITUYE DECISIÓN OFICIAL DEL PASTOR FUNDADOR. LA CONFIRMACIÓN REQUIERE ACCIÓN EXPLÍCITA DEL USUARIO AUTORIZADO.";
  matters: MatterAgendaFase45[];
}

export const INITIAL_AGENDA_FASE_45: PastorRealDecisionAgendaFase45 = {
  agendaTitle: "Agenda Real de Decisión del Pastor Fundador — Fase 45",
  pastorFounder: "Luis Uchubanda Falconí",
  churchLegalName: "RENACER CHURCH, INC.",
  location: "Paterson, New Jersey",
  constitutionStatus: {
    code: "REN-DOC-002",
    version: "0.1",
    status: "EN_REDACCION",
    adoption: "NO ADOPTADA",
  },
  faithDeclarationStatus: {
    code: "REN-DOC-001",
    version: "1.0",
    status: "BORRADOR",
    adoption: "NO ADOPTADA",
  },
  totalHistoricalDecisions: 107,
  totalMatters: 6,
  disclaimer: "LA IA NO DECIDE. NINGUNA RECOMENDACIÓN CONSTITUYE DECISIÓN OFICIAL DEL PASTOR FUNDADOR. LA CONFIRMACIÓN REQUIERE ACCIÓN EXPLÍCITA DEL USUARIO AUTORIZADO.",
  matters: [
    {
      matterId: "DF-001",
      articleNumber: 13,
      matterTitle: "Sucesión Fundacional / Pastor Fundador",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Autoridad espiritual vitalicia del Pastor Fundador (DEC-DEF-001).",
        "Designación sucesoria reservada en vida por el Fundador (DEC-DEF-001).",
        "Protocolo de 2 médicos especialistas independientes ante incapacidad (DEC-DEF-002).",
        "Idoneidad ministerial bíblica bajo 1 Timoteo 3 y Tito 1 (DEC-DEF-002).",
        "Comisión Mixta de Emergencia ante vacancia imprevista (DEC-PEND-001).",
        "Prohibición de enajenación o hipoteca de bienes inmuebles en interinato (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Fijar si la comisión interina dura máximo 90 o 180 días, y si la asamblea ratifica por Mayoría Simple (50%+1) o Mayoría de 2/3.",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Qué validez estatutaria tiene el pliego sucesorio reservado para la presidencia de Trustees en NJ?",
        "¿Qué formalidades notariales y bancarias se exigen ante incapacidad médica para evitar congelamiento de cuentas?",
      ],
      technicalRecommendation: "OPC-13-A: Plazo de 180 días con ratificación por Mayoría Simple (50%+1) (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-13-A",
          title: "Plazo de 180 días + Ratificación por Mayoría Simple (50%+1)",
          whatItEstablishes: "Interinato de 180 días; ratificación asamblearia por mayoría simple de miembros activos presentes.",
          whatItResolves: "Concede 6 meses para discernimiento ministerial y permite una confirmación ágil.",
          whatItLeavesPending: "Suscripción formal en pliego sucesorio.",
          consequences: "Máxima prudencia temporal y fluidez en la transición institucional.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-13-B",
          title: "Plazo de 90 días + Ratificación por Mayoría Calificada de 2/3",
          whatItEstablishes: "Interinato de 90 días; ratificación por dos tercios de la asamblea.",
          whatItResolves: "Transición muy rápida.",
          whatItLeavesPending: "Riesgo de bloqueo si no se alcanza el 66.6%.",
          consequences: "Exige altísimo consenso congregacional en plazo corto.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
    {
      matterId: "DF-002",
      articleNumber: 17,
      matterTitle: "Quórums y Poderes Corporativos del Consejo de Gobierno",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Consejo de Gobierno / Board of Trustees de 3 a 5 miembros (DEC-DEF-002).",
        "Tabla de quórum escalonada: 3 directores -> 2; 4 directores -> 3; 5 directores -> 3 (DEC-DEF-002).",
        "Mayoría simple para actos ordinarios; Mayoría de 2/3 + Fundador para actos extraordinarios (DEC-DEF-002).",
        "Regla de empate: moción desestimada (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Fijar el umbral económico cuantitativo ($) en Bylaws para diferenciar actos ordinarios de extraordinarios.",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Es legalmente vinculante bajo N.J.S.A. 15A:6-7 la tabla de quórums escalonados en estatutos de NJ?",
        "¿Qué umbrales de contratación exigen los bancos para requerir firmas mancomunadas del Board?",
      ],
      technicalRecommendation: "OPC-17-A: Umbral del 10% del presupuesto operativo anual en REN-DOC-003 (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-17-A",
          title: "Umbral Porcentual: 10% del Presupuesto Operativo Anual",
          whatItEstablishes: "Contratos que superen el 10% del presupuesto anual exigen 2/3 del Board.",
          whatItResolves: "Ajuste dinámico automático con el crecimiento financiero.",
          whatItLeavesPending: "Inclusión en los Bylaws (REN-DOC-003).",
          consequences: "Agilidad para compras corrientes sin comprometer el control fiduciario.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-17-B",
          title: "Umbral Fijo Escalonado: $25,000 USD",
          whatItEstablishes: "Suma nominal fija de $25,000 dólares.",
          whatItResolves: "Certeza nominal inmediata.",
          whatItLeavesPending: "Actualizaciones por inflación.",
          consequences: "Límite numérico estático.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
    {
      matterId: "DF-003",
      articleNumber: 22,
      matterTitle: "Derechos Específicos de Voto y Asamblea",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Voto exclusivo de Miembros Activos mayores de 18 años con 6 meses de membresía (DEC-DEF-001, DEC-DEF-007).",
        "Quórum congregacional del 50% en primera convocatoria (DEC-DEF-002).",
        "Mayoría simple ordinaria y 2/3 para inmuebles y disolución (DEC-DEF-002).",
        "Catálogo taxativo de materias asamblearias (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Procedimiento de segunda convocatoria asamblearia ante falta del quórum del 50%.",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Cómo califica N.J.S.A. 15A:5-1 a los Voting Members y cómo validar la segunda citación bajo N.J.S.A. 15A:5-9?",
      ],
      technicalRecommendation: "OPC-22-A: Segunda convocatoria a los 15 días con quórum del 25% (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-22-A",
          title: "Segunda Convocatoria a los 15 Días con Miembros Presentes (mínimo 25%)",
          whatItEstablishes: "Segunda asamblea a los 15 días válida con los presentes (mínimo 25% del padrón).",
          whatItResolves: "Evita la parálisis de votaciones inmobiliarias.",
          whatItLeavesPending: "Reglamentación en el manual asambleario.",
          consequences: "Plazo prudencial de re-convocatoria garantizando representatividad.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-22-B",
          title: "Segunda Convocatoria Inmediata a los 30 Minutos (mínimo 33%)",
          whatItEstablishes: "Instalación media hora después con mínimo un tercio de miembros activos.",
          whatItResolves: "Resolución en una sola jornada.",
          whatItLeavesPending: "Aviso a ausentes.",
          consequences: "Mayor rapidez pero menor tiempo de notificación.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
    {
      matterId: "DF-004",
      articleNumber: 43,
      matterTitle: "Procedimiento de Enmienda Constitucional",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Inmutabilidad doctrinal absoluta (Nivel A) bajo custodia exclusiva del Fundador (DEC-DEF-001).",
        "Clasificación escalonada en 3 Niveles: Nivel A (Doctrina), Nivel B (Estructura) y Nivel C (Reglamentos) (DEC-DEF-001).",
        "Seis cláusulas protegidas pétreas (DEC-DEF-001, DEC-DEF-002).",
        "Nivel C aprobado por mayoría simple del Consejo (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Mayoría calificada exacta para enmiendas estructurales de Nivel B (Doble 2/3 vs 2/3 Consejo + Mayoría Simple Asamblea).",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Es exigible bajo N.J.S.A. 15A:9-1 la fórmula de doble mayoría calificada para enmiendas estatutarias religiosas?",
      ],
      technicalRecommendation: "OPC-43-A: Doble Mayoría Calificada (2/3 Consejo + 2/3 Asamblea) con V.B. del Fundador (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-43-A",
          title: "Doble Mayoría Calificada: 2/3 Consejo + 2/3 Asamblea + V.B. Fundador",
          whatItEstablishes: "Requiere 2/3 de votos favorables del Consejo, 2/3 de la Asamblea y visto bueno del Fundador.",
          whatItResolves: "Máximo blindaje institucional y estabilidad constitucional.",
          whatItLeavesPending: "Inscripción en Certificate of Amendment.",
          consequences: "Protege la visión fundacional contra mayorías coyunturales.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-43-B",
          title: "Mayoría de 2/3 Consejo + Mayoría Simple de Asamblea General",
          whatItEstablishes: "2/3 del Consejo pero 50%+1 en la asamblea.",
          whatItResolves: "Mayor agilidad asamblearia.",
          whatItLeavesPending: "Menor consenso congregacional.",
          consequences: "Procedimiento más accesible.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
    {
      matterId: "DF-005",
      articleNumber: 46,
      matterTitle: "Prevalencia en Conflicto Documental",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Primacía absoluta de las Sagradas Escrituras y Declaración de Fe en doctrina (DEC-DEF-001).",
        "Separación de esferas: Espiritual (Fundador) vs Fiduciaria Civil (Leyes NJ / Certificate) (DEC-DEF-001, DEC-DEF-002).",
        "Constitución superior a manuales operativos (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Validación formal del Modelo Híbrido de Prevalencia con Protocolo Institucional de 12 pasos tras dictamen legal.",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Cómo articula la jurisprudencia de New Jersey la doctrina de abstención eclesiástica de la Primera Enmienda?",
        "¿Qué validez tiene la cláusula de arbitraje eclesiástico bajo el NJ Alternative Dispute Resolution Act?",
      ],
      technicalRecommendation: "OPC-46-C: Modelo Híbrido Coordinado con Protocolo de 12 Pasos (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-46-C",
          title: "Modelo Híbrido Coordinado con Protocolo Institucional de 12 Pasos",
          whatItEstablishes: "Reconoce primacía doctrinal y supremacía civil fiduciaria mediante un protocolo reglado en 12 etapas.",
          whatItResolves: "Ruta pacífica y formal para resolver cualquier colisión de normas.",
          whatItLeavesPending: "Alineación en los Bylaws (REN-DOC-003).",
          consequences: "Seguridad jurídica y paz eclesiástica.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-46-B",
          title: "Separación Estricta de Esferas sin Protocolo Detallado",
          whatItEstablishes: "Delimita competencias autónomas sin fijar un procedimiento escalonado.",
          whatItResolves: "Esquema conciso.",
          whatItLeavesPending: "Menor guía operativa para secretaría.",
          consequences: "Estructura simplificada.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
    {
      matterId: "DF-006",
      articleNumber: 47,
      matterTitle: "Fecha de Vigencia Oficial y Adopción",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Inexistencia actual de fechas de adopción y vigencia oficial (DEC-DEF-001).",
        "Soberanía exclusiva del Pastor Fundador en la ejecución de ADOPT_OFFICIAL (DEC-DEF-001, DEC-DEF-002).",
        "Prohibición absoluta de fechas ficticias, automáticas o retroactivas (DEC-DEF-002).",
        "Distinción técnica rigurosa de 7 tipos de fechas institucionales (DEC-DEF-002).",
      ],
      whatNeedsDecision: "Modalidad de vigencia en el Decreto de Adopción (Simultánea e Inmediata vs Vacatio Constitutionis diferida a 30 o 60 días).",
      requiresLegalReview: true,
      attorneyQuestions: [
        "¿Qué solemnidades de certificación de adopción se requieren ante aseguradoras de títulos y bancos en NJ?",
      ],
      technicalRecommendation: "OPC-47-A: Vigencia Simultánea e Inmediata al Momento de la Adopción Solemne (PROPUESTA — NO ADOPTADA).",
      options: [
        {
          optionCode: "OPC-47-A",
          title: "Vigencia Simultánea e Inmediata con la firma del Decreto de Adopción",
          whatItEstablishes: "La Constitución rige desde la misma fecha y hora del acto de adopción.",
          whatItResolves: "Sincronía temporal y vigencia inequívoca.",
          whatItLeavesPending: "Emisión formal del Decreto Solemne.",
          consequences: "Eficacia inmediata y total claridad estatutaria.",
          requiresLegalReview: true,
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-47-B",
          title: "Vigencia Diferida con Período de Transición a 30 o 60 Días (Vacatio)",
          whatItEstablishes: "Se adopta pero entra en vigor a los 30 o 60 días.",
          whatItResolves: "Tiempo de adecuación operativa.",
          whatItLeavesPending: "Régimen normativo transitorio.",
          consequences: "Transición escalonada.",
          requiresLegalReview: true,
        },
      ],
      decisionSlot: {
        decisionText: "",
        rationale: "",
        observations: "",
        requiresLegalFiling: true,
        postAction: "",
        sessionDate: "",
        isConfirmedByFounder: false,
      },
    },
  ],
};

// Almacén en memoria exclusivo para decisiones de Fase 45
const PHASE_45_REAL_DECISIONS_STORAGE: Map<string, Phase45RealRecordedDecision> = new Map();

export function getPastorRealDecisionAgendaFase45(): PastorRealDecisionAgendaFase45 {
  const pkg = { ...INITIAL_AGENDA_FASE_45 };
  pkg.matters = pkg.matters.map((m) => {
    const saved = PHASE_45_REAL_DECISIONS_STORAGE.get(m.matterId);
    if (saved) {
      return {
        ...m,
        currentState: "DECIDIDO",
        decisionSlot: {
          decisionText: saved.decisionText,
          rationale: saved.rationale,
          observations: saved.observations,
          requiresLegalFiling: saved.requiresLegalReview,
          postAction: saved.postAction,
          sessionDate: saved.sessionDate,
          isConfirmedByFounder: true,
          recordedAtIso: saved.confirmedAtIso,
        },
      };
    }
    return m;
  });
  return pkg;
}

export function confirmAndSavePastorDecisionFase45(params: {
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: number;
  sessionDate: string;
  decisionText: string;
  rationale: string;
  observations: string;
  requiresLegalReview: boolean;
  postAction: string;
}): Phase45RealRecordedDecision {
  const recordId = `REG-F45-${params.matterId}`;
  const record: Phase45RealRecordedDecision = {
    recordId,
    matterId: params.matterId,
    articleNumber: params.articleNumber,
    sessionDate: params.sessionDate,
    decisionText: params.decisionText,
    rationale: params.rationale,
    observations: params.observations,
    requiresLegalReview: params.requiresLegalReview,
    postAction: params.postAction,
    confirmedAtIso: new Date().toISOString(),
  };

  PHASE_45_REAL_DECISIONS_STORAGE.set(params.matterId, record);
  return record;
}

export function getAllPhase45RecordedDecisions(): Phase45RealRecordedDecision[] {
  return Array.from(PHASE_45_REAL_DECISIONS_STORAGE.values());
}
