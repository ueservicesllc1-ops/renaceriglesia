// ============================================================================
// RENACER CHURCH MAESTRO — FASE 39
// REN-DOC-008: PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER
// BORRADOR OFICIAL COMPLETO — v0.1 (EN_REDACCION / NO ADOPTADA)
// ============================================================================

export interface LeadersManualSection {
  sectionNumber: string;
  title: string;
  content: string;
  decisionIds: string[];
  dependencies: string[];
  practicalProtocol?: string;
  pendingDefinitionNotes?: string;
  legalReviewRequired?: boolean;
}

export interface CurricularModuleDefinition {
  moduleNumber: number;
  code: string;
  level: "NIVEL_I" | "NIVEL_II" | "NIVEL_III";
  levelName: string;
  moduleTitle: string;
  theme: string;
  scripturalAnchor: string;
  generalObjective: string;
  specificObjectives: string[];
  weeklyHours: number;
  lessonContent: string;
  pedagogicalActivity: string;
  practicalTask: string;
  evaluationMethod: string;
  legalReviewRequired?: boolean;
}

export interface CurricularMatrixRow {
  nivel: string;
  codigo: string;
  modulo: string;
  objetivo: string;
  practica: string;
  evaluacion: string;
}

export interface CompetencyMatrixRow {
  competencia: string;
  nivel1: string;
  nivel2: string;
  nivel3: string;
}

export interface LeadersFutureFormDefinition {
  code: string;
  name: string;
  purpose: string;
  responsible: string;
  retentionPeriod: string;
}

export interface LeadersProgramTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: LeadersManualSection[];
}

export interface MasterLeadersProgramDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "LIDERAZGO";
  author: "Pastor Fundador / Consejo Ministerial";
  authorId: "usr-fundador-001";
  responsibleArea: "DIRECCION_LIDERAZGO_Y_MINISTERIOS";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "PROGRAMA_ACADEMICO";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  durationMonths: 6;
  classesPerWeek: 2;
  levelsCount: 3;
  titles: LeadersProgramTitle[];
  modules: CurricularModuleDefinition[];
  curricularMatrix: CurricularMatrixRow[];
  competencyMatrix: CompetencyMatrixRow[];
  futureForms: LeadersFutureFormDefinition[];
}

// ============================================================================
// CATÁLOGO COMPLETO DE LOS 24 MÓDULOS CURRICULARES (8 POR NIVEL)
// ============================================================================

export const LEADERS_MODULES_CATALOG: CurricularModuleDefinition[] = [
  // --------------------------------------------------------------------------
  // NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO (2 Meses — Módulos 1 al 8)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 1,
    code: "LID-N1-M01",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "El Liderazgo Cristiano como Servicio y Modelo de Cristo",
    theme: "El liderazgo siervo según Marcos 10:42-45 y Filipenses 2:5-11",
    scripturalAnchor: "Marcos 10:42-45; Juan 13:12-17; Filipenses 2:5-11",
    generalObjective: "Comprender que el liderazgo bíblico en RENACER se fundamenta exclusivamente en el servicio humilde y abnegado, superando paradigmas piramidales o autoritarios del mundo.",
    specificObjectives: [
      "Contrastar el modelo del siervo sufriente frente a las estructuras de dominio secular.",
      "Identificar el servicio voluntario como requisito fundacional previo a cualquier función de liderazgo.",
      "Desarrollar una actitud de humildad pastoral en el trato diario con los creyentes.",
    ],
    weeklyHours: 2,
    lessonContent: "Definición del líder siervo; el toalla y el lebrillo como insignias del liderazgo cristiano; renuncia a la vanagloria; el poder mediante el servicio desinteresado.",
    pedagogicalActivity: "Análisis exegético guiado de Juan 13 y taller de reflexión sobre motivaciones del corazón.",
    practicalTask: "Realizar un acto silencioso de servicio en su Familia de Grupo o templo sin buscar reconocimiento.",
    evaluationMethod: "Rúbrica de autoevaluación reflexiva y observación formativa del tutor.",
  },
  {
    moduleNumber: 2,
    code: "LID-N1-M02",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "La Forja del Carácter del Líder: Integridad y Madurez",
    theme: "Requisitos morales y carácter cristiano según 1 Timoteo 3 y Tito 1",
    scripturalAnchor: "1 Timoteo 3:1-13; Tito 1:5-9; Gálatas 5:22-23",
    generalObjective: "Examinar y cultivar las cualidades de carácter indispensables para el liderazgo espiritual, priorizando el ser sobre el hacer.",
    specificObjectives: [
      "Revisar los requisitos bíblicos de irreprensibilidad, sobriedad, dominio propio y testimonio público.",
      "Identificar áreas de vulnerabilidad personal y establecer disciplinas de rendición de cuentas.",
      "Reconocer que el carisma sin carácter produce daño pastoral y crisis institucional.",
    ],
    weeklyHours: 2,
    lessonContent: "El fruto del Espíritu como base del carácter; la coherencia entre vida privada, familiar y ministerio público; manejo de las tentaciones de poder, dinero y sexualidad.",
    pedagogicalActivity: "Estudio de casos sobre caídas ministeriales históricas y diseño de salvaguardas éticas personales.",
    practicalTask: "Elaborar un plan personal de crecimiento del carácter y firmar un pacto de integridad devocional.",
    evaluationMethod: "Revisión confidencial del plan de carácter con el mentor espiritual.",
  },
  {
    moduleNumber: 3,
    code: "LID-N1-M03",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "Integridad, Testimonio Público y Vida Familiar del Líder",
    theme: "El hogar y la vida social como primer campo de testimonio ministerial",
    scripturalAnchor: "1 Timoteo 3:4-5; Efesios 5:21-33; Colosenses 3:18-21",
    generalObjective: "Establecer la primacía de la salud conyugal, familiar y ciudadana como requisito de credibilidad en el liderazgo de RENACER.",
    specificObjectives: [
      "Comprender que el cuidado y pastoreo del propio hogar precede al liderazgo en la iglesia local.",
      "Examinar el testimonio ético en el trabajo, los negocios civiles y las obligaciones ciudadanas.",
      "Aprender a establecer límites saludables entre ministerio y tiempo familiar.",
    ],
    weeklyHours: 2,
    lessonContent: "El liderazgo en el matrimonio y con los hijos; resolución de tensiones domésticas; honestidad laboral y comercial; el líder como ciudadano ejemplar en New Jersey.",
    pedagogicalActivity: "Mesa redonda sobre balance entre compromisos eclesiales y responsabilidades conyugales.",
    practicalTask: "Dedicar una jornada exclusiva al fortalecimiento familiar sin interrupciones ministeriales.",
    evaluationMethod: "Informe cualitativo y retroalimentación pastoral del tutor.",
  },
  {
    moduleNumber: 4,
    code: "LID-N1-M04",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "Vida Devocional, Disciplinas Espirituales y Guerra Espiritual",
    theme: "La oración perseverante, el ayuno y la intercesión como motor del liderazgo",
    scripturalAnchor: "Efesios 6:10-18; Lucas 6:12-13; Salmos 63:1-8",
    generalObjective: "Desarrollar una vida devocional íntima y profunda, comprendiendo que el fruto ministerial emana de la comunión secreta con Dios.",
    specificObjectives: [
      "Estructurar un altar personal y familiar diario de oración e intercesión sistemática.",
      "Comprender la armadura de Dios y el combate espiritual sobrio y bíblico.",
      "Aprender a discernir la voluntad de Dios en la toma de decisiones ministeriales mediante la oración.",
    ],
    weeklyHours: 2,
    lessonContent: "Tipos de oración (adoración, confesión, intercesión, guerra espiritual sobria); ayuno bíblico y silencio; protección del corazón frente a la sequedad espiritual.",
    pedagogicalActivity: "Vigilia/taller guiado de intercesión por las familias y ministerios de RENACER.",
    practicalTask: "Mantener una bitácora devocional de 14 días consecutivos con motivos específicos de intercesión.",
    evaluationMethod: "Revisión de bitácora devocional y evaluación actitudinal de consagración.",
  },
  {
    moduleNumber: 5,
    code: "LID-N1-M05",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "El Discipulado Bíblico y la Formación Integral de Creyentes",
    theme: "El mandato de hacer discípulos como eje neurálgico del ministerio eclesial",
    scripturalAnchor: "Mateo 28:18-20; 2 Timoteo 2:2; 1 Tesalonicenses 2:7-12",
    generalObjective: "Dominar los fundamentos, etapas y herramientas del discipulado bíblico relacional para consolidar y madurar a nuevos creyentes.",
    specificObjectives: [
      "Articular la diferencia teológica entre prosélitos, miembros pasivos y discípulos reproductores.",
      "Aprender a utilizar los materiales de la Escuela de Discípulos (REN-DOC-007) en el mentoreo.",
      "Desarrollar habilidades de escucha activa, consejo bíblico y modelaje de vida.",
    ],
    weeklyHours: 2,
    lessonContent: "El modelo discipulador de Jesús y de Pablo; etapas del desarrollo espiritual (hijos, jóvenes, padres); diagnóstico del estado espiritual del discípulo; mentoreo relacional 1 a 1.",
    pedagogicalActivity: "Role-playing de una sesión inicial de mentoría espiritual con un nuevo convertido.",
    practicalTask: "Iniciar el acompañamiento formal de un discípulo asignado utilizando REN-FORM-DIS-007.",
    evaluationMethod: "Presentación del primer informe de mentoría y evaluación de competencias relacionales.",
  },
  {
    moduleNumber: 6,
    code: "LID-N1-M06",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "Mayordomía Cristiana, Administración y Responsabilidad Personal",
    theme: "La administración fiel del tiempo, dones, recursos y finanzas personales",
    scripturalAnchor: "Lucas 16:10-12; 1 Corintios 4:1-2; 2 Corintios 9:6-11",
    generalObjective: "Formar líderes ejemplares en mayordomía financiera bíblica, gestión responsable del tiempo y fidelidad en los recursos encomendados.",
    specificObjectives: [
      "Comprender la mayordomía de los diezmos, ofrendas y primicias sin legalismos ni coacciones.",
      "Aprender técnicas prácticas de organización del tiempo y priorización ministerial.",
      "Garantizar la transparencia y solvencia financiera personal del líder como base de autoridad moral.",
    ],
    weeklyHours: 2,
    lessonContent: "Fidelidad en lo poco; administración de presupuestos personales; generosidad gozosa; gestión de la agenda semanal; evitar la negligencia y la improvisación en el servicio.",
    pedagogicalActivity: "Taller práctico de elaboración de presupuesto familiar y matriz de priorización semanal.",
    practicalTask: "Organizar y presentar una agenda semanal equilibrada (Dios, Familia, Trabajo, Ministerio).",
    evaluationMethod: "Evaluación de la matriz de agenda y coherencia en mayordomía.",
  },
  {
    moduleNumber: 7,
    code: "LID-N1-M07",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "Comunicación Asertiva, Escucha Activa y Manejo de Información",
    theme: "La palabra sazonada con gracia y la prudencia en las relaciones ministeriales",
    scripturalAnchor: "Proverbios 15:1; Efesios 4:29; Santiago 3:1-12; Colosenses 4:6",
    generalObjective: "Desarrollar habilidades de comunicación cristiana transparente, edificante y prudente en entornos presenciales y digitales.",
    specificObjectives: [
      "Aprender a comunicar con claridad, empatía y gracia la verdad bíblica en público y privado.",
      "Comprender el principio de confidencialidad responsable y evitar la murmuración o el chisme.",
      "Manejar responsablemente grupos de WhatsApp, redes sociales y comunicaciones eclesiales.",
    ],
    weeklyHours: 2,
    lessonContent: "La gracia en la lengua; escucha empática; asertividad sin agresividad ni pasividad; el uso sabio de la tecnología en el liderazgo; canales formales de comunicación en RENACER.",
    pedagogicalActivity: "Simulación de resolución de malentendidos mediante diálogo asertivo guiado.",
    practicalTask: "Redactar un comunicado formal y claro para coordinar una actividad ministerial.",
    evaluationMethod: "Evaluación de la claridad comunicativa y pertinencia del mensaje.",
  },
  {
    moduleNumber: 8,
    code: "LID-N1-M08",
    level: "NIVEL_I",
    levelName: "NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO",
    moduleTitle: "Trabajo en Equipo, Cooperación Ministerial y Sujeción Mutua",
    theme: "La interdependencia del cuerpo de Cristo según 1 Corintios 12 y Romanos 12",
    scripturalAnchor: "Romanos 12:3-8; 1 Corintios 12:12-27; Efesios 4:1-6",
    generalObjective: "Fomentar una cultura de colaboración fraternal, delegación efectiva y sujeción mutua, erradicando el personalismo y la competencia ministerial.",
    specificObjectives: [
      "Reconocer la diversidad de dones y la complementariedad en los equipos de servicio.",
      "Aprender a delegar tareas con claridad de responsabilidades y supervisión cariñosa.",
      "Valorar el aporte de los demás servidores y celebrar los logros colectivos.",
    ],
    weeklyHours: 2,
    lessonContent: "El cuerpo de Cristo como modelo de equipo; la sinergia ministerial; barreras al trabajo en equipo (orgullo, envidia, inseguridad); dinámicas de reuniones efectivas y participativas.",
    pedagogicalActivity: "Dinámica grupal de resolución de tareas cooperativas bajo límites de tiempo.",
    practicalTask: "Coordinar una tarea de servicio conjunto asignando roles específicos a dos colaboradores.",
    evaluationMethod: "Evaluación del informe de trabajo en equipo y retroalimentación de pares.",
  },

  // --------------------------------------------------------------------------
  // NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN (2 Meses — Módulos 9 al 16)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 9,
    code: "LID-N2-M01",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Visión y Fundamentos Bíblicos de las Familias de Grupo",
    theme: "La iglesia en el templo y por las casas según Hechos 2:42-47 y Hechos 20:20",
    scripturalAnchor: "Hechos 2:42-47; Hechos 5:42; Hechos 20:20; Romanos 16:3-5",
    generalObjective: "Comprender la base bíblica, el valor estratégico y la dinámica comunitaria de las Familias de Grupo como la estructura celular y capilar oficial de RENACER.",
    specificObjectives: [
      "Reconocer las Familias de Grupo como el ecosistema natural de pastoreo, comunión y alcance.",
      "Afianzar el uso exclusivo de la denominación 'Familias de Grupo' (proscripción de 'células').",
      "Identificar los propósitos fundamentales: Alabanza, Edificación, Comunión, Oración y Evangelismo.",
    ],
    weeklyHours: 2,
    lessonContent: "Historia y teología de las iglesias hogareñas en el Nuevo Testamento; la doble dinámica templo-casa; el papel de la hospitalidad; por qué las Familias de Grupo no son reuniones aisladas sino extensiones de la iglesia local.",
    pedagogicalActivity: "Mapeo territorial de zonas residenciales y análisis de necesidades comunitarias.",
    practicalTask: "Visitar y observar activamente el desarrollo de una Familia de Grupo consolidada.",
    evaluationMethod: "Cuestionario analítico de observación de campo.",
  },
  {
    moduleNumber: 10,
    code: "LID-N2-M02",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Apertura, Estructura y Roles en una Familia de Grupo",
    theme: "Organización, anfitriones, asistentes y líderes según REN-DOC-006",
    scripturalAnchor: "Lucas 10:1-9; Filemón 1:1-2; Colosenses 4:15",
    generalObjective: "Aprender los pasos prácticos para abrir, organizar y poner en marcha una nueva Familia de Grupo con roles debidamente definidos.",
    specificObjectives: [
      "Identificar y capacitar a un anfitrión con hogar idóneo y corazón hospitalario.",
      "Definir con precisión los roles de Líder, Asistente (Líder en formación), Anfitrión y Servidores.",
      "Establecer la logística, día, horario fijo y normas de orden para la reunión semanal.",
    ],
    weeklyHours: 2,
    lessonContent: "El hogar como santuario de gracia; perfil del anfitrión; responsabilidades del líder y del asistente; preparación previa del ambiente; puntualidad y duración estricta (máximo 60-75 minutos).",
    pedagogicalActivity: "Simulación de entrevista pastoral y visita de acuerdo con potenciales anfitriones.",
    practicalTask: "Elaborar un plan de apertura de grupo que incluya dirección, horario y equipo base.",
    evaluationMethod: "Revisión técnica del plan de apertura por parte del Supervisor de Área.",
  },
  {
    moduleNumber: 11,
    code: "LID-N2-M03",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Planificación y Dirección Efectiva de la Reunión Hogareña",
    theme: "Los 5 momentos de la reunión: Bienvenida, Alabanza, Palabra, Oración y Refrigerio",
    scripturalAnchor: "1 Corintios 14:26-33, 40; Colosenses 3:16",
    generalObjective: "Dominar la dinámica, tiempos y facilitación de la reunión hogareña semanal con orden, unción y calidez fraternal.",
    specificObjectives: [
      "Gestionar armónicamente los 5 bloques: Bienvenida (10m), Alabanza (10m), Edificación (25m), Oración (15m) y Refrigerio fraternal (15m).",
      "Facilitar la conversación bíblica participativa sin monopolizar el tiempo como si fuera un sermón.",
      "Manejar con prudencia a participantes difíciles o desviaciones doctrinales durante el diálogo.",
    ],
    weeklyHours: 2,
    lessonContent: "Metodología de la facilitación dialógica; preguntas rompehielos; cómo guiar la alabanza sencilla en casa; cómo aplicar la guía de estudio oficial; ministración sensible por necesidades.",
    pedagogicalActivity: "Laboratorio práctico en aula: simulación en vivo de una reunión completa de 60 minutos.",
    practicalTask: "Dirigir un bloque específico (oración o edificación) en su Familia de Grupo habitual.",
    evaluationMethod: "Rúbrica de evaluación de facilitación por parte del líder del grupo anfitrión.",
  },
  {
    moduleNumber: 12,
    code: "LID-N2-M04",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Cuidado Pastoral, Visitación y Pastoreo Relacional",
    theme: "El seguimiento amoroso de las ovejas fuera de la reunión según Ezequiel 34",
    scripturalAnchor: "Ezequiel 34:11-16; Juan 10:11-15; 1 Pedro 5:1-4",
    generalObjective: "Capacitar al líder para brindar un pastoreo cercano y preventivo mediante visitas, llamadas y atención a las crisis de los miembros.",
    specificObjectives: [
      "Organizar visitas pastorales hogareñas o clínicas con discreción y prudencia ética.",
      "Detectar oportunamente necesidades espirituales, materiales o emocionales en el grupo.",
      "Saber cuándo atender una situación y cuándo derivarla inmediatamente al Pastor Asociado.",
    ],
    weeklyHours: 2,
    lessonContent: "El arte de la visita pastoral; protocolo de visita (breve, enfocada, en pareja); confidencialidad y límites pastorales; auxilio compasivo en emergencias; derivación responsable.",
    pedagogicalActivity: "Estudio de casos sobre detección de crisis familiares y protocolo de derivación.",
    practicalTask: "Realizar una visita pastoral de consolación o ánimo en compañía de su supervisor.",
    evaluationMethod: "Informe confidencial de visita pastoral (REN-FORM-LID-005).",
  },
  {
    moduleNumber: 13,
    code: "LID-N2-M05",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Evangelismo Relacional y Alcance en el Vecindario",
    theme: "La estrategia de ganar amigos y vecinos para Cristo mediante el amor práctico",
    scripturalAnchor: "Lucas 19:1-10; Juan 4:28-30, 39-42; 1 Corintios 9:19-23",
    generalObjective: "Movilizar a la Familia de Grupo como una célula evangelística viva que alcanza de manera natural y relacional a su comunidad.",
    specificObjectives: [
      "Implementar la 'Oración de Tres' por vecinos y familiares no convertidos.",
      "Organizar reuniones especiales de alcance (cenas de amistad, actividades de bendición social).",
      "Guiar a una persona a la profesión de fe en Cristo e incorporarla al grupo y a la iglesia.",
    ],
    weeklyHours: 2,
    lessonContent: "Evangelismo de amistad vs. proselitismo agresivo; el poder del testimonio cotidiano; eventos puente de alcance; cómo hacer la invitación a la Familia de Grupo y al culto dominical.",
    pedagogicalActivity: "Diseño de un proyecto evangelístico comunitario para una Familia de Grupo.",
    practicalTask: "Invitar y acompañar a dos personas no cristianas a una reunión de grupo u evento eclesial.",
    evaluationMethod: "Registro de contactos evangelísticos y seguimiento del plan de alcance.",
  },
  {
    moduleNumber: 14,
    code: "LID-N2-M06",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Discipulado Práctico y Consolidación del Nuevo Convertido",
    theme: "El plan de seguimiento de las 72 horas y la vinculación a la Escuela de Discípulos",
    scripturalAnchor: "Hechos 9:10-19; Hechos 11:19-26; 2 Timoteo 1:13-14",
    generalObjective: "Establecer procesos efectivos de consolidación inmediata para evitar la deserción de los nuevos convertidos.",
    specificObjectives: [
      "Ejecutar el protocolo de contacto y bienvenida dentro de las primeras 72 horas.",
      "Conectar al nuevo creyente con un mentor personal y con la Escuela de Discípulos (REN-DOC-007).",
      "Acompañar al discípulo en su preparación para el bautismo en agua por inmersión.",
    ],
    weeklyHours: 2,
    lessonContent: "La vulnerabilidad del recién nacido espiritual; el rol de Ananías con Saulo de Tarso; bitácora de consolidación; integración a la vida congregacional y clases dominicales.",
    pedagogicalActivity: "Simulación de llamada y primera visita de consolidación dentro de las 72 horas.",
    practicalTask: "Consolidar a una persona recién convertida durante un período mínimo de 4 semanas.",
    evaluationMethod: "Ficha de consolidación y verificación del avance del nuevo creyente.",
  },
  {
    moduleNumber: 15,
    code: "LID-N2-M07",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Identificación y Formación del Asistente (Líder en Formación)",
    theme: "El mentoreo intencional del sucesor en el liderazgo del grupo",
    scripturalAnchor: "Éxodo 18:21-26; Números 27:18-23; 2 Timoteo 2:2",
    generalObjective: "Capacitar al líder para descubrir, reclutar y discipular a su asistente, asegurando la continuidad y fecundidad del ministerio.",
    specificObjectives: [
      "Identificar hermanos con potencial de liderazgo conforme a criterios de fidelidad y servicio.",
      "Delegar progresivamente responsabilidades (de observar a dirigir bajo supervisión).",
      "Matricular y motivar al asistente para que curse la Escuela de Líderes.",
    ],
    weeklyHours: 2,
    lessonContent: "El síndrome de Moisés (agotamiento por centralización); el modelo de Jetro; perfil del líder en formación; cómo capacitar en la práctica sin generar rivalidad; evaluación continua.",
    pedagogicalActivity: "Taller de diseño de un plan de mentoreo de 60 días para un líder asistente.",
    practicalTask: "Asignar formalmente a un asistente en su grupo y completar el plan REN-FORM-LID-007.",
    evaluationMethod: "Evaluación del plan de desarrollo de líder asistente y dictamen del supervisor.",
  },
  {
    moduleNumber: 16,
    code: "LID-N2-M08",
    level: "NIVEL_II",
    levelName: "NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN",
    moduleTitle: "Multiplicación Saludable: Proceso, Logística y Celebración",
    theme: "La transición de 8-15 a 15-20 miembros hacia el nacimiento de una nueva Familia",
    scripturalAnchor: "Génesis 1:28; Hechos 6:1-7; Hechos 9:31; Hechos 16:5",
    generalObjective: "Comprender la multiplicación no como una división traumática sino como un nacimiento gozoso y planificado de una nueva Familia de Grupo.",
    specificObjectives: [
      "Manejar las pautas orientativas: tamaño saludable (8-15 personas) y zona de multiplicación (15-20 personas) sin rigidez matemática.",
      "Gestionar las emociones de apego en el grupo y enfocar el propósito misionero.",
      "Coordinar la ceremonia congregacional de envío y bendición de los nuevos líderes.",
    ],
    weeklyHours: 2,
    lessonContent: "La dinámica del crecimiento orgánico; preparación espiritual y psicológica del grupo para multiplicarse; distribución equilibrada de miembros y anfitriones; la fiesta de multiplicación.",
    pedagogicalActivity: "Simulación de una reunión preparatoria de multiplicación con los miembros del grupo.",
    practicalTask: "Elaborar un plan hipotético o real de multiplicación para su sector territorial.",
    evaluationMethod: "Presentación del proyecto de multiplicación ante el Consejo de Liderazgo.",
  },

  // --------------------------------------------------------------------------
  // NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA Y CONFLICTOS (2 Meses — Módulos 17 al 24)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 17,
    code: "LID-N3-M01",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Estructura Institucional, Gobierno y Líneas de Supervisión",
    theme: "La cadena de supervisión pastoral y los órganos de gobierno de RENACER",
    scripturalAnchor: "1 Corintios 14:33, 40; Hebreos 13:17; 1 Tesalonicenses 5:12-13",
    generalObjective: "Conocer la estructura orgánica de RENACER (REN-DOC-002, 004, 006) y operar con fluidez en la cadena de supervisión institucional.",
    specificObjectives: [
      "Comprender las funciones del Pastor Fundador, Consejo de Gobierno, Consejo Ministerial y Supervisores.",
      "Identificar la línea de supervisión: Pastor -> Líder de Área -> Supervisor -> Líder de Grupo -> Discípulo.",
      "Aprender a rendir informes periódicos y canalizar solicitudes institucionales.",
    ],
    weeklyHours: 2,
    lessonContent: "El organigrama de RENACER; distinciones entre gobierno espiritual, administrativo y ministerial; canales de reporte; cómo recibir supervisión y retroalimentación constructiva.",
    pedagogicalActivity: "Análisis del organigrama institucional y resolución de flujos de escalamiento.",
    practicalTask: "Completar y remitir el informe mensual de liderazgo al supervisor asignado.",
    evaluationMethod: "Evaluación de la precisión y puntualidad del informe de supervisión.",
  },
  {
    moduleNumber: 18,
    code: "LID-N3-M02",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Autoridad Espiritual, Rendición de Cuentas y Sujeción Bíblica",
    theme: "El ejercicio de la autoridad delegado por Dios bajo sujeción mutua",
    scripturalAnchor: "Mateo 20:25-28; 1 Pedro 5:1-5; Romanos 13:1-7",
    generalObjective: "Desarrollar una comprensión bíblica equilibrada de la autoridad espiritual, fundada en el amor y sujeta a permanente rendición de cuentas.",
    specificObjectives: [
      "Diferenciar la autoridad espiritual bíblica del autoritarismo coercitivo o el clericalismo.",
      "Practicar la rendición de cuentas voluntaria y transparente en finanzas, vida y ministerio.",
      "Aprender a honrar a las autoridades eclesiales manteniendo la libertad de conciencia.",
    ],
    weeklyHours: 2,
    lessonContent: "Origen y propósito de la autoridad espiritual; el principio del centurión (autoridad bajo autoridad); peligros de la falta de rendición de cuentas; la transparencia como escudo protector.",
    pedagogicalActivity: "Debate guiado sobre dilemas éticos de autoridad y obediencia reflexiva.",
    practicalTask: "Establecer una reunión formal de rendición de cuentas trimestral con su mentor.",
    evaluationMethod: "Informe cualitativo de la sesión de rendición de cuentas.",
  },
  {
    moduleNumber: 19,
    code: "LID-N3-M03",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Límites Estrictos de Autoridad y Prevención del Abuso Espiritual",
    theme: "Salvaguardas pastorales de REN-DOC-005 y REN-DOC-006 contra el control abusivo",
    scripturalAnchor: "Jeremías 23:1-4; Ezequiel 34:1-10; 2 Corintios 1:24; 1 Pedro 5:3",
    generalObjective: "Consagrar y aplicar las prohibiciones absolutas contra cualquier forma de control patrimonial, familiar, médico o espiritual indebido.",
    specificObjectives: [
      "Interiorizar las prohibiciones de intromisión en: dinero privado, matrimonios/noviazgos, empleo, residencia y decisiones médicas.",
      "Reconocer las señales de manipulación espiritual, amenazas divinas y coacción profética ('Dios me dijo que...').",
      "Aprender los protocolos de denuncia inmediata y protección de los miembros frente a abusos de poder.",
    ],
    weeklyHours: 2,
    lessonContent: "El respeto a la libertad de conciencia; tipologías de abuso espiritual y manipulación psicológica; por qué RENACER prohíbe el control privado; consecuencias disciplinarias y legales del abuso pastoral.",
    pedagogicalActivity: "Análisis de casos de extralimitación de autoridad y redacción de dictámenes correctivos.",
    practicalTask: "Firmar la declaración institucional de compromiso ético y límites pastorales.",
    evaluationMethod: "Aprobación del examen ético-institucional sobre límites de autoridad (100% requerido).",
  },
  {
    moduleNumber: 20,
    code: "LID-N3-M04",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Resolución Bíblica de Conflictos y Mediación (Mateo 18)",
    theme: "El proceso de reconciliación, escucha y debido proceso según REN-DOC-005",
    scripturalAnchor: "Mateo 18:15-17; Gálatas 6:1-2; Mateo 5:23-24; Proverbios 18:13, 17",
    generalObjective: "Capacitar al líder para resolver desacuerdos interpersonales y mediar en conflictos con sabiduría, confidencialidad y justicia bíblica.",
    specificObjectives: [
      "Aplicar el paso a paso de Mateo 18 (conversación privada -> testigos idóneos -> instancia eclesial).",
      "Desarrollar habilidades de mediación neutral, escucha a ambas partes y búsqueda de reconciliación.",
      "Aclarar que el proceso eclesial nunca impide la denuncia de delitos ante las autoridades civiles de New Jersey.",
    ],
    weeklyHours: 2,
    lessonContent: "Causas comunes de conflictos en equipos; el principio de presunción de buena fe; técnicas de mediación bíblica; redacción de actas de acuerdo; cuándo escalar un caso al Comité de Membresía o Disciplina.",
    pedagogicalActivity: "Simulación de mediación pastoral en un conflicto entre dos líderes de ministerio.",
    practicalTask: "Redactar un acta modelo de mediación y reconciliación según REN-DOC-005.",
    evaluationMethod: "Evaluación de la técnica de mediación y apego al debido proceso bíblico.",
  },
  {
    moduleNumber: 21,
    code: "LID-N3-M05",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Uso Bíblico y Orden de los Dones Espirituales y Profecía",
    theme: "El discernimiento pastoral y el orden en el culto conforme a 1 Corintios 14",
    scripturalAnchor: "1 Corintios 12:7-11; 1 Corintios 14:26-40; 1 Tesalonicenses 5:19-22",
    generalObjective: "Enseñar el ejercicio ordenado, edificante y probado de los dones carismáticos, subordinando toda manifestación y profecía a las Sagradas Escrituras.",
    specificObjectives: [
      "Comprender la doctrina oficial sobre lenguas, interpretación, profecía, sanidad y milagros (REN-DOC-001).",
      "Aplicar el principio de que los espíritus de los profetas están sujetos a los profetas (1 Cor 14:32).",
      "Prohibir el uso de falsas profecías como instrumento de manipulación o toma de decisiones seculares.",
    ],
    weeklyHours: 2,
    lessonContent: "Los dones para edificación del cuerpo; discernimiento de espíritus; evaluación bíblica de la profecía (no apagar el Espíritu pero retener lo bueno); protocolos litúrgicos en los cultos y Familias de Grupo.",
    pedagogicalActivity: "Taller sobre criterios bíblicos para evaluar mensajes proféticos y testimonios.",
    practicalTask: "Elaborar una guía práctica sobre el orden de los dones en la reunión de Familia de Grupo.",
    evaluationMethod: "Evaluación de la solidez doctrinal y equilibrio pastoral en el uso de los dones.",
  },
  {
    moduleNumber: 22,
    code: "LID-N3-M06",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Protección de Menores, Prevención de Abusos y Normativa Legal",
    theme: "Salvaguarda legal y deber irrenunciable de denuncia bajo N.J.S.A. 9:6-8.10",
    scripturalAnchor: "Mateo 18:6, 10; Salmos 82:3-4; Proverbios 31:8-9",
    generalObjective: "Formar a los líderes en las políticas estrictas de protección de la infancia, prevención de abusos y cumplimiento de las leyes de New Jersey.",
    specificObjectives: [
      "Aplicar rigurosamente la regla de dos adultos presentes y verificación de antecedentes.",
      "Reconocer indicadores de abuso físico, emocional, negligencia o abuso sexual en menores.",
      "Cumplir el deber irrenunciable de reporte inmediato a la línea estatal de NJ (1-877-NJ-ABUSE / N.J.S.A. 9:6-8.10) y a la policía.",
    ],
    weeklyHours: 2,
    lessonContent: "Marco legal de New Jersey para organizaciones sin fines de lucro; protocolo de protección infantil (REN-DOC-016); tolerancia cero ante cualquier abuso o encubrimiento; procedimiento de denuncia.",
    pedagogicalActivity: "Capacitación intensiva sobre protocolos de reporte legal y simulación de actuación ante emergencias.",
    practicalTask: "Completar la certificación eclesial obligatoria de salvaguarda y protección infantil.",
    evaluationMethod: "Certificado de aprobación del módulo de protección infantil (100% de aciertos).",
    legalReviewRequired: true,
  },
  {
    moduleNumber: 23,
    code: "LID-N3-M07",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Liderazgo Femenino Pleno y Ministerios Específicos",
    theme: "La igualdad de acceso y ministerio para mujeres y hombres según Gálatas 3:28",
    scripturalAnchor: "Gálatas 3:28; Romanos 16:1-7; Hechos 18:24-26; Filipenses 4:2-3",
    generalObjective: "Reafirmar y promover la plena participación ministerial de las mujeres en todos los niveles de liderazgo, enseñanza, dirección y ordenación pastoral en RENACER.",
    specificObjectives: [
      "Estudiar los fundamentos bíblicos del ministerio femenino en el Nuevo Testamento (Débora, Priscila, Febe, Junia).",
      "Erradicar prejuicios machistas o limitaciones no bíblicas en el nombramiento de líderes y pastoras.",
      "Articular los ministerios específicos (Damas, Caballeros, Jóvenes) en armonía con la visión general.",
    ],
    weeklyHours: 2,
    lessonContent: "La mujer en el plan redentor de Dios; liderazgo de mujeres en la historia bíblica y contemporánea; acceso irrestricto a credenciales ministeriales y ordenación pastoral en RENACER; coordinación ministerial.",
    pedagogicalActivity: "Mesa redonda sobre el desarrollo y mentoría de nuevas lideresas en la iglesia.",
    practicalTask: "Diseñar una estrategia para impulsar el liderazgo femenino en su área ministerial.",
    evaluationMethod: "Evaluación de la propuesta estratégica y compromiso de inclusión ministerial.",
  },
  {
    moduleNumber: 24,
    code: "LID-N3-M08",
    level: "NIVEL_III",
    levelName: "NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD",
    moduleTitle: "Formación de Formadores (2 Timoteo 2:2) y Proyección Ministerial",
    theme: "La metodología de multiplicación de líderes en 7 pasos y transición al Seminario",
    scripturalAnchor: "2 Timoteo 2:2; Tito 2:1-8; Mateo 9:35-38",
    generalObjective: "Consolidar el ADN de 'formar formadores' y preparar a los graduados para asumir responsabilidades de liderazgo o postular a la ruta ministerial formal (REN-DOC-010).",
    specificObjectives: [
      "Aplicar con maestría la metodología de 7 pasos: IDENTIFICAR -> INVOLUCRAR -> FORMAR -> ACOMPAÑAR -> ASIGNAR -> EVALUAR -> MULTIPLICAR.",
      "Comprender la ruta hacia el Seminario Bíblico RENACER y el proceso de credenciales ministeriales.",
      "Culminar los requisitos académicos y prácticos para obtener el Certificado de la Escuela de Líderes.",
    ],
    weeklyHours: 2,
    lessonContent: "El legado multiplicador; el líder que genera líderes y no dependientes; mapa de proyección (Líder de Grupo -> Supervisor -> Líder de Área -> Candidato Ministerial); graduación y consagración.",
    pedagogicalActivity: "Presentación plenaria del Plan Maestro de Desarrollo de Nuevos Líderes.",
    practicalTask: "Entregar el portafolio final de prácticas (REN-FORM-LID-005) y solicitud de certificado (REN-FORM-LID-009).",
    evaluationMethod: "Evaluación holística final de graduación y dictamen del Consejo Ministerial.",
  },
];

// ============================================================================
// MATRIZ CURRICULAR (24 MÓDULOS)
// ============================================================================

export const LEADERS_CURRICULAR_MATRIX: CurricularMatrixRow[] = LEADERS_MODULES_CATALOG.map((m) => ({
  nivel: m.levelName,
  codigo: m.code,
  modulo: m.moduleTitle,
  objetivo: m.generalObjective,
  practica: m.practicalTask,
  evaluacion: m.evaluationMethod,
}));

// ============================================================================
// MATRIZ DE COMPETENCIAS POR NIVEL
// ============================================================================

export const LEADERS_COMPETENCY_MATRIX: CompetencyMatrixRow[] = [
  {
    competencia: "Carácter e Integridad",
    nivel1: "Examina motivaciones del corazón, vive en sobriedad y practica coherencia familiar y laboral.",
    nivel2: "Modela paciencia, dominio propio y hospitalidad en el trato continuo con los miembros del grupo.",
    nivel3: "Ejerce liderazgo irreprochable, libre de codicia, autoritarismo o favoritismos en situaciones complejas.",
  },
  {
    competencia: "Vida de Oración y Devoción",
    nivel1: "Mantiene altar personal diario, bitácora devocional y disciplina de intercesión familiar.",
    nivel2: "Guía la intercesión en la reunión de grupo y ministra oración por necesidades específicas.",
    nivel3: "Discierne espiritualmente en la toma de decisiones ministeriales mediante oración perseverante y ayuno.",
  },
  {
    competencia: "Fidelidad Doctrinal",
    nivel1: "Conoce y asimila los 20 Artículos de Fe de REN-DOC-001, diferenciando sana doctrina de error.",
    nivel2: "Explica con claridad y sencillez las verdades bíblicas en el contexto de la reunión hogareña.",
    nivel3: "Defiende la doctrina bíblica, corrige errores con mansedumbre y somete toda profecía a la Escritura.",
  },
  {
    competencia: "Discipulado y Mentoría",
    nivel1: "Acompaña a un nuevo creyente en sus primeros pasos usando los materiales de REN-DOC-007.",
    nivel2: "Consolida a nuevos convertidos dentro de las 72 horas y los integra a la vida congregacional.",
    nivel3: "Mentorea de forma intencional a líderes asistentes mediante la metodología de 7 pasos (2 Tim 2:2).",
  },
  {
    competencia: "Comunicación Asertiva",
    nivel1: "Se expresa con respeto, escucha activamente y evita toda murmuración o chisme.",
    nivel2: "Facilita el diálogo grupal participativo, modera conversaciones y gestiona grupos de WhatsApp.",
    nivel3: "Comunica decisiones institucionales con transparencia, prudencia y apego a la verdad pastoral.",
  },
  {
    competencia: "Facilitación de Familias de Grupo",
    nivel1: "Comprende la estructura, tiempos y roles fundamentales de la reunión hogareña.",
    nivel2: "Dirige con excelencia los 5 momentos de la reunión semanal en 60-75 minutos de forma cálida.",
    nivel3: "Supervisa múltiples grupos, asesora anfitriones y planifica procesos de multiplicación territorial.",
  },
  {
    competencia: "Evangelismo Relacional",
    nivel1: "Comparte su testimonio personal y ora sistemáticamente por personas no creyentes.",
    nivel2: "Organiza actividades de alcance en el vecindario y cosecha nuevos convertidos para el grupo.",
    nivel3: "Capacita a todo un equipo ministerial para ejecutar estrategias continuas de alcance evangelístico.",
  },
  {
    competencia: "Resolución Bíblica de Conflictos",
    nivel1: "Aplica Mateo 18 en sus diferencias personales buscando la reconciliación privada inmediata.",
    nivel2: "Detecta fricciones en el grupo hogareño y media con empatía y neutralidad cristiana.",
    nivel3: "Interviene en mediaciones complejas de liderazgo, documenta acuerdos y escala con debido proceso.",
  },
  {
    competencia: "Ética y Límites de Autoridad",
    nivel1: "Reconoce la autoridad como servicio y rechaza cualquier intención de dominio personal.",
    nivel2: "Respeta la privacidad de los discípulos y no se inmiscuye en decisiones económicas o médicas.",
    nivel3: "Aplica de forma estricta las prohibiciones de control de REN-DOC-006 y rinde cuentas transparentes.",
  },
  {
    competencia: "Supervisión y Rendición de Cuentas",
    nivel1: "Acepta corrección fraterna y rinde cuentas voluntarias a su mentor espiritual.",
    nivel2: "Remite informes semanales de asistencia y participación de su Familia de Grupo.",
    nivel3: "Ejerce supervisión formativa y pastoral de 3 a 5 líderes de grupo con retroalimentación cariñosa.",
  },
  {
    competencia: "Multiplicación y Expansión",
    nivel1: "Mantiene una mentalidad de crecimiento orientada al fruto espiritual y no a la pasividad.",
    nivel2: "Prepara el terreno para la multiplicación del grupo al alcanzar entre 15 y 20 asistentes.",
    nivel3: "Lidera la apertura de nuevos sectores y coordina el envío de nuevas Familias de Grupo consolidadas.",
  },
  {
    competencia: "Formación de Formadores",
    nivel1: "Aprende a delegar pequeñas tareas de servicio y valora el trabajo de otros servidores.",
    nivel2: "Forma a un líder asistente en la práctica semanal de la Familia de Grupo.",
    nivel3: "Implementa el ciclo completo de los 7 pasos, graduando líderes aptos para formar a otros (2 Tim 2:2).",
  },
  {
    competencia: "Protección a Vulnerables",
    nivel1: "Conoce las normas básicas de salvaguarda y trato respetuoso a menores y familias.",
    nivel2: "Aplica la regla de dos adultos presentes en actividades que involucren a menores de edad.",
    nivel3: "Domina el protocolo de denuncia obligatoria bajo N.J.S.A. 9:6-8.10 y remite de inmediato casos a autoridades.",
  },
];

// ============================================================================
// CATÁLOGO DE FORMULARIOS FUTUROS DE LA ESCUELA DE LÍDERES
// ============================================================================

export const LEADERS_FUTURE_FORMS_CATALOG: LeadersFutureFormDefinition[] = [
  {
    code: "REN-FORM-LID-001",
    name: "Solicitud de Ingreso a la Escuela de Líderes",
    purpose: "Postulación del candidato, verificación de graduación de Escuela de Discípulos, recomendación pastoral y estado de membresía activa.",
    responsible: "Secretaría de Liderazgo / Dirección de Escuela de Líderes",
    retentionPeriod: "Permanente en expediente del líder",
  },
  {
    code: "REN-FORM-LID-002",
    name: "Ficha Oficial de Registro de Estudiante de Liderazgo",
    purpose: "Expediente académico y formativo del estudiante con datos personales, mentor asignado y seguimiento de módulos.",
    responsible: "Secretaría de Liderazgo",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-LID-003",
    name: "Ficha de Seguimiento Formativo y Asistencia a Clases",
    purpose: "Control bisemanal de asistencia a las 2 clases semanales, puntualidad y cumplimiento de tareas académicas.",
    responsible: "Docente del Módulo / Coordinador de Nivel",
    retentionPeriod: "3 años",
  },
  {
    code: "REN-FORM-LID-004",
    name: "Formulario de Evaluación Integral de Liderazgo",
    purpose: "Instrumento bimestral de evaluación holística (carácter, conocimiento, destrezas, ética y madurez espiritual).",
    responsible: "Docente Evaluador / Supervisor de Área",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-LID-005",
    name: "Registro y Bitácora de Práctica Ministerial",
    purpose: "Acreditación de experiencias prácticas (facilitación de grupo, visitación, evangelismo, discipulado y servicio).",
    responsible: "Supervisor de Práctica / Mentor Asignado",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-LID-006",
    name: "Ficha de Evaluación de Facilitación de Familia de Grupo",
    purpose: "Evaluación de campo de la dirección de la reunión hogareña (tiempos, clima espiritual, participación y orden).",
    responsible: "Supervisor de Familia de Grupo",
    retentionPeriod: "3 años",
  },
  {
    code: "REN-FORM-LID-007",
    name: "Plan Maestro de Desarrollo de Líder Asistente (7 Pasos)",
    purpose: "Instrumento de seguimiento del proceso de mentoreo de un nuevo líder según 2 Timoteo 2:2 y la metodología de 7 pasos.",
    responsible: "Líder Mentor / Tutor de Liderazgo",
    retentionPeriod: "Permanente en legajo de liderazgo",
  },
  {
    code: "REN-FORM-LID-008",
    name: "Acta de Registro de Finalización y Calificaciones",
    purpose: "Documento oficial que certifica la aprobación de los 3 niveles y 24 módulos con prácticas cumplidas.",
    responsible: "Director de la Escuela de Líderes / Consejo Ministerial",
    retentionPeriod: "Permanente en archivo institucional",
  },
  {
    code: "REN-FORM-LID-009",
    name: "Solicitud de Emisión de Certificado de Escuela de Líderes",
    purpose: "Trámite solemne de emisión del Certificado Oficial de Finalización de la Escuela de Líderes.",
    responsible: "Pastor Fundador / Secretaría General",
    retentionPeriod: "Permanente",
  },
];

// ============================================================================
// TÍTULOS Y SECCIONES NORMATIVAS DEL PROGRAMA OFICIAL (12 TÍTULOS)
// ============================================================================

export const MASTER_LEADERS_PROGRAM_TITLES: LeadersProgramTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, PROPÓSITO Y PRINCIPIOS DE LA ESCUELA DE LÍDERES",
    description: "Establece los fines institucionales, la concepción bíblica del liderazgo servidor y el marco formativo de RENACER.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Propósito y Fines de la Escuela de Líderes",
        content:
          "El PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER (REN-DOC-008) constituye el segundo nivel formal de formación cristiana y capacitación ministerial de la iglesia. Su propósito supremo es equipar a creyentes espiritualmente maduros para servir con abnegación, liderar con humildad, facilitar y multiplicar Familias de Grupo, pastorear relacionalmente, resolver conflictos bíblicamente y formar a la siguiente generación de líderes conforme al modelo de Jesucristo.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004", "REN-DOC-006", "REN-DOC-007"],
      },
      {
        sectionNumber: "1.2",
        title: "Ubicación en el Mapa Formativo y Delimitación Institucional",
        content:
          "La Escuela de Líderes se ubica estratégicamente en la cadena formativa de RENACER:\n\nESCUELA DE DISCÍPULOS (9 Meses — REN-DOC-007)\n   ↓\nESCUELA DE LÍDERES (6 Meses — REN-DOC-008)\n   ↓\nSEMINARIO BÍBLICO RENACER (Formación Teológica Superior)\n   ↓\nPROCESO DE CREDENCIALES MINISTERIALES (REN-DOC-010)\n\nSe delimita expresamente que la Escuela de Líderes:\n1. NO reemplaza ni anula a la Escuela de Discípulos, al Seminario Bíblico ni al Reglamento de Credenciales.\n2. NO constituye ordenación pastoral mediante imposición de manos ni concede oficio clerical.\n3. NO concede licencia ministerial ni acredita formalmente como Ministro Licenciado o Ministro Ordenado.\n4. El Certificado de Finalización acredita exclusivamente la capacitación de liderazgo laico y la aptitud para liderar áreas y grupos en RENACER.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-013", "DEC-DEF-016"],
        dependencies: ["REN-DOC-002", "REN-DOC-006", "REN-DOC-007", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "DURACIÓN, HORARIOS Y ESTRUCTURA DE NIVELES",
    description: "Norma la duración de 6 meses, la frecuencia de 2 clases por semana y la división en 3 niveles bimestrales.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Duración de 6 Meses y Régimen de 2 Clases por Semana",
        content:
          "En estricto cumplimiento de la decisión institucional DEC-DEF-013, el programa de la Escuela de Líderes tiene una duración total de seis (6) meses lectivos continuos, estructurado en un régimen académico intensivo de dos (2) clases semanales (de 2 horas lectivas cada una), totalizando un mínimo de 96 horas cátedra de formación teórica, vivencial y práctica.",
        decisionIds: ["DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "2.2",
        title: "Estructura Trimestral / Bimestral en Tres Niveles",
        content:
          "El programa se divide en tres (3) niveles secuenciales y progresivos de dos (2) meses de duración cada uno:\n\n* NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO (Meses 1 y 2 — Módulos 1 al 8)\n* NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN (Meses 3 y 4 — Módulos 9 al 16)\n* NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD (Meses 5 y 6 — Módulos 17 al 24)\n\nCada nivel contiene 8 módulos analíticos exhaustivos, totalizando 24 módulos curriculares obligatorios.",
        decisionIds: ["DEC-DEF-013"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "PERFILES DE INGRESO Y EGRESO DEL LÍDER",
    description: "Establece los requisitos para ingresar a la escuela y las competencias institucionales del graduado.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "Perfil y Requisitos de Ingreso",
        content:
          "Para postular formalmente a la Escuela de Líderes se requiere:\n1. Haber completado satisfactoriamente la Escuela de Discípulos (REN-DOC-007) o acreditar proceso formativo equivalente validado por el Consejo Ministerial.\n2. Ser Miembro Activo en plena comunión conforme a REN-DOC-005.\n3. Contar con recomendación escrita del líder de su Familia de Grupo y del pastor del área.\n4. Demostrar testimonio irreprochable, vida familiar ordenada y compromiso doctrinal con REN-DOC-001.\n5. Disposición firme para asistir a las 2 clases semanales, cumplir tareas y someterse a supervisión pastoral.\n\nCualquier requisito cuantitativo accesorio no reglamentado expresamente queda marcado como PENDIENTE_DEFINIR por el Consejo Ministerial.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-015"],
        dependencies: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-007"],
        pendingDefinitionNotes: "Criterios adicionales de baremación curricular serán reglamentados por el Consejo Ministerial.",
      },
      {
        sectionNumber: "3.2",
        title: "Perfil de Egreso y Competencias del Líder Graduado",
        content:
          "Al egresar de la Escuela de Líderes, el graduado demuestra:\n1. Carácter forjado en el modelo de Jesús, viviendo con integridad, sobriedad y transparencia.\n2. Dominio práctico en la facilitación, pastoreo y multiplicación de Familias de Grupo.\n3. Capacidad demostrada para discipular y formar a nuevos líderes mediante la metodología de 7 pasos.\n4. Competencia bíblica para mediar en desacuerdos y resolver conflictos bajo Mateo 18.\n5. Apego riguroso a los límites éticos y pastorales, sin ejercer manipulación o control privado.\n6. Sujeción gozosa a la cadena de supervisión institucional y compromiso de servicio en los ministerios de RENACER.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-014", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "FILOSOFÍA CENTRAL: FORMACIÓN DE FORMADORES (2 TIMOTEO 2:2)",
    description: "Consagra el principio de no acumular seguidores sino formar multiplicadores de discípulos.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "El Principio Bíblico de la Multiplicación de Líderes",
        content:
          "En consonancia con 2 Timoteo 2:2 ('Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros'), la Escuela de Líderes proscribe el modelo de líderes indispensables o centralistas. El éxito del liderazgo en RENACER se mide por la cantidad y calidad de nuevos líderes formados y empoderados para el servicio de Dios.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-006"],
      },
      {
        sectionNumber: "4.2",
        title: "La Metodología Oficial de Desarrollo en Siete Pasos",
        content:
          "En estricta armonización con el Manual de Ministerios y Liderazgo (REN-DOC-006), todo estudiante y líder aplicará la metodología estandarizada de siete (7) pasos:\n\n1. IDENTIFICAR: Descubrir creyentes fieles, enseñables y con corazón de servicio.\n2. INVOLUCRAR: Asignar pequeñas tareas iniciales de apoyo en el grupo o ministerio.\n3. FORMAR: Impartir instrucción doctrinal y práctica sistemática (Escuela de Líderes).\n4. ACOMPAÑAR: Modelar el servicio en vivo ('yo hago y tú miras' -> 'hacemos juntos').\n5. ASIGNAR: Delegar la dirección de responsabilidades y la facilitación del grupo ('tú haces y yo miro').\n6. EVALUAR: Brindar retroalimentación constructiva, oportuna y cariñosa.\n7. MULTIPLICAR: Enviar al nuevo líder a abrir una nueva Familia de Grupo o área ministerial.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012", "DEC-DEF-013"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "LIDERAZGO, FUNCIONAMIENTO Y MULTIPLICACIÓN EN FAMILIAS DE GRUPO",
    description: "Norma las destrezas de facilitación hogareña y los criterios orientativos de tamaño y multiplicación.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Competencias de Facilitación Hogareña y Límites Pastorales",
        content:
          "El líder de Familia de Grupo es un facilitador del diálogo y un pastor relacional cercano. Sus competencias incluyen la preparación espiritual, la dirección de la alabanza sencilla, la aplicación participativa de la Palabra, la intercesión por necesidades y la coordinación del refrigerio fraterno. El líder de grupo no ejerce funciones sacerdotales exclusivas del ministro ordenado ni asume señorío sobre la grey.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-011", "DEC-DEF-012"],
        dependencies: ["REN-DOC-006"],
      },
      {
        sectionNumber: "5.2",
        title: "Parámetros Orientativos de Tamaño y Multiplicación",
        content:
          "Se preservan los criterios orientativos consagrados en REN-DOC-006:\n* Rango Óptimo de Funcionamiento: Ocho (8) a quince (15) personas por grupo.\n* Zona Orientativa de Multiplicación: Quince (15) a veinte (20) personas.\n\nEstos parámetros son referencias pedagógicas y operativas; bajo ninguna circunstancia se convertirán en una obligación matemática rígida o motivo de coerción sobre los líderes o asistentes.",
        decisionIds: ["DEC-DEF-011", "DEC-DEF-012"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "CADENA DE SUPERVISIÓN, REPORTE Y ACOMPAÑAMIENTO",
    description: "Define las líneas de reporte y la estructura de cuidado de los líderes.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "La Estructura de Supervisión Ministerial",
        content:
          "La Escuela de Líderes capacita a los estudiantes para integrarse en la cadena de supervisión piramidal invertida de servicio:\n\nPASTOR FUNDADOR / CONSEJO MINISTERIAL\n   ↓\nPASTORES ASOCIADOS / LÍDERES DE ÁREA\n   ↓\nSUPERVISORES DE SECTOR (Acompañan a 3-5 grupos)\n   ↓\nLÍDERES DE FAMILIAS DE GRUPO\n   ↓\nASISTENTES / LÍDERES EN FORMACIÓN\n   ↓\nDISCÍPULOS Y NUEVOS CREYENTES\n\nLos supervisores brindan cuidado pastoral, aliento y asesoría a los líderes, sin ostentar facultades punitivas o doctrinales autónomas.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-012"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "6.2",
        title: "Informes Periódicos y Recepción de Corrección Fraterna",
        content:
          "Los líderes aprenderán a reportar semanalmente mediante los formularios estandarizados (asistencia, consolidación y novedades) y a recibir corrección fraterna con humildad y madurez cristiana, entendiendo que la rendición de cuentas protege al líder y edifica a la congregación.",
        decisionIds: ["DEC-DEF-012"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "LÍMITES DE AUTORIDAD, ÉTICA Y PREVENCIÓN DEL ABUSO ESPIRITUAL",
    description: "Establece las salvaguardas infranqueables contra la manipulación y el control privado.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "Prohibiciones Absolutas de Control Privado",
        content:
          "En estricta armonía con la Constitución (REN-DOC-002), el Manual de Membresía (REN-DOC-005) y el Manual de Ministerios (REN-DOC-006), NINGÚN líder, docente, supervisor o pastor podrá ejercer control, coerción o intromisión en:\n1. El dinero, patrimonio personal, herencias o transacciones comerciales privadas de los creyentes.\n2. La elección de cónyuge, noviazgos legítimos o la intimidad conyugal de los matrimonios.\n3. Decisiones de salud, diagnósticos clínicos, tratamientos médicos o consultas facultativas privadas.\n4. Elección de profesión, empleo secular, estudios académicos o lugar de residencia.\n5. Decisiones ciudadanas, electorales o de opinión civil y política.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "7.2",
        title: "Proscripción de la Manipulación Profética Coercitiva",
        content:
          "Queda terminantemente prohibida la manipulación espiritual, el uso de amenazas divinas o la invocación de fórmulas coercitivas ('Dios me reveló que debes hacer...', 'Si no obedeces mi orden caerá juicio sobre ti'). La profecía bíblica se ejerce con orden (1 Corintios 14), está subordinada a las Sagradas Escrituras y debe ser juzgada y discernida pastoralmente, sin que jamás sirva para imponer decisiones privadas a ningún miembro.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
      {
        sectionNumber: "7.3",
        title: "Código Ético del Líder de RENACER",
        content:
          "Todo estudiante y líder graduado suscribe un compromiso solemne de conducta intachable: honestidad irreprochable, castidad y fidelidad matrimonial conforme a REN-DOC-001, sobriedad, manejo prudente de los recursos eclesiales, confidencialidad responsable y respeto absoluto a la dignidad humana.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "RESOLUCIÓN BÍBLICA DE CONFLICTOS Y SALVAGUARDAS LEGALES",
    description: "Norma el protocolo de mediación según Mateo 18 y el deber legal de protección a víctimas.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Protocolo de Mediación y Debido Proceso Bíblico",
        content:
          "Los líderes serán formados para intervenir en tensiones o desacuerdos aplicando estrictamente Mateo 18:15-17: escucha activa privada, confrontación en amor, mediación de testigos neutrales y documentación formal de acuerdos. Rige siempre la presunción de buena fe y la garantía de debido proceso restaurativo (REN-DOC-005).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-005"],
      },
      {
        sectionNumber: "8.2",
        title: "Deber Legal Irrenunciable ante Delitos y Abusos",
        content:
          "Se establece con total claridad que el proceso eclesial de resolución de conflictos NUNCA impide, dilata ni obstaculiza:\n1. La denuncia inmediata ante la policía y autoridades judiciales de New Jersey ante la presunta comisión de delitos.\n2. El reporte obligatorio e inmediato de cualquier sospecha o indicio de abuso o negligencia infantil bajo N.J.S.A. 9:6-8.10 (1-877-NJ-ABUSE).\n3. La adopción inmediata de medidas cautelares para proteger a las víctimas y buscar atención médica o psicológica especializada.\n4. La confidencialidad pastoral jamás amparará el encubrimiento de delitos o conductas que atenten contra menores y personas vulnerables.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-005", "REN-DOC-016"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "PLENA PARTICIPACIÓN Y LIDERAZGO DE LAS MUJERES",
    description: "Garantiza la igualdad plena de acceso al liderazgo, la docencia, credenciales y ordenación ministerial.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "Igualdad Absoluta en el Liderazgo y Ministerio Femenino",
        content:
          "La Escuela de Líderes consagra la plena participación y autoridad ministerial de las mujeres en RENACER CHURCH. Las hermanas tienen derecho irrestricto a cursar el programa, graduarse, ejercer como líderes de Familias de Grupo, docentes, supervisoras, líderes de área, y avanzar hacia credenciales ministeriales y ordenación pastoral plena conforme a las Escrituras (Gálatas 3:28; Romanos 16:1-7) y la doctrina oficial de la iglesia.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-015", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006", "REN-DOC-010"],
      },
      {
        sectionNumber: "9.2",
        title: "Ministerios Específicos y Enfoque Integral",
        content:
          "La existencia de ministerios especializados (como el Ministerio de Mujeres 'Damas de Honor' o el Ministerio de Hombres 'Hombres de Valor') responde a necesidades pedagógicas y relacionales de edificación, sin que ello limite en absoluto la presencia femenina en los órganos directivos, púlpitos y altares de la congregación.",
        decisionIds: ["DEC-DEF-015"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "ARQUITECTURA DE LOS LIBROS DEL MAESTRO Y DEL ESTUDIANTE",
    description: "Define las especificaciones de los materiales pedagógicos independientes del programa.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Especificación del Libro del Maestro de Liderazgo",
        content:
          "El Libro del Maestro de la Escuela de Líderes es un documento pedagógico integral e independiente para uso exclusivo de los instructores. Para cada uno de los 24 módulos contiene:\n1. Objetivos de aprendizaje y fundamentos exegéticos profundos.\n2. Desarrollo doctrinal completo con notas de fondo y referencias a REN-DOC-001 y REN-DOC-006.\n3. Guía de preguntas de debate, respuestas modelo y errores comunes de liderazgo a corregir.\n4. Dinámicas pedagógicas de aula, estudios de casos y laboratorios prácticos.\n5. Rúbricas de evaluación formativa de competencias y pautas de acompañamiento.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-005", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
      {
        sectionNumber: "10.2",
        title: "Especificación del Libro del Estudiante de Liderazgo",
        content:
          "El Libro del Estudiante es el manual de formación personal del líder. Para cada una de las 24 lecciones incluye:\n1. Objetivos de la lección y textos bíblicos impresos.\n2. Resúmenes doctrinales accesibles y espacio amplio para notas de clase.\n3. Cuestionarios de estudio personal, lecturas complementarias y bitácora devocional.\n4. Guías de aplicación práctica en la Familia de Grupo y en su ministerio de servicio.\n5. Hojas de autoevaluación de competencias y registro de prácticas ministeriales.",
        decisionIds: ["DEC-DEF-013"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "SISTEMA DE EVALUACIÓN, PRÁCTICAS MINISTERIALES Y CERTIFICACIÓN",
    description: "Norma los criterios de graduación, experiencia de campo y otorgamiento del Certificado Oficial.",
    sections: [
      {
        sectionNumber: "11.1",
        title: "Sistema de Evaluación Multidimensional de Liderazgo",
        content:
          "La evaluación en la Escuela de Líderes valora holísticamente:\n1. Conocimiento Doctrinal e Institucional (20%): Evaluaciones de comprensión bíblica y de los manuales.\n2. Carácter, Ética y Madurez Espiritual (25%): Testimonio comprobado, templanza y vida devocional.\n3. Práctica Ministerial y Facilitación (30%): Desempeño en Familias de Grupo, visitas y evangelismo.\n4. Capacidad de Formar a Otros (15%): Mentoreo efectivo de su líder asistente (2 Tim 2:2).\n5. Asistencia, Puntualidad y Participación (10%): Asistencia a las 2 clases semanales.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "11.2",
        title: "Requisitos de Práctica Ministerial Obligatoria",
        content:
          "Cada estudiante deberá completar satisfactoriamente durante los 6 meses:\n1. La facilitación guiada de un mínimo de sesiones en una Familia de Grupo.\n2. La realización de visitas pastorales acompañadas con su supervisor.\n3. La participación activa en iniciativas de evangelismo relacional.\n4. El mentoreo directo de un líder asistente documentado en REN-FORM-LID-007.\nNo se exigirá un número rígido o comercial de horas, sino la evidencia de competencia pastoral vivencial.",
        decisionIds: ["DEC-DEF-012", "DEC-DEF-013"],
        dependencies: ["REN-DOC-006"],
      },
      {
        sectionNumber: "11.3",
        title: "El Certificado de Finalización de la Escuela de Líderes",
        content:
          "Al aprobar los 24 módulos y contar con el aval del supervisor y del Consejo Ministerial, el estudiante recibirá en ceremonia pública el CERTIFICADO DE FINALIZACIÓN DE LA ESCUELA DE LÍDERES, suscrito por el Pastor Fundador y el Director de Liderazgo. Este certificado habilita para ser nombrado formalmente Líder de Familia de Grupo o Servidor Titular, y califica como requisito previo para postular a la ruta ministerial del Seminario Bíblico RENACER.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-013", "DEC-DEF-016"],
        dependencies: ["REN-DOC-004", "REN-DOC-006", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "CUERPO DOCENTE, REGISTROS ACADÉMICOS Y RÉGIMEN LEGAL",
    description: "Norma el perfil de los profesores, la custodia documental y las reservas jurídicas.",
    sections: [
      {
        sectionNumber: "12.1",
        title: "Perfil, Selección y Supervisión de Docentes",
        content:
          "Los docentes de la Escuela de Líderes deben ser ministros ordenados, pastores o líderes graduados de alto calibre espiritual y académico, con testimonio intachable y adhesión absoluta a la Declaración de Fe (REN-DOC-001). Serán designados por el Pastor Fundador y el Consejo Ministerial (`REN-DOC-006` / `REN-DOC-009`), sin que la docencia confiera facultades de administración patrimonial reservadas a los Trustees.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-013"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "12.2",
        title: "Custodia de Expedientes, Privacidad y Estado Legal",
        content:
          "Los legajos personales de los líderes, calificaciones, bitácoras de mentoreo e informes de supervisión serán resguardados bajo estricta confidencialidad por la Secretaría de Liderazgo y el Archivo General (REN-DOC-019). El presente documento ostenta el estado legal formal REQUIERE_REVISION_LEGAL para garantizar su compatibilidad integral con la legislación sin fines de lucro del Estado de New Jersey y las normas federales de privacidad.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-012", "DEC-DEF-013"],
        dependencies: ["REN-DOC-003", "REN-DOC-019"],
        legalReviewRequired: true,
      },
    ],
  },
];

// ============================================================================
// OBJETO BORRADOR MAESTRO COMPLETO (REN-DOC-008)
// ============================================================================

export const FULL_LEADERS_PROGRAM_DRAFT: MasterLeadersProgramDraft = {
  code: "REN-DOC-008",
  id: "doc-ren-008",
  title: "PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER",
  shortTitle: "Programa de la Escuela de Líderes",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "LIDERAZGO",
  author: "Pastor Fundador / Consejo Ministerial",
  authorId: "usr-fundador-001",
  responsibleArea: "DIRECCION_LIDERAZGO_Y_MINISTERIOS",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "PROGRAMA_ACADEMICO",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER CHURCH (REN-DOC-008) establece el marco institucional, pedagógico y normativo para el desarrollo, forja del carácter y capacitación operativa de los líderes de la iglesia. Fundamentado en las Sagradas Escrituras y en estricta coherencia con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Manual de Gobierno (REN-DOC-004), el Manual de Membresía (REN-DOC-005), el Manual de Ministerios y Liderazgo (REN-DOC-006) y el Programa de la Escuela de Discípulos (REN-DOC-007), este programa estructura una formación intensiva de 6 meses lectivos (2 clases por semana) distribuidos en tres niveles formativos: Servidor, Carácter y Discipulado; Familias de Grupo y Multiplicación; y Liderazgo Ministerial, Ética, Conflictos y Responsabilidad. Su principio rector inquebrantable es 'Formar Formadores' (2 Timoteo 2:2) para equipar líderes siervos que multipliquen el Reino de Dios, protegiendo con celo la dignidad de las personas y respetando los límites pastorales frente a cualquier abuso de poder.",
  durationMonths: 6,
  classesPerWeek: 2,
  levelsCount: 3,
  titles: MASTER_LEADERS_PROGRAM_TITLES,
  modules: LEADERS_MODULES_CATALOG,
  curricularMatrix: LEADERS_CURRICULAR_MATRIX,
  competencyMatrix: LEADERS_COMPETENCY_MATRIX,
  futureForms: LEADERS_FUTURE_FORMS_CATALOG,
};

export const LEADERS_SCHOOL_PROGRAM_DRAFT = FULL_LEADERS_PROGRAM_DRAFT;

export function getAllLeadersProgramSections(): LeadersManualSection[] {
  return MASTER_LEADERS_PROGRAM_TITLES.flatMap((t) => t.sections);
}

// ============================================================================
// GENERADOR DE MARKDOWN COMPLETO PARA VISOR Y SISTEMA DOCUMENTAL
// ============================================================================

export function generateFullLeadersProgramMarkdown(): string {
  const prog = FULL_LEADERS_PROGRAM_DRAFT;
  let md = `# ${prog.title}\n\n`;
  md += `**Código:** ${prog.code} | **Versión:** v${prog.version} | **Jerarquía:** ${prog.hierarchyLevel}\n`;
  md += `**Estado de Trabajo:** ${prog.status} | **Estado de Adopción:** ${prog.adoptionStatus}\n`;
  md += `**Estado Legal:** ${prog.legalState} | **Duración Total:** ${prog.durationMonths} Meses (${prog.classesPerWeek} clases/semana • 3 Niveles / 24 Módulos)\n\n`;
  md += `> **ADVERTENCIA INSTITUCIONAL Y LEGAL:** Documento institucional en fase de redacción técnica preliminar (v0.1). No adoptado formalmente. Requiere revisión letrada integral previa a su adopción definitiva.\n\n`;
  md += `## PREÁMBULO\n\n${prog.preamble}\n\n---\n\n`;

  for (const title of prog.titles) {
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

  md += `## MATRIZ CURRICULAR GENERAL (24 MÓDULOS EN 3 NIVELES)\n\n`;
  md += `| Nivel | Código | Módulo y Tema | Objetivo General | Tarea Práctica Ministerial | Método de Evaluación |\n`;
  md += `|---|---|---|---|---|---|\n`;
  for (const row of prog.curricularMatrix) {
    md += `| **${row.nivel}** | **${row.codigo}** | ${row.modulo} | ${row.objetivo} | ${row.practica} | ${row.evaluacion} |\n`;
  }
  md += `\n---\n\n`;

  md += `## MAPA Y MATRIZ DE COMPETENCIAS POR NIVEL\n\n`;
  md += `| Competencia Institucional | Nivel I (Servidor y Carácter) | Nivel II (Familias de Grupo) | Nivel III (Liderazgo y Ética) |\n`;
  md += `|---|---|---|---|\n`;
  for (const row of prog.competencyMatrix) {
    md += `| **${row.competencia}** | ${row.nivel1} | ${row.nivel2} | ${row.nivel3} |\n`;
  }
  md += `\n---\n\n`;

  md += `## DESARROLLO ANALÍTICO DE MÓDULOS (ARQUITECTURA DE CLASE)\n\n`;
  for (const m of prog.modules) {
    md += `### ${m.code}: ${m.moduleTitle}\n\n`;
    md += `**Nivel:** ${m.levelName} | **Carga Horaria Semanal:** ${m.weeklyHours} Horas\n\n`;
    md += `- **Texto Bíblico Base:** ${m.scripturalAnchor}\n`;
    md += `- **Tema Central:** ${m.theme}\n`;
    md += `- **Objetivo General:** ${m.generalObjective}\n`;
    md += `- **Objetivos Específicos:**\n`;
    for (const obj of m.specificObjectives) {
      md += `  * ${obj}\n`;
    }
    md += `- **Contenido Doctrinal y Pastoral:** ${m.lessonContent}\n`;
    md += `- **Actividad Pedagógica de Aula:** ${m.pedagogicalActivity}\n`;
    md += `- **Tarea y Aplicación Práctica:** ${m.practicalTask}\n`;
    md += `- **Método de Evaluación Formativa:** ${m.evaluationMethod}\n\n`;
  }
  md += `---\n\n`;

  md += `## CATÁLOGO DE FORMULARIOS FUTUROS DE LA ESCUELA DE LÍDERES\n\n`;
  md += `| Código | Nombre del Formulario | Propósito Principal | Responsable de Custodia | Período de Retención |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const form of prog.futureForms) {
    md += `| **${form.code}** | ${form.name} | ${form.purpose} | ${form.responsible} | ${form.retentionPeriod} |\n`;
  }
  md += `\n`;

  return md;
}
