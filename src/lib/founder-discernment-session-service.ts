// ============================================================================
// RENACER CHURCH MAESTRO — FASE 44: SESIÓN FORMAL DE DISCERNIMIENTO
// Y DECISIÓN INSTITUCIONAL DEL PASTOR FUNDADOR LUIS UCHUBANDA FALCONÍ
// ============================================================================

export type DiscernmentSessionState =
  | "PENDIENTE_DEFINIR"
  | "EN_DISCERNIMIENTO"
  | "DECIDIDO"
  | "REQUIERE_REVISION_LEGAL"
  | "PROPUESTA_NO_ADOPTADA"
  | "LISTO_PARA_ADOPCION"
  | "ADOPTADO";

export interface FounderDecisionOption {
  optionCode: string;
  title: string;
  description: string;
  consequences: string;
  isTechnicalRecommendation?: boolean;
}

export interface FounderMatterSessionData {
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: 13 | 17 | 22 | 43 | 46 | 47;
  title: string;
  matterSummary: string;
  currentState: DiscernmentSessionState;
  whatIsAlreadyDefined: string[];
  whatRemainsPending: string;
  legalReviewRequired: boolean;
  attorneyQuestions: string[];
  options: FounderDecisionOption[];
  technicalRecommendationText: string;
  discernmentNotesPrompt: string;
  recordedDecision: {
    sessionDate: string; // Vacio inicialmente si no hay fecha real
    founderDecisionText: string; // Vacio inicialmente
    rationaleOrFoundingBasis: string; // Vacio
    additionalObservations: string; // Vacio
    decisionState: DiscernmentSessionState;
    requiresLegalFiling: boolean;
    postDecisionAction: string;
    responsibleParty: string;
    isExplicitlyEnteredByUser: boolean;
  };
}

export interface Phase44SeparateRecordedDecision {
  recordId: string; // REG-F44-001...
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: number;
  sessionDate: string;
  decisionText: string;
  rationale: string;
  state: DiscernmentSessionState;
  requiresLegalReview: boolean;
  postAction: string;
  recordedAtIso: string;
}

export interface FounderDiscernmentSessionPackage {
  sessionTitle: string;
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
  historicalDecisionsCount: 107;
  totalMattersCount: 6;
  disclaimerNotice1: "UNA PROPUESTA O RECOMENDACIÓN DEL SISTEMA NO CONSTITUYE UNA DECISIÓN DEL PASTOR FUNDADOR.";
  disclaimerNotice2: "LA DECISIÓN DEL PASTOR FUNDADOR NO CONSTITUYE POR SÍ SOLA LA ADOPCIÓN OFICIAL DE LA CONSTITUCIÓN.";
  matters: FounderMatterSessionData[];
}

export const FOUNDER_DISCERNMENT_SESSION_PACKAGE: FounderDiscernmentSessionPackage = {
  sessionTitle: "Sesión Formal de Discernimiento y Decisión Institucional",
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
  historicalDecisionsCount: 107,
  totalMattersCount: 6,
  disclaimerNotice1: "UNA PROPUESTA O RECOMENDACIÓN DEL SISTEMA NO CONSTITUYE UNA DECISIÓN DEL PASTOR FUNDADOR.",
  disclaimerNotice2: "LA DECISIÓN DEL PASTOR FUNDADOR NO CONSTITUYE POR SÍ SOLA LA ADOPCIÓN OFICIAL DE LA CONSTITUCIÓN.",
  matters: [
    // -------------------------------------------------------------------------
    // DF-001 — ARTÍCULO 13: SUCESIÓN DEL PASTOR FUNDADOR
    // -------------------------------------------------------------------------
    {
      matterId: "DF-001",
      articleNumber: 13,
      title: "Sucesión Fundacional y Continuidad Institucional",
      matterSummary: "Plazo de duración de la comisión interina y porcentaje asambleario de ratificación del nuevo Pastor Principal.",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Autoridad espiritual vitalicia del Pastor Fundador (DEC-DEF-001).",
        "Facultad de designación reservada en vida por el Fundador (DEC-DEF-001).",
        "Protocolo médico de 2 especialistas independientes para dictaminar incapacidad (DEC-DEF-002).",
        "Idoneidad ministerial requerida bajo 1 Timoteo 3 y Tito 1 (DEC-DEF-002).",
        "Comisión Mixta de Emergencia ante vacancia imprevista (DEC-PEND-001).",
        "Prohibición absoluta de vender o gravar inmuebles durante el interinato (DEC-DEF-002).",
      ],
      whatRemainsPending: "Fijar si la comisión interina dura un máximo de 90 o 180 días, y si la ratificación congregacional requiere Mayoría Simple (50%+1) o Mayoría Calificada de 2/3.",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Qué validez estatutaria y bancaria en NJ tiene el pliego sucesorio reservado suscrito en vida por el Pastor Fundador?",
        "¿Qué formalidades médicas y notariales exige New Jersey ante incapacidad permanente para no bloquear cuentas bancarias?",
      ],
      options: [
        {
          optionCode: "OPC-13-A",
          title: "Plazo de 180 días + Ratificación por Mayoría Simple (50%+1)",
          description: "La Comisión Mixta opera hasta 180 días. La Asamblea General ratifica la propuesta sucesoria por mayoría simple de miembros activos presentes.",
          consequences: "Proporciona tiempo suficiente para un discernimiento espiritual ordenado y facilita una confirmación congregacional ágil sin riesgo de empate.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-13-B",
          title: "Plazo de 90 días + Ratificación por Mayoría Calificada de 2/3",
          description: "Comisión de emergencia por máximo 90 días con ratificación asamblearia por dos tercios.",
          consequences: "Exige una transición rápida pero con un umbral de consenso congregacional muy estricto que podría dificultar la ratificación si hay discrepancias.",
        },
        {
          optionCode: "OPC-13-C",
          title: "Plazo de 180 días + Ratificación por Mayoría Calificada de 2/3",
          description: "Combina el plazo amplio de 180 días con la exigencia de 2/3 de los votos asamblearios.",
          consequences: "Máxima prudencia temporal y máximo consenso, aunque exige un trabajo pastoral intensivo para alcanzar el 66.6% de los sufragios.",
        },
      ],
      technicalRecommendationText: "OPC-13-A: Plazo de 180 días con ratificación por Mayoría Simple (50%+1) (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Evaluar si 180 días otorga el balance óptimo entre paz congregacional y continuidad ejecutiva ante entidades bancarias de New Jersey.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Incorporar plazo y porcentaje en el pliego sucesorio y coordinar con REN-DOC-003.",
        responsibleParty: "Pastor Fundador y Secretaría General",
        isExplicitlyEnteredByUser: false,
      },
    },

    // -------------------------------------------------------------------------
    // DF-002 — ARTÍCULO 17: QUÓRUMS Y PODERES CORPORATIVOS
    // -------------------------------------------------------------------------
    {
      matterId: "DF-002",
      articleNumber: 17,
      title: "Quórums, Mayorías y Poderes Corporativos del Consejo de Gobierno",
      matterSummary: "Criterio cuantitativo de umbral económico en dólares ($) para contratos extraordinarios en los Bylaws.",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Consejo de Gobierno / Board of Trustees compuesto por 3 a 5 miembros (DEC-DEF-002).",
        "Tabla de quórum escalonada: 3 directores -> quórum 2; 4 directores -> quórum 3; 5 directores -> quórum 3 (DEC-DEF-002).",
        "Mayoría simple para resoluciones fiduciarias ordinarias (DEC-DEF-002).",
        "Mayoría calificada de 2/3 + V.B. del Fundador para actos extraordinarios (DEC-DEF-002).",
        "Regla de desempate: en caso de igualdad de votos la moción se tiene por desestimada (DEC-DEF-002).",
      ],
      whatRemainsPending: "Definir el umbral económico cuantitativo exacto en los Bylaws (porcentaje del presupuesto vs suma fija en dólares).",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Es plenamente vinculante bajo N.J.S.A. 15A:6-7 la tabla de quórum escalonada y la regla de desempate en estatutos corporativos de NJ?",
        "¿Qué umbrales de contratación suelen exigir las entidades financieras y aseguradoras en New Jersey para requerir firma mancomunada del Board?",
      ],
      options: [
        {
          optionCode: "OPC-17-A",
          title: "Umbral Porcentual Dinámico: 10% del Presupuesto Operativo Anual",
          description: "Todo contrato o compromiso financiero que supere el 10% del presupuesto anual aprobado requiere voto favorable de 2/3 del Consejo.",
          consequences: "Se ajusta automáticamente al crecimiento económico de la Iglesia sin requerir reformas estatutarias periódicas.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-17-B",
          title: "Umbral Fijo Escalonado: $25,000 USD",
          description: "Monto fijo estático de $25,000 dólares como frontera entre actos ordinarios y extraordinarios.",
          consequences: "Certeza nominal inmediata para la tesorería, pero susceptible de desactualización por inflación a mediano plazo.",
        },
        {
          optionCode: "OPC-17-C",
          title: "Umbral Mixto: El menor valor entre $25,000 USD y el 10% del Presupuesto",
          description: "Aplica el límite más conservador según el ejercicio fiscal.",
          consequences: "Máxima prudencia fiduciaria pero añade una pequeña complejidad de cálculo anual.",
        },
      ],
      technicalRecommendationText: "OPC-17-A: Umbral del 10% del presupuesto operativo anual en REN-DOC-003 (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Considerar si el umbral porcentual del 10% brinda agilidad operativa a la tesorería para pagos corrientes protegiendo el patrimonio mayor.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Asentar el umbral en los Bylaws fiduciarios corporativos (REN-DOC-003).",
        responsibleParty: "Pastor Fundador y Tesorero General",
        isExplicitlyEnteredByUser: false,
      },
    },

    // -------------------------------------------------------------------------
    // DF-003 — ARTÍCULO 22: DERECHOS ESPECÍFICOS DE VOTO
    // -------------------------------------------------------------------------
    {
      matterId: "DF-003",
      articleNumber: 22,
      title: "Derechos Específicos de Voto y Calificación Congregacional",
      matterSummary: "Procedimiento de segunda convocatoria asamblearia si no se alcanza el quórum estatutario del 50%.",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Voto exclusivo de Miembros Activos con mínimo 6 meses de membresía y asistencia regular (DEC-DEF-001, DEC-DEF-007).",
        "Edad mínima de 18 años para ejercer el derecho al voto (DEC-DEF-001).",
        "Quórum congregacional del 50% del padrón en primera citación (DEC-DEF-002).",
        "Catálogo reservado: enajenación/hipoteca de inmuebles (2/3), disolución (2/3), enmiendas Nivel B y confirmación del Board (DEC-DEF-002).",
        "Principio de igualdad: un miembro = un voto, prohibiendo voto por poder o delegado (DEC-DEF-002).",
      ],
      whatRemainsPending: "Establecer la regla estatutaria de segunda convocatoria para asambleas donde no asista el 50% de los miembros activos.",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Permite N.J.S.A. 15A:5-1 restringir el derecho a voto al catálogo taxativo y cómo estructurar la segunda convocatoria bajo N.J.S.A. 15A:5-9?",
        "¿Qué formalidades de notificación formal (correo/boletín) son obligatorias en Passaic County, NJ para asambleas con voto inmobiliario?",
      ],
      options: [
        {
          optionCode: "OPC-22-A",
          title: "Segunda Convocatoria a los 15 Días con Miembros Presentes (mínimo 25%)",
          description: "Si no hay 50%, se cita a una segunda asamblea 15 días después, siendo válida con los presentes siempre que superen el 25% del padrón.",
          consequences: "Otorga tiempo prudencial para convocar a la congregación y previene el bloqueo institucional de transacciones inmobiliarias.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-22-B",
          title: "Segunda Convocatoria Inmediata a los 30 Minutos con 33% del Padrón",
          description: "Se instala la asamblea media hora después con mínimo un tercio de los miembros activos.",
          consequences: "Resuelve la votación en una sola fecha, aunque con menor margen de convocatoria para miembros que no hayan asistido puntualmente.",
        },
      ],
      technicalRecommendationText: "OPC-22-A: Segunda convocatoria a los 15 días con quórum del 25% (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Evaluar si el plazo de 15 días asegura una mayor representatividad espiritual de la membresía para decisiones de gran impacto.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Reglamentar el procedimiento de convocatoria en el Reglamento Asambleario y Bylaws.",
        responsibleParty: "Pastor Fundador y Secretaría General",
        isExplicitlyEnteredByUser: false,
      },
    },

    // -------------------------------------------------------------------------
    // DF-004 — ARTÍCULO 43: PROCEDIMIENTO DE ENMIENDA
    // -------------------------------------------------------------------------
    {
      matterId: "DF-004",
      articleNumber: 43,
      title: "Procedimiento de Enmienda y Reforma Constitucional",
      matterSummary: "Mayoría calificada exacta para la aprobación de reformas estructurales de Nivel B.",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Inmutabilidad absoluta de la Declaración de Fe (Nivel A) bajo iniciativa y custodia exclusiva del Fundador (DEC-DEF-001).",
        "Clasificación en 3 Niveles: Nivel A (Doctrinal), Nivel B (Estructural/Constitucional) y Nivel C (Reglamentario/Operativo) (DEC-DEF-001).",
        "Seis cláusulas protegidas (entrenched) inalterables en vida del Pastor Fundador (DEC-DEF-001, DEC-DEF-002).",
        "Nivel C aprobable por mayoría simple del Consejo de Gobierno (DEC-DEF-002).",
      ],
      whatRemainsPending: "Confirmar formalmente si las enmiendas de Nivel B exigen Doble Mayoría Calificada de 2/3 (Consejo + Asamblea) o Mayoría de 2/3 Consejo + Mayoría Simple de Asamblea.",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Es legalmente válida y exigible en New Jersey la cláusula de doble mayoría calificada (2/3 Board + 2/3 Asamblea) para enmendar estatutos religiosos bajo N.J.S.A. 15A:9-1?",
        "¿Cómo debe inscribirse ante el Departamento del Tesoro de NJ cualquier enmienda que altere cláusulas del Certificate of Incorporation?",
      ],
      options: [
        {
          optionCode: "OPC-43-A",
          title: "Doble Mayoría Calificada: 2/3 Consejo de Gobierno + 2/3 Asamblea General + V.B. Fundador",
          description: "La reforma estructural requiere 2/3 de votos favorables del Consejo, ratificación por 2/3 de la Asamblea y visto bueno del Pastor Fundador.",
          consequences: "Garantiza la máxima estabilidad constitucional y blindaje contra reformas precipitadas o no consensuadas.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-43-B",
          title: "Mayoría de 2/3 del Consejo de Gobierno + Mayoría Simple de Asamblea General",
          description: "Exige 2/3 de directores pero sólo mayoría simple (50%+1) en la asamblea de miembros.",
          consequences: "Mayor facilidad de aprobación asamblearia, manteniendo el filtro fiduciario calificado del Board.",
        },
      ],
      technicalRecommendationText: "OPC-43-A: Doble Mayoría Calificada (2/3 Consejo + 2/3 Asamblea) con V.B. del Fundador (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Considerar si la Doble Mayoría Calificada de 2/3 protege fielmente el legado espiritual y la identidad de RENACER a través de las generaciones.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Asentar la regla de enmienda en el Artículo 43 y alinear con el Certificate of Amendment.",
        responsibleParty: "Pastor Fundador y Asesor Legal en NJ",
        isExplicitlyEnteredByUser: false,
      },
    },

    // -------------------------------------------------------------------------
    // DF-005 — ARTÍCULO 46: PREVALENCIA EN CONFLICTO DOCUMENTAL
    // -------------------------------------------------------------------------
    {
      matterId: "DF-005",
      articleNumber: 46,
      title: "Prevalencia en Conflicto Documental y Jerarquía Normativa",
      matterSummary: "Aprobación del Modelo Híbrido de Prevalencia con separación de esferas y Protocolo Institucional de 12 pasos.",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Primacía absoluta de las Sagradas Escrituras y la Declaración de Fe (REN-DOC-001) en doctrina y disciplina (DEC-DEF-001).",
        "Separación de esferas: Dimensión Espiritual reservada al Pastor Fundador vs Dimensión Fiduciaria Civil reservada a las leyes de NJ y Certificate (DEC-DEF-001, DEC-DEF-002).",
        "Constitución superior a manuales ministeriales y resoluciones operativas (DEC-DEF-002).",
      ],
      whatRemainsPending: "Aprobación formal del protocolo de resolución armónica de 12 pasos y ratificación de la cláusula en los Bylaws (REN-DOC-003).",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Cómo articula la jurisprudencia de New Jersey la doctrina de abstención eclesiástica de la Primera Enmienda frente a conflictos estatutarios?",
        "¿Qué validez tiene la cláusula de arbitraje eclesiástico obligatorio bajo el NJ Alternative Procedure for Dispute Resolution Act?",
      ],
      options: [
        {
          optionCode: "OPC-46-C",
          title: "Modelo Híbrido Coordinado con Protocolo Institucional de 12 Pasos",
          description: "Reconoce la primacía doctrinal bíblica y la supremacía civil fiduciaria, resolviendo dudas mediante un protocolo de 12 etapas con dictamen legal previo.",
          consequences: "Brinda certidumbre absoluta y un cauce pacífico para solucionar cualquier colisión de textos sin recurrir a litigios ordinarios.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-46-B",
          title: "Separación Estricta de Esferas Soberanas sin Protocolo de 12 Pasos",
          description: "Delimita esferas de competencia autónoma sin fijar un procedimiento formal escalonado.",
          consequences: "Estructura más corta pero con menor guía operativa para la secretaría general ante discrepancias complejas.",
        },
      ],
      technicalRecommendationText: "OPC-46-C: Modelo Híbrido Coordinado con Protocolo de 12 Pasos (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Evaluar si el protocolo de 12 pasos garantiza la debida audiencia pastoral y la consulta legal antes de cualquier modificación normativa.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Incorporar el protocolo en el Artículo 46 y coordinar la cláusula de prevalencia en los Bylaws.",
        responsibleParty: "Pastor Fundador y Secretaría General",
        isExplicitlyEnteredByUser: false,
      },
    },

    // -------------------------------------------------------------------------
    // DF-006 — ARTÍCULO 47: FECHA DE VIGENCIA OFICIAL Y ADOPCIÓN
    // -------------------------------------------------------------------------
    {
      matterId: "DF-006",
      articleNumber: 47,
      title: "Fecha de Vigencia Oficial, Adopción y Condiciones Previas",
      matterSummary: "Modalidad de entrada en vigor de la Carta Magna (Simultánea con Adopción vs Vacatio Constitutionis diferida).",
      currentState: "PENDIENTE_DEFINIR",
      whatIsAlreadyDefined: [
        "Inexistencia actual de fechas de adopción y vigencia oficial (REN-DOC-002 continúa v0.1 EN_REDACCION NO ADOPTADA) (DEC-DEF-001).",
        "Soberanía exclusiva del Pastor Fundador en la ejecución del acto oficial de adopción (ADOPT_OFFICIAL) (DEC-DEF-001, DEC-DEF-002).",
        "Prohibición absoluta de fechas ficticias, automáticas o retroactivas (DEC-DEF-002).",
        "Distinción técnica rigurosa de 7 tipos de fechas institucionales (DEC-DEF-002).",
      ],
      whatRemainsPending: "Fijar si la Constitución entra en vigor en la misma fecha del Decreto Solemne de Adopción o con un plazo de vacatio constitutionis (30 o 60 días) tras cumplir todas las condiciones previas.",
      legalReviewRequired: true,
      attorneyQuestions: [
        "¿Qué solemnidades de certificación y actas exige New Jersey para acreditar la entrada en vigor ante entidades bancarias y aseguradoras de títulos?",
        "¿Existe algún impedimento legal en NJ para fijar una vigencia diferida a 30 o 60 días para adecuación operativa de manuales?",
      ],
      options: [
        {
          optionCode: "OPC-47-A",
          title: "Vigencia Simultánea e Inmediata con la firma del Decreto Solemne de Adopción",
          description: "La Constitución adquiere plena fuerza obligatoria interna en la misma fecha y hora en que el Fundador ejecuta ADOPT_OFFICIAL.",
          consequences: "Inmediatez, sincronía temporal total y eliminación de períodos de incertidumbre sobre qué norma rige.",
          isTechnicalRecommendation: true,
        },
        {
          optionCode: "OPC-47-B",
          title: "Vigencia Diferida con Período de Transición a 30 o 60 Días (Vacatio Constitutionis)",
          description: "Se adopta formalmente pero rige a los 30 o 60 días para capacitar líderes y adecuar manuales de área.",
          consequences: "Transición muy suave y ordenada, aunque exige convivir temporalmente con normativas provisionales.",
        },
      ],
      technicalRecommendationText: "OPC-47-A: Vigencia Simultánea e Inmediata al Momento de la Adopción Solemne (PROPUESTA — NO ADOPTADA).",
      discernmentNotesPrompt: "Considerar si la vigencia simultánea transmite un mensaje de firmeza y claridad constitucional tras culminar la revisión legal.",
      recordedDecision: {
        sessionDate: "",
        founderDecisionText: "",
        rationaleOrFoundingBasis: "",
        additionalObservations: "",
        decisionState: "PENDIENTE_DEFINIR",
        requiresLegalFiling: true,
        postDecisionAction: "Preparar el formato solemne del Decreto de Adopción para la suscripción exclusiva del Fundador.",
        responsibleParty: "Pastor Fundador exclusivamente",
        isExplicitlyEnteredByUser: false,
      },
    },
  ],
};

// Almacén en memoria de decisiones de la Fase 44 (completamente separado de las 107 históricas)
const PHASE_44_DECISIONS_STORAGE: Map<string, Phase44SeparateRecordedDecision> = new Map();

export function getFounderDiscernmentSessionPackage(): FounderDiscernmentSessionPackage {
  // Retorna el paquete maestro fusionando las decisiones explícitas si existen
  const pkg = { ...FOUNDER_DISCERNMENT_SESSION_PACKAGE };
  pkg.matters = pkg.matters.map((m) => {
    const saved = PHASE_44_DECISIONS_STORAGE.get(m.matterId);
    if (saved) {
      return {
        ...m,
        currentState: saved.state,
        recordedDecision: {
          sessionDate: saved.sessionDate,
          founderDecisionText: saved.decisionText,
          rationaleOrFoundingBasis: saved.rationale,
          additionalObservations: "",
          decisionState: saved.state,
          requiresLegalFiling: saved.requiresLegalReview,
          postDecisionAction: saved.postAction,
          responsibleParty: "Pastor Fundador",
          isExplicitlyEnteredByUser: true,
        },
      };
    }
    return m;
  });
  return pkg;
}

export function recordExplicitFounderDecision(params: {
  matterId: "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006";
  articleNumber: number;
  sessionDate: string;
  decisionText: string;
  rationale: string;
  state: DiscernmentSessionState;
  requiresLegalReview: boolean;
  postAction: string;
}): Phase44SeparateRecordedDecision {
  // Guarda exclusivamente en el almacén de Fase 44 sin tocar las 107 históricas
  const recordId = `REG-F44-${params.matterId}`;
  const record: Phase44SeparateRecordedDecision = {
    recordId,
    matterId: params.matterId,
    articleNumber: params.articleNumber,
    sessionDate: params.sessionDate,
    decisionText: params.decisionText,
    rationale: params.rationale,
    state: params.state,
    requiresLegalReview: params.requiresLegalReview,
    postAction: params.postAction,
    recordedAtIso: new Date().toISOString(),
  };

  PHASE_44_DECISIONS_STORAGE.set(params.matterId, record);
  return record;
}

export function getAllPhase44RecordedDecisions(): Phase44SeparateRecordedDecision[] {
  return Array.from(PHASE_44_DECISIONS_STORAGE.values());
}
