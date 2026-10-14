/**
 * REN-DOC-016 — MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER
 * Versión: v0.1 | Estado: EN_REDACCION | DecisionState: DEFINIDA | Adoption: NO_ADOPTADA
 * LegalState: REQUIERE_REVISION_LEGAL | Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: INFANTIL_JUVENIL
 * 
 * BORRADOR — NO ADOPTADO | REQUIERE REVISIÓN LEGAL
 */

export interface ChildYouthArticleDraft {
  number: number;
  title: string;
  content: string[];
  dependencies?: string[];
  crossReferences?: string[];
  keyPrinciples?: string[];
  requiresLegalReview?: boolean;
  isPendingDefinition?: boolean;
}

export interface ChildYouthTitleDraft {
  number: string;
  romanNumeral: string;
  title: string;
  description: string;
  articles: ChildYouthArticleDraft[];
}

export interface ChildYouthFormDescriptor {
  code: string;
  title: string;
  purpose: string;
  responsibleRole: string;
  frequency: string;
  retentionCategory: string;
}

export interface ChildrenYouthManualDraft {
  documentNumber: string;
  title: string;
  shortTitle: string;
  hierarchyLevel: string;
  category: string;
  subcategory: string;
  version: string;
  documentState: string;
  decisionState: string;
  adoptionState: string;
  legalState: string;
  author: string;
  responsibleArea: string;
  approvalAuthority: string;
  confidentiality: string;
  pithySummary: string;
  preamble: string;
  titles: ChildYouthTitleDraft[];
  formsCatalog: ChildYouthFormDescriptor[];
  decisionsUsed: string[];
  pendingDefinitions: string[];
  legalReviewMatters: string[];
}

export const CHILDREN_YOUTH_FORMS_CATALOG: ChildYouthFormDescriptor[] = [
  {
    code: "REN-FORM-IJ-001",
    title: "Registro Individual de Niño y Joven",
    purpose: "Inscripción formal del menor, datos de filiación, necesidades especiales e información de contacto.",
    responsibleRole: "Secretaría del Ministerio Infantil y Juvenil / Padres",
    frequency: "Al ingreso del menor y actualización anual",
    retentionCategory: "EXPEDIENTE_INFANTIL_JUVENIL",
  },
  {
    code: "REN-FORM-IJ-002",
    title: "Autorización y Consentimiento General de Participación",
    purpose: "Consentimiento informado de padres o tutores para la asistencia regular a clases y cultos juveniles.",
    responsibleRole: "Padres o Tutores Legales / Director de Ministerio",
    frequency: "Anual o al momento del registro",
    retentionCategory: "CONSENTIMIENTOS_LEGALES",
  },
  {
    code: "REN-FORM-IJ-003",
    title: "Ficha de Contacto Familiar y Personas Autorizadas",
    purpose: "Designación formal de tutores y terceros expresamente autorizados para la entrega y recogida del menor.",
    responsibleRole: "Padres o Tutores Legales",
    frequency: "Anual o por cambio de tutores",
    retentionCategory: "EXPEDIENTE_FAMILIAR_RESTRINGIDO",
  },
  {
    code: "REN-FORM-IJ-004",
    title: "Autorización para Salidas, Visitas y Actividades Especiales",
    purpose: "Permiso específico para eventos fuera de la sede eclesiástica (retiros, parques, museos).",
    responsibleRole: "Padres o Tutores Legales / Líder de Actividad",
    frequency: "Por evento o salida externa",
    retentionCategory: "PERMISOS_ACTIVIDADES",
  },
  {
    code: "REN-FORM-IJ-005",
    title: "Autorización y Registro de Transporte de Menores",
    purpose: "Consentimiento para traslado en vehículos institucionales o de servidores autorizados.",
    responsibleRole: "Padres o Tutores / Conductor Designado",
    frequency: "Por viaje o vigencia anual",
    retentionCategory: "TRANSPORTE_SALVAGUARDAS",
  },
  {
    code: "REN-FORM-IJ-006",
    title: "Autorización de Uso de Imagen y Medios Digitales",
    purpose: "Permiso expreso para fotografías o grabaciones en actividades ministeriales oficiales.",
    responsibleRole: "Padres o Tutores Legales",
    frequency: "Anual",
    retentionCategory: "DERECHOS_IMAGEN_CONFIDENCIAL",
  },
  {
    code: "REN-FORM-IJ-007",
    title: "Solicitud y Registro de Servidor o Voluntario Infantil/Juvenil",
    purpose: "Postulación para colaborar en el ministerio de niños y jóvenes, incluyendo verificación de antecedentes.",
    responsibleRole: "Aspirante a Voluntario / Comisión de Salvaguardas",
    frequency: "Por postulación",
    retentionCategory: "EXPEDIENTE_VOLUNTARIO",
  },
  {
    code: "REN-FORM-IJ-008",
    title: "Evaluación Periódica de Desempeño y Carácter de Servidores",
    purpose: "Dictamen pastoral sobre testimonio, madurez, trato con menores y cumplimiento de salvaguardas.",
    responsibleRole: "Director de Ministerio / Pastor Supervisor",
    frequency: "Semestral o Anual",
    retentionCategory: "EVALUACIONES_MINISTERIALES",
  },
  {
    code: "REN-FORM-IJ-009",
    title: "Registro de Capacitación Obligatoria en Salvaguardas y Protección",
    purpose: "Acreditación de asistencia a talleres de prevención de abusos, regla de dos adultos y primeros auxilios.",
    responsibleRole: "Oficial de Salvaguardas / Capacitador",
    frequency: "Por sesión de entrenamiento",
    retentionCategory: "REGISTROS_CAPACITACION",
  },
  {
    code: "REN-FORM-IJ-010",
    title: "Reporte de Incidente, Accidente o Revelación Infantil/Juvenil",
    purpose: "Documentación inmediata y confidencial de cualquier lesión, situación de riesgo o sospecha de daño.",
    responsibleRole: "Maestro / Servidor / Director de Ministerio",
    frequency: "Inmediata ante cualquier incidente",
    retentionCategory: "INCIDENTES_SALVAGUARDAS_RESERVADO",
  },
  {
    code: "REN-FORM-IJ-011",
    title: "Ficha de Planificación y Seguridad de Campamento o Retiro",
    purpose: "Memoria operativa que desglosa rutas de evacuación, alojamiento por sexo, botiquín y contactos de emergencia.",
    responsibleRole: "Coordinador de Campamento / Oficial de Seguridad",
    frequency: "Por campamento o retiro",
    retentionCategory: "PLANIFICACION_LOGISTICA",
  },
  {
    code: "REN-FORM-IJ-012",
    title: "Evaluación Anual Integral del Ministerio Infantil y Juvenil",
    purpose: "Balance cualitativo y espiritual de crecimiento, discipulado, integración familiar y retención.",
    responsibleRole: "Director General del Ministerio / Pastor Fundador",
    frequency: "Anual",
    retentionCategory: "MEMORIA_HISTORICA_MINISTERIAL",
  },
];

export const CHILDREN_YOUTH_MANUAL_DRAFT: ChildrenYouthManualDraft = {
  documentNumber: "REN-DOC-016",
  title: "MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER",
  shortTitle: "Manual de Ministerio Infantil y Juvenil",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "INFANTIL_JUVENIL",
  subcategory: "Discipulado, Educación Bíblica, Juventud y Salvaguardas Infantiles",
  version: "0.1",
  documentState: "EN_REDACCION",
  decisionState: "DEFINIDA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  author: "Luis Uchubanda Falconí / Comisión de Ministerio Infantil y Juvenil",
  responsibleArea: "DIRECCION_INFANTIL_JUVENIL",
  approvalAuthority: "PASTOR_FUNDADOR",
  confidentiality: "INTERNO_CONGREGACION",
  pithySummary: "Marco normativo institucional para la evangelización, discipulado, educación bíblica, desarrollo de liderazgo y protección integral de niños, preadolescentes y jóvenes en RENACER CHURCH, INC., asegurando la primacía incondicional de las salvaguardas y el respeto a la patria potestad familiar.",
  preamble: "Los niños y jóvenes no son simplemente el futuro de la Iglesia, sino parte viva, vibrante y esencial del cuerpo de Cristo en el presente. Nuestro Señor Jesucristo enseñó con firmeza: «Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos» (Mateo 19:14), y el apóstol Pablo exhortó: «Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza» (1 Timoteo 4:12). RENACER CHURCH, INC. establece el presente Manual Oficial de Ministerio Infantil y Juvenil (REN-DOC-016) como instrumento pastoral y pedagógico para formar una nueva generación consagrada a Dios, con carácter piadoso, discernimiento bíblico y pasión por el Reino. Al mismo tiempo, este manual consagra de manera innegociable que ningún celo ministerial o actividad eclesiástica justificará jamás relajar la seguridad, dignidad e integridad física, emocional, espiritual y digital de los menores, rigiéndose bajo la absoluta subordinación a las salvaguardas institucionales de REN-DOC-014.",
  formsCatalog: CHILDREN_YOUTH_FORMS_CATALOG,
  decisionsUsed: [
    "DEC-DEF-001",
    "DEC-DEF-004",
    "DEC-DEF-005",
    "DEC-DEF-010",
    "DEC-DEF-011",
    "DEC-DEF-013",
    "DEC-DEF-019",
    "DEC-PEND-010",
  ],
  pendingDefinitions: [
    "Rangos cronológicos cuantitativos exactos para la transición entre etapas de niñez, preadolescencia y juventud [PENDIENTE_DEFINIR]",
    "Tiempo mínimo de membresía y servicio activo requerido para postular como maestro o líder juvenil [PENDIENTE_DEFINIR]",
    "Frecuencia obligatoria de evaluación de desempeño y renovación de credenciales de voluntarios [PENDIENTE_DEFINIR]",
    "Plazo estándar de retención y custodia de expedientes de menores inactivos o egresados [PENDIENTE_DEFINIR]",
    "Métricas y baremos cuantitativos de retención y crecimiento espiritual en el ministerio [PENDIENTE_DEFINIR]",
    "Periodicidad exacta de los talleres y reentrenamientos en salvaguardas y primeros auxilios [PENDIENTE_DEFINIR]",
  ],
  legalReviewMatters: [
    "Protocolos de verificación de antecedentes penales (background checks) y salvaguardas estatales en New Jersey [REQUIERE_REVISION_LEGAL]",
    "Requisitos formales y formalidades notariales de autorizaciones parentales para viajes interestatales e internacionales [REQUIERE_REVISION_LEGAL]",
    "Pólizas de seguro de responsabilidad civil, cobertura médica de accidentes y transporte de menores [REQUIERE_REVISION_LEGAL]",
    "Privacidad de datos de menores, consentimiento digital parental y cumplimiento de leyes de protección de imagen [REQUIERE_REVISION_LEGAL]",
    "Regulaciones sanitarias para la administración documentada de medicamentos y planes de atención médica especial [REQUIERE_REVISION_LEGAL]",
    "Convenios de colaboración o uso de espacios con instituciones educativas y entidades públicas [REQUIERE_REVISION_LEGAL]",
  ],
  titles: [
    {
      number: "1",
      romanNumeral: "I",
      title: "NATURALEZA, PROPÓSITO INSTITUCIONAL Y PRIMACÍA DE LA PROTECCIÓN DEL MENOR",
      description: "Marco fundacional, jerarquía normativa y principio incondicional de salvaguardas.",
      articles: [
        {
          number: 1,
          title: "Naturaleza y Jerarquía del Manual",
          content: [
            "El presente Manual Oficial de Ministerio Infantil y Juvenil (REN-DOC-016) constituye la norma institucional de Nivel 4 que rige la visión, pedagogía, discipulado, liderazgo y operación de todas las actividades eclesiásticas dirigidas a niños, preadolescentes y jóvenes en RENACER CHURCH, INC.",
            "Este Manual se fundamenta en las Sagradas Escrituras y se articula en armonía con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), el Código de Ética (REN-DOC-011) y el Manual de Salvaguardas (REN-DOC-014).",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 2,
          title: "Propósito Integral del Ministerio de Nuevas Generaciones",
          content: [
            "El ministerio infantil y juvenil tiene por objeto: a) Guiar a los menores al conocimiento salvador de Jesucristo; b) Impartir instrucción bíblica sólida y cristocéntrica; c) Forjar el carácter cristiano en pureza, verdad y servicio; d) Desarrollar la vida devocional y de oración; e) Estimular el descubrimiento de talentos y dones espirituales; y f) Capacitar a los jóvenes para la vida adulta y el liderazgo eclesiástico.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-006", "REN-DOC-007"],
        },
        {
          number: 3,
          title: "Principio de Primacía Absoluta de la Protección y Seguridad del Menor",
          content: [
            "Ningún objetivo ministerial, celo evangelístico, dinámica de campamento o actividad comunitaria justificará jamás comprometer la seguridad física, emocional, sexual, espiritual o digital de un menor de edad.",
            "En caso de conflicto o duda entre la realización de una actividad eclesiástica y el cumplimiento estricto de una medida de protección de salvaguardas, prevalecerá en todo momento la protección incondicional del menor.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 4,
          title: "Deslinde con la Denominación y Autonomía Pastoral",
          content: [
            "El ministerio de nuevas generaciones opera bajo la autoridad constitucional del Pastor Fundador y el Consejo de Gobierno de RENACER CHURCH, INC., sin someterse a currículos o directrices burocráticas foráneas que comprometan la sana doctrina o la autonomía de la iglesia local.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-004"],
        },
      ],
    },
    {
      number: "2",
      romanNumeral: "II",
      title: "ARTICULACIÓN NORMATIVA Y SUBORDINACIÓN A LAS SALVAGUARDAS DE REN-DOC-014",
      description: "Coordinación transversal con los manuales rectores y prevalencia de las normas de protección.",
      articles: [
        {
          number: 5,
          title: "Vínculo con el Sistema de Documentación Institucional",
          content: [
            "El presente manual se aplica conjuntamente con: REN-DOC-005 (Membresía), REN-DOC-006 (Ministerios), REN-DOC-007 (Escuela de Discípulos), REN-DOC-008 (Escuela de Líderes), REN-DOC-009 (Seminario), REN-DOC-011 (Ética), REN-DOC-012 (Ceremonias), REN-DOC-013 (Finanzas), REN-DOC-014 (Protección y Salvaguardas) y REN-DOC-015 (Misiones).",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-007", "REN-DOC-008", "REN-DOC-009", "REN-DOC-011", "REN-DOC-012", "REN-DOC-013", "REN-DOC-014", "REN-DOC-015"],
        },
        {
          number: 6,
          title: "Prioridad Operativa de REN-DOC-014",
          content: [
            "En cualquier circunstancia de sospecha de abuso, protocolo de emergencia, selección de voluntarios, regla de dos adultos o custodia de datos médicos, rige prioritariamente lo normado en el Manual Oficial de Protección, Seguridad y Salvaguardas (REN-DOC-014).",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 7,
          title: "Prohibición de Reglas Locales Menos Exigentes",
          content: [
            "Ninguna congregación, ministerio juvenil, clase dominical o campamento de RENACER podrá relajar, omitir o crear excepciones discrecionales a las salvaguardas institucionales establecidas en este manual o en REN-DOC-014.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 8,
          title: "Coordinación Pastoral con la Comisión de Salvaguardas",
          content: [
            "La Dirección Infantil y Juvenil mantendrá enlace permanente con la Comisión de Salvaguardas para la revisión periódica de protocolos, auditoría de aulas y actualización de medidas preventivas.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "3",
      romanNumeral: "III",
      title: "ESTRUCTURA INSTITUCIONAL DE EDADES Y ETAPAS DEL DESARROLLO",
      description: "Clasificación pedagógica y ministerial por etapas de madurez bio-psico-social y espiritual.",
      articles: [
        {
          number: 9,
          title: "Cinco Etapas del Desarrollo Ministerial",
          content: [
            "La atención ministerial de nuevas generaciones se organiza en cinco etapas pedagógicas: A) Primera Infancia (cuna y preescolares); B) Niñez (etapa escolar primaria); C) Preadolescencia (transición a la pubertad); D) Adolescencia (secundaria); y E) Juventud (jóvenes en transición a la vida adulta y profesional).",
          ],
        },
        {
          number: 10,
          title: "Flexibilidad Adaptativa según el Desarrollo del Menor",
          content: [
            "La asignación de un menor a un grupo formativo considerará no solo su edad cronológica, sino su madurez emocional, capacidad de comprensión, necesidades especiales y el consentimiento de sus padres o tutores legales.",
          ],
        },
        {
          number: 11,
          title: "Parámetros Numéricos Sujetos a Formalización",
          content: [
            "Los rangos cuantitativos exactos en años de corte para cada división ministerial se formalizarán conforme a las decisiones pastorales definitivas [PENDIENTE_DEFINIR rangos cronológicos específicos].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 12,
          title: "Ambientes Seguros Diferenciados por Edad",
          content: [
            "Cada etapa formativa dispondrá de salones, mobiliario, materiales y dinámicas adaptadas a su seguridad física y etapa cognitiva, evitando la mezcla indiscriminada de niños pequeños con adolescentes en actividades recreativas de contacto.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "4",
      romanNumeral: "IV",
      title: "MINISTERIO INFANTIL: PEDAGOGÍA BÍBLICA, ADORACIÓN Y FORMACIÓN",
      description: "Principios rectores para la enseñanza de la fe, memorización y cuidado espiritual de los niños.",
      articles: [
        {
          number: 13,
          title: "Enseñanza Bíblica Cristocéntrica y Rigor Doctrinal",
          content: [
            "El currículo infantil enseñará las verdades fundamentales de las Sagradas Escrituras (la Creación, la Gracia, la obra de Cristo, el amor al prójimo) mediante historias bíblicas fieles, lecciones didácticas y memorización bíblica (Proverbios 22:6), alineadas con REN-DOC-001.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 14,
          title: "Adoración, Oración y Creatividad Educativa",
          content: [
            "Las clases dominicales y reuniones infantiles integrarán momentos de alabanza infantil, oración comunitaria sencilla, manualidades y juegos recreativos que refuercen los valores del Reino de Dios con gozo y reverencia.",
          ],
        },
        {
          number: 15,
          title: "Prohibición de Contenidos Inapropiados o Aterradores",
          content: [
            "Queda prohibido utilizar imágenes gráficas de violencia extrema, dramatizaciones de terror espiritual o narraciones diseñadas para manipular mediante el pánico o la culpabilidad psicológica.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 16,
          title: "Participación Familiar y Refuerzo en el Hogar",
          content: [
            "Los maestros proveerán a los padres recursos semanales (guías de devocional familiar, versículos para memorizar) a fin de que la instrucción bíblica continúe de manera cotidiana en el seno del hogar.",
          ],
        },
      ],
    },
    {
      number: "5",
      romanNumeral: "V",
      title: "MINISTERIO DE PREADOLESCENTES: TRANSICIÓN, IDENTIDAD Y CARÁCTER",
      description: "Acompañamiento especializado en el paso crítico de la niñez a la adolescencia temprana.",
      articles: [
        {
          number: 17,
          title: "Naturaleza de la Etapa Preadolescente",
          content: [
            "La preadolescencia constituye una fase crítica de cambios físicos, emocionales y sociales. El ministerio proveerá un espacio propio que no trate a los preadolescentes como niños pequeños ni los exponga prematuramente a dinámicas de jóvenes mayores.",
          ],
        },
        {
          number: 18,
          title: "Consolidación de la Identidad en Cristo",
          content: [
            "Se priorizará la enseñanza sobre la autoimagen bíblica, el valor intrínseco del ser humano creado a imagen de Dios (Génesis 1:27), la resistencia a la presión de grupo y la toma de decisiones basada en principios morales de santidad.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 19,
          title: "Fomento de Amistades Sanas y Diálogo Abierto",
          content: [
            "Los líderes de preadolescentes facilitarán espacios grupales de conversación guiada donde los chicos puedan plantear sus dudas de fe, preguntas sobre la escuela y relaciones interpersonales en un ambiente de confianza, respeto y afecto fraternal.",
          ],
        },
        {
          number: 20,
          title: "Introducción al Servicio y la Mayordomía",
          content: [
            "Los preadolescentes serán involucrados en tareas sencillas de servicio comunitario, apoyo logístico en cultos y proyectos de ayuda fraterna para cultivar un corazón generoso y servidor.",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-013"],
        },
      ],
    },
    {
      number: "6",
      romanNumeral: "VI",
      title: "MINISTERIO JUVENIL: FE, PROPÓSITO, LIDERAZGO Y VIDA PRÁCTICA",
      description: "Formación de adolescentes y jóvenes en cosmovisión bíblica, vocación y carácter.",
      articles: [
        {
          number: 21,
          title: "Cosmovisión Bíblica y Apologética Práctica",
          content: [
            "El ministerio juvenil capacitará a los adolescentes y jóvenes para defender con argumentos sólidos y amor cristiano su fe en entornos académicos, universitarios y laborales hostiles a la verdad bíblica (1 Pedro 3:15).",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-009"],
        },
        {
          number: 22,
          title: "Pureza Moral, Relaciones y Sexualidad Bíblica",
          content: [
            "La instrucción en noviazgo, sexualidad y vida afectiva se impartirá con base en los principios bíblicos consagrados en la Declaración de Fe (REN-DOC-001, Art. 16) y el Código de Ética (REN-DOC-011), promoviendo la castidad, la fidelidad conyugal y el respeto mutuo sin juicios condenatorios.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-011"],
        },
        {
          number: 23,
          title: "Vocación, Estudios, Trabajo y Mayordomía de Vida",
          content: [
            "Se orientará a los jóvenes en la excelencia académica, la ética laboral, el emprendimiento honesto y el descubrimiento de su vocación profesional como parte de su llamado de servicio a Dios en la sociedad.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 24,
          title: "No Injerencia en Decisiones Civiles Personales o Familiares",
          content: [
            "Los líderes juveniles no ejercerán coerción ni asumirán atribuciones sobre decisiones vocacionales, matrimoniales, médicas, laborales o financieras que competen exclusivamente al joven y a sus padres o tutores legales.",
          ],
          dependencies: ["REN-DOC-011"],
        },
      ],
    },
    {
      number: "7",
      romanNumeral: "VII",
      title: "DISCIPULADO DE MENORES Y CONEXIÓN CON LA ESCUELA DE DISCÍPULOS",
      description: "Articulación pedagógica con REN-DOC-007 y adaptación metodológica por edades.",
      articles: [
        {
          number: 25,
          title: "Adaptación Pedagógica del Discipulado",
          content: [
            "El discipulado infantil y juvenil adaptará los contenidos doctrinales y vivenciales del Programa Oficial de la Escuela de Discípulos (REN-DOC-007) al vocabulario, nivel de abstracción y dinámicas apropiadas para cada etapa etaria.",
          ],
          dependencies: ["REN-DOC-007"],
        },
        {
          number: 26,
          title: "No Equivalencia Automática de Certificación de Adultos",
          content: [
            "La culminación de un módulo o curso de discipulado infantil/juvenil acredita el crecimiento espiritual en su nivel formativo; sin embargo, no equivale automáticamente a la certificación formal de la Escuela de Discípulos para adultos requerida para cargos de liderazgo mayor bajo REN-DOC-005 o REN-DOC-006.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-007"],
        },
        {
          number: 27,
          title: "Preparación Bautismal de Menores y Preadolescentes",
          content: [
            "Cuando un menor manifieste convicción de fe y deseo de bautizarse en agua por inmersión, recibirá la preparación doctrinal correspondiente bajo supervisión pastoral y con la autorización expresa de sus padres o tutores conforme a REN-DOC-001 y REN-DOC-012.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-012"],
        },
        {
          number: 28,
          title: "Evaluación Formativa frente a Calificaciones Rígidas",
          content: [
            "La evaluación del discipulado en niños y jóvenes será formativa y cualitativa, buscando celebrar el progreso en carácter, obediencia a la Palabra y amor a Dios, sin generar estigmas o exclusiones por rendimiento académico.",
          ],
        },
      ],
    },
    {
      number: "8",
      romanNumeral: "VIII",
      title: "EVANGELISMO INFANTIL Y JUVENIL LIBRE DE COERCIÓN O MANIPULACIÓN",
      description: "Estrategias de alcance misionero respetuoso articuladas con REN-DOC-015.",
      articles: [
        {
          number: 29,
          title: "Alcance Evangelístico Infantil y Juvenil",
          content: [
            "La iglesia promoverá actividades de alcance infantil y juvenil (Escuelas Bíblicas de Vacaciones, festivales familiares, torneos deportivos, campañas en redes sociales) coordinadas con la Dirección de Misiones (REN-DOC-015).",
          ],
          dependencies: ["REN-DOC-015"],
        },
        {
          number: 30,
          title: "Prohibición Taxativa de Coerción Espiritual o Miedo",
          content: [
            "Queda prohibido utilizar el temor al infierno, amenazas de castigo divino inminente o manipulaciones emocionales para inducir decisiones apresuradas de fe en menores de edad.",
            "La conversión debe ser una respuesta voluntaria, libre y guiada por el amor de Dios revelado en Jesucristo.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 31,
          title: "Invitaciones y Respeto a los Hogares No Creyentes",
          content: [
            "Cuando niños o jóvenes de familias no cristianas asistan a eventos de la iglesia, los servidores mantendrán una actitud de máxima cortesía y respeto hacia sus familias, requiriendo los consentimientos de participación correspondientes (REN-FORM-IJ-002).",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 32,
          title: "Integración Comunitaria sin Proselitismo Deshonesto",
          content: [
            "Toda actividad recreativa, deportiva o artística de alcance comunitario comunicará con transparencia su propósito eclesial cristiano, sin recurrir a engaños o convocatorias fraudulentas.",
          ],
          dependencies: ["REN-DOC-015"],
        },
      ],
    },
    {
      number: "9",
      romanNumeral: "IX",
      title: "ROL FUNDAMENTAL DE PADRES, MADRES Y TUTORES LEGALES",
      description: "Alianza pastoral entre la iglesia y la familia en la formación de los hijos.",
      articles: [
        {
          number: 33,
          title: "Reconocimiento de la Responsabilidad Primaria Parental",
          content: [
            "Las Sagradas Escrituras confieren a los padres y madres el deber primordial de instruir a sus hijos en el temor del Señor (Deuteronomio 6:6-7; Efesios 6:4). La iglesia no sustituye a la familia, sino que colabora como aliada pastoral en su labor formativa.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 34,
          title: "Canales Fluidos de Comunicación e Información",
          content: [
            "Los maestros y líderes mantendrán informados a los padres sobre los calendarios, lecciones, maestros asignados, normas de seguridad y eventos especiales del ministerio infantil y juvenil.",
          ],
        },
        {
          number: 35,
          title: "Participación y Presencia de Padres en Aulas",
          content: [
            "Los padres tienen derecho a conocer las instalaciones, observar el desarrollo de las clases y dialogar con los maestros; no obstante, su permanencia regular en el aula como colaboradores requerirá la inducción y registro de salvaguardas (REN-DOC-014).",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 36,
          title: "Límite: Obligación Legal de Protección ante Abuso Familiar",
          content: [
            "El respeto a la patria potestad familiar cesa cuando exista evidencia verosímil o revelación de abuso, negligencia grave o violencia física/sexual contra el menor en el hogar, activándose de inmediato el protocolo de reporte legal conforme a REN-DOC-014.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "10",
      romanNumeral: "X",
      title: "SISTEMA DE AUTORIZACIONES Y CONSENTIMIENTOS INFORMADOS",
      description: "Marco documental de autorizaciones parentales para actividades ordinarias y extraordinarias.",
      articles: [
        {
          number: 37,
          title: "Exigibilidad de Autorización Escrita",
          content: [
            "Ningún menor podrá participar en campamentos, salidas recreativas, viajes misioneros, transporte eclesiástico o eventos fuera de la sede sin la previa autorización escrita y firmada de sus padres o tutores legales (REN-FORM-IJ-002, 004, 005).",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 38,
          title: "Ficha de Contacto Familiar y Recogida Segura (REN-FORM-IJ-003)",
          content: [
            "Para los niños de primera infancia y niñez, solo las personas expresamente autorizadas por escrito en la ficha REN-FORM-IJ-003 podrán retirar al menor del aula o evento eclesiástico.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 39,
          title: "Revisión Jurídica de Formalidades Notariales",
          content: [
            "Las autorizaciones para viajes interestatales, internacionales o deportes de riesgo se someterán a las formalidades legales y notariales que determine el derecho aplicable [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 40,
          title: "Custodia Segura de los Consentimientos Firmados",
          content: [
            "Todas las fichas y consentimientos se archivarán física y digitalmente bajo custodia de la Secretaría de Salvaguardas y estarán accesibles para los líderes durante la realización de la actividad (REN-DOC-019).",
          ],
          dependencies: ["REN-DOC-019"],
        },
      ],
    },
    {
      number: "11",
      romanNumeral: "XI",
      title: "PERFIL, REQUISITOS Y LLAMADO DE MAESTROS Y SERVIDORES",
      description: "Estándares espirituales, doctrinales y éticos para la enseñanza de menores.",
      articles: [
        {
          number: 41,
          title: "Perfil Espiritual y Carácter Cristiano del Maestro",
          content: [
            "Todo maestro o servidor infantil/juvenil debe ser miembro activo de RENACER, bautizado en agua, con testimonio intachable, madurez emocional, paciencia, amor hacia las nuevas generaciones y apego estricto a la Declaración de Fe (REN-DOC-001).",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-011"],
        },
        {
          number: 42,
          title: "Formación Académica y Eclesiológica Mínima",
          content: [
            "Los maestros deben haber aprobado los niveles formativos pertinentes de la Escuela de Discípulos y Escuela de Líderes (REN-DOC-007, REN-DOC-008), o encontrarse en proceso de acreditación en el Seminario Bíblico RENACER.",
          ],
          dependencies: ["REN-DOC-007", "REN-DOC-008", "REN-DOC-009"],
        },
        {
          number: 43,
          title: "Delimitación de la Función del Maestro",
          content: [
            "La labor de maestro confiere autoridad pedagógica y pastoral en el aula, pero no otorga autoridad pastoral general ni credenciales ministeriales de ordenación presbiterial (REN-DOC-010).",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-010"],
        },
        {
          number: 44,
          title: "Parámetros Temporales de Membresía Previa",
          content: [
            "El tiempo mínimo de membresía y servicio en la congregación antes de ser asignado como maestro principal se establece como criterio prudencial de idoneidad [PENDIENTE_DEFINIR tiempo mínimo de membresía].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "12",
      romanNumeral: "XII",
      title: "SELECCIÓN, INDUCCIÓN Y REGISTRO DE VOLUNTARIOS",
      description: "Procedimiento oficial de postulación, entrevista y registro de servidores.",
      articles: [
        {
          number: 45,
          title: "Procedimiento Oficial de Postulación (REN-FORM-IJ-007)",
          content: [
            "Todo creyente que desee servir en el ministerio infantil o juvenil debe completar la solicitud formal REN-FORM-IJ-007, presentar referencias personales y someterse a una entrevista con la Dirección del Ministerio.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 46,
          title: "Inducción Obligatoria en Salvaguardas y Doctrina",
          content: [
            "Antes de asumir cualquier contacto con menores, el postulante completará el taller obligatorio de salvaguardas y firmará su adhesión formal a las normas de protección de REN-DOC-014 (REN-FORM-IJ-009).",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 47,
          title: "Período de Acompañamiento y Ayudantía",
          content: [
            "Los nuevos servidores comenzarán como ayudantes bajo la supervisión directa de maestros experimentados durante un período de prueba formativa [PENDIENTE_DEFINIR duración del período de ayudantía].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 48,
          title: "Registro Oficial en la Base de Datos de Servidores",
          content: [
            "La Secretaría de Salvaguardas mantendrá un registro actualizado de todos los voluntarios habilitados, inhabilitando de inmediato a quienes no cumplan las renovaciones anuales.",
          ],
          dependencies: ["REN-DOC-014", "REN-DOC-019"],
        },
      ],
    },
    {
      number: "13",
      romanNumeral: "XIII",
      title: "EVALUACIÓN INTEGRAL DE IDONEIDAD Y VERIFICACIÓN DE ANTECEDENTES",
      description: "Criterios de debida diligencia legal y evaluación continua de colaboradores.",
      articles: [
        {
          number: 49,
          title: "Evaluación Continua del Testimonio y Trato",
          content: [
            "La Dirección del Ministerio evaluará periódicamente la conducta, dominio propio, estabilidad emocional y trato con los menores de cada servidor mediante el formulario REN-FORM-IJ-008.",
          ],
        },
        {
          number: 50,
          title: "Verificación de Antecedentes Penales (Background Checks)",
          content: [
            "Conforme a las leyes aplicables de protección infantil en el Estado de New Jersey y en las distintas jurisdicciones, todo servidor con acceso regular a menores se someterá a la verificación de antecedentes penales e historial de registro de ofensores sexuales [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 51,
          title: "Incompatibilidad Absoluta para el Servicio",
          content: [
            "Cualquier condena o acusación penal formal verosímil por delitos contra menores, abuso sexual, violencia doméstica o explotación constituye causal automática de inhabilitación perpetua para servir en áreas con menores.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 52,
          title: "Periodicidad de Renovación de Evaluaciones",
          content: [
            "La periodicidad formal para la renovación de verificaciones de antecedentes y evaluaciones de idoneidad se mantendrá conforme a los estándares de salvaguardas [PENDIENTE_DEFINIR periodicidad de renovación].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "14",
      romanNumeral: "XIV",
      title: "APLICACIÓN ESTRICTA DE LA REGLA DE DOS ADULTOS",
      description: "Obligatoriedad de supervisión compartida y prevención de aislamiento.",
      articles: [
        {
          number: 53,
          title: "Vigencia Incondicional de la Regla de Dos Adultos",
          content: [
            "En toda clase dominical, reunión juvenil, taller, ensayo, viaje, campamento o actividad virtual con menores, debe haber como mínimo dos adultos capacitados y autorizados presentes en todo momento.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 54,
          title: "Prohibición de Aislamiento Físico y Visibilidad de Aulas",
          content: [
            "Se prohíbe que un adulto permanezca a solas con un menor a puerta cerrada o en lugares ocultos. Las aulas de niños contarán con ventanas de visión transparente o puertas abiertas.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 55,
          title: "Protocolo de Acompañamiento a Sanitarios",
          content: [
            "Para los niños pequeños que requieran asistencia en el baño, los maestros asistirán en parejas, asegurando que las puertas exteriores permanezcan abiertas y respetando la intimidad corporal del menor.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 56,
          title: "Gestión de Ausencias Imprevistas",
          content: [
            "Si un maestro o ayudante se ausenta inesperadamente, se fusionarán aulas o se designará de inmediato un supervisor suplente autorizado antes de iniciar la clase.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "15",
      romanNumeral: "XV",
      title: "CONTACTO FÍSICO PASTORAL: LÍMITES ÉTICOS Y CONDUCTA AFECTIVA SEGURA",
      description: "Directrices para la expresión de afecto saludable y proscripción del maltrato.",
      articles: [
        {
          number: 57,
          title: "Afecto Cristiano Respetuoso y Apropiado",
          content: [
            "El afecto pastoral hacia los niños y jóvenes debe ser saludable, respetuoso, no invasivo y público (saludo de manos, palmada en el hombro, abrazo lateral breve en presencia de otros).",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 58,
          title: "Límites en la Oración e Imposición de Manos",
          content: [
            "La oración e imposición de manos por niños o jóvenes se realizará siempre en lugares visibles y limitándose a la cabeza, hombros o manos, evitando contactos corporales equívocos o prolongados.",
          ],
          dependencies: ["REN-DOC-012", "REN-DOC-014"],
        },
        {
          number: 59,
          title: "Prohibición Absoluta de Castigo Físico y Conductas Inapropiadas",
          content: [
            "Queda terminantemente prohibido el castigo físico, pellizcos, bofetadas, tocamientos en zonas íntimas, caricias inapropiadas, abrazos forzados o sentar a niños en el regazo de adultos que no sean sus propios padres.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 60,
          title: "Respeto a los Límites Corporales del Menor",
          content: [
            "Si un niño o joven manifiesta incomodidad o rechazo ante una muestra de afecto físico, su decisión será respetada de inmediato sin reproches ni presiones.",
          ],
        },
      ],
    },
    {
      number: "16",
      romanNumeral: "XVI",
      title: "CONSEJERÍA A MENORES, CONFIDENCIALIDAD RESPONSABLE Y DERIVACIÓN",
      description: "Directrices para el cuidado pastoral individual sin traspasar competencias profesionales.",
      articles: [
        {
          number: 61,
          title: "Marco y Límites de la Consejería Pastoral Juvenil",
          content: [
            "La consejería pastoral a adolescentes y jóvenes se centrará en la orientación bíblica, oración y aliento espiritual. Los servidores no se presentarán como psicólogos, psiquiatras o médicos civiles sin título habilitante.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 62,
          title: "Condiciones de Visibilidad en la Consejería",
          content: [
            "Toda sesión de consejería con un menor se realizará en espacios visibles (con ventanas o puertas semiabiertas) y con conocimiento previo de los padres o del director del ministerio.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 63,
          title: "Obligación de Derivación Profesional Inmediata",
          content: [
            "Ante indicios de ideación suicida, autolesiones, depresión clínica severa, adicciones graves, trastornos alimentarios o crisis psiquiátricas, el servidor notificará a los padres y derivará el caso a profesionales de la salud mental competentes.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 64,
          title: "Levantamiento Obligatorio de Confidencialidad ante Riesgo Vital o Abuso",
          content: [
            "La confidencialidad pastoral no aplica y se levantará de inmediato cuando el menor revele haber sido víctima de abuso, manifieste intenciones de dañarse a sí mismo o a terceros, o se encuentre en peligro inminente.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
      ],
    },
    {
      number: "17",
      romanNumeral: "XVII",
      title: "DETECCIÓN, INTERVENCIÓN Y DENUNCIA OBLIGATORIA ANTE ABUSO",
      description: "Tolerancia cero al abuso infantil y deber legal ineludible de reporte civil.",
      articles: [
        {
          number: 65,
          title: "Tolerancia Cero frente a Cualquier Forma de Abuso",
          content: [
            "RENACER mantiene una política de tolerancia cero frente al abuso sexual infantil, abuso físico, maltrato psicológico, negligencia y explotación de menores.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 66,
          title: "Prohibición de Encubrimiento o Mediación Eclesiástica Interna",
          content: [
            "Ningún pastor, líder o maestro podrá utilizar el sigilo pastoral, la oración, la mediación fraterna o la disciplina interna para encubrir un delito o impedir la denuncia ante las autoridades de protección infantil y la policía.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 67,
          title: "Ruta de Denuncia Inmediata (REN-FORM-IJ-010)",
          content: [
            "Ante cualquier sospecha fundada o revelación de abuso, el servidor completará el reporte confidencial REN-FORM-IJ-010 y se activará la notificación inmediata a las agencias civiles correspondientes conforme a REN-DOC-014.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 68,
          title: "Protección a las Víctimas y Medidas Cautelares",
          content: [
            "Se brindará acompañamiento pastoral y emocional empático a la presunta víctima y su familia, aplicando la separación preventiva inmediata de cualquier servidor denunciado mientras duren las investigaciones.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-014"],
        },
      ],
    },
    {
      number: "18",
      romanNumeral: "XVIII",
      title: "PROTOCOLOS DE EMERGENCIA, LESIONES, ACCIDENTES Y EVACUACIÓN",
      description: "Medidas de auxilio inmediato ante contingencias físicas en actividades de menores.",
      articles: [
        {
          number: 69,
          title: "Prioridad Absoluta a la Vida y Llamada Inmediata al 911",
          content: [
            "Ante cualquier emergencia médica grave, pérdida de conocimiento, herida severa, dificultad respiratoria o convulsión de un menor, la prioridad absoluta es la vida, ordenándose la llamada inmediata al 911 y la notificación a los padres.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 70,
          title: "Botiquín Oficial y Primeros Auxilios Básicos",
          content: [
            "Las aulas e instalaciones contarán con botiquines de primeros auxilios inspeccionados y servidores capacitados en RCP y primeros auxilios básicos dentro de su nivel de entrenamiento.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 71,
          title: "Protocolo ante Extravío de Menores",
          content: [
            "Si un menor no es localizado en las instalaciones o evento, se cerrarán de inmediato las salidas, se activará la búsqueda en equipo y se notificará a las autoridades policiales si no es hallado en pocos minutos.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 72,
          title: "Simulacros de Evacuación e Incendio",
          content: [
            "El ministerio infantil y juvenil participará periódicamente en simulacros de evacuación por incendio, sismo o amenaza de seguridad, conociendo las rutas y puntos de encuentro designados.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "19",
      romanNumeral: "XIX",
      title: "GESTIÓN DE MEDICAMENTOS Y NECESIDADES MÉDICAS ESPECIALES",
      description: "Políticas sobre alergias, alimentos y no administración informal de fármacos.",
      articles: [
        {
          number: 73,
          title: "Prohibición de Administración Informal de Medicamentos",
          content: [
            "Los maestros y voluntarios no administrarán analgésicos, jarabes, antibióticos ni ningún otro medicamento a los menores de manera informal o por iniciativa propia.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 74,
          title: "Protocolo para Medicamentos de Emergencia o Prescripción",
          content: [
            "Cuando un menor requiera medicación indispensable (inhaladores, EpiPen para alergias graves), los padres proveerán el fármaco con la prescripción médica escrita, autorización firmada e instrucciones claras de uso [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 75,
          title: "Registro de Alergias y Restricciones Alimentarias",
          content: [
            "La ficha de registro del menor consignará de forma visible cualquier alergia a alimentos (maní, gluten, lácteos), debiendo los maestros verificar los refrigerios antes de su distribución.",
          ],
        },
        {
          number: 76,
          title: "Inclusión y Adaptación para Menores con Discapacidad",
          content: [
            "Se promoverá la inclusión amorosa de niños y jóvenes con necesidades educativas especiales o discapacidades físicas, coordinando con sus familias los apoyos requeridos.",
          ],
        },
      ],
    },
    {
      number: "20",
      romanNumeral: "XX",
      title: "TRANSPORTE SEGURO DE MENORES Y REQUISITOS DE CONDUCCIÓN",
      description: "Normas para traslados en vehículos de la iglesia o voluntarios autorizados.",
      articles: [
        {
          number: 77,
          title: "Requisitos para Conductores y Vehículos Autorizados",
          content: [
            "Todo conductor que transporte menores en actividades de la iglesia debe ser adulto habilitado, poseer licencia de conducir vigente, historial de manejo limpio, seguro vehicular con cobertura adecuada y vehículo en óptimas condiciones mecánicas [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 78,
          title: "Prohibición de Traslado a Solas con un Menor",
          content: [
            "Se prohíbe terminantemente que un conductor adulto traslade a un menor a solas en un vehículo, debiendo contar siempre con un segundo adulto acompañante o un grupo de menores.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 79,
          title: "Uso Obligatorio de Cinturones y Asientos de Seguridad",
          content: [
            "Todos los pasajeros deben utilizar cinturón de seguridad individual, respetando la normativa de New Jersey sobre asientos de seguridad (car seats / booster seats) para niños pequeños [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 80,
          title: "Plan de Ruta y Contacto de Emergencia",
          content: [
            "Todo traslado grupal contará con una lista de pasajeros, ruta preestablecida y número de contacto de emergencia activo en la sede central.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "21",
      romanNumeral: "XXI",
      title: "CAMPAMENTOS, RETIROS Y ACTIVIDADES FUERA DE LAS INSTALACIONES",
      description: "Planificación de seguridad, logística y supervisión en eventos externos.",
      articles: [
        {
          number: 81,
          title: "Planificación Integral y Ficha de Campamento (REN-FORM-IJ-011)",
          content: [
            "Todo campamento o retiro contará con una ficha REN-FORM-IJ-011 aprobada que detalle el lugar de destino, líderes responsables, enfermería, centros médicos cercanos y plan de contingencia.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 82,
          title: "Ratio Mínimo de Supervisores Adultos por Menores",
          content: [
            "Se mantendrá una proporción adecuada de supervisores adultos por cada grupo de menores en función de su edad y del tipo de actividad [PENDIENTE_DEFINIR ratio cuantitativo de supervisión].",
          ],
          dependencies: ["REN-DOC-014"],
          isPendingDefinition: true,
        },
        {
          number: 83,
          title: "Seguridad en Actividades Acuáticas y Deportes de Riesgo",
          content: [
            "El uso de piscinas, ríos, lagos o deportes extremos requerirá salvavidas certificados, chalecos salvavidas y supervisión visual continua de líderes adultos.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 84,
          title: "Pólizas de Seguro de Accidentes para Campamentos",
          content: [
            "Las actividades de campamento contarán con pólizas de seguro de accidentes personales que cubran a los participantes durante la vigencia del evento [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "22",
      romanNumeral: "XXII",
      title: "DISTRIBUCIÓN Y SUPERVISIÓN SEGURA DE ALOJAMIENTO",
      description: "Protección de la privacidad e intimidad en pernoctaciones y retiros.",
      articles: [
        {
          number: 85,
          title: "Separación Estricta de Dormitorios por Sexo Biológico",
          content: [
            "Las cabañas, dormitorios y áreas de hospedaje en campamentos estarán estrictamente segregadas por sexo biológico, prohibiéndose el ingreso de personas del sexo opuesto a las habitaciones.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-014"],
        },
        {
          number: 86,
          title: "Supervisión de Dormitorios por Parejas de Líderes del Mismo Sexo",
          content: [
            "Los dormitorios de menores serán supervisados por líderes adultos capacitados de su mismo sexo, garantizando la presencia de dos adultos y la privacidad durante el descanso.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 87,
          title: "Prohibición de Compartir Camas entre Adultos y Menores",
          content: [
            "Queda terminantemente prohibido que líderes o voluntarios adultos compartan cama o colchoneta con menores de edad que no sean sus propios hijos biológicos o legales.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 88,
          title: "Privacidad en Duchas y Vestidores",
          content: [
            "Las áreas de vestidores y duchas contarán con divisiones individuales de privacidad y horarios escalonados para salvaguardar la intimidad de los menores.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "23",
      romanNumeral: "XXIII",
      title: "COMUNICACIÓN DIGITAL, REDES SOCIALES Y MENSAJERÍA",
      description: "Normas de conducta en WhatsApp, plataformas virtuales y videollamadas con menores.",
      articles: [
        {
          number: 89,
          title: "Uso Exclusivo de Canales Digitales Institucionales y Grupales",
          content: [
            "Las comunicaciones entre líderes y jóvenes se realizarán a través de grupos oficiales de WhatsApp o plataformas institucionales donde estén incluidos otros líderes y/o los padres de familia.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 90,
          title: "Prohibición de Chats Privados Individuales Adulto-Menor",
          content: [
            "Se prohíbe que líderes adultos mantengan conversaciones privadas secretas, mensajes efímeros no supervisados o chats personales con menores sin conocimiento ni copia a los padres.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 91,
          title: "Horarios Apropiados de Comunicación Digital",
          content: [
            "Los mensajes grupales y avisos ministeriales se enviarán en horarios prudentes, evitando comunicaciones a altas horas de la noche salvo emergencias justificadas.",
          ],
        },
        {
          number: 92,
          title: "Regla de Dos Adultos en Clases Virtuales y Videollamadas",
          content: [
            "Toda clase o reunión virtual vía Zoom o similares contará con dos líderes adultos como anfitriones y se prohibirá la interacción privada por mensaje directo con menores durante la sesión.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "24",
      romanNumeral: "XXIV",
      title: "PROTECCIÓN DE IMAGEN, FOTOGRAFÍAS Y TRANSMISIONES DE MENORES",
      description: "Resguardo del derecho a la propia imagen y no explotación audiovisual.",
      articles: [
        {
          number: 93,
          title: "Exigencia de Autorización Expresa de Imagen (REN-FORM-IJ-006)",
          content: [
            "Para publicar fotografías o videos de menores en redes sociales o transmisiones de la iglesia, se requerirá el consentimiento firmado de sus padres o tutores (REN-FORM-IJ-006) [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 94,
          title: "Prohibición de Identificación Personal y Datos de Ubicación",
          content: [
            "Las publicaciones en redes sociales no incluirán nombres completos, direcciones, escuelas, números de teléfono ni datos que permitan la geolocalización o identificación individual del menor.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 95,
          title: "Prohibición de Imágenes Degradantes o Explotación de Vulnerabilidad",
          content: [
            "Se prohíbe publicar imágenes de menores llorando desconsoladamente, en situaciones vergonzosas, en traje de baño no adecuado o exponiendo su pobreza con fines de recaudación económica.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-015"],
        },
        {
          number: 96,
          title: "Derecho de Revocación y Retiro Inmediato de Imágenes",
          content: [
            "Si un padre o tutor solicita retirar una fotografía o video de su hijo de las plataformas de la iglesia, el contenido será eliminado de manera expedita.",
          ],
        },
      ],
    },
    {
      number: "25",
      romanNumeral: "XXV",
      title: "CONFIDENCIALIDAD DE EXPEDIENTES, DATOS Y CONTROL DE ACCESO (RBAC)",
      description: "Protección de datos sensibles y seguridad de la información bajo REN-DOC-019.",
      articles: [
        {
          number: 97,
          title: "Naturaleza Confidencial de los Registros de Menores",
          content: [
            "Las fichas de registro, datos médicos, teléfonos de emergencia, autorizaciones y reportes de incidentes se clasifican como información confidencial protegida.",
          ],
          dependencies: ["REN-DOC-014", "REN-DOC-019"],
        },
        {
          number: 98,
          title: "Control de Acceso Basado en Roles (RBAC)",
          content: [
            "El acceso a la base de datos de menores estará restringido exclusivamente a la Secretaría del Ministerio, pastores autorizados y Oficial de Salvaguardas mediante permisos server-side autenticados.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 99,
          title: "Prohibición de Divulgación o Uso Comercial de Datos",
          content: [
            "Queda terminantemente prohibido compartir, vender o utilizar los datos de contacto de niños y jóvenes para fines comerciales, políticos, recaudación privada o ajenos a la vida eclesiástica.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 100,
          title: "Plazos de Conservación Documental",
          content: [
            "Los expedientes de menores y autorizaciones se conservarán conforme a las políticas institucionales de archivo y a la normativa legal aplicable [PENDIENTE_DEFINIR plazos de retención / REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-019"],
          isPendingDefinition: true,
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "26",
      romanNumeral: "XXVI",
      title: "INTEGRACIÓN EN LAS FAMILIAS DE GRUPO SIN CONTROL DE LA VIDA PRIVADA",
      description: "Pastoreo celular de niños y jóvenes respetando la autonomía individual y familiar.",
      articles: [
        {
          number: 101,
          title: "Integración de Niños y Jóvenes en Familias de Grupo",
          content: [
            "Las Familias de Grupo constituyen el núcleo de comunión, estudio bíblico y pastoreo cercano para los niños y jóvenes, promoviendo su integración fraterna bajo el modelo pastoral de RENACER (DEC-DEF-010).",
          ],
          dependencies: ["DEC-DEF-010", "REN-DOC-006"],
        },
        {
          number: 102,
          title: "Uso del Término Institucional Familias de Grupo",
          content: [
            "En toda documentación, predicación y dinámica eclesiástica se utilizará preferentemente la denominación oficial 'Familias de Grupo' en lugar de la palabra 'células'.",
          ],
          dependencies: ["REN-DOC-004", "REN-DOC-006"],
        },
        {
          number: 103,
          title: "Límites del Pastoreo Celular: No Injerencia en Asuntos Personales",
          content: [
            "Los líderes de Familias de Grupo no intervendrán en decisiones económicas, matrimoniales, tratamientos médicos o asuntos privados de los jóvenes y sus familias.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 104,
          title: "Supervisión de Dinámicas en Hogares",
          content: [
            "Las reuniones de jóvenes en casas de familias anfitrionas contarán con la presencia de adultos responsables y cumplirán las normas de visibilidad y respeto mutuo.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "27",
      romanNumeral: "XXVII",
      title: "FORMACIÓN DE FUTUROS LÍDERES Y DESLINDE CON CREDENCIALES",
      description: "Mentoría de liderazgo juvenil sin otorgamiento automático de licencias ministeriales.",
      articles: [
        {
          number: 105,
          title: "Desarrollo de Liderazgo y Servicio en Jóvenes",
          content: [
            "Se alentará a los adolescentes y jóvenes maduros a involucrarse en la música, multimedia, servicio de ujieres, misiones y apoyo pedagógico, como parte de su formación en el servicio del Reino.",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-008"],
        },
        {
          number: 106,
          title: "Mentoría Pastoral y Discipulado Personalizado",
          content: [
            "Los líderes juveniles maduros brindarán acompañamiento y mentoría espiritual a los futuros obreros a través de la Escuela de Líderes (REN-DOC-008).",
          ],
          dependencies: ["REN-DOC-008"],
        },
        {
          number: 107,
          title: "Deslinde con Credenciales de Ordenación Ministerial (REN-DOC-010)",
          content: [
            "La designación como líder juvenil o coordinador de jóvenes constituye una función ministerial interna y no confiere Licencia Pastoral ni Ordenación Ministerial, las cuales se rigen con exclusividad bajo REN-DOC-010.",
          ],
          dependencies: ["REN-DOC-010"],
        },
        {
          number: 108,
          title: "Cuidado de la Madurez y No Exposición Prematura",
          content: [
            "Se evitará colocar sobre jóvenes cargas de responsabilidad pastoral excesivas que interfieran con sus estudios, vida familiar o estabilidad emocional.",
          ],
        },
      ],
    },
    {
      number: "28",
      romanNumeral: "XXVIII",
      title: "PLENA INCLUSIÓN Y LIDERAZGO DE LAS MUJERES EN EL MINISTERIO",
      description: "Igualdad ministerial en la enseñanza, dirección y pastoreo de nuevas generaciones.",
      articles: [
        {
          number: 109,
          title: "Principio de Plena Igualdad Ministerial",
          content: [
            "En conformidad con la Declaración de Fe (REN-DOC-001) y la Constitución (REN-DOC-002), las mujeres gozan de plena igualdad de llamamiento para ejercer como maestras, directoras del ministerio infantil, líderes juveniles, predicadoras y pastoras sin restricciones basadas exclusivamente en su sexo.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006", "REN-DOC-010"],
        },
        {
          number: 110,
          title: "Equipos de Trabajo Mixtos y Equitativos",
          content: [
            "La conformación de los equipos de maestros y directivas juveniles reflejará la rica diversidad del cuerpo de Cristo, valorando los dones y capacidades espirituales de hombres y mujeres por igual.",
          ],
        },
        {
          number: 111,
          title: "Cuidado Pastoral de las Maestras y Servidoras",
          content: [
            "La iglesia velará por la seguridad, honra y descanso adecuado de las maestras y servidoras, garantizando transporte seguro y relevos periódicos.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 112,
          title: "Reconocimiento a la Labor Docente y Formativa Femenina",
          content: [
            "RENACER honra el rol decisivo de las mujeres en la transmisión de la fe a las nuevas generaciones bíblicas e históricas (2 Timoteo 1:5).",
          ],
        },
      ],
    },
    {
      number: "29",
      romanNumeral: "XXIX",
      title: "DISCIPLINA FORMATIVA, CONDUCTA JUVENIL Y NO VIOLENCIA",
      description: "Restauración pastoral amorosa frente a la humillación o castigo degradante.",
      articles: [
        {
          number: 113,
          title: "Naturaleza Formativa y Redentora de la Disciplina",
          content: [
            "La disciplina en el ministerio infantil y juvenil tiene un propósito estrictamente formativo, correctivo y restaurador (Hebreos 12:11), coordinado con REN-DOC-005 y REN-DOC-011.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
        {
          number: 114,
          title: "Prohibición de Humillación Pública o Coerción",
          content: [
            "Queda terminantemente prohibido exponer a un niño o joven a la vergüenza pública, burlas, castigos humillantes, gritos desmedidos o exclusiones crueles ante sus compañeros.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 115,
          title: "Procedimiento de Corrección y Diálogo con Padres",
          content: [
            "Ante conductas disruptivas o faltas de respeto reiteradas, el maestro dialogará a solas con el menor con amor y firmeza, y si la conducta persiste, coordinará una entrevista pastoral con sus padres o tutores.",
          ],
        },
        {
          number: 116,
          title: "Restauración Pastoral tras Faltas Morales",
          content: [
            "Cuando un adolescente o joven cometa una falta moral grave, se priorizará su restauración espiritual, arrepentimiento y sanidad interior mediante el acompañamiento pastoral, evitando la marginación eclesiástica.",
          ],
          dependencies: ["REN-DOC-005"],
        },
      ],
    },
    {
      number: "30",
      romanNumeral: "XXX",
      title: "TRANSICIÓN A LA VIDA ADULTA, CULTO Y DONES ESPIRITUALES",
      description: "Integración a la congregación mayor, orden litúrgico y discernimiento carismático.",
      articles: [
        {
          number: 117,
          title: "Transición Progresiva hacia la Congregación Adulta",
          content: [
            "Se diseñará un puente formativo para que los jóvenes graduados del ministerio juvenil se integren armónicamente a las Familias de Grupo de adultos, ministerios generales y programas del Seminario Bíblico RENACER.",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-009"],
        },
        {
          number: 118,
          title: "Participación Activa y Ordenada en el Culto Congregacional",
          content: [
            "Los niños y jóvenes participarán periódicamente en los cultos dominicales a través de coros infantiles, lecturas bíblicas, música instrumental y testimonios, conforme al Manual de Ceremonias (REN-DOC-012).",
          ],
          dependencies: ["REN-DOC-012"],
        },
        {
          number: 119,
          title: "Manifestación de Dones Espirituales con Orden y Sabiduría",
          content: [
            "En conformidad con la Declaración de Fe (REN-DOC-001, Art. 10), la iglesia cree en la vigencia de los dones del Espíritu Santo en los jóvenes; no obstante, su ejercicio en cultos juveniles se regirá por el orden bíblico, la sobriedad y el discernimiento pastoral (1 Corintios 14:40).",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 120,
          title: "Prohibición de Manipulación Profética sobre Menores",
          content: [
            "Queda terminantemente prohibido utilizar supuestas revelaciones proféticas personales para condicionar decisiones sentimentales, vocacionales o familiares de niños y adolescentes.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
      ],
    },
    {
      number: "31",
      romanNumeral: "XXXI",
      title: "CAPACITACIÓN CONTINUA DE SERVIDORES Y CATÁLOGO DE FORMULARIOS",
      description: "Entrenamiento permanente, métricas de fruto espiritual y padrón oficial de formularios.",
      articles: [
        {
          number: 121,
          title: "Programa Continuo de Capacitación Ministerial y Salvaguardas",
          content: [
            "Todos los maestros y líderes participarán anualmente en talleres de actualización pedagógica bíblica, prevención de abusos, primeros auxilios y dinámicas grupales [PENDIENTE_DEFINIR frecuencia formal].",
          ],
          dependencies: ["REN-DOC-014"],
          isPendingDefinition: true,
        },
        {
          number: 122,
          title: "Evaluación Integral del Crecimiento Ministerial",
          content: [
            "La salud del ministerio no se medirá únicamente por el número de asistentes, sino por la solidez doctrinal de los convertidos, vidas transformadas, líderes jóvenes formados e integración familiar armónica (REN-FORM-IJ-012).",
          ],
        },
        {
          number: 123,
          title: "Catálogo Oficial de la Serie REN-FORM-IJ-001 a 012",
          content: [
            "Se formaliza el padrón normativo de doce formularios institucionales para la gestión del ministerio: REN-FORM-IJ-001 (Registro Individual), 002 (Autorización General), 003 (Contacto Familiar), 004 (Salidas/Visitas), 005 (Transporte), 006 (Uso de Imagen), 007 (Registro Servidor), 008 (Evaluación Servidor), 009 (Capacitación Salvaguardas), 010 (Reporte Incidente), 011 (Planificación Campamento) y 012 (Evaluación Anual).",
          ],
        },
        {
          number: 124,
          title: "Uso Obligatorio y Estandarización Documental",
          content: [
            "Queda prohibido utilizar formularios improvisados o no autorizados para el registro de menores, salidas o permisos de imagen.",
          ],
          dependencies: ["REN-DOC-019"],
        },
      ],
    },
    {
      number: "32",
      romanNumeral: "XXXII",
      title: "RESPONSABILIDADES INSTITUCIONALES, QUEJAS, NO ADOPCIÓN Y DISPOSICIONES FINALES",
      description: "Matriz de roles, canal seguro de denuncias, cláusula de no adopción v0.1 y vigencia.",
      articles: [
        {
          number: 125,
          title: "Matriz Institucional de Responsabilidades",
          content: [
            "La responsabilidad pastoral y administrativa del ministerio se distribuye entre el Pastor Fundador, Pastor Supervisor, Dirección Infantil/Juvenil, maestros, voluntarios y padres, sin alterar la estructura de gobierno de RENACER (REN-DOC-004).",
          ],
          dependencies: ["REN-DOC-004"],
        },
        {
          number: 126,
          title: "Canal Seguro de Quejas, Sugerencias y No Represalias",
          content: [
            "Se garantiza un canal confidencial y accesible para que padres, jóvenes o servidores presenten quejas, preocupaciones o sugerencias sobre el ministerio, gozando de absoluta protección frente a represalias.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 127,
          title: "Mayordomía Financiera y No Lucro Privado",
          content: [
            "Todos los fondos, cuotas de campamentos o donaciones recaudadas para el ministerio ingresan y pertenecen a RENACER CHURCH, INC., rindiéndose cuentas conforme a REN-DOC-013 y prohibiéndose el beneficio privado.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 128,
          title: "Cláusula Formal de No Adopción y Estado de Borrador (v0.1)",
          content: [
            "El presente Manual Oficial de Ministerio Infantil y Juvenil (REN-DOC-016) se expide formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION.",
            "Su adopción eclesiástica requerirá la aprobación formal del Pastor Fundador y la debida revisión legal de sus componentes reglamentarios [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
  ],
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-016
 */
export function generateFullChildrenYouthManualMarkdown(): string {
  const d = CHILDREN_YOUTH_MANUAL_DRAFT;

  let md = `# ${d.documentNumber} — ${d.title}\n\n`;
  md += `**Código:** ${d.documentNumber} | **Versión:** ${d.version} | **Nivel:** ${d.hierarchyLevel}\n`;
  md += `**Categoría:** ${d.category} | **Subcategoría:** ${d.subcategory}\n`;
  md += `**DocumentState:** ${d.documentState} | **DecisionState:** ${d.decisionState} | **Adoption:** ${d.adoptionState}\n`;
  md += `**LegalState:** ${d.legalState} | **Área Responsable:** ${d.responsibleArea}\n`;
  md += `**Autor:** ${d.author} | **Autoridad de Aprobación:** ${d.approvalAuthority}\n\n`;
  md += `> [!IMPORTANT]\n`;
  md += `> **BORRADOR — NO ADOPTADO**\n`;
  md += `> **REQUIERE REVISIÓN LEGAL**\n`;
  md += `> El presente manual es un instrumento normativo eclesiástico interno. No constituye asesoramiento legal ni médico profesional y se encuentra subordinado a las leyes civiles aplicables y a las salvaguardas de REN-DOC-014.\n\n`;

  md += `## RESUMEN EJECUTIVO\n\n${d.pithySummary}\n\n`;

  md += `## PREÁMBULO TEOLÓGICO Y PASTORAL\n\n${d.preamble}\n\n`;

  md += `## PRINCIPIO INSTITUCIONAL FUNDAMENTAL\n\n`;
  md += `La Iglesia de Jesucristo tiene el deber sagrado e ineludible de evangelizar, discipular y formar a las nuevas generaciones en la verdad del Evangelio (Mateo 19:14; 1 Timoteo 4:12). Toda actividad ministerial infantil y juvenil debe fundamentarse en el respeto absoluto a la dignidad humana, la primacía incondicional de la seguridad física, emocional y sexual del menor sobre cualquier objetivo ministerial, la regla de dos adultos, la colaboración fraterna con los padres y la total transparencia institucional de RENACER CHURCH, INC.\n\n`;

  md += `## ÍNDICE GENERAL DE TÍTULOS\n\n`;
  d.titles.forEach((t) => {
    md += `- **TÍTULO ${t.romanNumeral}:** ${t.title} *(Artículos ${t.articles[0].number} al ${t.articles[t.articles.length - 1].number})*\n`;
  });
  md += `\n---\n\n`;

  // Cuerpo articulado
  d.titles.forEach((t) => {
    md += `## TÍTULO ${t.romanNumeral} — ${t.title}\n\n`;
    md += `*${t.description}*\n\n`;

    t.articles.forEach((art) => {
      md += `### Artículo ${art.number}. ${art.title}\n\n`;
      art.content.forEach((paragraph) => {
        md += `${paragraph}\n\n`;
      });

      if (art.dependencies && art.dependencies.length > 0) {
        md += `> **Vínculos Normativos e Institucionales:** ${art.dependencies.map((dep) => `\`${dep}\``).join(", ")}\n\n`;
      }

      if (art.requiresLegalReview) {
        md += `> [!WARNING]\n> **Nota de Revisión Especial:** Este artículo contiene materias sujetas a dictamen profesional de abogados habilitados [REQUIERE_REVISION_LEGAL].\n\n`;
      }

      if (art.isPendingDefinition) {
        md += `> [!NOTE]\n> **Parámetro Pendiente:** Criterio o umbral cuantitativo [PENDIENTE_DEFINIR].\n\n`;
      }
    });

    md += `---\n\n`;
  });

  // Catálogo de Formularios
  md += `## CATÁLOGO OFICIAL DE FORMULARIOS DEL MINISTERIO INFANTIL Y JUVENIL\n\n`;
  md += `Se establece el siguiente padrón oficial de doce (12) formularios para la operatividad de REN-DOC-016:\n\n`;
  md += `| Código | Título del Formulario | Propósito Administrativo | Rol Responsable | Frecuencia | Categoría Archivo |\n`;
  md += `|---|---|---|---|---|---|\n`;
  d.formsCatalog.forEach((f) => {
    md += `| **${f.code}** | ${f.title} | ${f.purpose} | ${f.responsibleRole} | ${f.frequency} | \`${f.retentionCategory}\` |\n`;
  });
  md += `\n*(Nota: Los formularios completos serán desarrollados en fases posteriores).* \n\n`;

  // Trazabilidad de Decisiones y Parámetros
  md += `## TRAZABILIDAD Y MATRIZ DE DECISIONES INSTITUCIONALES\n\n`;
  md += `El presente manual se fundamenta estrictamente en decisiones históricas e institucionales reales registradas en RENACER CHURCH MAESTRO:\n\n`;
  d.decisionsUsed.forEach((dec) => {
    md += `- \`${dec}\`: Vinculada en las disposiciones de doctrina, discipulado, gobierno, salvaguardas, ética y mayordomía.\n`;
  });
  md += `\n`;

  md += `### Parámetros Pendientes de Formalización (PENDIENTE_DEFINIR)\n\n`;
  d.pendingDefinitions.forEach((p) => {
    md += `- ${p}\n`;
  });
  md += `\n`;

  md += `### Materias Sujetas a Dictamen Profesional (REQUIERE_REVISION_LEGAL)\n\n`;
  d.legalReviewMatters.forEach((l) => {
    md += `- ${l}\n`;
  });
  md += `\n`;

  return md;
}
