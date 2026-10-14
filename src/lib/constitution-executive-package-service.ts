// ============================================================================
// RENACER CHURCH MAESTRO — FASE 34: PAQUETE MAESTRO DE DECISIÓN INSTITUCIONAL
// Y REVISIÓN LEGAL (REN-DOC-002)
// ============================================================================

export interface ExecutiveMatrixEntry {
  articleNumber: number;
  matterTitle: string;
  whatIsDefined: string;
  whatIsPending: string;
  legalReviewRequired: boolean;
  whatRequiresLegalReview: string;
  whatCanRenacerDecideInternally: string;
  requiredDecisionSummary: string;
  status: "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
}

export interface LegalReviewPackageMatter {
  articleNumber: number;
  title: string;
  keyLegalSubject: string;
  njStatutoryReference: string;
  specificLegalQuestions: string[];
  identifiedRisks: string[];
  coordinatedDocuments: string[];
  mattersNotRequiringLegalIntervention: string[];
  mattersRequiringLegalOpinion: string[];
}

export interface FounderDecisionMatter {
  articleNumber: number;
  title: string;
  currentSituation: string;
  existingDecisions: string[];
  pendingInstitutionalDecision: string;
  institutionalOptions: {
    name: string;
    description: string;
    consequences: string;
  }[];
  founderRecommendation: string;
  proposalNotice: "PROPUESTA — NO ADOPTADA";
}

export const EXECUTIVE_DECISION_MATRIX: ExecutiveMatrixEntry[] = [
  {
    articleNumber: 13,
    matterTitle: "Sucesión del Pastor Fundador",
    whatIsDefined: "Autoridad espiritual vitalicia del Fundador, facultad exclusiva de designar sucesor por escrito en vida, protocolo médico de incapacidad (2 médicos) y requisitos del sucesor (ministro ordenado, Seminario Bíblico RENACER, buen testimonio).",
    whatIsPending: "Plazos exactos de transición interina y porcentaje asambleario de ratificación si la propuesta surge colegiadamente.",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Compatibilidad con poderes fiduciarios duraderos (DPOA), Healthcare Proxy y sucesión de Trustees corporativos bajo N.J.S.A. Title 16.",
    whatCanRenacerDecideInternally: "Mecanismo pastoral interno de ratificación, perfil de idoneidad ministerial y duración de comisiones transitorias eclesiásticas.",
    requiredDecisionSummary: "Resolución del procedimiento de ratificación asamblearia y protocolo colegiado de emergencia ante vacancia imprevista.",
    status: "PENDIENTE_DEFINIR",
  },
  {
    articleNumber: 17,
    matterTitle: "Quórums y Poderes Corporativos del Consejo",
    whatIsDefined: "Consejo de 3 a 5 miembros, períodos de 2 años renovables, tabla de quórum (3->2, 4->3, 5->3), mayoría simple ordinaria, 2/3 para extraordinarias y empate = no aprobado.",
    whatIsPending: "Umbrales cuantitativos monetarios ($) para clasificar contratos o gastos como extraordinarios.",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Conformidad de quórums de directores y mayorías calificadas con el Nonprofit Corporation Act de New Jersey (N.J.S.A. 15A:1-1 et seq.).",
    whatCanRenacerDecideInternally: "Límites internos de delegación presupuestaria y asignación de facultades al Consejo de Gobierno.",
    requiredDecisionSummary: "Fijación del umbral financiero y formalidades de firma fiduciaria en coordinación con los Bylaws.",
    status: "PENDIENTE_DEFINIR",
  },
  {
    articleNumber: 22,
    matterTitle: "Derechos Específicos de Voto y Calificación",
    whatIsDefined: "Voto exclusivo para miembros activos mayores de 18 años, quórum congregacional del 50%, mayoría simple ordinaria y mayoría de 2/3 para materias extraordinarias.",
    whatIsPending: "Delimitación entre materias que exigen voto de membresía por ley civil frente a materias reservadas al Consejo.",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Estructura corporativa bajo la ley de NJ (Corporación con Voting Members vs. Non-voting Members).",
    whatCanRenacerDecideInternally: "Requisitos bíblicos y formativos para admisión, disciplina y suspensión de membresía activa.",
    requiredDecisionSummary: "Definición del catálogo exclusivo de materias sometidas a votación de la Asamblea de Miembros.",
    status: "PENDIENTE_DEFINIR",
  },
  {
    articleNumber: 43,
    matterTitle: "Procedimiento de Enmienda y Reforma Constitucional",
    whatIsDefined: "Inmutabilidad doctrinal bíblica, iniciativa de reforma reservada al Pastor Fundador y tres niveles preliminares de enmienda (A, B, C).",
    whatIsPending: "Mayorías exactas para reformas estructurales de Nivel B y cláusulas pétreas inmodificables.",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Requisitos de enmienda del Certificate of Incorporation ante el Departamento del Tesoro de NJ.",
    whatCanRenacerDecideInternally: "Cláusulas pétreas confesionales, plazos de notificación previa y mayorías eclesiásticas.",
    requiredDecisionSummary: "Aprobación del protocolo formal de reformas y quórums asamblearios de enmienda.",
    status: "PENDIENTE_DEFINIR",
  },
  {
    articleNumber: 46,
    matterTitle: "Prevalencia en Conflicto Documental e Interpretación",
    whatIsDefined: "Jerarquía preliminar: 1. Ley aplicable -> 2. Articles -> 3. Bylaws -> 4. Constitución -> 5. Declaración de Fe -> 6. Manuales. Primacía bíblica en lo de fe.",
    whatIsPending: "Dictamen legal corporativo formal sobre la separación de esferas (civil/fiduciaria vs. eclesial/doctrinal).",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Asegurar que la jerarquía interna no pretenda anteponerse a normas imperativas de New Jersey o federales.",
    whatCanRenacerDecideInternally: "Prevalencia bíblica y confesional en disputas de doctrina, liturgia y disciplina ministerial.",
    requiredDecisionSummary: "Validación de la cláusula de armonización jurídica y precedencia institucional.",
    status: "REQUIERE_REVISION_LEGAL",
  },
  {
    articleNumber: 47,
    matterTitle: "Fecha de Vigencia Oficial y Promulgación",
    whatIsDefined: "REN-DOC-002 permanece en BORRADOR v0.1 (NO ADOPTADA). La vigencia se producirá exclusivamente tras la adopción formal por el Pastor Fundador.",
    whatIsPending: "Fijación de la fecha solemne de adopción formal. 0 fechas ficticias.",
    legalReviewRequired: true,
    whatRequiresLegalReview: "Coordinación entre la fecha de adopción eclesiástica y la radicación corporativa en New Jersey.",
    whatCanRenacerDecideInternally: "Fecha y protocolo litúrgico de la sesión solemne de adopción de la Constitución.",
    requiredDecisionSummary: "Convocatoria a la sesión formal de adopción cuando el texto final esté concluido y revisado.",
    status: "PENDIENTE_DEFINIR",
  },
];

export const LEGAL_REVIEW_PACKAGE_MATTERS: LegalReviewPackageMatter[] = [
  {
    articleNumber: 13,
    title: "Sucesión del Pastor Fundador",
    keyLegalSubject: "Poderes fiduciarios, incapacidad médica y continuidad de Trustees en corporaciones sin fines de lucro.",
    njStatutoryReference: "N.J.S.A. Title 16 (Corporations and Associations, Religious) y N.J.S.A. Title 3B (Administration of Estates).",
    specificLegalQuestions: [
      "¿Es jurídicamente vinculante en New Jersey la designación escrita de un sucesor pastoral para la presidencia del Board of Trustees sin una ratificación asamblearia?",
      "¿Qué formalidades notariales requiere el protocolo de determinación de incapacidad mediante dos médicos certificados para transferir facultades fiduciarias bancarias en NJ?",
      "¿Qué mecanismos estatutarios en los Bylaws protegen a la corporación de parálisis fiduciaria en caso de vacancia prolongada?",
    ],
    identifiedRisks: [
      "Impugnación judicial de la transferencia de poderes fiduciarios si no existe previsión explícita en los Bylaws corporativos.",
      "Bloqueo temporal de cuentas bancarias ante la falta de un protocolo de firma fiduciaria alternativa certificado.",
    ],
    coordinatedDocuments: ["REN-DOC-003 (Bylaws)", "REN-DOC-004 (Manual de Gobierno)"],
    mattersNotRequiringLegalIntervention: [
      "Criterios de llamamiento espiritual y unción ministerial del sucesor.",
      "Requisitos de graduación teológica en el Seminario Bíblico RENACER.",
    ],
    mattersRequiringLegalOpinion: [
      "Redacción de la cláusula de sucesión corporativa de directores/trustees para los Bylaws de New Jersey.",
      "Conformidad con las leyes de New Jersey sobre poderes fiduciarios duraderos.",
    ],
  },
  {
    articleNumber: 17,
    title: "Quórums y Poderes Corporativos del Consejo de Gobierno",
    keyLegalSubject: "Quórums de directores, mayorías calificadas y transacciones fiduciarias extraordinarias.",
    njStatutoryReference: "N.J.S.A. 15A:6-7 (Quorum of board of trustees) y N.J.S.A. 15A:2-8.",
    specificLegalQuestions: [
      "¿Permite la ley de New Jersey fijar una regla de quórum estricto (3->2, 4->3, 5->3) y una mayoría de 2/3 para actos extraordinarios en los estatutos?",
      "¿Es legalmente válida la cláusula que establece que el empate en votaciones equivale automáticamente a propuesta rechazada?",
      "¿Qué transacciones corporativas (ej. compraventa de bienes inmuebles o hipotecas) requieren por ley autorización de la Asamblea frente al Board?",
    ],
    identifiedRisks: [
      "Nulidad de acuerdos de compraventa o gravamen de bienes inmuebles si no se cumple el procedimiento corporativo de NJ.",
    ],
    coordinatedDocuments: ["REN-DOC-003 (Bylaws)", "REN-DOC-013 (Manual de Finanzas)"],
    mattersNotRequiringLegalIntervention: [
      "Competencias espirituales y disciplinarias internas del Consejo.",
      "Procedimiento litúrgico de propuesta pastoral de consejeros.",
    ],
    mattersRequiringLegalOpinion: [
      "Redacción de la tabla de quórum y poderes fiduciarios para los Bylaws.",
      "Definición estatutaria de materias inmobiliarias y de endeudamiento.",
    ],
  },
  {
    articleNumber: 22,
    title: "Derechos Específicos de Voto y Calificación Congregacional",
    keyLegalSubject: "Calificación de Voting Members vs. Non-voting Members y quórums asamblearios en New Jersey.",
    njStatutoryReference: "N.J.S.A. 15A:5-1 (Members, classes of members) y N.J.S.A. 15A:5-9 (Quorum of members).",
    specificLegalQuestions: [
      "¿Es recomendable que RENACER estructure formalmente a sus miembros eclesiásticos como 'Voting Members' con quórum del 50% en los Bylaws de NJ?",
      "¿Qué mecanismos legales existen en NJ para resolver disputas sobre la validez del padrón de miembros antes de una asamblea?",
    ],
    identifiedRisks: [
      "Dificultad práctica para alcanzar el quórum del 50% si el padrón de miembros no se mantiene estrictamente depurado y actualizado.",
    ],
    coordinatedDocuments: ["REN-DOC-003 (Bylaws)", "REN-DOC-005 (Manual de Membresía)"],
    mattersNotRequiringLegalIntervention: [
      "Requisitos de santidad, testimonio y bautismo para ser miembro.",
    ],
    mattersRequiringLegalOpinion: [
      "Redacción estatutaria del derecho a voto en los Bylaws corporativos.",
    ],
  },
  {
    articleNumber: 43,
    title: "Procedimiento de Enmienda y Reforma Constitucional",
    keyLegalSubject: "Modificación de Certificate of Incorporation y estatutos corporativos.",
    njStatutoryReference: "N.J.S.A. 15A:9-1 et seq. (Amendments to certificate of incorporation).",
    specificLegalQuestions: [
      "¿Qué requisitos formales exige New Jersey para registrar enmiendas al Certificate of Incorporation?",
      "¿Son legalmente exigibles las cláusulas que reservan la iniciativa de enmienda exclusivamente al Pastor Fundador?",
    ],
    identifiedRisks: [
      "Invalidez de una enmienda corporativa no registrada oportunamente ante el Departamento del Tesoro de New Jersey.",
    ],
    coordinatedDocuments: ["REN-DOC-003 (Bylaws)"],
    mattersNotRequiringLegalIntervention: [
      "Inmutabilidad doctrinal de la fe pentecostal.",
    ],
    mattersRequiringLegalOpinion: [
      "Protocolo de enmienda de los Bylaws y registro ante el Estado de NJ.",
    ],
  },
  {
    articleNumber: 46,
    title: "Prevalencia en Conflicto Documental",
    keyLegalSubject: "Doctrina de no interferencia judicial en asuntos eclesiásticos y jerarquía normativa corporativa.",
    njStatutoryReference: "Primera Enmienda a la Constitución de EE.UU. (Ecclesiastical Abstention Doctrine) y Derecho Corporativo de NJ.",
    specificLegalQuestions: [
      "¿Cómo redactar la cláusula de prevalencia para blindar la autonomía eclesiástica en lo espiritual sin contravenir la ley civil en lo fiduciario?",
    ],
    identifiedRisks: [
      "Litigios en tribunales civiles si la jerarquía interna no delimita claramente la esfera corporativa de la eclesiástica.",
    ],
    coordinatedDocuments: ["REN-DOC-001 (Doctrina)", "REN-DOC-003 (Bylaws)"],
    mattersNotRequiringLegalIntervention: [
      "Soberanía doctrinal de las Sagradas Escrituras en la fe.",
    ],
    mattersRequiringLegalOpinion: [
      "Cláusula de armonización y abstención judicial en los Bylaws.",
    ],
  },
  {
    articleNumber: 47,
    title: "Fecha de Vigencia Oficial",
    keyLegalSubject: "Fecha de efectividad del Certificate of Incorporation y entrada en vigor de los estatutos.",
    njStatutoryReference: "N.J.S.A. 15A:2-9 (Effective date of certificate).",
    specificLegalQuestions: [
      "¿Debe coincidir la fecha de efectividad de los Bylaws con la fecha de adopción formal de la Constitución eclesiástica?",
    ],
    identifiedRisks: [
      "Incertidumbre jurídica si se celebran actos corporativos antes de la vigencia oficial de los estatutos.",
    ],
    coordinatedDocuments: ["REN-DOC-003 (Bylaws)"],
    mattersNotRequiringLegalIntervention: [
      "Ceremonia litúrgica de adopción de la Constitución.",
    ],
    mattersRequiringLegalOpinion: [
      "Fijación formal de la fecha de efectividad corporativa ante el Estado de NJ.",
    ],
  },
];

export const FOUNDER_DECISION_MATTERS: FounderDecisionMatter[] = [
  {
    articleNumber: 13,
    title: "Sucesión del Pastor Fundador y Continuidad Institucional",
    currentSituation: "El Fundador ejerce autoridad espiritual vitalicia. El protocolo de incapacidad médica mediante 2 médicos está definido. Resta fijar el mecanismo final de ratificación.",
    existingDecisions: ["DEC-DEF-001", "DEC-PEND-001", "DEC-DEF-177"],
    pendingInstitutionalDecision: "Aprobar el procedimiento exacto de ratificación asamblearia para el sucesor pastoral.",
    institutionalOptions: [
      {
        name: "Opción A: Designación Directa por el Fundador",
        description: "El Pastor Fundador deja un documento formal reservado designando a su sucesor, el cual es ratificado por aclamación de la Asamblea Congregacional.",
        consequences: "Garantiza plena continuidad doctrinal y visión fundacional; previene disputas de poder.",
      },
      {
        name: "Opción B: Propuesta Colegiada Unánime en Emergencia",
        description: "En caso de vacancia imprevista sin designación en vida, el Consejo de Gobierno y el Consejo Ministerial proponen unánimemente al sucesor para confirmación asamblearia.",
        consequences: "Brinda estabilidad e institucionalidad colegiada ante situaciones imprevistas.",
      },
    ],
    founderRecommendation: "Consagrar ambas opciones: Opción A como vía principal del Fundador y Opción B como protocolo de emergencia institucional.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
  {
    articleNumber: 17,
    title: "Quórums y Poderes Corporativos del Consejo de Gobierno",
    currentSituation: "Composición (3-5), tabla de quórum (3->2, 4->3, 5->3) y mayorías (2/3 extraordinarias) ya están aprobadas. Falta fijar el umbral monetario de contratos extraordinarios.",
    existingDecisions: ["DEC-DEF-002", "DEC-DEF-004"],
    pendingInstitutionalDecision: "Determinar el umbral financiero que exige aprobación de 2/3 del Consejo y visto bueno del Pastor Fundador.",
    institutionalOptions: [
      {
        name: "Opción A: Umbral Porcentual Presupuestario",
        description: "Cualquier gasto o contrato que supere el 10% del presupuesto operativo anual se califica como extraordinario.",
        consequences: "Se ajusta automáticamente al crecimiento financiero de la congregación.",
      },
      {
        name: "Opción B: Umbral Fijo Específico",
        description: "Fijar un monto específico en dólares que requiera la doble aprobación de 2/3 del Consejo y el Fundador.",
        consequences: "Claridad inmediata para los oficiales fiduciarios.",
      },
    ],
    founderRecommendation: "Adoptar un umbral presupuestario del 10% en coordinación con la futura redacción de Bylaws.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
  {
    articleNumber: 22,
    title: "Derechos Específicos de Voto y Calificación Congregacional",
    currentSituation: "Quórum del 50% de miembros activos y mayorías ya están consolidados. Falta precisar las materias exclusivas de la Asamblea.",
    existingDecisions: ["DEC-DEF-001", "DEC-DEF-002"],
    pendingInstitutionalDecision: "Aprobar el catálogo exclusivo de materias sometidas a voto congregacional.",
    institutionalOptions: [
      {
        name: "Opción A: Catálogo Reservado Exclusivo",
        description: "Voto congregacional limitado a: compraventa de inmuebles mayores, endeudamiento extraordinario, disolución, ratificación del sucesor y confirmación de consejeros.",
        consequences: "Evita asambleas conflictivas sobre materias operativas menores y protege el gobierno espiritual.",
      },
    ],
    founderRecommendation: "Consagrar el catálogo reservado para preservar el gobierno teocrático ordenado.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
  {
    articleNumber: 43,
    title: "Procedimiento de Enmienda y Reforma Constitucional",
    currentSituation: "Tres niveles de enmienda planteados (A, B, C). Iniciativa doctrinal reservada al Fundador.",
    existingDecisions: ["DEC-DEF-001", "DEC-DEF-002"],
    pendingInstitutionalDecision: "Fijar las mayorías de Nivel B (reformas a la estructura de gobierno).",
    institutionalOptions: [
      {
        name: "Opción A: Mayoría Calificada Dual de 2/3",
        description: "Requiere 2/3 del Consejo de Gobierno + 2/3 de la Asamblea Congregacional + visto bueno del Pastor Fundador.",
        consequences: "Máxima estabilidad constitucional y blindaje contra cambios intempestivos.",
      },
    ],
    founderRecommendation: "Aprobar la mayoría calificada dual de 2/3 para enmiendas estructurales.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
  {
    articleNumber: 46,
    title: "Prevalencia en Conflicto Documental e Interpretación",
    currentSituation: "Jerarquía preliminar de 8 capas estructurada. Requiere armonización final.",
    existingDecisions: ["DEC-DEF-001", "DEC-DEF-002"],
    pendingInstitutionalDecision: "Validar la cláusula de separación de esferas (civil fiduciaria vs. eclesiástica espiritual).",
    institutionalOptions: [
      {
        name: "Opción A: Cláusula de Separación Armonizada",
        description: "Prevalencia de la ley civil y Articles en lo fiduciario/patrimonial; prevalencia inmutable de la Biblia y Declaración de Fe en lo espiritual/doctrinal.",
        consequences: "Plena protección ante tribunales civiles respetando la autonomía de fe.",
      },
    ],
    founderRecommendation: "Aprobar la cláusula de separación armonizada sujeta al dictamen legal de NJ.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
  {
    articleNumber: 47,
    title: "Fecha de Vigencia Oficial y Promulgación",
    currentSituation: "REN-DOC-002 permanece en BORRADOR v0.1 (NO ADOPTADA).",
    existingDecisions: ["DEC-DEF-001"],
    pendingInstitutionalDecision: "Fijar la fecha y protocolo solemne de adopción una vez concluida la revisión legal de NJ.",
    institutionalOptions: [
      {
        name: "Opción A: Vigencia Inmediata tras Adopción Solemne",
        description: "La Constitución entrará en vigor el día de su firma solemne por el Pastor Fundador y ratificación.",
        consequences: "Inicio formal y ordenado de la vigencia constitucional.",
      },
    ],
    founderRecommendation: "Mantener en PENDIENTE_DEFINIR hasta convocar formalmente la sesión solemne de adopción.",
    proposalNotice: "PROPUESTA — NO ADOPTADA",
  },
];

export function getExecutiveDecisionMatrix(): ExecutiveMatrixEntry[] {
  return EXECUTIVE_DECISION_MATRIX;
}

export function getLegalReviewPackageMatters(): LegalReviewPackageMatter[] {
  return LEGAL_REVIEW_PACKAGE_MATTERS;
}

export function getFounderDecisionMatters(): FounderDecisionMatter[] {
  return FOUNDER_DECISION_MATTERS;
}
