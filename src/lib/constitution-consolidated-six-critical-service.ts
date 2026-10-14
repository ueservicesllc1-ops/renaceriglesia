// ============================================================================
// RENACER CHURCH MAESTRO — FASE 41: SERVICIO DE REVISIÓN CONSOLIDADA
// DE LOS SEIS EXPEDIENTES CRÍTICOS DE LA CONSTITUCIÓN (REN-DOC-002)
// ============================================================================

import { getArticle13Dossier, Article13SuccessionDossier } from "./article-13-succession-dossier";
import { getArticle17Dossier, Article17CorporatePowersDossier } from "./article-17-corporate-powers-dossier";
import { getArticle22Dossier, Article22VotingRightsDossier } from "./article-22-voting-rights-dossier";
import { getArticle43Dossier, Article43AmendmentDossier } from "./article-43-amendment-dossier";
import { getArticle46Dossier, Article46DocumentPrecedenceDossier } from "./article-46-document-precedence-dossier";
import { getArticle47Dossier, Article47EffectiveDateDossier } from "./article-47-effective-date-dossier";

export interface MasterSixArticlesRow {
  articleNumber: 13 | 17 | 22 | 43 | 46 | 47;
  matter: string;
  sourceDecisions: string;
  definedElements: string[];
  pendingElements: string[];
  legalReviewState: "REQUIERE_REVISION_LEGAL";
  proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA";
  dossierPath: string;
  officialStatus: "PENDIENTE_DEFINIR";
}

export interface CrossConflictAuditRow {
  pairCode: string;
  articleA: number;
  articleB: number;
  relationType: "NO_CONFLICT" | "REQUIERE_REVISION" | "REQUIERE_REVISION_LEGAL" | "COORDINACION_DIRECTA";
  analysis: string;
  actionProposed: string;
}

export interface ConsolidatedAuthorityAuditRow {
  authorityName: string;
  roleType: "ESPIRITUAL" | "CORPORATIVO_FIDUCIARIO" | "ASAMBLEARIO" | "MINISTERIAL" | "TRANSICION";
  powersSummary: string;
  relevantArticles: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR";
  conflictRisk: "NO_CONFLICT" | "REQUIERE_REVISION_LEGAL";
  notes: string;
}

export interface DependencyMatrixRow {
  originArticle: number;
  relatedArticle: number;
  dependencyType: "DEPENDENCIA_DIRECTA" | "DEPENDENCIA_INDIRECTA" | "COORDINACION" | "SIN_DEPENDENCIA";
  description: string;
  status: "PENDIENTE_DEFINIR";
  requiredAction: string;
}

export interface ConsolidatedPendingMatterRow {
  articleNumber: number;
  topic: string;
  whyPending: string;
  decisionRequired: string;
  legalReviewNeed: string;
  existingProposal: string;
  decidingAuthority: string;
  status: "PENDIENTE_DEFINIR";
}

export interface ConsolidatedRiskRow {
  riskCategory: "DOCTRINAL" | "ESPIRITUAL" | "CORPORATIVO" | "FIDUCIARIO" | "DOCUMENTAL" | "SUCESION" | "ADOPCION";
  riskDescription: string;
  affectedArticle: number;
  probability: "BAJA" | "MEDIA" | "ALTA";
  impact: "ALTO" | "CRITICO";
  existingControl: string;
  pendingMitigation: string;
  legalReviewRequired: boolean;
}

export interface ConsolidatedAttorneyQuestion {
  questionId: string;
  category: "CORPORATIVO_FIDUCIARIO" | "GOBERNANZA_ASAMBLEA" | "SUCESION_TRANSICION" | "DOCUMENTAL_ENMIENDAS" | "VIGENCIA_ADOPCION";
  questionText: string;
  relatedArticles: number[];
  affectedDocuments: string;
  consultationReason: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface ConsolidatedSixCriticalSummary {
  documentId: "REN-DOC-002";
  documentTitle: "Constitución de RENACER";
  documentVersion: "0.1";
  documentStatus: "EN_REDACCION";
  documentAdoption: "NO ADOPTADA";
  totalCriticalArticles: 6;
  allDossiersCompleted: true;
  adoptionExecuted: false;
  adoptionDate: "NO DEFINIDA (PENDIENTE)";
  effectiveDate: "NO DEFINIDA (NO VIGENTE)";
  masterMatrix: MasterSixArticlesRow[];
  crossConflicts: CrossConflictAuditRow[];
  authoritiesAudit: ConsolidatedAuthorityAuditRow[];
  dependencies: DependencyMatrixRow[];
  pendingMatters: ConsolidatedPendingMatterRow[];
  risksMatrix: ConsolidatedRiskRow[];
  consolidatedAttorneyQuestions: ConsolidatedAttorneyQuestion[];
  draftArticlesConsolidated: {
    articleNumber: number;
    title: string;
    proposedDraftText: string;
    proposalNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
  }[];
}

export function getConsolidatedSixCriticalDossier(): ConsolidatedSixCriticalSummary {
  const d13 = getArticle13Dossier();
  const d17 = getArticle17Dossier();
  const d22 = getArticle22Dossier();
  const d43 = getArticle43Dossier();
  const d46 = getArticle46Dossier();
  const d47 = getArticle47Dossier();

  return {
    documentId: "REN-DOC-002",
    documentTitle: "Constitución de RENACER",
    documentVersion: "0.1",
    documentStatus: "EN_REDACCION",
    documentAdoption: "NO ADOPTADA",
    totalCriticalArticles: 6,
    allDossiersCompleted: true,
    adoptionExecuted: false,
    adoptionDate: "NO DEFINIDA (PENDIENTE)",
    effectiveDate: "NO DEFINIDA (NO VIGENTE)",

    // PARTE 2 — MATRIZ MAESTRA DE LOS 6 ARTÍCULOS
    masterMatrix: [
      {
        articleNumber: 13,
        matter: "Sucesión del Pastor Fundador y Continuidad Institucional",
        sourceDecisions: "DEC-DEF-001, DEC-DEF-002, DEC-PEND-001",
        definedElements: ["Autoridad vitalicia del Fundador", "Protocolo de 2 médicos independientes para incapacidad", "Prohibición de venta de inmuebles en interinato"],
        pendingElements: ["Plazo de comisión interina (90 vs 180 días)", "Mecanismo de ratificación asamblearia (simple vs 2/3)"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/13",
        officialStatus: "PENDIENTE_DEFINIR",
      },
      {
        articleNumber: 17,
        matter: "Quórums, Mayorías y Poderes Corporativos del Consejo de Gobierno",
        sourceDecisions: "DEC-DEF-002, DEC-DEF-004",
        definedElements: ["Consejo de 3 a 5 miembros", "Tabla de quórum (3->2, 4->3, 5->3)", "Mayoría simple ordinaria", "Mayoría 2/3 extraordinaria + Fundador", "Empate desestimado"],
        pendingElements: ["Umbral económico cuantitativo ($) para contratos extraordinarios en Bylaws"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/17",
        officialStatus: "PENDIENTE_DEFINIR",
      },
      {
        articleNumber: 22,
        matter: "Derechos Específicos de Voto y Calificación Congregacional",
        sourceDecisions: "DEC-DEF-001, DEC-DEF-002, DEC-DEF-007",
        definedElements: ["Voto exclusivo Miembros Activos", "Edad mínima 18 años", "Quórum asambleario 50%", "Mayoría simple y 2/3 para inmuebles/disolución", "Principio un miembro = un voto"],
        pendingElements: ["Porcentaje exacto de ratificación sucesoria", "Segunda convocatoria si no hay 50%"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/22",
        officialStatus: "PENDIENTE_DEFINIR",
      },
      {
        articleNumber: 43,
        matter: "Procedimiento de Enmienda y Reforma Constitucional",
        sourceDecisions: "DEC-DEF-001, DEC-DEF-002, REN-DOC-001",
        definedElements: ["Inmutabilidad de la Declaración de Fe", "Iniciativa exclusiva Fundador en Nivel A", "Clasificación en 3 Niveles (A/B/C)", "6 Cláusulas protegidas"],
        pendingElements: ["Mayoría calificada exacta para Nivel B (Propuesta 2/3 Consejo + 2/3 Asamblea)"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/43",
        officialStatus: "PENDIENTE_DEFINIR",
      },
      {
        articleNumber: 46,
        matter: "Prevalencia en Conflicto Documental y Jerarquía Normativa",
        sourceDecisions: "DEC-DEF-001, DEC-DEF-002, REN-DOC-001, REN-DOC-003",
        definedElements: ["Primacía absoluta de la Declaración de Fe en doctrina", "Separación de esferas espiritual vs corporativa", "Supremacía de ley NJ y Certificate en fiduciario"],
        pendingElements: ["Validación legal formal de la jerarquía preliminar y protocolo de 12 pasos"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/46",
        officialStatus: "PENDIENTE_DEFINIR",
      },
      {
        articleNumber: 47,
        matter: "Fecha de Vigencia Oficial, Adopción y Condiciones Previas",
        sourceDecisions: "DEC-DEF-001, DEC-DEF-002",
        definedElements: ["Inexistencia actual de fecha de adopción/vigencia", "Distinción de 7 tipos de fecha", "Prohibición de retroactividad", "ADOPT_OFFICIAL exclusivo del Fundador"],
        pendingElements: ["Fijación de la fecha real mediante Decreto de Adopción tras cumplir condiciones previas"],
        legalReviewState: "REQUIERE_REVISION_LEGAL",
        proposalsStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA",
        dossierPath: "/constitucion/decision-pastor-fundador/47",
        officialStatus: "PENDIENTE_DEFINIR",
      },
    ],

    // PARTE 3 — AUDITORÍA CRUZADA Y MATRIZ DE CONTRADICCIONES (15 PARES)
    crossConflicts: [
      { pairCode: "13 ↔ 17", articleA: 13, articleB: 17, relationType: "COORDINACION_DIRECTA", analysis: "Art. 13 regula sucesión y facultades en interinato; Art. 17 regula quórums ordinarios y 2/3 extraordinarias del Consejo. Totalmente compatibles.", actionProposed: "Coordinar en Bylaws que el presidente interino de Trustees no pueda modificar poderes de cuentas bancarias." },
      { pairCode: "13 ↔ 22", articleA: 13, articleB: 22, relationType: "REQUIERE_REVISION", analysis: "Art. 13 prevé ratificación congregacional del sucesor; Art. 22 define el quórum del 50% y mayorías. Falta definir si la ratificación requiere mayoría simple o 2/3.", actionProposed: "Fijar explícitamente el porcentaje asambleario de ratificación sucesoria en la decisión institucional del Fundador." },
      { pairCode: "13 ↔ 43", articleA: 13, articleB: 43, relationType: "NO_CONFLICT", analysis: "Art. 13 es una materia estructural (Nivel B); Art. 43 protege las cláusulas de autoridad fundacional como cláusulas protegidas inmutables en vida del Fundador.", actionProposed: "Preservar el blindaje de la autoridad vitalicia fundacional en las cláusulas pétreas del Art. 43." },
      { pairCode: "13 ↔ 46", articleA: 13, articleB: 46, relationType: "NO_CONFLICT", analysis: "Art. 46 clasifica la sucesión como materia mixta coordinada (espiritual pastoral + presidencia civil de Trustees). Coherente con Art. 13.", actionProposed: "Mantener la doble vía en el protocolo de traspaso notarial en New Jersey." },
      { pairCode: "13 ↔ 47", articleA: 13, articleB: 47, relationType: "NO_CONFLICT", analysis: "El protocolo sucesorio sólo entrará en vigor formal cuando la Constitución sea adoptada oficialmente bajo el Art. 47.", actionProposed: "No activar protocolos sucesorios antes de la adopción formal de la Carta Magna." },
      { pairCode: "17 ↔ 22", articleA: 17, articleB: 22, relationType: "COORDINACION_DIRECTA", analysis: "Art. 17 fija el gobierno fiduciario diario en el Consejo; Art. 22 reserva inmuebles y disolución a la Asamblea con 2/3. Delimitación nítida sin colisión.", actionProposed: "Reflejar fielmente la frontera de atribuciones en REN-DOC-003 (Bylaws)." },
      { pairCode: "17 ↔ 43", articleA: 17, articleB: 43, relationType: "REQUIERE_REVISION_LEGAL", analysis: "Art. 17 contempla quórum de 2/3 del Consejo para extraordinarias; Art. 43 propone que reformas de Nivel B exijan 2/3 del Consejo + 2/3 de Asamblea. Armónico pero requiere validación bajo N.J.S.A. 15A:9-1.", actionProposed: "Someter la fórmula de doble 2/3 al asesor legal de New Jersey." },
      { pairCode: "17 ↔ 46", articleA: 17, articleB: 46, relationType: "NO_CONFLICT", analysis: "Art. 17 respeta la subordinación fiduciaria a las leyes de NJ y al Certificate of Incorporation establecida en el Art. 46.", actionProposed: "Ninguna acción correctiva necesaria." },
      { pairCode: "17 ↔ 47", articleA: 17, articleB: 47, relationType: "NO_CONFLICT", analysis: "Los quórums del Consejo rigen a partir de la vigencia oficial fijada bajo el Art. 47.", actionProposed: "Mantener estado de borrador en redacción." },
      { pairCode: "22 ↔ 43", articleA: 22, articleB: 43, relationType: "COORDINACION_DIRECTA", analysis: "Art. 22 cataloga la reforma constitucional como materia reservada asamblearia; Art. 43 describe el procedimiento de 3 niveles y 5 etapas.", actionProposed: "Asegurar que la convocatoria con 30 días de anticipación de Art. 43 se armonice con el cierre del padrón de Art. 22." },
      { pairCode: "22 ↔ 46", articleA: 22, articleB: 46, relationType: "NO_CONFLICT", analysis: "Art. 22 circunscribe el voto asambleario a materias estructurales; Art. 46 ratifica que la Asamblea no gobierna la doctrina (Fundador) ni compras corrientes (Consejo).", actionProposed: "Preservar el modelo teocrático frente a desviaciones asambleístas." },
      { pairCode: "22 ↔ 47", articleA: 22, articleB: 47, relationType: "NO_CONFLICT", analysis: "Los derechos de voto asamblearios rigen plenamente a partir de la fecha de entrada en vigor de la Constitución.", actionProposed: "Mantener en borrador v0.1." },
      { pairCode: "43 ↔ 46", articleA: 43, articleB: 46, relationType: "COORDINACION_DIRECTA", analysis: "Art. 43 protege la inmutabilidad de la Declaración de Fe y cláusulas pétreas; Art. 46 consagra la primacía absoluta de la Declaración de Fe en doctrina.", actionProposed: "Total congruencia entre inmutabilidad de enmienda y supremacía doctrinal." },
      { pairCode: "43 ↔ 47", articleA: 43, articleB: 47, relationType: "NO_CONFLICT", analysis: "Art. 43 regula enmiendas futuras a la Constitución adoptada; Art. 47 regula la adopción inicial fundacional.", actionProposed: "Diferenciar la adopción fundacional originaria de las enmiendas posteriores." },
      { pairCode: "46 ↔ 47", articleA: 46, articleB: 47, relationType: "NO_CONFLICT", analysis: "Art. 46 reconoce que las leyes de New Jersey rigen la vigencia fiduciaria civil; Art. 47 supedita la vigencia al acto formal de adopción.", actionProposed: "Garantizar que la fórmula de vigencia sea radicada registralmente cuando proceda." },
    ],

    // PARTE 4 — AUDITORÍA CONSOLIDADA DE AUTORIDADES
    authoritiesAudit: [
      {
        authorityName: "Pastor Fundador (Luis Uchubanda Falconí)",
        roleType: "ESPIRITUAL",
        powersSummary: "Autoridad espiritual vitalicia, iniciativa y veto doctrinal exclusivo, presidencia de Trustees, proposición de miembros del Consejo y ejecución soberana de ADOPT_OFFICIAL.",
        relevantArticles: "Arts. 13, 17, 19, 20, 22, 43, 46, 47",
        status: "DEFINIDO",
        conflictRisk: "NO_CONFLICT",
        notes: "Soberanía fundacional plenamente armonizada en los 6 expedientes.",
      },
      {
        authorityName: "Consejo de Gobierno / Board of Trustees",
        roleType: "CORPORATIVO_FIDUCIARIO",
        powersSummary: "Administración fiduciaria ordinaria (mayoría simple), materias extraordinarias (2/3 + Fundador), aprobación presupuestaria y dictamen técnico de enmiendas.",
        relevantArticles: "Arts. 17, 22, 43, 46",
        status: "DEFINIDO",
        conflictRisk: "NO_CONFLICT",
        notes: "Poderes fiduciarios acotados a la esfera corporativa civil.",
      },
      {
        authorityName: "Consejo Ministerial",
        roleType: "MINISTERIAL",
        powersSummary: "Auxilio pastoral, disciplina eclesiástica, evaluación doctrinal consultiva y participación en comisión mixta de transición.",
        relevantArticles: "Arts. 13, 43, 46",
        status: "DEFINIDO",
        conflictRisk: "NO_CONFLICT",
        notes: "Autoridad puramente eclesial y ministerial.",
      },
      {
        authorityName: "Asamblea General de Miembros Activos",
        roleType: "ASAMBLEARIO",
        powersSummary: "Voto en catálogo reservado: venta/hipoteca de inmuebles (2/3), disolución (2/3), confirmación bienal del Consejo, ratificación sucesoria y enmiendas constitucionales (Nivel B).",
        relevantArticles: "Arts. 13, 17, 22, 43, 46",
        status: "DEFINIDO",
        conflictRisk: "REQUIERE_REVISION_LEGAL",
        notes: "Requiere validación de Voting Members estatutarios bajo N.J.S.A. 15A:5-1.",
      },
      {
        authorityName: "Comisión Mixta de Transición / Pastor Interino",
        roleType: "TRANSICION",
        powersSummary: "Gobierno colegiado de emergencia ante vacancia imprevista (máx. 180 días). Prohibido alterar doctrina o vender inmuebles.",
        relevantArticles: "Arts. 13, 17",
        status: "PENDIENTE_DEFINIR",
        conflictRisk: "REQUIERE_REVISION_LEGAL",
        notes: "Materia abierta pendiente de fijación formal de plazo exacto.",
      },
    ],

    // PARTE 12 — MATRIZ DE DEPENDENCIAS ENTRE LOS 6 ARTÍCULOS
    dependencies: [
      { originArticle: 13, relatedArticle: 22, dependencyType: "DEPENDENCIA_DIRECTA", description: "La ratificación del sucesor pastoral requiere la asamblea de miembros del Art. 22.", status: "PENDIENTE_DEFINIR", requiredAction: "Fijar porcentaje de ratificación (simple vs 2/3)." },
      { originArticle: 13, relatedArticle: 17, dependencyType: "COORDINACION", description: "La administración fiduciaria interina debe coordinarse con los quórums de directores de Art. 17.", status: "PENDIENTE_DEFINIR", requiredAction: "Armonizar poderes de firma en Bylaws." },
      { originArticle: 17, relatedArticle: 43, dependencyType: "COORDINACION", description: "La mayoría de 2/3 del Consejo para actos extraordinarios se proyecta en la aprobación de enmiendas de Nivel B.", status: "PENDIENTE_DEFINIR", requiredAction: "Validar doble mayoría calificada en NJ." },
      { originArticle: 22, relatedArticle: 43, dependencyType: "DEPENDENCIA_DIRECTA", description: "El derecho a voto en reformas constitucionales de Art. 22 se ejecuta bajo el procedimiento de Art. 43.", status: "PENDIENTE_DEFINIR", requiredAction: "Alinear plazos de notificación de 30 días con el cierre del padrón." },
      { originArticle: 43, relatedArticle: 46, dependencyType: "COORDINACION", description: "Las cláusulas protegidas de Art. 43 sustentan la primacía de la Declaración de Fe del Art. 46.", status: "PENDIENTE_DEFINIR", requiredAction: "Blindar inmutabilidad doctrinal absoluta." },
      { originArticle: 47, relatedArticle: 13, dependencyType: "DEPENDENCIA_DIRECTA", description: "El régimen sucesorio sólo adquiere vigencia tras la adopción solemne de Art. 47.", status: "PENDIENTE_DEFINIR", requiredAction: "Supeditar entrada en vigor al acto formal de adopción." },
      { originArticle: 47, relatedArticle: 43, dependencyType: "DEPENDENCIA_DIRECTA", description: "El procedimiento de enmienda de Art. 43 sólo rige una vez que la Constitución esté vigente.", status: "PENDIENTE_DEFINIR", requiredAction: "Diferenciar adopción fundacional originaria de reformas posteriores." },
    ],

    // PARTE 13 — MATRIZ CONSOLIDADA DE ASUNTOS PENDIENTES
    pendingMatters: [
      { articleNumber: 13, topic: "Plazo de interinato y porcentaje de ratificación del sucesor", whyPending: "Falta decidir si la comisión dura 90 o 180 días y si la asamblea ratifica por mayoría simple o 2/3.", decisionRequired: "Decisión soberana del Pastor Fundador.", legalReviewNeed: "Confirmar validez de plazos fiduciarios en NJ.", existingProposal: "180 días de interinato y ratificación asamblearia (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador", status: "PENDIENTE_DEFINIR" },
      { articleNumber: 17, topic: "Umbral económico ($) para contratos extraordinarios en Bylaws", whyPending: "Falta definir el criterio cuantitativo (porcentaje vs suma fija vs mixto).", decisionRequired: "Fijación del umbral en coordinación con REN-DOC-003.", legalReviewNeed: "Revisar exigencias fiduciarias de bancos de NJ.", existingProposal: "10% del presupuesto operativo anual (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador / Consejo de Gobierno", status: "PENDIENTE_DEFINIR" },
      { articleNumber: 22, topic: "Regla de segunda convocatoria para el quórum del 50%", whyPending: "Falta reglamentar qué ocurre si no asiste el 50% de miembros en primera citación.", decisionRequired: "Aprobación de la regla de segunda citación en Bylaws.", legalReviewNeed: "Validar quórum sustitutivo bajo N.J.S.A. 15A:5-9.", existingProposal: "Segunda convocatoria a los 15 días con miembros presentes (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador / Consejo de Gobierno", status: "PENDIENTE_DEFINIR" },
      { articleNumber: 43, topic: "Mayoría calificada exacta para enmiendas estructurales de Nivel B", whyPending: "Falta confirmar si se exige doble 2/3 (Consejo + Asamblea) o 2/3 Consejo + Mayoría Simple Asamblea.", decisionRequired: "Decisión soberana del Fundador en coordinación con el abogado.", legalReviewNeed: "Validación estatutaria bajo N.J.S.A. 15A:9-1.", existingProposal: "Doble mayoría de 2/3 Consejo + 2/3 Asamblea (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador", status: "PENDIENTE_DEFINIR" },
      { articleNumber: 46, topic: "Validación formal de la jerarquía documental preliminar", whyPending: "La jerarquía civil vs doctrinal requiere dictamen de abogado de NJ.", decisionRequired: "Aprobación de la cláusula de armonización en Bylaws.", legalReviewNeed: "Dictamen bajo jurisprudencia de New Jersey.", existingProposal: "Modelo híbrido de armonización en 12 pasos (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador / Asesor Legal NJ", status: "PENDIENTE_DEFINIR" },
      { articleNumber: 47, topic: "Fijación de la fecha real de adopción y vigencia oficial", whyPending: "Supeditada al cumplimiento de todas las condiciones previas y dictamen legal.", decisionRequired: "Suscripción solemne de la Resolución de Adopción (ADOPT_OFFICIAL).", legalReviewNeed: "Asegurar que la fecha sea oponible civilmente en NJ.", existingProposal: "Vigencia simultánea o diferida según Decreto de Adopción (PROPUESTA — NO ADOPTADA).", decidingAuthority: "Pastor Fundador exclusivamente", status: "PENDIENTE_DEFINIR" },
    ],

    // PARTE 15 — MATRIZ CONSOLIDADA DE RIESGOS
    risksMatrix: [
      { riskCategory: "DOCTRINAL", riskDescription: "Riesgo de que asambleas congregacionales o tribunales civiles intenten alterar la doctrina bíblica.", affectedArticle: 43, probability: "BAJA", impact: "CRITICO", existingControl: "Inmutabilidad absoluta de REN-DOC-001 y soberanía doctrinal del Fundador.", pendingMitigation: "Blindaje en cláusulas pétreas estatutarias.", legalReviewRequired: true },
      { riskCategory: "SUCESION", riskDescription: "Vacancia pastoral imprevista sin sucesor designado en vida que genere acefalía o disputas de liderazgo.", affectedArticle: 13, probability: "BAJA", impact: "CRITICO", existingControl: "Comisión Mixta de Emergencia y prohibición de venta de inmuebles en interinato.", pendingMitigation: "Pliego sucesorio reservado suscrito en vida por el Fundador.", legalReviewRequired: true },
      { riskCategory: "FIDUCIARIO", riskDescription: "Contratación de obligaciones financieras extraordinarias sin el quórum reglamentario del Board.", affectedArticle: 17, probability: "BAJA", impact: "ALTO", existingControl: "Mayoría calificada de 2/3 + visto bueno del Fundador para actos extraordinarios.", pendingMitigation: "Definición del umbral cuantitativo específico en los Bylaws.", legalReviewRequired: true },
      { riskCategory: "CORPORATIVO", riskDescription: "Impugnación de asambleas generales por alegación de defectos de quórum o calificación de miembros.", affectedArticle: 22, probability: "MEDIA", impact: "ALTO", existingControl: "Cierre del padrón 30 días antes y quórum del 50% de miembros activos.", pendingMitigation: "Opinión de abogado de NJ sobre Voting Members estatutarios.", legalReviewRequired: true },
      { riskCategory: "DOCUMENTAL", riskDescription: "Contradicciones normativas entre la Constitución interna y los Bylaws registrados en New Jersey.", affectedArticle: 46, probability: "MEDIA", impact: "ALTO", existingControl: "Separación de esferas y protocolo de armonización en 12 pasos.", pendingMitigation: "Armonización simultánea con REN-DOC-003.", legalReviewRequired: true },
      { riskCategory: "ADOPCION", riskDescription: "Asignación accidental o prematura de vigencia a borradores no adoptados formalmente.", affectedArticle: 47, probability: "BAJA", impact: "CRITICO", existingControl: "Protección técnica inmutable en sistema Maestro y bloqueo de ADOPT_OFFICIAL.", pendingMitigation: "Decreto formal solemne firmado exclusivamente por el Fundador.", legalReviewRequired: false },
    ],

    // PARTE 18 — CUESTIONARIO JURÍDICO CONSOLIDADO PARA EL ABOGADO DE NEW JERSEY
    consolidatedAttorneyQuestions: [
      {
        questionId: "CONS-LEGAL-01",
        category: "CORPORATIVO_FIDUCIARIO",
        questionText: "¿Son plenamente válidos y exigibles bajo N.J.S.A. 15A:6-7 la tabla de quórum escalonada (3->2, 4->3, 5->3) y la regla de desempate para el Board of Trustees de una corporación religiosa en New Jersey?",
        relatedArticles: [17],
        affectedDocuments: "REN-DOC-002 (Art. 17) y REN-DOC-003 (Bylaws)",
        consultationReason: "Garantizar la validez corporativa de los acuerdos fiduciarios ante bancos y notarios de NJ.",
        riskIfNotDefined: "Impugnación de resoluciones por vicios de quórum.",
        requiresAttorney: "SÍ",
      },
      {
        questionId: "CONS-LEGAL-02",
        category: "GOBERNANZA_ASAMBLEA",
        questionText: "¿Cómo califica la ley de New Jersey (N.J.S.A. 15A:5-1) a los miembros activos eclesiales: es legalmente válido restringir el derecho a voto únicamente a un catálogo reservado de materias estructurales e inmuebles?",
        relatedArticles: [22],
        affectedDocuments: "REN-DOC-002 (Art. 22) y REN-DOC-003",
        consultationReason: "Proteger el modelo teocrático y la agilidad de la junta directiva frente a pretensiones de voto universal presupuestario.",
        riskIfNotDefined: "Litigios de miembros que aleguen derechos de voto universales en compras menores.",
        requiresAttorney: "SÍ",
      },
      {
        questionId: "CONS-LEGAL-03",
        category: "SUCESION_TRANSICION",
        questionText: "¿Qué fuerza legal vinculante tiene un pliego sucesorio reservado suscrito en vida por el Pastor Fundador para el traspaso de la presidencia del Board of Trustees y poderes bancarios en New Jersey?",
        relatedArticles: [13, 17],
        affectedDocuments: "REN-DOC-002 (Art. 13) y REN-DOC-003",
        consultationReason: "Asegurar la continuidad institucional sin bloqueo bancario ante fallecimiento o incapacidad médica permanente.",
        riskIfNotDefined: "Congelamiento preventivo de cuentas bancarias ante vacancia del titular.",
        requiresAttorney: "SÍ",
      },
      {
        questionId: "CONS-LEGAL-04",
        category: "DOCUMENTAL_ENMIENDAS",
        questionText: "¿Es legalmente exigible en New Jersey la cláusula de doble mayoría calificada (2/3 del Board + 2/3 de la Asamblea) para enmendar la Constitución eclesiástica y cómo debe coordinarse con el Certificate of Incorporation en Trenton?",
        relatedArticles: [43, 46],
        affectedDocuments: "REN-DOC-002 (Art. 43) y Certificate of Incorporation",
        consultationReason: "Asegurar que las reformas estatutarias cumplan con los trámites registrales del Estado de NJ.",
        riskIfNotDefined: "Falta de oponibilidad de enmiendas frente a terceros o el Estado.",
        requiresAttorney: "SÍ",
      },
      {
        questionId: "CONS-LEGAL-05",
        category: "VIGENCIA_ADOPCION",
        questionText: "¿Qué solemnidades de certificación y actas exige New Jersey para acreditar la adopción oficial y entrada en vigor de la Carta Magna, y cuál es la protección de la doctrina de abstención eclesiástica de la Primera Enmienda?",
        relatedArticles: [46, 47],
        affectedDocuments: "REN-DOC-001, REN-DOC-002 y Acta de Adopción",
        consultationReason: "Blindaje absoluto de la soberanía doctrinal y eclesiástica de RENACER CHURCH.",
        riskIfNotDefined: "Interferencias judiciales civiles en controversias de doctrina o disciplina.",
        requiresAttorney: "SÍ",
      },
    ],

    // PARTE 17 — PROPUESTA DE TEXTO CONSOLIDADO (BORRADOR NO ADOPTADO)
    draftArticlesConsolidated: [
      { articleNumber: 13, title: d13.title, proposedDraftText: d13.proposedDraftText, proposalNotice: d13.proposedDraftNotice },
      { articleNumber: 17, title: d17.title, proposedDraftText: d17.proposedDraftText, proposalNotice: d17.proposedDraftNotice },
      { articleNumber: 22, title: d22.title, proposedDraftText: d22.proposedDraftText, proposalNotice: d22.proposedDraftNotice },
      { articleNumber: 43, title: d43.title, proposedDraftText: d43.proposedDraftText, proposalNotice: d43.proposedDraftNotice },
      { articleNumber: 46, title: d46.title, proposedDraftText: d46.proposedDraftText, proposalNotice: d46.proposedDraftNotice },
      { articleNumber: 47, title: d47.title, proposedDraftText: d47.proposedDraftText, proposalNotice: d47.proposedDraftNotice },
    ],
  };
}
