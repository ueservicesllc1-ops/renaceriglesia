// ============================================================================
// RENACER CHURCH MAESTRO — FASE 38
// REN-DOC-007: PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER
// BORRADOR OFICIAL COMPLETO — v0.1 (EN_REDACCION / NO ADOPTADA)
// ============================================================================

export interface DisciplesManualSection {
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
}

export interface CurricularMatrixRow {
  nivel: string;
  modulo: string;
  tema: string;
  objetivo: string;
  practica: string;
  evaluacion: string;
}

export interface DisciplesFutureFormDefinition {
  code: string;
  name: string;
  purpose: string;
  responsible: string;
  retentionPeriod: string;
}

export interface DisciplesProgramTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: DisciplesManualSection[];
}

export interface MasterDisciplesProgramDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "DISCIPULADO";
  author: "Pastor Fundador / Consejo Ministerial";
  authorId: "usr-fundador-001";
  responsibleArea: "DIRECCION_DISCIPULADO_Y_FORMACION";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "PROGRAMA_ACADEMICO";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  durationMonths: 9;
  levelsCount: 3;
  titles: DisciplesProgramTitle[];
  modules: CurricularModuleDefinition[];
  curricularMatrix: CurricularMatrixRow[];
  futureForms: DisciplesFutureFormDefinition[];
}

export const DISCIPLES_MODULES_CATALOG: CurricularModuleDefinition[] = [
  // ==========================================================================
  // NIVEL I: CONOCIENDO A CRISTO (3 MESES — MÓDULOS 1 AL 9)
  // ==========================================================================
  {
    moduleNumber: 1,
    code: "DIS-N1-M01",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "El Evangelio y la Persona de Jesucristo",
    theme: "La buena noticia de salvación y la deidad y humanidad de Jesús",
    scripturalAnchor: "Juan 1:1-14; 1 Corintios 15:1-4; Romanos 1:16",
    generalObjective: "Comprender el mensaje central del Evangelio y la identidad de Jesucristo como Salvador, Señor e Hijo de Dios.",
    specificObjectives: [
      "Reconocer la condición del ser humano apartado de Dios.",
      "Identificar a Cristo como único mediador entre Dios y los hombres.",
      "Articular en palabras propias el mensaje fundamental del Evangelio.",
    ],
    weeklyHours: 2,
    lessonContent: "Definición del Evangelio; quién es Jesús históricamente y teológicamente; su nacimiento virginal, vida perfecta, muerte expiatoria y resurrección corporal.",
    pedagogicalActivity: "Lectura guiada de los Evangelios y diálogo socrático sobre la identidad de Cristo.",
    practicalTask: "Escribir un resumen personal de 1 página sobre quién es Jesús en su vida.",
    evaluationMethod: "Cuestionario de comprensión básica y diálogo formativo.",
  },
  {
    moduleNumber: 2,
    code: "DIS-N1-M02",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "Salvación por Gracia Mediante la Fe",
    theme: "La justificación divina no basada en obras humanas",
    scripturalAnchor: "Efesios 2:8-9; Romanos 3:21-26; Tito 3:4-7",
    generalObjective: "Entender que la salvación es un regalo inmerecido de Dios recibido exclusivamente por medio de la fe en Cristo.",
    specificObjectives: [
      "Diferenciar entre obras de la ley y gracia soberana.",
      "Comprender la doctrina de la justificación por la fe.",
      "Desarrollar seguridad bíblica de la salvación en Cristo.",
    ],
    weeklyHours: 2,
    lessonContent: "El dilema del pecado; la imposibilidad de auto-salvación; el sacrificio sustitutivo de Cristo; la gracia como favor no merecido; la fe como mano vacía que recibe la promesa.",
    pedagogicalActivity: "Análisis comparativo de textos bíblicos sobre la gracia frente al mérito humano.",
    practicalTask: "Memorizar Efesios 2:8-9 y explicar su significado a un compañero.",
    evaluationMethod: "Preguntas de aplicación y examen conceptual breve.",
  },
  {
    moduleNumber: 3,
    code: "DIS-N1-M03",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "Arrepentimiento, Fe y Nueva Vida",
    theme: "El giro radical de mente y corazón hacia Dios y la regeneración espiritual",
    scripturalAnchor: "Hechos 2:38; 2 Corintios 5:17; Lucas 19:1-10",
    generalObjective: "Experimentar y comprender el arrepentimiento bíblico genuino y la transformación de la nueva criatura.",
    specificObjectives: [
      "Distinguir entre remordimiento pasajero y arrepentimiento sincero (metanoia).",
      "Identificar las evidencias prácticas del nuevo nacimiento.",
      "Reconocer el señorío de Cristo sobre todas las áreas de la vida.",
    ],
    weeklyHours: 2,
    lessonContent: "Naturaleza del arrepentimiento bíblico; la conversión como cambio de rumbo; la regeneración por el Espíritu Santo; el nuevo corazón y la renuncia al pecado.",
    pedagogicalActivity: "Taller de reflexión sobre el testimonio personal y el cambio de hábitos.",
    practicalTask: "Redactar el testimonio personal de conversión identificando el antes y el después.",
    evaluationMethod: "Revisión pastoral del testimonio de conversión.",
  },
  {
    moduleNumber: 4,
    code: "DIS-N1-M04",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "La Biblia como Palabra Inspirada de Dios",
    theme: "Inspiración, inerrancia, autoridad y suficiencia de las Sagradas Escrituras",
    scripturalAnchor: "2 Timoteo 3:16-17; 2 Pedro 1:20-21; Salmo 119:105",
    generalObjective: "Reconocer la Biblia como la revelación infalible de Dios y máxima autoridad para la fe y la conducta.",
    specificObjectives: [
      "Comprender la estructura del canon bíblico (66 libros).",
      "Reconocer la inspiración divina y la suficiencia de la Escritura.",
      "Establecer la Biblia como fundamento de toda verdad doctrinal.",
    ],
    weeklyHours: 2,
    lessonContent: "Origen e inspiración de las Escrituras; Antiguo y Nuevo Testamento; transmisión y confiabilidad de los manuscritos; autoridad final frente a tradiciones o revelaciones humanas.",
    pedagogicalActivity: "Manejo práctico de la Biblia, búsqueda ágil de citas y libros.",
    practicalTask: "Confeccionar una tabla con las divisiones del canon bíblico.",
    evaluationMethod: "Prueba práctica de localización y comprensión bíblica.",
  },
  {
    moduleNumber: 5,
    code: "DIS-N1-M05",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "Cómo Leer, Meditar y Estudiar la Biblia",
    theme: "Herramientas básicas para el tiempo devocional y la interpretación bíblica sencilla",
    scripturalAnchor: "Josué 1:8; Esdras 7:10; Hechos 17:11",
    generalObjective: "Desarrollar el hábito diario de la lectura bíblica reflexiva y métodos de estudio personal.",
    specificObjectives: [
      "Aprender a observar, interpretar y aplicar un pasaje bíblico.",
      "Establecer un plan de lectura sistemática de las Escrituras.",
      "Evitar malas interpretaciones sacando textos de contexto.",
    ],
    weeklyHours: 2,
    lessonContent: "El método devocional OIA (Observación, Interpretación, Aplicación); uso de concordancias y versiones bíblicas; la importancia del contexto histórico y literario.",
    pedagogicalActivity: "Ejercicio práctico grupal de estudio inductivo sobre un salmo o parábola.",
    practicalTask: "Llevar un diario devocional de lectura durante 14 días consecutivos.",
    evaluationMethod: "Revisión del diario devocional por el tutor.",
  },
  {
    moduleNumber: 6,
    code: "DIS-N1-M06",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "Dios Padre, Hijo y Espíritu Santo (La Trinidad)",
    theme: "La naturaleza de Dios y la doctrina trinitaria bíblica",
    scripturalAnchor: "Mateo 28:19; 2 Corintios 13:14; Génesis 1:26",
    generalObjective: "Conocer la doctrina del Dios único y verdadero que existe eternamente en tres personas coiguales.",
    specificObjectives: [
      "Articular la verdad bíblica del Dios Trino sin caer en herejías históricas.",
      "Comprender la obra del Padre, del Hijo y del Espíritu Santo en la redención.",
      "Relacionarse en adoración con cada persona de la Deidad.",
    ],
    weeklyHours: 2,
    lessonContent: "Atributos de Dios (santo, omnipotente, omnisciente, amor, justicia); definición bíblica de la Trinidad; distinción de personas y unidad de esencia divina.",
    pedagogicalActivity: "Estudio de pasajes trinitarios en el bautismo de Jesús y las cartas apostólicas.",
    practicalTask: "Memorizar la bendición apostólica de 2 Corintios 13:14.",
    evaluationMethod: "Cuestionario doctrinal sobre la Trinidad conforme a REN-DOC-001.",
  },
  {
    moduleNumber: 7,
    code: "DIS-N1-M07",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "La Vida del Creyente y la Nueva Identidad en Cristo",
    theme: "Quiénes somos en Cristo: adopción, perdón, libertad y mayordomía",
    scripturalAnchor: "Romanos 8:14-17; Efesios 1:3-14; Gálatas 2:20",
    generalObjective: "Afirmar la identidad espiritual del creyente como hijo de Dios, redimido y llamado a vivir en libertad.",
    specificObjectives: [
      "Reconocer los privilegios y responsabilidades de la adopción espiritual.",
      "Superar la culpa del pasado mediante el perdón de Cristo.",
      "Comprender la mayordomía del cuerpo, tiempo y recursos.",
    ],
    weeklyHours: 2,
    lessonContent: "La justificación y reconciliación; la victoria sobre la condenación; la ciudadanía celestial; vivir como templo del Espíritu Santo.",
    pedagogicalActivity: "Dinámica de afirmación bíblica de identidad frente a mentiras del enemigo.",
    practicalTask: "Hacer un inventario de identidad bíblica listando 10 verdades sobre quién es en Cristo.",
    evaluationMethod: "Evaluación formativa y diálogo de consejería bíblica.",
  },
  {
    moduleNumber: 8,
    code: "DIS-N1-M08",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "La Oración y la Comunión Diaria con Dios",
    theme: "La oración como diálogo íntimo, intercesión y dependencia continua",
    scripturalAnchor: "Mateo 6:5-15; Filipenses 4:6-7; 1 Tesalonicenses 5:17",
    generalObjective: "Cultivar una vida constante y ferviente de oración personal e intercesión comunitaria.",
    specificObjectives: [
      "Analizar el modelo del Padre Nuestro como guía de oración.",
      "Superar obstáculos y distracciones en la vida de oración.",
      "Aprender a orar conforme a la voluntad de Dios revelada en su Palabra.",
    ],
    weeklyHours: 2,
    lessonContent: "Qué es y qué no es la oración; elementos de la oración (Adoración, Confesión, Gratitud, Súplica); la oración en el Espíritu; la fe perseverante en la respuesta divina.",
    pedagogicalActivity: "Taller práctico de oración en parejas aplicando el modelo ACTS.",
    practicalTask: "Establecer una disciplina diaria de 15 minutos de oración matutina.",
    evaluationMethod: "Participación activa en el taller y reporte de progreso devocional.",
  },
  {
    moduleNumber: 9,
    code: "DIS-N1-M09",
    level: "NIVEL_I",
    levelName: "NIVEL I: CONOCIENDO A CRISTO",
    moduleTitle: "La Iglesia y la Vida en Comunidad",
    theme: "El cuerpo de Cristo, la comunión fraternal y el compromiso congregacional",
    scripturalAnchor: "Hechos 2:42-47; Hebreos 10:24-25; 1 Corintios 12:12-27",
    generalObjective: "Comprender el propósito de la iglesia local y la bendición de pertenecer activamente a la comunidad de fe.",
    specificObjectives: [
      "Entender que ningún cristiano puede crecer aislado del cuerpo de Cristo.",
      "Valorar la reunión congregacional dominical y las Familias de Grupo.",
      "Preparar el paso hacia la membresía plena y el Nivel II.",
    ],
    weeklyHours: 2,
    lessonContent: "La iglesia universal y local; metáforas bíblicas de la iglesia (cuerpo, familia, edificio, rebaño); el amor fraternal y el perdón mutuo; la vida en las Familias de Grupo.",
    pedagogicalActivity: "Visita e integración formal a una Familia de Grupo de su vecindario.",
    practicalTask: "Asistir semanalmente a una Familia de Grupo y compartir un motivo de oración.",
    evaluationMethod: "Evaluación integral de Nivel I (REN-FORM-DIS-004) y habilitación para Nivel II.",
  },

  // ==========================================================================
  // NIVEL II: CRECIENDO EN CRISTO (3 MESES — MÓDULOS 10 AL 18)
  // ==========================================================================
  {
    moduleNumber: 10,
    code: "DIS-N2-M01",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "La Persona y Obra del Espíritu Santo",
    theme: "El Consolador, su presencia moradora, guía y poder en la vida del creyente",
    scripturalAnchor: "Juan 14:16-26; Juan 16:7-14; Hechos 1:8",
    generalObjective: "Reconocer al Espíritu Santo como persona divina, consejero y fuente de poder para la vida cristiana.",
    specificObjectives: [
      "Comprender la deidad y personalidad del Espíritu Santo.",
      "Distinguir entre el sello/regeneración y la llenura continua del Espíritu.",
      "Aprender a ser guiados diariamente por el Espíritu Santo.",
    ],
    weeklyHours: 2,
    lessonContent: "Personalidad del Espíritu (mente, emociones, voluntad); obras en el Antiguo y Nuevo Testamento; convicción de pecado; morada en el creyente; el bautismo en el Espíritu Santo.",
    pedagogicalActivity: "Estudio bíblico de pasajes de los Hechos sobre la llenura del Espíritu Santo.",
    practicalTask: "Dedicar tiempo devocional específico para buscar la llenura del Espíritu.",
    evaluationMethod: "Cuestionario doctrinal sobre el Espíritu Santo (REN-DOC-001, Art. 4).",
  },
  {
    moduleNumber: 11,
    code: "DIS-N2-M02",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "Santificación y Crecimiento Espiritual",
    theme: "El proceso progresivo de ser transformados a la imagen de Cristo",
    scripturalAnchor: "1 Tesalonicenses 4:3-7; Romanos 6:1-14; Hebreos 12:14",
    generalObjective: "Comprender la santificación como obra de Dios que exige la cooperación diligente del creyente.",
    specificObjectives: [
      "Distinguir entre santificación posicional, progresiva y final.",
      "Identificar las disciplinas espirituales para vencer la tentación.",
      "Vivir en santidad práctica sin caer en legalismo farisaico.",
    ],
    weeklyHours: 2,
    lessonContent: "La gracia que capacita para la santidad; morir al pecado y vivir para Dios; la armadura de Dios (Efesios 6); el papel de la Palabra y la oración en la purificación continua.",
    pedagogicalActivity: "Taller práctico sobre superación de hábitos pecaminosos y rendición de cuentas.",
    practicalTask: "Identificar un área de debilidad y establecer un plan bíblico de victoria con un mentor.",
    evaluationMethod: "Evaluación formativa y diálogo de mentoría.",
  },
  {
    moduleNumber: 12,
    code: "DIS-N2-M03",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "El Fruto del Espíritu y el Carácter Cristiano",
    theme: "Las nueve virtudes del fruto del Espíritu y la madurez de carácter",
    scripturalAnchor: "Gálatas 5:22-26; Colosenses 3:12-17; 2 Pedro 1:5-8",
    generalObjective: "Desarrollar el fruto del Espíritu en las actitudes, relaciones y vida cotidiana.",
    specificObjectives: [
      "Examinar cada una de las nueve dimensiones del fruto del Espíritu.",
      "Contrastar las obras de la carne con el fruto del Espíritu.",
      "Reconocer que el carácter cristiano es la máxima evidencia de madurez.",
    ],
    weeklyHours: 2,
    lessonContent: "Amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza; cómo se cultiva el fruto permaneciendo en la vid (Juan 15); dominio propio en el hablar y actuar.",
    pedagogicalActivity: "Autoevaluación guiada del fruto del Espíritu en la vida familiar y laboral.",
    practicalTask: "Practicar intencionalmente la paciencia y la benignidad en una relación difícil.",
    evaluationMethod: "Retroalimentación con el tutor de discipulado.",
  },
  {
    moduleNumber: 13,
    code: "DIS-N2-M04",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "Los Dones Espirituales: Orden, Discernimiento y Amor",
    theme: "La manifestación de los dones del Espíritu para la edificación del cuerpo",
    scripturalAnchor: "1 Corintios 12, 13 y 14; Romanos 12:3-8; 1 Pedro 4:10-11",
    generalObjective: "Conocer los dones del Espíritu Santo y aprender a ejercerlos con orden, amor y discernimiento bíblico.",
    specificObjectives: [
      "Identificar los dones de revelación, poder e inspiración verbal.",
      "Comprender que los dones están subordinados al amor y a la Escritura.",
      "Descubrir los dones iniciales en la vida personal para el servicio.",
    ],
    weeklyHours: 2,
    lessonContent: "Doctrina pentecostal de los dones en RENACER; sanidades, milagros, profecía, lenguas, interpretación, discernimiento; el principio de 1 Corintios 14:40 (hágase todo decentemente y con orden); prohibición de manipulación profética.",
    pedagogicalActivity: "Inventario básico de dones espirituales y estudio de casos bíblicos de discernimiento.",
    practicalTask: "Participar en un tiempo de oración e intercesión buscando la manifestación de dones.",
    evaluationMethod: "Evaluación doctrinal de dones conforme a REN-DOC-001 (Art. 8).",
  },
  {
    moduleNumber: 14,
    code: "DIS-N2-M05",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "El Bautismo en Agua por Inmersión",
    theme: "Significado, mandamiento y testimonio público de fe y sepultura con Cristo",
    scripturalAnchor: "Mateo 28:19; Romanos 6:3-5; Hechos 8:36-38",
    generalObjective: "Comprender la ordenanza del bautismo en agua por inmersión y preparar al estudiante para recibirlo.",
    specificObjectives: [
      "Entender el simbolismo de muerte al pecado y resurrección a nueva vida.",
      "Verificar los requisitos previos: fe genuina y arrepentimiento.",
      "Formalizar la solicitud de bautismo ante la pastoral.",
    ],
    weeklyHours: 2,
    lessonContent: "El mandato del Señor Jesús; el bautismo en el nombre del Padre, del Hijo y del Espíritu Santo; por qué la inmersión es la forma bíblica; el bautismo como testimonio y no causa de regeneración.",
    pedagogicalActivity: "Taller preparatorio de bautismo con revisión de la confesión de fe.",
    practicalTask: "Completar la entrevista pastoral bautismal y fijar fecha para la ceremonia.",
    evaluationMethod: "Entrevista pastoral de preparación bautismal (REN-DOC-005).",
  },
  {
    moduleNumber: 15,
    code: "DIS-N2-M06",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "La Santa Cena del Señor",
    theme: "La comunión solemne en el cuerpo y la sangre de Cristo",
    scripturalAnchor: "1 Corintios 11:23-32; Lucas 22:14-20",
    generalObjective: "Comprender el significado memorial, espiritual y comunitario de la Santa Cena.",
    specificObjectives: [
      "Reconocer el pan y el fruto de la vid como símbolos del sacrificio de Cristo.",
      "Aprender la importancia del autoexamen personal antes de participar.",
      "Participar con reverencia, gratitud y en paz con los hermanos.",
    ],
    weeklyHours: 2,
    lessonContent: "Institución de la Santa Cena por Jesús; significado del Nuevo Pacto; memoria de su muerte y proclamación de su segunda venida; advertencias contra participar indignamente.",
    pedagogicalActivity: "Estudio meditativo de 1 Corintios 11 y práctica de reconciliación fraternal.",
    practicalTask: "Participar solemnemente en la Santa Cena dominical con previo autoexamen devocional.",
    evaluationMethod: "Preguntas de reflexión y aplicación espiritual.",
  },
  {
    moduleNumber: 16,
    code: "DIS-N2-M07",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "La Adoración como Estilo de Vida y Alabanza Congregacional",
    theme: "Adorar en espíritu y en verdad dentro y fuera del templo",
    scripturalAnchor: "Juan 4:23-24; Romanos 12:1-2; Salmo 100",
    generalObjective: "Hacer de la adoración una actitud constante de vida y participar con devoción en el culto corporativo.",
    specificObjectives: [
      "Entender que la verdadera adoración abarca todas las áreas de la vida diaria.",
      "Conocer el propósito de la alabanza comunitaria en los 14 bloques litúrgicos.",
      "Superar el rol de mero espectador y ser un adorador activo.",
    ],
    weeklyHours: 2,
    lessonContent: "Qué es adorar a Dios; el sacrificio vivo; la música como instrumento litúrgico y no espectáculo; la reverencia y el gozo en la presencia de Dios.",
    pedagogicalActivity: "Análisis doctrinal de letras de cánticos e himnos cristianos.",
    practicalTask: "Dedicar una jornada personal de adoración sin peticiones, solo exaltación a Dios.",
    evaluationMethod: "Evaluación formativa y participación en los servicios cúlticos.",
  },
  {
    moduleNumber: 17,
    code: "DIS-N2-M08",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "El Servicio Cristiano y la Mayordomía Fiel",
    theme: "Servir a Dios sirviendo a los demás y administrando los dones y recursos",
    scripturalAnchor: "1 Pedro 4:10; Mateo 25:14-30; 2 Corintios 9:6-8",
    generalObjective: "Descubrir el gozo de servir en los ministerios de la iglesia y ejercer una mayordomía bíblica generosa.",
    specificObjectives: [
      "Entender que todo creyente es llamado a servir y no a ser servido.",
      "Comprender la mayordomía de tiempo, talentos y finanzas bajo la gracia.",
      "Preparar la integración práctica a un ministerio laico.",
    ],
    weeklyHours: 2,
    lessonContent: "La grandeza del servicio humilde; mayordomía financiera voluntaria y gozosa (diezmos y ofrendas sin coerción); el voluntariado cristiano como testimonio del Reino.",
    pedagogicalActivity: "Taller de identificación de áreas de voluntariado eclesiástico y social.",
    practicalTask: "Servir como voluntario de apoyo en un culto o actividad de misericordia.",
    evaluationMethod: "Reporte de servicio práctico firmado por el líder del área.",
  },
  {
    moduleNumber: 18,
    code: "DIS-N2-M09",
    level: "NIVEL_II",
    levelName: "NIVEL II: CRECIENDO EN CRISTO",
    moduleTitle: "Vida Ética, Familia e Integridad Testimonial",
    theme: "El testimonio cristiano en el hogar, el trabajo y la sociedad",
    scripturalAnchor: "Mateo 5:13-16; Efesios 5:21-33; Efesios 6:1-9; Colosenses 4:5-6",
    generalObjective: "Vivir con integridad moral, fortaleciendo el hogar y siendo sal y luz en el mundo.",
    specificObjectives: [
      "Aplicar principios bíblicos al matrimonio, la crianza de los hijos y la vida laboral.",
      "Mantener un testimonio intachable frente a los no creyentes.",
      "Preparar la culminación del Nivel II y avance al Nivel III.",
    ],
    weeklyHours: 2,
    lessonContent: "La ética del Reino de Dios; fidelidad matrimonial y pureza moral; la honestidad en el trabajo y negocios; el deber ciudadano; el manejo bíblico de conflictos familiares.",
    pedagogicalActivity: "Estudio de casos éticos contemporáneos resueltos a la luz de la Escritura.",
    practicalTask: "Tener una cena familiar devocional de edificación y diálogo.",
    evaluationMethod: "Evaluación integral de Nivel II (REN-FORM-DIS-004) y promoción a Nivel III.",
  },

  // ==========================================================================
  // NIVEL III: HACIENDO DISCÍPULOS (3 MESES — MÓDULOS 19 AL 27)
  // ==========================================================================
  {
    moduleNumber: 19,
    code: "DIS-N3-M01",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "La Gran Comisión: El Mandato Supremo de Jesús",
    theme: "Id y haced discípulos a todas las naciones",
    scripturalAnchor: "Mateo 28:18-20; Marcos 16:15; Hechos 1:8",
    generalObjective: "Interiorizar la Gran Comisión como la misión personal y congregacional permanente de todo creyente.",
    specificObjectives: [
      "Analizar los cuatro verbos de la Gran Comisión: Id, Haced discípulos, Bautizándolos, Enseñándoles.",
      "Superar el temor y la indiferencia hacia la proclamación del Evangelio.",
      "Conectar la misión local con la visión global de la iglesia.",
    ],
    weeklyHours: 2,
    lessonContent: "El mandato apostólico; la autoridad universal de Cristo; la promesa de su presencia continua; el discipulado como multiplicación y no mera adición numérica.",
    pedagogicalActivity: "Mapa de alcance misionero: identificar círculos de influencia personal (oikos).",
    practicalTask: "Elaborar una lista de oración con 5 personas no creyentes de su entorno cercano.",
    evaluationMethod: "Presentación del mapa relacional de evangelismo.",
  },
  {
    moduleNumber: 20,
    code: "DIS-N3-M02",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Qué Significa Discipular: El Modelo de Jesús y Pablo",
    theme: "La naturaleza relacional, intencional y transformadora del discipulado",
    scripturalAnchor: "2 Timoteo 2:2; Marcos 3:13-15; 1 Tesalonicenses 2:7-8",
    generalObjective: "Comprender la dinámica de mentoreo bíblico basada en modelar la vida de Cristo a otros.",
    specificObjectives: [
      "Examinar cómo Jesús formó a los Doce apóstoles.",
      "Comprender el principio de 2 Timoteo 2:2 (formar a quienes formen a otros).",
      "Evitar el autoritarismo o la dependencia en la relación de discipulado.",
    ],
    weeklyHours: 2,
    lessonContent: "El discipulado no es un programa académico sino una relación formativa de vida; transmitir carácter, doctrina y hábitos; el rol del mentor como siervo y animador.",
    pedagogicalActivity: "Análisis bíblico de las etapas del discipulado de Pedro y Juan con Jesús.",
    practicalTask: "Entrevistar a su mentor para conocer cómo fue discipulado.",
    evaluationMethod: "Resumen reflexivo sobre el modelo de Jesús.",
  },
  {
    moduleNumber: 21,
    code: "DIS-N3-M03",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Cómo Acompañar a un Nuevo Creyente en sus Primeros Pasos",
    theme: "Cuidado pastoral inicial, consolación y afirmación de la fe en el recién nacido",
    scripturalAnchor: "1 Pedro 2:2; 1 Corintios 3:1-2; Hechos 18:24-28 (Áquila y Priscila)",
    generalObjective: "Capacitar al discípulo con herramientas prácticas para brindar seguimiento pastoral cálido y continuo a un recién convertido.",
    specificObjectives: [
      "Conocer las primeras 72 horas de seguimiento a un nuevo creyente.",
      "Ayudar al nuevo discípulo a establecer hábitos devocionales básicos.",
      "Proteger al recién convertido de dudas, oposición familiar o tentaciones.",
    ],
    weeklyHours: 2,
    lessonContent: "El cuidado del recién nacido espiritual; llamadas y visitas de consolidación; enseñar a orar y leer la Biblia por primera vez; conectarlo con la Familia de Grupo.",
    pedagogicalActivity: "Role-playing de una primera visita de consolidación a un nuevo creyente.",
    practicalTask: "Acompañar a un asistente nuevo a un culto o reunión de hogar.",
    evaluationMethod: "Evaluación de la práctica de consolidación simulada.",
  },
  {
    moduleNumber: 22,
    code: "DIS-N3-M04",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Cómo Compartir el Evangelio con Claridad y Amor",
    theme: "Métodos de evangelismo personal, conversación relacional y uso de las Escrituras",
    scripturalAnchor: "Romanos 10:14-17; 1 Pedro 3:15; Hechos 8:26-38 (Felipe y el etíope)",
    generalObjective: "Adquirir destrezas para presentar el plan de salvación de forma clara, sencilla y respetuosa.",
    specificObjectives: [
      "Dominar un método sencillo de presentación del Evangelio (ej. Camino de Romanos, 4 Verdades).",
      "Aprender a hacer preguntas que abran el corazón a la conversación espiritual.",
      "Guiar a una persona en una oración genuina de entrega a Cristo.",
    ],
    weeklyHours: 2,
    lessonContent: "La gracia en la conversación; cómo iniciar conversaciones sobre Dios con vecinos y compañeros; presentación de Dios, el pecado, la cruz de Cristo y la respuesta de fe; cómo hacer la invitación a creer.",
    pedagogicalActivity: "Práctica intensiva en parejas de presentación del mensaje de salvación en 5 minutos.",
    practicalTask: "Compartir el Evangelio con al menos una persona durante la semana.",
    evaluationMethod: "Informe de testificación personal en clase.",
  },
  {
    moduleNumber: 23,
    code: "DIS-N3-M05",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Cómo Enseñar y Comunicar una Verdad Bíblica",
    theme: "Pedagogía bíblica básica para grupos pequeños y conversaciones formativas",
    scripturalAnchor: "2 Timoteo 2:15; Nehemías 8:8; Santiago 3:1",
    generalObjective: "Desarrollar habilidades para explicar un pasaje bíblico con fidelidad doctrinal, claridad y aplicación práctica.",
    specificObjectives: [
      "Estructurar un estudio bíblico sencillo de 20 minutos.",
      "Formular preguntas abiertas que generen diálogo constructivo en el grupo.",
      "Conectar el texto bíblico con la realidad cotidiana de las personas.",
    ],
    weeklyHours: 2,
    lessonContent: "Elaboración de una lección bíblica: Introducción atractiva, explicación del texto, ilustración de la verdad y llamado a la aplicación; uso de preguntas inductivas; respeto al oyente.",
    pedagogicalActivity: "Micro-enseñanza grupal de 10 minutos evaluada por los compañeros y el maestro.",
    practicalTask: "Diseñar una guía de estudio de 1 página sobre un pasaje de los Proverbios o Evangelios.",
    evaluationMethod: "Rúbrica de evaluación pedagógica de la micro-enseñanza.",
  },
  {
    moduleNumber: 24,
    code: "DIS-N3-M06",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Cómo Desarrollar y Sostener Hábitos Espirituales",
    theme: "La perseverancia en las disciplinas espirituales y la rendición de cuentas",
    scripturalAnchor: "1 Timoteo 4:7-8; Lucas 9:23; Proverbios 27:17",
    generalObjective: "Establecer una rutina sostenible de disciplinas espirituales y aprender a mentorear a otros en la constancia cristiana.",
    specificObjectives: [
      "Identificar los hábitos clave: Palabra diaria, oración constante, ayuno periódico, congregarse y dar.",
      "Comprender la importancia bíblica de la rendición de cuentas mutua en amor.",
      "Superar la pereza espiritual y el estancamiento.",
    ],
    weeklyHours: 2,
    lessonContent: "El entrenamiento en la piedad; cómo crear hábitos que perduren; el ayuno bíblico y su propósito espiritual; la fraternidad de hierro que afila al hierro (Proverbios 27:17).",
    pedagogicalActivity: "Construcción de un plan trimestral de crecimiento personal y rendición de cuentas.",
    practicalTask: "Participar en una jornada de ayuno y oración congregacional.",
    evaluationMethod: "Revisión del plan de crecimiento por el tutor de discipulado.",
  },
  {
    moduleNumber: 25,
    code: "DIS-N3-M07",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Cómo Formar Nuevos Discípulos que Formen a Otros",
    theme: "El ciclo de multiplicación generacional y la paternidad espiritual",
    scripturalAnchor: "1 Corintios 4:15-16; Filipenses 2:19-22 (Pablo y Timoteo); Tito 2:1-8",
    generalObjective: "Comprender la visión de reproducción espiritual generacional hasta ver discípulos de 4ta generación.",
    specificObjectives: [
      "Visualizar la multiplicación espiritual continua.",
      "Asumir la responsabilidad de mentorear al menos a una persona.",
      "Celebrar el crecimiento y madurez de los nuevos discípulos.",
    ],
    weeklyHours: 2,
    lessonContent: "De convertido a discípulo, de discípulo a siervo, de siervo a formador; la relación de mentoría en el hogar y en la iglesia; la paciencia en el proceso de maduración ajena.",
    pedagogicalActivity: "Diseño de un plan individual de mentoría (REN-FORM-DIS-007).",
    practicalTask: "Iniciar el acompañamiento formal 1 a 1 de un nuevo creyente inscrito en Nivel I.",
    evaluationMethod: "Revisión del plan de mentoría y reporte inicial.",
  },
  {
    moduleNumber: 26,
    code: "DIS-N3-M08",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Las Familias de Grupo como Ecosistema de Discipulado",
    theme: "El funcionamiento práctico de las reuniones en hogares conforme a REN-DOC-006",
    scripturalAnchor: "Hechos 5:42; Hechos 20:20; Romanos 16:3-5",
    generalObjective: "Conocer a fondo la dinámica de las Familias de Grupo y prepararse para servir activamente en ellas.",
    specificObjectives: [
      "Reconocer las Familias de Grupo como la estructura capilar oficial de RENACER.",
      "Entender los roles de Anfitrión, Asistente y Líder de Grupo.",
      "Aprender a participar edificando a la comunidad hogareña sin dominar ni manipular.",
    ],
    weeklyHours: 2,
    lessonContent: "Estructura de la reunión de Familia de Grupo (Bienvenida, Alabanza, Edificación en la Palabra, Oración por necesidades, Refrigerio fraternal); límites éticos y prohibición de control privado conforme a REN-DOC-006.",
    pedagogicalActivity: "Simulación de una reunión completa de Familia de Grupo en el aula.",
    practicalTask: "Apoyar al líder de su grupo hogareño en la facilitación de la reunión semanal.",
    evaluationMethod: "Evaluación de la participación práctica en la Familia de Grupo.",
  },
  {
    moduleNumber: 27,
    code: "DIS-N3-M09",
    level: "NIVEL_III",
    levelName: "NIVEL III: HACIENDO DISCÍPULOS",
    moduleTitle: "Multiplicación, Transición y Futuro en la Escuela de Líderes",
    theme: "La culminación de la Escuela de Discípulos y el puente hacia la Escuela de Líderes",
    scripturalAnchor: "Josué 1:6-9; 2 Timoteo 4:1-5; Hebreos 6:1-3",
    generalObjective: "Evaluar el camino recorrido en los 9 meses y prepararse para la graduación y la transición formativa hacia la Escuela de Líderes.",
    specificObjectives: [
      "Consolidar los aprendizajes de los 3 niveles del programa.",
      "Tramitar la solicitud del Certificado de Finalización de la Escuela de Discípulos.",
      "Conocer el perfil y requisitos para postular a la Escuela de Líderes (REN-DOC-006 / REN-DOC-008).",
    ],
    weeklyHours: 2,
    lessonContent: "El mapa formativo de RENACER (Discípulos -> Líderes -> Seminario); qué significa graduarse de discípulo; consagración personal; perseverancia en el servicio; información sobre la Escuela de Líderes.",
    pedagogicalActivity: "Sesión plenaria de testimonios, acción de gracias y evaluación final integral.",
    practicalTask: "Completar la solicitud de certificado (REN-FORM-DIS-006) y el portafolio de tareas de los 3 niveles.",
    evaluationMethod: "Evaluación final integral de Nivel III (REN-FORM-DIS-004), revisión de expediente y dictamen de graduación.",
  },
];

export const DISCIPLES_CURRICULAR_MATRIX: CurricularMatrixRow[] = DISCIPLES_MODULES_CATALOG.map((m) => ({
  nivel: m.levelName,
  modulo: `${m.code} - ${m.moduleTitle}`,
  tema: m.theme,
  objetivo: m.generalObjective,
  practica: m.practicalTask,
  evaluacion: m.evaluationMethod,
}));

export const DISCIPLES_FUTURE_FORMS_CATALOG: DisciplesFutureFormDefinition[] = [
  {
    code: "REN-FORM-DIS-001",
    name: "Solicitud de Ingreso a la Escuela de Discípulos",
    purpose: "Registro formal del postulante, verificación de conversión y asignación de grupo/mentor.",
    responsible: "Secretaría de Discipulado / Coordinador de Nivel",
    retentionPeriod: "Permanente en expediente del miembro",
  },
  {
    code: "REN-FORM-DIS-002",
    name: "Ficha Oficial de Registro de Estudiante",
    purpose: "Expediente académico del discípulo con datos personales, tutor asignado y estado formativo.",
    responsible: "Secretaría de Discipulado",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-DIS-003",
    name: "Ficha de Seguimiento Formativo y Asistencia",
    purpose: "Control semanal de participación, asistencia a clases y asistencia a Familias de Grupo.",
    responsible: "Docente del Módulo / Tutor de Grupo",
    retentionPeriod: "3 años",
  },
  {
    code: "REN-FORM-DIS-004",
    name: "Formulario de Evaluación Integral de Nivel",
    purpose: "Instrumento trimestral de evaluación holística (conocimiento, carácter, práctica y servicio).",
    responsible: "Docente evaluador / Coordinador de Nivel",
    retentionPeriod: "5 años",
  },
  {
    code: "REN-FORM-DIS-005",
    name: "Acta de Registro de Finalización y Calificaciones",
    purpose: "Documento oficial que certifica la aprobación de los 3 niveles y 27 módulos del programa.",
    responsible: "Director de la Escuela de Discípulos / Consejo Ministerial",
    retentionPeriod: "Permanente en archivo institucional",
  },
  {
    code: "REN-FORM-DIS-006",
    name: "Solicitud de Certificado de Finalización",
    purpose: "Trámite de emisión del Certificado Oficial de Finalización de la Escuela de Discípulos.",
    responsible: "Secretaría General / Pastor Fundador",
    retentionPeriod: "Permanente",
  },
  {
    code: "REN-FORM-DIS-007",
    name: "Bitácora de Registro de Mentoría y Discipulado 1 a 1",
    purpose: "Guía de seguimiento de encuentros de mentoría personal y aplicación práctica de la vida cristiana.",
    responsible: "Mentor espiritual asignado",
    retentionPeriod: "1 año (durante el ciclo formativo)",
  },
];

export const MASTER_DISCIPLES_PROGRAM_TITLES: DisciplesProgramTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, PROPÓSITO Y PRINCIPIOS DE LA ESCUELA DE DISCÍPULOS",
    description: "Establece los fines institucionales, la concepción bíblica del discipulado y el marco formativo de RENACER CHURCH.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Propósito y Fines de la Escuela de Discípulos",
        content:
          "El presente Programa Oficial de la Escuela de Discípulos de RENACER (REN-DOC-007) constituye el instrumento pedagógico, espiritual y normativo del primer nivel formal de formación cristiana de la iglesia. Su propósito primordial es llevar a la persona a conocer íntimamente a Cristo Jesús como su Salvador y Señor, establecer fundamentos bíblicos inquebrantables, desarrollar la vida espiritual devocional, impartir la sana doctrina, forjar el carácter cristiano, guiar en la participación responsable en la iglesia local y capacitar al discípulo para que a su vez sea un formador de nuevos creyentes.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-012"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-004", "REN-DOC-005", "REN-DOC-006"],
        practicalProtocol:
          "Todo proceso de enseñanza y mentoría se armonizará con la Declaración de Fe (REN-DOC-001) y la Constitución (REN-DOC-002).",
      },
      {
        sectionNumber: "1.2",
        title: "Naturaleza Formativa y Delimitación Institucional",
        content:
          "La Escuela de Discípulos es un programa formativo de discipulado cristiano básico y membresía eclesial. Se aclara expresamente que:\n1. NO es un seminario ministerial ni un programa de teología profesional.\n2. NO concede licencia ministerial ni acredita como ministro.\n3. NO concede ordenación pastoral mediante imposición de manos.\n4. NO sustituye al Seminario Bíblico RENACER ni al Reglamento de Credenciales Ministeriales (REN-DOC-010).\n5. El Certificado de Finalización acredita exclusivamente la culminación exitosa del ciclo formativo de 9 meses y la aptitud para solicitar la membresía plena o postular a la Escuela de Líderes, sin convertir automáticamente al estudiante en líder de la iglesia.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-012", "DEC-DEF-016"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006", "REN-DOC-010"],
        practicalProtocol:
          "La secretaría académica incluirá esta advertencia en el encabezado de las matrículas y en el diploma oficial de finalización.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "ESTRUCTURA TEMPORAL Y NIVELES FORMATIVOS",
    description: "Norma la duración de 9 meses y la división progresiva en 3 niveles pedagógicos.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Duración de 9 Meses y Progresión Trimestral",
        content:
          "El programa de la Escuela de Discípulos tiene una duración estricta de nueve (9) meses lectivos continuos (conforme a la decisión institucional DEC-DEF-012), organizado en tres (3) niveles secuenciales de tres (3) meses cada uno:\n\n* NIVEL I: CONOCIENDO A CRISTO (Meses 1 al 3 — Módulos 1 al 9)\n* NIVEL II: CRECIENDO EN CRISTO (Meses 4 al 6 — Módulos 10 al 18)\n* NIVEL III: HACIENDO DISCÍPULOS (Meses 7 al 9 — Módulos 19 al 27)\n\nCada nivel cuenta con 9 módulos formativos sustanciales, totalizando 27 módulos temáticos y prácticos que cubren de manera exhaustiva el desarrollo del creyente.",
        decisionIds: ["DEC-DEF-012"],
        dependencies: ["REN-DOC-002", "REN-DOC-005"],
      },
      {
        sectionNumber: "2.2",
        title: "Mapa de Formación y Ruta de Crecimiento Espiritual",
        content:
          "La trayectoria del creyente en el ecosistema formativo de RENACER responde a la siguiente ruta institucional:\n\nDISCÍPULO / NUEVO CREYENTE\n   ↓\nNIVEL I: CONOCIENDO A CRISTO (3 Meses)\n   ↓\nNIVEL II: CRECIENDO EN CRISTO (3 Meses — Bautismo en Agua)\n   ↓\nNIVEL III: HACIENDO DISCÍPULOS (3 Meses — Multiplicación)\n   ↓\nCERTIFICADO DE FINALIZACIÓN\n   ↓\nESCUELA DE LÍDERES (6 Meses — REN-DOC-008)\n   ↓\nSEMINARIO BÍBLICO RENACER (Formación Teológica Superior)",
        decisionIds: ["DEC-DEF-010", "DEC-DEF-012", "DEC-DEF-013", "DEC-DEF-014"],
        dependencies: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "PERFILES DE INGRESO Y EGRESO DEL DISCÍPULO",
    description: "Establece los requisitos para ingresar al programa y las competencias espirituales esperadas al graduarse.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "Perfil de Ingreso",
        content:
          "La Escuela de Discípulos está abierta a todo hombre y mujer que cumpla con:\n1. Haber profesado fe en el Señor Jesucristo o manifestar un deseo genuino y sincero de conocer a Dios y la doctrina cristiana.\n2. Disposición para asistir puntualmente a las clases semanales y participar en los tiempos devocionales.\n3. Voluntad para integrarse a una Familia de Grupo de la iglesia.\n4. No se exigirá nivel educativo formal previo, condición socioeconómica, estatus civil ni aportación económica obligatoria alguna.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012", "DEC-DEF-015"],
        dependencies: ["REN-DOC-005"],
      },
      {
        sectionNumber: "3.2",
        title: "Perfil de Egreso",
        content:
          "Al culminar satisfactoriamente los 9 meses de la Escuela de Discípulos, el egresado:\n1. Conoce con claridad y solidez la persona de Jesucristo, el plan de salvación y la doctrina cristiana fundamental (REN-DOC-001).\n2. Ha sido bautizado en agua por inmersión o está formalmente preparado para recibirlo.\n3. Practica una disciplina diaria de lectura bíblica, oración e intercesión.\n4. Manifiesta el fruto del Espíritu Santo en su carácter, hogar y entorno social.\n5. Participa activamente en una Familia de Grupo y en la vida litúrgica de la iglesia.\n6. Es capaz de compartir el Evangelio con claridad y acompañar espiritualmente a un nuevo creyente.\n7. Ejerce una mayordomía cristiana gozosa y libre de coerción legalista.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012", "DEC-DEF-017", "DEC-DEF-018"],
        dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "METODOLOGÍA PEDAGÓGICA INTEGRAL",
    description: "Define el modelo de enseñanza activa, devocional, dialógica y vivencial de la escuela.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "Enfoque Metodológico Multidimensional",
        content:
          "La Escuela de Discípulos rechaza la mera transmisión memorística o pasiva de conceptos teológicos. Su metodología combina armónicamente:\n1. ENSEÑANZA BÍBLICA EXPOSITIVA: Explicación clara y cristocéntrica de las Escrituras.\n2. LECTURA Y ESTUDIO PERSONAL: Planes devocionales semanales guiados.\n3. DIÁLOGO Y CONVERSACIÓN: Espacio para preguntas sinceras, resolución de dudas y reflexión comunitaria.\n4. ORACIÓN E INTERCESIÓN: Práctica constante de la oración en cada sesión.\n5. MENTORÍA Y ACOMPAÑAMIENTO 1 A 1: Apoyo pastoral cercano por parte de un tutor o líder de Familia de Grupo.\n6. ACTIVIDADES Y SERVICIO PRÁCTICO: Aplicación vivencial del amor de Cristo en el hogar, la iglesia y la comunidad.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "4.2",
        title: "Arquitectura Estándar de Clases",
        content:
          "Cada una de las 27 lecciones del programa se estructura bajo el siguiente esquema pedagógico uniforme:\n1. Código y Título de la Lección.\n2. Texto Bíblico Base y Pasajes de Apoyo.\n3. Objetivo General y Específicos de la Sesión.\n4. Exposición Doctrinal y Contenido Central.\n5. Preguntas de Reflexión y Diálogo Grupal.\n6. Ilustración y Dinámica Pedagógica.\n7. Aplicación Personal a la Vida Cotidiana.\n8. Tarea Práctica Devocional para la Semana.\n9. Criterio de Evaluación y Seguimiento del Tutor.",
        decisionIds: ["DEC-DEF-012"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "ESTRUCTURA DE LOS LIBROS DEL MAESTRO Y DEL ESTUDIANTE",
    description: "Define las especificaciones para los materiales impresos y digitales independientes de la escuela.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Especificación del Libro del Maestro",
        content:
          "El Libro del Maestro de la Escuela de Discípulos es un documento pedagógico independiente para uso exclusivo de los instructores y tutores. Para cada uno de los 27 módulos contiene:\n1. Objetivos pedagógicos y espirituales profundos.\n2. Exégesis y notas doctrinales de fondo con referencias a la Declaración de Fe (REN-DOC-001).\n3. Guía de preguntas con respuestas sugeridas y errores doctrinales comunes a corregir con amor.\n4. Dinámicas pedagógicas de aula y tiempos sugeridos para cada bloque de la clase.\n5. Rúbricas de evaluación formativa y recomendaciones para el acompañamiento pastoral individual.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-005", "DEC-DEF-012"],
        dependencies: ["REN-DOC-001", "REN-DOC-004"],
      },
      {
        sectionNumber: "5.2",
        title: "Especificación del Libro del Estudiante",
        content:
          "El Libro del Estudiante es el manual de trabajo personal del discípulo. Para cada lección incluye:\n1. Objetivos claros de aprendizaje personal.\n2. Textos bíblicos impresos y espacio para notas personales.\n3. Explicación resumida y accesible del tema doctrinal.\n4. Cuestionarios de estudio personal y ejercicios devocionales diarios.\n5. Registro de lecturas bíblicas y bitácora de oración.\n6. Guía de aplicación práctica en el hogar y en la Familia de Grupo.",
        decisionIds: ["DEC-DEF-012"],
        dependencies: ["REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "SISTEMA DE EVALUACIÓN, SEGUIMIENTO Y ASISTENCIA",
    description: "Norma los criterios de valoración holística y control formativo del aprendizaje.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "Evaluación Holística y Formativa",
        content:
          "La evaluación en la Escuela de Discípulos no se limita a exámenes teóricos escritos. Evalúa de manera balanceada:\n1. CONOCIMIENTO Y COMPRENSIÓN: Comprensión de las verdades bíblicas fundamentales.\n2. ACTITUD Y CARÁCTER: Evidencias del fruto del Espíritu y amor fraternal.\n3. PARTICIPACIÓN Y PRÁCTICA: Asistencia a clases, tiempo devocional y participación en Familias de Grupo.\n4. DISCIPULADO Y SERVICIO: Acompañamiento a otros creyentes y servicio voluntario.\n\nLa evaluación trimestral se registra formalmente en el Formulario de Evaluación Integral de Nivel (REN-FORM-DIS-004).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "6.2",
        title: "Seguimiento de Participación y Asistencia",
        content:
          "Los docentes y tutores registrarán semanalmente la asistencia y entrega de tareas devocionales en la Ficha de Seguimiento (REN-FORM-DIS-003). Ante inasistencias por motivos laborales, de salud o fuerza mayor, el tutor coordinará sesiones de recuperación personalizadas para no retrasar el proceso espiritual del discípulo. Las políticas cuantitativas de porcentajes mínimos estrictos se mantienen abiertas como materia de propuesta pedagógica sin rigidez legalista.",
        decisionIds: ["DEC-DEF-012"],
        dependencies: ["REN-DOC-005"],
        pendingDefinitionNotes: "El Consejo Ministerial evaluará en resoluciones operativas futuras el porcentaje formal de asistencia sugerido (propuesta pedagógica orientativa del 80%).",
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "SISTEMA DE CERTIFICACIÓN Y GRADUACIÓN",
    description: "Regula el otorgamiento solemne del Certificado Oficial de Finalización y sus efectos eclesiásticos.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "El Certificado de Finalización de la Escuela de Discípulos",
        content:
          "Al completar satisfactoriamente los 27 módulos de los tres niveles y contar con el informe favorable del tutor y la aprobación del Consejo Ministerial, el estudiante recibirá en ceremonia congregacional el CERTIFICADO DE FINALIZACIÓN DE LA ESCUELA DE DISCÍPULOS, suscrito por el Pastor Fundador y el Director de Discipulado.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-012"],
        dependencies: ["REN-DOC-004", "REN-DOC-005"],
      },
      {
        sectionNumber: "7.2",
        title: "Efectos y Delimitación del Certificado",
        content:
          "Se reafirma categóricamente que el Certificado de Finalización de la Escuela de Discípulos:\n1. Certifica la madurez y preparación para la admisión como Miembro Pleno de RENACER CHURCH (REN-DOC-005).\n2. Habilita para postular formalmente a la Escuela de Líderes (REN-DOC-006 / REN-DOC-008).\n3. NO constituye ordenación pastoral ni confiere facultades ministeriales exclusivas del presbiterio.\n4. NO constituye licencia ministerial bajo REN-DOC-010.\n5. NO faculta para realizar actos sacerdotales reservados a ministros ordenados.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-012", "DEC-DEF-016"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006", "REN-DOC-010"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "DISCIPULADO PERSONAL, SALVAGUARDAS Y LÍMITES DE AUTORIDAD",
    description: "Consagra la protección de los discípulos frente al abuso pastoral y la manipulación espiritual.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Mentoría Espiritual en Amor y Respeto",
        content:
          "El acompañamiento 1 a 1 entre mentor y discípulo es un ministerio sagrado de apoyo, oración y modelaje cristiano. Todo tutor o docente debe actuar como padre o madre espiritual con paciencia, ternura y humildad (1 Tesalonicenses 2:7-8).",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-012", "DEC-DEF-013"],
        dependencies: ["REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "8.2",
        title: "Límites Estrictos y Prohibiciones Absolutas en el Discipulado",
        content:
          "En estricta armonía con REN-DOC-005 y REN-DOC-006, ningún mentor, docente o líder de discipulado podrá ejercer control, coerción o intromisión en:\n1. Las finanzas privadas o decisiones patrimoniales del discípulo.\n2. La vida sentimental, elección de cónyuge o relaciones matrimoniales legítimas.\n3. Decisiones de salud, tratamientos clínicos o consultas médicas privadas.\n4. Elección de empleo, estudios seculares o residencia familiar.\n5. Asuntos civiles, electorales o de opinión ciudadana.\n\nQueda absolutamente proscrita la manipulación espiritual, el uso de amenazas divinas o la invocación de profecías ('Dios me dijo que tienes que...') para doblegar la voluntad del discípulo.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
        practicalProtocol:
          "Cualquier abuso de autoridad o intento de control privado reportado por un discípulo activará el proceso disciplinario inmediato contra el mentor infractor.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "IGUALDAD, FAMILIAS DE GRUPO Y ARTICULACIÓN ECLESIAL",
    description: "Garantiza la plena inclusión de mujeres, la integración con las reuniones hogareñas y la docencia.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "Plena Participación de Hombres y Mujeres sin Discriminación",
        content:
          "La Escuela de Discípulos garantiza la igualdad absoluta de acceso formativo para hombres y mujeres. Tanto varones como mujeres pueden cursar los niveles, ejercer como tutores y docentes, y avanzar posteriormente hacia el liderazgo, la Escuela de Líderes, credenciales ministeriales y ordenación pastoral conforme a la doctrina oficial de la iglesia (Gálatas 3:28; REN-DOC-001; DEC-DEF-015).",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-015", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
      },
      {
        sectionNumber: "9.2",
        title: "Integración Vital con las Familias de Grupo",
        content:
          "La Escuela de Discípulos opera en estrecha simbiosis con la Red de Familias de Grupo (término exclusivo oficial de RENACER). La reunión hogareña semanal es el laboratorio práctico donde el estudiante vive la comunión fraterna, comparte motivos de oración, sirve a los hermanos y pone en práctica los principios aprendidos en clase.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-011", "DEC-DEF-012"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
      {
        sectionNumber: "9.3",
        title: "Perfil y Requisitos del Docente y Tutor de Discipulado",
        content:
          "Los docentes y tutores de la Escuela de Discípulos deben ser miembros activos graduados de la Escuela de Líderes (o con formación teológica equivalente), con testimonio irreprochable, vida de oración comprobada y fidelidad doctrinal inquebrantable a REN-DOC-001. La coordinación docente dependerá de la Dirección de Discipulado y el Consejo Ministerial, sin que los instructores asuman facultades de gobierno corporativo reservadas a los Trustees.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-012"],
        dependencies: ["REN-DOC-004", "REN-DOC-006"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "PROTECCIÓN A POBLACIONES VULNERABLES, REGISTROS Y RÉGIMEN LEGAL",
    description: "Norma el resguardo de menores, la privacidad de datos personales y la reserva jurídica.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Protección Integral de Menores y Voluntarios",
        content:
          "Cuando adolescentes o menores de edad participen en cursos adaptados de la Escuela de Discípulos, toda la actividad formativa quedará sujeta estrictamente a las salvaguardas preventivas del Manual de Ministerio Infantil y Juvenil (REN-DOC-016), incluyendo la regla de dos adultos presentes, autorización escrita de los padres y verificación de antecedentes de los tutores. Ante cualquier indicio de abuso infantil o maltrato, rige el deber irrenunciable de denuncia inmediata a las autoridades de New Jersey (1-877-NJ-ABUSE / N.J.S.A. 9:6-8.10).",
        decisionIds: ["DEC-DEF-013", "DEC-DEF-019"],
        dependencies: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-016"],
        legalReviewRequired: true,
      },
      {
        sectionNumber: "10.2",
        title: "Custodia de Registros, Privacidad y Estado Legal",
        content:
          "Los expedientes académicos, registros de inscripción, calificaciones y bitácoras de mentoría serán custodiados bajo estricta confidencialidad por la Secretaría de Discipulado en coordinación con el archivo general (REN-DOC-019). El presente programa conserva el estado formal REQUIERE_REVISION_LEGAL para garantizar su conformidad plena con la legislación civil de New Jersey y normas de protección de datos personales.",
        decisionIds: ["DEC-DEF-002", "DEC-DEF-012"],
        dependencies: ["REN-DOC-003", "REN-DOC-019"],
        legalReviewRequired: true,
      },
    ],
  },
];

export const FULL_DISCIPLES_PROGRAM_DRAFT: MasterDisciplesProgramDraft = {
  code: "REN-DOC-007",
  id: "doc-ren-007",
  title: "PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER",
  shortTitle: "Programa de la Escuela de Discípulos",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "DISCIPULADO",
  author: "Pastor Fundador / Consejo Ministerial",
  authorId: "usr-fundador-001",
  responsibleArea: "DIRECCION_DISCIPULADO_Y_FORMACION",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "PROGRAMA_ACADEMICO",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER CHURCH (REN-DOC-007) establece el plan maestro de formación cristiana inicial, discipulado integral y consolidación doctrinal de la iglesia. Fundado sobre la autoridad suprema de las Sagradas Escrituras y en estricta armonía con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Manual de Gobierno (REN-DOC-004), el Manual de Membresía (REN-DOC-005) y el Manual de Ministerios y Liderazgo (REN-DOC-006), este programa estructura un trayecto de 9 meses lectivos distribuidos en tres niveles pedagógicos: Conociendo a Cristo, Creciendo en Cristo y Haciendo Discípulos. Su meta es formar discípulos maduros, arraigados en la gracia, firmes en la sana doctrina, llenos del Espíritu Santo y capacitados para reproducir la vida de Cristo en otros, resguardando en todo momento la dignidad, la libertad de conciencia y la protección de los creyentes frente a cualquier abuso de poder.",
  durationMonths: 9,
  levelsCount: 3,
  titles: MASTER_DISCIPLES_PROGRAM_TITLES,
  modules: DISCIPLES_MODULES_CATALOG,
  curricularMatrix: DISCIPLES_CURRICULAR_MATRIX,
  futureForms: DISCIPLES_FUTURE_FORMS_CATALOG,
};

export const DISCIPLES_SCHOOL_PROGRAM_DRAFT = FULL_DISCIPLES_PROGRAM_DRAFT;

export function getAllDisciplesProgramSections(): DisciplesManualSection[] {
  return MASTER_DISCIPLES_PROGRAM_TITLES.flatMap((t) => t.sections);
}

export function generateFullDisciplesProgramMarkdown(): string {
  const prog = FULL_DISCIPLES_PROGRAM_DRAFT;
  let md = `# ${prog.title}\n\n`;
  md += `**Código:** ${prog.code} | **Versión:** v${prog.version} | **Jerarquía:** ${prog.hierarchyLevel}\n`;
  md += `**Estado de Trabajo:** ${prog.status} | **Estado de Adopción:** ${prog.adoptionStatus}\n`;
  md += `**Estado Legal:** ${prog.legalState} | **Duración Total:** ${prog.durationMonths} Meses (3 Niveles / 27 Módulos)\n\n`;
  md += `> **ADVERTENCIA INSTITUCIONAL Y LEGAL:** Documento en fase de redacción técnica preliminar (v0.1). No adoptado formalmente. Requiere revisión letrada integral previa a su adopción.\n\n`;
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

  md += `## MATRIZ CURRICULAR GENERAL (27 MÓDULOS EN 3 NIVELES)\n\n`;
  md += `| Nivel | Módulo y Código | Tema Central | Objetivo General | Tarea Práctica | Método de Evaluación |\n`;
  md += `|---|---|---|---|---|---|\n`;
  for (const row of prog.curricularMatrix) {
    md += `| **${row.nivel}** | ${row.modulo} | ${row.tema} | ${row.objetivo} | ${row.practica} | ${row.evaluacion} |\n`;
  }
  md += `\n---\n\n`;

  md += `## DESARROLLO ANALÍTICO DE MÓDULOS (ARQUITECTURA DE CLASE)\n\n`;
  for (const m of prog.modules) {
    md += `### ${m.code}: ${m.moduleTitle}\n\n`;
    md += `**Nivel:** ${m.levelName} | **Carga Horaria Semanal:** ${m.weeklyHours} Horas\n\n`;
    md += `- **Texto Bíblico Base:** ${m.scripturalAnchor}\n`;
    md += `- **Tema:** ${m.theme}\n`;
    md += `- **Objetivo General:** ${m.generalObjective}\n`;
    md += `- **Objetivos Específicos:**\n`;
    for (const obj of m.specificObjectives) {
      md += `  * ${obj}\n`;
    }
    md += `- **Contenido Doctrinal:** ${m.lessonContent}\n`;
    md += `- **Actividad Pedagógica de Aula:** ${m.pedagogicalActivity}\n`;
    md += `- **Tarea y Aplicación Práctica:** ${m.practicalTask}\n`;
    md += `- **Método de Evaluación:** ${m.evaluationMethod}\n\n`;
  }
  md += `---\n\n`;

  md += `## CATÁLOGO DE FORMULARIOS FUTUROS DE LA ESCUELA DE DISCÍPULOS\n\n`;
  md += `| Código | Nombre del Formulario | Propósito | Responsable de Custodia | Retención |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const form of prog.futureForms) {
    md += `| **${form.code}** | ${form.name} | ${form.purpose} | ${form.responsible} | ${form.retentionPeriod} |\n`;
  }
  md += `\n`;

  return md;
}
