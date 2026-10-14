// ============================================================================
// RENACER CHURCH MAESTRO — FASE 40
// REN-DOC-009: PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER
// BORRADOR OFICIAL COMPLETO — v0.1 (EN_REDACCION / NO ADOPTADA)
// ============================================================================

export interface SeminaryManualSection {
  sectionNumber: string;
  title: string;
  content: string;
  decisionIds: string[];
  dependencies: string[];
  practicalProtocol?: string;
  pendingDefinitionNotes?: string;
  legalReviewRequired?: boolean;
}

export interface SeminaryModuleDefinition {
  moduleNumber: number;
  code: string;
  level: "NIVEL_I" | "NIVEL_II" | "NIVEL_III" | "NIVEL_IV";
  levelName: string;
  moduleTitle: string;
  theme: string;
  scripturalAnchor: string;
  generalObjective: string;
  specificObjectives: string[];
  competencies: string[];
  weeklyHours: number;
  lessonContent: string;
  bibliography: string[];
  pedagogicalActivity: string;
  practicalTask: string;
  evaluationMethod: string;
  legalReviewRequired?: boolean;
}

export interface SeminaryCurricularMatrixRow {
  nivel: string;
  modulo: string;
  codigo: string;
  objetivos: string;
  competencias: string;
  practica: string;
  evaluacion: string;
}

export interface SeminaryCompetencyMatrixRow {
  competencia: string;
  nivel1: string;
  nivel2: string;
  nivel3: string;
  nivel4: string;
}

export interface SeminaryFutureFormDefinition {
  code: string;
  name: string;
  purpose: string;
  responsible: string;
  retentionPeriod: string;
}

export interface SeminaryProgramTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: SeminaryManualSection[];
}

export interface SeminaryLevelData {
  levelNumber: number;
  levelId: string;
  levelTitle: string;
  duration: string;
  objective: string;
  modules: {
    code: string;
    title: string;
    theme: string;
    classesCount: number;
    learningOutcomes: string[];
  }[];
}

export interface MasterSeminaryProgramDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  adoptionState: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "FORMACION_MINISTERIAL";
  author: "Pastor Fundador / Consejo Ministerial";
  authorId: "usr-fundador-001";
  responsibleArea: "DIRECCION_SEMINARIO_BIBLICO";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "PROGRAMA_ACADEMICO";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  durationMonths: 12;
  durationYears: 1;
  durationDescription: string;
  classesPerWeek: 2;
  annualClasses: 104;
  totalClassesAnnual: 104;
  levelsCount: 4;
  modulesCount: 12;
  titles: SeminaryProgramTitle[];
  modules: SeminaryModuleDefinition[];
  curricularMatrix: SeminaryCurricularMatrixRow[];
  competencyMatrix: SeminaryCompetencyMatrixRow[];
  futureForms: SeminaryFutureFormDefinition[];
  classStructure: {
    componentsCount: number;
    components: string[];
  };
  booksArchitecture: {
    linkageRule: string;
    teacherBook: {
      codePrefix: string;
      isIndependentDocument: boolean;
      components: string[];
    };
    studentBook: {
      codePrefix: string;
      isIndependentDocument: boolean;
      components: string[];
    };
  };
  admissions: {
    requirements: string[];
    exceptionPolicy: string;
  };
  faculty: {
    profile: string;
    appointment: string;
  };
  academicRecords: {
    recordsKept: string[];
    relatedRegulation: string;
  };
  capstoneProject: {
    requirements: string[];
    nonClericalOrdinationClause: string;
  };
  certification: {
    title: string;
    nonAutomaticPrivileges: string;
  };
  womenInMinistry: {
    fullAccess: boolean;
    statement: string;
  };
  pastoralCareLimits: {
    nonMedicalReplacement: boolean;
    mandatoryReferral: boolean;
    statement: string;
  };
}

// ============================================================================
// CATÁLOGO COMPLETO DE LOS 12 MÓDULOS CURRICULARES EN 4 NIVELES
// ============================================================================

export const SEMINARY_MODULES_CATALOG: SeminaryModuleDefinition[] = [
  // --------------------------------------------------------------------------
  // NIVEL I: FUNDAMENTOS BÍBLICOS Y TEOLÓGICOS (Módulos 1 al 3)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 1,
    code: "SEM-L1-M01",
    level: "NIVEL_I",
    levelName: "NIVEL I: FUNDAMENTOS BÍBLICOS Y TEOLÓGICOS",
    moduleTitle: "Introducción a la Biblia, Bibliología y Formación del Canon",
    theme: "Inspiración divina, inerrancia, preservación, transmisión del texto y canonicidad",
    scripturalAnchor: "2 Timoteo 3:16-17; 2 Pedro 1:20-21; Salmos 119:89, 105; Mateo 24:35",
    generalObjective: "Fundamentar la doctrina de las Sagradas Escrituras como la Palabra inerrante e inspirada por Dios, estudiando el proceso histórico de formación del canon del Antiguo y Nuevo Testamento.",
    specificObjectives: [
      "Comprender la teología de la revelación divina general y especial.",
      "Analizar los criterios históricos y espirituales de canonicidad bíblica.",
      "Defender la autoridad suprema, suficiencia y preservación providencial del texto bíblico frente a corrientes críticas.",
    ],
    competencies: [
      "Capacidad para explicar la naturaleza inspirada e inerrante de las Escrituras.",
      "Destreza en el manejo de la estructura histórica y transmisión textual de la Biblia.",
    ],
    weeklyHours: 2,
    lessonContent: "Definición de revelación e inspiración verbal plenaria; autógrafos y manuscritos; el canon hebreo (Tanaj) y el canon neotestamentario; historia de las traducciones bíblicas; la Biblia como regla infalible de fe y conducta (REN-DOC-001, Art. 1).",
    bibliography: [
      "Bruce, F.F. El Canon de las Escrituras. Editorial CLIE.",
      "Geisler, Norman & Nix, William. Introducción General a la Biblia. Editorial Portavoz.",
    ],
    pedagogicalActivity: "Análisis comparativo de manuscritos históricos y debate sobre la suficiencia escritural.",
    practicalTask: "Elaborar un ensayo exegético de 3 páginas sobre 2 Timoteo 3:16-17 defendiendo la inerrancia bíblica.",
    evaluationMethod: "Examen teórico-doctrinal y rúbrica de ensayo académico.",
  },
  {
    moduleNumber: 2,
    code: "SEM-L1-M02",
    level: "NIVEL_I",
    levelName: "NIVEL I: FUNDAMENTOS BÍBLICOS Y TEOLÓGICOS",
    moduleTitle: "Panorama del Antiguo y Nuevo Testamento",
    theme: "Estructura teológica, narrativa de redención, pactos divinos y teología bíblica",
    scripturalAnchor: "Lucas 24:27, 44-47; Hebreos 1:1-2; Gálatas 4:4-5; Romanos 15:4",
    generalObjective: "Dominar la panorámica histórica, literaria y teológica de los 66 libros de la Biblia, trazando el hilo conductor de la redención mesiánica desde el Génesis hasta el Apocalipsis.",
    specificObjectives: [
      "Identificar los pactos bíblicos (Adánico, Noémico, Abrahámico, Mosaico, Davídico y Nuevo Pacto).",
      "Comprender los géneros literarios bíblicos (ley, historia, poesía, profecía, evangelios, epístolas, apocalipsis).",
      "Sintetizar el mensaje cristocéntrico de cada sección del canon sagrado.",
    ],
    competencies: [
      "Habilidad para sintetizar y contextualizar cualquier pasaje bíblico en el marco redentor general.",
      "Destreza pedagógica para enseñar panoramas bíblicos a líderes y congregaciones.",
    ],
    weeklyHours: 2,
    lessonContent: "El Pentateuco y los orígenes; la teocracia e historia de Israel; la literatura sapiencial; los profetas mayores y menores; el período intertestamentario; los Evangelios y Hechos; las Epístolas Paulinas y Generales; la consumación en el Apocalipsis.",
    bibliography: [
      "Archer, Gleason L. Reseña Crítica de una Introducción al Antiguo Testamento. Portavoz.",
      "Gundry, Robert H. Panorama del Nuevo Testamento. Editorial Vida.",
    ],
    pedagogicalActivity: "Construcción en equipo de una línea de tiempo redentora y mapa de pactos bíblicos.",
    practicalTask: "Diseñar una guía pedagógica de 4 lecciones panorámicas del Nuevo Testamento para Familias de Grupo.",
    evaluationMethod: "Evaluación de mapas conceptuales bíblicos y examen de contenido canónico.",
  },
  {
    moduleNumber: 3,
    code: "SEM-L1-M03",
    level: "NIVEL_I",
    levelName: "NIVEL I: FUNDAMENTOS BÍBLICOS Y TEOLÓGICOS",
    moduleTitle: "Hermenéutica Bíblica y Métodos de Exégesis",
    theme: "Principios de interpretación gramático-histórica, géneros literarios y aplicación pastoral",
    scripturalAnchor: "2 Timoteo 2:15; Nehemías 8:8; 2 Pedro 3:15-16; Hechos 8:30-35",
    generalObjective: "Capacitar al estudiante en las reglas científicas y espirituales de la hermenéutica bíblica, aplicando el método gramático-histórico-teológico para extraer el significado original del texto.",
    specificObjectives: [
      "Diferenciar entre exégesis fiel e eiségesis subjetiva.",
      "Analizar el contexto histórico, cultural, geográfico y literario de los textos sagrados.",
      "Construir puentes hermenéuticos legítimos entre el texto original y la aplicación contemporánea.",
    ],
    competencies: [
      "Competencia para realizar análisis exegéticos rigurosos utilizando herramientas léxicas y contextuales.",
      "Capacidad para evitar y corregir interpretaciones torcidas, alegorizaciones abusivas o legalistas.",
    ],
    weeklyHours: 2,
    lessonContent: "Definición e historia de la hermenéutica; el principio de la analogía de la fe (la Escritura interpreta a la Escritura); análisis léxico y sintáctico; figuras de dicción; interpretación de parábolas, tipos y profecías; el rol del Espíritu Santo en la iluminación.",
    bibliography: [
      "Fee, Gordon D. & Stuart, Douglas. La Lectura Eficaz de la Biblia. Editorial Vida.",
      "Virkler, Henry A. Hermenéutica: Principios y Procesos de Interpretación Bíblica. Editorial Vida.",
    ],
    pedagogicalActivity: "Laboratorio exegético: análisis guiado paso a paso de un pasaje controversial.",
    practicalTask: "Elaborar una monografía exegética completa de 5 páginas sobre un pasaje epístolar asignado.",
    evaluationMethod: "Rúbrica de evaluación exegética y defensa metodológica oral.",
  },

  // --------------------------------------------------------------------------
  // NIVEL II: ESPÍRITU SANTO Y MINISTERIO (Módulos 4 al 6)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 4,
    code: "SEM-L2-M01",
    level: "NIVEL_II",
    levelName: "NIVEL II: ESPÍRITU SANTO Y MINISTERIO",
    moduleTitle: "Teología Propia: Doctrina de Dios y la Santísima Trinidad",
    theme: "Atributos divinos, soberanía, deidad y la doctrina trinitaria conforme a REN-DOC-001",
    scripturalAnchor: "Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14; Juan 1:1-3, 14",
    generalObjective: "Profundizar en la Teología Propia, estudiando la existencia, naturaleza, atributos inmanentes y económicos del Dios Trino: Padre, Hijo y Espíritu Santo.",
    specificObjectives: [
      "Exponer la doctrina de la Trinidad (un solo Dios en tres Personas coeternas y consustanciales).",
      "Analizar los atributos incomunicables (aseidad, inmutabilidad, eternidad) y comunicables de Dios.",
      "Refutar herejías históricas y contemporáneas (modalismo, arrianismo, triteísmo, unitarismo).",
    ],
    competencies: [
      "Dominio doctrinal de la Teología Propia conforme a la Declaración de Fe institucional.",
      "Capacidad para responder con solidez bíblica a objeciones teológicas contra la Trinidad.",
    ],
    weeklyHours: 2,
    lessonContent: "El Dios que se revela; los nombres de Dios en el Antiguo Testamento; la doctrina trinitaria en los Concilios ecuménicos y la Reforma; la soberanía divina, providencia y gobierno del cosmos; el decreto de Dios y la creación ex nihilo (REN-DOC-001, Art. 2).",
    bibliography: [
      "Berkhof, Louis. Teología Sistemática. Libros Desafío.",
      "Erickson, Millard J. Teología Cristiana. Editorial CLIE.",
    ],
    pedagogicalActivity: "Debate doctrinal guiado sobre la formulación trinitaria clásica frente a desvíos modernos.",
    practicalTask: "Redactar un folleto formativo para nuevos creyentes explicando con analogías bíblicas el Dios Trino.",
    evaluationMethod: "Evaluación escrita de Teología Sistemática y ensayo monográfico.",
  },
  {
    moduleNumber: 5,
    code: "SEM-L2-M02",
    level: "NIVEL_II",
    levelName: "NIVEL II: ESPÍRITU SANTO Y MINISTERIO",
    moduleTitle: "Cristología, Soteriología y Vida en el Espíritu",
    theme: "La persona y obra de Cristo, expiación sustitutiva, justificación por fe y santificación",
    scripturalAnchor: "Romanos 3:21-26; 2 Corintios 5:17-21; Filipenses 2:5-11; Hebreos 2:14-18",
    generalObjective: "Estudiar la doble naturaleza de Jesucristo (100% Dios y 100% hombre), su obra expiatoria perfecta en la cruz, la doctrina de la justificación por gracia mediante la fe y la regeneración por el Espíritu.",
    specificObjectives: [
      "Comprender la unión hipostática y los oficios de Cristo (Profeta, Sacerdote y Rey).",
      "Analizar la doctrina de la expiación sustitutiva penal y la resurrección corporal de Cristo.",
      "Articular el 'Ordo Salutis' (llamamiento, regeneración, fe, arrepentimiento, justificación, adopción, santificación y glorificación).",
    ],
    competencies: [
      "Capacidad para articular con precisión teológica el Evangelio de la gracia soberana.",
      "Habilidad pastoral para aconsejar en temas de seguridad de salvación y santificación progresiva.",
    ],
    weeklyHours: 2,
    lessonContent: "La encarnación y nacimiento virginal; la vida sin pecado de Jesús; teorías de la expiación; la justificación imputada no basada en méritos humanos (REN-DOC-001, Art. 3 y 6); la santificación posicional y progresiva (Art. 11); las ordenanzas eclesiales: Bautismo en agua por inmersión (Art. 7) y Santa Cena (Art. 8).",
    bibliography: [
      "Stott, John. La Cruz de Cristo. Ediciones Certeza Unida.",
      "Grudem, Wayne. Teología Sistemática: Una Introducción a la Doctrina Bíblica. Vida.",
    ],
    pedagogicalActivity: "Taller sobre el orden de salvación y articulación del mensaje de gracia frente al legalismo.",
    practicalTask: "Elaborar una guía de estudio pastoral de 3 lecciones sobre la justificación y santificación en Romanos 6-8.",
    evaluationMethod: "Examen de Cristología y Soteriología, y presentación de guía pastoral.",
  },
  {
    moduleNumber: 6,
    code: "SEM-L2-M03",
    level: "NIVEL_II",
    levelName: "NIVEL II: ESPÍRITU SANTO Y MINISTERIO",
    moduleTitle: "Neumatología, Dones Espirituales, Sanidad y Orden Litúrgico",
    theme: "La persona del Espíritu Santo, bautismo, dones carismáticos, discernimiento y orden eclesial",
    scripturalAnchor: "Hechos 1:8; Hechos 2:1-4; 1 Corintios 12; 1 Corintios 14:1-40; Santiago 5:14-16",
    generalObjective: "Profundizar en la Neumatología bíblica, afirmando la continuidad de los dones del Espíritu Santo (lenguas, profecía, sanidad, milagros) bajo estricto orden bíblico, discernimiento pastoral y amor fraternal.",
    specificObjectives: [
      "Comprender la deidad y personalidad del Espíritu Santo y su obra regeneradora y empoderadora.",
      "Estudiar el bautismo en el Espíritu Santo como investidura de poder para el testimonio ministerial (REN-DOC-001, Art. 9).",
      "Clasificar y ejercer los dones espirituales (1 Corintios 12) con discernimiento y decencia litúrgica (1 Corintios 14).",
      "Fundamentar la doctrina de la sanidad divina en la expiación (REN-DOC-001, Art. 14) sin sensacionalismo.",
    ],
    competencies: [
      "Destreza pastoral para guiar a creyentes a la llenura del Espíritu Santo.",
      "Competencia para mantener el orden litúrgico y discernir manifestaciones espirituales en cultos y grupos.",
    ],
    weeklyHours: 2,
    lessonContent: "La personalidad del Paráclito; el bautismo en el Espíritu Santo en los Hechos de los Apóstoles; lenguas e interpretación; la profecía en el Nuevo Testamento (subordinada a la Escritura y juzgada por el presbiterio); oración por los enfermos y unción con aceite; proscripción de la manipulación emocional o coerción profética.",
    bibliography: [
      "Fee, Gordon D. Pablo, el Espíritu y el Pueblo de Dios. Editorial Vida.",
      "Menzies, William W. & Horton, Stanley M. Doctrinas Bíblicas: Una Perspectiva Pentecostal. Vida.",
    ],
    pedagogicalActivity: "Simulación de una reunión de oración y ministración con ejercicio ordenado de dones según 1 Corintios 14.",
    practicalTask: "Redactar un protocolo litúrgico para el ejercicio equilibrado de los dones en la iglesia local.",
    evaluationMethod: "Evaluación teológica sobre Neumatología y rúbrica de discernimiento litúrgico.",
  },

  // --------------------------------------------------------------------------
  // NIVEL III: PREDICACIÓN, ENSEÑANZA Y CUIDADO PASTORAL (Módulos 7 al 9)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 7,
    code: "SEM-L3-M01",
    level: "NIVEL_III",
    levelName: "NIVEL III: PREDICACIÓN, ENSEÑANZA Y CUIDADO PASTORAL",
    moduleTitle: "Homilética y Predicación Expositiva",
    theme: "La preparación, estructura, teología y elocuencia del sermón centrado en Cristo",
    scripturalAnchor: "2 Timoteo 4:1-5; 1 Corintios 2:1-5; Nehemías 8:8; Romanos 10:14-17",
    generalObjective: "Desarrollar competencias homiléticas avanzadas para investigar, estructurar y proclamar sermones bíblicos expositivos con unción, claridad y pertinencia contemporánea.",
    specificObjectives: [
      "Dominar los tipos de sermón: expositivo, temático-doctrinal y biográfico (priorizando el expositivo).",
      "Diseñar la arquitectura del sermón: Título, Proposición central, Introducción, Bosquejo, Ilustraciones, Aplicación y Conclusión.",
      "Perfeccionar la comunicación verbal, lenguaje corporal, uso de la voz y ética en el púlpito.",
    ],
    competencies: [
      "Capacidad para predicar sermones bíblicos sólidos que comuniquen fielmente la verdad del texto sagrado.",
      "Destreza comunicativa para conectar la Palabra con la realidad espiritual y existencial de la congregación.",
    ],
    weeklyHours: 2,
    lessonContent: "La teología de la predicación; el corazón y consagración del predicador; de la exégesis al bosquejo homilético; cómo formular la Gran Idea del sermón; el arte de la ilustración; la conclusión persuasiva; ética del predicador (evitar el plagio y la manipulación emocional).",
    bibliography: [
      "Chapell, Bryan. La Predicación Cristocéntrica. El Paso: Casa Bautista de Publicaciones.",
      "Robinson, Haddon W. La Predicación Bíblica. Editorial Unilit.",
    ],
    pedagogicalActivity: "Laboratorio de predicación en aula con grabación en video y retroalimentación entre pares.",
    practicalTask: "Predicar un sermón expositivo de 20 minutos ante el cuerpo docente y compañeros evaluadores.",
    evaluationMethod: "Rúbrica oficial de evaluación homilética (REN-FORM-SEM-006).",
  },
  {
    moduleNumber: 8,
    code: "SEM-L3-M02",
    level: "NIVEL_III",
    levelName: "NIVEL III: PREDICACIÓN, ENSEÑANZA Y CUIDADO PASTORAL",
    moduleTitle: "Pedagogía Bíblica, Evangelismo Estratégico y Discipulado",
    theme: "Metodologías de enseñanza activa, planes evangelísticos y multiplicación discipular",
    scripturalAnchor: "Mateo 28:19-20; Colosenses 1:28; Esdras 7:10; 2 Timoteo 2:2",
    generalObjective: "Equipar al ministro en pedagogía cristiana transformadora, diseño de planes de estudio eclesiásticos y estrategias efectivas de evangelismo y discipulado reproductivo.",
    specificObjectives: [
      "Aplicar principios pedagógicos modernos y andragogía (educación de adultos) a la enseñanza bíblica.",
      "Diseñar materiales curriculares y planes de clase interactivos (Libro del Maestro / Libro del Estudiante).",
      "Estructurar planes maestros de evangelismo congregacional y seguimiento de discípulos.",
    ],
    competencies: [
      "Habilidad para diseñar y dictar cursos formativos de alto impacto pedagógico en la iglesia.",
      "Liderazgo en la movilización evangelística y coordinación de programas de discipulado.",
    ],
    weeklyHours: 2,
    lessonContent: "El maestro según el Nuevo Testamento; teorías del aprendizaje aplicadas a la iglesia; formulación de objetivos pedagógicos; elaboración de guías de estudio; métodos evangelísticos personales y masivos; articulación con las Familias de Grupo y la Escuela de Líderes.",
    bibliography: [
      "Hendricks, Howard. Enseñando para Cambiar Vidas. Editorial Unilit.",
      "Gangel, Kenneth O. Entrenando a Líderes en la Iglesia. Casa Bautista.",
    ],
    pedagogicalActivity: "Diseño y micro-clase de 15 minutos demostrando el uso de dinámicas pedagógicas participativas.",
    practicalTask: "Elaborar un módulo completo de clase con guía del maestro, guía del estudiante y rúbrica.",
    evaluationMethod: "Rúbrica de evaluación pedagógica y didáctica (REN-FORM-SEM-007).",
  },
  {
    moduleNumber: 9,
    code: "SEM-L3-M03",
    level: "NIVEL_III",
    levelName: "NIVEL III: PREDICACIÓN, ENSEÑANZA Y CUIDADO PASTORAL",
    moduleTitle: "Teología del Cuidado Pastoral, Matrimonio, Familia y Consejería",
    theme: "El pastoreo de personas en crisis, consejería bíblica, duelo y límites ético-legales",
    scripturalAnchor: "1 Tesalonicenses 2:7-12; Gálatas 6:1-2; Efesios 5:21-33; Santiago 5:13-16",
    generalObjective: "Formar pastores y ministros con corazón compasivo y sólidas destrezas de consejería bíblica para atender matrimonios, familias y creyentes en crisis, reconociendo con rigor los límites profesionales y legales.",
    specificObjectives: [
      "Dominar las técnicas de consejería pastoral bíblica basada en la gracia y la verdad de la Escritura.",
      "Acompañar procesos de duelo, divorcio, enfermedades terminales y crisis familiares.",
      "Reconocer con total claridad los límites entre el cuidado pastoral y la atención psiquiátrica o médica, aplicando el protocolo estricto de derivación profesional.",
    ],
    competencies: [
      "Capacidad para brindar consejería pastoral y prematrimonial bíblica, empática y discreta.",
      "Discernimiento ético para no traspasar competencias reservadas a profesionales médicos o de salud mental.",
    ],
    weeklyHours: 2,
    lessonContent: "El modelo del Buen Pastor; fundamentos del matrimonio cristiano y la familia (REN-DOC-001, Art. 16); protocolo de consejería prematrimonial; escucha activa en el duelo; acompañamiento hospitalario; ética del secreto pastoral y sus límites legales (reporte de abusos a menores); derivación profesional oportuna.",
    bibliography: [
      "Adams, Jay E. Capacitados para Aconsejar. Editorial Portavoz.",
      "Collins, Gary R. Consejería Psicológica Cristiana. Editorial Unilit.",
    ],
    pedagogicalActivity: "Simulación de sesiones de consejería matrimonial y manejo de casos de derivación urgente.",
    practicalTask: "Realizar un plan de acompañamiento pastoral para una familia en situación de pérdida o crisis.",
    evaluationMethod: "Evaluación de protocolos de consejería y análisis de casos éticos.",
  },

  // --------------------------------------------------------------------------
  // NIVEL IV: MINISTERIO Y SISTEMA RENACER (Módulos 10 al 12)
  // --------------------------------------------------------------------------
  {
    moduleNumber: 10,
    code: "SEM-L4-M01",
    level: "NIVEL_IV",
    levelName: "NIVEL IV: MINISTERIO Y SISTEMA RENACER",
    moduleTitle: "Eclesiología, Gobierno Institucional y Sistema Normativo RENACER",
    theme: "La doctrina de la Iglesia, gobernanza, Constitución, Bylaws y manuales de RENACER",
    scripturalAnchor: "Efesios 4:11-16; 1 Timoteo 3:14-15; Hechos 15:1-29; 1 Pedro 5:1-5",
    generalObjective: "Comprender a fondo la Eclesiología bíblica y el sistema constitucional y de gobierno de RENACER CHURCH, capacitando al ministro para operar fielmente dentro de la estructura institucional.",
    specificObjectives: [
      "Dominar la teología de la Iglesia universal y local (REN-DOC-001, Art. 12) y los Cinco Ministerios (Art. 13).",
      "Conocer el marco normativo: Constitución (REN-DOC-002), Bylaws (REN-DOC-003) y Manual de Gobierno (REN-DOC-004).",
      "Identificar las competencias del Pastor Fundador, Consejo de Gobierno (Board of Trustees), Consejo Ministerial y Asamblea General.",
    ],
    competencies: [
      "Capacidad para liderar y administrar en total sujeción a los estatutos y normativas de RENACER.",
      "Comprensión de los procedimientos institucionales de ordenación, membresía y administración fiduciaria.",
    ],
    weeklyHours: 2,
    lessonContent: "Naturaleza, marcas y misión de la Iglesia; modelos históricos de gobierno eclesial; el modelo episcopal-presbiteriano equilibrado de RENACER; articulación de los 20 documentos institucionales; el rol de los Trustees y la gobernanza fiduciaria bajo las leyes de New Jersey.",
    bibliography: [
      "Clowney, Edmund P. La Iglesia. Editorial Andamio.",
      "Renacer Church. Código Documental Institucional (REN-DOC-001 a 007).",
    ],
    pedagogicalActivity: "Taller práctico sobre interpretación y aplicación de artículos constitucionales y bylaws de RENACER.",
    practicalTask: "Elaborar un informe analítico sobre el funcionamiento del Consejo Ministerial y su relación con el Pastor Fundador.",
    evaluationMethod: "Examen de Eclesiología y Derecho Eclesiástico de RENACER.",
  },
  {
    moduleNumber: 11,
    code: "SEM-L4-M02",
    level: "NIVEL_IV",
    levelName: "NIVEL IV: MINISTERIO Y SISTEMA RENACER",
    moduleTitle: "Ética Pastoral Avanzada, Resolución de Conflictos y Salvaguardas",
    theme: "Integridad del ministro, prevención de abusos, mediación y cumplimiento legal",
    scripturalAnchor: "1 Timoteo 6:11-12; 2 Corintios 6:3-10; Mateo 18:15-17; Tito 2:7-8",
    generalObjective: "Forjar una ética ministerial inquebrantable, asegurando la integridad moral, financiera y de poder en el ministerio, dominando la mediación de conflictos y las salvaguardas legales de New Jersey.",
    specificObjectives: [
      "Consagrar la integridad del ministro en las áreas críticas: dinero, sexo, poder y fama.",
      "Aplicar los protocolos de Mateo 18 y el Manual de Membresía, Disciplina y Restauración (REN-DOC-005).",
      "Interiorizar las prohibiciones absolutas de control patrimonial, familiar, médico o profético (REN-DOC-006).",
      "Cumplir con las obligaciones legales de New Jersey sobre reporte obligatorio de abusos (N.J.S.A. 9:6-8.10 / REN-DOC-016).",
    ],
    competencies: [
      "Solvencia ética para conducir el ministerio con transparencia y pureza intachable.",
      "Competencia mediadora para resolver disputas eclesiales respetando el debido proceso.",
    ],
    weeklyHours: 2,
    lessonContent: "El código de ética del ministro; prevención del acoso, abusos y mala praxis pastoral; confidencialidad pastoral y sus excepciones legales irrenunciables; resolución de desacuerdos entre líderes; el proceso restaurativo; administración transparente de las finanzas de la iglesia sin private inurement.",
    bibliography: [
      "Trull, Joe E. & Carter, James E. Ética Ministerial: Buenos Ministros en un Mundo Difícil. Casa Bautista.",
      "Renacer Church. Manual de Membresía y Disciplina (REN-DOC-005).",
    ],
    pedagogicalActivity: "Análisis de casos éticos complejos y simulación de un tribunal de disciplina restaurativa.",
    practicalTask: "Firmar el Código Ético Ministerial Oficial de RENACER y redactar un ensayo sobre integridad en el ministerio.",
    evaluationMethod: "Aprobación obligatoria del Examen Ético-Institucional (100% de aciertos en salvaguardas legales).",
    legalReviewRequired: true,
  },
  {
    moduleNumber: 12,
    code: "SEM-L4-M03",
    level: "NIVEL_IV",
    levelName: "NIVEL IV: MINISTERIO Y SISTEMA RENACER",
    moduleTitle: "Ministerio Práctico Integrado y Proyecto Ministerial de Graduación",
    theme: "La integración de conocimientos, pasantía ministerial y defensa del proyecto de fin de seminario",
    scripturalAnchor: "2 Timoteo 4:5; 1 Pedro 4:10-11; 1 Corintios 15:58; Colosenses 4:17",
    generalObjective: "Integrar todo el corpus teológico, bíblico y pastoral mediante una práctica ministerial supervisada y la formulación, redacción y defensa oral de un Proyecto Ministerial de Graduación.",
    specificObjectives: [
      "Demostrar competencia integral en predicación, enseñanza, liderazgo de grupo y cuidado pastoral.",
      "Desarrollar un proyecto ministerial viable que responda a una necesidad real de la iglesia o comunidad.",
      "Sustentar el proyecto ministerial ante el tribunal examinador del Consejo Ministerial.",
    ],
    competencies: [
      "Capacidad demostrada para planificar, ejecutar y evaluar iniciativas ministeriales complejas.",
      "Aptitud comprobada para graduarse del Seminario Bíblico y postular a la ruta ministerial (REN-DOC-010).",
    ],
    weeklyHours: 2,
    lessonContent: "Metodología de proyectos ministeriales; diagnóstico eclesiológico y comunitario; formulación de visión, objetivos, presupuesto, cronograma e indicadores de impacto; pasantía supervisada en áreas de la iglesia; preparación de la memoria de grado y defensa oral ante el cuerpo pastoral.",
    bibliography: [
      "Barna, George. Liderazgo con Propósito. Editorial Caribe.",
      "Renacer Church. Manual de Ministerios y Liderazgo (REN-DOC-006).",
    ],
    pedagogicalActivity: "Talleres de asesoría y revisión metodológica del proyecto ministerial con tutores académicos.",
    practicalTask: "Completar la pasantía ministerial de 60 días y redactar la tesina/proyecto ministerial de 20 páginas.",
    evaluationMethod: "Defensa oral del Proyecto Ministerial de Graduación (REN-FORM-SEM-008) ante el tribunal examinador.",
  },
];

// ============================================================================
// MATRIZ CURRICULAR ACADÉMICA (12 MÓDULOS)
// ============================================================================

export const SEMINARY_CURRICULAR_MATRIX: SeminaryCurricularMatrixRow[] = SEMINARY_MODULES_CATALOG.map((m) => ({
  nivel: m.levelName,
  modulo: m.moduleTitle,
  codigo: m.code,
  objetivos: m.generalObjective,
  competencias: m.competencies.join(" | "),
  practica: m.practicalTask,
  evaluacion: m.evaluationMethod,
}));

// ============================================================================
// MATRIZ DE COMPETENCIAS INSTITUCIONALES DEL SEMINARIO (14 COMPETENCIAS)
// ============================================================================

export const SEMINARY_COMPETENCY_MATRIX: SeminaryCompetencyMatrixRow[] = [
  {
    competencia: "1. Interpretación Bíblica (Hermenéutica)",
    nivel1: "Aplica el método gramático-histórico, reconociendo contextos históricos y géneros literarios.",
    nivel2: "Integra la interpretación exegética con los fundamentos de la teología sistemática trinitaria.",
    nivel3: "Formula proposiciones exegéticas sólidas que sustentan la preparación de sermones bíblicos.",
    nivel4: "Interpreta y defiende textos complejos ante objeciones contemporáneas con rigor académico.",
  },
  {
    competencia: "2. Conocimiento Doctrinal",
    nivel1: "Domina la bibliología, inerrancia y el canon de los 66 libros del Antiguo y Nuevo Testamento.",
    nivel2: "Asimila y explica con solvencia la Teología Propia, Trinidad, Cristología y Neumatología.",
    nivel3: "Aplica la sana doctrina a la consejería pastoral, la predicación y la vida familiar.",
    nivel4: "Domina los 20 Artículos de Fe de REN-DOC-001 y la teología eclesiológica de RENACER.",
  },
  {
    competencia: "3. Teología Cristiana Sistemática",
    nivel1: "Estructura el pensamiento bíblico distinguiendo doctrina primaria, secundaria y terciaria.",
    nivel2: "Articula el 'Ordo Salutis' y la gracia soberana frente al legalismo y el liberalismo teológico.",
    nivel3: "Conecta la teología bíblica con los dilemas éticos y espirituales de la sociedad actual.",
    nivel4: "Formula síntesis teológicas aplicadas al gobierno eclesiástico y la misión eclesial.",
  },
  {
    competencia: "4. Predicación Homilética",
    nivel1: "Comprende la teología de la predicación y el bosquejo básico del mensaje bíblico.",
    nivel2: "Predica sermones devocionales cristocéntricos con unción y apego a la Escritura.",
    nivel3: "Diseña y proclama sermones expositivos estructurados con elocuencia, claridad e ilustraciones.",
    nivel4: "Predica series doctrinales y expositivas complejas con autoridad espiritual y unción pastoral.",
  },
  {
    competencia: "5. Pedagogía y Enseñanza Bíblica",
    nivel1: "Enseña lecciones bíblicas básicas con claridad y fidelidad textual.",
    nivel2: "Utiliza dinámicas pedagógicas y recursos didácticos para la enseñanza de doctrinas clave.",
    nivel3: "Diseña planes curriculares, guías del maestro y manuales de trabajo para estudiantes.",
    nivel4: "Capacita a maestros y docentes eclesiales, evaluando competencias pedagógicas de aula.",
  },
  {
    competencia: "6. Evangelismo Estratégico",
    nivel1: "Comparte el Evangelio de forma personal, clara y centrada en la cruz de Cristo.",
    nivel2: "Moviliza a creyentes en iniciativas de evangelismo relacional y amistad en la comunidad.",
    nivel3: "Organiza eventos puente y campañas evangelísticas articuladas con la iglesia local.",
    nivel4: "Formula estrategias integrales de alcance urbano, plantación de obras y misiones.",
  },
  {
    competencia: "7. Discipulado Reproductivo",
    nivel1: "Acompaña a nuevos convertidos en sus primeros pasos de fe usando REN-DOC-007.",
    nivel2: "Consolida creyentes y los guía hacia el bautismo en agua y el servicio activo.",
    nivel3: "Mentorea a líderes en formación mediante la metodología de 7 pasos de REN-DOC-006.",
    nivel4: "Diseña ecosistemas de discipulado multiplicador a nivel congregacional y regional.",
  },
  {
    competencia: "8. Cuidado Pastoral y Consejería",
    nivel1: "Muestra empatía, escucha activa y oración por los enfermos y necesitados.",
    nivel2: "Acompaña pastoralmente en visitas hogareñas y situaciones de duelo o desánimo.",
    nivel3: "Conduce consejería prematrimonial y matrimonial bíblica, respetando límites profesionales.",
    nivel4: "Maneja crisis pastorales complejas y ejecuta protocolos de derivación médica y legal.",
  },
  {
    competencia: "9. Liderazgo Siervo",
    nivel1: "Modela el carácter humilde de Cristo, priorizando el servicio abnegado sobre los cargos.",
    nivel2: "Lidera equipos de voluntarios con motivación bíblica, paciencia y buen testimonio.",
    nivel3: "Supervisa áreas ministeriales coordinando con supervisores y líderes de grupo.",
    nivel4: "Ejerce liderazgo estratégico institucional con visión pastoral y solvencia moral.",
  },
  {
    competencia: "10. Ética Ministerial e Integridad",
    nivel1: "Mantiene coherencia intachable en su vida privada, conyugal, financiera y social.",
    nivel2: "Maneja los recursos eclesiales con absoluta honestidad y rinde cuentas voluntarias.",
    nivel3: "Aplica de forma estricta las prohibiciones de control de REN-DOC-006 y guarda el secreto pastoral.",
    nivel4: "Resguarda la reputación de la iglesia y cumple la normativa legal sin inurement ni conflictos de interés.",
  },
  {
    competencia: "11. Resolución Bíblica de Conflictos",
    nivel1: "Busca la reconciliación personal inmediata aplicando Mateo 18:15 en privado.",
    nivel2: "Facilita la concordia fraternal en el equipo de trabajo previniendo malentendidos.",
    nivel3: "Media formalmente en disputas interpersonales con neutralidad, justicia y actas de acuerdo.",
    nivel4: "Interviene en procesos disciplinarios y comités de mediación restaurativa institucional.",
  },
  {
    competencia: "12. Eclesiología y Gobierno Eclesial",
    nivel1: "Valora la iglesia local como cuerpo de Cristo y se somete a sus autoridades bíblicas.",
    nivel2: "Comprende la naturaleza de las ordenanzas eclesiales y el rol del presbiterio.",
    nivel3: "Domina el organigrama y las líneas de supervisión pastoral de RENACER.",
    nivel4: "Aplica la Constitución (REN-DOC-002), Bylaws (REN-DOC-003) y Manual de Gobierno (REN-DOC-004).",
  },
  {
    competencia: "13. Ministerio Práctico y Gestión",
    nivel1: "Sirve fielmente en las actividades litúrgicas y logísticas asignadas con puntualidad.",
    nivel2: "Planifica y dirige reuniones de Familias de Grupo con orden y calidez.",
    nivel3: "Coordina programas ministeriales sectoriales administrando presupuestos y calendarios.",
    nivel4: "Ejecuta y defiende con éxito un Proyecto Ministerial Integrado de fin de carrera.",
  },
  {
    competencia: "14. Formación de Nuevos Líderes",
    nivel1: "Identifica creyentes con potencial de servicio y los anima a capacitarse.",
    nivel2: "Delega responsabilidades iniciales en asistentes bajo supervisión cercana.",
    nivel3: "Aplica el ciclo completo de 7 pasos, graduando nuevos formadores (2 Timoteo 2:2).",
    nivel4: "Desarrolla cuadros ministeriales y prepara candidatos idóneos para el Seminario y el ministerio.",
  },
];

// ============================================================================
// CATÁLOGO DE FORMULARIOS FUTUROS DEL SEMINARIO BÍBLICO (10 FORMULARIOS)
// ============================================================================

export const SEMINARY_FUTURE_FORMS_CATALOG: SeminaryFutureFormDefinition[] = [
  {
    code: "REN-FORM-SEM-001",
    name: "Solicitud de Admisión al Seminario Bíblico RENACER",
    purpose: "Postulación formal del candidato, verificación de requisitos (fe, bautismo por inmersión, membresía activa, egreso de Escuela de Discípulos y Líderes), carta testimonial y entrevista pastoral.",
    responsible: "Secretaría Académica del Seminario / Consejo Ministerial",
    retentionPeriod: "Permanente en legajo ministerial",
  },
  {
    code: "REN-FORM-SEM-002",
    name: "Expediente y Legajo Académico del Estudiante",
    purpose: "Registro individual del estudiante con historial de matrículas, convalidaciones, actas de notas y seguimiento vocacional.",
    responsible: "Secretaría Académica",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-SEM-003",
    name: "Registro Oficial de Asistencia y Participación",
    purpose: "Control semanal y bimestral de asistencia a las clases lectivas del seminario (2 clases por semana).",
    responsible: "Docente Titular / Coordinador Académico",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-SEM-004",
    name: "Acta y Registro Oficial de Calificaciones por Módulo",
    purpose: "Consignación de notas de exámenes, ensayos, monografías y laboratorios de cada materia.",
    responsible: "Docente de la Materia / Director Académico",
    retentionPeriod: "Permanente en archivo institucional",
  },
  {
    code: "REN-FORM-SEM-005",
    name: "Ficha de Evaluación de Práctica Ministerial Supervisada",
    purpose: "Evaluación cualitativa y cuantitativa del desempeño práctico del estudiante en ministerios y grupos.",
    responsible: "Pastor Supervisor de Práctica",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-SEM-006",
    name: "Rúbrica de Evaluación de Predicación Homilética",
    purpose: "Instrumento estandarizado de evaluación de sermones expositivos (exégesis, estructura, elocuencia, aplicación).",
    responsible: "Docente de Homilética / Tribunal de Predicación",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-SEM-007",
    name: "Rúbrica de Evaluación de Didáctica y Enseñanza Bíblica",
    purpose: "Instrumento de evaluación de competencias pedagógicas y micro-clases de enseñanza bíblica.",
    responsible: "Docente de Pedagogía Bíblica",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-SEM-008",
    name: "Acta de Aprobación y Defensa del Proyecto Ministerial Final",
    purpose: "Dictamen formal del tribunal examinador sobre la tesina y proyecto ministerial de graduación.",
    responsible: "Tribunal Examinador / Consejo Ministerial",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-SEM-009",
    name: "Acta General de Graduación y Finalización Académica",
    purpose: "Certificación solemne de cumplimiento total de los 4 niveles y 12 módulos del seminario.",
    responsible: "Rector del Seminario / Pastor Fundador",
    retentionPeriod: "Permanente en archivo histórico",
  },
  {
    code: "REN-FORM-SEM-010",
    name: "Solicitud y Emisión del Certificado del Seminario Bíblico",
    purpose: "Trámite de emisión del Diploma Oficial de Finalización del Seminario Bíblico RENACER.",
    responsible: "Secretaría General / Pastor Fundador",
    retentionPeriod: "Permanente",
  },
];

// ============================================================================
// TÍTULOS Y SECCIONES NORMATIVAS DEL PROGRAMA OFICIAL (12 TÍTULOS)
// ============================================================================

export const MASTER_SEMINARY_PROGRAM_TITLES: SeminaryProgramTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, MISIÓN Y PROPÓSITO DEL SEMINARIO BÍBLICO RENACER",
    description: "Establece los fines teológicos e institucionales de la formación ministerial superior de RENACER.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Misión y Propósito Teológico del Seminario",
        content:
          "El PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER (REN-DOC-009) establece la arquitectura académica, curricular y formativa superior de la iglesia. Su misión es formar a creyentes llamados por Dios con un conocimiento profundo e inerrante de las Sagradas Escrituras, una teología trinitaria sólida, destrezas homiléticas y pedagógicas de excelencia, un corazón pastoral compasivo y un compromiso inquebrantable con la ética, el liderazgo siervo y la estructura institucional de RENACER.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004", "REN-DOC-006", "REN-DOC-007", "REN-DOC-008"],
      },
      {
        sectionNumber: "1.2",
        title: "Delimitación Institucional y Relación con REN-DOC-010",
        content:
          "Se consagra formalmente la distinción entre formación académica y credencialización ministerial:\n1. El Seminario Bíblico proporciona FORMACIÓN BÍBLICA Y MINISTERIAL rigurosa.\n2. La culminación de los estudios NO CONFIERE AUTOMÁTICAMENTE: licencia ministerial, ordenación pastoral, credenciales eclesiásticas ni cargos o asignaciones pastorales remuneradas.\n3. El proceso de evaluación vocacional, emisión de credenciales y ordenación pastoral se rige de forma independiente y exclusiva por el Reglamento de Credenciales Ministeriales (REN-DOC-010).\n4. El Certificado de Finalización del Seminario constituye un requisito académico indispensable pero no suficiente por sí solo para la ordenación presbiteral.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-016", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-006", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "DURACIÓN, RÉGIMEN ACADÉMICO Y ESTRUCTURA DE LOS CUATRO NIVELES",
    description: "Norma el plan de 1 año lectivo, 12 módulos mensuales, régimen de 2 clases por semana y 4 niveles.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Duración de 1 Año y Régimen de 104 Clases Anuales",
        content:
          "El programa regular del Seminario Bíblico tiene una duración mínima de un (1) año lectivo (12 meses calendario), distribuido en un régimen académico de dos (2) clases lectivas semanales (aproximadamente 104 sesiones al año / 208 horas cátedra presenciales o sincrónicas), complementadas con laboratorios exegéticos, prácticas ministeriales y horas de investigación personal.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "2.2",
        title: "Estructura Secuencial de los Cuatro Niveles Académicos",
        content:
          "El plan curricular se organiza en cuatro (4) niveles progresivos de tres (3) meses de duración cada uno:\n\n* NIVEL I: FUNDAMENTOS BÍBLICOS Y TEOLÓGICOS (Módulos SEM-L1-M01 a M03)\n* NIVEL II: ESPÍRITU SANTO Y MINISTERIO (Módulos SEM-L2-M01 a M03)\n* NIVEL III: PREDICACIÓN, ENSEÑANZA Y CUIDADO PASTORAL (Módulos SEM-L3-M01 a M03)\n* NIVEL IV: MINISTERIO Y SISTEMA RENACER (Módulos SEM-L4-M01 a M03)\n\nTotalizando 12 materias mensuales modulares obligatorias.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "ARQUITECTURA ACADÉMICA Y ESPECIFICACIÓN DE CLASES",
    description: "Define el desglose curricular desde el nivel institucional hasta la estructura de 13 partes de cada lección.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "La Pirámide Académica Institucional",
        content:
          "La arquitectura educativa del Seminario Bíblico responde a la siguiente jerarquía sistemática:\n\nSEMINARIO BÍBLICO RENACER\n   ↓\nNIVEL ACADÉMICO (4 Niveles)\n   ↓\nMATERIA / MÓDULO (12 Módulos)\n   ↓\nLIBROS INDEPENDIENTES (Libro del Maestro / Libro del Estudiante)\n   ↓\nCAPÍTULOS / UNIDADES TEMÁTICAS\n   ↓\nCLASES / SESIONES LECTIVAS\n   ↓\nPRÁCTICAS Y LABORATORIOS\n   ↓\nEVALUACIONES FORMATIVAS Y SUMATIVAS",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-004"],
      },
      {
        sectionNumber: "3.2",
        title: "Arquitectura Estándar de 13 Componentes por Clase",
        content:
          "Cada una de las sesiones de clase del Seminario Bíblico contendrá obligatoriamente 13 componentes pedagógicos:\n1. Código Oficial de la Lección.\n2. Título Temático.\n3. Objetivo General y Específicos de Aprendizaje.\n4. Texto Bíblico Base y Pasajes de Referencia.\n5. Introducción y Motivación.\n6. Desarrollo Exegético y Teológico de Fondo.\n7. Explicación Doctrinal y Contexto Histórico.\n8. Aplicación Ministerial Contemporánea.\n9. Preguntas de Reflexión y Diálogo Teológico.\n10. Actividad Práctica o Laboratorio de Aula.\n11. Tarea de Investigación y Estudio Personal.\n12. Criterio de Evaluación y Rúbrica Formativa.\n13. Bibliografía y Fuentes Académicas Recomendadas.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "ARQUITECTURA INDEPENDIENTE DE LIBROS DEL MAESTRO Y DEL ESTUDIANTE",
    description: "Norma la separación formal y vinculación técnica de los materiales impresos y digitales de las 12 materias.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "Especificación Técnica del Libro del Maestro",
        content:
          "Cada materia contará con un Libro del Maestro independiente para uso del profesorado. Incluirá: portada institucional, sílabo académico, objetivos y competencias, exégesis bíblica exhaustiva, notas teológicas de fondo (con referencias a REN-DOC-001), respuestas modelo a preguntas de debate, dinámicas pedagógicas de aula, rúbricas analíticas de calificación y criterios de evaluación.",
        decisionIds: ["DEC-DEF-005", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-004"],
      },
      {
        sectionNumber: "4.2",
        title: "Especificación Técnica del Libro del Estudiante",
        content:
          "Cada materia contará con un Libro del Estudiante como manual de trabajo personal. Incluirá: portada, objetivos de aprendizaje, síntesis doctrinal de las lecciones, textos bíblicos impresos, cuestionarios de estudio personal, lecturas complementarias guiadas, bitácora devocional, espacios amplios para notas de clase y proyectos prácticos.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-004"],
      },
      {
        sectionNumber: "4.3",
        title: "Independencia Editorial y Vinculación Digital",
        content:
          "El Libro del Maestro y el Libro del Estudiante son documentos formalmente independientes, con código propio, versión semántica propia, historial inmutable y PDF separado. Ambos se encuentran vinculados técnicamente en el sistema documental mediante los atributos subjectCode y linkedEditionDocId, garantizando perfecta consistencia pedagógica.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "CRITERIOS DE ADMISIÓN, REQUISITOS Y POLÍTICA DE EXCEPCIONES",
    description: "Regula las condiciones de ingreso de los postulantes al cuerpo estudiantil del seminario.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Requisitos Formales de Admisión",
        content:
          "Para ingresar al Seminario Bíblico RENACER se exige:\n1. Profesión sincera de fe en Jesucristo y bautismo en agua por inmersión.\n2. Membresía activa en plena comunión en RENACER CHURCH (REN-DOC-005).\n3. Haber completado la Escuela de Discípulos (REN-DOC-007) y la Escuela de Líderes (REN-DOC-008).\n4. Testimonio moral intachable en su hogar, trabajo y congregación.\n5. Evidencia clara de llamado al servicio ministerial y recomendación escrita de su pastor de área.\n6. Presentar la Solicitud de Admisión (REN-FORM-SEM-001) y aprobar la entrevista vocacional con el Consejo Ministerial.\n7. Aceptación irrestricta de la Declaración de Fe (REN-DOC-001) y el orden normativo de RENACER.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-007", "REN-DOC-008"],
      },
      {
        sectionNumber: "5.2",
        title: "Régimen de Excepciones Extraordinarias",
        content:
          "En casos extraordinarios de ministros transferidos o creyentes con formación teológica previa verificada, el Pastor Fundador, en consulta con el Consejo Ministerial, podrá autorizar excepciones de ingreso o convalidaciones parciales. Toda excepción deberá quedar debidamente documentada, justificada en acta y registrada en el expediente del estudiante (REN-FORM-SEM-002), sin que puedan dispensarse los requisitos morales, éticos ni la aceptación doctrinal de REN-DOC-001.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-018"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "SISTEMA DE EVALUACIÓN ACADÉMICA Y PRÁCTICAS MINISTERIALES",
    description: "Norma los instrumentos de evaluación holística y los componentes prácticos de graduación.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "Evaluación Académica Multidimensional",
        content:
          "La evaluación en el Seminario integra de forma balanceada:\n1. Dominio Teológico y Exegético: Exámenes escritos, ensayos y monografías.\n2. Destrezas de Proclamación: Rúbrica de predicación homilética (REN-FORM-SEM-006).\n3. Competencias Pedagógicas: Rúbrica de enseñanza bíblica de aula (REN-FORM-SEM-007).\n4. Práctica Ministerial de Campo: Informes de pasantía y pastoreo supervisado (REN-FORM-SEM-005).\n5. Carácter y Ética: Informe actitudinal del cuerpo docente y mentor pastoral.\n\nCualquier porcentaje numérico institucional no aprobado expresamente por el Consejo de Gobierno se mantiene como propuesta orientativa marcada como PENDIENTE_DEFINIR.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
        pendingDefinitionNotes: "La escala formal de ponderaciones porcentuales finales queda sujeta a reglamentación académica del Consejo Ministerial.",
      },
      {
        sectionNumber: "6.2",
        title: "Componentes Obligatorios de Práctica Ministerial",
        content:
          "Todo estudiante completará experiencias prácticas formativas obligatorias supervisadas:\n* Predicación en reuniones congregacionales o Familias de Grupo.\n* Dictado de clases bíblicas en programas formativos de la iglesia.\n* Participación directa en campañas de evangelismo y discipulado 1 a 1.\n* Acompañamiento en visitas pastorales y proyectos de servicio comunitario.",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
      },
      {
        sectionNumber: "6.3",
        title: "Proyecto Ministerial de Graduación",
        content:
          "Como requisito final de egreso en el Módulo 12 (SEM-L4-M03), el estudiante formulará y defenderá oralmente un Proyecto Ministerial de Graduación ante el tribunal del Consejo Ministerial. El proyecto demostrará solidez exegética, pertinencia pastoral, viabilidad organizativa y apego ético a la visión de RENACER (REN-FORM-SEM-008).",
        decisionIds: ["DEC-DEF-018"],
        dependencies: ["REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "HERMENÉUTICA, DOCTRINA INSTITUCIONAL Y HOMILÉTICA",
    description: "Norma el rigor exegético, la fidelidad a la Declaración de Fe y la excelencia en el púlpito.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "Hermenéutica Bíblica y Fidelidad Exegética",
        content:
          "El Seminario enseña y exige el método de interpretación gramático-histórico-teológico. Quedan proscritas las alegorizaciones fantasiosas, la eiségesis que impone prejuicios humanos sobre el texto y las interpretaciones contrarias a los fundamentos de la fe cristiana histórica.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001"],
      },
      {
        sectionNumber: "7.2",
        title: "Referencia Doctrinal Oficial y Estado de REN-DOC-001",
        content:
          "La enseñanza teológica del Seminario se fundamenta en la Declaración de Fe y Doctrina Institucional (REN-DOC-001). Se hace constar formalmente que, mientras REN-DOC-001 se encuentre en estado de BORRADOR NO ADOPTADO, el cuerpo docente enseñará sus 20 Artículos Fundamentales como el marco doctrinal de referencia oficial de la iglesia, indicando con transparencia su estado procedimental a los estudiantes.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001"],
      },
      {
        sectionNumber: "7.3",
        title: "Homilética Cristocéntrica y Ética de la Predicación",
        content:
          "La predicación en RENACER debe ser expositiva, cristocéntrica y ungida por el Espíritu Santo. El predicador debe comunicar la verdad divina con fidelidad al texto, elocuencia sobria y aplicaciones éticas transformadoras, evitando el plagio de sermones, la manipulación emocional y el sensacionalismo.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "NEUMATOLOGÍA, DONES ESPIRITUALES Y ORDEN LITÚRGICO",
    description: "Consagra la doctrina carismática equilibrada, el discernimiento y el orden litúrgico de 1 Corintios 14.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Continuidad de los Dones y Bautismo en el Espíritu Santo",
        content:
          "El Seminario sostiene firmemente la vigencia plena de los dones espirituales del Espíritu Santo para la iglesia de hoy (1 Corintios 12, Romanos 12, Efesios 4), incluyendo lenguas, interpretación, profecía, sanidades y milagros, así como la experiencia del bautismo en el Espíritu Santo como poder para el testimonio (REN-DOC-001, Art. 9 y 10).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001"],
      },
      {
        sectionNumber: "8.2",
        title: "Orden Litúrgico, Discernimiento y Juicio de Profecía",
        content:
          "Todo ejercicio de los dones espirituales debe realizarse bajo las pautas apostólicas de decencia y orden (1 Corintios 14:33, 40). Las manifestaciones proféticas están subordinadas a las Sagradas Escrituras y deben ser juzgadas por el presbiterio pastoral (1 Corintios 14:29; 1 Tesalonicenses 5:20-21). Se prohíbe el uso de supuestas profecías para manipular conciencias o forzar decisiones privadas.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "CUIDADO PASTORAL, CONSEJERÍA BÍBLICA Y LÍMITES PROFESIONALES",
    description: "Norma el pastoreo compasivo y establece los límites infranqueables frente a profesiones reguladas.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "Teología del Pastoreo Bíblico y Acompañamiento",
        content:
          "El ministro es llamado a apacentar la grey de Dios con ternura, prudencia y solicitud espiritual (1 Pedro 5:1-4), acompañando a los creyentes en matrimonios, crianza familiar, duelo, enfermedades y momentos de prueba espiritual.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "9.2",
        title: "Límites Estrictos de la Consejería y Deber de Derivación",
        content:
          "Se establece de manera categórica que la consejería pastoral bíblica NO sustituye ni equivale a la atención médica, psiquiátrica, psicológica clínica ni al asesoramiento legal regulado. Ningún ministro prescribirá fármacos, alterará tratamientos clínicos ni diagnosticará patologías médicas. Ante cuadros de depresión severa, psicosis, ideación suicida o adicciones graves, el ministro tiene el deber ético ineludible de derivar al aconsejado a profesionales de la salud competentes.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "ÉTICA MINISTERIAL, SALVAGUARDAS LEGALES Y PREVENCIÓN DE ABUSOS",
    description: "Establece las reglas de integridad del ministro y el cumplimiento de las leyes de New Jersey.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Integridad Moral, Financiera y Límites de Autoridad",
        content:
          "El ministro graduado de RENACER vivirá con pureza sexual y conyugal intachable, transparencia financiera absoluta y rechazo frontal a cualquier forma de abuso de poder o enriquecimiento privado indebido (private inurement). Rigen de forma estricta las prohibiciones de intromisión en el dinero, matrimonio, salud o empleo privado consagradas en REN-DOC-006.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013", "DEC-DEF-018"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "10.2",
        title: "Protección a Menores y Deber de Reporte Legal Inmediato",
        content:
          "En concordancia con REN-DOC-016 y la legislación de New Jersey (N.J.S.A. 9:6-8.10), todo ministro y estudiante del seminario tiene el deber legal e irrenunciable de denunciar de inmediato a la policía y a la línea estatal (1-877-NJ-ABUSE) cualquier sospecha o conocimiento de abuso infantil o maltrato. La confidencialidad pastoral jamás podrá ser utilizada para encubrir delitos o poner en riesgo a personas vulnerables.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-005", "REN-DOC-016"],
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "PLENA INCLUSIÓN Y MINISTERIO DE LAS MUJERES",
    description: "Consagra la igualdad de hombres y mujeres en la formación académica y proyección ministerial.",
    sections: [
      {
        sectionNumber: "11.1",
        title: "Acceso Universal e Igualdad Ministerial Femenina",
        content:
          "El Seminario Bíblico RENACER garantiza el acceso universal e igualitario a mujeres y hombres en todos sus programas, cátedras, laboratorios y proyectos de graduación. Las mujeres graduadas están plenamente facultadas para ejercer la docencia teológica, predicar, pastorear y avanzar en la ruta de credenciales ministeriales y ordenación pastoral plena conforme a Gálatas 3:28, Romanos 16 y la doctrina oficial de la iglesia.",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-015", "DEC-DEF-018", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "CUERPO DOCENTE, REGISTRO ACADÉMICO, CERTIFICACIÓN Y MAPA MINISTERIAL",
    description: "Norma el perfil del claustro docente, la custodia documental en REN-DOC-019 y la ruta ministerial.",
    sections: [
      {
        sectionNumber: "12.1",
        title: "Perfil y Selección del Claustro Docente",
        content:
          "Los profesores del Seminario Bíblico deben ser ministros ordenados o teólogos con grado académico comprobado, testimonio intachable y fidelidad doctrinal absoluta a REN-DOC-001. Serán nombrados por el Pastor Fundador y el Consejo Ministerial, sin que la función docente atribuya potestades de gobierno corporativo reservadas a los Trustees.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-018"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "12.2",
        title: "Custodia de Expedientes Académicos y Archivo (REN-DOC-019)",
        content:
          "Todos los expedientes académicos, actas de notas, monografías y proyectos de graduación serán custodiados bajo estrictas medidas de confidencialidad y preservación digital por la Secretaría del Seminario y el Archivo General (REN-DOC-019). El documento mantiene el estado formal REQUIERE_REVISION_LEGAL.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-018"],
        dependencies: ["REN-DOC-003", "REN-DOC-019"],
        legalReviewRequired: true,
      },
      {
        sectionNumber: "12.3",
        title: "Certificado de Finalización y Mapa Ministerial Institucional",
        content:
          "Al aprobar los 12 módulos y defender exitosamente el proyecto final, el egresado recibirá el CERTIFICADO DE FINALIZACIÓN DEL SEMINARIO BÍBLICO RENACER. Se consagra el mapa ministerial institucional completo:\n\nESCUELA DE DISCÍPULOS (REN-DOC-007)\n   ↓\nESCUELA DE LÍDERES (REN-DOC-008)\n   ↓\nSEMINARIO BÍBLICO RENACER (REN-DOC-009)\n   ↓\nCANDIDATO MINISTERIAL\n   ↓\nMINISTRO LICENCIADO (REN-DOC-010)\n   ↓\nMINISTRO ORDENADO (REN-DOC-010)\n   ↓\nPASTOR (Nombramiento oficial)",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-010", "DEC-DEF-016", "DEC-DEF-018"],
        dependencies: ["REN-DOC-006", "REN-DOC-007", "REN-DOC-008", "REN-DOC-010"],
      },
    ],
  },
];

// ============================================================================
// DATOS ESTRUCTURADOS DE LOS 4 NIVELES DEL SEMINARIO BÍBLICO
// ============================================================================

export const SEMINARY_LEVELS_DATA: SeminaryLevelData[] = [
  {
    levelNumber: 1,
    levelId: "NIVEL_I",
    levelTitle: "Fundamentos Bíblicos y Teológicos",
    duration: "Meses 1 a 3 (26 clases)",
    objective: "Consolidar el conocimiento inerrante de las Sagradas Escrituras, el canon de los 66 libros y los principios de la hermenéutica gramático-histórica.",
    modules: [
      {
        code: "SEM-L1-M01",
        title: "Introducción a la Biblia, Inspiración e Historia del Canon",
        theme: "Inspiración verbal plenaria, autógrafos, transmisión y canon del Antiguo y Nuevo Testamento",
        classesCount: 8,
        learningOutcomes: ["Explicar la doctrina de la revelación e inerrancia bíblica", "Dominar la historia y fijación del canon bíblico"],
      },
      {
        code: "SEM-L1-M02",
        title: "Panorama del Antiguo y Nuevo Testamento y Teología Bíblica",
        theme: "Estructura teológica, narrativa de redención, pactos divinos y teología bíblica",
        classesCount: 9,
        learningOutcomes: ["Trazar la teología de los pactos desde Génesis hasta Apocalipsis", "Contextualizar los 66 libros canónicos"],
      },
      {
        code: "SEM-L1-M03",
        title: "Hermenéutica Bíblica, Exégesis y Métodos de Estudio",
        theme: "Principios de interpretación gramático-histórica, géneros literarios y aplicación pastoral",
        classesCount: 9,
        learningOutcomes: ["Aplicar el método gramático-histórico riguroso", "Diferenciar exégesis bíblica de interpretaciones subjetivas"],
      },
    ],
  },
  {
    levelNumber: 2,
    levelId: "NIVEL_II",
    levelTitle: "Espíritu Santo y Ministerio",
    duration: "Meses 4 a 6 (26 clases)",
    objective: "Dominar la doctrina de Dios trino, la cristología y la persona y obra del Espíritu Santo con todos sus dones en orden y poder.",
    modules: [
      {
        code: "SEM-L2-M01",
        title: "Teología Propia: Doctrina de Dios, Trinidad y Soberanía",
        theme: "Atributos divinos, soberanía, deidad y la doctrina trinitaria conforme a REN-DOC-001",
        classesCount: 8,
        learningOutcomes: ["Articular la doctrina de la Trinidad y soberanía divina", "Fundamentar la fe cristiana histórica"],
      },
      {
        code: "SEM-L2-M02",
        title: "Cristología, Soteriología, Santificación y Ordenanzas",
        theme: "Persona y obra de Cristo, expiación, justificación, santificación y ordenanzas eclesiales",
        classesCount: 9,
        learningOutcomes: ["Explicar la doble naturaleza de Cristo y la expiación vicaria", "Instruir sobre las ordenanzas del bautismo y Santa Cena"],
      },
      {
        code: "SEM-L2-M03",
        title: "Neumatología: Espíritu Santo, Bautismo, Dones Espirituales y Sanidad",
        theme: "Persona del Espíritu Santo, bautismo en el Espíritu Santo, dones vigentes, sanidad divina y orden litúrgico",
        classesCount: 9,
        learningOutcomes: [
          "Estudiar el bautismo en el Espíritu Santo como investidura de poder para el testimonio ministerial (REN-DOC-001, Art. 9)",
          "Fundamentar la doctrina de la sanidad divina en la expiación (REN-DOC-001, Art. 14) sin sensacionalismo",
          "Promover la operación de dones espirituales (lenguas, profecía, discernimiento) con orden bíblico (1 Corintios 14:40)",
        ],
      },
    ],
  },
  {
    levelNumber: 3,
    levelId: "NIVEL_III",
    levelTitle: "Predicación, Enseñanza y Cuidado Pastoral",
    duration: "Meses 7 a 9 (26 clases)",
    objective: "Formar competencias oratorias, pedagógicas y de consejería pastoral con sólidos límites éticos y profesionales.",
    modules: [
      {
        code: "SEM-L3-M01",
        title: "Homilética: Preparación, Estructura y Predicación Bíblica",
        theme: "Elaboración de sermones expositivos, exégesis para el púlpito, elocuencia y comunicación pastoral",
        classesCount: 9,
        learningOutcomes: ["Diseñar y predicar sermones expositivos estructurados", "Manejar la comunicación verbal y corporal con solvencia"],
      },
      {
        code: "SEM-L3-M02",
        title: "Pedagogía Bíblica, Evangelismo Estratégico y Discipulado Multiplicador",
        theme: "Didáctica cristiana, diseño curricular, evangelismo relacional y reproducción de discípulos",
        classesCount: 8,
        learningOutcomes: ["Diseñar programas formativos de aula", "Formular estrategias de evangelismo y discipulado multiplicador"],
      },
      {
        code: "SEM-L3-M03",
        title: "Cuidado Pastoral, Familia, Duelo y Límites de Consejería",
        theme: "Pastoral familiar, matrimonio cristiano, acompañamiento en duelo, crisis y derivación profesional",
        classesCount: 9,
        learningOutcomes: ["Conducir consejería matrimonial y familiar bíblica", "Aplicar protocolos estrictos de confidencialidad y derivación a especialistas"],
      },
    ],
  },
  {
    levelNumber: 4,
    levelId: "NIVEL_IV",
    levelTitle: "Ministerio y Sistema RENACER",
    duration: "Meses 10 a 12 (26 clases)",
    objective: "Comprender la eclesiología y gobierno de RENACER, la ética ministerial inquebrantable y ejecutar el proyecto final de graduación.",
    modules: [
      {
        code: "SEM-L4-M01",
        title: "Eclesiología, Gobierno Institucional y Cinco Ministerios",
        theme: "Naturaleza de la iglesia, cinco ministerios, organigrama y gobierno de RENACER (REN-DOC-001 a 008)",
        classesCount: 8,
        learningOutcomes: ["Dominar la teología eclesiológica de RENACER", "Alinear la práctica ministerial con la estructura constitucional"],
      },
      {
        code: "SEM-L4-M02",
        title: "Ética Ministerial, Integridad, Manejo de Conflictos y Salvaguardas Legales",
        theme: "Integridad financiera, pureza moral, prohibición de abusos, Mateo 18 y reporte obligatorio (N.J.S.A. 9:6-8.10)",
        classesCount: 9,
        learningOutcomes: ["Preservar la integridad ética y financiera ministerial", "Cumplir de inmediato el deber legal de reporte de abusos infantiles"],
      },
      {
        code: "SEM-L4-M03",
        title: "Práctica Ministerial Supervisada y Proyecto Final de Graduación",
        theme: "Pasantía de campo supervisada, diseño del proyecto ministerial final y sustentación académica",
        classesCount: 9,
        learningOutcomes: ["Completar la práctica ministerial supervisada", "Defender oralmente el Proyecto Ministerial de Graduación ante el tribunal"],
      },
    ],
  },
];

// ============================================================================
// OBJETO BORRADOR MAESTRO COMPLETO (REN-DOC-009)
// ============================================================================

export const FULL_SEMINARY_PROGRAM_DRAFT: MasterSeminaryProgramDraft = {
  code: "REN-DOC-009",
  id: "doc-ren-009",
  title: "PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER",
  shortTitle: "Programa del Seminario Bíblico",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "FORMACION_MINISTERIAL",
  author: "Pastor Fundador / Consejo Ministerial",
  authorId: "usr-fundador-001",
  responsibleArea: "DIRECCION_SEMINARIO_BIBLICO",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "PROGRAMA_ACADEMICO",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER (REN-DOC-009) establece la arquitectura académica, teológica, ministerial y normativa de la institución superior de formación de la iglesia. Fundado sobre la autoridad inerrante e infalible de las Sagradas Escrituras y en estricta armonía con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Manual de Gobierno (REN-DOC-004), el Manual de Membresía (REN-DOC-005), el Manual de Ministerios y Liderazgo (REN-DOC-006), el Programa de la Escuela de Discípulos (REN-DOC-007) y el Programa de la Escuela de Líderes (REN-DOC-008), este programa estructura una formación rigurosa de un año académico mínimo (12 módulos mensuales / 104 clases anuales) organizados en cuatro niveles formativos: Fundamentos Bíblicos y Teológicos; Espíritu Santo y Ministerio; Predicación, Enseñanza y Cuidado Pastoral; y Ministerio y Sistema RENACER. Su propósito es equipar integralmente a siervos y siervas de Dios llamados al ministerio, forjando líderes teológicamente sólidos, apasionados por el Evangelio, llenos del Espíritu Santo, éticamente irreprochables y capacitados para apacentar y edificar el cuerpo de Cristo sin autoritarismos ni abusos de poder.",
  durationMonths: 12,
  durationYears: 1,
  durationDescription: "Mínimo 1 año (12 meses lectivos / 4 niveles / 12 módulos / 104 clases)",
  classesPerWeek: 2,
  annualClasses: 104,
  totalClassesAnnual: 104,
  levelsCount: 4,
  modulesCount: 12,
  titles: MASTER_SEMINARY_PROGRAM_TITLES,
  modules: SEMINARY_MODULES_CATALOG,
  curricularMatrix: SEMINARY_CURRICULAR_MATRIX,
  competencyMatrix: SEMINARY_COMPETENCY_MATRIX,
  futureForms: SEMINARY_FUTURE_FORMS_CATALOG,
  classStructure: {
    componentsCount: 13,
    components: [
      "Código de la Lección",
      "Título Temático",
      "Objetivo Específico de Aprendizaje",
      "Texto Bíblico Central",
      "Introducción al Tema",
      "Desarrollo Doctrinal y Exegético",
      "Explicación Teológica de Fondo",
      "Aplicación Ministerial Práctica",
      "Preguntas de Reflexión y Debate",
      "Actividad Pedagógica de Aula",
      "Evaluación y Tarea Semanal",
      "Criterio de Evaluación Formativa",
      "Bibliografía Recomendada",
    ],
  },
  booksArchitecture: {
    linkageRule: "subjectCode y linkedEditionDocId",
    teacherBook: {
      codePrefix: "SEM-LIB-M",
      isIndependentDocument: true,
      components: [
        "Portada Institucional",
        "Información Académica y Sílabo",
        "Objetivos y Competencias",
        "Desarrollo Doctrinal Exhaustivo",
        "Fundamentos Bíblicos y Exégesis",
        "Explicación Teológica con Referencias",
        "Estudios de Caso y Ejemplos",
        "Preguntas de Debate y Respuestas Modelo",
        "Notas Pedagógicas de Aula",
        "Rúbricas analíticas de calificación",
        "Criterios de Evaluación y Calificación",
      ],
    },
    studentBook: {
      codePrefix: "SEM-LIB-E",
      isIndependentDocument: true,
      components: [
        "Portada Institucional",
        "Objetivos de Aprendizaje",
        "Contenido y Desarrollo de Lecciones",
        "Textos Bíblicos Impresos",
        "Preguntas de Estudio y Ejercicios",
        "Tareas Semanales y Lecturas",
        "Actividades Prácticas de Campo",
        "Espacios estructurados de notas personales y reflexión",
      ],
    },
  },
  admissions: {
    requirements: [
      "Profesión sincera de fe en Jesucristo",
      "Bautismo en agua por inmersión",
      "Membresía activa en plena comunión (REN-DOC-005)",
      "Haber completado la Escuela de Discípulos (REN-DOC-007)",
      "Haber completado la Escuela de Líderes (REN-DOC-008)",
      "Testimonio moral intachable y llamado ministerial comprobado",
      "Recomendación pastoral escrita y aprobación de entrevista vocacional",
      "Aceptación irrestricta de la Declaración de Fe (REN-DOC-001)",
    ],
    exceptionPolicy: "Las excepciones de ingreso están reservadas de forma exclusiva al Pastor Fundador en consulta con el Consejo Ministerial, debiendo quedar formalmente documentadas, justificadas en acta y registradas en el expediente del estudiante (REN-FORM-SEM-002), sin dispensa de requisitos morales ni adhesión doctrinal.",
  },
  faculty: {
    profile: "Ministros ordenados o teólogos con grado académico comprobado, testimonio intachable y fidelidad doctrinal absoluta a REN-DOC-001.",
    appointment: "Nombrados formalmente por el Pastor Fundador y el Consejo Ministerial sin conferir facultades de Trustees.",
  },
  academicRecords: {
    recordsKept: [
      "Legajo del estudiante",
      "Nivel cursado",
      "Materias y calificaciones",
      "Evaluación de prácticas",
      "Control de asistencia",
      "Proyecto final",
      "Acta de finalización",
    ],
    relatedRegulation: "REN-DOC-019",
  },
  capstoneProject: {
    requirements: [
      "Investigación bíblico-teológica rigurosa",
      "Propuesta de aplicación eclesiológica o comunitaria",
      "Metodología con cronograma e indicadores",
      "Memoria de grado escrita",
      "Defensa oral ante el tribunal examinador",
    ],
    nonClericalOrdinationClause: "La aprobación y defensa del Proyecto Ministerial Final constituye el requisito académico culminante del Seminario pero NO constituye nombramiento pastoral ni ordenación clerical automática.",
  },
  certification: {
    title: "CERTIFICADO DE FINALIZACIÓN DEL SEMINARIO BÍBLICO RENACER",
    nonAutomaticPrivileges: "NO concede automáticamente licencia ministerial, ordenación pastoral, credencial clerical ni cargo eclesiástico, regulados por REN-DOC-010.",
  },
  womenInMinistry: {
    fullAccess: true,
    statement: "El Seminario Bíblico RENACER garantiza el acceso pleno a hombres y mujeres sin restricciones basadas en el sexo, habilitando a las mujeres para cursar todos los niveles, ejercer docencia y avanzar en la ruta de credenciales ministeriales conforme a las Escrituras y la doctrina institucional.",
  },
  pastoralCareLimits: {
    nonMedicalReplacement: true,
    mandatoryReferral: true,
    statement: "El ministro no sustituye a profesionales médicos, psicólogos, psiquiatras ni letrados. Es obligatoria la derivación profesional inmediata y el reporte de abusos infantiles bajo N.J.S.A. 9:6-8.10.",
  },
};

export const SEMINARY_PROGRAM_DRAFT = FULL_SEMINARY_PROGRAM_DRAFT;

export function getAllSeminaryProgramSections(): SeminaryManualSection[] {
  return MASTER_SEMINARY_PROGRAM_TITLES.flatMap((t) => t.sections);
}

// ============================================================================
// GENERADOR DE MARKDOWN COMPLETO PARA VISOR Y SISTEMA DOCUMENTAL
// ============================================================================

export function generateFullSeminaryProgramMarkdown(): string {
  const prog = FULL_SEMINARY_PROGRAM_DRAFT;
  let md = `# ${prog.title}\n\n`;
  md += `**Código:** ${prog.code} | **Versión:** v${prog.version} | **Jerarquía:** ${prog.hierarchyLevel}\n`;
  md += `**Estado de Trabajo:** ${prog.status} | **Estado de Adopción:** ${prog.adoptionStatus}\n`;
  md += `**Estado Legal:** ${prog.legalState} | **Duración Académica:** Mínimo ${prog.durationMonths} Meses (1 Año • ${prog.classesPerWeek} clases/sem • 4 Niveles / 12 Módulos)\n\n`;
  md += `> **ADVERTENCIA INSTITUCIONAL Y LEGAL:** Documento oficial en fase de redacción técnica preliminar (v0.1). No adoptado formalmente. Requiere revisión letrada integral previa a su adopción definitiva.\n\n`;
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

  md += `## MATRIZ CURRICULAR ACADÉMICA (12 MÓDULOS EN 4 NIVELES)\n\n`;
  md += `| Nivel | Código | Módulo y Tema | Objetivos Generales | Competencias Clave | Tarea Práctica / Laboratorio | Método de Evaluación |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  for (const row of prog.curricularMatrix) {
    md += `| **${row.nivel}** | **${row.codigo}** | ${row.modulo} | ${row.objetivos} | ${row.competencias} | ${row.practica} | ${row.evaluacion} |\n`;
  }
  md += `\n---\n\n`;

  md += `## MATRIZ DE COMPETENCIAS INSTITUCIONALES (14 COMPETENCIAS POR 4 NIVELES)\n\n`;
  md += `| Competencia Institucional | Nivel I (Fundamentos) | Nivel II (Espíritu Santo) | Nivel III (Predicación y Cuidado) | Nivel IV (Ministerio y RENACER) |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const row of prog.competencyMatrix) {
    md += `| **${row.competencia}** | ${row.nivel1} | ${row.nivel2} | ${row.nivel3} | ${row.nivel4} |\n`;
  }
  md += `\n---\n\n`;

  md += `## DESARROLLO ANALÍTICO DE MÓDULOS (ARQUITECTURA DE CLASE EN 13 COMPONENTES)\n\n`;
  for (const m of prog.modules) {
    md += `### ${m.code}: ${m.moduleTitle}\n\n`;
    md += `**Nivel Académico:** ${m.levelName} | **Carga Horaria Semanal:** ${m.weeklyHours} Horas\n\n`;
    md += `- **Texto Bíblico Base:** ${m.scripturalAnchor}\n`;
    md += `- **Tema Central:** ${m.theme}\n`;
    md += `- **Objetivo General:** ${m.generalObjective}\n`;
    md += `- **Objetivos Específicos:**\n`;
    for (const obj of m.specificObjectives) {
      md += `  * ${obj}\n`;
    }
    md += `- **Competencias Académicas:** ${m.competencies.join(", ")}\n`;
    md += `- **Contenido Doctrinal y Teológico:** ${m.lessonContent}\n`;
    md += `- **Bibliografía Académica:**\n`;
    for (const bib of m.bibliography) {
      md += `  * ${bib}\n`;
    }
    md += `- **Actividad Pedagógica y Laboratorio de Aula:** ${m.pedagogicalActivity}\n`;
    md += `- **Tarea de Investigación / Práctica:** ${m.practicalTask}\n`;
    md += `- **Método de Evaluación Formativa:** ${m.evaluationMethod}\n\n`;
  }
  md += `---\n\n`;

  md += `## CATÁLOGO DE FORMULARIOS FUTUROS DEL SEMINARIO BÍBLICO\n\n`;
  md += `| Código | Nombre del Formulario | Propósito Principal | Responsable de Custodia | Período de Retención |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const form of prog.futureForms) {
    md += `| **${form.code}** | ${form.name} | ${form.purpose} | ${form.responsible} | ${form.retentionPeriod} |\n`;
  }
  md += `\n`;

  return md;
}
