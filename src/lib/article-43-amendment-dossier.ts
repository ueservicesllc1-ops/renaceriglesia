// ============================================================================
// RENACER CHURCH MAESTRO — FASE 38: EXPEDIENTE TÉCNICO DEL ARTÍCULO 43
// PROCEDIMIENTO DE ENMIENDA Y REFORMA CONSTITUCIONAL (REN-DOC-002)
// ============================================================================

export interface AmendmentLevelRow {
  levelCode: "NIVEL_A" | "NIVEL_B" | "NIVEL_C";
  levelName: string;
  scopeOfChange: string;
  whoProposes: string;
  whoReviews: string;
  whoApproves: string;
  requiredMajority: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
  legalReviewRequired: boolean;
  notes: string;
}

export interface EntrenchedClauseRow {
  clauseName: string;
  document: string;
  protectionType: "INMUTABLE_ABSOLUTA" | "RESERVADA_FUNDACIONAL" | "MAYORIA_CALIFICADA_DUAL" | "LEGAL_IMPERATIVA";
  currentProcedure: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
  legalReviewRequired: boolean;
}

export interface CouncilAssemblyAmendmentAction {
  actionStage: string;
  founderRole: string;
  councilRole: string;
  assemblyRole: string;
  requiredMajority: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR";
}

export interface AmendmentLimitItem {
  prohibitionName: string;
  description: string;
  classification: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL" | "PROPUESTA";
  sourceOrReason: string;
}

export interface AmendmentOptionArt43 {
  optionCode: string;
  name: string;
  description: string;
  advantages: string[];
  risks: string[];
  institutionalImpact: string;
  corporateImpact: string;
  legalReviewNeed: string;
  proposalNotice: "PROPUESTA — NO ADOPTADA";
}

export interface NjAttorneyQuestionArt43 {
  questionNumber: number;
  questionText: string;
  consultationReason: string;
  affectedDocument: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface Article43AmendmentDossier {
  articleNumber: 43;
  documentId: "REN-DOC-002";
  title: "Procedimiento de Enmienda y Reforma Constitucional";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  levelsMatrix: AmendmentLevelRow[];
  entrenchedClauses: EntrenchedClauseRow[];
  rolesMatrix: CouncilAssemblyAmendmentAction[];
  amendmentLimits: AmendmentLimitItem[];
  options: AmendmentOptionArt43[];
  attorneyQuestions: NjAttorneyQuestionArt43[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_43_DOSSIER: Article43AmendmentDossier = {
  articleNumber: 43,
  documentId: "REN-DOC-002",
  title: "Procedimiento de Enmienda y Reforma Constitucional",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 2 — CLASIFICACIÓN DE LOS TRES NIVELES DE ENMIENDA
  levelsMatrix: [
    {
      levelCode: "NIVEL_A",
      levelName: "Nivel A — Enmiendas Doctrinales y Propósito Supremo",
      scopeOfChange: "Declaración de Fe (20 Artículos en REN-DOC-001), visión, misión fundacional e inmutabilidad bíblica.",
      whoProposes: "Pastor Fundador exclusivamente",
      whoReviews: "Consejo Ministerial",
      whoApproves: "Pastor Fundador (Soberanía Doctrinal)",
      requiredMajority: "Inmutable / Iniciativa y Consentimiento Exclusivo del Fundador",
      status: "DEFINIDO",
      legalReviewRequired: false,
      notes: "Protegida bajo la cláusula eclesiástica de libertad religiosa de la Primera Enmienda de EE.UU.",
    },
    {
      levelCode: "NIVEL_B",
      levelName: "Nivel B — Enmiendas Estructurales e Institucionales",
      scopeOfChange: "Estructura de gobierno, composición y períodos del Consejo, sucesión pastoral, derechos de voto, quórums y disolución.",
      whoProposes: "Pastor Fundador o Consejo de Gobierno",
      whoReviews: "Consejo de Gobierno y Consejo Ministerial",
      whoApproves: "Pastor Fundador + Consejo de Gobierno + Asamblea General de Miembros",
      requiredMajority: "PENDIENTE_DEFINIR (Propuesta en estudio: 2/3 Consejo + 2/3 Asamblea + Visto Bueno del Fundador)",
      status: "PENDIENTE_DEFINIR",
      legalReviewRequired: true,
      notes: "Requiere fijación formal de mayorías y coordinación con Certificate of Incorporation ante el Estado de NJ.",
    },
    {
      levelCode: "NIVEL_C",
      levelName: "Nivel C — Enmiendas Operativas, Manuales y Reglamentos",
      scopeOfChange: "Manuales ministeriales, reglamentos de departamentos, currículo del Seminario y procedimientos operativos estándar (SOPs).",
      whoProposes: "Directores de Departamento o Consejo Ministerial",
      whoReviews: "Comité de Normativa / Consejo Ministerial",
      whoApproves: "Consejo de Gobierno o Consejo Ministerial según materia",
      requiredMajority: "Mayoría simple del cuerpo competente",
      status: "DEFINIDO",
      legalReviewRequired: false,
      notes: "Subordinados estrictamente a la Constitución y Declaración de Fe.",
    },
  ],

  // PARTE 5 — CLÁUSULAS ESPECIALMENTE PROTEGIDAS (ENTRENCHED CLAUSES)
  entrenchedClauses: [
    {
      clauseName: "1. Inmutabilidad de las Sagradas Escrituras y Declaración de Fe",
      document: "REN-DOC-001 / REN-DOC-002 (Art. 7, 8)",
      protectionType: "INMUTABLE_ABSOLUTA",
      currentProcedure: "Ninguna enmienda puede alterar la inerrancia bíblica ni los 20 artículos doctrinales.",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      clauseName: "2. Autoridad Doctrinal y Espiritual Vitalicia del Pastor Fundador",
      document: "REN-DOC-002 (Art. 19, 20)",
      protectionType: "RESERVADA_FUNDACIONAL",
      currentProcedure: "Iniciativa exclusiva del Fundador; no puede suprimirse por mayoría asamblearia.",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      clauseName: "3. Prohibición de Beneficio Privado e Inalienabilidad Patrimonial",
      document: "REN-DOC-002 (Art. 39) / Articles of Incorporation",
      protectionType: "LEGAL_IMPERATIVA",
      currentProcedure: "Exigencia imperativa IRS 501(c)(3) y N.J.S.A. Los bienes pertenecen solo a la corporación.",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      clauseName: "4. Cláusula de Disolución y Destino Exclusivo a Entidad 501(c)(3)",
      document: "REN-DOC-002 (Art. 48) / Articles of Incorporation",
      protectionType: "LEGAL_IMPERATIVA",
      currentProcedure: "Prohibición absoluta de repartir remanentes entre particulares o miembros.",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      clauseName: "5. Política de Protección de Menores y Personas Vulnerables",
      document: "REN-DOC-002 (Art. 44) / REN-DOC-014",
      protectionType: "LEGAL_IMPERATIVA",
      currentProcedure: "Tolerancia cero y background checks obligatorios no dispensables por acuerdo.",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      clauseName: "6. Quórum Congregacional del 50% de Miembros Activos",
      document: "REN-DOC-002 (Art. 22, 38)",
      protectionType: "MAYORIA_CALIFICADA_DUAL",
      currentProcedure: "Regla inmutable para la validez de asambleas generales.",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
  ],

  // PARTE 7 — MATRIZ DE ROLES EN EL PROCEDIMIENTO DE ENMIENDA
  rolesMatrix: [
    {
      actionStage: "1. Iniciativa de Enmienda",
      founderRole: "Iniciativa plena y exclusiva en Nivel A; iniciativa compartida en Nivel B",
      councilRole: "Puede proponer enmiendas en Nivel B y C",
      assemblyRole: "Puede solicitar revisión mediante petición firmada por el 20% de miembros",
      requiredMajority: "Fase de proposición",
      status: "DEFINIDO",
    },
    {
      actionStage: "2. Notificación Previa Formal",
      founderRole: "Autoriza la emisión de la convocatoria",
      councilRole: "Publica y remite el texto íntegro con 30 días de anticipación",
      assemblyRole: "Recibe el expediente para estudio con 30 días de anticipación",
      requiredMajority: "Formalidad procesal obligatoria",
      status: "DEFINIDO",
    },
    {
      actionStage: "3. Dictamen de Revisión Técnica",
      founderRole: "Revisa alineación doctrinal y visión",
      councilRole: "Emite dictamen fiduciario y estatutario",
      assemblyRole: "No interviene en el dictamen técnico previo",
      requiredMajority: "Mayoría simple del Consejo",
      status: "DEFINIDO",
    },
    {
      actionStage: "4. Aprobación del Consejo",
      founderRole: "Visto Bueno formal",
      councilRole: "Vota la enmienda",
      assemblyRole: "No interviene en la sesión de directores",
      requiredMajority: "PENDIENTE_DEFINIR (Propuesta: 2/3 del Consejo)",
      status: "PENDIENTE_DEFINIR",
    },
    {
      actionStage: "5. Ratificación Asamblearia (Nivel B)",
      founderRole: "Preside o delega la asamblea",
      councilRole: "Presenta el dictamen y sustenta la propuesta",
      assemblyRole: "Vota en sesión extraordinaria con quórum del 50%",
      requiredMajority: "PENDIENTE_DEFINIR (Propuesta: 2/3 de Miembros presentes)",
      status: "PENDIENTE_DEFINIR",
    },
    {
      actionStage: "6. Adopción Oficial y Promulgación",
      founderRole: "ADOPT_OFFICIAL exclusivo y solemne",
      councilRole: "Registra el acta oficial en el Libro de Actas",
      assemblyRole: "Acatamiento y vigencia",
      requiredMajority: "Soberanía exclusiva del Pastor Fundador",
      status: "DEFINIDO",
    },
  ],

  // PARTE 8 — LÍMITES Y PROHIBICIONES DEL PROCEDIMIENTO DE ENMIENDA
  amendmentLimits: [
    {
      prohibitionName: "Prohibición de alterar la Declaración de Fe mediante vía constitucional",
      description: "Ninguna enmienda a la Constitución puede modificar, derogar o relajar los 20 artículos doctrinales de REN-DOC-001.",
      classification: "DEFINIDO",
      sourceOrReason: "DEC-DEF-001 / Soberanía doctrinal inmutable",
    },
    {
      prohibitionName: "Prohibición de enmiendas que habiliten el beneficio privado o lucro personal",
      description: "Queda terminantemente prohibida cualquier enmienda que permita transferir bienes o rentas a directores o miembros a título particular.",
      classification: "DEFINIDO",
      sourceOrReason: "IRS Sección 501(c)(3) y N.J.S.A. 15A:2-8",
    },
    {
      prohibitionName: "Prohibición de suprimir la autoridad fundacional en vida del Fundador",
      description: "No es jurídicamente admisible una enmienda promovida por terceros que intente despojar al Pastor Fundador de sus facultades vitalicias.",
      classification: "DEFINIDO",
      sourceOrReason: "DEC-DEF-001 / Reconocimiento fundacional vitalicio",
    },
    {
      prohibitionName: "Prohibición de contradecir la legislación civil imperativa de New Jersey",
      description: "Ningún procedimiento de enmienda puede arrogarse facultades que violen normas de orden público o disposiciones del Certificate of Incorporation registrado.",
      classification: "DEFINIDO",
      sourceOrReason: "Derecho Corporativo de New Jersey",
    },
    {
      prohibitionName: "Fijación definitiva del procedimiento de enmienda en Certificate of Incorporation",
      description: "Determinar si el procedimiento de enmienda constitucional debe inscribirse formalmente como enmienda al Certificate of Incorporation en Trenton, NJ.",
      classification: "REQUIERE_REVISION_LEGAL",
      sourceOrReason: "Revisión legal de New Jersey obligatoria",
    },
  ],

  // PARTE 10 — OPCIONES INSTITUCIONALES EN ESTUDIO (PROPUESTAS NO ADOPTADAS)
  options: [
    {
      optionCode: "OPC-43-A",
      name: "Alternativa A: Sistema Escalonado de Tres Niveles (A/B/C) con Doble Mayoría Calificada",
      description: "Nivel A (Doctrina: Fundador exclusivo) / Nivel B (Estructura: 2/3 Consejo + 2/3 Asamblea + Visto Bueno Fundador) / Nivel C (Reglamentos: Mayoría simple del Consejo o Ministerial).",
      advantages: [
        "Máxima estabilidad constitucional y congruencia teocrática.",
        "Blindaje absoluto de la doctrina sin rigidez excesiva en reglamentos operativos.",
        "Exige consenso amplio en materias estructurales.",
      ],
      risks: [
        "Proceso deliberativo más extenso para reformas de Nivel B.",
      ],
      institutionalImpact: "Excelente orden institucional y certidumbre jurídica duradera.",
      corporateImpact: "Cumplimiento riguroso de estándares fiduciarios de New Jersey.",
      legalReviewNeed: "Revisar conformidad del procedimiento de doble mayoría con N.J.S.A. 15A:9-1.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-43-B",
      name: "Alternativa B: Mayoría Calificada Simple de Consejo y Ratificación de Asamblea",
      description: "Las enmiendas estructurales de Nivel B se aprueban por 2/3 del Consejo de Gobierno y se someten a ratificación asamblearia por mayoría simple (más del 50%).",
      advantages: [
        "Mayor agilidad en la ratificación asamblearia.",
      ],
      risks: [
        "Menor exigencia de consenso congregacional para reformas de gran envergadura.",
      ],
      institutionalImpact: "Mayor concentración de la decisión en el Consejo fiduciario.",
      corporateImpact: "Fácil cumplimiento numérico en asambleas.",
      legalReviewNeed: "Revisión estatutaria por abogado de NJ.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-43-C",
      name: "Alternativa C: Procedimiento con Iniciativa Exclusiva del Fundador para Toda la Carta Magna",
      description: "Toda enmienda a cualquier artículo de la Constitución requiere obligatoriamente iniciativa formal escrita del Pastor Fundador en vida.",
      advantages: [
        "Blindaje supremo de la visión fundacional durante la vida del Fundador.",
      ],
      risks: [
        "Requiere un protocolo sucesorio explícito para la etapa posterior a la vacancia del Fundador.",
      ],
      institutionalImpact: "Plena autoridad fundacional vitalicia.",
      corporateImpact: "Debe estar explícitamente reflejado en los Bylaws registrados en NJ.",
      legalReviewNeed: "Revisión de legalidad bajo el Nonprofit Corporation Act de NJ.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 11 — CUESTIONARIO JURÍDICO PARA EL ASESOR LEGAL DE NEW JERSEY (13 PREGUNTAS)
  attorneyQuestions: [
    {
      questionNumber: 1,
      questionText: "¿Es legalmente vinculante bajo N.J.S.A. 15A:9-1 et seq. un procedimiento estatutario que exija doble mayoría calificada (2/3 del Board + 2/3 de la Asamblea) para enmendar la Constitución de una corporación religiosa?",
      consultationReason: "Confirmar que la doble mayoría de 2/3 sea plenamente exigible ante tribunales y notarios de NJ.",
      affectedDocument: "REN-DOC-002 (Art. 43) y REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Impugnación de enmiendas aprobadas por mayorías menores a las deseadas.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 2,
      questionText: "¿Cómo debe coordinarse la enmienda de la Constitución interna con la modificación formal del Certificate of Incorporation registrado en Trenton, NJ?",
      consultationReason: "Evitar que enmiendas constitucionales internas generen discrepancias con el documento fundacional público.",
      affectedDocument: "Certificate of Incorporation y REN-DOC-002",
      riskIfNotDefined: "Invalidez corporativa de reformas constitucionales frente al Estado de NJ.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 3,
      questionText: "¿Son jurídicamente válidas en New Jersey las cláusulas pétreas (inmutables) que prohíben la alteración de la doctrina o la autoridad fundacional?",
      consultationReason: "Blindar la inmutabilidad doctrinal bajo la doctrina de abstención eclesiástica de la Primera Enmienda.",
      affectedDocument: "REN-DOC-001 y REN-DOC-002",
      riskIfNotDefined: "Demandas que pretendan forzar votaciones sobre doctrinas protegidas.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 4,
      questionText: "¿Qué plazo formal de notificación previa exige la ley de New Jersey para convocar a una asamblea de miembros con el propósito de enmendar estatutos?",
      consultationReason: "Validar que el plazo propuesto de 30 días cumpla o supere los mínimos de N.J.S.A. 15A:5-4.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Nulidad de la asamblea por defecto formal de citación previa.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 5,
      questionText: "¿Qué formalidades de actas y certificados de enmienda deben radicarse ante el Departamento del Tesoro de NJ tras aprobarse una reforma constitucional?",
      consultationReason: "Cumplimiento puntual de las obligaciones registrales corporativas en NJ.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Falta de oponibilidad de los estatutos reformados frente a terceros y bancos.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 6,
      questionText: "¿Puede reservarse legalmente la iniciativa de enmienda exclusivamente al Pastor Fundador en una corporación sin fines de lucro de New Jersey?",
      consultationReason: "Verificar la viabilidad de la potestad de iniciativa fundacional bajo N.J.S.A. Title 16.",
      affectedDocument: "REN-DOC-002 (Art. 43)",
      riskIfNotDefined: "Cuestionamiento sobre la legalidad de la iniciativa reservada.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 7,
      questionText: "¿Cómo opera la enmienda de los Bylaws frente a la enmienda de la Constitución si ambos documentos regulan materias conexas?",
      consultationReason: "Establecer la regla de prelación y reforma simultánea en los estatutos.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Contradicciones normativas entre la Constitución y los Bylaws.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 8,
      questionText: "¿Qué restricciones impone el IRS y la ley de New Jersey respecto a enmiendas que afecten cláusulas de disolución o prohibición de beneficio privado?",
      consultationReason: "Preservación ineludible del estatus de exención fiscal bajo la Sección 501(c)(3).",
      affectedDocument: "REN-DOC-002 (Art. 39, 48)",
      riskIfNotDefined: "Pérdida de la exención tributaria federal 501(c)(3).",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 9,
      questionText: "¿Qué quorum de directores y miembros es imperativo registrar en los Bylaws para que la reforma sea oponible ante entidades bancarias de NJ?",
      consultationReason: "Asegurar que los bancos reconozcan la legitimidad de los nuevos estatutos.",
      affectedDocument: "REN-DOC-003",
      riskIfNotDefined: "Bloqueo de cuentas bancarias ante dudas de personería reformada.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 10,
      questionText: "¿Permite New Jersey la votación telemática o electrónica de miembros para la aprobación de reformas estatutarias?",
      consultationReason: "Habilitar legalmente mecanismos digitales de votación en asambleas extraordinarias.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Impugnación de votos emitidos por plataformas digitales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 11,
      questionText: "¿Qué derechos de impugnación judicial tienen los miembros disidentes tras la aprobación de una enmienda constitucional en NJ?",
      consultationReason: "Conocer los plazos de caducidad y prescripción de acciones de impugnación corporativa.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Litigios tardíos por parte de exmiembros o disidentes.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 12,
      questionText: "¿Cómo debe redactarse la cláusula de vigencia y promulgación de enmiendas para que tenga efecto civil inmediato en New Jersey?",
      consultationReason: "Fijar con precisión el momento de entrada en vigor de cualquier reforma.",
      affectedDocument: "REN-DOC-002 (Art. 43, 47)",
      riskIfNotDefined: "Incertidumbre sobre qué versión estatutaria rige en actos transitorios.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 13,
      questionText: "¿Qué documentación debe conservar permanentemente la Secretaría de la Iglesia para acreditar la validez de todas las enmiendas históricas?",
      consultationReason: "Custodia documental probatoria inmutable conforme a la ley de NJ.",
      affectedDocument: "REN-DOC-019 (Registro Histórico)",
      riskIfNotDefined: "Pérdida de trazabilidad de versiones estatutarias.",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 43
  proposedDraftText: `ARTÍCULO 43 — PROCEDIMIENTO DE ENMIENDA Y REFORMA CONSTITUCIONAL (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 43.1. Principio de Estabilidad e Inmutabilidad Doctrinal.
La presente Constitución constituye la norma suprema de gobierno eclesiástico de RENACER CHURCH y ha sido concebida para salvaguardar la pureza doctrinal, la visión espiritual y el orden institucional a través de las generaciones. Las Sagradas Escrituras y los veinte (20) Artículos Fundamentales de la Declaración de Fe (REN-DOC-001) son inmutables y no podrán ser modificados, derogados ni relativizados mediante ningún procedimiento de enmienda constitucional.

Sección 43.2. Clasificación Escalonada de Enmiendas (Niveles A, B y C).
Toda propuesta de modificación normativa en el seno de la Iglesia se clasificará imperativamente en uno de los siguientes tres niveles:
a) Nivel A (Materias Doctrinales y Propósito Supremo): Corresponde a la custodia de la fe y doctrina bíblica. Su iniciativa, interpretación y preservación corresponden con soberanía exclusiva al Pastor Fundador, oído el Consejo Ministerial.
b) Nivel B (Enmiendas Estructurales e Institucionales): Corresponde a reformas a la estructura de gobierno, facultades de los consejos, sucesión pastoral, derechos de voto, quórums, patrimonio y disolución. Requerirán la iniciativa formal del Pastor Fundador o del Consejo de Gobierno, notificación escrita con treinta (30) días de anticipación, y aprobación mediante la mayoría calificada que determine formalmente la Iglesia en coordinación con la ley civil de New Jersey.
c) Nivel C (Reglamentos y Manuales Operativos): Corresponde a los manuales departamentales y procedimientos operativos estándar (SOPs). Serán reformados por mayoría simple del Consejo de Gobierno o Consejo Ministerial, según su competencia, debiendo guardar estricta sujeción a la presente Constitución.

Sección 43.3. Proceso Formal de Reforma Estructural.
Para las enmiendas de Nivel B, el procedimiento observará las siguientes etapas indispensables:
1. Proposición formal debidamente sustentada ante la Secretaría de la Iglesia.
2. Emisión del dictamen técnico-jurídico por el Consejo de Gobierno.
3. Notificación y entrega del texto íntegro a los Miembros Activos con treinta (30) días de anticipación a la Asamblea Extraordinaria.
4. Deliberación y votación en sesión asamblearia extraordinaria con quórum reglamentario del cincuenta por ciento (50%).
5. Adopción solemne y promulgación por el Pastor Fundador (ADOPT_OFFICIAL) y posterior radicación estatutaria conforme a las leyes de New Jersey.

Sección 43.4. Límites Sustanciales y Prohibiciones Absolutas.
Ninguna enmienda podrá:
a) Habilitar el lucro personal, distribución de utilidades o beneficio privado prohibido por la Sección 501(c)(3) del Código de Rentas Internas.
b) Suprimir las políticas obligatorias de protección a menores y personas vulnerables.
c) Desconocer la autoridad fundacional vitalicia del Pastor Fundador mientras viva y conserve capacidad.
d) Contradecir el Certificate of Incorporation registrado o las leyes imperativas del Estado de New Jersey.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle43Dossier(): Article43AmendmentDossier {
  return ARTICLE_43_DOSSIER;
}
