// ============================================================================
// RENACER CHURCH MAESTRO — FASE 37
// REN-DOC-006: MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER
// BORRADOR OFICIAL COMPLETO — v0.1 (EN_REDACCION / NO ADOPTADA)
// ============================================================================

export interface ManualSection {
  sectionNumber: string;
  title: string;
  content: string;
  decisionIds: string[];
  dependencies: string[];
  practicalProtocol?: string;
  pendingDefinitionNotes?: string;
  legalReviewRequired?: boolean;
}

export interface MinistryAreaDefinition {
  code: string;
  name: string;
  category: "PASTORAL_Y_DISCIPULADO" | "LITURGIA_Y_ORACION" | "EDIFICACION_GENERACIONAL" | "MISION_Y_EXTENSION" | "ADMINISTRACION_Y_SOPORTE";
  purpose: string;
  coreResponsibilities: string[];
  status: "AREA_MINISTERIAL_ESTABLECIDA" | "ESTRUCTURA_PROPUESTA";
  supervisingBody: "CONSEJO_MINISTERIAL" | "CONSEJO_GOBIERNO" | "PASTOR_FUNDADOR";
  volunteerProfiles: string[];
  legalReviewRequired?: boolean;
}

export interface LeadershipMatrixRow {
  rol: string;
  funcionPrincipal: string;
  supervisa: string;
  reportaA: string;
  requisitosEsenciales: string;
  nivelAutoridad: string;
}

export interface OperationalWorkflow {
  id: string;
  title: string;
  trigger: string;
  evaluation: string;
  responsible: string;
  decision: string;
  documentation: string;
  followUp: string;
  steps: string[];
}

export interface FutureFormDefinition {
  code: string;
  name: string;
  purpose: string;
  responsible: string;
  retentionPeriod: string;
}

export interface MinistryLeadershipManualTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: ManualSection[];
}

export interface MasterMinistryLeadershipManualDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "MINISTERIOS_Y_LIDERAZGO";
  author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno";
  authorId: "usr-fundador-001";
  responsibleArea: "PASTORAL_Y_SUPERVISION_MINISTERIAL";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "MANUAL_INSTITUCIONAL";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  titles: MinistryLeadershipManualTitle[];
  ministryAreas: MinistryAreaDefinition[];
  leadershipMatrix: LeadershipMatrixRow[];
  operationalWorkflows: OperationalWorkflow[];
  futureForms: FutureFormDefinition[];
}

export const MINISTRY_AREAS_CATALOG: MinistryAreaDefinition[] = [
  {
    code: "MIN-01",
    name: "Ministerio Pastoral y Cuidado Espiritual",
    category: "PASTORAL_Y_DISCIPULADO",
    purpose: "Alimentar, pastorear, proteger y guiar a la congregación mediante la predicación expositiva, la consejería bíblica y la intercesión continua.",
    coreResponsibilities: ["Predicación de la Palabra", "Consejería pastoral y acompañamiento", "Administración de ordenanzas sagradas", "Protección de la grey frente a herejías"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "PASTOR_FUNDADOR",
    volunteerProfiles: ["Pastores acreditados", "Ministros licenciados", "Consejeros bíblicos capacitados"],
  },
  {
    code: "MIN-02",
    name: "Ministerio de Enseñanza y Educación Bíblica",
    category: "PASTORAL_Y_DISCIPULADO",
    purpose: "Capacitar doctrinalmente a la iglesia mediante currículos pedagógicos sólidos, sistemáticos y cristocéntricos.",
    coreResponsibilities: ["Diseño pedagógico institucional", "Impartición de clases y módulos", "Evaluación de aprendizaje", "Formación de maestros"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Docentes bíblicos", "Teólogos", "Pedagogos cristianos"],
  },
  {
    code: "MIN-03",
    name: "Ministerio de Evangelismo y Alcance",
    category: "MISION_Y_EXTENSION",
    purpose: "Proclamar las buenas nuevas de salvación en la comunidad local mediante estrategias de alcance directo y comunitario.",
    coreResponsibilities: ["Jornadas de evangelismo público", "Seguimiento a nuevos convertidos", "Capacitación en testificación personal", "Impactos barriales"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Evangelistas laicos", "Servidores de alcance", "Creyentes con don de testificación"],
  },
  {
    code: "MIN-04",
    name: "Ministerio de Misiones y Extensión Global",
    category: "MISION_Y_EXTENSION",
    purpose: "Promover la visión misionera transcultural, apoyar a obreros en el campo y coordinar la plantación de nuevas iglesias.",
    coreResponsibilities: ["Sensibilización misionera congregacional", "Sostenimiento y comunicación con misioneros", "Viajes misioneros de corto plazo", "Proyectos de extensión"],
    status: "ESTRUCTURA_PROPUESTA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Promotores misioneros", "Coordinadores de enlace transcultural"],
  },
  {
    code: "MIN-05",
    name: "Ministerio de Discipulado Integral",
    category: "PASTORAL_Y_DISCIPULADO",
    purpose: "Acompañar a cada nuevo creyente en su crecimiento espiritual hasta alcanzar la madurez en Cristo.",
    coreResponsibilities: ["Coordinación de la Escuela de Discípulos", "Asignación de mentores espirituales", "Seguimiento al proceso bautismal", "Evaluación de progreso"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Mentores de discipulado", "Facilitadores de grupos", "Tutores bíblicos"],
  },
  {
    code: "MIN-06",
    name: "Red de Familias de Grupo",
    category: "PASTORAL_Y_DISCIPULADO",
    purpose: "Estructura capilar de la iglesia en los hogares para el pastoreo cercano, la comunión fraternal, la oración y la multiplicación.",
    coreResponsibilities: ["Reuniones semanales en hogares", "Cuidado mutuo y fraternidad", "Evangelismo relacional", "Multiplicación planificada"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Líderes de Familia de Grupo", "Anfitriones de hogares", "Asistentes de grupo"],
  },
  {
    code: "MIN-07",
    name: "Ministerio de Adoración y Música",
    category: "LITURGIA_Y_ORACION",
    purpose: "Dirigir a la congregación en alabanza y adoración bíblica, exaltando a Dios con excelencia espiritual y musical.",
    coreResponsibilities: ["Dirección del servicio de alabanza en cultos", "Ensayos y preparación técnica", "Composición y selección doctrinal de cánticos", "Formación de músicos y cantores"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Directores de alabanza", "Músicos instrumentistas", "Vocalistas", "Técnicos de audio"],
  },
  {
    code: "MIN-08",
    name: "Ministerio de Oración e Intercesión",
    category: "LITURGIA_Y_ORACION",
    purpose: "Sostener en oración continua todas las actividades, líderes, familias y necesidades de la iglesia y la comunidad.",
    coreResponsibilities: ["Vigilias y jornadas de ayuno", "Red de intercesión 24/7", "Atención del altar de oración en cultos", "Seguimiento a motivos de oración"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Intercesores", "Líderes de cadenas de oración", "Servidores de altar"],
  },
  {
    code: "MIN-09",
    name: "Ministerio de Jóvenes (Generación Renacer)",
    category: "EDIFICACION_GENERACIONAL",
    purpose: "Formar a las nuevas generaciones en una fe sólida, discipulado relevante, liderazgo transformador y santidad.",
    coreResponsibilities: ["Reuniones juveniles semanales", "Campamentos y retiros", "Mentoría vocacional y espiritual", "Evangelismo juvenil universitario/secundario"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Líderes de jóvenes", "Mentores universitarios", "Coordinadores de eventos"],
    legalReviewRequired: true,
  },
  {
    code: "MIN-10",
    name: "Ministerio Infantil (Renacer Kids)",
    category: "EDIFICACION_GENERACIONAL",
    purpose: "Instruir a la niñez en la Palabra de Dios en un entorno seguro, afectuoso, interactivo y espiritualmente enriquecedor.",
    coreResponsibilities: ["Escuela dominical y enseñanza por edades", "Seguridad infantil y control de entrega", "Material pedagógico bíblico", "Capacitación a maestras y maestros"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Maestras y maestros infantiles", "Asistentes de aula", "Personal de recepción y seguridad"],
    legalReviewRequired: true,
  },
  {
    code: "MIN-11",
    name: "Ministerio de Mujeres (Mujeres de Fe y Propósito)",
    category: "EDIFICACION_GENERACIONAL",
    purpose: "Edificar y equipar a las mujeres de la congregación para su desarrollo espiritual, familiar, ministerial y social.",
    coreResponsibilities: ["Reuniones de edificación y oración femenina", "Mentoría entre mujeres (Tito 2)", "Retiros y conferencias", "Acción solidaria femenina"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Líderes de mujeres", "Consejeras", "Coordinadoras de eventos"],
  },
  {
    code: "MIN-12",
    name: "Ministerio de Hombres (Varones de Integridad)",
    category: "EDIFICACION_GENERACIONAL",
    purpose: "Fortalecer a los varones en su liderazgo espiritual, fidelidad matrimonial, responsabilidad paterna y servicio eclesial.",
    coreResponsibilities: ["Desayunos y encuentros de varones", "Discipulado de paternidad e integridad", "Retiros de varones", "Proyectos de servicio práctico comunitario"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Líderes de varones", "Facilitadores de mesas redondas", "Mentores"],
  },
  {
    code: "MIN-13",
    name: "Ministerio de Matrimonios y Familias",
    category: "EDIFICACION_GENERACIONAL",
    purpose: "Proteger y consolidar los matrimonios y las familias sobre el fundamento bíblico del pacto matrimonial indisoluble.",
    coreResponsibilities: ["Talleres y cenas matrimoniales", "Consejería prematrimonial y matrimonial", "Escuela para padres", "Acompañamiento en crisis familiares"],
    status: "ESTRUCTURA_PROPUESTA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Parejas pastorales y de liderazgo maduro", "Facilitadores de talleres familiares"],
  },
  {
    code: "MIN-14",
    name: "Ministerio de Medios y Comunicación",
    category: "ADMINISTRACION_Y_SOPORTE",
    purpose: "Transmitir el mensaje del evangelio y las actividades institucionales con claridad, creatividad y profesionalismo audiovisual.",
    coreResponsibilities: ["Transmisión en vivo de cultos (Streaming)", "Diseño gráfico institucional y redes sociales", "Producción de video y fotografía", "Gestión de boletines e imagen"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_GOBIERNO",
    volunteerProfiles: ["Operadores de cámara", "Diseñadores gráficos", "Community managers", "Editores de video"],
  },
  {
    code: "MIN-15",
    name: "Ministerio de Tecnología y Sistemas",
    category: "ADMINISTRACION_Y_SOPORTE",
    purpose: "Desarrollar y mantener la infraestructura tecnológica, sistemas de información y plataformas digitales de la iglesia.",
    coreResponsibilities: ["Administración del portal web y base de datos", "Soporte técnico a redes y equipos", "Seguridad informática y respaldo", "Automatización de procesos institucionales"],
    status: "ESTRUCTURA_PROPUESTA",
    supervisingBody: "CONSEJO_GOBIERNO",
    volunteerProfiles: ["Ingenieros de sistemas", "Desarrolladores de software", "Técnicos de redes"],
  },
  {
    code: "MIN-16",
    name: "Ministerio de Administración, Logística y Mayordomía",
    category: "ADMINISTRACION_Y_SOPORTE",
    purpose: "Garantizar el orden operativo, la mayordomía financiera transparente y la logística física impecable en cada actividad.",
    coreResponsibilities: ["Protocolo y ujieres en reuniones públicas", "Contabilidad operativa y registro de diezmos", "Mantenimiento físico y aseo de instalaciones", "Inventario y compras"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_GOBIERNO",
    volunteerProfiles: ["Ujieres y servidores de protocolo", "Contadores auxiliares", "Equipos de logística y mantenimiento"],
    legalReviewRequired: true,
  },
  {
    code: "MIN-17",
    name: "Ministerio de Ayuda Social y Misericordia",
    category: "MISION_Y_EXTENSION",
    purpose: "Manifestar el amor de Cristo mediante asistencia material a personas en extrema vulnerabilidad, ancianos y familias necesitadas.",
    coreResponsibilities: ["Banco de alimentos y ropero comunitario", "Visitas a hospitales y hogares de acogida", "Ayuda de emergencia justificada", "Alianzas de bienestar comunitario"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Trabajadores sociales", "Voluntarios de asistencia", "Coordinadores de donaciones"],
    legalReviewRequired: true,
  },
  {
    code: "MIN-18",
    name: "Ministerio de Formación y Liderazgo (Escuela de Líderes)",
    category: "PASTORAL_Y_DISCIPULADO",
    purpose: "Formar sistemáticamente a servidores y futuros líderes mediante la Escuela de Líderes y el Seminario Bíblico RENACER.",
    coreResponsibilities: ["Dirección académica de la Escuela de Líderes", "Módulos de ética ministerial y resolución de conflictos", "Supervisión de prácticas ministeriales", "Evaluación de aptitud para el liderazgo"],
    status: "AREA_MINISTERIAL_ESTABLECIDA",
    supervisingBody: "CONSEJO_MINISTERIAL",
    volunteerProfiles: ["Docentes de liderazgo", "Tutores de práctica", "Coordinadores académicos"],
  },
];

export const LEADERSHIP_ROLE_MATRIX: LeadershipMatrixRow[] = [
  {
    rol: "Pastor Fundador",
    funcionPrincipal: "Custodio doctrinal supremo, visión estratégica global, dirección espiritual superior y gobierno pastoral final.",
    supervisa: "Pastores, Consejo Ministerial, Directores de Área y red ministerial integral.",
    reportaA: "Jesucristo / Constitución de RENACER / Asamblea Institucional conforme a los estatutos.",
    requisitosEsenciales: "Fundador de la obra, llamado ministerial inequívoco, ordenación plena, irreprochabilidad y unción comprobada.",
    nivelAutoridad: "Autoridad espiritual y doctrinal máxima; copresidencia institucional y derecho a veto en materias extraordinarias.",
  },
  {
    rol: "Pastor Asociado / Asignado",
    funcionPrincipal: "Pastoreo directo de congregaciones o áreas ministeriales mayores, predicación, enseñanza y cuidado de almas.",
    supervisa: "Líderes de Área, Supervisores, Ministros Licenciados y Ministerios asignados.",
    reportaA: "Pastor Fundador y Consejo Ministerial.",
    requisitosEsenciales: "Ministro Ordenado formalmente, madurez doctrinal, al menos 3 años de servicio ministerial intachable.",
    nivelAutoridad: "Autoridad pastoral delegada en su congregación o área asignada; no asume facultades corporativas fiduciarias reservadas.",
  },
  {
    rol: "Ministro Ordenado",
    funcionPrincipal: "Ejercicio pleno del ministerio sagrado: predicación, enseñanza, impartición de ordenanzas y supervisión ministerial.",
    supervisa: "Líderes de Área, Ministros Licenciados en formación y departamentos ministeriales.",
    reportaA: "Pastor a cargo y Consejo Ministerial.",
    requisitosEsenciales: "Credencial formal de Ordenación (REN-DOC-010), testimonio ejemplar, estudios teológicos concluidos.",
    nivelAutoridad: "Autoridad eclesiástica plena para administrar sacramentos, bendición sacerdotal y dirección ministerial.",
  },
  {
    rol: "Ministro Licenciado",
    funcionPrincipal: "Desarrollo y ejercicio ministerial bajo supervisión directa; predicación, liderazgo departamental y formación.",
    supervisa: "Líderes de Ministerio, Supervisores y Servidores.",
    reportaA: "Ministro Ordenado / Pastor Supervisor.",
    requisitosEsenciales: "Credencial de Licencia Ministerial (REN-DOC-010), Escuela de Líderes aprobada, estudios bíblicos activos.",
    nivelAutoridad: "Autoridad ministerial delegada y formativa; facultado para predicar y liderar áreas bajo supervisión pastoral.",
  },
  {
    rol: "Líder de Área",
    funcionPrincipal: "Coordinación y pastoreo de un conjunto de sectores o zonas geográficas de Familias de Grupo y ministerios.",
    supervisa: "Supervisores de Familias de Grupo y equipos de zona.",
    reportaA: "Pastor Coordinador de Red / Consejo Ministerial.",
    requisitosEsenciales: "Miembro activo por más de 2 años, Escuela de Líderes completa, experiencia exitosa como supervisor y líder de grupo.",
    nivelAutoridad: "Coordinación operativa y acompañamiento pastoral regional; no define doctrina ni impone normas corporativas.",
  },
  {
    rol: "Supervisor",
    funcionPrincipal: "Acompañamiento cercano, mentoreo pastoral, evaluación y apoyo a 3 a 5 Líderes de Familias de Grupo.",
    supervisa: "Líderes de Familias de Grupo y asistentes en su sector.",
    reportaA: "Líder de Área.",
    requisitosEsenciales: "Miembro activo, Escuela de Líderes concluida, haber liderado y multiplicado exitosamente una Familia de Grupo.",
    nivelAutoridad: "Acompañamiento formativo y reporte de salud de grupos; no posee autoridad disciplinaria punitiva ni doctrinal.",
  },
  {
    rol: "Líder de Familia de Grupo",
    funcionPrincipal: "Facilitación del discipulado, cuidado pastoral primario, oración, evangelismo relacional y pastoreo del grupo en el hogar.",
    supervisa: "Asistente de grupo, anfitriones y discípulos del grupo.",
    reportaA: "Supervisor de sector.",
    requisitosEsenciales: "Miembro activo, Nivel II de Escuela de Líderes, bautizado en agua, testimonio moral intachable.",
    nivelAutoridad: "Facilitación espiritual y cuidado de su grupo; terminantemente prohibido controlar la vida privada o finanzas de los miembros.",
  },
  {
    rol: "Líder de Ministerio / Coordinador",
    funcionPrincipal: "Organización, dirección operativa, convocatoria y ejecución del plan anual de un departamento ministerial específico.",
    supervisa: "Servidores voluntarios de su respectivo ministerio.",
    reportaA: "Pastor o Ministro encargado del área.",
    requisitosEsenciales: "Miembro activo, Escuela de Líderes (Niveles I y II), competencias técnicas y espirituales demostradas en el área.",
    nivelAutoridad: "Gestión operativa y logística del departamento; sujeción a las directrices doctrinales y presupuestarias institucionales.",
  },
  {
    rol: "Docente / Formador Bíblico",
    funcionPrincipal: "Impartición de clases en la Escuela de Discípulos, Escuela de Líderes y seminario, con rigor bíblico y pedagógico.",
    supervisa: "Estudiantes y alumnos asignados a su aula.",
    reportaA: "Director del Ministerio de Formación y Consejo Ministerial.",
    requisitosEsenciales: "Sólida formación teológica, fidelidad doctrinal inquebrantable a REN-DOC-001, capacidad pedagógica comprobada.",
    nivelAutoridad: "Autoridad académica en el aula; sujeto a los planes de estudio y doctrina oficial de la iglesia.",
  },
  {
    rol: "Servidor / Voluntario Laico",
    funcionPrincipal: "Servicio práctico, acogida, logística, soporte técnico, música o intercesión en los diversos ministerios de la iglesia.",
    supervisa: "No tiene personas a su cargo directo.",
    reportaA: "Líder de Ministerio correspondiente.",
    requisitosEsenciales: "Miembro activo (o creyente en formación autorizado para áreas no sensibles), espíritu de servicio y puntualidad.",
    nivelAutoridad: "Ejecución de tareas de servicio ministerial sin autoridad de mando institucional.",
  },
];

export const FUTURE_FORMS_CATALOG: FutureFormDefinition[] = [
  {
    code: "REN-FORM-MIN-001",
    name: "Solicitud de Incorporación al Servicio Ministerial",
    purpose: "Registro formal de aspirantes a servir en ministerios, verificación de membresía y aptitudes.",
    responsible: "Líder de Ministerio / Secretaría Pastoral",
    retentionPeriod: "Permanente en expediente del miembro",
  },
  {
    code: "REN-FORM-MIN-002",
    name: "Ficha Oficial de Registro de Líder",
    purpose: "Padrón institucional de líderes activos, formación completada, antecedentes y asignación vigente.",
    responsible: "Secretaría General / Consejo Ministerial",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-003",
    name: "Acta de Nombramiento y Compromiso Ministerial",
    purpose: "Documentación solemne de la designación del líder y aceptación formal de límites éticos y doctrinales.",
    responsible: "Pastor Fundador / Consejo Ministerial",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-MIN-004",
    name: "Informe Periódico de Supervisión de Familias de Grupo",
    purpose: "Reporte mensual del supervisor sobre asistencia, discipulado, cuidado pastoral y salud del grupo.",
    responsible: "Supervisores de sector",
    retentionPeriod: "3 años",
  },
  {
    code: "REN-FORM-MIN-005",
    name: "Evaluación Integral de Familia de Grupo",
    purpose: "Diagnóstico trimestral para planificar multiplicación, relevos y fortalecimiento comunitario.",
    responsible: "Líder de Área / Consejo Ministerial",
    retentionPeriod: "2 años",
  },
  {
    code: "REN-FORM-MIN-006",
    name: "Evaluación Periódica de Carácter y Desempeño del Líder",
    purpose: "Instrumento multidimensional de retroalimentación en carácter, doctrina, cuidado y formación de líderes.",
    responsible: "Consejo Ministerial / Pastores",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-MIN-007",
    name: "Solicitud de Cambio de Función, Pausa Temporal o Relevo",
    purpose: "Tramitación ordenada y pastoral de transiciones ministeriales por motivos de salud, familia o rotación.",
    responsible: "Pastor a cargo / Secretaría Pastoral",
    retentionPeriod: "Permanente en expediente",
  },
  {
    code: "REN-FORM-MIN-008",
    name: "Plan Individual de Mentoría y Desarrollo de Liderazgo",
    purpose: "Guía de acompañamiento 1 a 1 para formar discípulos reproductores y futuros líderes de área.",
    responsible: "Líder Mentor / Supervisor",
    retentionPeriod: "Durante el ciclo formativo (1 año)",
  },
];

export const MASTER_MINISTRY_MANUAL_TITLES: MinistryLeadershipManualTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "PROPÓSITO, ALCANCE Y PRINCIPIOS FUNDAMENTALES DEL MINISTERIO",
    description: "Establece el marco teológico, los propósitos operativos y la concepción bíblica del liderazgo como servicio en RENACER CHURCH.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Propósito y Alcance del Manual",
        content:
          "El presente Manual de Ministerios y Liderazgo (REN-DOC-006) tiene como finalidad regular de manera orgánica, práctica y transparente la arquitectura ministerial de RENACER CHURCH. Define con precisión qué ministerios existen, cuáles son sus funciones específicas, los requisitos de idoneidad para servir, los métodos de selección, capacitación, supervisión, evaluación y relevo de líderes, así como los mecanismos de articulación con los órganos superiores de gobierno institucional. Todo creyente que sirve en la iglesia queda sujeto a las disposiciones de este manual.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "Toda duda de interpretación en el funcionamiento ministerial se resolverá consultando la jerarquía institucional: primero la Declaración de Fe (REN-DOC-001), luego la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003) y el Manual de Gobierno (REN-DOC-004).",
      },
      {
        sectionNumber: "1.2",
        title: "El Liderazgo Cristiano como Servicio y no como Dominio",
        content:
          "En RENACER CHURCH, el liderazgo se define exclusivamente bajo el modelo de Jesucristo: el que quiera ser el mayor debe ser el servidor de todos (Marcos 10:42-45). El liderazgo eclesiástico no confiere privilegios de dominación, estatus social ni jerarquía señorial sobre los hermanos. Sus pilares irrenunciables son: carácter piadoso, fidelidad a Dios, humildad profunda, solidez doctrinal, responsabilidad diligente, cuidado amoroso de las personas y compromiso incansable en la formación de nuevos líderes.\n\nEl éxito de un líder ministerial en RENACER jamás se medirá de forma unidimensional por la cantidad de asistentes, el volumen financiero o el tamaño externo del ministerio. Se evaluará prioritariamente por: madurez de carácter, fidelidad doctrinal, capacidad para formar discípulos reproductores, preservación de la unidad congregacional, cuidado pastoral abnegado y testimonio de integridad familiar y social.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-015"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
        practicalProtocol:
          "Ningún líder será promovido por mero carisma, elocuencia o capacidad económica si evidencia deficiencias en carácter, humildad o cuidado de las personas.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "LÍMITES ESTRICTOS DE AUTORIDAD Y SALVAGUARDAS PASTORALES",
    description: "Consagra prohibiciones explícitas contra el abuso de poder, manipulación espiritual y control indebido de la vida privada.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Prohibición Expresa de Injerencia en la Vida Privada",
        content:
          "La autoridad de cualquier pastor, ministro, supervisor o líder en RENACER es estrictamente ministerial y de edificación espiritual voluntaria en el ámbito de la vida de fe de la iglesia. Queda terminantemente prohibido que un líder utilice su investidura para controlar, coaccionar o intervenir en:\n1. El dinero o patrimonio personal de los creyentes (más allá de la enseñanza bíblica general sobre mayordomía voluntaria).\n2. La elección de cónyuge, noviazgos legítimos o asuntos íntimos del matrimonio.\n3. Decisiones médicas, tratamientos de salud o intervenciones clínicas privadas.\n4. Elección de empleo, profesión secular o actividades laborales lícitas.\n5. Decisiones de residencia, compra de vivienda o mudanzas familiares.\n6. El ejercicio de derechos ciudadanos, electorales o de opinión civil libre.\n7. Relaciones familiares y amistades legítimas fuera del ámbito eclesial.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-005"],
        practicalProtocol:
          "Cualquier miembro que se sienta coaccionado en sus decisiones personales podrá presentar su queja directamente ante el Consejo Ministerial, sin temor a represalias.",
      },
      {
        sectionNumber: "2.2",
        title: "Prohibición Absoluta de Manipulación y Abuso Espiritual",
        content:
          "Quedan expresamente proscritas en todos los niveles ministeriales las siguientes conductas abusivas:\n1. Manipulación psicológica y espiritual para forzar sumisión o servicio.\n2. Amenazas de maldición divina, exclusión o castigo celestial por no acatar órdenes personales del líder.\n3. Coerción e intimidación pastoral.\n4. Aislamiento deliberado del creyente respecto de su familia o entorno social.\n5. Explotación laboral de voluntarios o exigencia de servidumbre personal para el líder.\n6. Uso distorsionado y abusivo de dones espirituales o profecías mediante fórmulas como 'Dios me dijo que tienes que entregar tu dinero / casarte con tal persona / renunciar a tu trabajo'. Toda invocación de profecía para imponer decisiones privadas personales es una grave violación ética y causal de destitución inmediata.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-005"],
        practicalProtocol:
          "El líder que incurra en manipulación profética o coerción será suspendido de inmediato de su cargo y sometido al proceso disciplinario regulado en REN-DOC-005.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "ARQUITECTURA GENERAL DE MINISTERIOS",
    description: "Estructura integral y dinámica de los departamentos y áreas de servicio en la iglesia.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "Flexibilidad y Organización Ministerial",
        content:
          "RENACER CHURCH organiza su acción ministerial a través de departamentos y áreas especializadas que canalizan los dones espirituales y talentos de los creyentes. Para garantizar orden y adaptabilidad, se establece una distinción clara entre:\n1. ÁREAS MINISTERIALES ESTABLECIDAS: Aquellas que operan formalmente con liderazgo designado y supervisión directa activa.\n2. ESTRUCTURAS PROPUESTAS: Áreas estratégicas contempladas en el plan maestro de desarrollo institucional que se activarán de manera progresiva conforme a la madurez de la congregación, la disponibilidad de líderes idóneos y la autorización del Pastor Fundador y el Consejo de Gobierno.\n\nNo existe obligación de que todas las áreas propuestas operen simultáneamente desde el primer día; su creación o activación responderá a necesidades reales de la congregación.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-004"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
        practicalProtocol:
          "La activación de un área en estado 'ESTRUCTURA PROPUESTA' requerirá resolución conjunta del Consejo Ministerial y Consejo de Gobierno.",
      },
      {
        sectionNumber: "3.2",
        title: "Catálogo de las 18 Áreas de Servicio y Formación",
        content:
          "El ecosistema ministerial de RENACER comprende las siguientes 18 áreas funcionales:\n1. Ministerio Pastoral y Cuidado Espiritual\n2. Ministerio de Enseñanza y Educación Bíblica\n3. Ministerio de Evangelismo y Alcance\n4. Ministerio de Misiones y Extensión Global\n5. Ministerio de Discipulado Integral\n6. Red de Familias de Grupo\n7. Ministerio de Adoración y Música\n8. Ministerio de Oración e Intercesión\n9. Ministerio de Jóvenes (Generación Renacer)\n10. Ministerio Infantil (Renacer Kids)\n11. Ministerio de Mujeres (Mujeres de Fe y Propósito)\n12. Ministerio de Hombres (Varones de Integridad)\n13. Ministerio de Matrimonios y Familias\n14. Ministerio de Medios y Comunicación\n15. Ministerio de Tecnología y Sistemas\n16. Ministerio de Administración, Logística y Mayordomía\n17. Ministerio de Ayuda Social y Misericordia\n18. Ministerio de Formación y Liderazgo (Escuela de Líderes)",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "EL MINISTERIO PASTORAL Y DIFERENCIACIÓN DE ROLES",
    description: "Define las funciones del ministerio pastoral y establece una estricta distinción entre los diferentes niveles de liderazgo eclesiástico.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "Funciones Esenciales del Ministerio Pastoral",
        content:
          "El ministerio pastoral es el llamamiento sagrado instituido por Dios para alimentar, gobernar y preservar la iglesia local. Sus funciones primordiales e indelegables son:\n1. Predicación expositiva y fiel de las Sagradas Escrituras.\n2. Enseñanza doctrinal sólida y preservación de la sana doctrina frente a extravíos teológicos.\n3. Cuidado pastoral compasivo, visitación de enfermos y consolación de los afligidos.\n4. Oración e intercesión permanente por la congregación.\n5. Dirección espiritual y orientación pastoral a líderes y familias.\n6. Supervisión general de la vida ministerial y la liturgia cúltica.\n7. Discipulado personal y formación continua de nuevos pastores y líderes.\n8. Administración de las ordenanzas bíblicas (Bautismo y Santa Cena).\n9. Protección activa de la grey frente a abusos, divisiones y doctrinas falsas.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-015"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
      {
        sectionNumber: "4.2",
        title: "Diferenciación Estricta de Roles: Pastor Fundador, Pastor, Ministro y Líder",
        content:
          "Para evitar confusiones organizativas y abusos de autoridad, se consagran las siguientes distinciones:\n\n1. PASTOR FUNDADOR: Custodio doctrinal histórico, portador de la visión fundacional y autoridad espiritual superior conforme a la Constitución. Preside el Consejo Ministerial y copreside los órganos correspondientes. No asume por sí solo funciones exclusivas de administración fiduciaria reservadas por ley al Consejo de Gobierno.\n\n2. PASTOR ASOCIADO / ASIGNADO: Ministro ordenado formalmente que ejerce el pastoreo de una congregación local, sede o área ministerial mayor bajo la cobertura y dirección del Pastor Fundador y el Consejo Ministerial.\n\n3. MINISTRO: Creyente acreditado (Licenciado u Ordenado) que posee vocación ministerial formal reconocida por la iglesia para predicar, enseñar y liderar áreas de servicio, sin ejercer necesariamente la titularidad pastoral de una congregación.\n\n4. LÍDER LAICO: Miembro activo de la iglesia que ejerce funciones operativas de coordinación, acompañamiento en Familias de Grupo o servicio en departamentos, sin poseer credenciales ministeriales formales.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-004", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "Las decisiones institucionales respetarán estrictamente el ámbito de competencia de cada rol, impidiendo la concentración indebida de facultades o la extralimitación de funciones laicas en materias sacerdotales.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "RUTA MINISTERIAL INSTITUCIONAL Y CREDENCIALES",
    description: "Norma el itinerario formal de acreditación ministerial y su armonización con el reglamento de credenciales.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Itinerario de Acreditación Ministerial",
        content:
          "El reconocimiento formal del ministerio vocacional en RENACER sigue una trayectoria rigurosa, formativa y evaluada por el Consejo Ministerial, regulada detalladamente en el Reglamento de Credenciales Ministeriales (REN-DOC-010). La ruta comprende las siguientes etapas progresivas:\n\n1. CANDIDATO MINISTERIAL: Miembro que ha manifestado llamamiento vocacional, aprobado la Escuela de Líderes y cuenta con recomendación pastoral escrita para iniciar su proceso de examen ministerial.\n2. MINISTRO LICENCIADO: Ministro que ha aprobado el examen doctrinal y de carácter del Consejo Ministerial, facultado para predicar, enseñar y dirigir departamentos ministeriales bajo supervisión.\n3. MINISTRO ORDENADO: Ministro con plena consagración eclesiástica, estudios teológicos concluidos y trayectoria intachable, facultado para administrar sacramentos, presidir ceremonias y asumir responsabilidades pastorales plenas.\n4. ASIGNACIÓN PASTORAL: Designación oficial que faculta al Ministro Ordenado para asumir la titularidad pastoral de una congregación o área.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-010"],
        practicalProtocol:
          "La obtención de un certificado formativo o diploma de seminario no confiere automáticamente una credencial ministerial; esta requiere aprobación expresa del Consejo Ministerial y ceremonia solemne de imposición de manos.",
      },
      {
        sectionNumber: "5.2",
        title: "Naturaleza Funcional del Término 'Pastor'",
        content:
          "En la eclesiología de RENACER, el término 'Pastor' representa prioritariamente una función y asignación pastoral de cuidado congregacional, sustentada sobre la base de una credencial de Ministro Ordenado. Por consiguiente, 'Pastor' no constituye una credencial aislada al margen del orden ministerial institucional ni un título honorífico desvinculado del servicio efectivo a la congregación.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "LIDERAZGO LAICO Y RUTA DE SERVICIO CONGREGACIONAL",
    description: "Regula el camino de servicio para miembros que no aspiran al ministerio ordenado pero sirven activamente en la iglesia.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "Itinerario Operativo del Servidor Laico",
        content:
          "Todo miembro activo puede integrarse al servicio y desarrollarse en el liderazgo laico conforme a la siguiente ruta formativa y operativa:\n\n1. MIEMBRO ACTIVO: Creyente bautizado e inscrito formalmente en el padrón congregacional (REN-DOC-005).\n2. SERVIDOR: Miembro que cursa el Nivel I de la Escuela de Líderes y apoya activamente en tareas prácticas de un ministerio (ujieres, protocolo, sonido, bienvenida, etc.).\n3. LÍDER EN FORMACIÓN / ASISTENTE: Creyente que cursa el Nivel II de la Escuela de Líderes, sirviendo como asistente de una Familia de Grupo o coordinador asistente de un departamento.\n4. LÍDER: Graduado de la Escuela de Líderes formalmente comisionado para dirigir una Familia de Grupo o un ministerio especializado.\n5. SUPERVISOR: Líder experimentado que acompaña y asesora a 3 a 5 líderes de grupo.\n6. LÍDER DE ÁREA: Líder consagrado que coordina un sector geográfico o una red departamental bajo supervisión pastoral directa.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-020"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "El avance en la ruta laica no exige estudios teológicos de nivel de licenciatura, sino la aprobación de los módulos institucionales de la Escuela de Líderes y fidelidad comprobada.",
      },
      {
        sectionNumber: "6.2",
        title: "Distinción entre Liderazgo Laico y Credencial Ministerial",
        content:
          "El ejercicio de funciones de liderazgo laico (tales como Líder de Grupo, Supervisor o Líder de Área) no equivale a la posesión de una credencial ministerial oficial ni habilita para realizar actos eclesiásticos reservados exclusivamente a ministros ordenados (como impartición de ordenanzas o administración fiduciaria). El liderazgo laico es un servicio de facilitación, cuidado y coordinación operativa.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "ESTRUCTURA DE DISCIPULADO Y MULTIPLICACIÓN",
    description: "Establece la cadena formativa y relacional de pastoreo de toda la congregación.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "Cadena de Formación, Cuidado y Supervisión",
        content:
          "Para garantizar que ningún creyente quede desatendido y que la iglesia crezca de manera sólida y multiplicadora, se implementa la siguiente cadena orgánica de discipulado:\n\nPASTOR\n   ↓\nLÍDERES DE ÁREA\n   ↓\nSUPERVISORES\n   ↓\nFAMILIAS DE GRUPO\n   ↓\nDISCÍPULOS\n   ↓\nNUEVOS DISCÍPULOS\n\nEsta estructura tiene como fines exclusivos: la formación bíblica, el cuidado pastoral cercano, la intercesión mutua, la supervisión ministerial fraterna y la multiplicación evangelizadora.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-011", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "Cada eslabón de la cadena reporta periódicamente las necesidades espirituales y asistenciales de su grupo para una respuesta pastoral oportuna.",
      },
      {
        sectionNumber: "7.2",
        title: "Enfoque No Invasivo del Discipulado",
        content:
          "Se recalca enfáticamente que la estructura de discipulado tiene una naturaleza exclusivamente formativa y de apoyo espiritual. Bajo ninguna circunstancia operará como un sistema de control piramidal, monitoreo de la vida privada, vigilancia conductual o sujeción psicológica forzada. Toda relación de discipulado debe fundarse en el amor cristiano, el respeto a la dignidad personal y la libertad de conciencia que Cristo nos otorgó (Gálatas 5:1).",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "FAMILIAS DE GRUPO — PROPÓSITO Y DINÁMICA OPERATIVA",
    description: "Norma el funcionamiento, propósitos y dinámica de las reuniones hogareñas de la iglesia.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Terminología Oficial y Fines de las Familias de Grupo",
        content:
          "El término oficial y exclusivo en RENACER CHURCH es FAMILIAS DE GRUPO. Queda proscrito el uso del vocablo 'células' como designación oficial institucional.\n\nLos fines principales de las Familias de Grupo son:\n1. Fomentar la comunión íntima y el amor fraternal en un ambiente hogareño cálido.\n2. Estudiar y aplicar prácticamente las enseñanzas bíblicas impartidas en los cultos dominicales.\n3. Desarrollar la oración ferviente y la intercesión por las familias del sector.\n4. Facilitar el evangelismo relacional y la bienvenida a nuevos vecinos y familiares.\n5. Detectar necesidades materiales y espirituales para canalizar la ayuda fraterna.\n6. Formar a los futuros asistentes y líderes mediante la práctica guiada.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-011", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-005"],
        practicalProtocol:
          "Las reuniones se celebrarán semanal o quincenalmente en los hogares designados, con una duración recomendada no mayor a 90 minutos.",
      },
      {
        sectionNumber: "8.2",
        title: "Tamaño Orientativo y Proceso Saludable de Multiplicación",
        content:
          "El tamaño orientativo de una Familia de Grupo es de ocho (8) a quince (15) personas presentes (incluyendo anfitriones y visitas). Cuando un grupo alcanza de manera sostenida una asistencia aproximada de quince (15) a veinte (20) personas, el Líder de Grupo, de común acuerdo con el Supervisor y el Líder de Área, planificará su multiplicación en dos nuevos grupos.\n\nLa multiplicación es un proceso natural de reproducción y bendición, no una meta matemática rígida ni una exigencia cuantitativa bajo presión. Ningún grupo será forzado a dividirse de manera abrupta sin contar con un nuevo anfitrión disponible y un líder asistente plenamente capacitado y aprobado.",
        decisionIds: ["DEC-DEF-011", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "Antes de la multiplicación, el grupo celebrará una reunión de celebración y comisionamiento de los dos equipos de siembra.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "FUNCIONES Y LÍMITES DEL LÍDER DE FAMILIA DE GRUPO",
    description: "Detalla el perfil operativo, tareas pastorales locales y restricciones éticas del líder de grupo.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "Funciones Pastorales Locales del Líder de Grupo",
        content:
          "El Líder de Familia de Grupo es un facilitador del pastoreo en el hogar cuyas responsabilidades comprenden:\n1. Pastorear y orar continuamente por los miembros asignados a su grupo.\n2. Guiar el estudio bíblico semanal conforme a las guías doctrinales oficiales de la iglesia.\n3. Identificar dones espirituales y talentos en los asistentes para animarlos a formarse en la Escuela de Discípulos y Escuela de Líderes.\n4. Mentorear a un Líder Asistente que pueda asumir la dirección del nuevo grupo en la multiplicación.\n5. Notificar al Supervisor situaciones de emergencia médica, crisis familiar o necesidad material urgente.\n6. Asistir puntualmente a las reuniones mensuales de supervisión y formación de líderes.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-011", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
      {
        sectionNumber: "9.2",
        title: "Prohibiciones Específicas para Líderes de Grupo",
        content:
          "El Líder de Familia de Grupo tiene expresamente prohibido:\n1. Solicitar, recolectar o administrar ofrendas o dinero en el grupo para fines personales o sin autorización escrita de la Tesorería de la iglesia.\n2. Emitir juicios condenatorios o aplicar sanciones disciplinarias a los asistentes.\n3. Revelar confidencias íntimas compartidas en el grupo (salvo delitos o abusos que deben denunciarse a las autoridades civiles conforme a la ley).\n4. Aconsejar rupturas matrimoniales, decisiones laborales o intervenciones médicas.\n5. Imponer su propia literatura o doctrinas extrañas ajenas a la Declaración de Fe (REN-DOC-001).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-011", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-005"],
        practicalProtocol:
          "La recolección no autorizada de fondos en una Familia de Grupo es causal de destitución fulminante del líder.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "EL ROL DEL SUPERVISOR DE FAMILIAS DE GRUPO",
    description: "Define las atribuciones de acompañamiento, mentoría y límites del rol de supervisión.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Acompañamiento, Mentoría y Cuidado Pastoral del Líder",
        content:
          "El Supervisor es un mentor experimentado cuya misión primordial es cuidar del corazón y la salud espiritual de tres (3) a cinco (5) Líderes de Familias de Grupo. Sus tareas son:\n1. Visitar periódicamente las reuniones de los grupos bajo su cobertura para brindar aliento y retroalimentación constructiva.\n2. Mantener reuniones mensuales de mentoría personal y oración con cada líder.\n3. Evaluar el avance del discipulado y el estado de preparación de los líderes asistentes.\n4. Acompañar los procesos de multiplicación y apertura de nuevos hogares.\n5. Servir de canal de comunicación fluido entre los grupos y el Líder de Área.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
      {
        sectionNumber: "10.2",
        title: "Límites del Supervisor: No es Autoridad Doctrinal ni Punitiva",
        content:
          "El Supervisor no posee facultad para fijar doctrina, modificar currículos de estudio, decretar sanciones eclesiásticas ni imponer exigencias económicas. Su función es exclusivamente pastoral, de pastoreo de líderes, motivación y servicio fraterno.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "EL ROL DEL LÍDER DE ÁREA",
    description: "Regula la coordinación estratégica sectorial y el apoyo directo a la pastoral general.",
    sections: [
      {
        sectionNumber: "11.1",
        title: "Coordinación Estratégica y Desarrollo Sectorial",
        content:
          "El Líder de Área es responsable de un sector geográfico o una red ministerial integral. Sus funciones son:\n1. Supervisar, motivar y capacitar al equipo de Supervisores a su cargo.\n2. Consolidar los informes mensuales de las Familias de Grupo de su sector y elevar reportes al Pastor Coordinador de Red.\n3. Coordinar actividades sectoriales de evangelismo, ayuno y alcance comunitario.\n4. Identificar líderes con potencial para ingresar a programas ministeriales avanzados.\n5. Apoyar directamente a los Pastores en la visitación y atención de crisis familiares de alta complejidad en su área.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-006", "DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
      {
        sectionNumber: "11.2",
        title: "Cuidado del Equipo de Supervisores",
        content:
          "El Líder de Área velará diligentemente por el bienestar emocional, espiritual y familiar de sus Supervisores, evitando la sobrecarga ministerial y promoviendo tiempos de descanso sabático y renovación.",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "METODOLOGÍA INSTITUCIONAL DE DESARROLLO DE LÍDERES",
    description: "Establece el ciclo de 7 pasos pedagógicos y espirituales para formar líderes reproductores.",
    sections: [
      {
        sectionNumber: "12.1",
        title: "Los 7 Pasos del Desarrollo de Liderazgo",
        content:
          "La formación de líderes en RENACER responde a una metodología sistemática y cristocéntrica basada en 2 Timoteo 2:2, compuesta por 7 etapas continuas:\n\n1. IDENTIFICAR: Observar en los miembros frutos de carácter, fidelidad en el servicio sencillo, hambre espiritual y disposición para aprender.\n2. INVOLUCRAR: Invitar al candidato a participar en tareas prácticas de apoyo en el grupo o ministerio.\n3. FORMAR: Inscribir formalmente al creyente en los módulos correspondientes de la Escuela de Líderes.\n4. ACOMPAÑAR: Asignarle un mentor experimentado que lo modele en la práctica (hacerlo juntos).\n5. ASIGNAR: Encomendarle responsabilidades concretas y autónomas con respaldo público (hacerlo él bajo supervisión).\n6. EVALUAR: Brindar retroalimentación periódica basada en el amor, corrigiendo errores y fortaleciendo virtudes.\n7. MULTIPLICAR: Impulsar al nuevo líder para que a su vez identifique, forme y mentoree a nuevos discípulos.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
        practicalProtocol:
          "Ningún líder será considerado exitoso en RENACER hasta que haya formado y dejado en funciones a su propio relevo generacional.",
      },
      {
        sectionNumber: "12.2",
        title: "Objetivo Formativo: No Seguidores, sino Formadores",
        content:
          "El fin supremo de este sistema no es acumular partidarios ni generar dependencia psicológica hacia un líder carismático, sino formar creyentes maduros, autónomos en la fe, firmes en la doctrina de Cristo y capacitados para instruir a otros.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIII",
    titleName: "REQUISITOS GENERALES Y ÉTICOS PARA EL LIDERAZGO",
    description: "Consagra las normas bíblicas de idoneidad y prohíbe taxativamente la discriminación arbitraria.",
    sections: [
      {
        sectionNumber: "13.1",
        title: "Criterios Bíblicos de Idoneidad",
        content:
          "Para ser nombrado en cualquier posición de liderazgo o coordinación en RENACER se exige:\n1. Carácter cristiano comprobado, irreprochable, sobrio, prudente, decoroso y no dado a pendencias (1 Timoteo 3; Tito 1).\n2. Plena adhesión y fidelidad a la Declaración de Fe y Doctrina de RENACER (REN-DOC-001).\n3. Madurez espiritual y buen testimonio público tanto dentro de la congregación como en el ámbito laboral y vecinal.\n4. Testimonio familiar ordenado, honrando a su cónyuge e instruyendo a sus hijos en el temor del Señor.\n5. Participación regular, puntual y activa en la vida litúrgica y comunitaria de la iglesia.\n6. Aprobación satisfactoria de los niveles requeridos de la Escuela de Líderes.\n7. Espíritu de siervo humilde y capacidad de trabajo en equipo bajo autoridad pastoral legítima.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-007", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-005"],
      },
      {
        sectionNumber: "13.2",
        title: "Prohibición de Criterios Arbitrarios o Discriminatorios",
        content:
          "Queda estrictamente prohibido establecer requisitos basados en:\n1. Nivel de ingresos, riqueza personal o capacidad económica.\n2. Profesión académica o estatus secular.\n3. Afiliación o preferencias políticas lícitas.\n4. Raza, etnia, color de piel, nacionalidad o lugar de origen.\n5. Condiciones médicas privadas que no impidan el ejercicio funcional del servicio.\n6. Apariencia física o factores socioeconómicos ajenos al carácter espiritual.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIV",
    titleName: "PLENA PARTICIPACIÓN MINISTERIAL DE LAS MUJERES",
    description: "Consagra la igualdad espiritual y el pleno derecho de las mujeres al liderazgo y ordenación ministerial.",
    sections: [
      {
        sectionNumber: "14.1",
        title: "Doctrina Institucional de Igualdad y Ejercicio Ministerial Femenino",
        content:
          "Conforme a las Sagradas Escrituras y a la Declaración de Fe y Constitución de RENACER CHURCH, se reafirma que en Cristo no hay varón ni mujer respecto de la gracia de la salvación ni de la repartición soberana de dones del Espíritu Santo (Gálatas 3:28; 1 Corintios 12:7-11).\n\nEn consecuencia, las mujeres tienen pleno y total derecho a:\n1. Predicar y enseñar la Palabra de Dios en el púlpito principal y en todos los foros de la iglesia.\n2. Ejercer el liderazgo y coordinación de ministerios, Familias de Grupo, supervisiones y áreas.\n3. Servir en el cuerpo diaconal y pastoral.\n4. Recibir credenciales ministeriales oficiales (Candidata, Licenciada y Ordenada conforme a REN-DOC-010).\n5. Ser ordenadas al sagrado ministerio pastoral mediante imposición de manos.\n6. Integrar el Consejo Ministerial y participar en el gobierno eclesial en igualdad de condiciones.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-015", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-005", "REN-DOC-010"],
        practicalProtocol:
          "Cualquier intento de restringir a una líder o ministra calificada por su sola condición de mujer constituirá falta disciplinaria grave por contravenir la doctrina oficial de la iglesia.",
      },
      {
        sectionNumber: "14.2",
        title: "Naturaleza de los Ministerios Específicos de Hombres y Mujeres",
        content:
          "La existencia de áreas ministeriales especializadas (tales como 'Ministerio de Mujeres' o 'Ministerio de Hombres') responde exclusivamente a propósitos pedagógicos de fraternidad, discipulado específico y apoyo mutuo entre pares. En ningún caso estos ministerios representan una limitación o confinamiento segregatorio para la participación amplia de varones o mujeres en los demás departamentos de la iglesia.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-015"],
        dependencies: ["REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XV",
    titleName: "MINISTERIOS CON POBLACIONES VULNERABLES (INFANTIL Y JUVENIL)",
    description: "Establece salvaguardas de seguridad, protección y deber irrenunciable de cumplimiento legal civil.",
    sections: [
      {
        sectionNumber: "15.1",
        title: "Principios Generales de Seguridad y Protección de Menores",
        content:
          "La protección integral, seguridad física, emocional y espiritual de niños, niñas y adolescentes es una prioridad absoluta de RENACER CHURCH. Los ministerios Infantil (Renacer Kids) y Juvenil (Generación Renacer) operarán bajo estrictos protocolos preventivos que serán regulados detalladamente en el Manual de Ministerio Infantil y Juvenil (REN-DOC-016). Todo voluntario que sirva en estas áreas deberá someterse a verificación de antecedentes, entrevistas de seguridad y capacitación preventiva obligatoria.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-016"],
        practicalProtocol:
          "Queda prohibido que un adulto permanezca a solas con un menor en espacios cerrados o sin visibilidad pública (Regla de Dos Adultos Obligatoria).",
        legalReviewRequired: true,
      },
      {
        sectionNumber: "15.2",
        title: "Deber Irrenunciable de Denuncia y Cumplimiento Legal",
        content:
          "En cumplimiento estricto de las leyes del Estado de New Jersey (N.J.S.A. 9:6-8.10) y normas federales, cualquier sospecha, revelación o indicio de abuso infantil, maltrato o explotación de menores deberá ser reportado DE INMEDIATO a la línea estatal de protección a la niñez (1-877-NJ-ABUSE) y a las autoridades policiales competentes.\n\nNingún líder, pastor o miembro del Consejo tiene facultad para ocultar, 'investigar privadamente' o retrasar la denuncia legal bajo pretexto de secreto eclesiástico o perdón espiritual. La falta de denuncia oportuna constituye delito y acarreará la desvinculación inmediata y permanente del infractor.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-005", "REN-DOC-016"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVI",
    titleName: "MINISTERIO DE ADORACIÓN Y MÚSICA",
    description: "Regula el servicio litúrgico musical, la preparación de los ministros de alabanza y la armonización con el culto.",
    sections: [
      {
        sectionNumber: "16.1",
        title: "Propósito Espiritual y Criterios Doctrinales de la Alabanza",
        content:
          "El Ministerio de Adoración y Música tiene como misión conducir a la congregación al trono de Dios mediante cánticos bíblicamente sólidos, cristocéntricos y teológicamente puros. Los músicos y cantores no son artistas de entretenimiento ni ejecutantes seculares, sino servidores del altar de Dios cuyo corazón debe reflejar santidad, consagración, puntualidad y humildad.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-003", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-004"],
        practicalProtocol:
          "El repertorio litúrgico será evaluado periódicamente por el Director de Adoración y el Pastor Fundador para asegurar su total conformidad con la Declaración de Fe.",
      },
      {
        sectionNumber: "16.2",
        title: "Armonización con el Flujo Oficial de Culto",
        content:
          "El servicio de alabanza y adoración se adaptará estrictamente al orden oficial de los 14 bloques litúrgicos institucionales establecidos en RENACER CHURCH, sin alterar el tiempo asignado a la predicación expositiva ni usurpar momentos litúrgicos propios de la dirección pastoral.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-006", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVII",
    titleName: "ORACIÓN, INTERCESIÓN Y DONES ESPIRITUALES",
    description: "Norma el ejercicio ordenado, bíblico y discernido de los dones del Espíritu Santo.",
    sections: [
      {
        sectionNumber: "17.1",
        title: "Ejercicio Bíblico y Ordenado de los Dones Espirituales",
        content:
          "RENACER cree firmemente en la vigencia plena y operación soberana del Espíritu Santo con todos sus dones: sanidades, milagros, profecía, lenguas, interpretación, discernimiento de espíritus, palabra de sabiduría y fe (1 Corintios 12; REN-DOC-001, Artículo 8). Todos los dones espirituales deben manifestarse con orden, decencia, edificación mutua y profundo amor cristiano (1 Corintios 14:40).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-005", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
      {
        sectionNumber: "17.2",
        title: "La Profecía Sujeta a la Escritura y Libre de Coerción",
        content:
          "Toda manifestación profética está subordinada absolutamente a la autoridad infalible de las Sagradas Escrituras (la Biblia). Ninguna profecía contemporánea añade doctrina nueva ni posee autoridad canónica. La profecía debe ser examinada y juzgada por el liderazgo pastoral (1 Tesalonicenses 5:20-21; 1 Corintios 14:29).\n\nQueda terminantemente prohibido utilizar supuestas profecías, sueños o visiones para manipular voluntades ajenas, exigir dineros, concertar matrimonios forzados o justificar conductas contrarias a la ley moral bíblica.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-005", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVIII",
    titleName: "EVANGELISMO, MISIONES Y EXTENSIÓN",
    description: "Establece los principios rectores de la misión evangelizadora local y global.",
    sections: [
      {
        sectionNumber: "18.1",
        title: "La Gran Comisión como Prioridad Innegociable",
        content:
          "Toda la estructura ministerial de RENACER existe para cumplir la Gran Comisión de Jesucristo (Mateo 28:18-20). Los Ministerios de Evangelismo y Misiones coordinarán la capacitación de los creyentes en testificación personal, la organización de eventos masivos y comunitarios de alcance, y el sostenimiento espiritual y económico de proyectos misioneros transculturales, conforme a lo regulado en REN-DOC-015.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-003", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-015"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIX",
    titleName: "SISTEMA DE FORMACIÓN Y ESCUELA DE LÍDERES",
    description: "Estructura pedagógica formal para la capacitación progresiva de servidores y líderes.",
    sections: [
      {
        sectionNumber: "19.1",
        title: "Ecosistema Formativo Institucional",
        content:
          "RENACER CHURCH ofrece un trayecto pedagógico integral estructurado en tres niveles académicos complementarios:\n1. ESCUELA DE DISCÍPULOS: 9 meses de formación inicial en fundamentos de la fe, doctrina bíblica básica y vida cristiana para la membresía plena (REN-DOC-005).\n2. ESCUELA DE LÍDERES: 6 meses de capacitación intensiva en competencias ministeriales, carácter pastoral y manejo de grupos.\n3. SEMINARIO BÍBLICO RENACER: Programa teológico superior para la formación de ministros licenciados, ordenados y pastores.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-007", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005", "REN-DOC-010"],
      },
      {
        sectionNumber: "19.2",
        title: "Estructura Curricular de la Escuela de Líderes",
        content:
          "La Escuela de Líderes tiene una duración formal de seis (6) meses, con una frecuencia de dos (2) clases por semana, distribuida en tres niveles pedagógicos sucesivos:\n\n* NIVEL I (Servidor y Carácter): Identidad del siervo, disciplinas espirituales, carácter cristiano, mayordomía bíblica, doctrina de la santidad y fundamentos del discipulado bíblico.\n* NIVEL II (Familias de Grupo y Multiplicación): Dinámica práctica de la reunión de hogar, facilitación pedagógica, evangelismo relacional, resolución de problemas en el grupo, mentoría del asistente y planificación de la multiplicación.\n* NIVEL III (Liderazgo Ministerial, Ética y Conflictos): Liderazgo según Jesucristo, ética ministerial estricta, resolución bíblica de conflictos (Mateo 18), salvaguardas legales, prevención de abusos, administración del tiempo y cuidado familiar del líder.\n\nAl concluir satisfactoriamente, el estudiante recibe un CERTIFICADO DE FORMACIÓN EN LIDERAZGO. Se aclara formalmente que este certificado acredita aptitud formativa laica y NO constituye por sí mismo credencial u ordenación ministerial.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-004", "REN-DOC-010"],
        practicalProtocol:
          "El 80% de asistencia mínima y la aprobación de las prácticas en una Familia de Grupo son requisitos indispensables para graduarse.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO XX",
    titleName: "EVALUACIÓN, CAMBIO DE FUNCIÓN Y RESTAURACIÓN",
    description: "Norma los modelos de retroalimentación integral, transiciones de cargo y procesos de acompañamiento restaurador.",
    sections: [
      {
        sectionNumber: "20.1",
        title: "Modelo de Evaluación Multidimensional del Liderazgo",
        content:
          "El liderazgo en RENACER será evaluado anualmente mediante un instrumento integral que pondera:\n1. Carácter moral y testimonio intachable en el hogar y la sociedad.\n2. Fidelidad doctrinal y enseñanza conforme a la Palabra.\n3. Calidad del cuidado pastoral y dedicación a las personas.\n4. Formación activa de discípulos y líderes asistentes.\n5. Preservación de la paz y unidad del cuerpo de Cristo.\n6. Puntualidad, responsabilidad y cumplimiento de acuerdos ministeriales.\n7. Cumplimiento de normas éticas y salvaguardas legales.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
      {
        sectionNumber: "20.2",
        title: "Procesos de Cambio de Función, Pausa Ministerial y Restauración",
        content:
          "Las transiciones en el liderazgo se gestionarán con sabiduría pastoral:\n1. PROMOCIÓN O TRASLADO: Asignación a mayores responsabilidades o cambio de departamento por necesidades estratégicas.\n2. PAUSA SABÁTICA O TEMPORAL: Período de descanso solicitado por el líder o sugerido por el pastor ante situaciones de fatiga, crisis familiar o estudios, preservando la dignidad y afecto de la iglesia.\n3. RELEVO O REMOCIÓN: Separación del cargo por pérdida de idoneidad, negligencia o faltas éticas, coordinado con el Consejo Ministerial.\n4. RESTAURACIÓN PASTORAL: En caso de faltas morales no constitutivas de delitos civiles, se aplicará el proceso de restauración regulado en REN-DOC-005, recordando que el perdón espiritual no otorga restitución automática inmediata al liderazgo.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-015"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXI",
    titleName: "ARTICULACIÓN INSTITUCIONAL, GOBIERNO Y SALVAGUARDAS ÉTICAS",
    description: "Define la relación armónica con el gobierno de la iglesia, la confidencialidad responsable y la ética ministerial.",
    sections: [
      {
        sectionNumber: "21.1",
        title: "Articulación con Órganos de Gobierno y Separación de Competencias",
        content:
          "Para un funcionamiento eclesial sano y transparente, se establece la siguiente articulación competencial:\n\n1. CONSEJO MINISTERIAL: Órgano rector de los asuntos doctrinales, examen de credenciales ministeriales, ordenación, disciplina de ministros y dirección de los programas de formación teológica y pastoral.\n2. CONSEJO DE GOBIERNO: Órgano fiduciario y corporativo responsable de la administración financiera, legal, patrimonial, presupuestaria e infraestructura de RENACER CHURCH, INC.\n3. PASTOR FUNDADOR: Dirección doctrinal y espiritual suprema de la congregación conforme a la Constitución.\n4. ASAMBLEA CONGREGACIONAL: Conserva exclusivamente las facultades reservadas en la Constitución y Bylaws (adopción constitucional, aprobación de materias extraordinarias), sin intervenir en la gestión administrativa cotidiana de los ministerios ni en la ordenación pastoral directa.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-004", "DEC-DEF-013"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        practicalProtocol:
          "Cualquier conflicto de competencia entre el Consejo Ministerial y el Consejo de Gobierno se resolverá mediante sesión conjunta presidida por el Pastor Fundador.",
      },
      {
        sectionNumber: "21.2",
        title: "Confidencialidad Responsable y Ética Ministerial",
        content:
          "Todo líder y ministro tiene el deber sagrado de mantener la más estricta reserva sobre las confidencias pastorales compartidas por los creyentes en sesiones de consejería o grupos de oración. No obstante, la confidencialidad eclesiástica NO ES ABSOLUTA ni podrá ser utilizada para encubrir la comisión de delitos, abusos sexuales, maltrato infantil, violencia doméstica o riesgos inminentes de suicidio u homicidio. En tales circunstancias, prima el deber moral y legal de denuncia ante las autoridades competentes.",
        decisionIds: ["DEC-DEF-013"],
        dependencies: ["REN-DOC-005", "REN-DOC-016"],
        legalReviewRequired: true,
      },
    ],
  },
];

export const MINISTRY_LEADERSHIP_WORKFLOWS: OperationalWorkflow[] = [
  {
    id: "WF-MIN-A",
    title: "Incorporación de Servidor a un Ministerio",
    trigger: "Miembro activo expresa deseo voluntario de servir en un departamento o ministerio de la iglesia.",
    evaluation: "Líder de Ministerio y Secretaría verifican condición de miembro activo, testimonio y curso Nivel I de Escuela de Líderes.",
    responsible: "Líder de Ministerio correspondiente y Pastor del área.",
    decision: "Aprobación de ingreso al equipo de servicio o derivación a culminar formación previa.",
    documentation: "Formulario REN-FORM-MIN-001 (Solicitud de Incorporación al Servicio Ministerial).",
    followUp: "Período de prueba y acompañamiento guiado de 60 días.",
    steps: [
      "1. Entrega y llenado del formulario REN-FORM-MIN-001 por parte del aspirante.",
      "2. Verificación de registro oficial de membresía en padrón institucional.",
      "3. Entrevista pastoral con el Líder de Ministerio.",
      "4. Asignación de rol práctico y tutor de inducción.",
      "5. Registro en la lista de servidores activos del departamento.",
    ],
  },
  {
    id: "WF-MIN-B",
    title: "Desarrollo y Acompañamiento de Líder en Formación",
    trigger: "Servidor demuestra fruto espiritual y es invitado a prepararse como asistente de grupo o líder ministerial.",
    evaluation: "Supervisor y Docentes evalúan carácter, madurez, constancia y avance en Nivel II de Escuela de Líderes.",
    responsible: "Líder Mentor y Supervisor de sector.",
    decision: "Aprobación para asumir rol de Líder Asistente en una Familia de Grupo.",
    documentation: "Plan Individual de Desarrollo REN-FORM-MIN-008.",
    followUp: "Mentoría quincenal 1 a 1 y asignación de prácticas de enseñanza guiada.",
    steps: [
      "1. Postulación del candidato por su Líder de Grupo ante el Supervisor.",
      "2. Inscripción formal en los módulos prácticos del Nivel II de la Escuela de Líderes.",
      "3. Acompañamiento en la dirección de dinámicas y estudios bíblicos en el hogar.",
      "4. Evaluación bimestral de competencias y madurez de carácter.",
      "5. Informe de habilitación para futuro comisionamiento.",
    ],
  },
  {
    id: "WF-MIN-C",
    title: "Asignación y Nombramiento de Líder Oficial",
    trigger: "Graduación formal de la Escuela de Líderes y apertura de posición de liderazgo de grupo o departamento.",
    evaluation: "Consejo Ministerial y Pastores revisan expediente integral, testimonio familiar y aptitud doctrinal.",
    responsible: "Pastor Fundador y Consejo Ministerial.",
    decision: "Emisión de nombramiento oficial como Líder en funciones.",
    documentation: "Ficha REN-FORM-MIN-002 y Acta de Nombramiento REN-FORM-MIN-003.",
    followUp: "Presentación y oración de bendición ante la congregación en culto dominical.",
    steps: [
      "1. Revisión de requisitos y expediente de graduación.",
      "2. Entrevista final con el Consejo Ministerial.",
      "3. Firma del compromiso de salvaguardas éticas y confidencialidad responsable.",
      "4. Asignación territorial o departamental específica.",
      "5. Ceremonia de imposición de manos e inicio de funciones.",
    ],
  },
  {
    id: "WF-MIN-D",
    title: "Apertura y Formación de una Nueva Familia de Grupo",
    trigger: "Disponibilidad de hogar anfitrión aprobado y líder comisionado con equipo inicial de apoyo.",
    evaluation: "Líder de Área y Supervisor evalúan ubicación geográfica, condiciones del hogar y asignación pastoral.",
    responsible: "Líder de Área y Supervisor de sector.",
    decision: "Aprobación formal de apertura e inscripción en el mapa geográfico de la iglesia.",
    documentation: "Acta de Apertura de Familia de Grupo en REN-FORM-MIN-002.",
    followUp: "Acompañamiento presencial del Supervisor durante las primeras cuatro reuniones.",
    steps: [
      "1. Solicitud de apertura presentada por el Líder con anfitrión voluntario.",
      "2. Inspección pastoral y bendición del hogar anfitrión.",
      "3. Delimitación de zona y asignación de día y hora de reunión.",
      "4. Lanzamiento oficial con invitación comunitaria.",
      "5. Inicio de reportes mensuales de asistencia y pastoreo.",
    ],
  },
  {
    id: "WF-MIN-E",
    title: "Supervisión y Mentoría Periódica de Grupos",
    trigger: "Ciclo mensual regular de pastoreo de líderes y verificación del bienestar congregacional.",
    evaluation: "Supervisor analiza salud espiritual del grupo, comunión, necesidades asistenciales y formación de discípulos.",
    responsible: "Supervisor de sector y Líder de Área.",
    decision: "Recomendaciones pastorales, apoyo en crisis o inicio de plan de multiplicación.",
    documentation: "Informe Periódico de Supervisión REN-FORM-MIN-004.",
    followUp: "Reunión mensual de área y retroalimentación personalizada.",
    steps: [
      "1. Visita de campo del Supervisor a la reunión de la Familia de Grupo.",
      "2. Reunión mensual de mentoría personal entre Supervisor y Líder.",
      "3. Registro de datos de asistencia, altas de nuevos creyentes y necesidades.",
      "4. Envío del informe REN-FORM-MIN-004 a la coordinación central.",
      "5. Canalización de apoyos asistenciales o visitas pastorales requeridas.",
    ],
  },
  {
    id: "WF-MIN-F",
    title: "Multiplicación de Familia de Grupo (15–20 Asistentes)",
    trigger: "Grupo supera de manera constante los 15-20 asistentes y cuenta con nuevo líder y anfitrión listos.",
    evaluation: "Supervisor y Líder de Área evalúan madurez del grupo y preparación del líder asistente.",
    responsible: "Líder de Familia de Grupo, Supervisor y Pastor de Red.",
    decision: "Fijación de fecha para el acto de multiplicación y división fraterna de equipos.",
    documentation: "Formulario de Evaluación de Grupo REN-FORM-MIN-005.",
    followUp: "Acompañamiento intensivo a los dos nuevos grupos durante los primeros 60 días.",
    steps: [
      "1. Detección de sobrecupo y madurez en el informe trimestral.",
      "2. Planificación pastoral de la transición sin generar rupturas afectivas.",
      "3. Designación de anfitriones y líderes para ambos grupos.",
      "4. Celebración de culto especial de multiplicación en el hogar.",
      "5. Alta del nuevo grupo en la Secretaría de Familias de Grupo.",
    ],
  },
  {
    id: "WF-MIN-G",
    title: "Evaluación Anual Integral del Liderazgo",
    trigger: "Convocatoria anual ordinaria del Consejo Ministerial para balance y salud del cuerpo de líderes.",
    evaluation: "Revisión 360° en carácter, doctrina, cuidado pastoral, unidad y multiplicación de líderes.",
    responsible: "Pastores y Consejo Ministerial.",
    decision: "Ratificación en el cargo, felicitación, plan de mentoría de mejora o relevo acordado.",
    documentation: "Instrumento de Evaluación REN-FORM-MIN-006.",
    followUp: "Entrevista personal de retroalimentación constructiva y plan de metas espirituales del nuevo año.",
    steps: [
      "1. Autoevaluación del líder e informe de su supervisor inmediato.",
      "2. Consolidación de datos por el Consejo Ministerial.",
      "3. Entrevista personal y fraterna de retroalimentación.",
      "4. Establecimiento de compromisos y áreas de crecimiento.",
      "5. Ratificación de credencial laica para el nuevo período.",
    ],
  },
  {
    id: "WF-MIN-H",
    title: "Transición, Cambio de Función o Pausa Sabática",
    trigger: "Solicitud del líder por motivos personales/familiares, necesidad de rotación o fatiga ministerial.",
    evaluation: "Pastor encargado evalúa las razones buscando preservar la salud integral del líder y de su familia.",
    responsible: "Pastor a cargo y Secretaría Pastoral.",
    decision: "Concesión de pausa temporal honorable, relevo planificado o reasignación departamental.",
    documentation: "Formulario de Transición Ministerial REN-FORM-MIN-007.",
    followUp: "Acompañamiento pastoral de cuidado durante el período de descanso sin pérdida de estima eclesial.",
    steps: [
      "1. Presentación de la solicitud REN-FORM-MIN-007 por parte del líder.",
      "2. Diálogo pastoral de comprensión y oración.",
      "3. Planificación del relevo ordenado para no desatender al grupo o ministerio.",
      "4. Agradecimiento público al líder por su servicio fiel.",
      "5. Monitoreo del bienestar familiar durante su receso.",
    ],
  },
  {
    id: "WF-MIN-I",
    title: "Desarrollo y Promoción hacia la Acreditación Ministerial",
    trigger: "Líder laico sobresaliente manifiesta vocación de tiempo completo o dedicación ministerial formal.",
    evaluation: "Consejo Ministerial evalúa llamado, doctrina, trayectoria intachable y formación teológica.",
    responsible: "Pastor Fundador y Consejo Ministerial.",
    decision: "Admisión como Candidato Ministerial y derivación al proceso formal de REN-DOC-010.",
    documentation: "Expediente Ministerial Institucional y Formulario de Acreditación (REN-DOC-010).",
    followUp: "Asignación de mentor pastoral de nivel de Ministro Ordenado.",
    steps: [
      "1. Carta de postulación y recomendación pastoral escrita.",
      "2. Examen doctrinal, bíblico y de ética ministerial ante el Consejo Ministerial.",
      "3. Verificación de antecedentes de vida familiar y finanzas personales ordenadas.",
      "4. Aprobación del pleno del Consejo Ministerial y Pastor Fundador.",
      "5. Otorgamiento de Licencia Ministerial e imposición de manos solemne.",
    ],
  },
  {
    id: "WF-MIN-J",
    title: "Gestión de Situación Ética, Desvío Doctrinal o Conflicto Ministerial",
    trigger: "Queja formal fundamentada, denuncia de abuso o evidencia de falta moral o desvío doctrinal de un líder.",
    evaluation: "Comisión Pastoral Especial del Consejo Ministerial investiga con debido proceso y presunción de inocencia.",
    responsible: "Consejo Ministerial y Pastor Fundador (con aviso a autoridades civiles si constituye delito).",
    decision: "Suspensión cautelar inmediata, exoneración, corrección privada o destitución y proceso de restauración (REN-DOC-005).",
    documentation: "Expediente Disciplinario Confidencial conforme a REN-DOC-005.",
    followUp: "Plan de restauración espiritual para el creyente y protección integral a la congregación.",
    steps: [
      "1. Recepción formal de la denuncia o informe por el Consejo Ministerial.",
      "2. En caso de denuncia de abuso infantil o delito, reporte inmediato obligatorio a las autoridades de New Jersey (N.J.S.A. 9:6-8.10).",
      "3. Suspensión preventiva del cargo ministerial como medida cautelar de protección.",
      "4. Audiencia confidencial para escuchar al líder investigado con garantías de debido proceso.",
      "5. Emisión de resolución ministerial fundada: desvinculación, sanción o derivación a restauración.",
    ],
  },
];

export const FULL_MINISTRY_LEADERSHIP_MANUAL_DRAFT: MasterMinistryLeadershipManualDraft = {
  code: "REN-DOC-006",
  id: "doc-ren-006",
  title: "MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER",
  shortTitle: "Manual de Ministerios y Liderazgo",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "MINISTERIOS_Y_LIDERAZGO",
  author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno",
  authorId: "usr-fundador-001",
  responsibleArea: "PASTORAL_Y_SUPERVISION_MINISTERIAL",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "MANUAL_INSTITUCIONAL",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El presente MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER CHURCH (REN-DOC-006) constituye la normativa operativa fundamental para la edificación, articulación y supervisión del cuerpo ministerial de la iglesia. Fundado sobre la suprema autoridad de las Sagradas Escrituras y en estricta armonía con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Manual de Gobierno (REN-DOC-004) y el Manual de Membresía y Disciplina (REN-DOC-005), este documento establece una estructura orgánica, flexible y cristocéntrica. Concibe el liderazgo cristiano exclusivamente como un servicio abnegado y no como un instrumento de dominación, consagrando salvaguardas explícitas contra el abuso espiritual, la manipulación profética y la intromisión en la vida privada de los miembros. Asimismo, garantiza la plena participación ministerial de las mujeres, consagra la estructura de Familias de Grupo y fija una ruta clara de capacitación, evaluación y desarrollo para la multiplicación del reino de Dios.",
  titles: MASTER_MINISTRY_MANUAL_TITLES,
  ministryAreas: MINISTRY_AREAS_CATALOG,
  leadershipMatrix: LEADERSHIP_ROLE_MATRIX,
  operationalWorkflows: MINISTRY_LEADERSHIP_WORKFLOWS,
  futureForms: FUTURE_FORMS_CATALOG,
};

export function getAllMinistryLeadershipManualSections(): ManualSection[] {
  return MASTER_MINISTRY_MANUAL_TITLES.flatMap((t) => t.sections);
}

export function generateFullMinistryLeadershipManualMarkdown(): string {
  const manual = FULL_MINISTRY_LEADERSHIP_MANUAL_DRAFT;
  let md = `# ${manual.title}\n\n`;
  md += `**Código:** ${manual.code} | **Versión:** v${manual.version} | **Jerarquía:** ${manual.hierarchyLevel}\n`;
  md += `**Estado de Trabajo:** ${manual.status} | **Estado de Adopción:** ${manual.adoptionStatus}\n`;
  md += `**Estado Legal:** ${manual.legalState}\n\n`;
  md += `> **ADVERTENCIA INSTITUCIONAL Y LEGAL:** Documento en fase de redacción técnica preliminar (v0.1). No adoptado formalmente. Requiere revisión letrada integral previa a su adopción.\n\n`;
  md += `## PREÁMBULO\n\n${manual.preamble}\n\n---\n\n`;

  for (const title of manual.titles) {
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

  md += `## CATÁLOGO DE LAS 18 ÁREAS MINISTERIALES Y ESTRUCTURAS PROPUESTAS\n\n`;
  md += `| Código | Nombre del Área | Categoría | Estado Institucional | Órgano Supervisor | Propósito Principal |\n`;
  md += `|---|---|---|---|---|---|\n`;
  for (const area of manual.ministryAreas) {
    md += `| **${area.code}** | ${area.name} | ${area.category} | \`${area.status}\` | ${area.supervisingBody} | ${area.purpose} |\n`;
  }
  md += `\n---\n\n`;

  md += `## MATRIZ DE ROLES DE LIDERAZGO INSTITUCIONAL\n\n`;
  md += `| Rol | Función Principal | Supervisa | Reporta A | Requisitos Esenciales | Nivel de Autoridad |\n`;
  md += `|---|---|---|---|---|---|\n`;
  for (const row of manual.leadershipMatrix) {
    md += `| **${row.rol}** | ${row.funcionPrincipal} | ${row.supervisa} | ${row.reportaA} | ${row.requisitosEsenciales} | ${row.nivelAutoridad} |\n`;
  }
  md += `\n---\n\n`;

  md += `## FLUJOS OPERATIVOS Y WORKFLOWS DE LIDERAZGO (WORKFLOWS A AL J)\n\n`;
  for (const wf of manual.operationalWorkflows) {
    md += `### ${wf.id}: ${wf.title}\n\n`;
    md += `- **Disparador:** ${wf.trigger}\n`;
    md += `- **Evaluación:** ${wf.evaluation}\n`;
    md += `- **Responsable:** ${wf.responsible}\n`;
    md += `- **Decisión:** ${wf.decision}\n`;
    md += `- **Documentación:** ${wf.documentation}\n`;
    md += `- **Seguimiento:** ${wf.followUp}\n\n`;
    md += `**Pasos Operativos:**\n`;
    for (const step of wf.steps) {
      md += `- ${step}\n`;
    }
    md += `\n`;
  }
  md += `\n---\n\n`;

  md += `## CATÁLOGO DE FORMULARIOS FUTUROS DE GESTIÓN MINISTERIAL\n\n`;
  md += `| Código | Nombre del Formulario | Propósito | Responsable de Custodia | Retención |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const form of manual.futureForms) {
    md += `| **${form.code}** | ${form.name} | ${form.purpose} | ${form.responsible} | ${form.retentionPeriod} |\n`;
  }
  md += `\n`;

  return md;
}
