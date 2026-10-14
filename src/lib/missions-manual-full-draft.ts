/**
 * REN-DOC-015 — MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER
 * Versión: v0.1 | Estado: EN_REDACCION | DecisionState: DEFINIDA | Adoption: NO_ADOPTADA
 * LegalState: REQUIERE_REVISION_LEGAL | Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: MISIONES_EVANGELISMO
 * 
 * BORRADOR — NO ADOPTADO | REQUIERE REVISIÓN LEGAL
 */

export interface MissionArticleDraft {
  number: number;
  title: string;
  content: string[];
  dependencies?: string[];
  crossReferences?: string[];
  keyPrinciples?: string[];
  requiresLegalReview?: boolean;
  isPendingDefinition?: boolean;
}

export interface MissionTitleDraft {
  number: string;
  romanNumeral: string;
  title: string;
  description: string;
  articles: MissionArticleDraft[];
}

export interface MissionFormDescriptor {
  code: string;
  title: string;
  purpose: string;
  responsibleRole: string;
  frequency: string;
  retentionCategory: string;
}

export interface MissionsManualDraft {
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
  titles: MissionTitleDraft[];
  formsCatalog: MissionFormDescriptor[];
  decisionsUsed: string[];
  pendingDefinitions: string[];
  legalReviewMatters: string[];
}

export const MISSIONS_FORMS_CATALOG: MissionFormDescriptor[] = [
  {
    code: "REN-FORM-MIS-001",
    title: "Solicitud de Servicio Misionero y Vocación Transcultural",
    purpose: "Registro formal de postulación de candidatos a actividades misioneras de corto, mediano o largo plazo.",
    responsibleRole: "Candidato Misionero / Pastor de Misiones",
    frequency: "Por postulación misionera",
    retentionCategory: "EXPEDIENTE_MISIONERO",
  },
  {
    code: "REN-FORM-MIS-002",
    title: "Evaluación Integral de Candidato Misionero",
    purpose: "Dictamen ministerial, doctrinal, psicológico y de carácter para la idoneidad misionera.",
    responsibleRole: "Comisión de Misiones y Selección / Pastor Fundador",
    frequency: "Por proceso de evaluación",
    retentionCategory: "EXPEDIENTE_MISIONERO_CONFIDENCIAL",
  },
  {
    code: "REN-FORM-MIS-003",
    title: "Plan Estratégico Misionero de Campo",
    purpose: "Documentación de objetivos, cronograma, contexto sociocultural, metas de discipulado y estrategia de plantación.",
    responsibleRole: "Líder de Equipo Misionero / Plantador",
    frequency: "Por proyecto o misión aprobada",
    retentionCategory: "PLANES_ESTRATEGICOS",
  },
  {
    code: "REN-FORM-MIS-004",
    title: "Evaluación de Riesgos y Seguridad Misionera",
    purpose: "Análisis de amenazas de seguridad, salud, clima, contexto político, salvaguardas y plan de contingencia (coordinado con REN-DOC-014).",
    responsibleRole: "Oficial de Salvaguardas / Comité de Seguridad",
    frequency: "Previo a todo despliegue misionero",
    retentionCategory: "SALVAGUARDAS_MISIONERAS",
  },
  {
    code: "REN-FORM-MIS-005",
    title: "Autorización Formal de Envío Misionero",
    purpose: "Resolución eclesiástica oficial que autoriza la salida del equipo o misionero bajo el respaldo de RENACER.",
    responsibleRole: "Pastor Fundador / Consejo de Gobierno",
    frequency: "Por misión enviada",
    retentionCategory: "RESOLUCIONES_INSTITUCIONALES",
  },
  {
    code: "REN-FORM-MIS-006",
    title: "Acta Litúrgica de Comisionamiento Misionero",
    purpose: "Registro litúrgico y pastoral de imposición de manos, oración y bendición de envío misionero (coordinado con REN-DOC-012).",
    responsibleRole: "Pastor Oficiante / Secretario Ministerial",
    frequency: "Por acto litúrgico de envío",
    retentionCategory: "ACTAS_LITURGICAS",
  },
  {
    code: "REN-FORM-MIS-007",
    title: "Presupuesto y Plan Financiero Misionero",
    purpose: "Estimación y aprobación de fondos para manutención, transporte, vivienda, materiales y contingencias (coordinado con REN-DOC-013).",
    responsibleRole: "Tesorería / Comité de Finanzas",
    frequency: "Por proyecto misionero",
    retentionCategory: "CONTABILIDAD_MISIONERA",
  },
  {
    code: "REN-FORM-MIS-008",
    title: "Reporte Periódico de Campo y Avance Ministerial",
    purpose: "Informe de actividades de evangelismo, bautismos, discipulado, células plantadas y desafíos en el campo.",
    responsibleRole: "Misionero en Campo / Supervisor de Misión",
    frequency: "Mensual / Trimestral [PENDIENTE_DEFINIR]",
    retentionCategory: "INFORMES_MINISTERIALES",
  },
  {
    code: "REN-FORM-MIS-009",
    title: "Reporte Financiero y Rendición de Cuentas Misionera",
    purpose: "Comprobación de ingresos, gastos ejecutados, recibos y saldos de fondos asignados corporativamente.",
    responsibleRole: "Misionero Responsable / Tesorero de Misión",
    frequency: "Mensual",
    retentionCategory: "CONTABILIDAD_MISIONERA",
  },
  {
    code: "REN-FORM-MIS-010",
    title: "Reporte de Incidente o Situación de Emergencia en Campo",
    purpose: "Notificación urgente de accidentes, crisis médicas, riesgos de seguridad física o contingencias graves en misión.",
    responsibleRole: "Misionero / Oficial de Seguridad",
    frequency: "Ante ocurrencia inmediata de incidente",
    retentionCategory: "SALVAGUARDAS_INCIDENTES",
  },
  {
    code: "REN-FORM-MIS-011",
    title: "Evaluación Final y Cierre de Proyecto Misionero",
    purpose: "Balance general de resultados, discípulos formados, obras establecidas y recomendaciones pastorales al término de la misión.",
    responsibleRole: "Comité de Misiones / Misionero",
    frequency: "Al concluir la misión o proyecto",
    retentionCategory: "HISTORIAL_MISIONERO",
  },
  {
    code: "REN-FORM-MIS-012",
    title: "Registro de Retorno, Cuidado Pastoral y Reintegración",
    purpose: "Acompañamiento post-misión, debriefing emocional/espiritual, descanso ministerial y reasignación eclesiástica.",
    responsibleRole: "Equipo de Cuidado Pastoral / Pastores",
    frequency: "Al retorno del misionero",
    retentionCategory: "EXPEDIENTE_PASTORAL_CONFIDENCIAL",
  },
];

export const MISSIONS_MANUAL_DRAFT: MissionsManualDraft = {
  documentNumber: "REN-DOC-015",
  title: "MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER",
  shortTitle: "Manual de Misiones y Expansión",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "MISIONES_EVANGELISMO",
  subcategory: "Misiones Nacionales, Internacionales, Evangelismo y Plantación",
  version: "0.1",
  documentState: "EN_REDACCION",
  decisionState: "DEFINIDA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  author: "Luis Uchubanda Falconí / Comisión de Misiones y Evangelismo",
  responsibleArea: "DIRECCION_MISIONES_EVANGELISMO",
  approvalAuthority: "PASTOR_FUNDADOR",
  confidentiality: "INTERNO_CONGREGACION",
  pithySummary: "Marco institucional que regula la evangelización personal y comunitaria, evangelismo digital, seguimiento pastoral de nuevos creyentes, plantación ordenada de nuevas obras, clasificación de misiones, requisitos y envío de misioneros, supervisión, seguridad y finanzas de RENACER CHURCH, INC.",
  preamble: "En obediencia a la Gran Comisión encomendada por nuestro Señor Jesucristo: «Id por todo el mundo y predicad el evangelio a toda criatura» (Marcos 16:15) y «haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado» (Mateo 28:19-20), RENACER CHURCH, INC. establece el presente Manual Oficial de Misiones, Evangelismo y Expansión (REN-DOC-015). La Iglesia existe por y para la misión redentora de Dios. Toda expansión de RENACER debe ser fundamentada en la verdad doctrinal (REN-DOC-001), el carácter piadoso, la integridad ética (REN-DOC-011), la salvaguarda de las personas (REN-DOC-014) y la transparencia financiera (REN-DOC-013), rechazando la multiplicación superficial y privilegiando la formación de discípulos que formen a otros discípulos (2 Timoteo 2:2).",
  formsCatalog: MISSIONS_FORMS_CATALOG,
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
    "Duración mínima de formación y preparación previa para candidatos misioneros transculturales [PENDIENTE_DEFINIR]",
    "Tiempo mínimo de membresía y servicio activo requerido previo a la postulación misionera [PENDIENTE_DEFINIR]",
    "Frecuencia obligatoria de rendición de informes y reportes de campo periódicos [PENDIENTE_DEFINIR]",
    "Límites cuantitativos y baremos de apoyo financiero de manutención misionera [PENDIENTE_DEFINIR]",
    "Fondo de reserva económica mínima para contingencias y emergencias de repatriación [PENDIENTE_DEFINIR]",
    "Criterios numéricos y de madurez eclesial para la transición de obra en plantación a congregación establecida [PENDIENTE_DEFINIR]",
    "Duración máxima ordinaria de los términos de servicio misionero antes del período de retorno y descanso [PENDIENTE_DEFINIR]",
  ],
  legalReviewMatters: [
    "Requisitos legales de inmigración, pasaportes, visados religiosos o de voluntariado y permisos de estancia en misiones internacionales [REQUIERE_REVISION_LEGAL]",
    "Pólizas de seguro de viajes internacionales, cobertura médica global, repatriación y evacuación de emergencia [REQUIERE_REVISION_LEGAL]",
    "Acuerdos de cooperación interinstitucional y convenios con entidades religiosas extranjeras [REQUIERE_REVISION_LEGAL]",
    "Régimen fiscal, cumplimiento antiblanqueo y restricciones aduaneras en transferencias internacionales de fondos misioneros [REQUIERE_REVISION_LEGAL]",
    "Procedimiento civil y corporativo para la eventual incorporación o registro legal de sedes u obras en otras jurisdicciones [REQUIERE_REVISION_LEGAL]",
    "Waivers de responsabilidad civil y consentimientos informados para participantes en viajes misioneros de corto plazo [REQUIERE_REVISION_LEGAL]",
  ],
  titles: [
    {
      number: "1",
      romanNumeral: "I",
      title: "NATURALEZA, PROPÓSITO INSTITUCIONAL Y FUNDAMENTO BÍBLICO DE LA MISIÓN",
      description: "Marco fundacional, jerarquía normativa y principios bíblicos rectores de la evangelización y expansión.",
      articles: [
        {
          number: 1,
          title: "Naturaleza y Jerarquía Normativa del Manual",
          content: [
            "El presente Manual Oficial de Misiones, Evangelismo y Expansión (REN-DOC-015) constituye la norma institucional de Nivel 4 que rige la visión, planificación, ejecución, financiamiento, supervisión y evaluación de toda actividad evangelística, misionera y de plantación de obras de RENACER CHURCH, INC.",
            "Este Manual no deroga ni contradice las disposiciones fundamentales de la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003), ni las normas de Ética (REN-DOC-011) o Salvaguardas (REN-DOC-014), sino que operativiza la Gran Comisión en conformidad con ellas.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-011", "REN-DOC-014"],
        },
        {
          number: 2,
          title: "Fundamento Bíblico y Teológico de la Misión",
          content: [
            "La labor misionera y evangelística de RENACER se fundamenta en las Sagradas Escrituras: la Gran Comisión (Mateo 28:18-20; Marcos 16:15), el poder del Espíritu Santo para ser testigos hasta lo último de la tierra (Hechos 1:8), el llamado al envío misionero eclesial (Hechos 13:1-4), la necesidad de proclamar para que los hombres crean (Romanos 10:14-15), la edificación del cuerpo de Cristo (Efesios 4:11-16) y la multiplicación discipular generacional (2 Timoteo 2:2).",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 3,
          title: "Propósito Integral: Evangelizar, Discipular, Formar, Enviar, Plantar, Multiplicar y Servir",
          content: [
            "La visión misionera de RENACER no se reduce a la realización de eventos masivos o campañas esporádicas, sino al desarrollo de un ciclo integral y sostenible: EVANGELIZAR a los no creyentes, DISCIPULAR a los convertidos, FORMAR líderes idóneos, ENVIAR misioneros capacitados, PLANTAR nuevas comunidades de fe, MULTIPLICAR discípulos y SERVIR a la sociedad con amor cristiano.",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-007", "REN-DOC-008"],
        },
        {
          number: 4,
          title: "Deslinde con el Denominacionalismo y Preservación de la Autonomía Eclesial",
          content: [
            "RENACER CHURCH, INC. es una iglesia local autónoma y corporativa. La expansión misionera y la plantación de obras no convierten a RENACER en una denominación jerárquica piramidal ni crean una estructura burocrática por encima de la autoridad constitucional del Pastor Fundador y de los órganos de gobierno existentes.",
            "Toda nueva obra plantada o misionero enviado actúa bajo la cobertura espiritual y las salvaguardas institucionales de RENACER sin alterar su naturaleza corporativa singular.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-004"],
        },
      ],
    },
    {
      number: "2",
      romanNumeral: "II",
      title: "EVANGELISMO PERSONAL, CONGREGACIONAL Y COMUNITARIO",
      description: "Estrategias y principios para la proclamación continua del Evangelio en el entorno local.",
      articles: [
        {
          number: 5,
          title: "Evangelismo como Estilo de Vida del Creyente",
          content: [
            "Todo miembro en plena comunión de RENACER es llamado a ser testigo de Jesucristo en su entorno familiar, laboral, académico y social, compartiendo su testimonio de salvación con mansedumbre, respeto y fidelidad bíblica (1 Pedro 3:15).",
          ],
          dependencies: ["REN-DOC-005"],
        },
        {
          number: 6,
          title: "Jornadas Congregacionales y Alcance Comunitario",
          content: [
            "La iglesia organizará periódicamente jornadas de evangelismo en parques, calles, centros comunitarios y hogares, combinando la proclamación de la Palabra con la oración intercesora y la ayuda solidaria a familias necesitadas.",
          ],
        },
        {
          number: 7,
          title: "Prohibición de Métodos Coercitivos o Engañosos",
          content: [
            "Se prohíbe terminantemente el uso de manipulación psicológica, promesas falsas de prosperidad económica instantánea, amenazas espirituales, engaños o testimonios adulterados para inducir conversiones.",
            "La fe cristiana debe ser una respuesta voluntaria, consciente y guiada por la gracia y el Espíritu Santo.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 8,
          title: "Ruta de Conexión del Nuevo Creyente",
          content: [
            "Toda persona que confiese a Cristo en actividades evangelísticas será integrada en la ruta institucional: Evangelismo → Conexión → Discipulado (REN-DOC-007) → Bautismo (REN-DOC-012) → Membresía (REN-DOC-005) → Servicio.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-007", "REN-DOC-012"],
        },
      ],
    },
    {
      number: "3",
      romanNumeral: "III",
      title: "EVANGELISMO DIGITAL, REDES SOCIALES Y MEDIOS TECNOLÓGICOS",
      description: "Uso estratégico, ético y pastoral de plataformas digitales para la extensión del Evangelio.",
      articles: [
        {
          number: 9,
          title: "Objetivo y Alcance del Evangelismo Digital",
          content: [
            "Las plataformas digitales, redes sociales, transmisiones en vivo, sitios web y aplicaciones móviles de RENACER tienen por fin proclamar las buenas nuevas, responder inquietudes de fe, enseñar sana doctrina y conectar a los interesados con una congregación presencial o una Familia de Grupo.",
          ],
        },
        {
          number: 10,
          title: "Integridad y Veracidad en Contenidos Virtuales",
          content: [
            "Todo contenido multimedia publicado bajo el nombre de RENACER debe reflejar rigor doctrinal, excelencia técnica, veracidad absoluta y respeto a la privacidad de las personas.",
            "Queda prohibido el uso de técnicas de clickbait deshonesto, manipulación de algoritmos con contenido sensacionalista o atribución de milagros no verificados.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 11,
          title: "Atención Pastoral y Consejería en Línea",
          content: [
            "Las interacciones pastorales digitales se regirán estrictamente por las salvaguardas de REN-DOC-014: no habrá chats privados individuales no autorizados con menores de edad y las consejerías complejas serán derivadas a canales formales presenciales o institucionales.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 12,
          title: "Protección de Datos y No Explotación Comercial de Nuevos Contactos",
          content: [
            "Los datos personales recopilados a través de formularios digitales o campañas online se utilizarán con exclusividad para fines de seguimiento espiritual y cuidado pastoral, prohibiéndose su comercialización o transferencia a terceros ajenos a la iglesia.",
          ],
          dependencies: ["REN-DOC-014", "REN-DOC-019"],
        },
      ],
    },
    {
      number: "4",
      romanNumeral: "IV",
      title: "SISTEMA PASTORAL DE SEGUIMIENTO Y CONSOLIDACIÓN DE NUEVOS CREYENTES",
      description: "Protocolo de 10 pasos para el cuidado, discipulado y bienvenida fraterna sin invasión de la privacidad.",
      articles: [
        {
          number: 13,
          title: "Protocolo de Seguimiento de Nuevos Convertidos en Diez Pasos",
          content: [
            "El proceso de consolidación comprende: 1) Contacto inicial y registro voluntario básico; 2) Bienvenida fraterna y entrega de literatura bíblica; 3) Primer contacto telefónico o mensaje pastoral; 4) Invitación a una reunión general o de jóvenes; 5) Asignación a una Familia de Grupo cercana a su residencia; 6) Inscripción en la Escuela de Discípulos (REN-DOC-007); 7) Preparación doctrinal para el Santo Bautismo (REN-DOC-012); 8) Admisión como Miembro en Plena Comunión (REN-DOC-005); 9) Crecimiento en servicio; y 10) Formación de líderes (REN-DOC-008).",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-007", "REN-DOC-008", "REN-DOC-012"],
        },
        {
          number: 14,
          title: "Respeto a la Autonomía y Prohibición de Hostigamiento",
          content: [
            "El seguimiento pastoral debe ser paciente, amoroso y respetuoso. Si una persona manifiesta su deseo de no ser contactada o de no continuar en el proceso, se suspenderá de inmediato el seguimiento sin presiones, amenazas ni juicios condenatorios.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 15,
          title: "Rol Clave de las Familias de Grupo en la Consolidación",
          content: [
            "Las Familias de Grupo constituyen el entorno natural primario donde el nuevo creyente recibe afecto, oración, enseñanza bíblica inicial y apoyo comunitario fraterno (DEC-DEF-010).",
          ],
          dependencies: ["DEC-DEF-010", "REN-DOC-006"],
        },
        {
          number: 16,
          title: "Registro Confidencial en la Base de Datos Pastoral",
          content: [
            "El estado de avance del nuevo discípulo se actualizará de forma confidencial en el sistema eclesiástico para evitar duplicidad de contactos y garantizar una atención pastoral ordenada.",
          ],
          dependencies: ["REN-DOC-019"],
        },
      ],
    },
    {
      number: "5",
      romanNumeral: "V",
      title: "RUTA ESTRATÉGICA DE PLANTACIÓN DE NUEVAS OBRAS",
      description: "Proceso estructurado de 10 etapas para la siembra y establecimiento de nuevas comunidades de fe.",
      articles: [
        {
          number: 17,
          title: "Ruta Institucional de Plantación en Diez Etapas",
          content: [
            "Toda nueva obra de RENACER seguirá la ruta: 1) VISIÓN Y DISCERNIMIENTO espiritual del Pastor Fundador y el Consejo; 2) EVALUACIÓN del territorio, necesidad espiritual y viabilidad; 3) SELECCIÓN Y EVALUACIÓN del candidato plantador; 4) FORMACIÓN específica en liderazgo y doctrina (REN-DOC-008, REN-DOC-009); 5) AUTORIZACIÓN formal de la obra (REN-FORM-MIS-005); 6) CONFORMACIÓN DEL EQUIPO de apoyo misionero; 7) INICIO DE LA MISIÓN y evangelismo en la zona; 8) FORMACIÓN DEL GRUPO celular o punto de predicación; 9) DESARROLLO DE LA OBRA con cultos regulares; y 10) ESTABLECIMIENTO como Congregación RENACER.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-008", "REN-DOC-009"],
        },
        {
          number: 18,
          title: "Prohibición de Plantaciones No Autorizadas o Independientes",
          content: [
            "Ningún líder, miembro o ministro podrá iniciar una reunión invocando el nombre, logo o doctrina de RENACER sin la autorización expresa, formal y escrita del Pastor Fundador y el Consejo de Gobierno.",
            "El inicio de obras autónomas sin cobertura constituirá causal de separación ministerial inmediata.",
          ],
          dependencies: ["REN-DOC-004", "REN-DOC-011"],
        },
        {
          number: 19,
          title: "Criterios de Salud Espiritual antes del Crecimiento Numérico",
          content: [
            "La plantación de una nueva obra no se medirá únicamente por la cantidad de asistentes o la recaudación de fondos, sino por la solidez doctrinal de los convertidos, la existencia de familias restauradas, la formación de discípulos y el testimonio público en la comunidad.",
          ],
        },
        {
          number: 20,
          title: "Acompañamiento y Supervisión desde la Iglesia Madre",
          content: [
            "La iglesia madre (RENACER Central) proveerá asesoría doctrinal, cobertura pastoral, apoyo en materiales didácticos y fiscalización administrativa continua a toda obra en fase de plantación durante el período formativo inicial [PENDIENTE_DEFINIR duración de acompañamiento prioritario].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "6",
      romanNumeral: "VI",
      title: "CLASIFICACIÓN INSTITUCIONAL DE OBRAS Y CONGREGACIONES",
      description: "Tipología de las seis etapas de desarrollo de las obras misioneras y sedes.",
      articles: [
        {
          number: 21,
          title: "Tipología Oficial de Seis Categorías de Obra",
          content: [
            "Las obras vinculadas a RENACER se clasifican en: 1) Grupo Misionero (reunión inicial de evangelismo); 2) Punto de Reunión (célula o predicación periódica en local o casa); 3) Obra en Plantación (reunión semanal regular con equipo misionero asignado); 4) Congregación RENACER (comunidad con cultos dominicales, ministerios básicos y membresía formal); 5) Congregación Establecida (sede consolidada con liderazgo maduro, autosostenibilidad y ordenanzas regulares); y 6) Obra Asociada (iglesia o ministerio fraterno en convenio formal sin subordinación jurídica).",
          ],
        },
        {
          number: 22,
          title: "Ausencia de Personalidad Jurídica Civil Automática",
          content: [
            "El reconocimiento eclesiástico de una nueva obra como 'Congregación' no crea automáticamente una corporación civil independiente ni confiere derechos de propiedad sobre bienes inmuebles.",
            "Toda eventual incorporación jurídica o apertura de filial civil requerirá un proceso legal diferenciado y la aprobación formal del Board of Trustees conforme a las leyes del estado correspondiente [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-003"],
          requiresLegalReview: true,
        },
        {
          number: 23,
          title: "Criterios de Transición entre Fases",
          content: [
            "El paso de una categoría a otra será evaluado anualmente por la Dirección de Misiones y requerirá la ratificación del Pastor Fundador con base en criterios de madurez, liderazgo y solidez doctrinal [PENDIENTE_DEFINIR baremos cuantitativos exactos].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 24,
          title: "Clausura o Reorientación de Obras no Viables",
          content: [
            "Si tras un período razonable de esfuerzo una obra misionera no logra consolidarse o se desvía doctrinalmente, el Pastor Fundador y el Consejo podrán ordenar su reorientación pastoral, fusión con otra obra o cierre administrativo ordenado.",
          ],
        },
      ],
    },
    {
      number: "7",
      romanNumeral: "VII",
      title: "EL MISIONERO: DEFINICIÓN, ESTADOS Y DESLINDE MINISTERIAL",
      description: "Tipología del rol misionero y deslinde estricto con las credenciales de ordenación.",
      articles: [
        {
          number: 25,
          title: "Definición del Misionero en RENACER",
          content: [
            "Se define como Misionero al creyente bautizado, miembro activo de RENACER, que habiendo evidenciado vocación de servicio, llamado divino y carácter cristiano, es apartado y comisionado por la iglesia para la proclamación transcultural o territorial del Evangelio y la plantación de obras.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-005"],
        },
        {
          number: 26,
          title: "Seis Estados del Misionero",
          content: [
            "El servicio misionero reconoce seis estados formales: 1) Misionero en Formación (en capacitación bíblica y transcultural); 2) Misionero Autorizado (aprobado para despliegue); 3) Misionero Enviado (con fecha y destino asignados); 4) Misionero en Campo (en ejercicio activo de la misión); 5) Misionero en Retorno (en fase de transición, descanso o cuidado pastoral); y 6) Misionero Finalizado (al concluir formalmente su término de servicio o asignación).",
          ],
        },
        {
          number: 27,
          title: "Deslinde Estricto: Misionero frente a Ministro Ordenado (REN-DOC-010)",
          content: [
            "La designación o comisión como 'Misionero' constituye una función o asignación ministerial práctica y no equivale automáticamente al otorgamiento de Licencia Pastoral ni Ordenación Ministerial (REN-DOC-010).",
            "Cualquier aspiración a credenciales ministeriales formales seguirá de manera independiente los requisitos, grados y comisiones examinadoras establecidas en el Reglamento Oficial de Credenciales.",
          ],
          dependencies: ["REN-DOC-010"],
        },
        {
          number: 28,
          title: "Facultades Litúrgicas del Misionero no Ordenado",
          content: [
            "El misionero no ordenado puede predicar, evangelizar, enseñar y guiar grupos celulares; sin embargo, la administración solemne del Bautismo, Santa Cena u Ordenación Pastoral se reservará a ministros ordenados o requerirá autorización pastoral expresa conforme a REN-DOC-012.",
          ],
          dependencies: ["REN-DOC-012"],
        },
      ],
    },
    {
      number: "8",
      romanNumeral: "VIII",
      title: "REQUISITOS, EVALUACIÓN E IDONEIDAD DE CANDIDATOS MISIONEROS",
      description: "Condiciones espirituales, doctrinales, psicológicas y éticas de los postulantes.",
      articles: [
        {
          number: 29,
          title: "Requisitos Fundamentales de Postulación",
          content: [
            "Todo candidato a servicio misionero debe cumplir: a) Fe viva y testimonio intachable; b) Bautismo en agua por inmersión; c) Membresía activa en RENACER; d) Aprobación de la Escuela de Discípulos y Escuela de Líderes (REN-DOC-007, REN-DOC-008); e) Adhesión estricta a la Declaración de Fe (REN-DOC-001) y Código de Ética (REN-DOC-011); f) Madurez emocional y estabilidad familiar; y g) Evaluación favorable del pastor de su congregación.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-007", "REN-DOC-008", "REN-DOC-011"],
        },
        {
          number: 30,
          title: "Evaluación Médica, Psicológica y de Salvaguardas",
          content: [
            "Los postulantes se someterán a exámenes de salud física, evaluación psicológica de idoneidad transcultural y verificación completa de antecedentes penales bajo las salvaguardas de REN-DOC-014 (REN-FORM-MIS-002) [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 31,
          title: "Preparación Cultural, Lingüística y Contextual",
          content: [
            "Antes de su envío, el misionero recibirá formación sobre el contexto cultural, idioma básico, leyes locales, costumbres y normas de respeto del territorio al que será destinado.",
          ],
        },
        {
          number: 32,
          title: "Parámetros Temporales de Servicio Previo",
          content: [
            "El tiempo mínimo de servicio previo en ministerios locales antes de ser considerado para misiones transculturales de largo plazo se establece como criterio evaluativo de madurez [PENDIENTE_DEFINIR plazo cuantitativo].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "9",
      romanNumeral: "IX",
      title: "PROCESO INSTITUCIONAL DE ENVÍO MISIONERO EN DOCE PASOS",
      description: "Procedimiento oficial desde la postulación hasta el despliegue en campo.",
      articles: [
        {
          number: 33,
          title: "Secuencia del Procedimiento de Envío en Doce Pasos",
          content: [
            "El proceso formal comprende: 1) Presentación de la Solicitud (REN-FORM-MIS-001); 2) Entrevista Pastoral Inicial; 3) Evaluación Doctrinal y de Idoneidad (REN-FORM-MIS-002); 4) Formación Misionera Específica; 5) Formulación del Plan Estratégico de Campo (REN-FORM-MIS-003); 6) Elaboración y Aprobación del Presupuesto (REN-FORM-MIS-007); 7) Evaluación de Riesgos y Seguridad (REN-FORM-MIS-004); 8) Aprobación Formal de la Dirección de Misiones; 9) Resolución de Envío del Pastor Fundador y Consejo (REN-FORM-MIS-005); 10) Ceremonia Litúrgica de Comisionamiento (REN-FORM-MIS-006 / REN-DOC-012); 11) Despliegue y Arribo a Campo; y 12) Activación del Sistema de Supervisión Periódica.",
          ],
          dependencies: ["REN-DOC-012", "REN-DOC-013", "REN-DOC-014"],
        },
        {
          number: 34,
          title: "Carácter Vinculante de la Aprobación Financiera y de Riesgo",
          content: [
            "Ningún misionero o equipo podrá ser enviado a campo si el presupuesto no cuenta con fuentes de financiamiento claras y aprobadas por Tesorería, o si la evaluación de riesgo determina peligro inaceptable para la vida o integridad de los participantes.",
          ],
          dependencies: ["REN-DOC-013", "REN-DOC-014"],
        },
        {
          number: 35,
          title: "Coordinación Logística y Documentación de Viaje",
          content: [
            "La Secretaría de Misiones verificará la vigencia de pasaportes, visados, vacunas internacionales, pasajes de ida y vuelta, y pólizas de seguro médico antes de emitir la orden de viaje [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 36,
          title: "Comunicación Congregacional de Envío",
          content: [
            "La congregación será informada de los proyectos y misioneros enviados a fin de activar redes de oración, intercesión y ofrendas misioneras voluntarias.",
          ],
        },
      ],
    },
    {
      number: "10",
      romanNumeral: "X",
      title: "ACTO LITÚRGICO DE COMISIONAMIENTO MISIONERO",
      description: "Ceremonia pastoral de oración, imposición de manos y bendición conforme a REN-DOC-012.",
      articles: [
        {
          number: 37,
          title: "Naturaleza Litúrgica del Comisionamiento",
          content: [
            "El comisionamiento es una ceremonia solemne de envío pastoral que expresa el respaldo espiritual y la bendición de la congregación hacia los misioneros (Hechos 13:3), regulada por el Manual Oficial de Ceremonias (REN-DOC-012).",
          ],
          dependencies: ["REN-DOC-012"],
        },
        {
          number: 38,
          title: "Estructura de la Ceremonia de Comisionamiento",
          content: [
            "El acto incluirá: a) Presentación pública del misionero y su familia; b) Lectura de la misión, objetivos y territorio asignado; c) Exhortación bíblica pastoral; d) Promesa solemne de fidelidad doctrinal y testimonio cristiano; e) Oración e imposición de manos del cuerpo pastoral; y f) Entrega del Acta de Comisionamiento (REN-FORM-MIS-006).",
          ],
          dependencies: ["REN-DOC-012"],
        },
        {
          number: 39,
          title: "No Confusión con la Ceremonia de Ordenación Ministerial",
          content: [
            "El comisionamiento misionero bendice una asignación territorial o transcultural específica; no equivale a la ordenación presbiterial perpetua ni confiere títulos ministeriales superiores.",
          ],
          dependencies: ["REN-DOC-010", "REN-DOC-012"],
        },
        {
          number: 40,
          title: "Registro en el Archivo Ministerial y de Ceremonias",
          content: [
            "Toda acta de comisionamiento será asentada en el Libro de Actas Litúrgicas y en el expediente individual del misionero (REN-DOC-019).",
          ],
          dependencies: ["REN-DOC-019"],
        },
      ],
    },
    {
      number: "11",
      romanNumeral: "XI",
      title: "SUPERVISIÓN, RENDICIÓN DE CUENTAS Y COMUNICACIÓN EN CAMPO",
      description: "Estructura de acompañamiento pastoral y reportes periódicos de actividades misioneras.",
      articles: [
        {
          number: 41,
          title: "Líneas de Supervisión Pastoral",
          content: [
            "Todo misionero en campo estará bajo la supervisión directa de un Supervisor de Misión designado por la Dirección de Misiones y en comunicación regular con el Pastor Fundador.",
          ],
          dependencies: ["REN-DOC-004", "REN-DOC-006"],
        },
        {
          number: 42,
          title: "Obligatoriedad de Reportes Periódicos de Campo",
          content: [
            "El misionero remitirá puntualmente el Reporte de Campo (REN-FORM-MIS-008) y el Reporte Financiero (REN-FORM-MIS-009) según la periodicidad formalmente establecida [PENDIENTE_DEFINIR frecuencia exacta].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 43,
          title: "Visitas Pastorales de Supervisión y Aliento",
          content: [
            "La Dirección de Misiones programará visitas presenciales periódicas al campo misionero para constatar el avance de la obra, orar con los obreros y brindar apoyo fraternal a las familias misioneras.",
          ],
        },
        {
          number: 44,
          title: "Canales Seguros de Comunicación",
          content: [
            "En territorios con restricciones religiosas o contextos hostiles, las comunicaciones se mantendrán a través de canales digitales cifrados y protocolos de discreción para proteger la integridad de los misioneros.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "12",
      romanNumeral: "XII",
      title: "MISIONES NACIONALES: EVANGELIZACIÓN Y EXPANSIÓN EN ESTADOS UNIDOS",
      description: "Regulación de proyectos misioneros y plantación en ciudades y estados de la Unión Americana.",
      articles: [
        {
          number: 45,
          title: "Alcance de las Misiones Nacionales",
          content: [
            "Las misiones nacionales comprenden esfuerzos de evangelismo, ayuda comunitaria, células en hogares y plantación de obras en New Jersey y otros estados de Estados Unidos.",
          ],
        },
        {
          number: 46,
          title: "Cumplimiento de Leyes Estatales y Municipales",
          content: [
            "Toda actividad de alcance público, uso de espacios comunitarios, recolección de donaciones o reuniones públicas en otros estados cumplirá estrictamente con las leyes y ordenanzas locales [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 47,
          title: "Plantación entre Comunidades Hispanas e Interculturales",
          content: [
            "Las misiones nacionales priorizarán el alcance de familias hispanohablantes e interculturales, promoviendo su integración espiritual, discipulado y servicio en el Reino de Dios.",
          ],
        },
        {
          number: 48,
          title: "Sostenibilidad y Apoyo de la Iglesia Central",
          content: [
            "Las misiones nacionales recibirán apoyo financiero transitorio de RENACER Central, orientándose progresivamente hacia la autosostenibilidad económica mediante los diezmos y ofrendas de sus propios miembros (REN-DOC-013) según el plan de subsidio decreciente [PENDIENTE_DEFINIR escala temporal de subsidio transitorio].",
          ],
          dependencies: ["REN-DOC-013"],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "13",
      romanNumeral: "XIII",
      title: "MISIONES INTERNACIONALES: ALCANCE TRANSCULTURAL Y VIAJES MISIONEROS",
      description: "Regulación de proyectos misioneros transfronterizos, cooperación y logística internacional.",
      articles: [
        {
          number: 49,
          title: "Misiones Internacionales y Viajes de Corto y Largo Plazo",
          content: [
            "RENACER promueve misiones transculturales que incluyen viajes misioneros de corto plazo (brigadas médicas, construcción, campañas) y misiones de largo plazo para plantación y discipulado en naciones extranjeras.",
          ],
        },
        {
          number: 50,
          title: "Evaluación Integral del País de Destino",
          content: [
            "Antes de autorizar un viaje internacional se evaluará: a) Situación sociopolítica y seguridad; b) Requisitos migratorios y visados; c) Normativa sanitaria y vacunas; d) Infraestructura de alojamiento y transporte; y e) Contactos locales confiables.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 51,
          title: "Seguros Internacionales de Viaje y Evacuación Médica",
          content: [
            "Todo participante en un viaje misionero internacional debe contar obligatoriamente con póliza de seguro médico con cobertura en el país de destino, asistencia jurídica y repatriación sanitaria [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 52,
          title: "Respeto a la Legislación y Costumbres Extranjeras",
          content: [
            "Los equipos misioneros acatarán las leyes civiles y aduaneras de los países anfitriones, manteniendo un testimonio cristiano ejemplar y evitando cualquier controversia política partidista.",
          ],
          dependencies: ["REN-DOC-011"],
        },
      ],
    },
    {
      number: "14",
      romanNumeral: "XIV",
      title: "SEGURIDAD INTEGRAL MISIONERA Y ARTICULACIÓN CON REN-DOC-014",
      description: "Protocolos de prevención de riesgos, salvaguardas y contingencias en campo misionero.",
      articles: [
        {
          number: 53,
          title: "Subordinación Plena a las Salvaguardas de REN-DOC-014",
          content: [
            "El presente manual se articula directamente con el Manual Oficial de Protección, Seguridad y Salvaguardas (REN-DOC-014). Ningún imperativo misionero o celo evangelístico justificará jamás relajar los estándares de seguridad física, emocional, sexual o espiritual.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 54,
          title: "Análisis de Riesgos Previo al Despliegue (REN-FORM-MIS-004)",
          content: [
            "Todo proyecto misionero contará con un formulario REN-FORM-MIS-004 aprobado, identificando zonas de peligro delictivo, riesgos climáticos, accesibilidad a hospitales y rutas de escape.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 55,
          title: "Prohibición de Envíos a Zonas de Riesgo Letal Extremo",
          content: [
            "Queda prohibido enviar brigadas voluntarias o familias con niños a zonas de conflicto bélico activo, epidemias de alta letalidad sin protección médica o regiones con amenazas directas de violencia inminente.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 56,
          title: "Protocolo de Notificación de Incidentes en Campo (REN-FORM-MIS-010)",
          content: [
            "Cualquier accidente, enfermedad grave o incidente de seguridad en campo se notificará de inmediato a la Dirección de Misiones mediante el formulario REN-FORM-MIS-010 para activar asistencia urgente.",
          ],
          dependencies: ["REN-DOC-014"],
        },
      ],
    },
    {
      number: "15",
      romanNumeral: "XV",
      title: "SALVAGUARDAS REFORZADAS EN MISIONES CON MENORES DE EDAD",
      description: "Protección rigurosa para la participación de niños y jóvenes en actividades misioneras.",
      articles: [
        {
          number: 57,
          title: "Aplicación Incondicional de Salvaguardas Infantiles en Misiones",
          content: [
            "Cuando menores de edad participen en viajes misioneros juveniles o actividades de alcance, se aplicarán íntegramente las reglas de REN-DOC-014: Regla de Dos Adultos, supervisión continua y consentimiento parental.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 58,
          title: "Autorización y Consentimiento Parental Notariado",
          content: [
            "Todo menor que viaje en una misión nacional o internacional debe contar con el formulario REN-FORM-SAFE-006 debidamente firmado por ambos padres o tutores legales y notariado conforme a la ley [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-014"],
          requiresLegalReview: true,
        },
        {
          number: 59,
          title: "Alojamiento y Supervisión de Menores en Viajes",
          content: [
            "Las áreas de dormitorios para menores estarán estrictamente separadas por sexo biológico y supervisadas por líderes adultos capacitados. Se prohíbe que adultos compartan cama o habitaciones aisladas con menores que no sean sus propios hijos.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 60,
          title: "Protección de Imagen de Menores en Campo Misionero",
          content: [
            "Se prohíbe publicar en redes sociales fotografías de niños en situaciones de extrema vulnerabilidad, desnutrición o sin consentimiento parental expreso, evitando la explotación de la pobreza con fines promocionales.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-014"],
        },
      ],
    },
    {
      number: "16",
      romanNumeral: "XVI",
      title: "PLENA IGUALDAD MINISTERIAL DE LA MUJER EN LAS MISIONES",
      description: "Reconocimiento del liderazgo, ministerio y labor de las mujeres en el campo misionero.",
      articles: [
        {
          number: 61,
          title: "Principio de Igualdad Ministerial en la Misión",
          content: [
            "En conformidad con la Declaración de Fe (REN-DOC-001) y la Constitución (REN-DOC-002), las mujeres gozan de plena igualdad para ser llamadas, capacitadas, comisionadas y enviadas como misioneras, evangelistas, maestras, predicadoras, plantadoras de obras y líderes pastorales.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-006", "REN-DOC-010"],
        },
        {
          number: 62,
          title: "Prohibición de Restricciones Basadas Exclusivamente en Sexo",
          content: [
            "Queda terminantemente prohibido establecer barreras o discriminaciones en la asignación misionera, acceso a presupuestos, liderazgo de equipos o toma de decisiones ministeriales basadas en el sexo del servidor.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-011"],
        },
        {
          number: 63,
          title: "Cuidado y Salvaguardas Específicas para Misioneras",
          content: [
            "En contextos culturales hostiles hacia las mujeres, la iglesia adoptará medidas de seguridad adicionales para garantizar el transporte seguro, alojamiento digno y acompañamiento en equipo de las obreras misioneras.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 64,
          title: "Reconocimiento Histórico del Liderazgo Femenino en Misiones",
          content: [
            "RENACER honra el rol protagónico de las mujeres en la historia bíblica y eclesiástica de la evangelización mundial (Romanos 16; Filipenses 4:2-3), promoviendo activamente su vocación transcultural.",
          ],
        },
      ],
    },
    {
      number: "17",
      romanNumeral: "XVII",
      title: "RÉGIMEN FINANCIERO MISIONERO Y TITULARIDAD CORPORATIVA",
      description: "Administración, control interno y titularidad de fondos según REN-DOC-013.",
      articles: [
        {
          number: 65,
          title: "Titularidad Corporativa Exclusiva de Fondos Misioneros",
          content: [
            "Todo fondo, donación, ofrenda misionera o recurso económico recaudado para actividades evangelísticas o misioneras pertenece a la corporación eclesiástica RENACER CHURCH, INC. (DEC-DEF-008, REN-DOC-013).",
            "Queda terminantemente prohibido recaudar fondos misioneros en cuentas bancarias personales o aplicaciones privadas de líderes o misioneros.",
          ],
          dependencies: ["DEC-DEF-008", "REN-DOC-003", "REN-DOC-013"],
        },
        {
          number: 66,
          title: "Presupuesto Misionero Aprobado (REN-FORM-MIS-007)",
          content: [
            "Todo proyecto misionero operará con un presupuesto detallado (REN-FORM-MIS-007) aprobado por la Tesorería y el Consejo de Gobierno, que incluirá rubros de manutención, transporte, vivienda, insumos y contingencias.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 67,
          title: "Prohibición de Beneficio Privado y Lucro Personal",
          content: [
            "Los fondos misioneros no podrán ser desviados para enriquecimiento privado, negocios personales ni gastos no autorizados, en cumplimiento estricto del régimen de exención fiscal IRC § 501(c)(3) (DEC-DEF-011).",
          ],
          dependencies: ["DEC-DEF-011", "REN-DOC-013"],
        },
        {
          number: 68,
          title: "Cumplimiento en Transferencias Internacionales",
          content: [
            "Las remesas y transferencias internacionales de fondos misioneros se realizarán exclusivamente por canales bancarios oficiales y con apego a las regulaciones antiblanqueo y aduaneras vigentes [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "18",
      romanNumeral: "XVIII",
      title: "APOYO SOSTENIBLE, MANUTENCIÓN Y CUIDADO DEL MISIONERO",
      description: "Cobertura de necesidades vitales, vivienda, salud y bienestar familiar en campo.",
      articles: [
        {
          number: 69,
          title: "Compromiso de Sostén Integral y Manutención",
          content: [
            "RENACER reconoce el principio bíblico de que «digno es el obrero de su salario» (1 Timoteo 5:18). Todo misionero de tiempo completo enviado contará con un plan de manutención financiera razonable y digno.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 70,
          title: "Rubros Comprendidos en el Apoyo Misionero",
          content: [
            "El apoyo puede comprender: estipendio de sustento vital, cobertura de vivienda, seguro de salud, gastos de transporte ministerial, educación de los hijos en edad escolar y fondo de emergencias [PENDIENTE_DEFINIR montos específicos].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 71,
          title: "Rendición de Cuentas Periódica (REN-FORM-MIS-009)",
          content: [
            "El misionero presentará mensualmente la comprobación de gastos con sus recibos respectivos mediante el formulario REN-FORM-MIS-009 para asegurar la transparencia contable.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 72,
          title: "Ajustes por Inflación y Costo de Vida Local",
          content: [
            "La Comisión de Finanzas revisará periódicamente los montos asignados considerando las variaciones en el costo de vida y el tipo de cambio en el país de servicio.",
          ],
        },
      ],
    },
    {
      number: "19",
      romanNumeral: "XIX",
      title: "OFRENDAS MISIONERAS DESIGNADAS Y PROHIBICIÓN DE DESVÍO DE FONDOS",
      description: "Transparencia en la captación y destino de aportes específicos para la misión.",
      articles: [
        {
          number: 73,
          title: "Naturaleza Restringida de las Ofrendas Misioneras",
          content: [
            "Las ofrendas y donaciones recaudadas con la designación expresa de 'Misiones' o para un misionero específico constituyen fondos restringidos conforme a REN-DOC-013 y serán aplicadas exclusivamente a dicho fin.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 74,
          title: "Prohibición de Desvío a Gastos Operativos Generales",
          content: [
            "Se prohíbe utilizar las ofrendas misioneras para cubrir déficits del presupuesto operativo general de la iglesia local, salvo autorización expresa del donante en los casos permitidos por ley.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 75,
          title: "Recibos y Certificados de Donación",
          content: [
            "Todo aporte misionero será registrado contablemente y se emitirá el recibo institucional deducible de impuestos cuando corresponda bajo la normativa fiscal aplicable.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 76,
          title: "Informe Periódico a la Congregación",
          content: [
            "La administración presentará a la iglesia informes periódicos sobre el destino e impacto de los fondos misioneros recolectados [PENDIENTE_DEFINIR periodicidad formal de rendición pública].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "20",
      romanNumeral: "XX",
      title: "PLANTACIÓN, DISCIPULADO Y MULTIPLICACIÓN CELULAR ORGÁNICA",
      description: "Crecimiento saludable basado en el modelo celular y formación de líderes locales.",
      articles: [
        {
          number: 77,
          title: "El Modelo Celular como Motor de la Plantación",
          content: [
            "Toda nueva obra se estructurará a partir de Familias de Grupo en hogares, asegurando el pastoreo cercano, la comunión fraterna y el evangelismo vecinal (DEC-DEF-010).",
          ],
          dependencies: ["DEC-DEF-010", "REN-DOC-006"],
        },
        {
          number: 78,
          title: "Formación de Liderazgo Autóctono Local",
          content: [
            "El plantador priorizará la capacitación de creyentes locales a través de la Escuela de Líderes (REN-DOC-008), evitando la dependencia perpetua de obreros externos.",
          ],
          dependencies: ["REN-DOC-008"],
        },
        {
          number: 79,
          title: "Multiplicación Orgánica frente a Cuotas Artificiales",
          content: [
            "La multiplicación de células y ministerios debe ser el fruto natural del discipulado y la madurez espiritual, quedando prohibido imponer metas numéricas artificiales o presiones que comprometan la salud de los líderes.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 80,
          title: "Preservación de la Identidad y Sana Doctrina",
          content: [
            "Toda célula y obra plantada enseñará con fidelidad la Declaración de Fe (REN-DOC-001) y aplicará los principios éticos y de gobierno de RENACER bajo supervisión pastoral [PENDIENTE_DEFINIR frecuencia de visitas de supervisión doctrinal].",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-004"],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "21",
      romanNumeral: "XXI",
      title: "COOPERACIÓN INTERECLESIAL, ALIANZAS Y RELACIONES EXTERNAS",
      description: "Criterios para la colaboración con ministerios fraternos sin menoscabo de la autonomía.",
      articles: [
        {
          number: 81,
          title: "Apertura Fraternal a la Cooperación Misionera",
          content: [
            "RENACER podrá cooperar con otras iglesias locales bíblicas, redes misioneras y organizaciones humanitarias cristianas para proyectos específicos de evangelismo, ayuda comunitaria o traducción bíblica.",
          ],
        },
        {
          number: 82,
          title: "Innegociabilidad Doctrinal e Identidad",
          content: [
            "Ninguna alianza o acuerdo de cooperación implicará comprometer o alterar los principios fundamentales consagrados en la Declaración de Fe (REN-DOC-001).",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 83,
          title: "No Subordinación Jerárquica ni Cesión Patrimonial",
          content: [
            "La cooperación intereclesial no genera subordinación jurídica, no transfiere activos corporativos ni somete a RENACER a directivas de autoridades foráneas o concilios externos.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          number: 84,
          title: "Formalización de Acuerdos y Convenios",
          content: [
            "Todo convenio formal de cooperación intermisionera será aprobado por el Pastor Fundador y revisado por asesoría legal [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "22",
      romanNumeral: "XXII",
      title: "MISIONES HUMANITARIAS, ACCIÓN SOCIAL Y AYUDA COMUNITARIA",
      description: "Servicio al necesitado, socorro en desastres y no condicionamiento religioso.",
      articles: [
        {
          number: 85,
          title: "Compasión y Acción Social como Expresión del Evangelio",
          content: [
            "La iglesia desarrollará programas de ayuda alimentaria, ropa, útiles escolares, brigadas de salud y socorro en desastres naturales como manifestación del amor de Dios (Mateo 25:35-40).",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 86,
          title: "Prohibición de Condicionar la Ayuda a la Conversión",
          content: [
            "La asistencia humanitaria básica se brindará con respeto y dignidad a toda persona necesitada sin discriminación y sin condicionar la entrega de alimentos o medicinas a la conversión forzada o asistencia al culto.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 87,
          title: "Diferenciación entre Ayuda Social y Proclamación Evangelística",
          content: [
            "La acción social acompaña y testifica del Evangelio, pero no sustituye la proclamación explícita del mensaje redentor de la cruz de Cristo.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 88,
          title: "Transparencia en Donaciones y Materiales de Ayuda",
          content: [
            "Los bienes y víveres donados para misiones humanitarias serán inventariados y distribuidos con absoluta integridad y rendición de cuentas pública (REN-DOC-013).",
          ],
          dependencies: ["REN-DOC-013"],
        },
      ],
    },
    {
      number: "23",
      romanNumeral: "XXIII",
      title: "ÉTICA MISIONERA, INTEGRIDAD Y PREVENCIÓN DE MALAS PRÁCTICAS",
      description: "Normas de conducta, probidad y transparencia en el servicio transcultural.",
      articles: [
        {
          number: 89,
          title: "Conducta Ética Ejemplar del Misionero",
          content: [
            "Todo misionero y miembro de equipo mantendrá una conducta de santidad, honestidad, sobriedad y prudencia, absteniéndose de toda apariencia de mal (REN-DOC-011).",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 90,
          title: "Prohibición de Explotación de la Pobreza y Testimonios Falsos",
          content: [
            "Queda prohibido exagerar relatos de conversión, inventar milagros, manipular datos estadísticos de asistencia o utilizar imágenes degradantes para recaudar fondos.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 91,
          title: "Transparencia en el Uso de Bienes y Vehículos Misioneros",
          content: [
            "Los vehículos, equipos y bienes provistos para la misión se utilizarán estrictamente para el cumplimiento de los objetivos ministeriales aprobados.",
          ],
          dependencies: ["REN-DOC-013"],
        },
        {
          number: 92,
          title: "Sanciones Disciplinarias por Infracciones Éticas",
          content: [
            "Cualquier falta ética grave, apropiación indebida de fondos o transgresión de salvaguardas dará lugar a la revocación inmediata de la comisión misionera y al proceso disciplinario bajo REN-DOC-005.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
      ],
    },
    {
      number: "24",
      romanNumeral: "XXIV",
      title: "CONTEXTUALIZACIÓN CULTURAL Y RESPETO AL ENTORNO LOCAL",
      description: "Sensibilidad transcultural sin sincretismo doctrinal ni transgresión bíblica.",
      articles: [
        {
          number: 93,
          title: "Principio de Sensibilidad y Respeto Cultural",
          content: [
            "Los misioneros respetarán las costumbres legítimas, idiomas, vestimentas y tradiciones de las comunidades receptoras, siguiendo el ejemplo apostólico de hacerse «todo a todos» para ganar a algunos (1 Corintios 9:22).",
          ],
        },
        {
          number: 94,
          title: "Prohibición de Sincretismo Religioso",
          content: [
            "La contextualización cultural jamás justificará mezclar el Evangelio con prácticas ocultistas, idolatría, espiritismo, animismo o doctrinas contrarias a las Escrituras (REN-DOC-001).",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 95,
          title: "Humildad y Ausencia de Etnocentrismo",
          content: [
            "Los misioneros servirán con actitud de aprendices y siervos, evitando actitudes de superioridad cultural o imposición de modelos ajenos a la realidad local.",
          ],
        },
        {
          number: 96,
          title: "Adaptación del Lenguaje y Materiales Educativos",
          content: [
            "Los materiales de discipulado y enseñanza bíblica serán traducidos o adaptados con fidelidad terminológica y pertinencia pedagógica para la audiencia local.",
          ],
          dependencies: ["REN-DOC-007", "REN-DOC-009"],
        },
      ],
    },
    {
      number: "25",
      romanNumeral: "XXV",
      title: "EXPEDIENTES MISIONEROS, CUSTODIA Y ARCHIVO DOCUMENTAL",
      description: "Organización y preservación de la memoria histórica misionera según REN-DOC-019.",
      articles: [
        {
          number: 97,
          title: "Conformación del Expediente Misionero Individual",
          content: [
            "La Dirección de Misiones abrirá un expediente formal por cada misionero que contendrá su solicitud, evaluaciones, resoluciones de envío, reportes de campo y evaluaciones finales.",
          ],
          dependencies: ["REN-DOC-019"],
        },
        {
          number: 98,
          title: "Respaldo Digital Seguro y Cifrado",
          content: [
            "Todos los expedientes físicos serán digitalizados y archivados bajo medidas de seguridad digital y control de accesos por roles (RBAC).",
          ],
          dependencies: ["REN-DOC-014", "REN-DOC-019"],
        },
        {
          number: 99,
          title: "Confidencialidad de Datos Sensibles",
          content: [
            "Los informes médicos, psicológicos, pasaportes y datos de ubicación en zonas restringidas tendrán carácter de archivo reservado confidencial.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 100,
          title: "Plazos de Conservación y Archivo Permanente",
          content: [
            "Los registros históricos de plantación de obras y actas de comisionamiento se conservarán permanentemente en el Archivo General de RENACER (REN-DOC-019) [PENDIENTE_DEFINIR plazos específicos de expedientes transitorios].",
          ],
          dependencies: ["REN-DOC-019"],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "26",
      romanNumeral: "XXVI",
      title: "REPORTES MISIONEROS Y SISTEMA DE EVALUACIÓN DE IMPACTO",
      description: "Monitoreo, indicadores de fruto espiritual y evaluación continua de proyectos.",
      articles: [
        {
          number: 101,
          title: "Tipos de Reportes Misioneros Obligatorios",
          content: [
            "El sistema contempla: a) Reporte Previo de Planificación (REN-FORM-MIS-003); b) Reporte de Campo (REN-FORM-MIS-008); c) Reporte Financiero (REN-FORM-MIS-009); d) Reporte de Incidente (REN-FORM-MIS-010); y e) Evaluación Final de Cierre (REN-FORM-MIS-011).",
          ],
        },
        {
          number: 102,
          title: "Indicadores de Salud y Fruto Espiritual",
          content: [
            "La evaluación considerará: personas alcanzadas, nuevos bautismos, asistencia regular a células, líderes capacitados en la Escuela de Discípulos, estabilidad doctrinal y testimonio comunitario.",
          ],
          dependencies: ["REN-DOC-007", "REN-DOC-008"],
        },
        {
          number: 103,
          title: "Evaluación Anual del Plan Maestro Misionero",
          content: [
            "La Dirección de Misiones presentará anualmente al Pastor Fundador y al Consejo un balance consolidado de los avances misioneros y la proyección de nuevas metas.",
          ],
        },
        {
          number: 104,
          title: "Transparencia y Edificación Congregacional",
          content: [
            "Los testimonios y frutos verificados en campo serán compartidos con la congregación para motivar la gratitud a Dios y el compromiso con la Gran Comisión.",
          ],
        },
      ],
    },
    {
      number: "27",
      romanNumeral: "XXVII",
      title: "RETORNO, DEBRIEFING, DESCANSO Y REINTEGRACIÓN DEL MISIONERO",
      description: "Cuidado pastoral post-misión, salud emocional y transición a nuevas asignaciones.",
      articles: [
        {
          number: 105,
          title: "Protocolo de Retorno y Cuidado Pastoral (REN-FORM-MIS-012)",
          content: [
            "Al término de su asignación o período en campo, el misionero será recibido con honra por la congregación y completará el proceso de debriefing y cuidado pastoral (REN-FORM-MIS-012).",
          ],
        },
        {
          number: 106,
          title: "Período de Descanso Ministerial (Furlough / Sabático Transitorio)",
          content: [
            "Se garantizará un tiempo adecuado de descanso, renovación física y espiritual, y atención médica y familiar antes de cualquier nueva asignación eclesiástica [PENDIENTE_DEFINIR duración estándar].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 107,
          title: "Reintegración a la Vida Congregacional o Reasignación",
          content: [
            "El cuerpo pastoral orientará la reinserción del misionero en labores locales de docencia, liderazgo o mentoría, o evaluará su postulación a un nuevo destino misionero.",
          ],
          dependencies: ["REN-DOC-006"],
        },
        {
          number: 108,
          title: "El Retorno no Implica Fracaso Ministerial",
          content: [
            "La finalización o repliegue de una misión por motivos de salud, seguridad o cumplimiento de ciclo no será juzgada como fracaso espiritual, sino como una etapa pastoral concluida con gratitud.",
          ],
        },
      ],
    },
    {
      number: "28",
      romanNumeral: "XXVIII",
      title: "GESTIÓN DE CRISIS, EMERGENCIAS Y EVACUACIÓN EN CAMPO MISIONERO",
      description: "Protocolos de contingencia ante desastres, enfermedades graves, detenciones o conflictos.",
      articles: [
        {
          number: 109,
          title: "Prioridad Absoluta de la Vida y Seguridad en Situaciones de Crisis",
          content: [
            "Ante situaciones de amenaza inminente, conflicto civil, desastre natural o emergencia médica grave, la protección de la vida humana prevalece sobre cualquier meta operativa o inmueble misionero.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 110,
          title: "Comité de Crisis y Evacuación de Emergencia",
          content: [
            "Se activará de inmediato el Comité de Crisis encabezado por el Pastor Fundador y el Oficial de Seguridad para coordinar la evacuación, repatriación y asistencia legal o diplomática requerida.",
          ],
          dependencies: ["REN-DOC-014"],
        },
        {
          number: 111,
          title: "Fondo de Reserva de Emergencia Misionera",
          content: [
            "La corporación mantendrá una reserva económica de liquidez inmediata destinada con exclusividad a sufragar gastos de evacuación, hospitalización o rescate en emergencias [PENDIENTE_DEFINIR monto de reserva].",
          ],
          dependencies: ["REN-DOC-013"],
          isPendingDefinition: true,
        },
        {
          number: 112,
          title: "Cooperación con Embajadas y Autoridades Consulares",
          content: [
            "En misiones internacionales se mantendrá contacto con las representaciones diplomáticas correspondientes para el registro de ciudadanos y solicitud de auxilio consular en caso de catástrofes.",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "29",
      romanNumeral: "XXIX",
      title: "MARCO MIGRATORIO, VISADOS Y DESLINDE DE RESPONSABILIDADES CIVILES",
      description: "Cumplimiento estricto de normativas migratorias y deslinde de promesas legales.",
      articles: [
        {
          number: 113,
          title: "Verificación Rigurosa de Requisitos Migratorios",
          content: [
            "Toda persona que viaje o sirva en misiones internacionales debe contar con pasaporte válido, visado legal correspondiente y cumplir las leyes de extranjería del país de destino [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 114,
          title: "Prohibición de Promesas o Gestiones Migratorias Fraudulentas",
          content: [
            "La iglesia no ofrece, promete ni garantiza visas de residencia, estatus R-1 ni permisos laborales como incentivo para el servicio misionero.",
            "Queda terminantemente prohibido utilizar cartas ministeriales o documentación eclesiástica para formular declaraciones falsas ante autoridades consulares o migratorias.",
          ],
          dependencies: ["REN-DOC-011"],
          requiresLegalReview: true,
        },
        {
          number: 115,
          title: "Asesoría Legal Especializada en Inmigración",
          content: [
            "Cualquier trámite de visado religioso para ministros foráneos requerirá el patrocinio formal de abogados de inmigración licenciados en Estados Unidos [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 116,
          title: "Coordinación Conceptual con Futuros Reglamentos Migratorios",
          content: [
            "Las directrices migratorias se armonizarán con los reglamentos específicos correspondientes (REN-DOC-018) una vez sean redactados formalmente.",
          ],
        },
      ],
    },
    {
      number: "30",
      romanNumeral: "XXX",
      title: "ARTICULACIÓN CON CREDENCIALES MINISTERIALES Y FORMACIÓN TEOLÓGICA",
      description: "Conexión con REN-DOC-009 y REN-DOC-010 sin sustitución de sus competencias.",
      articles: [
        {
          number: 117,
          title: "Articulación con el Seminario Bíblico RENACER (REN-DOC-009)",
          content: [
            "Los candidatos a misiones de largo plazo cursarán materias de Misionología, Hermenéutica, Teología Pastoral y Evangelismo en el Seminario Bíblico RENACER para consolidar su preparación bíblica.",
          ],
          dependencies: ["REN-DOC-009"],
        },
        {
          number: 118,
          title: "No Sustitución del Reglamento de Credenciales (REN-DOC-010)",
          content: [
            "El presente manual no confiere licencias ni ordenaciones ministeriales. Cualquier acreditación eclesiástica se tramitará estrictamente bajo el Reglamento REN-DOC-010.",
          ],
          dependencies: ["REN-DOC-010"],
        },
        {
          number: 119,
          title: "Homologación Formativa para Misioneros en Ejercicio",
          content: [
            "La experiencia práctica y el fruto ministerial comprobado en campo misionero podrán ser considerados como créditos de práctica ministerial en los programas académicos del Seminario.",
          ],
          dependencies: ["REN-DOC-009"],
        },
        {
          number: 120,
          title: "Cuidado Doctrinal en la Enseñanza Impartida",
          content: [
            "Todo misionero enseñará exclusivamente el cuerpo doctrinal oficial de RENACER (REN-DOC-001), evitando introducir doctrinas extrañas o herejías en las obras nacientes.",
          ],
          dependencies: ["REN-DOC-001"],
        },
      ],
    },
    {
      number: "31",
      romanNumeral: "XXXI",
      title: "CATÁLOGO OFICIAL DE FORMULARIOS MISIONEROS Y DOCUMENTACIÓN",
      description: "Padrón normativo de los doce formularios de gestión misionera.",
      articles: [
        {
          number: 121,
          title: "Catálogo Oficial de la Serie REN-FORM-MIS-001 a 012",
          content: [
            "Se formaliza el catálogo oficial de doce formularios misioneros: REN-FORM-MIS-001 (Solicitud), 002 (Evaluación de Candidato), 003 (Plan Misionero), 004 (Evaluación de Riesgo), 005 (Autorización de Envío), 006 (Acta de Comisionamiento), 007 (Presupuesto Misionero), 008 (Reporte de Campo), 009 (Reporte Financiero), 010 (Reporte de Incidente), 011 (Evaluación Final) y 012 (Registro de Retorno y Reintegración).",
          ],
        },
        {
          number: 122,
          title: "Estandarización y Uso Obligatorio",
          content: [
            "Queda prohibido el uso de formatos informales para tramitar autorizaciones de viaje, presupuestos misioneros o actas de envío.",
          ],
        },
        {
          number: 123,
          title: "Custodia y Archivo en la Secretaría de Misiones",
          content: [
            "Los formularios físicos y digitales se conservarán bajo custodia de la Secretaría de Misiones en coordinación con el Archivo General (REN-DOC-019).",
          ],
          dependencies: ["REN-DOC-019"],
        },
        {
          number: 124,
          title: "Desarrollo y Actualización Futura de Formatos",
          content: [
            "El desarrollo detallado de los formularios se completará en fases posteriores sin alterar la nomenclatura ni los propósitos normativos aquí establecidos.",
          ],
        },
      ],
    },
    {
      number: "32",
      romanNumeral: "XXXII",
      title: "CLÁUSULA DE NO ADOPCIÓN, REVISIÓN PERIÓDICA Y DISPOSICIONES FINALES",
      description: "Estado de borrador v0.1, supremacía estatutaria y vigencia.",
      articles: [
        {
          number: 125,
          title: "Cláusula Formal de No Adopción y Estado de Borrador (v0.1)",
          content: [
            "El presente Manual Oficial de Misiones, Evangelismo y Expansión (REN-DOC-015) se expide formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION.",
            "Su adopción eclesiástica final requerirá la ratificación solemne del Pastor Fundador y la revisión de sus componentes jurídicos.",
          ],
        },
        {
          number: 126,
          title: "Revisión Anual y Actualización de Estrategias",
          content: [
            "La Dirección de Misiones revisará anualmente este manual para incorporar mejoras estratégicas y responder a nuevos desafíos misioneros globales.",
          ],
        },
        {
          number: 127,
          title: "Supremacía Constitucional y Estatutaria",
          content: [
            "En caso de discrepancia entre este Manual y las disposiciones de la Constitución (REN-DOC-002) o los Bylaws (REN-DOC-003), prevalecerán en todo momento estos últimos.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          number: 128,
          title: "Entrada en Vigencia Institucional",
          content: [
            "Una vez adoptado formalmente, este manual regirá con fuerza obligatoria en todas las congregaciones, ministerios, células y campos misioneros de RENACER CHURCH, INC.",
          ],
        },
      ],
    },
  ],
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-015
 */
export function generateFullMissionsManualMarkdown(): string {
  const d = MISSIONS_MANUAL_DRAFT;

  let md = `# ${d.documentNumber} — ${d.title}\n\n`;
  md += `**Código:** ${d.documentNumber} | **Versión:** ${d.version} | **Nivel:** ${d.hierarchyLevel}\n`;
  md += `**Categoría:** ${d.category} | **Subcategoría:** ${d.subcategory}\n`;
  md += `**DocumentState:** ${d.documentState} | **DecisionState:** ${d.decisionState} | **Adoption:** ${d.adoptionState}\n`;
  md += `**LegalState:** ${d.legalState} | **Área Responsable:** ${d.responsibleArea}\n`;
  md += `**Autor:** ${d.author} | **Autoridad de Aprobación:** ${d.approvalAuthority}\n\n`;
  md += `> [!IMPORTANT]\n`;
  md += `> **BORRADOR — NO ADOPTADO**\n`;
  md += `> **REQUIERE REVISIÓN LEGAL**\n`;
  md += `> El presente manual no constituye asesoramiento jurídico o migratorio ni reemplaza las leyes vigentes en las distintas jurisdicciones nacionales e internacionales.\n\n`;

  md += `## RESUMEN EJECUTIVO\n\n${d.pithySummary}\n\n`;

  md += `## PREÁMBULO TEOLÓGICO Y PASTORAL\n\n${d.preamble}\n\n`;

  md += `## PRINCIPIO INSTITUCIONAL FUNDAMENTAL\n\n`;
  md += `La Iglesia de Jesucristo existe para cumplir la Gran Comisión proclamando el Evangelio a toda criatura y formando discípulos en todas las naciones (Mateo 28:19-20; Marcos 16:15). Toda expansión territorial, plantación de obras y envío misionero de RENACER debe sustentarse en la fidelidad doctrinal, el carácter piadoso, la integridad ética, la protección incondicional de las personas y la sostenibilidad financiera, sin comprometer jamás las salvaguardas eclesiásticas ni convertir la obra en una denominación burocrática.\n\n`;

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
  md += `## CATÁLOGO OFICIAL DE FORMULARIOS MISIONEROS Y DE EXPANSIÓN\n\n`;
  md += `Se establece el siguiente padrón oficial de doce (12) formularios para la operatividad de REN-DOC-015:\n\n`;
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
    md += `- \`${dec}\`: Vinculada en las disposiciones de misión, gobierno, discipulado, finanzas, ética y salvaguardas.\n`;
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
