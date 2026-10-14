// ============================================================================
// RENACER CHURCH MAESTRO — FASE 41
// REN-DOC-010: REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER
// BORRADOR OFICIAL COMPLETO — v0.1 (EN_REDACCION / NO ADOPTADA / REQUIERE_REVISION_LEGAL)
// ============================================================================

export interface MinisterialManualSection {
  sectionNumber: string;
  title: string;
  content: string;
  decisionIds: string[];
  dependencies: string[];
  practicalProtocol?: string;
  pendingDefinitionNotes?: string;
  legalReviewRequired?: boolean;
}

export interface MinisterialProgramTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: MinisterialManualSection[];
}

export interface MinisterialStateDefinition {
  stateCode: string;
  name: string;
  description: string;
  privileges: string;
  restrictions: string;
  requiresReview: boolean;
}

export interface MinisterialFormDefinition {
  code: string;
  name: string;
  purpose: string;
  responsible: string;
  retentionPeriod: string;
}

export interface AuthorityMatrixRow {
  entity: string;
  scope: string;
  powers: string[];
  restrictions: string[];
}

export interface MasterMinisterialCredentialsDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  adoptionState: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  decisionState: "DEFINIDA";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "CREDENCIALES_MINISTERIALES";
  author: "Pastor Fundador / Consejo Ministerial";
  authorId: "usr-fundador-001";
  responsibleArea: "CONSEJO_MINISTERIAL_Y_PASTORAL";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "REGLAMENTO";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  ministerialRoute: {
    stepsCount: 7;
    steps: string[];
  };
  categoriesCount: number;
  categories: {
    code: string;
    name: string;
    nature: string;
    scope: string;
  }[];
  ministerialStates: MinisterialStateDefinition[];
  futureForms: MinisterialFormDefinition[];
  authorityMatrix: AuthorityMatrixRow[];
  titles: MinisterialProgramTitle[];
  founderAuthorityPreservation: {
    spiritualDoctrinalSovereignty: boolean;
    statement: string;
  };
  genderEquality: {
    fullAccess: boolean;
    statement: string;
  };
  nonSelfOrdinationClause: {
    explicit: boolean;
    statement: string;
  };
  nonFinancialOrdinationClause: {
    explicit: boolean;
    statement: string;
  };
  immigrationDisclaimer: {
    noVisaGuarantee: boolean;
    statement: string;
  };
  counselingAndLegalLimits: {
    nonMedicalReplacement: boolean;
    mandatoryAbuseReporting: boolean;
    statuteReference: string;
    statement: string;
  };
}

// ============================================================================
// CATÁLOGO DE ESTADOS INSTITUCIONALES DEL MINISTRO (10 ESTADOS)
// ============================================================================

export const MINISTERIAL_STATES_CATALOG: MinisterialStateDefinition[] = [
  {
    stateCode: "CANDIDATO",
    name: "Candidato Ministerial en Evaluación",
    description: "Creyente admitido al proceso formal de credencialización y examen ministerial.",
    privileges: "Participación en laboratorios y prácticas supervisadas por ministros ordenados.",
    restrictions: "No posee credencial, no oficia ordenanzas ni representa legalmente a la iglesia.",
    requiresReview: true,
  },
  {
    stateCode: "LICENCIADO_ACTIVO",
    name: "Ministro Licenciado en Pleno Ejercicio",
    description: "Ministro con credencial y licencia ministerial vigente emitida por RENACER.",
    privileges: "Predicación, enseñanza, facilitación de grupos, visitas pastorales y administración litúrgica delegada.",
    restrictions: "No preside ordenaciones; requiere delegación explícita para solemnizar matrimonios según ley local.",
    requiresReview: true,
  },
  {
    stateCode: "ORDENADO_ACTIVO",
    name: "Ministro Ordenado en Pleno Ejercicio",
    description: "Ministro que ha recibido reconocimiento eclesiástico pleno e imposición de manos.",
    privileges: "Plena administración litúrgica (Bautismo, Santa Cena, Matrimonios, Presentación de niños), docencia superior y tribunal examinador.",
    restrictions: "Sujeto a la fidelidad doctrinal de REN-DOC-001 y la supervisión del Pastor Fundador.",
    requiresReview: true,
  },
  {
    stateCode: "ASIGNADO_COMO_PASTOR",
    name: "Ministro con Asignación / Nombramiento Pastoral",
    description: "Ministro Licenciado u Ordenado formalmente designado para liderar una congregación o área pastoral.",
    privileges: "Cuidado congregacional, presidencia litúrgica local y liderazgo del equipo ministerial local.",
    restrictions: "La asignación no es vitalicia ni propietaria; sujeta a rotación o remoción por el Pastor Fundador.",
    requiresReview: true,
  },
  {
    stateCode: "INACTIVO",
    name: "Ministro en Estado Inactivo / Permiso Temporal",
    description: "Ministro que por motivos de salud, estudios o traslado suspende temporalmente su servicio activo.",
    privileges: "Preserva su registro histórico y número de credencial.",
    restrictions: "No ejerce funciones representativas ni oficios litúrgicos durante el período de inactividad.",
    requiresReview: false,
  },
  {
    stateCode: "SUSPENDIDO",
    name: "Credencial en Suspensión Cautelar",
    description: "Medida preventiva adoptada durante una investigación disciplinaria o ética.",
    privileges: "Ninguno en el ámbito ministerial de la iglesia.",
    restrictions: "Prohibición absoluta de ministrar, predicar, oficiar ordenanzas o actuar a nombre de RENACER.",
    requiresReview: true,
  },
  {
    stateCode: "EN_DISCIPLINA",
    name: "Ministro en Proceso Disciplinario Formal",
    description: "Ministro sujeto a proceso correctivo y pastoral conforme a REN-DOC-005.",
    privileges: "Acompañamiento pastoral personal y atención espiritual.",
    restrictions: "Inhabilitación temporal de todo ejercicio ministerial.",
    requiresReview: true,
  },
  {
    stateCode: "EN_RESTAURACION",
    name: "Ministro en Proceso de Restauración Integral",
    description: "Ministro arrepentido que transita un plan de sanidad espiritual, emocional y testimonio.",
    privileges: "Participación en cultos y actividades formativas de restauración.",
    restrictions: "El perdón espiritual no implica restitución inmediata a cargos de liderazgo ni púlpito.",
    requiresReview: true,
  },
  {
    stateCode: "CREDENCIAL_REVOCADA",
    name: "Credencial Ministerial Revocada Definitivamente",
    description: "Pérdida permanente de la licencia u ordenación por falta grave, apostasía, delito o abuso.",
    privileges: "Ninguno. Cancelación formal del registro y número de credencial.",
    restrictions: "Inhabilitación perpetua para representar a la iglesia o ejercer ministerio en RENACER.",
    requiresReview: true,
  },
  {
    stateCode: "RECONOCIMIENTO_EXTERNO_EN_REVISION",
    name: "Ministro Transferido en Proceso de Homologación",
    description: "Ministro ordenado en otra denominación en fase de examen documental, doctrinal y ético.",
    privileges: "Asistencia a cultos y entrevistas con el Consejo Ministerial.",
    restrictions: "No puede ministrar ni ejercer oficio hasta la homologación formal por el Pastor Fundador.",
    requiresReview: true,
  },
];

// ============================================================================
// CATÁLOGO DE FORMULARIOS FUTUROS DE CREDENCIALES (12 FORMULARIOS)
// ============================================================================

export const MINISTERIAL_FUTURE_FORMS_CATALOG: MinisterialFormDefinition[] = [
  {
    code: "REN-FORM-MIN-001",
    name: "Solicitud de Candidatura Ministerial",
    purpose: "Postulación formal del candidato al proceso de credenciales, acreditando discipulado, liderazgo y seminario.",
    responsible: "Secretaría del Consejo Ministerial",
    retentionPeriod: "Permanente en legajo ministerial",
  },
  {
    code: "REN-FORM-MIN-002",
    name: "Evaluación Vocacional, Pastoral y Testimonial",
    purpose: "Informe de respaldo del pastor de área sobre el carácter, vida familiar, madurez y llamado del postulante.",
    responsible: "Pastor Supervisor / Consejo Ministerial",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-003",
    name: "Acta de Examen Ministerial Teológico y Bíblico",
    purpose: "Registro del examen oral y escrito ante el tribunal teológico del Consejo Ministerial.",
    responsible: "Tribunal Examinador / Pastor Fundador",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-004",
    name: "Solicitud Formal de Licencia Ministerial",
    purpose: "Trámite de emisión de la credencial de Ministro Licenciado de RENACER CHURCH.",
    responsible: "Secretaría de Credenciales",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-005",
    name: "Acta Institucional de Aprobación de Licencia",
    purpose: "Resolución oficial del Consejo Ministerial y Pastor Fundador confiriendo la licencia ministerial.",
    responsible: "Pastor Fundador / Consejo Ministerial",
    retentionPeriod: "Permanente en archivo histórico",
  },
  {
    code: "REN-FORM-MIN-006",
    name: "Solicitud de Ordenación al Sagrado Ministerio",
    purpose: "Postulación de Ministro Licenciado con experiencia comprobada para la ordenación presbiteral.",
    responsible: "Consejo Ministerial",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-007",
    name: "Dictamen Evaluativo para Ordenación Presbiteral",
    purpose: "Evaluación integral de solvencia teológica, trayectoria ministerial y solvencia moral para ordenación.",
    responsible: "Tribunal de Ordenación / Pastor Fundador",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-008",
    name: "Acta Solemne de Ceremonia de Ordenación e Imposición de Manos",
    purpose: "Certificación eclesiástica y pública de la consagración ministerial suscrita por el presbiterio.",
    responsible: "Pastor Fundador / Presbiterio Ordenador",
    retentionPeriod: "Permanente en archivo histórico institucional",
  },
  {
    code: "REN-FORM-MIN-009",
    name: "Registro y Cédula de Credencial Ministerial",
    purpose: "Documento oficial individual que acredita el número único de credencial (REN-MIN-YYYY-XXXX).",
    responsible: "Secretaría General / Archivo Central (REN-DOC-019)",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-010",
    name: "Solicitud de Renovación y Actualización de Credencial",
    purpose: "Verificación periódica de estado activo, actualización de expediente y fidelidad doctrinal.",
    responsible: "Secretaría de Credenciales",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-011",
    name: "Solicitud de Reconocimiento y Homologación de Credencial Externa",
    purpose: "Proceso de admisión y validación de ministros ordenados en otras denominaciones cristianas.",
    responsible: "Consejo Ministerial / Pastor Fundador",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-012",
    name: "Expediente de Suspensión, Revocación o Restauración Ministerial",
    purpose: "Documentación formal de procesos disciplinarios, medidas cautelares o planes de restauración ministerial.",
    responsible: "Comité de Disciplina y Ética / Pastor Fundador",
    retentionPeriod: "Permanente y estrictamente confidencial",
  },
];

// ============================================================================
// MATRIZ DE COMPETENCIAS Y AUTORIDADES INSTITUCIONALES
// ============================================================================

export const MINISTERIAL_AUTHORITY_MATRIX: AuthorityMatrixRow[] = [
  {
    entity: "PASTOR FUNDADOR",
    scope: "Autoridad Espiritual, Doctrinal y Visión Suprema de RENACER",
    powers: [
      "Iniciativa doctrinal exclusiva e inmutable sobre la Declaración de Fe (REN-DOC-001).",
      "Aprobación final indispensable para licencias, ordenaciones y revocaciones ministeriales.",
      "Presidencia de la ceremonia solemne de ordenación e imposición de manos.",
      "Facultad privativa para otorgar excepciones de admisión y homologaciones extraordinarias.",
    ],
    restrictions: [
      "No ejerce por sí solo facultades fiduciarias y patrimoniales exclusivas de los Trustees / Board.",
    ],
  },
  {
    entity: "CONSEJO MINISTERIAL",
    scope: "Órgano Colegiado de Examen, Formación y Acompañamiento Ministerial",
    powers: [
      "Recepción y tramitación de solicitudes de candidatura, licencia y ordenación.",
      "Administración y calificación del Examen Ministerial (REN-FORM-MIN-003).",
      "Emisión de dictámenes y recomendaciones vinculantes al Pastor Fundador.",
      "Conducción de procesos de disciplina ministerial y planes de restauración espiritual.",
      "Custodia técnica del registro de credenciales junto a la Secretaría General.",
    ],
    restrictions: [
      "No puede modificar la Declaración de Fe ni atribuirse soberanía doctrinal sobre el Fundador.",
      "No puede ordenar ministros sin la aprobación expresa del Pastor Fundador.",
    ],
  },
  {
    entity: "CONSEJO DE GOBIERNO / BOARD OF TRUSTEES",
    scope: "Gobierno Corporativo, Legal, Patrimonial y Fiduciario (Bylaws REN-DOC-003)",
    powers: [
      "Supervisión del cumplimiento legal, estatutario, fiscal 501(c)(3) y pólizas de seguro.",
      "Aprobación de compensaciones y contratos ministeriales remunerados (si existieren).",
    ],
    restrictions: [
      "No tiene competencia en el discernimiento espiritual del llamado ni en la ordenación eclesiástica.",
    ],
  },
  {
    entity: "ASAMBLEA GENERAL DE MIEMBROS",
    scope: "Cuerpo Soberano Congregacional en Materias Constitucionales Específicas",
    powers: [
      "Recepción testimonial en asamblea de nuevos ministros ordenados.",
      "Competencias exclusivas previstas expresamente en la Constitución (REN-DOC-002).",
    ],
    restrictions: [
      "No interviene en el examen teológico ni en la concesión técnica de credenciales ministeriales.",
    ],
  },
  {
    entity: "SEMINARIO BÍBLICO RENACER (REN-DOC-009)",
    scope: "Institución Superior de Formación Teológica y Ministerial",
    powers: [
      "Instrucción académica rigurosa en 4 niveles y 12 módulos.",
      "Emisión del Certificado de Finalización Académica.",
    ],
    restrictions: [
      "No otorga licencias ministeriales, credenciales ni oficios clericales automáticos.",
    ],
  },
];

// ============================================================================
// TÍTULOS NORMATIVOS COMPLETOS DE REN-DOC-010 (30 TÍTULOS)
// ============================================================================

export const MASTER_MINISTERIAL_CREDENTIALS_TITLES: MinisterialProgramTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, OBJETO Y ALCANCE INSTITUCIONAL",
    description: "Establece el marco normativo de las credenciales, licencias y ordenación en RENACER CHURCH.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Naturaleza Eclesiástica y Objeto del Reglamento",
        content:
          "El presente REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER (REN-DOC-010) establece las normas, procedimientos, requisitos y criterios teológicos mediante los cuales RENACER CHURCH reconoce, evalúa, acredita, ordena y supervisa a los siervos y siervas de Dios llamados al sagrado ministerio. Su objeto supremo es glorificar a Dios, proteger la sana doctrina bíblica, velar por la santidad del ministerio y pastorear fielmente al pueblo de Dios.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "1.2",
        title: "Alcance Universal y Ámbito de Aplicación",
        content:
          "Las disposiciones de este reglamento rigen de forma obligatoria para todos los candidatos ministeriales, ministros licenciados, ministros ordenados, pastores asignados, capellanes, maestros, evangelistas y ministros transferidos de otras iglesias que ejerzan servicio bajo la cobertura de RENACER CHURCH.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "PRINCIPIOS FUNDAMENTALES DE LA CREDENCIALIZACIÓN",
    description: "Consagra los principios teológicos y éticos que rigen el reconocimiento ministerial.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Llamado Divino y Reconocimiento Eclesial",
        content:
          "El ministerio cristiano nace de la soberana elección y llamado de Dios (Efesios 4:11; 1 Timoteo 1:12). La credencialización no crea el llamado divino, sino que constituye el reconocimiento formal, responsable y ordenado que la iglesia local otorga a quien ha demostrado idoneidad espiritual, solvencia moral, fidelidad doctrinal y madurez comprobada.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
      {
        sectionNumber: "2.2",
        title: "Prohibición Absoluta de Auto-Ordenación y Simonía",
        content:
          "Se prohíbe categóricamente en RENACER CHURCH:\n1. La auto-ordenación: Ninguna persona puede auto-adjudicarse títulos o credenciales sin el examen y reconocimiento del presbiterio legítimo.\n2. La simonía o compraventa de credenciales: La credencial ministerial es sagrada y JAMÁS podrá obtenerse mediante el pago de tarifas, donaciones condicionadas o influencias económicas.\n3. La credencialización ficticia: Queda terminantemente prohibido emitir credenciales de complacencia o para fines ajenos al servicio cristiano genuino.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "AUTORIDAD INSTITUCIONAL Y MATRIZ DE COMPETENCIAS",
    description: "Delimita las potestades del Pastor Fundador, Consejo Ministerial, Trustees y Asamblea.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "Autoridad Espiritual y Doctrinal Suprema del Pastor Fundador",
        content:
          "Conforme a la Constitución (REN-DOC-002) y la decisión histórica fundacional, el Pastor Fundador posee la autoridad espiritual y doctrinal final en RENACER. Ninguna licencia ministerial u ordenación presbiteral podrá ser conferida, suspendida o revocada sin su conocimiento, examen y consentimiento explícito en resolución institucional.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004"],
      },
      {
        sectionNumber: "3.2",
        title: "Rol del Consejo Ministerial y Límites de Gobierno",
        content:
          "El Consejo Ministerial actúa como cuerpo examinador y consultivo para la evaluación vocacional, revisión de expedientes, administración de exámenes teológicos y seguimiento disciplinario. El Consejo Ministerial colabora estrechamente con el Fundador pero carece de potestad para modificar unilateralmente la Declaración de Fe o revocar al Pastor Fundador.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-010"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "CATEGORÍAS Y DISTINCIONES MINISTERIALES",
    description: "Establece las categorías institucionales del servicio ministerial en RENACER.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "Definición de las Categorías Oficiales",
        content:
          "Se establecen en RENACER tres niveles jerárquicos de acreditación ministerial formal:\n1. CANDIDATO MINISTERIAL: Etapa probatoria y evaluativa previa a la credencial formal.\n2. MINISTRO LICENCIADO: Acreditación formal para ejercer funciones ministeriales específicas bajo supervisión.\n3. MINISTRO ORDENADO: Consagración eclesiástica plena para el presbiterio y oficios sagrados universales.\nSe ratifica que 'Pastor' es una función o nombramiento asignado y no una credencial separada.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-016", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "EL CANDIDATO MINISTERIAL: ADMISIÓN Y PERIODO PROBATORIO",
    description: "Norma el ingreso a la candidatura y los requisitos de postulación vocacional.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Requisitos para la Admisión como Candidato",
        content:
          "Para ser admitido como Candidato Ministerial (REN-FORM-MIN-001) se exige:\n1. Profesión de fe sincera y bautismo en agua por inmersión.\n2. Membresía activa en plena comunión (REN-DOC-005).\n3. Haber culminado la Escuela de Discípulos (REN-DOC-007) y la Escuela de Líderes (REN-DOC-008).\n4. Estar cursando o haber egresado del Seminario Bíblico RENACER (REN-DOC-009).\n5. Testimonio moral intachable y respaldo pastoral formal de su área (REN-FORM-MIN-002).\n6. Aceptación incondicional de la Declaración de Fe (REN-DOC-001).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-007", "REN-DOC-008", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "MINISTRO LICENCIADO: NATURALEZA, FACULTADES Y ALCANCE",
    description: "Define el perfil, requisitos, facultades y límites del Ministro Licenciado.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "Facultades Litúrgicas y Ministeriales del Licenciado",
        content:
          "El Ministro Licenciado está facultado para:\n1. Predicar y enseñar en púlpitos, cultos, vigilias y conferencias de la iglesia.\n2. Liderar y supervisar Familias de Grupo, redes juveniles, de damas o varones.\n3. Realizar visitas pastorales, unción de enfermos con aceite y consejería espiritual bíblica.\n4. Asistir a ministros ordenados en la administración de las ordenanzas eclesiásticas.\n5. Celebrar matrimonios exclusivamente cuando exista delegación pastoral escrita y cumplimiento de la ley civil local.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
        legalReviewRequired: true,
      },
      {
        sectionNumber: "6.2",
        title: "Límites del Ministerio Licenciado",
        content:
          "La licencia ministerial NO equivale a ordenación presbiteral. El Ministro Licenciado no puede participar como presbítero ordenador en la imposición de manos de nuevos ministros ni asumir funciones de gobierno corporativo sin nombramiento expreso.",
        decisionIds: ["DEC-DEF-010"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "MINISTRO ORDENADO: CONSAGRACIÓN PLENA Y PRESBITERIO",
    description: "Establece los requisitos, investidura y facultades del Ministro Ordenado.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "Plenitud de Facultades Eclesiásticas del Ministro Ordenado",
        content:
          "El Ministro Ordenado integra el presbiterio sagrado de la iglesia y posee facultades plenas para:\n1. Administrar de forma autónoma las santas ordenanzas: Bautismo en agua y Santa Cena.\n2. Solemnizar santos matrimonios cristianos conforme a la ley del Estado de New Jersey y los estatutos de RENACER.\n3. Oficiar ceremonias fúnebres, dedicación de templos y presentación solemne de infantes.\n4. Integrar tribunales examinadores y participar en la imposición de manos en ceremonias de ordenación.\n5. Ser nombrado Pastor Principal, Pastor Asociado o Director General de Ministerios.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "NOMBRAMIENTO, ASIGNACIONES Y FUNCIÓN PASTORAL",
    description: "Distingue la credencial eclesiástica de la función o nombramiento pastoral específico.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Naturaleza de la Asignación Pastoral",
        content:
          "El oficio de 'Pastor' constituye una función y asignación de liderazgo congregacional encomendada por el Pastor Fundador a un ministro debidamente acreditado (Licenciado u Ordenado). La función pastoral implica pastoreo directo, alimentación espiritual, supervisión litúrgica y dirección de la grey local.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "8.2",
        title: "Diversidad de Funciones Ministeriales Autorizadas",
        content:
          "Un ministro acreditado puede ser asignado a diversas funciones según su don de gracia y necesidad institucional:\n* Pastor Asociado / Pastor Asignado\n* Maestro / Docente Teológico del Seminario\n* Evangelista Comunitario e Internacional\n* Ministro de Alabanza y Adoración\n* Director de Área Ministerial (Jóvenes, Niños, Misiones)\n* Capellán Hospitalario o Penitenciario (sujeto a reglamentación futura)",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "REQUISITOS ACADÉMICOS Y RUTA FORMATIVA OBLIGATORIA",
    description: "Armoniza los requisitos formativos con la Escuela de Discípulos, Líderes y Seminario.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "La Cadena Formativa Oficial de RENACER",
        content:
          "La ruta ministerial formal exige el cumplimiento secuencial de las etapas formativas de la iglesia:\n\nESCUELA DE DISCÍPULOS (REN-DOC-007 — 9 meses)\n   ↓\nESCUELA DE LÍDERES (REN-DOC-008 — 6 meses)\n   ↓\nSEMINARIO BÍBLICO RENACER (REN-DOC-009 — 1 año mínimo / 4 niveles / 12 módulos)\n   ↓\nCANDIDATO MINISTERIAL (Examen Vocacional — REN-FORM-MIN-001)\n   ↓\nMINISTRO LICENCIADO (REN-DOC-010)\n   ↓\nMINISTRO ORDENADO (REN-DOC-010)\n   ↓\nASIGNACIÓN PASTORAL O MINISTERIAL ESPECÍFICA",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-007", "REN-DOC-008", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "EVALUACIÓN DOCTRINAL Y ADHESIÓN TEOLÓGICA",
    description: "Norma el examen estricto de fidelidad a la Declaración de Fe y Doctrina.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Examen de los 20 Artículos Fundamentales de Fe",
        content:
          "Todo aspirante a licencia u ordenación ministerial será examinado rigurosamente en su comprensión y aceptación de los 20 Artículos Fundamentales de Fe de REN-DOC-001. No se otorgará credencial a quien mantenga desviaciones teológicas, doctrinas contrarias a la Trinidad, negación de la inerrancia bíblica, cesacionismo de dones o herejías cristológicas.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010"],
        dependencies: ["REN-DOC-001"],
      },
      {
        sectionNumber: "10.2",
        title: "Transparencia sobre el Estado de REN-DOC-001",
        content:
          "Se hace constar formalmente que, mientras REN-DOC-001 permanezca en estado de BORRADOR NO ADOPTADO dentro del ciclo de gobernanza, los candidatos suscribirán su aceptación a los 20 Artículos como la norma teológica rectora oficial de la iglesia.",
        decisionIds: ["DEC-DEF-001"],
        dependencies: ["REN-DOC-001"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "EVALUACIÓN DE CARÁCTER, TESTIMONIO Y LLAMADO",
    description: "Establece los estándares éticos, morales y familiares según 1 Timoteo 3 y Tito 1.",
    sections: [
      {
        sectionNumber: "11.1",
        title: "Requisitos de Carácter y Vida Moral Intachable",
        content:
          "El candidato al ministerio debe exhibir las cualidades bíblicas consagradas en 1 Timoteo 3:1-7 y Tito 1:5-9:\n1. Irreprensible, sobrio, prudente, decoroso, hospedador y apto para enseñar.\n2. No dado al vino, no pendenciero, no codicioso de ganancias deshonestas, sino amable y apacible.\n3. Que gobierne bien su propia casa y tenga a sus hijos en sujeción con toda honestidad.\n4. Que goce de buen testimonio de los de afuera para no caer en descrédito ni lazo del diablo.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "EXPERIENCIA Y PRÁCTICA MINISTERIAL COMPROBADA",
    description: "Norma el tiempo de servicio práctico requerido para acceder a licencias y ordenaciones.",
    sections: [
      {
        sectionNumber: "12.1",
        title: "Práctica Supervisada Previa",
        content:
          "El acceso a la Licencia Ministerial exige haber completado la pasantía ministerial del Seminario Bíblico (REN-DOC-009) y ejercido liderazgo efectivo de grupos o áreas con fruto medible. Para la Ordenación Presbiteral, se requiere haber ejercido fielmente como Ministro Licenciado durante un período prudencial de servicio activo, fijándose como [PENDIENTE_DEFINIR] la cantidad exacta de meses reglamentarios.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIII",
    titleName: "EL EXAMEN MINISTERIAL INSTITUCIONAL",
    description: "Define la estructura, materias y tribunal del Examen Ministerial Oficial.",
    sections: [
      {
        sectionNumber: "13.1",
        title: "Estructura y Áreas Temáticas del Examen (REN-FORM-MIN-003)",
        content:
          "El Examen Ministerial constará de prueba escrita y sustentación oral ante el tribunal examinador, evaluando:\n1. Bibliología, Canon y Hermenéutica Bíblica.\n2. Teología Sistemática: Trinidad, Cristología, Soteriología y Neumatología.\n3. Dones espirituales, sanidad y orden bíblico (1 Corintios 14).\n4. Eclesiología, gobierno institucional y documentos normativos (REN-DOC-001 a 008).\n5. Homilética, cuidado pastoral y límites éticos de la consejería.\n6. Resolución de conflictos (Mateo 18 / REN-DOC-005) y deber legal de reporte (N.J.S.A. 9:6-8.10).\nLa escala y porcentaje mínimo de aprobación quedan consignados como [PENDIENTE_DEFINIR].",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-004", "REN-DOC-006", "REN-DOC-009"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIV",
    titleName: "PROCESO FORMAL DE LICENCIAMIENTO MINISTERIAL",
    description: "Establece el flujo procedimental paso a paso para la obtención de la licencia.",
    sections: [
      {
        sectionNumber: "14.1",
        title: "Flujo del Proceso de Licenciamiento",
        content:
          "El procedimiento de licenciamiento se rige por las siguientes fases obligatorias:\n1. Presentación de la Solicitud de Licencia (REN-FORM-MIN-004) con expediente académico completo.\n2. Informe pastoral favorable de vida, familia y servicio (REN-FORM-MIN-002).\n3. Aprobación satisfactoria del Examen Ministerial (REN-FORM-MIN-003).\n4. Dictamen unánime o mayoritario del Consejo Ministerial.\n5. Resolución final de aprobación suscrita por el Pastor Fundador (REN-FORM-MIN-005).\n6. Emisión de la Cédula y Cédula de Credencial de Ministro Licenciado (REN-FORM-MIN-009).",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XV",
    titleName: "PROCESO FORMAL DE ORDENACIÓN PRESBITERAL",
    description: "Norma el protocolo riguroso para la consagración presbiteral y ordenación.",
    sections: [
      {
        sectionNumber: "15.1",
        title: "Flujo del Proceso de Ordenación",
        content:
          "Para acceder a la Ordenación Ministerial se requiere:\n1. Haber ejercido con fruto, irreprochabilidad y celo como Ministro Licenciado.\n2. Presentación de la Solicitud de Ordenación (REN-FORM-MIN-006).\n3. Examen teológico superior y entrevista con el Pastor Fundador y presbiterio (REN-FORM-MIN-007).\n4. Aprobación solemne del Pastor Fundador y resolución del Consejo Ministerial.\n5. Consagración litúrgica pública e imposición de manos conforme al Título XVI.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVI",
    titleName: "CEREMONIA SOLEMNE Y ACTA DE ORDENACIÓN",
    description: "Regula la liturgia de consagración, la imposición de manos y el Acta Oficial.",
    sections: [
      {
        sectionNumber: "16.1",
        title: "Liturgia de Consagración e Imposición de Manos",
        content:
          "La ordenación ministerial se celebrará en culto público solemne presidido por el Pastor Fundador junto al presbiterio ordenador. Se realizará la imposición de manos como acto eclesiástico de bendición, reconocimiento y comisión espiritual (1 Timoteo 4:14; 2 Timoteo 1:6), sin atribuir virtudes mágicas ni sacramentales ajenas a las Sagradas Escrituras.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
      {
        sectionNumber: "16.2",
        title: "El Acta Solemne de Ordenación (REN-FORM-MIN-008)",
        content:
          "Finalizada la ceremonia, se suscribirá el Acta Oficial de Ordenación por el Pastor Fundador, los ministros ordenadores y el nuevo ministro ordenado, remitiéndose copia certificada al Archivo General (REN-DOC-019).",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-019"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVII",
    titleName: "REGISTRO CENTRAL Y NÚMERO ÚNICO DE CREDENCIAL",
    description: "Norma la codificación alfanumérica y el Libro Maestro de Registros Ministeriales.",
    sections: [
      {
        sectionNumber: "17.1",
        title: "Arquitectura del Número de Credencial",
        content:
          "Cada ministro acreditado recibirá un número único e intransferible con el formato institucional propuesto:\n`REN-MIN-YYYY-XXXX` (donde YYYY es el año de emisión y XXXX el correlativo secuencial único).\nSe establece el formato como [PROPUESTO / PENDIENTE_DEFINIR_DEFINITIVO], prohibiéndose de forma terminante duplicar o reasignar números de credenciales históricas revocadas o extintas.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-019"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVIII",
    titleName: "RECONOCIMIENTO Y HOMOLOGACIÓN DE MINISTROS EXTERNOS",
    description: "Norma el protocolo para ministros ordenados procedentes de otras denominaciones.",
    sections: [
      {
        sectionNumber: "18.1",
        title: "Procedimiento de Homologación Ministerial",
        content:
          "Los ministros ordenados en otras iglesias o denominaciones no gozan de reconocimiento automático en RENACER. Deberán presentar la Solicitud de Homologación (REN-FORM-MIN-011), acreditar identidad, credenciales previas, cartas de recomendación, superar el Examen Ministerial y cursar los módulos complementarios de Gobierno y Eclesiología RENACER antes de que el Pastor Fundador resuelva su reconocimiento.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-004", "REN-DOC-006"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIX",
    titleName: "RENOVACIÓN, ACTUALIZACIÓN Y MANTENIMIENTO DE CREDENCIALES",
    description: "Regula la vigencia activa, actualización del legajo y formación continua.",
    sections: [
      {
        sectionNumber: "19.1",
        title: "Mantenimiento del Estado Activo y Frecuencia de Renovación",
        content:
          "Las credenciales ministeriales se mantendrán activas mediante la verificación periódica de testimonio moral, fidelidad doctrinal, participación en retiros pastorales y servicio ministerial activo. La periodicidad de renovación documental mediante REN-FORM-MIN-010 queda establecida como [PENDIENTE_DEFINIR] (sugiriéndose revisión anual o bienal según determine el Pastor Fundador).",
        decisionIds: ["DEC-DEF-010"],
        dependencies: ["REN-DOC-006", "REN-DOC-019"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XX",
    titleName: "SUSPENSIÓN, REVOCACIÓN Y PROCEDIMIENTO DE RESTAURACIÓN",
    description: "Norma el debido proceso disciplinario, medidas cautelares y planes de restauración.",
    sections: [
      {
        sectionNumber: "20.1",
        title: "Causales de Suspensión Cautelar y Revocación de Credenciales",
        content:
          "Son causales para la suspensión o revocación de credenciales ministeriales:\n1. Desviación herética y abandono de la Declaración de Fe (REN-DOC-001).\n2. Inmoralidad sexual comprobada (adulterio, fornicación, abuso o acoso sexual).\n3. Fraude financiero, apropiación indebida o enriquecimiento privado ilícito (private inurement).\n4. Abuso espiritual, violencia física, intrafamiliar o maltrato a menores y personas vulnerables.\n5. Condena penal civil por delitos graves.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
        legalReviewRequired: true,
      },
      {
        sectionNumber: "20.2",
        title: "Protocolo de Restauración Espiritual sin Impunidad",
        content:
          "En armonía con REN-DOC-005, la disciplina busca la salvación y restauración del alma del caído. No obstante, se consagra el principio rector: EL PERDÓN ESPIRITUAL NO CONFIERE RESTITUCIÓN AUTOMÁTICA AL OFICIO PASTORAL. Toda restauración ministerial requerirá un proceso prolongado de acompañamiento, sanidad, reparación y evaluación formal (REN-FORM-MIN-012). Jamás se utilizará la restauración para encubrir abusos o delitos.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXI",
    titleName: "DISCIPLINA MINISTERIAL Y DEBIDO PROCESO",
    description: "Garantiza el derecho a ser escuchado, confidencialidad y comités de mediación.",
    sections: [
      {
        sectionNumber: "21.1",
        title: "Garantías del Debido Proceso Eclesiástico",
        content:
          "Todo ministro sometido a investigación tiene derecho a conocer las acusaciones formuladas, presentar descargos, aportar pruebas y ser oído por el Comité de Disciplina y el Pastor Fundador antes de cualquier sanción definitiva, preservando la dignidad de las partes conforme a Mateo 18 y 1 Timoteo 5:19.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-005"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXII",
    titleName: "ÉTICA MINISTERIAL, LÍMITES PASTORALES Y SALVAGUARDAS LEGALES",
    description: "Prohíbe coacciones proféticas, intromisiones y consagra el deber de reporte legal.",
    sections: [
      {
        sectionNumber: "22.1",
        title: "Prohibición Absoluta de Manipulación y Coerción Profética",
        content:
          "Se prohíbe de forma tajante a todo ministro con credencial:\n1. Utilizar expresiones como 'Dios me dijo' o 'el Espíritu me reveló' para imponer decisiones financieras, laborales o matrimoniales sobre los creyentes.\n2. Exigir o solicitar préstamos personales, herencias o dádivas patrimoniales a los miembros de la congregación.\n3. Inducir la ruptura de matrimonios legítimos o intervenir sin autorización en tratamientos médicos privados.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "22.2",
        title: "Salvaguarda Legal y Reporte Obligatorio de Abusos (N.J.S.A. 9:6-8.10)",
        content:
          "En concordancia con REN-DOC-016 y la legislación de New Jersey, todo ministro de RENACER tiene el deber legal irrenunciable de denunciar de inmediato ante las autoridades policiales y la línea de protección infantil (1-877-NJ-ABUSE) cualquier sospecha o indicio de maltrato o abuso de menores. La confidencialidad pastoral no ampara delitos ni obstaculiza la acción de la justicia civil.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-005", "REN-DOC-016"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIII",
    titleName: "PLENA IGUALDAD Y MINISTERIO DE HOMBRES Y MUJERES",
    description: "Garantiza el derecho pleno de las mujeres al ministerio, licencia y ordenación.",
    sections: [
      {
        sectionNumber: "23.1",
        title: "Igualdad Absoluta en la Credencialización y Ordenación Femenina",
        content:
          "RENACER CHURCH proclama y consagra la plena igualdad de hombres y mujeres en el acceso a todas las categorías ministeriales. Las mujeres tienen derecho irrestricto a postular, ser examinadas, recibir licencias ministeriales, ser consagradas mediante ordenación presbiteral, ejercer el pastorado y presidir cultos y ordenanzas sagradas conforme a Gálatas 3:28, Romanos 16:1-7 y la doctrina institucional.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-013", "DEC-DEF-015", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIV",
    titleName: "CREDENCIALES Y FORMACIÓN PARA FUNCIONES ESPECIALES",
    description: "Norma las credenciales complementarias para capellanías, misiones y educación.",
    sections: [
      {
        sectionNumber: "24.1",
        title: "Acreditaciones Especiales",
        content:
          "El Consejo Ministerial podrá emitir credenciales especiales o endosos ministeriales para capellanes institucionales, misioneros transculturales o directores de educación cristiana que requieran acreditación eclesiástica ante entidades civiles o penitenciarias, bajo el estado [PROPUESTO / PENDIENTE_DEFINIR_REGLAMENTACION_ESPECIFICA].",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXV",
    titleName: "EL EXPEDIENTE MINISTERIAL Y CUSTODIA HISTÓRICA",
    description: "Regula la conformación del legajo individual y su preservación en REN-DOC-019.",
    sections: [
      {
        sectionNumber: "25.1",
        title: "Estructura del Expediente Individual del Ministro",
        content:
          "El expediente de cada ministro contendrá: datos de identidad personal, certificados de bautismo y membresía, diplomas de Escuela de Discípulos, Líderes y Seminario, actas de examen teológico, antecedentes de servicio, actas de licencia u ordenación, registro de renovaciones y registro de medidas disciplinarias o restaurativas si existieren.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-019"],
      },
      {
        sectionNumber: "25.2",
        title: "Confidencialidad y Resguardo Digital (REN-DOC-019)",
        content:
          "Los expedientes ministeriales son de carácter estrictamente confidencial, custodiados bajo doble control por la Secretaría del Consejo Ministerial y el Archivo Central conforme al Reglamento de Archivo y Registros (REN-DOC-019).",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-003", "REN-DOC-019"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVI",
    titleName: "CATÁLOGO DE FORMULARIOS Y ACTAS MINISTERIALES",
    description: "Codifica y norma los 12 formularios oficiales de gestión de credenciales.",
    sections: [
      {
        sectionNumber: "26.1",
        title: "Implementación Oficial de los Formularios REN-FORM-MIN",
        content:
          "Se aprueba el catálogo oficial de los 12 formularios de gestión de credenciales ministeriales (REN-FORM-MIN-001 al 012). Todo acto de postulación, evaluación, examen, licencia, ordenación, renovación o disciplina deberá constar obligatoriamente en el formulario correspondiente debidamente foliado y firmado.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-004", "REN-DOC-019"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVII",
    titleName: "RELACIÓN CON EL SEMINARIO BÍBLICO RENACER",
    description: "Establece la distinción taxativa entre formación académica y ordenación eclesial.",
    sections: [
      {
        sectionNumber: "27.1",
        title: "Distinción entre Título Académico y Credencial Ministerial",
        content:
          "Se consagra taxativamente: REN-DOC-009 rige la FORMACIÓN ACADÉMICA SUPERIOR; REN-DOC-010 rige la CREDENCIALIZACIÓN Y ORDENACIÓN. El egreso y diploma del Seminario Bíblico RENACER es requisito académico previo, pero NO confiere por sí solo ordenación presbiteral, licencia ni derecho automático a nombramiento pastoral.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006", "REN-DOC-009"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVIII",
    titleName: "CREDENCIALIZACIÓN Y ASIGNACIONES PASTORALES",
    description: "Regula la designación, rotación y desvinculación de asignaciones pastorales.",
    sections: [
      {
        sectionNumber: "28.1",
        title: "Naturaleza No Vitalicia de las Asignaciones de Liderazgo",
        content:
          "Las asignaciones como Pastor Principal de una congregación local, Pastor de Jóvenes o Director Ministerial responden a las necesidades del Reino de Dios y de RENACER CHURCH. Son otorgadas mediante carta pastoral por el Pastor Fundador y no generan derechos adquiridos propietarios sobre templos, púlpitos o feligresías.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIX",
    titleName: "CREDENCIALIZACIÓN Y ASUNTOS MIGRATORIOS: NO GARANTÍA DE BENEFICIOS",
    description: "Establece la advertencia y salvaguarda institucional ante procesos migratorios.",
    sections: [
      {
        sectionNumber: "29.1",
        title: "Principio de Realidad y No Garantía Migratoria",
        content:
          "RENACER CHURCH puede certificar ante autoridades civiles la verdadera formación, ordenación, servicio voluntario o empleo religioso de sus ministros conforme a la verdad histórica de los hechos.\n\nSE ESTABLECE DE FORMA CATEGÓRICA QUE:\n1. Ninguna credencial ministerial o nombramiento eclesiástico emitido por RENACER garantiza por sí mismo la aprobación de visas religiosas (como la clasificación R-1), residencias por empleo religioso ni beneficios de inmigración ante el USCIS o el Departamento de Estado.\n2. Queda terminantemente prohibido emitir credenciales o constancias ficticias destinadas a crear apariencias documentales no correspondidas con la realidad espiritual y práctica del ministro.\n3. Cualquier trámite migratorio se sustenta en asesoría letrada independiente y en la verdad factual de las funciones desempeñadas.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-003"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXX",
    titleName: "DISPOSICIONES FINALES, ESTADO LEGAL Y VIGENCIA",
    description: "Declara el estado formal de redacción, sujeción a revisión jurídica y cláusulas finales.",
    sections: [
      {
        sectionNumber: "30.1",
        title: "Estado Formal de Borrador No Adoptado y Revisión Legal",
        content:
          "El presente REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER (REN-DOC-010) ostenta formalmente el estado de BORRADOR NO ADOPTADO (v0.1) y REQUIERE_REVISION_LEGAL integral previa a su adopción definitiva por la Asamblea o el Consejo de Gobierno conforme a la Constitución (REN-DOC-002) y los Bylaws (REN-DOC-003).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-003"],
        legalReviewRequired: true,
      },
      {
        sectionNumber: "30.2",
        title: "Materias Sujetas a Revisión Letrada Especializada",
        content:
          "Quedan expresamente identificadas para consulta con asesoría legal en New Jersey y derecho sin fines de lucro:\n* Requisitos de validez para la solemnización de matrimonios civiles y religiosos.\n* Resguardo y privacidad de legajos ministeriales ante requerimientos judiciales.\n* Responsabilidad civil y pólizas de seguros ministeriales.\n* Protocolos de reporte obligatorio bajo N.J.S.A. 9:6-8.10.\n* Certificaciones eclesiásticas para trámites de inmigración religiosa.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-019"],
        dependencies: ["REN-DOC-003", "REN-DOC-016", "REN-DOC-019"],
        legalReviewRequired: true,
      },
    ],
  },
];

// ============================================================================
// OBJETO BORRADOR MAESTRO COMPLETO (REN-DOC-010)
// ============================================================================

export const FULL_MINISTERIAL_CREDENTIALS_DRAFT: MasterMinisterialCredentialsDraft = {
  code: "REN-DOC-010",
  id: "doc-ren-010",
  title: "REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER",
  shortTitle: "Reglamento de Credenciales Ministeriales",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  decisionState: "DEFINIDA",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "CREDENCIALES_MINISTERIALES",
  author: "Pastor Fundador / Consejo Ministerial",
  authorId: "usr-fundador-001",
  responsibleArea: "CONSEJO_MINISTERIAL_Y_PASTORAL",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "REGLAMENTO",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER (REN-DOC-010) establece la normativa eclesiástica, teológica y procedimental para el discernimiento vocacional, examen teológico, otorgamiento de licencias ministeriales, consagración presbiteral y preservación del orden ministerial en RENACER CHURCH. Fundamentado en la inerrancia de las Sagradas Escrituras y en estricta coherencia con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Manual de Gobierno (REN-DOC-004), el Manual de Membresía (REN-DOC-005), el Manual de Ministerios y Liderazgo (REN-DOC-006), el Programa de la Escuela de Discípulos (REN-DOC-007), el Programa de la Escuela de Líderes (REN-DOC-008) y el Programa Oficial del Seminario Bíblico RENACER (REN-DOC-009), este reglamento consagra la ruta ministerial oficial de siete eslabones, garantizando la plena igualdad de hombres y mujeres en el ministerio sagrado, preservando la autoridad espiritual y doctrinal inmutable del Pastor Fundador, y proscribiendo de forma absoluta la simonía, la auto-ordenación y cualquier forma de abuso de poder en el rebaño de Jesucristo.",
  ministerialRoute: {
    stepsCount: 7,
    steps: [
      "ESCUELA DE DISCÍPULOS (REN-DOC-007)",
      "ESCUELA DE LÍDERES (REN-DOC-008)",
      "SEMINARIO BÍBLICO RENACER (REN-DOC-009)",
      "CANDIDATO MINISTERIAL (Examen Vocacional)",
      "MINISTRO LICENCIADO (REN-DOC-010)",
      "MINISTRO ORDENADO (REN-DOC-010)",
      "PASTOR / ASIGNACIÓN MINISTERIAL ESPECÍFICA",
    ],
  },
  categoriesCount: 3,
  categories: [
    {
      code: "CANDIDATO",
      name: "Candidato Ministerial",
      nature: "Etapa probatoria y vocacional de examen.",
      scope: "Prácticas supervisadas en áreas y grupos.",
    },
    {
      code: "LICENCIADO",
      name: "Ministro Licenciado",
      nature: "Acreditación formal para ministerio activo bajo supervisión.",
      scope: "Predicación, enseñanza, liderazgo de grupos, visitas y actos litúrgicos delegados.",
    },
    {
      code: "ORDENADO",
      name: "Ministro Ordenado",
      nature: "Consagración presbiteral solemne e imposición de manos.",
      scope: "Plenitud litúrgica (bautismos, Santa Cena, matrimonios), tribunal examinador y pastorado titular.",
    },
  ],
  ministerialStates: MINISTERIAL_STATES_CATALOG,
  futureForms: MINISTERIAL_FUTURE_FORMS_CATALOG,
  authorityMatrix: MINISTERIAL_AUTHORITY_MATRIX,
  titles: MASTER_MINISTERIAL_CREDENTIALS_TITLES,
  founderAuthorityPreservation: {
    spiritualDoctrinalSovereignty: true,
    statement: "El Pastor Fundador posee la autoridad espiritual y doctrinal final conforme a la arquitectura institucional. El Consejo Ministerial actúa como órgano examinador y asesor sin soberanía sobre el Fundador.",
  },
  genderEquality: {
    fullAccess: true,
    statement: "Las mujeres tienen acceso pleno e igualitario a todas las funciones, licencias ministeriales, ordenación presbiteral y nombramientos pastorales sin discriminación de género.",
  },
  nonSelfOrdinationClause: {
    explicit: true,
    statement: "Se prohíbe de forma tajante la auto-ordenación; toda consagración requiere examen formal y reconocimiento por el presbiterio legítimo.",
  },
  nonFinancialOrdinationClause: {
    explicit: true,
    statement: "Se prohíbe terminantemente la simonía o concesión de credenciales mediante el pago de tarifas, donaciones o influencias económicas.",
  },
  immigrationDisclaimer: {
    noVisaGuarantee: true,
    statement: "Ninguna credencial emitida por RENACER garantiza por sí misma la obtención de visas religiosas (R-1), residencias o beneficios migratorios ante el USCIS.",
  },
  counselingAndLegalLimits: {
    nonMedicalReplacement: true,
    mandatoryAbuseReporting: true,
    statuteReference: "N.J.S.A. 9:6-8.10",
    statement: "El ministro no sustituye a médicos, psicólogos ni abogados. Es obligatorio el reporte inmediato de abusos infantiles conforme a la ley del Estado de New Jersey.",
  },
};

export const MINISTERIAL_CREDENTIALS_DRAFT = FULL_MINISTERIAL_CREDENTIALS_DRAFT;

export function getAllMinisterialCredentialsSections(): MinisterialManualSection[] {
  return MASTER_MINISTERIAL_CREDENTIALS_TITLES.flatMap((t) => t.sections);
}

// ============================================================================
// GENERADOR DE MARKDOWN COMPLETO PARA VISOR INSTITUCIONAL
// ============================================================================

export function generateFullMinisterialCredentialsMarkdown(): string {
  const reg = FULL_MINISTERIAL_CREDENTIALS_DRAFT;
  let md = `# ${reg.title}\n\n`;
  md += `**Código:** ${reg.code} | **Versión:** v${reg.version} | **Jerarquía:** ${reg.hierarchyLevel}\n`;
  md += `**Estado de Trabajo:** ${reg.status} | **Estado de Adopción:** ${reg.adoptionStatus}\n`;
  md += `**Estado Legal:** ${reg.legalState} | **Estado de Decisión:** ${reg.decisionState}\n`;
  md += `**Categoría:** ${reg.category} | **Área Responsable:** ${reg.responsibleArea}\n\n`;
  md += `> **ADVERTENCIA INSTITUCIONAL Y LEGAL:** Documento oficial en fase de redacción técnica preliminar (v0.1). No adoptado formalmente. Requiere revisión letrada integral previa a su adopción definitiva.\n\n`;
  md += `## PREÁMBULO\n\n${reg.preamble}\n\n---\n\n`;

  for (const title of reg.titles) {
    md += `## ${title.titleNumber} — ${title.titleName}\n\n`;
    md += `*${title.description}*\n\n`;
    for (const sec of title.sections) {
      md += `### Sección ${sec.sectionNumber}: ${sec.title}\n\n`;
      md += `${sec.content}\n\n`;
      if (sec.practicalProtocol) {
        md += `**Protocolo Operativo / Práctico:**\n${sec.practicalProtocol}\n\n`;
      }
      if (sec.pendingDefinitionNotes) {
        md += `> [!WARNING]\n> **Nota de Asunto Pendiente:** ${sec.pendingDefinitionNotes}\n\n`;
      }
      if (sec.decisionIds && sec.decisionIds.length > 0) {
        md += `*Decisiones Institucionales Vinculadas:* ${sec.decisionIds.join(", ")}\n\n`;
      }
      if (sec.dependencies && sec.dependencies.length > 0) {
        md += `*Documentos Jerárquicos:* ${sec.dependencies.join(", ")}\n\n`;
      }
      if (sec.legalReviewRequired) {
        md += `> [!IMPORTANT]\n> **Materia Sujeta a Revisión Legal (New Jersey / 501(c)(3)).**\n\n`;
      }
      md += `---\n\n`;
    }
  }

  md += `## MATRIZ DE ESTADOS INSTITUCIONALES DEL MINISTRO (10 ESTADOS)\n\n`;
  md += `| Código | Estado Institucional | Descripción | Facultades y Privilegios | Restricciones |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const st of reg.ministerialStates) {
    md += `| **${st.stateCode}** | ${st.name} | ${st.description} | ${st.privileges} | ${st.restrictions} |\n`;
  }
  md += `\n---\n\n`;

  md += `## MATRIZ DE COMPETENCIAS Y LÍMITES DE AUTORIDAD\n\n`;
  md += `| Órgano / Autoridad | Ámbito Eclesiástico | Facultades Principales | Restricciones y Límites |\n`;
  md += `|---|---|---|---|\n`;
  for (const row of reg.authorityMatrix) {
    md += `| **${row.entity}** | ${row.scope} | ${row.powers.join("; ")} | ${row.restrictions.join("; ")} |\n`;
  }
  md += `\n---\n\n`;

  md += `## CATÁLOGO DE FORMULARIOS OFICIALES DE GESTIÓN MINISTERIAL (12 FORMULARIOS)\n\n`;
  md += `| Código | Nombre del Formulario | Propósito Principal | Responsable | Período de Retención |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const form of reg.futureForms) {
    md += `| **${form.code}** | ${form.name} | ${form.purpose} | ${form.responsible} | ${form.retentionPeriod} |\n`;
  }
  md += `\n`;

  return md;
}
