/**
 * REN-DOC-012 — MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER
 *
 * DOCUMENTO MAESTRO INSTITUCIONAL
 * Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: CEREMONIAS_Y_ORDENANZAS
 * Estado Documental: EN_REDACCION (Borrador institucional — No adoptado)
 * Estado Legal: REQUIERE_REVISION_LEGAL
 * Estado de Decisión: DEFINIDA
 *
 * Este manual establece las directrices prácticas, litúrgicas, pastorales, administrativas,
 * de seguridad y registro para la celebración de las Ordenanzas Bíblicas (Bautismo y Santa Cena)
 * y los Actos Litúrgicos/Pastorales (Matrimonios, Presentación de Niños, Funerales, Oración por
 * Enfermos, Unción, Imposición de Manos, Licenciamiento, Ordenación, Dedicación y Envíos).
 */

export interface CeremonyArticle {
  number: number;
  title: string;
  content: string;
  decisionRefs: string[];
  requiresLegalReview: boolean;
  isPendingDefinition?: boolean;
}

export interface CeremonyTitleSection {
  titleNumber: string;
  titleName: string;
  summary: string;
  articles: CeremonyArticle[];
  decisions: string[];
  superiorDocRefs: string[];
  requiresLegalReview: boolean;
}

export interface CeremonyFormItem {
  code: string;
  name: string;
  purpose: string;
  frequencyOrTrigger: string;
  custodyDoc: string;
  status: "ESTABLECIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";
}

export const CEREMONIES_MANUAL_DRAFT = {
  documentId: "doc-ren-012",
  documentNumber: "REN-DOC-012",
  title: "MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER",
  shortTitle: "Manual de Ceremonias y Liturgia",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "CEREMONIAS_Y_ORDENANZAS",
  subcategory: "Liturgia, Ordenanzas Bíblicas y Actos Pastorales",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalStatus: "REQUIERE_REVISION_LEGAL",
  decisionState: "DEFINIDA",
  version: "0.1",
  owner: "Pastor Fundador / Consejo Ministerial",
  author: "Pastor Fundador / Consejo Ministerial",
  responsibleArea: "Consejo Ministerial y Pastoral",
  confidentiality: "INTERNO_CONGREGACION",
  bannerWarning: "BORRADOR — NO ADOPTADO / REQUIERE REVISIÓN LEGAL",
  description:
    "Manual operativo que norma la preparación, desarrollo litúrgico, elementos, lenguaje pastoral, seguridad física y registro eclesiástico de las ordenanzas bíblicas (Bautismo en agua y Santa Cena) y actos pastorales solemnes de RENACER CHURCH, distinguiendo taxativamente el rito sagrado de los efectos legales civiles.",
};

export const CEREMONIES_FORMS_CATALOG: CeremonyFormItem[] = [
  {
    code: "REN-FORM-CER-001",
    name: "Solicitud y Registro de Candidatura para Bautismo en Agua",
    purpose: "Inscripción del creyente, verificación de profesión de fe y aprobación de instrucción básica de discipulado.",
    frequencyOrTrigger: "Previo a cada servicio bautismal",
    custodyDoc: "REN-DOC-019 / REN-DOC-005",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-002",
    name: "Acta Notarial Eclesiástica y Certificado de Bautismo en Agua",
    purpose: "Certificación formal del bautismo por inmersión suscrito por el ministro oficiante y el bautizado.",
    frequencyOrTrigger: "Inmediato a la celebración del bautismo",
    custodyDoc: "REN-DOC-019 (Libro de Bautismos)",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-003",
    name: "Registro Litúrgico de Celebración de la Santa Cena del Señor",
    purpose: "Constancia de fecha, ministros participantes, preparación de elementos y asistencia estimada.",
    frequencyOrTrigger: "En cada celebración de la Santa Cena [PENDIENTE_DEFINIR]",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-004",
    name: "Solicitud Familiar para Presentación y Dedicación de Niños",
    purpose: "Petición pastoral de padres o tutores legales y compromiso de crianza en el temor del Señor.",
    frequencyOrTrigger: "A solicitud de la familia",
    custodyDoc: "REN-DOC-019 / REN-DOC-016",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-005",
    name: "Acta Pastoral y Certificado de Presentación de Niños",
    purpose: "Constancia eclesiástica de la dedicación y bendición del infante ante la congregación.",
    frequencyOrTrigger: "En el acto de dedicación",
    custodyDoc: "REN-DOC-019 (Libro de Presentaciones)",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-006",
    name: "Solicitud de Oficiatura de Ceremonia Matrimonial Cristiana",
    purpose: "Petición de enlace matrimonial religioso, verificación de consejería prematrimonial y licencias civiles.",
    frequencyOrTrigger: "Previo a la boda religiosa",
    custodyDoc: "REN-DOC-019 / REN-DOC-010",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-007",
    name: "Acta y Registro Eclesiástico de Ceremonia Matrimonial",
    purpose: "Constancia formal del matrimonio religioso celebrado en la iglesia conforme a la doctrina bíblica.",
    frequencyOrTrigger: "Inmediato a los votos conyugales",
    custodyDoc: "REN-DOC-019 (Libro de Matrimonios)",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-008",
    name: "Solicitud y Coordinación de Servicio Funeral o Memorial",
    purpose: "Acuerdo pastoral y logístico con la familia para el acompañamiento en el duelo y servicio conmemorativo.",
    frequencyOrTrigger: "Ante fallecimiento",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-009",
    name: "Registro Pastoral de Unción con Aceite y Oración por Enfermos",
    purpose: "Constancia interna de visitas pastorales domiciliarias o en centros asistenciales según Santiago 5.",
    frequencyOrTrigger: "Por evento pastoral asistido",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-010",
    name: "Acta Solemne de Ceremonia de Licenciamiento Ministerial",
    purpose: "Constancia litúrgica de la entrega de licencia ministerial pública conforme a REN-DOC-010.",
    frequencyOrTrigger: "En servicio solemne de licenciamiento",
    custodyDoc: "REN-DOC-019 / REN-DOC-010",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-011",
    name: "Acta Notarial Eclesiástica de Imposición de Manos y Ordenación",
    purpose: "Documento solemne presbiterial suscrito por el Pastor Fundador y presbiterio ordenante.",
    frequencyOrTrigger: "En servicio solemne de ordenación",
    custodyDoc: "REN-DOC-019 / REN-DOC-010",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-CER-012",
    name: "Acta Litúrgica de Envío Misionero y Comisionamiento Pastoral",
    purpose: "Certificación eclesial de la unción, envío y bendición de misioneros, plantadores o líderes comisionados.",
    frequencyOrTrigger: "En culto de comisionamiento",
    custodyDoc: "REN-DOC-019 / REN-DOC-006",
    status: "PROPUESTO",
  },
];

export const CEREMONIES_TITLES_DATA: CeremonyTitleSection[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, PROPÓSITO, ALCANCE Y PRINCIPIO DE EDIFICACIÓN",
    summary: "Establece la naturaleza práctica y operativa de este manual, fundamentado en la edificación del cuerpo de Cristo y decencia litúrgica.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-003", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004"],
    requiresLegalReview: false,
    articles: [
      {
        number: 1,
        title: "Naturaleza Institucional y Alcance Litúrgico",
        content:
          "El presente Manual Oficial de Ceremonias, Ordenanzas y Actos Litúrgicos (REN-DOC-012) constituye la guía oficial para los ministros ordenados, ministros licenciados, pastores y líderes autorizados de RENACER CHURCH. No redefine ni crea doctrina nueva, sino que operativiza las enseñanzas consagradas en la Declaración de Fe (REN-DOC-001) para la conducción ordenada, reverente y bíblica de todos los actos sagrados.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
      {
        number: 2,
        title: "Principio Rector de Edificación, Orden y Decencia",
        content:
          "Toda liturgia y ceremonia eclesiástica en RENACER se realiza bajo el mandamiento apostólico de 'hágase todo decentemente y con orden' (1 Corintios 14:40) y 'hágase todo para edificación' (1 Corintios 14:26), procurando glorificar a Dios, bendecir a los creyentes y dar testimonio transparente a la sociedad.",
        decisionRefs: ["DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "DISTINCIÓN TAXATIVA ENTRE ORDENANZAS Y ACTOS LITÚRGICOS",
    summary: "Distingue estrictamente las 2 ordenanzas bíblicas de los actos litúrgicos pastorales, prohibiendo denominar sacramento a todo rito.",
    decisions: ["DEC-DEF-003", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-001"],
    requiresLegalReview: false,
    articles: [
      {
        number: 3,
        title: "Las Dos Ordenanzas Bíblicas Instituidas por Jesucristo",
        content:
          "RENACER reconoce únicamente dos (2) Ordenanzas Bíblicas instituidas directamente por el Señor Jesucristo para la Iglesia: (a) El Bautismo en Agua por Inmersión (Mateo 28:19); y (b) La Santa Cena del Señor (1 Corintios 11:23-26). Ningún otro acto posee rango de ordenanza fundamental.",
        decisionRefs: ["DEC-DEF-003", "DEC-DEF-005"],
        requiresLegalReview: false,
      },
      {
        number: 4,
        title: "Clasificación de los Actos Litúrgicos y Pastorales",
        content:
          "Los restantes actos solemnes (matrimonios, dedicación de niños, funerales, unción de enfermos, imposición de manos, licenciamientos, ordenaciones, recepciones y envíos) se clasifican como Actos Litúrgicos y Pastorales de bendición, mayordomía y comisión, rechazándose cualquier pretensión sacramentalista mágica.",
        decisionRefs: ["DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "AUTORIDAD MINISTERIAL Y COMPETENCIAS LITÚRGICAS",
    summary: "Define las facultades litúrgicas del Pastor Fundador, ministros ordenados, ministros licenciados y líderes comisionados.",
    decisions: ["DEC-DEF-001", "DEC-DEF-004", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 5,
        title: "Facultades de Oficiatura según Credencial Ministerial",
        content:
          "El Pastor Fundador y los Ministros Ordenados poseen facultades plenas para oficiar todas las ordenanzas y ceremonias litúrgicas institucionales. Los Ministros Licenciados pueden oficiar bautismos, Santa Cena, presentaciones, funerales y actos autorizados bajo delegación pastoral expresa, reservándose las ordenaciones solemnes al presbiterio competente conforme a REN-DOC-010.",
        decisionRefs: ["DEC-DEF-004", "DEC-DEF-005"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "PREPARACIÓN GENERAL Y LOGÍSTICA DE CEREMONIAS",
    summary: "Regula la planificación anticipada, coordinación de servidores, limpieza, plataformas y ensayo litúrgico.",
    decisions: ["DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 6,
        title: "Planificación Previa y Coordinación de Equipos",
        content:
          "Toda ceremonia formal requiere coordinación anticipada entre el ministro oficiante, el equipo de alabanza, ujieres, multimedia y secretaría, garantizando la debida reverencia, disponibilidad de elementos y formularios institucionales.",
        decisionRefs: ["DEC-DEF-002"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "ORDENANZA DEL BAUTISMO EN AGUA",
    summary: "Norma el bautismo de creyentes por inmersión total en el Nombre del Padre, del Hijo y del Espíritu Santo; prohíbe el bautismo de infantes.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-007"],
    requiresLegalReview: false,
    articles: [
      {
        number: 7,
        title: "Requisitos de Fé, Modo Bíblico y Fórmula Bautismal",
        content:
          "El bautismo en agua se administra exclusivamente a personas que hayan profesado públicamente su fe personal en Jesucristo y completado la preparación básica (REN-FORM-CER-001). Se realiza mediante inmersión completa en agua, utilizando la fórmula trinitaria instituida por Cristo en Mateo 28:19: 'En el Nombre del Padre, y del Hijo, y del Espíritu Santo'. Queda excluido el bautismo de infantes o personas sin uso de razón.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
      {
        number: 8,
        title: "Protocolo del Acto Bautismal y Emisión de Acta",
        content:
          "El ministro oficiante descenderá al agua con el candidato, formulará las preguntas de fe, sumergirá al creyente e inmediatamente elevará una oración de consagración. Al salir del bautisterio se suscribirá el Acta Notarial Eclesiástica (REN-FORM-CER-002) para su archivo en REN-DOC-019.",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "ORDENANZA DE LA SANTA CENA DEL SEÑOR",
    summary: "Regula la cena como memorial y comunión espiritual; elementos de pan y fruto de la vid; participación de creyentes bautizados.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005"],
    requiresLegalReview: false,
    articles: [
      {
        number: 9,
        title: "Significado Teológico de Memorial y Comunión Espiritual",
        content:
          "Conforme a REN-DOC-001, los elementos del pan y del fruto de la vid son símbolos conmemorativos del cuerpo y la sangre de Cristo entregados en la cruz (1 Corintios 11:23-26). Se rechaza expresamente la doctrina de la transustanciación o transformación física de los elementos, afirmando la presencia espiritual de Cristo en medio de su pueblo en comunión.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
      {
        number: 10,
        title: "Orden del Servicio, Autoexamen y Distribución",
        content:
          "El servicio incluye lectura bíblica obligatoria, exhortación al autoexamen de conciencia (1 Corintios 11:28), oración de gratitud por el pan, distribución ordenada a creyentes bautizados en plena comunión, oración por la copa, consumo simultáneo y cántico final de alabanza. La periodicidad se mantiene [PENDIENTE_DEFINIR].",
        decisionRefs: ["DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "PRESENTACIÓN Y DEDICACIÓN PASTORAL DE NIÑOS",
    summary: "Acto pastoral de oración y consagración de infantes basado en el ejemplo de Jesús; no confiere regeneración bautismal.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-016"],
    requiresLegalReview: true,
    articles: [
      {
        number: 11,
        title: "Naturaleza de la Dedicación y Consentimiento Parental",
        content:
          "La presentación de niños es un acto de bendición pastoral, gratitud a Dios y compromiso moral de los padres para educar al hijo en la fe cristiana (Lucas 2:22; Marcos 10:13-16). No constituye bautismo, no confiere regeneración espiritual ni borra el pecado original. Requiere solicitud formal de los padres o tutores legales (REN-FORM-CER-004) y emisión del certificado REN-FORM-CER-005.",
        decisionRefs: ["DEC-DEF-003", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "CEREMONIA DE MATRIMONIO CRISTIANO",
    summary: "Consagración de la unión conyugal entre un hombre y una mujer; distingue acto religioso de requisitos legales civiles de New Jersey.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 12,
        title: "Definición Doctrinal del Matrimonio Religioso",
        content:
          "En estricta fidelidad a REN-DOC-001, RENACER reconoce y bendice el matrimonio como el pacto sagrado y exclusivo de por vida entre un hombre biológico y una mujer biológica instituido por Dios (Génesis 2:24; Mateo 19:4-6). La iglesia no celebra ni oficia uniones matrimoniales entre personas del mismo sexo ni contrarias a la doctrina bíblica.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
      {
        number: 13,
        title: "Distinción entre Acto Sagrado y Licencia Matrimonial Civil",
        content:
          "Los contrayentes deben presentar con antelación la Licencia Matrimonial Civil emitida por la autoridad municipal competente del Estado de New Jersey [REQUIERE_REVISION_LEGAL]. La ceremonia religiosa incluye consejería prematrimonial obligatoria, profesión mutua de votos, entrega de anillos opcional, bendición pastoral y firma simultánea del registro civil y del Acta Eclesiástica (REN-FORM-CER-007).",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "SERVICIOS FUNERARIOS Y MEMORIALES DE CONSUELO",
    summary: "Guía pastoral de acompañamiento en el duelo, proclamación de la resurrección y respeto ante el dolor de las familias.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 14,
        title: "Propósito Consolador y Proclamación de Esperanza",
        content:
          "El servicio fúnebre o memorial tiene como fin honrar a Dios, consolar a los deudos con la esperanza de la resurrección en Cristo (1 Tesalonicenses 4:13-18) y proclamar el Evangelio a los asistentes. El ministro se abstendrá de emitir juicios tajantes sobre el destino eterno particular del fallecido, centrando el mensaje en la gracia divina y el llamado a la salvación.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "ORACIÓN POR LOS ENFERMOS Y MINISTRACIÓN DE SANIDAD",
    summary: "Oración de fe bíblica; prohíbe culpar al enfermo, prometer milagros mágicos o inducir a suspender tratamientos médicos.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-006", "REN-DOC-011"],
    requiresLegalReview: true,
    articles: [
      {
        number: 15,
        title: "Oración Bíblica de Fe y Mayordomía Médica",
        content:
          "La iglesia cree en el poder soberano de Dios para sanar a los enfermos en respuesta a la oración de fe. Al orar por enfermos, los ministros no culparán al enfermo por falta de fe ni garantizarán resultados milagrosos automáticos. Queda estrictamente prohibido inducir a los enfermos a abandonar terapias médicas o farmacológicas legítimas.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "UNCIÓN CON ACEITE Y MINISTRACIÓN PASTORAL",
    summary: "Procedimiento de unción según Santiago 5:14-15; define el aceite como símbolo del Espíritu Santo sin atributos mágicos.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 16,
        title: "Rito Bíblico de la Unción Pastoral",
        content:
          "A solicitud del creyente enfermo, los pastores y presbíteros acudirán para orar y ungirle con aceite puro de oliva en el Nombre del Señor (Santiago 5:14-15). El aceite se reconoce como símbolo de la consagración y la gracia del Espíritu Santo, sin conferirle poderes mágicos ni supersticiosos.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "IMPOSICIÓN DE MANOS Y ORACIÓN MINISTERIAL",
    summary: "Norma el uso reverente y consensuado de la imposición de manos; prohíbe contactos físicos invasivos o manipulaciones.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-011", "REN-DOC-016"],
    requiresLegalReview: true,
    articles: [
      {
        number: 17,
        title: "Límites Físicos y Salvaguardas en la Imposición de Manos",
        content:
          "La imposición de manos se realiza de manera decorosa sobre la cabeza o los hombros de la persona, requiriendo consentimiento tácito o expreso. Se prohíbe cualquier toque invasivo, empujones físicos forzados o manipulación indebida. En el caso de menores rige de forma estricta la presencia visible de sus padres y la regla de dos adultos.",
        decisionRefs: ["DEC-DEF-003", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIII",
    titleName: "LITURGIA DE LICENCIAMIENTO MINISTERIAL",
    summary: "Ceremonia de reconocimiento institucional público para Ministros Licenciados según REN-DOC-010.",
    decisions: ["DEC-DEF-001", "DEC-DEF-004", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 18,
        title: "Convocatoria y Entrega Pública de Licencia",
        content:
          "Tras la aprobación del expediente y examen conforme a REN-DOC-010, el candidato a Ministro Licenciado es presentado ante la congregación, donde suscribe los votos ministeriales de obediencia a la Palabra, recibe la oración pastoral y el Acta de Licenciamiento (REN-FORM-CER-010).",
        decisionRefs: ["DEC-DEF-004", "DEC-DEF-005"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIV",
    titleName: "CEREMONIA SOLEMNE DE ORDENACIÓN MINISTERIAL",
    summary: "Liturgia presbiterial de imposición de manos para Ministros Ordenados y firma del Acta Notarial Eclesiástica.",
    decisions: ["DEC-DEF-001", "DEC-DEF-004", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-010", "REN-DOC-019"],
    requiresLegalReview: false,
    articles: [
      {
        number: 19,
        title: "Liturgia Presbiterial de Consagración Ministerial",
        content:
          "La ceremonia de ordenación incluye lectura bíblica presbiterial (1 Timoteo 4:14; 2 Timoteo 1:6), proclamación del llamado, profesión pública de votos de fidelidad doctrinal a REN-DOC-001, imposición de manos por el Pastor Fundador y el presbiterio ordenante, entrega de credencial oficial y firma del Acta Notarial Eclesiástica (REN-FORM-CER-011).",
        decisionRefs: ["DEC-DEF-004", "DEC-DEF-005"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XV",
    titleName: "RECEPCIÓN Y BENDICIÓN DE NUEVOS MIEMBROS",
    summary: "Ceremonia de acogida congregacional para miembros en plena comunión conforme a REN-DOC-005.",
    decisions: ["DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-005"],
    requiresLegalReview: false,
    articles: [
      {
        number: 20,
        title: "Bienvenida Congregacional y Votos de Membresía",
        content:
          "Los creyentes que hayan completado los requisitos estatutarios de membresía (REN-DOC-005) son recibidos públicamente mediante oración, diestra de compañerismo de los pastores y compromiso de mutua edificación en el cuerpo de Cristo.",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVI",
    titleName: "RECEPCIÓN E INSTALACIÓN DE MINISTROS Y LÍDERES",
    summary: "Instalación pastoral de líderes y ministros homologados tras el debido proceso institucional.",
    decisions: ["DEC-DEF-004", "DEC-DEF-005", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 21,
        title: "Presentación Oficial y Compromiso de Servicio",
        content:
          "Los ministros y líderes asignados a nuevas responsabilidades o áreas de servicio son presentados formalmente ante la congregación para recibir respaldo espiritual, oración y reconocimiento en sus funciones asignadas.",
        decisionRefs: ["DEC-DEF-004", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVII",
    titleName: "DEDICACIÓN DE TEMPLOS, LOCALES Y ESPACIOS SAGRADOS",
    summary: "Ceremonia de consagración de inmuebles al servicio de Dios; no transfiere derechos de propiedad civil.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003"],
    requiresLegalReview: true,
    articles: [
      {
        number: 22,
        title: "Consagración Litúrgica de Instalaciones",
        content:
          "La dedicación de templos, anexos o salones es un acto litúrgico de adoración que consagra el uso de las instalaciones exclusivamente para la gloria de Dios y el ministerio eclesial. No altera la titularidad dominial fiduciaria de RENACER CHURCH, INC. regulada en los Bylaws (REN-DOC-003).",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-005"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVIII",
    titleName: "ENVÍO MISIONERO Y COMISIONAMIENTO MINISTERIAL",
    summary: "Liturgia de comisión y envío de misioneros y plantadores de iglesias; no constituye contrato laboral civil.",
    decisions: ["DEC-DEF-002", "DEC-DEF-003", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-006"],
    requiresLegalReview: true,
    articles: [
      {
        number: 23,
        title: "Rito de Comisión Apostólica y Envío",
        content:
          "Los misioneros y obreros comisionados son bendecidos con imposición de manos y oración de envío según Hechos 13:2-3. El acto litúrgico y el acta correspondiente (REN-FORM-CER-012) acreditan respaldo espiritual y no constituyen de por sí una relación contractual laboral civil sin convenios específicos [REQUIERE_REVISION_LEGAL].",
        decisionRefs: ["DEC-DEF-003", "DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIX",
    titleName: "ORACIÓN DE BENDICIÓN Y COMISIONAMIENTO PASTORAL",
    summary: "Actos de bendición para viajes misioneros, inicio de proyectos comunitarios y etapas vitales de la congregación.",
    decisions: ["DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 24,
        title: "Ministración Pastoral en Eventos Singulares",
        content:
          "Los pastores podrán impartir oraciones litúrgicas de bendición para graduaciones, viajes misioneros, inauguración de ministerios y aniversarios congregacionales conforme al orden bíblico.",
        decisionRefs: ["DEC-DEF-002"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XX",
    titleName: "SERVICIOS ESPECIALES DE ACCIÓN DE GRACIAS",
    summary: "Cultos solemnes de fin de año, aniversarios y conmemoraciones cívico-espirituales.",
    decisions: ["DEC-DEF-002", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-004"],
    requiresLegalReview: false,
    articles: [
      {
        number: 25,
        title: "Celebraciones de Gratitud y Memorial Histórico",
        content:
          "Se programarán servicios especiales de acción de gracias para celebrar las bondades de Dios en hitos históricos de la iglesia, enfatizando la generosidad, la alabanza y la renovación espiritual.",
        decisionRefs: ["DEC-DEF-002"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXI",
    titleName: "LITURGIA, ADORACIÓN Y PARTICIPACIÓN DE LOS DONES",
    summary: "Regula el fluir carismático con discernimiento, orden apostólico y subordinación incondicional a las Sagradas Escrituras.",
    decisions: ["DEC-DEF-001", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-011"],
    requiresLegalReview: false,
    articles: [
      {
        number: 26,
        title: "Fluir Neumatológico con Orden y Discernimiento",
        content:
          "RENACER promueve el ejercicio bíblico de los dones del Espíritu Santo (oración en el Espíritu, profecía, lenguas con interpretación, sanidades y milagros) bajo la supervisión pastoral y conforme a 1 Corintios 14. Ninguna manifestación espiritual podrá contradecir la Biblia ni ser empleada como instrumento de control psicológico o coerción personal.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXII",
    titleName: "PARTICIPACIÓN DE NIÑOS, JÓVENES Y FAMILIAS",
    summary: "Integración familiar en la liturgia salvaguardando la integridad física, psicológica y espiritual de los menores.",
    decisions: ["DEC-DEF-002", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-011", "REN-DOC-016"],
    requiresLegalReview: true,
    articles: [
      {
        number: 27,
        title: "Inclusión Litúrgica Segura de Niños y Jóvenes",
        content:
          "Se fomenta la participación de niños y jóvenes en el culto público bajo supervisión directa de maestros capacitados y con pleno respeto a las políticas de protección infantil y la regla de dos adultos.",
        decisionRefs: ["DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIII",
    titleName: "PLENA IGUALDAD MINISTERIAL DE HOMBRES Y MUJERES",
    summary: "Garantiza el derecho de las mujeres a oficiar ceremonias, predicar, pastorear y presidir actos litúrgicos.",
    decisions: ["DEC-DEF-001", "DEC-DEF-013"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 28,
        title: "Igualdad Litúrgica y Oficiatura sin Discriminación de Sexo",
        content:
          "En consonancia con Gálatas 3:28 y las decisiones constitucionales de RENACER (DEC-DEF-013), las mujeres debidamente licenciadas u ordenadas poseen plenas facultades para oficiar bautismos, Santa Cena, bodas, funerales, ordenaciones y predicaciones públicas en absoluta igualdad con los varones.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-013"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIV",
    titleName: "SEGURIDAD, SALVAGUARDAS Y PROTECCIÓN DE PERSONAS",
    summary: "Protocolos de auxilio médico, evacuación, respeto a la privacidad y nunca obstaculización de emergencias civiles.",
    decisions: ["DEC-DEF-005", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-011", "REN-DOC-016"],
    requiresLegalReview: true,
    articles: [
      {
        number: 29,
        title: "Protocolo de Emergencias y Protección en el Santuario",
        content:
          "Durante las reuniones y ceremonias públicas rige el deber de velar por la seguridad de los asistentes, manteniendo despejadas las salidas de emergencia y contando con personal capacitado en primeros auxilios. Ante emergencias médicas o policiales nunca se impedirá la intervención de los servicios públicos de rescate.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXV",
    titleName: "REGISTRO, ACTAS NOTARIALES ECLESIÁSTICAS Y ARCHIVO",
    summary: "Custodia obligatoria e indeleble de libros de actas y expedientes conforme al Reglamento de Archivo REN-DOC-019.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-019"],
    requiresLegalReview: true,
    articles: [
      {
        number: 30,
        title: "Libros Oficiales de Registro Eclesiástico",
        content:
          "La secretaría general custodiará permanentemente los Libros Oficiales de: (a) Bautismos en Agua; (b) Matrimonios Religiosos; (c) Presentación de Niños; (d) Licenciamientos y Ordenaciones; y (e) Recepción y Baja de Miembros, conforme a las directrices de seguridad de REN-DOC-019.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVI",
    titleName: "CATÁLOGO OFICIAL DE FORMULARIOS LITÚRGICOS (SERIE REN-FORM-CER)",
    summary: "Catalogación oficial de los 12 formularios e instrumentos litúrgicos institucionales (REN-FORM-CER-001 a 012).",
    decisions: ["DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-010", "REN-DOC-019"],
    requiresLegalReview: false,
    articles: [
      {
        number: 31,
        title: "Serie de Formularios Litúrgicos y Actas Notariales",
        content:
          "Se consagra la serie de doce (12) formularios de gestión litúrgica: REN-FORM-CER-001 a REN-FORM-CER-012, requeridos para la apertura, celebración y certificación de las ceremonias oficiales de RENACER.",
        decisionRefs: ["DEC-DEF-002", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVII",
    titleName: "LÍMITES ENTRE ACTO RELIGIOSO Y EFECTOS JURÍDICOS CIVILES",
    summary: "Declara taxativamente que los ritos eclesiásticos no suplen por sí solos los trámites civiles requeridos por ley.",
    decisions: ["DEC-DEF-001", "DEC-DEF-005", "DEC-PEND-010"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003"],
    requiresLegalReview: true,
    articles: [
      {
        number: 32,
        title: "Independencia de la Esfera Civil y Eclesiástica",
        content:
          "Ninguna ceremonia religiosa celebrada en RENACER produce por sí misma efectos jurídicos civiles a menos que se cumplan estrictamente los requisitos y solemnidades previstos por las leyes del Estado de New Jersey y las autoridades competentes [REQUIERE_REVISION_LEGAL].",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-005", "DEC-PEND-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVIII",
    titleName: "ADAPTACIONES CULTURALES, LINGÜÍSTICAS Y CONTEXTUALES",
    summary: "Permite la contextualización pastoral en idiomas y costumbres sin vulnerar la doctrina bíblica oficial.",
    decisions: ["DEC-DEF-002", "DEC-DEF-003"],
    superiorDocRefs: ["REN-DOC-001"],
    requiresLegalReview: false,
    articles: [
      {
        number: 33,
        title: "Flexibilidad Litúrgica y Fidelidad Doctrinal",
        content:
          "Los actos litúrgicos pueden celebrarse en idioma español, inglés o formato bilingüe, adaptándose al contexto cultural y familiar de los participantes, manteniendo inalterables las verdades doctrinales de REN-DOC-001.",
        decisionRefs: ["DEC-DEF-002", "DEC-DEF-003"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIX",
    titleName: "REVISIÓN, SUPERVISIÓN Y APROBACIÓN DE CEREMONIAS SINGULARES",
    summary: "Régimen de autorización previa por el Pastor Fundador para ceremonias extraordinarias o fuera del templo.",
    decisions: ["DEC-DEF-001", "DEC-DEF-004", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 34,
        title: "Supervisión Pastoral de Actos Extraordinarios",
        content:
          "Cualquier ceremonia no estandarizada, celebraciones en recintos externos o actos litúrgicos conjuntos con otras congregaciones requerirá la anuencia y visto bueno previo del Pastor Fundador o del Consejo Ministerial.",
        decisionRefs: ["DEC-DEF-004", "DEC-DEF-005"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXX",
    titleName: "DISPOSICIONES FINALES, ENTRADA EN VIGOR Y MATERIAS LEGALES",
    summary: "Establece el régimen transitorio de borrador no adoptado y lista las materias sujetas a revisión letrada colegiada.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005", "DEC-PEND-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
    requiresLegalReview: true,
    articles: [
      {
        number: 35,
        title: "Estado de Borrador Institucional No Adoptado",
        content:
          "El presente Manual Oficial de Ceremonias, Ordenanzas y Actos Litúrgicos (REN-DOC-012) se expide formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION. Su adopción oficial requerirá la ratificación solemne del Pastor Fundador y el dictamen letrado colegiado.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-002", "DEC-PEND-010"],
        requiresLegalReview: true,
      },
      {
        number: 36,
        title: "Catálogo de Materias Reservadas a Revisión Legal",
        content:
          "Quedan explícitamente sujetas a revisión por abogados habilitados en el Estado de New Jersey: (a) Habilitación legal civil de ministros para oficiar matrimonios vinculantes; (b) Requisitos formales de licencias matrimoniales civiles; (c) Deslinde de responsabilidad civil en ceremonias acuáticas de bautismo; (d) Aspectos de privacidad de datos en certificados eclesiásticos; (e) Implicaciones jurídicas de actos de dedicación patrimonial.",
        decisionRefs: ["DEC-DEF-005", "DEC-PEND-010"],
        requiresLegalReview: true,
      },
    ],
  },
];

export const FULL_CEREMONIES_MANUAL_DRAFT = {
  metadata: CEREMONIES_MANUAL_DRAFT,
  titles: CEREMONIES_TITLES_DATA,
  formsCatalog: CEREMONIES_FORMS_CATALOG,
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-012
 */
export function generateFullCeremoniesManualMarkdown(): string {
  const meta = CEREMONIES_MANUAL_DRAFT;
  const sections: string[] = [];

  sections.push(`# ${meta.documentNumber} — ${meta.title}`);
  sections.push(`**Versión:** ${meta.version} | **Nivel:** ${meta.hierarchyLevel} | **Categoría:** ${meta.category} | **Estado:** ${meta.status}`);
  sections.push(`**Adopción:** BORRADOR — NO ADOPTADO | **Estado Legal:** REQUIERE REVISIÓN LEGAL | **Decisión:** ${meta.decisionState}`);
  sections.push(`\n> [!WARNING]\n> **DOCUMENTO INSTITUCIONAL EN ESTADO DE BORRADOR — NO ADOPTADO**\n> Este manual ha sido estructurado conforme a las 107 Decisiones Institucionales Históricas, la Declaración de Fe (REN-DOC-001) y la Constitución de RENACER CHURCH. No confiere validez jurídica definitiva ni constituye manual oficialmente adoptado hasta su ratificación formal por el Pastor Fundador y el dictamen letrado colegiado.\n`);

  sections.push(`---`);
  sections.push(`## PREÁMBULO INSTITUCIONAL\n`);
  sections.push(
    `En el Nombre del Padre, del Hijo y del Espíritu Santo, la iglesia RENACER proclama que los actos litúrgicos y las ordenanzas bíblicas son expresiones sagradas de adoración, comunión, obediencia y testimonio público del Evangelio de nuestro Señor Jesucristo. Este Manual Oficial de Ceremonias, Ordenanzas y Actos Litúrgicos (REN-DOC-012) provee a los ministros y servidores las directrices prácticas, teológicas, de seguridad y administrativas necesarias para celebrar cada rito con excelencia, reverencia y estricta fidelidad a la Palabra de Dios, preservando la pureza de las Ordenanzas de Cristo y el cuidado pastoral de las familias.\n`
  );

  sections.push(`---`);
  sections.push(`## ÍNDICE SISTEMÁTICO DE TÍTULOS NORMATIVOS\n`);

  CEREMONIES_TITLES_DATA.forEach((t) => {
    sections.push(`- **${t.titleNumber}:** ${t.titleName}`);
  });

  sections.push(`\n---`);

  CEREMONIES_TITLES_DATA.forEach((t) => {
    sections.push(`\n## ${t.titleNumber} — ${t.titleName}\n`);
    sections.push(`*${t.summary}*\n`);
    sections.push(`**Decisiones de Respaldo:** ${t.decisions.join(", ")} | **Documentos Superiores:** ${t.superiorDocRefs.join(", ")} | **Revisión Legal:** ${t.requiresLegalReview ? "OBLIGATORIA" : "CONFORME"}\n`);

    t.articles.forEach((art) => {
      sections.push(`### Artículo ${art.number}. ${art.title}`);
      sections.push(`${art.content}\n`);
      sections.push(`*Trazabilidad:* Decisiones [${art.decisionRefs.join(", ")}] | *Revisión Letrada:* ${art.requiresLegalReview ? "REQUIERE REVISIÓN LEGAL" : "CONFORME A DOCTRINA"}\n`);
    });
  });

  sections.push(`\n---`);
  sections.push(`## SERIE OFICIAL DE FORMULARIOS LITÚRGICOS (REN-FORM-CER)\n`);
  sections.push(`| Código | Nombre del Formulario | Propósito Institucional | Ocasión / Frecuencia | Custodia |`);
  sections.push(`| :--- | :--- | :--- | :--- | :--- |`);
  CEREMONIES_FORMS_CATALOG.forEach((f) => {
    sections.push(`| **${f.code}** | ${f.name} | ${f.purpose} | ${f.frequencyOrTrigger} | ${f.custodyDoc} |`);
  });

  sections.push(`\n---`);
  sections.push(`## CLÁUSULA DE SALVAGUARDA INSTITUCIONAL Y ADVERTENCIA LEGAL\n`);
  sections.push(
    `1. **No Adopción Prematura:** Este Manual (REN-DOC-012) se mantiene formalmente en estado de BORRADOR NO ADOPTADO.\n` +
    `2. **Límites Religiosos vs Civiles:** Ninguna ceremonia eclesiástica suple por sí sola los requisitos civiles del Estado de New Jersey ni de autoridades seculares.\n` +
    `3. **Protección de Menores:** Toda ceremonia con participación de infantes o jóvenes observará rigurosamente la regla de dos adultos y las salvaguardas de REN-DOC-016 y N.J.S.A. 9:6-8.10.\n` +
    `4. **Seguridad y Emergencias:** Ante situaciones de riesgo vital, el personal ministerial facilitará sin dilación la intervención de los servicios de emergencia médica y de orden público.\n` +
    `5. **Revisión Legal:** Las directrices sobre validez matrimonial civil y responsabilidad extracontractual quedan sujetas al dictamen letrado colegiado.\n`
  );

  return sections.join("\n\n");
}
