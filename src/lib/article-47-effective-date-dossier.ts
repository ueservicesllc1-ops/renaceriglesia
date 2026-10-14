// ============================================================================
// RENACER CHURCH MAESTRO — FASE 40: EXPEDIENTE TÉCNICO DEL ARTÍCULO 47
// FECHA DE VIGENCIA OFICIAL, ADOPCIÓN Y CONDICIONES PREVIAS (REN-DOC-002)
// ============================================================================

export interface InstitutionalDateTypeRow {
  dateType: string;
  whoCanDetermine: string;
  registeringDocument: string;
  whenItCanExist: string;
  currentStatus: "REGISTRADA" | "NO_DEFINIDA_PENDIENTE";
  currentValue: string;
  notes: string;
}

export interface AdoptionPreconditionItem {
  conditionCode: string;
  conditionName: string;
  description: string;
  classification: "DEFINIDA" | "PENDIENTE" | "REQUIERE_REVISION_LEGAL" | "PROPUESTA";
  sourceOrRequirement: string;
}

export interface SixCriticalMattersStatusRow {
  articleNumber: number;
  matter: string;
  status: "PENDIENTE_DEFINIR";
  legalReview: "REQUIERE_REVISION_LEGAL";
  dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO";
  proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA";
  adoptionStatus: "NO_ADOPTADA";
}

export interface AdoptionProposedStep {
  stepNumber: number;
  stepName: string;
  description: string;
  authority: string;
}

export interface EffectiveDateOptionArt47 {
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

export interface NjAttorneyQuestionArt47 {
  questionNumber: number;
  questionText: string;
  consultationReason: string;
  affectedDocument: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface Article47EffectiveDateDossier {
  articleNumber: 47;
  documentId: "REN-DOC-002";
  title: "Fecha de Vigencia Oficial y Promulgación Constitucional";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  documentStatusInventory: { code: string; title: string; version: string; status: string; adoption: string }[];
  datesMatrix: InstitutionalDateTypeRow[];
  preconditions: AdoptionPreconditionItem[];
  sixCriticalMatters: SixCriticalMattersStatusRow[];
  adoptionFlow: AdoptionProposedStep[];
  options: EffectiveDateOptionArt47[];
  attorneyQuestions: NjAttorneyQuestionArt47[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_47_DOSSIER: Article47EffectiveDateDossier = {
  articleNumber: 47,
  documentId: "REN-DOC-002",
  title: "Fecha de Vigencia Oficial y Promulgación Constitucional",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 1 — INVENTARIO DE ESTADOS DOCUMENTALES ACTUALES
  documentStatusInventory: [
    { code: "REN-DOC-001", title: "Declaración de Fe (20 Artículos)", version: "v1.0", status: "BORRADOR", adoption: "NO ADOPTADA" },
    { code: "REN-DOC-002", title: "Constitución de RENACER", version: "v0.1", status: "EN_REDACCION", adoption: "NO ADOPTADA" },
    { code: "REN-DOC-003", title: "Bylaws de RENACER CHURCH, INC.", version: "v0.1", status: "PLANIFICADO", adoption: "NO ADOPTADA" },
    { code: "REN-DOC-000", title: "Certificate of Incorporation", version: "v1.0", status: "VIGENTE_REGISTRADO", adoption: "REGISTRADO_NJ" },
  ],

  // PARTE 2 — MATRIZ DIFERENCIADORA DE FECHAS INSTITUCIONALES
  datesMatrix: [
    {
      dateType: "1. Fecha de Redacción Inicial",
      whoCanDetermine: "Comisión Redactora / Redactor Técnico",
      registeringDocument: "Historial de versiones en REN-DOC-002",
      whenItCanExist: "Durante la fase de elaboración de borradores (Fase 31)",
      currentStatus: "REGISTRADA",
      currentValue: "2026-09-03 (Inicio de redacción de borrador v0.1)",
      notes: "Fecha de trabajo técnico, no confiere ninguna vigencia jurídica ni eclesial.",
    },
    {
      dateType: "2. Fecha de Revisión y Auditoría",
      whoCanDetermine: "Auditor Constitucional / Comité Técnico",
      registeringDocument: "Expedientes de Auditoría (Fases 32B a 39)",
      whenItCanExist: "Durante la auditoría de los 48 artículos",
      currentStatus: "REGISTRADA",
      currentValue: "2026-09-03 (Conclusión de auditoría técnica)",
      notes: "Acredita la revisión de integridad de los 48 artículos.",
    },
    {
      dateType: "3. Fecha de Propuesta Formal",
      whoCanDetermine: "Pastor Fundador / Consejo de Gobierno",
      registeringDocument: "Pliego de propuesta técnica",
      whenItCanExist: "Cuando se remite el texto para revisión legal externa",
      currentStatus: "NO_DEFINIDA_PENDIENTE",
      currentValue: "PENDIENTE (Aún no remitida formalmente)",
      notes: "Fecha en que el borrador consolidado se somete a dictamen del abogado.",
    },
    {
      dateType: "4. Fecha de Aprobación Interna Colegiada",
      whoCanDetermine: "Consejo de Gobierno / Asamblea General",
      registeringDocument: "Acta de sesión de directores o asamblea",
      whenItCanExist: "Tras la votación favorable del cuerpo competente",
      currentStatus: "NO_DEFINIDA_PENDIENTE",
      currentValue: "PENDIENTE (No se han celebrado asambleas de aprobación)",
      notes: "Aprobación estatutaria colegiada previa a la adopción oficial solemne.",
    },
    {
      dateType: "5. Fecha de Adopción Oficial Solemne",
      whoCanDetermine: "Pastor Fundador exclusivamente (ADOPT_OFFICIAL)",
      registeringDocument: "Decreto o Resolución Solemne de Adopción",
      whenItCanExist: "Exclusivamente al ejecutarse ADOPT_OFFICIAL por el Fundador",
      currentStatus: "NO_DEFINIDA_PENDIENTE",
      currentValue: "PENDIENTE (NO ADOPTADA)",
      notes: "Acto soberano que transforma el borrador en norma oficial.",
    },
    {
      dateType: "6. Fecha de Entrada en Vigor (Vigencia)",
      whoCanDetermine: "Pastor Fundador en el acto de adopción",
      registeringDocument: "Artículo 47 de la Constitución Adoptada",
      whenItCanExist: "En la fecha de adopción o fecha diferida expresamente fijada",
      currentStatus: "NO_DEFINIDA_PENDIENTE",
      currentValue: "PENDIENTE (NO VIGENTE)",
      notes: "Momento exacto en que las normas constitucionales obligan formalmente a la Iglesia.",
    },
    {
      dateType: "7. Fecha de Radicación Registral en NJ",
      whoCanDetermine: "Secretario de Estado / County Clerk de Passaic, NJ",
      registeringDocument: "Certificate of Amendment / Filing Receipt",
      whenItCanExist: "Posterior a la adopción si se requiere inscripción pública",
      currentStatus: "NO_DEFINIDA_PENDIENTE",
      currentValue: "PENDIENTE (No radicada)",
      notes: "Oponibilidad registral civil frente a terceros en New Jersey.",
    },
  ],

  // PARTE 4 — CONDICIONES PREVIAS A LA ADOPCIÓN OFICIAL
  preconditions: [
    {
      conditionCode: "COND-01",
      conditionName: "Resolución Técnica de los 6 Asuntos Críticos",
      description: "Análisis documental exhaustivo de los Artículos 13, 17, 22, 43, 46 y 47.",
      classification: "DEFINIDA",
      sourceOrRequirement: "Fases 35 a 40 completadas técnicamente.",
    },
    {
      conditionCode: "COND-02",
      conditionName: "Dictamen Favorable de Asesor Legal en New Jersey",
      description: "Revisión integral bajo N.J.S.A. 15A & 16, IRS 501(c)(3) y jurisprudencia de NJ.",
      classification: "REQUIERE_REVISION_LEGAL",
      sourceOrRequirement: "Cuestionarios jurídicos estructurados de las 6 materias.",
    },
    {
      conditionCode: "COND-03",
      conditionName: "Revisión y Ajuste Final de REN-DOC-002",
      description: "Cotejo lingüístico, doctrinal y de trazabilidad de los 48 artículos.",
      classification: "PENDIENTE",
      sourceOrRequirement: "Revisión final tras recibir observaciones del abogado.",
    },
    {
      conditionCode: "COND-04",
      conditionName: "Coordinación y Armonización con Bylaws (REN-DOC-003)",
      description: "Asegurar que los poderes del Board of Trustees reflejen fielmente la Constitución.",
      classification: "PENDIENTE",
      sourceOrRequirement: "Redacción final de REN-DOC-003.",
    },
    {
      conditionCode: "COND-05",
      conditionName: "Verificación de Compatibilidad con Certificate of Incorporation",
      description: "Garantizar que el objeto social y cláusulas de disolución públicas coincidan plenamente.",
      classification: "REQUIERE_REVISION_LEGAL",
      sourceOrRequirement: "Cotejo con REN-DOC-000 radicado en Trenton, NJ.",
    },
    {
      conditionCode: "COND-06",
      conditionName: "Decisión Institucional Exclusiva del Pastor Fundador",
      description: "Evaluación soberana por el Pastor Fundador de las opciones técnicas en estudio.",
      classification: "PENDIENTE",
      sourceOrRequirement: "Soberanía fundacional vitalicia (DEC-DEF-001).",
    },
    {
      conditionCode: "COND-07",
      conditionName: "Procedimiento Solemne de Adopción (ADOPT_OFFICIAL)",
      description: "Suscripción formal de la Resolución de Adopción y asignación de versión definitiva.",
      classification: "PROPUESTA",
      sourceOrRequirement: "Flujo formal de adopción institucional.",
    },
  ],

  // PARTE 5 — ESTADO CONSOLIDADO DE LOS SEIS ASUNTOS CRÍTICOS
  sixCriticalMatters: [
    { articleNumber: 13, matter: "Sucesión del Pastor Fundador", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
    { articleNumber: 17, matter: "Quórums y Poderes Corporativos", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
    { articleNumber: 22, matter: "Derechos Específicos de Voto", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
    { articleNumber: 43, matter: "Procedimiento de Enmienda", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
    { articleNumber: 46, matter: "Prevalencia en Conflicto Documental", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
    { articleNumber: 47, matter: "Fecha de Vigencia Oficial", status: "PENDIENTE_DEFINIR", legalReview: "REQUIERE_REVISION_LEGAL", dossierStatus: "EXPEDIENTE_TECNICO_COMPLETADO", proposalStatus: "PROPUESTA_DISPONIBLE_NO_ADOPTADA", adoptionStatus: "NO_ADOPTADA" },
  ],

  // PARTE 6 — FLUJO DE ADOPCIÓN PROPUESTO (11 PASOS — NO EJECUTADO)
  adoptionFlow: [
    { stepNumber: 1, stepName: "Cierre de Expedientes Técnicos", description: "Consolidación de las 6 materias pendientes en el sistema Maestro.", authority: "Redacción Técnica" },
    { stepNumber: 2, stepName: "Revisión por Abogado de New Jersey", description: "Emisión de dictamen legal formal sobre los cuestionarios estatutarios.", authority: "Asesor Legal en New Jersey" },
    { stepNumber: 3, stepName: "Incorporación de Observaciones Legales", description: "Ajuste técnico del texto articulado conforme al dictamen legal.", authority: "Comisión Redactora" },
    { stepNumber: 4, stepName: "Presentación al Pastor Fundador", description: "Elevación formal del expediente integrado para examen pastoral.", authority: "Comisión / Secretaría" },
    { stepNumber: 5, stepName: "Resolución de Materias por el Fundador", description: "Decisión soberana del Fundador sobre opciones y umbrales.", authority: "Pastor Fundador" },
    { stepNumber: 6, stepName: "Autorización de Convocatoria", description: "Autorización para sesión formal de directores y asamblea.", authority: "Pastor Fundador" },
    { stepNumber: 7, stepName: "Ejecución de ADOPT_OFFICIAL", description: "Acto solemne de adopción formal firmado exclusivamente por el Fundador.", authority: "Pastor Fundador (Soberanía Exclusiva)" },
    { stepNumber: 8, stepName: "Registro de Fecha Real de Adopción", description: "Inscripción en el sistema Maestro de la fecha cronológica real.", authority: "Sistema Maestro" },
    { stepNumber: 9, stepName: "Generación de Versión Adoptada (v1.0)", description: "Transición del estado EN_REDACCION a ADOPTADO con hash inmutable.", authority: "Motor de Versionamiento" },
    { stepNumber: 10, stepName: "Custodia Histórica del Borrador v0.1", description: "Archivo inmutable del borrador histórico v0.1 en bitácora.", authority: "Archivo Histórico" },
    { stepNumber: 11, stepName: "Promulgación y Publicación Interna", description: "Distribución oficial a pastores, líderes y congregación.", authority: "Secretaría General" },
  ],

  // PARTE 8 — ANÁLISIS DE ALTERNATIVAS DE VIGENCIA (PROPUESTAS NO ADOPTADAS)
  options: [
    {
      optionCode: "OPC-47-A",
      name: "Alternativa A: Vigencia Simultánea e Inmediata al Momento de la Adopción",
      description: "La Constitución entra en pleno vigor eclesiástico y fiduciario en la misma fecha y hora en que el Pastor Fundador suscribe la Resolución Solemne de Adopción (ADOPT_OFFICIAL).",
      advantages: [
        "Inmediatez y total sincronía temporal.",
        "Evita períodos de incertidumbre entre la aprobación y la vigencia.",
      ],
      risks: [
        "Requiere que todos los manuales y formularios estén listos simultáneamente.",
      ],
      institutionalImpact: "Transición directa a la Carta Magna adoptada.",
      corporateImpact: "Eficacia inmediata para actos fiduciarios.",
      legalReviewNeed: "Confirmar que no existan plazos legales diferidos en New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-47-B",
      name: "Alternativa B: Vigencia Diferida con Período de Transición (Vacatio Constitutionis)",
      description: "La Constitución se adopta en una fecha determinada pero se fija su entrada en vigor a los 30, 60 o 90 días posteriores, para permitir capacitación y adecuación operativa de los manuales.",
      advantages: [
        "Tiempo prudencial para capacitar a líderes celulares y oficiales de ministerios.",
        "Permite radicar enmiendas ante el Estado de NJ antes de la vigencia interna.",
      ],
      risks: [
        "Coexistencia temporal de normas transitorias y reglamentos antiguos.",
      ],
      institutionalImpact: "Transición suave y ordenada sin traumatismos.",
      corporateImpact: "Plazo amplio para trámites bancarios y notariales.",
      legalReviewNeed: "Revisar redacción de cláusulas transitorias en New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-47-C",
      name: "Alternativa C: Vigencia Escalonada por Títulos o Capítulos",
      description: "Entrada en vigor inmediata de la Declaración de Fe y gobierno espiritual, difiriendo la vigencia de quórums asamblearios y régimen disciplinario.",
      advantages: [
        "Flexibilidad por áreas operativas.",
      ],
      risks: [
        "Alta complejidad jurídica y riesgo de vacíos normativos temporales.",
      ],
      institutionalImpact: "Riesgo de confusión en la membresía sobre qué artículos rigen.",
      corporateImpact: "Desaconsejado por auditores externos de NJ.",
      legalReviewNeed: "Revisión crítica por abogado de New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 11 — CUESTIONARIO JURÍDICO PARA EL ASESOR LEGAL DE NEW JERSEY (13 PREGUNTAS)
  attorneyQuestions: [
    {
      questionNumber: 1,
      questionText: "¿Qué requisitos formales exige la ley de New Jersey (N.J.S.A. Title 15A & 16) para que la fecha de vigencia de una Constitución o estatutos religiosos sea plenamente válida y oponible?",
      consultationReason: "Garantizar que la fórmula de vigencia cumpla las solemnidades de New Jersey.",
      affectedDocument: "REN-DOC-002 (Art. 47)",
      riskIfNotDefined: "Impugnación de la vigencia temporal de los acuerdos adoptados.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 2,
      questionText: "¿Es legalmente admisible en New Jersey que la fecha de entrada en vigor sea simultánea al acto de adopción sin requerir publicación en gaceta o registro público previo?",
      consultationReason: "Validar la viabilidad de la vigencia inmediata para actos internos eclesiales.",
      affectedDocument: "REN-DOC-002 (Art. 47)",
      riskIfNotDefined: "Incertidumbre sobre la fecha exacta de exigibilidad.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 3,
      questionText: "¿Qué formalidad de resolución o certificado de adopción suscrito por el Pastor Fundador y el Secretario debe radicarse ante entidades bancarias de New Jersey?",
      consultationReason: "Facilitar el reconocimiento bancario inmediato de la Constitución adoptada.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Rechazo de personería por bancos locales en NJ.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 4,
      questionText: "¿Existe algún impedimento legal para establecer un período de vacatio constitutionis (vigencia diferida a 30 o 60 días) en una nonprofit de NJ?",
      consultationReason: "Evaluar la seguridad jurídica de la Alternativa B de vigencia diferida.",
      affectedDocument: "REN-DOC-002 (Art. 47)",
      riskIfNotDefined: "Conflictos sobre qué estatuto rige durante la transición.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 5,
      questionText: "¿Prohíbe la ley de New Jersey expresamente la aplicación retroactiva de estatutos o normas disciplinarias religiosas sobre hechos pasados?",
      consultationReason: "Blindar a la Iglesia de demandas por aplicación retroactiva de normativas.",
      affectedDocument: "REN-DOC-002 (Art. 47) y REN-DOC-011",
      riskIfNotDefined: "Demandas civiles fundadas en vulneración del debido proceso.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 6,
      questionText: "¿Cómo debe redactarse el acta de adopción para que tenga plena fuerza probatoria en tribunales estatales de NJ?",
      consultationReason: "Asegurar que el acta cumpla las reglas de evidencia de New Jersey.",
      affectedDocument: "Acta Oficial de Adopción",
      riskIfNotDefined: "Objeciones a la autenticidad del documento en litigios.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 7,
      questionText: "¿Qué plazo de conservación física y digital del borrador histórico v0.1 y las actas de adopción es obligatorio en New Jersey?",
      consultationReason: "Cumplimiento de las directrices de retención documental corporativa.",
      affectedDocument: "REN-DOC-019 (Custodia Documental)",
      riskIfNotDefined: "Infracciones de conservación fiduciaria de registros.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 8,
      questionText: "¿Afecta la fecha de vigencia constitucional la validez de los contratos de arrendamiento y servicios suscritos con anterioridad?",
      consultationReason: "Garantizar la continuidad jurídica ininterrumpida de las obligaciones corporativas.",
      affectedDocument: "Contratos vigentes de RENACER",
      riskIfNotDefined: "Pretensiones de resolución unilateral de contratos por contrapartes.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 9,
      questionText: "¿Debe radicarse una copia de la Constitución adoptada ante el Departamento del Tesoro de NJ o basta con conservar los Bylaws?",
      consultationReason: "Delimitar con exactitud las obligaciones registrales públicas.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Incurrir en trámites innecesarios o faltas registrales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 10,
      questionText: "¿Qué certificación de vigencia estatutaria (Certificate of Good Standing / Corporate Resolution) suelen solicitar los títulos de propiedad inmobiliaria en Passaic County, NJ?",
      consultationReason: "Preparar los formatos fiduciarios exactos requeridos por las aseguradoras de títulos (Title Insurance).",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Retrasos en transacciones inmobiliarias de compra o hipoteca.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 11,
      questionText: "¿Cómo articular la cláusula de vigencia con la presentación de informes anuales al Estado de NJ (Annual Report filing)?",
      consultationReason: "Coordinación con el calendario fiscal y corporativo del Estado.",
      affectedDocument: "REN-DOC-000 y REN-DOC-003",
      riskIfNotDefined: "Descoordinación de nombres de directores ante el Estado.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 12,
      questionText: "¿Es legalmente exigible que la fecha de vigencia de las enmiendas futuras siga exactamente el mismo procedimiento que la Constitución original?",
      consultationReason: "Coherencia procedimental entre el Artículo 43 y el Artículo 47.",
      affectedDocument: "REN-DOC-002 (Art. 43, 47)",
      riskIfNotDefined: "Disparidad en la entrada en vigor de enmiendas parciales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 13,
      questionText: "¿Qué lenguaje jurídico específico recomienda incorporar en la cláusula de vigencia para blindar la soberanía del Pastor Fundador y el Board?",
      consultationReason: "Redacción final técnicamente inexpugnable.",
      affectedDocument: "REN-DOC-002 (Art. 47)",
      riskIfNotDefined: "Ambigüedades en la interpretación de la cláusula de vigencia.",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 47
  proposedDraftText: `ARTÍCULO 47 — FECHA DE VIGENCIA OFICIAL, ADOPCIÓN Y PROMULGACIÓN (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 47.1. Condición Suspensiva de Adopción Oficial.
La presente Constitución de RENACER CHURCH (REN-DOC-002) constituye un borrador en proceso de redacción y armonización institucional y carece de vigencia jurídica, eclesiástica o vinculante hasta tanto se produzca su adopción formal y solemne mediante la ejecución del acto oficial de adopción (ADOPT_OFFICIAL) por parte del Pastor Fundador Luis Uchubanda Falconí, una vez cumplidas todas las condiciones previas y revisiones legales requeridas.

Sección 47.2. Fijación de la Fecha de Entrada en Vigor.
La fecha oficial de entrada en vigor de esta Constitución será determinada expresamente en el Decreto o Resolución Solemne de Adopción suscrito por el Pastor Fundador. A partir de la fecha y hora fijadas en dicho instrumento, esta Constitución adquirirá plena fuerza obligatoria y suprema como Carta Magna interna de RENACER CHURCH, rigiendo para todos sus miembros, pastores, líderes, consejos y departamentos.

Sección 47.3. Prohibición de Fechas Ficticias o Retroactivas.
Queda terminantemente prohibida la asignación automática, anticipada, ficticia o retroactiva de fechas de adopción o de vigencia en cualquier ejemplar, sistema informático o registro de la Iglesia. Cualquier constancia de vigencia que no esté respaldada por la Resolución Solemne de Adopción debidamente fechada, firmada y radicada en el Libro Oficial de Actas será nula de pleno derecho.

Sección 47.4. Registro Histórico de Versiones y Promulgación.
Al momento de la adopción oficial, el sistema Maestro generará la versión oficial definitiva (v1.0), archivando inalterablemente la presente versión de borrador (v0.1) en el registro histórico documental. La Secretaría General certificará la promulgación y notificará el texto íntegro a la congregación, procediendo a coordinar las radicaciones fiduciarias que correspondan ante el Estado de New Jersey y entidades bancarias.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle47Dossier(): Article47EffectiveDateDossier {
  return ARTICLE_47_DOSSIER;
}
