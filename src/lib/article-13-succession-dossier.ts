// ============================================================================
// RENACER CHURCH MAESTRO — FASE 35: EXPEDIENTE MAESTRO DEL ARTÍCULO 13
// SUCESIÓN DEL PASTOR FUNDADOR Y CONTINUIDAD INSTITUCIONAL
// ============================================================================

export interface AuthorityDimension {
  category: "AUTORIDAD_ESPIRITUAL" | "AUTORIDAD_DOCTRINAL" | "AUTORIDAD_ADMINISTRATIVA" | "AUTORIDAD_CORPORATIVA";
  title: string;
  scope: string;
  relationshipWithCouncil: string;
  relationshipWithCongregation: string;
}

export interface SuccessionEventAnalysis {
  eventId: string;
  eventType: string;
  description: string;
  currentDefinedProtocol: string;
  pendingElements: string;
  legalReviewImpact: string;
}

export interface SuccessionScenario {
  scenarioName: string;
  whoActs: string;
  exercisedAuthority: string;
  duration: string;
  decisionStatus: "DEFINIDO" | "PENDIENTE_DEFINIR";
  legalReviewStatus: "REQUIERE_REVISION_LEGAL" | "NO_REQUIERE";
}

export interface InstitutionalOptionArticle13 {
  optionCode: string;
  name: string;
  description: string;
  advantages: string[];
  risks: string[];
  spiritualImpact: string;
  administrativeImpact: string;
  corporateImpact: string;
  congregationalImpact: string;
  possibleConflicts: string;
  mattersRequiringAttorney: string;
  proposalBadge: "PROPUESTA — NO ADOPTADA";
}

export interface Article13SuccessionDossier {
  articleNumber: 13;
  documentId: "REN-DOC-002";
  title: "Sucesión del Pastor Fundador y Continuidad Institucional";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  authorities: AuthorityDimension[];
  events: SuccessionEventAnalysis[];
  scenarios: SuccessionScenario[];
  pendingMattersList: {
    letter: string;
    item: string;
    status: "PENDIENTE_DEFINIR";
    detail: string;
  }[];
  options: InstitutionalOptionArticle13[];
  njAttorneyQuestions: string[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_13_DOSSIER: Article13SuccessionDossier = {
  articleNumber: 13,
  documentId: "REN-DOC-002",
  title: "Sucesión del Pastor Fundador y Continuidad Institucional",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 1 — AUTORIDAD ACTUAL DEL PASTOR FUNDADOR
  authorities: [
    {
      category: "AUTORIDAD_ESPIRITUAL",
      title: "Autoridad Espiritual y Visión Ministerial",
      scope: "Dirección suprema y cuidado pastoral vitalicio de la grey mientras viva y conserve capacidad. Custodio de la visión fundacional y paternidad espiritual de RENACER.",
      relationshipWithCouncil: "Presidencia honorífica y espiritual del Consejo de Gobierno.",
      relationshipWithCongregation: "Pastor Principal y líder espiritual supremo bajo Jesucristo.",
    },
    {
      category: "AUTORIDAD_DOCTRINAL",
      title: "Autoridad Doctrinal y Teológica",
      scope: "Iniciativa y custodia exclusiva de la Declaración de Fe (20 Artículos Fundamentales en REN-DOC-001). Ninguna enseñanza doctrinal puede adoptarse sin su consentimiento.",
      relationshipWithCouncil: "Veto doctrinal absoluto sobre cualquier propuesta teológica.",
      relationshipWithCongregation: "Maestro supremo de la congregación y del Seminario Bíblico RENACER.",
    },
    {
      category: "AUTORIDAD_ADMINISTRATIVA",
      title: "Autoridad Administrativa y Ministerial",
      scope: "Supervisión general de la estructura piramidal celular (*Pastor -> Líderes de Área -> Supervisores -> Familias de Grupo -> Discípulos*), designación de líderes y directores departamentales.",
      relationshipWithCouncil: "Propone a los miembros del Consejo de Gobierno (Pastor propone -> Consejo evalúa -> Congregación confirma).",
      relationshipWithCongregation: "Nombramiento y consagración de obreros y ministros.",
    },
    {
      category: "AUTORIDAD_CORPORATIVA",
      title: "Autoridad Corporativa y Fiduciaria",
      scope: "Presidente del Board of Trustees conforme al Certificate of Incorporation de New Jersey. Autorización indelegable para actos extraordinarios (bienes inmuebles, endeudamiento).",
      relationshipWithCouncil: "Revisión conjunta con mayoría de 2/3 para materias extraordinarias.",
      relationshipWithCongregation: "Rendición anual de cuentas e informe asambleario.",
    },
  ],

  // PARTE 2 — EVENTOS QUE REQUIEREN SUCESIÓN
  events: [
    {
      eventId: "EVT-01",
      eventType: "Incapacidad Temporal",
      description: "Afección médica transitoria que impide transitoriamente el ejercicio de funciones pastorales o fiduciarias.",
      currentDefinedProtocol: "Gobierno interino eclesiástico por el Pastor Asociado / Consejo Ministerial para funciones espirituales ordinarias.",
      pendingElements: "Plazo máximo para calificar una incapacidad como prolongada o definitiva.",
      legalReviewImpact: "Poderes fiduciarios de emergencia para firmas de cuentas bancarias y nómina.",
    },
    {
      eventId: "EVT-02",
      eventType: "Incapacidad Prolongada",
      description: "Incapacidad superior a un período determinado que requiere activación de comisión transitoria.",
      currentDefinedProtocol: "Protocolo médico de evaluación con 2 médicos especialistas certificados e independientes.",
      pendingElements: "Definición exacta del umbral de días/meses (ej. 90 días o 180 días).",
      legalReviewImpact: "Revisión de Healthcare Proxy y Durable Power of Attorney bajo la ley de NJ.",
    },
    {
      eventId: "EVT-03",
      eventType: "Incapacidad Permanente o Total",
      description: "Dictamen médico unánime e incontrovertible de al menos 2 médicos especialistas independientes que certifican la imposibilidad física/mental definitiva.",
      currentDefinedProtocol: "Consolidado en DEC-PEND-001 y DEC-DEF-177: activación obligatoria del mecanismo de sucesión institucional.",
      pendingElements: "Plazos exactos para la sesión asamblearia de confirmación del sucesor.",
      legalReviewImpact: "Transferencia corporativa formal de la Presidencia del Board of Trustees en Trenton, NJ.",
    },
    {
      eventId: "EVT-04",
      eventType: "Retiro Voluntario",
      description: "Decisión libre, personal y escrita del Pastor Fundador de traspasar la dirección principal manteniendo su condición de Pastor Emérito/Fundador.",
      currentDefinedProtocol: "Designación directa del sucesor por el Fundador para ratificación congregacional.",
      pendingElements: "Protocolo de honra, sustento emérito y funciones consultivas vitalicias.",
      legalReviewImpact: "Modificación de cargos corporativos ante el Estado de NJ.",
    },
    {
      eventId: "EVT-05",
      eventType: "Fallecimiento",
      description: "Partida con el Señor del Pastor Fundador.",
      currentDefinedProtocol: "Si dejó sucesor designado por escrito en vida: asunción y ratificación. Si no dejó designación: comisión colegiada conjunta (Consejo de Gobierno + Consejo Ministerial).",
      pendingElements: "Plazo de la comisión transitoria (ej. 6 meses) y formalidades notariales de apertura del pliego sucesorio reservado.",
      legalReviewImpact: "Ejecución de testamento corporativo / resoluciones estatutarias de Trustees en New Jersey.",
    },
    {
      eventId: "EVT-06",
      eventType: "Renuncia",
      description: "Dimisión formal expresa presentada ante el Consejo de Gobierno.",
      currentDefinedProtocol: "Activación inmediata del protocolo de transición.",
      pendingElements: "Mecanismo de aceptación y plazos de entrega formal.",
      legalReviewImpact: "Notificación oficial al Departamento del Tesoro de NJ.",
    },
  ],

  // PARTE 5 — ESCENARIOS DE SUCESIÓN Y CONTINUIDAD
  scenarios: [
    {
      scenarioName: "1. Sucesión Programada en Vida (Retiro/Transición)",
      whoActs: "Pastor Fundador propone; Consejo evalúa idoneidad; Asamblea confirma.",
      exercisedAuthority: "Plena autoridad espiritual, doctrinal y pastoral del Fundador.",
      duration: "Proceso de transición guiada de 6 a 12 meses.",
      decisionStatus: "DEFINIDO",
      legalReviewStatus: "REQUIERE_REVISION_LEGAL",
    },
    {
      scenarioName: "2. Sucesión por Pliego Reservado en Vida (Fallecimiento)",
      whoActs: "Apertura formal del pliego sucesorio ante Notario y Consejo; ratificación asamblearia.",
      exercisedAuthority: "Voluntad sucesoria expresa del Fundador ratificada colegiadamente.",
      duration: "Asunción inmediata del sucesor y ratificación en 30 a 60 días.",
      decisionStatus: "DEFINIDO",
      legalReviewStatus: "REQUIERE_REVISION_LEGAL",
    },
    {
      scenarioName: "3. Sucesión por Incapacidad Médica Certificada",
      whoActs: "Comisión médica (2 médicos independientes) emite dictamen; Consejo asume administración interina.",
      exercisedAuthority: "Gobierno colegiado interino (Consejo de Gobierno + Ministerial).",
      duration: "Interinato de transición hasta confirmación del sucesor (máx. 180 días).",
      decisionStatus: "DEFINIDO",
      legalReviewStatus: "REQUIERE_REVISION_LEGAL",
    },
    {
      scenarioName: "4. Vacancia Imprevista sin Designación Previa",
      whoActs: "Comisión conjunta (Consejo de Gobierno + Consejo Ministerial) postula por unanimidad a un candidato idóneo.",
      exercisedAuthority: "Autoridad colegiada de emergencia con consulta asamblearia.",
      duration: "Comisión de transición: PENDIENTE_DEFINIR (Propuesta: 3 a 6 meses).",
      decisionStatus: "PENDIENTE_DEFINIR",
      legalReviewStatus: "REQUIERE_REVISION_LEGAL",
    },
  ],

  // PARTE 4 — MATERIAS PENDIENTES
  pendingMattersList: [
    {
      letter: "A",
      item: "Plazo máximo de la comisión de transición interina",
      status: "PENDIENTE_DEFINIR",
      detail: "Determinar si la comisión interina operará por 90, 180 o 365 días como límite máximo antes de la elección definitiva.",
    },
    {
      letter: "B",
      item: "Duración de una autoridad pastoral interina",
      status: "PENDIENTE_DEFINIR",
      detail: "Límites temporales del pastor interino en funciones.",
    },
    {
      letter: "C",
      item: "Designación de vocero y presidente interino durante la transición",
      status: "PENDIENTE_DEFINIR",
      detail: "Definir si asume automáticamente el Pastor Asociado de mayor antigüedad o el Vicepresidente del Consejo.",
    },
    {
      letter: "D",
      item: "Reglas de votación colegiada entre Consejo de Gobierno y Consejo Ministerial",
      status: "PENDIENTE_DEFINIR",
      detail: "Fijar si la sesión conjunta vota por mayoría de 2/3 de cada cuerpo o por mayoría simple agregada.",
    },
    {
      letter: "E",
      item: "Porcentaje exacto de ratificación asamblearia congregacional",
      status: "PENDIENTE_DEFINIR",
      detail: "Determinar si el sucesor requiere mayoría simple (50% + 1) o mayoría calificada (2/3) de los miembros activos presentes con quórum.",
    },
    {
      letter: "F",
      item: "Facultades del Consejo de Gobierno durante la transición",
      status: "PENDIENTE_DEFINIR",
      detail: "Límites de administración ordinaria; prohibición expresa de modificar la Declaración de Fe o vender bienes raíces durante el interinato.",
    },
    {
      letter: "G",
      item: "Límites doctrinales de la autoridad interina",
      status: "PENDIENTE_DEFINIR",
      detail: "Inmutabilidad absoluta de los 20 Artículos de Fe durante cualquier período de transición.",
    },
    {
      letter: "H",
      item: "Separación fiduciaria bancaria corporativa en New Jersey",
      status: "PENDIENTE_DEFINIR",
      detail: "Protocolo formal de firma de cheques y administración de cuentas durante el período interino.",
    },
  ],

  // PARTE 6 — OPCIONES INSTITUCIONALES EN ESTUDIO
  options: [
    {
      optionCode: "OPC-13-A",
      name: "Vía Principal: Designación Unilateral en Vida por el Fundador",
      description: "El Pastor Fundador suscribe un pliego sucesorio formalizado que designa a su sucesor entre los ministros ordenados de RENACER con formación teológica superior, el cual es ratificado por la Asamblea Congregacional.",
      advantages: [
        "Plena garantía de fidelidad a la visión y doctrina fundacional.",
        "Evita vacíos de liderazgo y disputas internas de facciones.",
        "Procedimiento claro, ordenado y bíblico.",
      ],
      risks: [
        "Incertidumbre si el pliego sucesorio no se actualiza periódicamente ante cambios ministeriales.",
      ],
      spiritualImpact: "Continuidad del manto y ADN espiritual de RENACER.",
      administrativeImpact: "Transición ejecutiva suave y sin sobresaltos operativos.",
      corporateImpact: "Fácil protocolización de actas corporativas ante el Estado de NJ.",
      congregationalImpact: "Paz, orden y confianza en la grey.",
      possibleConflicts: "Bajo riesgo de conflicto eclesiástico.",
      mattersRequiringAttorney: "Formalidades de custodia notarial y protocolización estatutaria en NJ.",
      proposalBadge: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-13-B",
      name: "Vía de Emergencia: Selección Colegiada Conjunta ante Vacancia Imprevista",
      description: "En caso de ausencia de designación en vida, una Comisión Mixta integrada por el Consejo de Gobierno y el Consejo Ministerial evalúa a los candidatos que cumplan los requisitos constitucionales y presenta una terna o candidato único con mayoría de 2/3 para votación congregacional.",
      advantages: [
        "Institucionalidad sólida y respaldo mutuo fiduciario-ministerial.",
        "Transparencia democrática teocrática con participación congregacional.",
      ],
      risks: [
        "Tiempos de deliberación más prolongados que requieren un interinato bien reglamentado.",
      ],
      spiritualImpact: "Fortalecimiento de la madurez y discernimiento del liderazgo colectivo.",
      administrativeImpact: "Requiere un comité de transición con funciones delimitadas.",
      corporateImpact: "Requiere actas notariales de sesión conjunta bajo N.J.S.A. Title 16.",
      congregationalImpact: "Sensación de participación directa y ratificación legítima.",
      possibleConflicts: "Riesgo de polarización si no se alcanza la mayoría de 2/3 en la Comisión Mixta.",
      mattersRequiringAttorney: "Redacción del reglamento de votación conjunta y quorum corporativo.",
      proposalBadge: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 7 — PREGUNTAS PARA EL ABOGADO DE NEW JERSEY
  njAttorneyQuestions: [
    "1. ¿Cómo debe formalizarse en New Jersey el pliego sucesorio reservado del Pastor Fundador para que sea legalmente vinculante ante el Board of Trustees y las entidades bancarias?",
    "2. ¿Qué formalidades notariales y médicas (Healthcare Proxy / Durable Power of Attorney) requiere el Estado de NJ para que el dictamen de 2 médicos certificados opere la suspensión y reemplazo temporal del Presidente fiduciario?",
    "3. En caso de vacancia por fallecimiento o incapacidad, ¿cuál es el plazo estatutario máximo permitido en New Jersey para operar con un Board interino antes de elegir al nuevo Presidente corporativo?",
    "4. ¿Qué cláusulas deben incluirse en los Bylaws (REN-DOC-003) para blindar a la Iglesia de demandas de terceros durante un período de transición pastoral?",
    "5. ¿Cómo se armoniza la autoridad espiritual del sucesor con los deberes fiduciarios de los Trustees bajo N.J.S.A. 15A:6-1 et seq.?",
  ],

  // PARTE 9 — PROPUESTA DE REDACCIÓN TÉCNICA SUGERIDA
  proposedDraftText: `ARTÍCULO 13 — SUCESIÓN DEL PASTOR FUNDADOR Y CONTINUIDAD INSTITUCIONAL (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 13.1. Reconocimiento y Principio Sucesorio.
La Iglesia reconoce que la continuidad de la visión espiritual de RENACER CHURCH descansa en la fidelidad a las Sagradas Escrituras y en la sucesión ordenada del liderazgo pastoral. El Pastor Fundador Luis Uchubanda Falconí goza de autoridad espiritual vitalicia mientras viva y conserve capacidad.

Sección 13.2. Mecanismo Principal de Sucesión en Vida.
El Pastor Fundador tiene la potestad exclusiva de designar en vida a su sucesor ministerial mediante documento formal reservado. El sucesor designado deberá cumplir plenamente los requisitos de idoneidad ministerial establecidos en el Artículo 45 de esta Constitución y será ratificado por la Asamblea General de Miembros Activos con derecho a voto.

Sección 13.3. Protocolo de Incapacidad Médica.
En caso de incapacidad médica temporal o permanente del Pastor Fundador, certificada por el dictamen unánime de al menos dos (2) médicos especialistas certificados e independientes conforme a las decisiones institucionales, el Consejo de Gobierno y el Consejo Ministerial asumirán colegiadamente la administración interina eclesiástica conforme a los Bylaws corporativos.

Sección 13.4. Mecanismo Colegiado de Emergencia.
En caso de vacancia definitiva por fallecimiento o incapacidad permanente sin designación previa en vida, se constituirá de inmediato una Comisión Mixta de Transición integrada por los miembros activos del Consejo de Gobierno y del Consejo Ministerial. Dicha Comisión funcionará por un período máximo de ciento ochenta (180) días y postulará por mayoría de dos tercios (2/3) a un ministro ordenado que cumpla los requisitos constitucionales, sometiéndolo a ratificación de la Asamblea Congregacional.

Sección 13.5. Prohibiciones durante el Período Interino.
Durante cualquier período de interinato o transición, queda expresamente prohibido alterar la Declaración de Fe (REN-DOC-001), enajenar o gravar bienes inmuebles de la corporación, o modificar la estructura general de gobierno de la Iglesia.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle13Dossier(): Article13SuccessionDossier {
  return ARTICLE_13_DOSSIER;
}
