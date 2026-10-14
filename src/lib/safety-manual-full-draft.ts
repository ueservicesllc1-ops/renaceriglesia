/**
 * REN-DOC-014 — MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER
 * Versión: v0.1 | Estado: EN_REDACCION | DecisionState: DEFINIDA | Adoption: NO_ADOPTADA
 * LegalState: REQUIERE_REVISION_LEGAL | Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: PROTECCION_SEGURIDAD_Y_SALVAGUARDAS
 * 
 * BORRADOR — NO ADOPTADO | REQUIERE REVISIÓN LEGAL
 */

export interface SafetyArticleDraft {
  number: number;
  title: string;
  content: string[];
  dependencies?: string[];
  crossReferences?: string[];
  keyPrinciples?: string[];
  requiresLegalReview?: boolean;
  isPendingDefinition?: boolean;
}

export interface SafetyTitleDraft {
  number: string;
  romanNumeral: string;
  title: string;
  description: string;
  articles: SafetyArticleDraft[];
}

export interface SafetyFormDescriptor {
  code: string;
  title: string;
  purpose: string;
  responsibleRole: string;
  frequency: string;
  retentionCategory: string;
}

export interface SafetyManualDraft {
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
  titles: SafetyTitleDraft[];
  formsCatalog: SafetyFormDescriptor[];
  decisionsUsed: string[];
  pendingDefinitions: string[];
  legalReviewMatters: string[];
}

export const SAFETY_FORMS_CATALOG: SafetyFormDescriptor[] = [
  {
    code: "REN-FORM-SAFE-001",
    title: "Reporte Oficial de Incidente General",
    purpose: "Documentar formalmente cualquier altercado, anomalía o situación de riesgo ocurrida en instalaciones o actividades oficiales.",
    responsibleRole: "Cualquier Servidor / Comité de Salvaguardas",
    frequency: "Inmediato ante incidente",
    retentionCategory: "SALVAGUARDAS_INCIDENTES",
  },
  {
    code: "REN-FORM-SAFE-002",
    title: "Reporte de Accidente o Lesión Física",
    purpose: "Registrar caídas, lesiones, daños corporales o accidentes materiales durante cultos, viajes o eventos eclesiásticos.",
    responsibleRole: "Primeros Auxilios / Seguridad / Administración",
    frequency: "Por evento de accidente",
    retentionCategory: "SALVAGUARDAS_ACCIDENTES",
  },
  {
    code: "REN-FORM-SAFE-003",
    title: "Reporte Confidencial de Sospecha o Revelación de Abuso",
    purpose: "Canalizar de forma confidencial y protegida denuncias de abuso físico, sexual, emocional o negligencia grave contra menores o adultos.",
    responsibleRole: "Oficial de Salvaguardas / Pastor Fundador",
    frequency: "Inmediato e inaplazable",
    retentionCategory: "SALVAGUARDAS_CONFIDENCIAL_RESTRINGIDO",
  },
  {
    code: "REN-FORM-SAFE-004",
    title: "Registro de Emergencia Médica y Derivación",
    purpose: "Documentar la atención inicial, llamada al 911/servicios de emergencia y entrega de pacientes a personal paramédico profesional.",
    responsibleRole: "Equipo de Respuesta Médica / Encargado de Servicio",
    frequency: "Por emergencia médica atendida",
    retentionCategory: "SALVAGUARDAS_MEDICAS",
  },
  {
    code: "REN-FORM-SAFE-005",
    title: "Registro de Simulacro y Evacuación de Emergencia",
    purpose: "Asentar la ejecución de protocolos de evacuación por incendio, clima severo, amenaza externa o simulacros preventivos.",
    responsibleRole: "Coordinador de Seguridad de Instalaciones",
    frequency: "Por simulacro o evento real de evacuación",
    retentionCategory: "SEGURIDAD_INSTALACIONES",
  },
  {
    code: "REN-FORM-SAFE-006",
    title: "Autorización y Consentimiento Parental para Actividades con Menores",
    purpose: "Recabar el consentimiento informado, datos de contacto de emergencia e historial médico básico de niños y jóvenes participantes.",
    responsibleRole: "Padres o Tutores Legales / Ministerio Infantil-Juvenil",
    frequency: "Anual / Por actividad especial o campamento",
    retentionCategory: "CONSENTIMIENTOS_MENORES",
  },
  {
    code: "REN-FORM-SAFE-007",
    title: "Autorización de Transporte y Ficha de Conductor",
    purpose: "Autorizar el traslado de menores y miembros en vehículos oficiales, validando licencias de conductores y seguros vigentes.",
    responsibleRole: "Coordinador de Transporte / Padres de Menores",
    frequency: "Por viaje oficial o excursión",
    retentionCategory: "TRANSPORTE_AUTORIZACIONES",
  },
  {
    code: "REN-FORM-SAFE-008",
    title: "Registro, Solicitud y Ficha de Voluntario de Salvaguardas",
    purpose: "Formalizar la postulación, referencias personales y verificación de idoneidad para servidores en áreas de niñez o vulnerabilidad.",
    responsibleRole: "Comité de Selección / Dirección de Ministerios",
    frequency: "Al postular y renovación periódica",
    retentionCategory: "EXPEDIENTES_VOLUNTARIOS",
  },
  {
    code: "REN-FORM-SAFE-009",
    title: "Declaración Anual de Cumplimiento del Manual de Salvaguardas",
    purpose: "Certificar por escrito el conocimiento, adhesión y compromiso ético de ministros, líderes y maestros con las políticas de protección.",
    responsibleRole: "Todos los Ministros, Pastores, Maestros y Servidores",
    frequency: "Anual",
    retentionCategory: "COMPROMISOS_ETICA_SALVAGUARDAS",
  },
  {
    code: "REN-FORM-SAFE-010",
    title: "Registro y Control de Capacitación en Salvaguardas",
    purpose: "Acreditar la asistencia, evaluación y horas de formación en protección infantil, prevención de abusos y primeros auxilios.",
    responsibleRole: "Coordinador de Capacitación / Asistentes",
    frequency: "Por jornada de capacitación realizada",
    retentionCategory: "CAPACITACION_HISTORIAL",
  },
  {
    code: "REN-FORM-SAFE-011",
    title: "Registro de Incidente en Canales Digitales y Redes Sociales",
    purpose: "Documentar contactos inapropiados, acoso digital, mensajes no autorizados con menores o vulneraciones a la privacidad online.",
    responsibleRole: "Comité de Tecnología y Comunicaciones / Oficial de Seguridad",
    frequency: "Por incidente detectado",
    retentionCategory: "SALVAGUARDAS_DIGITALES",
  },
  {
    code: "REN-FORM-SAFE-012",
    title: "Registro de Seguimiento Pastoral y Derivación Profesional",
    purpose: "Asentar de forma confidencial el acompañamiento pastoral, medidas de apoyo a víctimas y derivación formal a especialistas externos.",
    responsibleRole: "Pastores / Comité de Cuidado Pastoral",
    frequency: "Por proceso de consejería / derivación",
    retentionCategory: "CONSEJERIA_CONFIDENCIAL",
  },
];

export const SAFETY_MANUAL_DRAFT: SafetyManualDraft = {
  documentNumber: "REN-DOC-014",
  title: "MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER",
  shortTitle: "Manual de Protección y Salvaguardas",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS",
  subcategory: "Protección Infantil, Seguridad Integral y Salvaguardas",
  version: "0.1",
  documentState: "EN_REDACCION",
  decisionState: "DEFINIDA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  author: "Luis Uchubanda Falconí / Comisión de Protección y Salvaguardas",
  responsibleArea: "COMITE_ETICA_PROTECCION",
  approvalAuthority: "PASTOR_FUNDADOR",
  confidentiality: "INTERNO_CONGREGACION",
  pithySummary: "Marco institucional integral que regula la prevención, detección, respuesta, documentación y derivación ante situaciones de riesgo o abuso físico, sexual, emocional, espiritual, digital o institucional de menores, adultos y personas vulnerables en RENACER CHURCH, INC.",
  preamble: "La Iglesia de Jesucristo está llamada a ser un refugio sagrado de amor, justicia, sanidad y verdad, donde cada ser humano —creado a imagen y semejanza de Dios— sea tratado con inviolable dignidad, honra y absoluta protección (Génesis 1:27; Mateo 18:6, 10). RENACER CHURCH, INC. establece el presente Manual Oficial de Protección, Seguridad y Salvaguardas (REN-DOC-014) como expresión práctica de su deber ineludible de velar por el bienestar integral de la niñez, juventud, familias y personas vulnerables. Ninguna jerarquía ministerial, celo institucional, sigilo pastoral mal entendido o mediación interna podrá ser utilizado jamás para ocultar abusos, obstaculizar la justicia civil, intimidar víctimas o impedir el auxilio médico y policial.",
  formsCatalog: SAFETY_FORMS_CATALOG,
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
    "Frecuencia y periodicidad obligatoria de los cursos institucionales de capacitación y recertificación en salvaguardas [PENDIENTE_DEFINIR]",
    "Vigencia temporal y plazo de renovación de las autorizaciones y fichas de servicio de voluntarios [PENDIENTE_DEFINIR]",
    "Frecuencia exacta de revisión y actualización periódica de expedientes de servidores en áreas de niñez [PENDIENTE_DEFINIR]",
    "Períodos cuantitativos de retención documental física y digital de reportes de incidentes no especificados en REN-DOC-019 [PENDIENTE_DEFINIR]",
    "Ratios cuantitativos específicos de adultos supervisores por número de menores en actividades de alta densidad [PENDIENTE_DEFINIR]",
  ],
  legalReviewMatters: [
    "Obligaciones de reporte mandatorio ante el Departamento de Niños y Familias (DCF) y autoridades policiales de New Jersey [REQUIERE_REVISION_LEGAL]",
    "Procedimiento y marco regulatorio de verificación de antecedentes penales (criminal background checks) en New Jersey [REQUIERE_REVISION_LEGAL]",
    "Formularios de consentimiento informado, waivers de responsabilidad civil y autorizaciones de transporte [REQUIERE_REVISION_LEGAL]",
    "Políticas de privacidad de datos personales de menores, uso de imagen, fotografía y video en transmisiones [REQUIERE_REVISION_LEGAL]",
    "Coberturas de pólizas de seguro de responsabilidad civil general y responsabilidad institucional por salvaguardas [REQUIERE_REVISION_LEGAL]",
    "Preservación de evidencia digital, grabaciones de seguridad y registros ante procesos judiciales [REQUIERE_REVISION_LEGAL]",
  ],
  titles: [
    {
      number: "1",
      romanNumeral: "I",
      title: "NATURALEZA, OBJETO, ALCANCE Y PRINCIPIO FUNDAMENTAL DE PROTECCIÓN",
      description: "Marco fundacional, jerarquía normativa y principio rector incondicional de salvaguardas.",
      articles: [
        {
          number: 1,
          title: "Naturaleza y Jerarquía del Manual",
          content: [
            "El presente Manual Oficial de Protección, Seguridad y Salvaguardas (REN-DOC-014) constituye la norma institucional de Nivel 4 que rige de manera obligatoria para la prevención, detección, intervención, documentación y derivación de cualquier riesgo o daño a la integridad física, sexual, emocional, espiritual o digital de las personas vinculadas a RENACER CHURCH, INC.",
            "Este Manual no deroga ni contradice las disposiciones superiores de la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003) ni el Código de Ética (REN-DOC-011), sino que operativiza sus principios de protección y cuidado pastoral.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-011"],
        },
        {
          number: 2,
          title: "Objeto y Ámbito de Aplicación Subjetiva",
          content: [
            "El objeto primordial es garantizar que todas las sedes, templos, eventos, ministerios, actividades formativas, grupos pequeños, campamentos y plataformas digitales de RENACER sean entornos seguros y libres de violencia.",
            "Sus disposiciones vinculan al Pastor Fundador, pastores asociados, directivos, ministros ordenados y licenciados, líderes de ministerio, docentes del Seminario y Escuelas, líderes de Familias de Grupo, servidores, voluntarios, empleados y participantes de todas las edades.",
          ],
        },
        {
          number: 3,
          title: "Principio Fundamental de No Encubrimiento y Primacía de la Víctima",
          content: [
            "La dignidad, seguridad y protección física de las personas prevalecen sobre cualquier interés reputacional, jerarquía eclesiástica, confidencialidad ministerial o mediación interna (DEC-DEF-019).",
            "Bajo ninguna circunstancia se utilizará la doctrina cristiana, la disciplina interna, el perdón espiritual o el sigilo pastoral para ocultar un presunto delito, impedir una denuncia ante autoridades civiles, intimidar a una víctima o testigo, destruir evidencia o tomar represalias.",
          ],
          dependencies: ["DEC-DEF-019", "REN-DOC-011"],
        },
        {
          number: 4,
          title: "Deslinde con el Asesoramiento Legal y Cooperación Externa",
          content: [
            "El presente manual establece directrices reglamentarias internas y no constituye asesoramiento legal o médico profesional ni reemplaza las leyes vigentes en el Estado de New Jersey.",
            "La corporación cooperará plenamente con las agencias de protección infantil, servicios médicos y cuerpos de seguridad competentes conforme a derecho.",
          ],
        },
      ],
    },
    {
      number: "2",
      romanNumeral: "II",
      title: "PRINCIPIO DE TOLERANCIA CERO AL ABUSO Y DESLINDE DE COMPETENCIAS",
      description: "Tipificación general de conductas incompatibles y distinción entre procesos internos y civiles.",
      articles: [
        {
          number: 5,
          title: "Tipificación de Conductas Incompatibles",
          content: [
            "RENACER CHURCH, INC. declara absolutamente incompatibles con el Evangelio y con el servicio eclesiástico: a) El abuso físico o castigo corporal; b) El abuso sexual y la explotación sexual; c) El abuso emocional sistemático; d) El abuso espiritual y la coerción profética; e) La negligencia grave en el cuidado de menores o dependientes; f) El acoso y hostigamiento; g) La explotación económica; y h) Cualquier represalia contra denunciantes.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 6,
          title: "Sentido Institucional de la Tolerancia Cero y Debido Proceso",
          content: [
            "El principio de tolerancia cero implica que toda acusación o sospecha fundamentada será atendida con máxima seriedad y rigor, activando medidas cautelares inmediatas de protección a la presunta víctima.",
            "La tolerancia cero no equivale a una condena sumaria sin investigación ni vulneración del debido proceso institucional; la indagación interna respetará el derecho a ser escuchado sin exponer a la víctima.",
          ],
        },
        {
          number: 7,
          title: "Diferenciación de Fases en la Gestión de Casos",
          content: [
            "Toda situación de riesgo se gestionará distinguiendo con claridad sus etapas: 1) Recepción y Contención; 2) Medidas Cautelares Provisionales; 3) Notificación a Autoridades Competentes; 4) Evaluación Interna de Salvaguardas; 5) Determinación Institucional; 6) Proceso Disciplinario (REN-DOC-005); y 7) Acompañamiento y Restauración Pastoral.",
          ],
          dependencies: ["REN-DOC-005"],
        },
        {
          number: 8,
          title: "Límites entre Actuación Eclesiástica y Jurisdicción Penal",
          content: [
            "Los ministros y oficiales de RENACER no son agentes de policía, fiscales ni peritos forenses. Queda prohibido llevar adelante investigaciones de estilo policial o confrontaciones inquisitoriales que puedan contaminar evidencias o revictimizar a las personas afectadas.",
          ],
        },
      ],
    },
    {
      number: "3",
      romanNumeral: "III",
      title: "PROTECCIÓN Y SALVAGUARDAS INTEGRALES DE MENORES DE EDAD",
      description: "Políticas reforzadas para la atención y cuidado de niños y adolescentes.",
      articles: [
        {
          number: 9,
          title: "Prioridad Absoluta de la Seguridad Infantil",
          content: [
            "Los niños y adolescentes constituyen el sector de mayor cuidado y vulnerabilidad en la congregación (Mateo 18:5-6). Todo ministerio infantil (Renacer Kids), ministerio juvenil, escuela bíblica o actividad recreativa debe organizarse bajo estándares estrictos de protección física y emocional.",
          ],
        },
        {
          number: 10,
          title: "Protocolo de Entrega, Recepción y Registro de Menores",
          content: [
            "En las actividades infantiles se implementará un sistema seguro de registro (check-in y check-out) donde se identifique al menor y a los padres o adultos legalmente autorizados para su entrega y retiro.",
            "Ningún menor de edad será entregado a personas no autorizadas por escrito o que se presenten en estado de intoxicación o alteración manifiesta.",
          ],
        },
        {
          number: 11,
          title: "Supervisión en Baños y Espacios Sanitarios",
          content: [
            "Los niños pequeños que requieran asistencia en los servicios higiénicos serán acompañados por maestras o servidoras autorizadas, manteniendo la puerta principal del baño entreabierta o con supervisión visible de un segundo adulto.",
            "Queda prohibido que un adulto permanezca a solas a puerta cerrada con un menor en un sanitario.",
          ],
        },
        {
          number: 12,
          title: "Consentimiento Informado Parental para Menores",
          content: [
            "Toda actividad que exceda el horario regular del culto dominical o implique desplazamientos fuera del templo requiere el formulario formal firmado REN-FORM-SAFE-006 (Autorización y Consentimiento Parental).",
          ],
        },
      ],
    },
    {
      number: "4",
      romanNumeral: "IV",
      title: "REGLA DE DOS ADULTOS CAPACITADOS Y PROTOCOLO DE AISLAMIENTO CERO",
      description: "Estándar obligatorio de doble presencia en toda interacción con menores.",
      articles: [
        {
          number: 13,
          title: "Principio de la Regla de Dos Adultos",
          content: [
            "En toda aula, salón, vehículo, actividad ministerial o reunión presencial o virtual con menores de edad debe contarse obligatoriamente con la presencia de al menos dos (2) adultos autorizados y capacitados (DEC-DEF-019).",
            "Se prohíbe terminantemente que un solo adulto permanezca a solas con un menor en un espacio aislado, habitación cerrada o vehículo sin supervisión visual.",
          ],
          dependencies: ["DEC-DEF-019"],
        },
        {
          number: 14,
          title: "Diseño de Espacios con Visibilidad Abierta",
          content: [
            "Todas las aulas de enseñanza de niños y oficinas de consejería pastoral deben contar con paneles de vidrio transparente, puertas con mirillas despejadas o mantenerse con la puerta abierta para permitir la visibilidad continua desde el exterior.",
          ],
        },
        {
          number: 15,
          title: "Excepciones de Fuerza Mayor y Registro Obligatorio",
          content: [
            "Únicamente en supuestos imprevistos de emergencia médica sobrevenida o evacuación urgente se admitirá que un adulto auxilie a un menor de forma individual, debiendo reintegrarse a un espacio público de inmediato y documentar el hecho en REN-FORM-SAFE-001.",
          ],
        },
        {
          number: 16,
          title: "Supervisión Itinerante en Instalaciones",
          content: [
            "Durante los cultos y actividades generales, el equipo de ujieres y seguridad realizará rondas periódicas de vigilancia por pasillos, salones secundarios, zonas exteriores y áreas de estacionamiento.",
          ],
        },
      ],
    },
    {
      number: "5",
      romanNumeral: "V",
      title: "LÍMITES DE CONTACTO FÍSICO EN LA MINISTRACIÓN, CULTO Y ACTIVIDADES",
      description: "Regulación de expresiones de afecto, oración ministerial e imposición de manos.",
      articles: [
        {
          number: 17,
          title: "Principio de Afecto Respetuoso y Apropiado",
          content: [
            "Las manifestaciones de afecto cristiano fraterno (saludos de mano, abrazos laterales breves, palmaditas en el hombro) deben ser respetuosas, no invasivas y aceptadas voluntariamente.",
            "Queda prohibido cualquier contacto físico íntimo, besos inapropiados, abrazos prolongados o caricias sugestivas en cualquier contexto eclesiástico.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-012"],
        },
        {
          number: 18,
          title: "Límites en la Oración, Imposición de Manos y Unción",
          content: [
            "Durante la oración ministerial, imposición de manos o unción con aceite (REN-DOC-012), el contacto físico se limitará estrictamente a la cabeza, frente, hombros o manos extendidas del creyente.",
            "Queda terminantemente prohibido tocar áreas pectorales, abdomen, muslos o zonas íntimas bajo pretexto de oración de liberación, sanidad o unción espiritual.",
          ],
          dependencies: ["REN-DOC-012"],
        },
        {
          number: 19,
          title: "Salvaguardas Especiales en la Oración por Menores",
          content: [
            "La oración por niños y adolescentes se realizará en presencia visible de sus padres, tutores o en el marco de la congregación abierta, evitando contactos físicos innecesarios.",
          ],
        },
        {
          number: 20,
          title: "Respeto a la Negativa del Creyente",
          content: [
            "Si una persona manifiesta incomodidad o solicita no ser tocada físicamente durante la oración, el ministro orará a distancia prudencial sin forzar el contacto ni emitir juicios espirituales sobre su fe.",
          ],
        },
      ],
    },
    {
      number: "6",
      romanNumeral: "VI",
      title: "LÍMITES ESTRICTOS DE LA CONSEJERÍA PASTORAL Y DERIVACIÓN PROFESIONAL",
      description: "Alcance espiritual del acompañamiento pastoral y derivación obligatoria de casos especializados.",
      articles: [
        {
          number: 21,
          title: "Naturaleza Espiritual de la Consejería Bíblica",
          content: [
            "La consejería pastoral en RENACER tiene por finalidad proveer guía espiritual, consuelo bíblico, oración y exhortación fraterna fundamentada en las Sagradas Escrituras.",
            "El ministro jamás se presentará como psicólogo, psiquiatra, médico, terapeuta clínico o abogado, a menos que posea los títulos y licencias civiles correspondientes y actúe en un marco profesional diferenciado.",
          ],
          dependencies: ["REN-DOC-006", "REN-DOC-010", "REN-DOC-011"],
        },
        {
          number: 22,
          title: "Deber Ineludible de Derivación Profesional",
          content: [
            "Cuando una persona atendida en consejería presente ideación suicida, depresión clínica severa, psicosis, trastornos psiquiátricos, abuso de sustancias o cuadros médicos, el pastor debe exigir y coordinar la derivación formal inmediata a profesionales de la salud mental y física (REN-FORM-SAFE-012).",
            "La oración no sustituye el tratamiento médico ni psiquiátrico prescrito por profesionales licenciados.",
          ],
        },
        {
          number: 23,
          title: "Consejería Individual y Protocolo de Visibilidad",
          content: [
            "Las sesiones de consejería individual se desarrollarán en oficinas con visibilidad hacia el exterior o en horarios donde haya personal administrativo en el edificio.",
            "En consejerías con personas del sexo opuesto, se procurará la presencia de un co-consejero o la participación del cónyuge ministerial para salvaguardar la pureza y el testimonio.",
          ],
        },
        {
          number: 24,
          title: "Límites de Duración y Prevención de Dependencia Emocional",
          content: [
            "La consejería pastoral debe ser transitoria y enfocada en la madurez en Cristo, evitando crear relaciones de dependencia psicológica enfermiza o transferencias afectivas inapropiadas entre el aconsejado y el ministro.",
          ],
        },
      ],
    },
    {
      number: "7",
      romanNumeral: "VII",
      title: "CONFIDENCIALIDAD PASTORAL RESPONSABLE Y EXCEPCIONES LEGALES",
      description: "Sigilo ministerial delimitado ante riesgos graves, delitos o mandatos de la ley.",
      articles: [
        {
          number: 25,
          title: "Principio de Confidencialidad Pastoral Responsable",
          content: [
            "Las confesiones íntimas y temas personales compartidos en consejería pastoral están amparados por el sigilo ministerial y no podrán ser divulgados como motivos de chisme, sermones públicos o conversaciones privadas.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 26,
          title: "Límites del Sigilo y Excepciones Inquebrantables",
          content: [
            "El ministro advertirá claramente al aconsejado que no existe confidencialidad absoluta en los siguientes supuestos: a) Revelación de abuso físico, sexual o negligencia contra menores de edad; b) Riesgo inminente de suicidio o daño letal a terceros; c) Comisión o encubrimiento de delitos graves; y d) Mandato judicial vinculante.",
          ],
        },
        {
          number: 27,
          title: "Prohibición de Utilizar el Sigilo como Herramienta de Encubrimiento",
          content: [
            "Se prohíbe invocar el privilegio eclesiástico o el secreto de confesión para obstruir investigaciones judiciales, proteger a agresores o evitar el reporte mandatorio exigido por las leyes civiles aplicables.",
          ],
        },
        {
          number: 28,
          title: "Custodia de Notas de Consejería",
          content: [
            "Las notas pastorales no contendrán información médica sensible ni relatos inculpatorios directos; se conservarán bajo llave o cifrado digital seguro de acceso restringido.",
          ],
        },
      ],
    },
    {
      number: "8",
      romanNumeral: "VIII",
      title: "PROCEDIMIENTO INSTITUCIONAL DE RECEPCIÓN Y TRÁMITE DE DENUNCIAS DE ABUSO",
      description: "Protocolo de 10 pasos para la gestión inmediata de reportes de daño o sospecha.",
      articles: [
        {
          number: 29,
          title: "Recepción Empática y No Intimidación",
          content: [
            "Cualquier servidor que reciba un reporte o sospecha de abuso escuchará con respeto, calma y empatía a la persona afectada, sin interrumpir, juzgar, culpabilizar ni emitir dudas sobre su testimonio.",
          ],
        },
        {
          number: 30,
          title: "Documentación Inmediata en Formulario REN-FORM-SAFE-003",
          content: [
            "Los hechos relatados se registrarán de inmediato en el formulario confidencial REN-FORM-SAFE-003, consignando fecha, hora, lugares, personas involucradas, palabras textuales utilizadas y estado de la presunta víctima.",
          ],
        },
        {
          number: 31,
          title: "Medidas Cautelares de Seguridad y Separación Preventiva",
          content: [
            "De forma inmediata se garantizará que la presunta víctima no tenga contacto físico ni digital con la persona señalada, disponiendo la separación preventiva de funciones de esta última.",
          ],
        },
        {
          number: 32,
          title: "Escalamiento al Comité de Salvaguardas y Notificación Legal",
          content: [
            "El reporte se remite de inmediato al Oficial de Salvaguardas y al Pastor Fundador para activar la asesoría legal colegiada y proceder a la notificación correspondiente.",
          ],
        },
      ],
    },
    {
      number: "9",
      romanNumeral: "IX",
      title: "OBLIGACIONES DE REPORTE Y COOPERACIÓN CON AUTORIDADES CIVILES",
      description: "Cumplimiento normativo y coordinación con agencias de protección infantil y justicia.",
      articles: [
        {
          number: 33,
          title: "Deber de Reporte Mandatorio de Abuso Infantil",
          content: [
            "Conforme a las leyes de protección de menores en el Estado de New Jersey, cualquier persona que tenga sospecha razonable de que un menor ha sufrido abuso o negligencia tiene la obligación de reportarlo ante la autoridad competente [REQUIERE_REVISION_LEGAL].",
            "La iglesia no obstaculizará ni demorará la presentación de denuncias civiles.",
          ],
          requiresLegalReview: true,
        },
        {
          number: 34,
          title: "No Sustitución por Investigaciones Eclesiásticas Internas",
          content: [
            "Ninguna junta pastoral, comisión de ética o cuerpo directivo podrá sustituir el rol investigador del Departamento de Niños y Familias (DCF) o de la Fiscalía.",
          ],
        },
        {
          number: 35,
          title: "Cooperación Plena sin Obstrucción",
          content: [
            "La administración facilitará el acceso a instalaciones y registros requeridos formalmente por autoridades judiciales, preservando la dignidad y los derechos de las partes.",
          ],
        },
        {
          number: 36,
          title: "Acompañamiento Pastoral a Familias en Crisis",
          content: [
            "La iglesia dispondrá de pastores y consejeros capacitados para brindar apoyo espiritual, emocional y oración a las familias y víctimas durante el proceso legal.",
          ],
        },
      ],
    },
    {
      number: "10",
      romanNumeral: "X",
      title: "PROTOCOLO DE RESPUESTA ANTE EMERGENCIAS MÉDICAS Y PRIMEROS AUXILIOS",
      description: "Primeros auxilios básicos, llamada al 911 y primacía de la atención sanitaria.",
      articles: [
        {
          number: 37,
          title: "Primacía de la Atención Médica Profesional",
          content: [
            "Ante cualquier desvanecimiento, paro cardíaco, asfixia, crisis convulsiva, fractura o traumatismo grave durante una reunión, se activará de inmediato el sistema de emergencias médicas llamando al 911.",
            "Se prohíbe postergar la llamada de emergencia para orar o intentar maniobras no capacitadas.",
          ],
        },
        {
          number: 38,
          title: "Primeros Auxilios dentro de Capacitación Disponible",
          content: [
            "Los miembros del equipo de respuesta médica certificados en RCP/DEA y primeros auxilios asistirán al afectado hasta la llegada de la ambulancia.",
          ],
        },
        {
          number: 39,
          title: "Botiquines de Emergencia y Desfibrilador (DEA)",
          content: [
            "Las instalaciones principales contarán con botiquines de primeros auxilios inspeccionados periódicamente y equipos de desfibrilación externa automática (DEA) señalizados.",
          ],
        },
        {
          number: 40,
          title: "Registro en REN-FORM-SAFE-004",
          content: [
            "Toda intervención médica se documentará en el formulario REN-FORM-SAFE-004, detallando la hora del incidente, personal que intervino, unidad de auxilio que asistió y hospital de traslado.",
          ],
        },
      ],
    },
    {
      number: "11",
      romanNumeral: "XI",
      title: "PROTOCOLO ANTE EMERGENCIAS FÍSICAS, EVACUACIÓN Y AMENAZAS EN INSTALACIONES",
      description: "Procedimientos de evacuación, incendios, clima severo y seguridad física.",
      articles: [
        {
          number: 41,
          title: "Prioridad de la Vida Humana sobre la Continuidad del Culto",
          content: [
            "Ante una alarma de incendio, fuga de gas, amenaza de violencia o fenómeno meteorológico extremo, el culto o reunión se suspenderá de inmediato para proceder a la evacuación ordenada.",
          ],
        },
        {
          number: 42,
          title: "Rutas de Evacuación y Señalización de Salidas",
          content: [
            "Todos los salones y santuarios dispondrán de planos de evacuación visibles y salidas de emergencia iluminadas y libres de obstáculos.",
          ],
        },
        {
          number: 43,
          title: "Protocolo ante Amenazas de Violencia o Intrusos Armados",
          content: [
            "El equipo de seguridad seguirá protocolos de mitigación de riesgos (correr, esconderse, defenderse / Run-Hide-Fight), asegurando puertas y llamando de inmediato a la policía.",
          ],
        },
        {
          number: 44,
          title: "Simulacros Periódicos y Registro REN-FORM-SAFE-005",
          content: [
            "La administración organizará simulacros de evacuación y asentará los resultados en el formulario REN-FORM-SAFE-005.",
          ],
        },
      ],
    },
    {
      number: "12",
      romanNumeral: "XII",
      title: "SALVAGUARDAS PARA PERSONAS VULNERABLES, ADULTOS MAYORES Y DISCAPACIDAD",
      description: "Protección contra maltrato, abuso patrimonial y barreras de accesibilidad.",
      articles: [
        {
          number: 45,
          title: "Definición y Alcance de Personas Vulnerables",
          content: [
            "Se consideran personas vulnerables aquellas que por motivos de edad avanzada, discapacidad física o cognitiva, enfermedad terminal o extrema precariedad requieren de protección eclesiástica reforzada.",
          ],
        },
        {
          number: 46,
          title: "Prohibición de Explotación Financiera y Manipulación Patrimonial",
          content: [
            "Queda terminantemente prohibido que ministros o servidores induzcan a adultos mayores o personas vulnerables a modificar testamentos, otorgar poderes notariales, transferir bienes o solicitar préstamos a favor de líderes.",
          ],
          dependencies: ["REN-DOC-011", "REN-DOC-013"],
        },
        {
          number: 47,
          title: "Accesibilidad Física y Trato Digno",
          content: [
            "La iglesia adaptará sus instalaciones para garantizar accesibilidad de sillas de ruedas, baños adecuados y asistencia voluntaria respetuosa.",
          ],
        },
        {
          number: 48,
          title: "Prevención del Abandono y Maltrato Doméstico",
          content: [
            "Ante indicios de maltrato físico o desnutrición en adultos dependientes, la iglesia activará salvaguardas pastorales y las alertas ante agencias sociales de protección al adulto mayor [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "13",
      romanNumeral: "XIII",
      title: "PREVENCIÓN Y TIPIFICACIÓN DEL ABUSO ESPIRITUAL Y COERCIÓN PROFÉTICA",
      description: "Prohibición de manipulación de conciencias y tiranía ministerial.",
      articles: [
        {
          number: 49,
          title: "Definición de Abuso Espiritual",
          content: [
            "El abuso espiritual consiste en la utilización ilegítima de la autoridad ministerial, textos bíblicos o afirmaciones proféticas para dominar, manipular, coaccionar o controlar la vida personal, conyugal o laboral de los creyentes.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-011"],
        },
        {
          number: 50,
          title: "Prohibición Expresa de Coerción 'Dios me Dijo'",
          content: [
            "Se prohíbe terminantemente el uso de expresiones autoritarias como 'Dios me dijo que te cases', 'Dios me reveló que debes renunciar a tu empleo' o 'si no me obedeces caerá maldición sobre tu familia' (DEC-DEF-010).",
            "Toda profecía o palabra de discernimiento debe subordinarse a la autoridad canónica de las Escrituras y ser evaluada con sobriedad (1 Corintios 14:29, 40).",
          ],
          dependencies: ["DEC-DEF-010"],
        },
        {
          number: 51,
          title: "Prohibición de Aislamiento y Control de Vidas Privadas",
          content: [
            "Ningún líder pastoral podrá exigir que un miembro rompa relaciones con sus familiares sanos, controle sus finanzas personales o decida sobre su voto civil.",
          ],
        },
        {
          number: 52,
          title: "Disciplina Restauradora sin Venganza",
          content: [
            "Los procesos disciplinarios se administrarán con misericordia y apego a Mateo 18 (REN-DOC-005), quedando prohibido usar la disciplina eclesiástica como castigo vindicativo o represalia pública.",
          ],
          dependencies: ["REN-DOC-005"],
        },
      ],
    },
    {
      number: "14",
      romanNumeral: "XIV",
      title: "SALVAGUARDAS EN FAMILIAS DE GRUPO, CÉLULAS Y PROCESOS DE DISCIPULADO",
      description: "Límites saludables en los grupos pequeños y mentorías en hogares.",
      articles: [
        {
          number: 53,
          title: "Naturaleza de los Grupos Pequeños en Hogares",
          content: [
            "Las Familias de Grupo son espacios de comunión, edificación y oración (Hechos 2:46). Deben operar con transparencia y bajo la supervisión pastoral directa de la iglesia.",
          ],
          dependencies: ["REN-DOC-006"],
        },
        {
          number: 54,
          title: "Prohibición de Invasión a la Privacidad Conyugal o Económica",
          content: [
            "Los líderes de grupo no tienen potestad para indagar sobre la intimidad sexual matrimonial ni exigir cuentas sobre cuentas bancarias o gastos personales de los asistentes.",
          ],
        },
        {
          number: 55,
          title: "Salvaguarda de Menores en Hogares Anfitriones",
          content: [
            "En las reuniones celulares donde asistan niños, estos permanecerán en espacios comunes a la vista o en salones bajo la Regla de Dos Adultos.",
          ],
        },
        {
          number: 56,
          title: "Mecanismo de Consulta Directa Pastoral",
          content: [
            "Cualquier discípulo que se sienta presionado o manipulado por un líder celular tiene el derecho de acudir directamente al pastor de área sin intermediarios.",
          ],
        },
      ],
    },
    {
      number: "15",
      romanNumeral: "XV",
      title: "NORMAS DE SEGURIDAD EN EL TRANSPORTE DE MENORES Y MIEMBROS",
      description: "Regulación de traslados, vehículos, seguros y autorizaciones viales.",
      articles: [
        {
          number: 57,
          title: "Requisitos para Conductores Oficiales",
          content: [
            "Todo conductor que traslade miembros o menores en representación de la iglesia debe poseer licencia de conducir vigente del Estado de New Jersey, récord de manejo limpio y verificación de salvaguardas (REN-FORM-SAFE-007) [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 58,
          title: "Regla de Dos Adultos en Vehículos",
          content: [
            "Se prohíbe que un conductor adulto traslade a solas a un solo menor de edad en un vehículo, debiendo contar con un segundo adulto copiloto o viajar en grupo de varios pasajeros.",
          ],
        },
        {
          number: 59,
          title: "Condiciones de Seguridad y Cinturones Obligatorios",
          content: [
            "Todo pasajero debe utilizar obligatoriamente el cinturón de seguridad individual. Queda terminantemente prohibido sobrecargar la capacidad máxima del vehículo o transportar personas de pie.",
          ],
        },
        {
          number: 60,
          title: "Prohibición de Conducción Bajo Efectos de Sustancias o Fatiga",
          content: [
            "Se prohíbe conducir bajo efectos de alcohol, medicamentos sedantes, fatiga extrema o utilizando dispositivos móviles manualmente mientras el vehículo esté en movimiento.",
          ],
        },
      ],
    },
    {
      number: "16",
      romanNumeral: "XVI",
      title: "SALVAGUARDAS EN ACTIVIDADES FUERA DE LAS INSTALACIONES, CAMPAMENTOS Y RETIROS",
      description: "Protocolos para salidas recreativas, viajes misioneros y hospedajes.",
      articles: [
        {
          number: 61,
          title: "Planificación y Registro de Excursiones y Retiros",
          content: [
            "Toda actividad fuera del templo debe contar con aprobación previa de la Administración, plan de contingencia médica, botiquines y nómina de contactos de emergencia.",
          ],
        },
        {
          number: 62,
          title: "Separación de Dormitorios por Sexo",
          content: [
            "En campamentos y retiros con pernoctación, las áreas de dormitorios y duchas para varones y mujeres estarán estrictamente separadas en edificaciones o alas independientes.",
          ],
        },
        {
          number: 63,
          title: "Prohibición de Adultos Durmiendo en Camas con Menores",
          content: [
            "Queda terminantemente prohibido que líderes o consejeros adultos compartan la misma cama con menores de edad. Los líderes supervisores dormirán en habitaciones contiguas o en camas separadas en salones comunes.",
          ],
        },
        {
          number: 64,
          title: "Ratios de Supervisión en Actividades Exteriores",
          content: [
            "Se mantendrán proporciones adecuadas de líderes adultos por número de jóvenes según la naturaleza del evento [PENDIENTE_DEFINIR ratios específicos].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "17",
      romanNumeral: "XVII",
      title: "SEGURIDAD DIGITAL, REDES SOCIALES Y MENSAJERÍA ELECTRÓNICA",
      description: "Reglas de interacción virtual y protección de menores en internet.",
      articles: [
        {
          number: 65,
          title: "Canales de Comunicación Transparentes y Grupales",
          content: [
            "Las comunicaciones electrónicas (WhatsApp, correo, plataformas educativas) de líderes con menores deben realizarse a través de grupos institucionales donde estén incluidos los padres o un segundo líder adulto.",
          ],
        },
        {
          number: 66,
          title: "Prohibición de Mensajería Privada Aislada con Menores",
          content: [
            "Se prohíbe que líderes adultos mantengan chats privados secretos o llamadas nocturnas individuales con menores sin conocimiento de los padres.",
          ],
        },
        {
          number: 67,
          title: "Tolerancia Cero al Ciberacoso y Contenido Sexual",
          content: [
            "Queda estrictamente prohibido el envío de material sexual explícito (sexting), insinuaciones afectivas o acoso digital. Cualquier hecho se registrará en REN-FORM-SAFE-011 y se reportará de inmediato.",
          ],
        },
        {
          number: 68,
          title: "Seguridad de Claves y Perfiles Institucionales",
          content: [
            "Las cuentas oficiales de redes sociales de la iglesia serán administradas exclusivamente por el equipo de comunicaciones, prohibiéndose el uso de perfiles institucionales para fines privados.",
          ],
        },
      ],
    },
    {
      number: "18",
      romanNumeral: "XVIII",
      title: "POLÍTICA DE FOTOGRAFÍA, VIDEO, TRANSMISIONES Y PROTECCIÓN DE IMAGEN",
      description: "Uso responsable de imagen y resguardo de la privacidad de la niñez.",
      articles: [
        {
          number: 69,
          title: "Consentimiento de Imagen en Transmisiones y Medios",
          content: [
            "La toma de fotografías y grabaciones de video durante cultos y eventos se limitará a fines informativos y de difusión del Evangelio, contando con el consentimiento general [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 70,
          title: "Protección Especial de Menores en Redes Sociales",
          content: [
            "No se publicarán fotografías de niños acompañadas de sus nombres completos, edades, escuelas a las que asisten o domicilios personales.",
          ],
        },
        {
          number: 71,
          title: "Derecho de Exclusión de Imagen de los Padres",
          content: [
            "Los padres que soliciten que sus hijos no aparezcan en transmisiones o fotografías públicas serán ubicados en áreas reservadas del santuario sin exposición a cámaras.",
          ],
        },
        {
          number: 72,
          title: "Prohibición de Tomas Fotográficas Privadas Inapropiadas",
          content: [
            "Queda prohibido tomar fotografías a menores en baños, vestidores o situaciones privadas. El uso no autorizado de cámaras por terceros será intervenido de inmediato.",
          ],
        },
      ],
    },
    {
      number: "19",
      romanNumeral: "XIX",
      title: "RECLUTAMIENTO, SELECCIÓN, VERIFICACIÓN Y ASIGNACIÓN DE VOLUNTARIOS",
      description: "Proceso de admisión de servidores en áreas de niñez y salvaguardas.",
      articles: [
        {
          number: 73,
          title: "Proceso de Selección de Servidores",
          content: [
            "Todo postulante a voluntario en ministerios con menores o personas vulnerables debe completar el formulario REN-FORM-SAFE-008, presentar referencias personales y demostrar membresía activa (REN-DOC-005).",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-006"],
        },
        {
          number: 74,
          title: "Verificación de Antecedentes Penales",
          content: [
            "La corporación implementará la verificación formal de antecedentes criminales y registros de agresores sexuales para todos los servidores con acceso a menores conforme a las leyes de New Jersey [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 75,
          title: "Entrevista Personal y Adhesión al Código de Ética",
          content: [
            "Antes de su asignación formal, el postulante sostendrá una entrevista pastoral y firmará la Declaración de Cumplimiento REN-FORM-SAFE-009.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 76,
          title: "Período de Prueba y Supervisión Continua",
          content: [
            "Los nuevos voluntarios prestarán servicio bajo la supervisión directa de maestros experimentados durante su fase inicial [PENDIENTE_DEFINIR duración del período de prueba].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "20",
      romanNumeral: "XX",
      title: "PROGRAMA INSTITUCIONAL OBLIGATORIO DE CAPACITACIÓN EN SALVAGUARDAS",
      description: "Formación continua de ministros, maestros y líderes.",
      articles: [
        {
          number: 77,
          title: "Obligatoriedad de la Formación en Salvaguardas",
          content: [
            "Todos los pastores, ministros ordenados, licenciados, maestros de escuela dominical, líderes de jóvenes y ujieres deben cursar y aprobar obligatoriamente el Programa de Capacitación en Salvaguardas (REN-FORM-SAFE-010).",
          ],
        },
        {
          number: 78,
          title: "Contenidos Curriculares Mínimos de Formación",
          content: [
            "El programa formativo incluirá: a) Detección de indicadores de abuso físico, emocional y sexual; b) Regla de Dos Adultos; c) Protocolos de denuncia legal; d) Primeros auxilios y RCP básico; e) Prevención de abuso espiritual; y f) Seguridad digital.",
          ],
        },
        {
          number: 79,
          title: "Periodicidad y Recertificación",
          content: [
            "La capacitación se impartirá de forma regular con exámenes de actualización periódica para mantener activa la credencial de servicio [PENDIENTE_DEFINIR frecuencia de recertificación].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 80,
          title: "Registro Histórico de Capacitaciones",
          content: [
            "La Secretaría de Salvaguardas mantendrá el archivo histórico de asistencia y certificados emitidos.",
          ],
        },
      ],
    },
    {
      number: "21",
      romanNumeral: "XXI",
      title: "CLASIFICACIÓN DE INCIDENTES, NIVELES DE GRAVEDAD Y ESCALAMIENTO",
      description: "Matriz de clasificación y tiempos de respuesta institucional.",
      articles: [
        {
          number: 81,
          title: "Categorías de Gravedad de Incidentes",
          content: [
            "Los sucesos se clasifican en: a) Incidente Menor (desacuerdos, caídas leves sin lesión); b) Incidente Serio (conductas inapropiadas, lesiones que requieren atención médica); c) Emergencia (riesgo vital, incendio, evacuación); d) Presunto Abuso Infantil o a Vulnerables; e) Presunto Delito Penal; y f) Riesgo Institucional Grave.",
          ],
        },
        {
          number: 82,
          title: "Matriz de Escalamiento Inmediato",
          content: [
            "Los incidentes menores son resueltos por el líder del área. Los incidentes serios, emergencias y presuntos abusos se escalan de forma inmediata e inaplazable al Oficial de Salvaguardas y al Pastor Fundador.",
          ],
        },
        {
          number: 83,
          title: "Cierre Administrativo y Lecciones Aprendidas",
          content: [
            "Todo incidente cerrado requerirá un dictamen formal con recomendaciones de mejora para prevenir recurrencias.",
          ],
        },
        {
          number: 84,
          title: "Auditoría Anual de Incidentes",
          content: [
            "El Comité de Salvaguardas presentará al Consejo de Gobierno un informe anual estadístico consolidado y anonimizado sobre incidentes y estado de seguridad de las sedes.",
          ],
        },
      ],
    },
    {
      number: "22",
      romanNumeral: "XXII",
      title: "CATÁLOGO OFICIAL DE FORMULARIOS Y DOCUMENTACIÓN DE SALVAGUARDAS",
      description: "Padrón normativo de formatos operativos.",
      articles: [
        {
          number: 85,
          title: "Catálogo Oficial de Doce (12) Formularios",
          content: [
            "Se formaliza la serie oficial: REN-FORM-SAFE-001 a REN-FORM-SAFE-012 para la operación, registro y auditoría del sistema de salvaguardas.",
          ],
        },
        {
          number: 86,
          title: "Estandarización y Uso Obligatorio",
          content: [
            "Queda prohibido el uso de formatos informales o no aprobados para registrar incidentes, autorizaciones parentales o denuncias de abuso.",
          ],
        },
        {
          number: 87,
          title: "Digitalización Segura y Respaldo",
          content: [
            "Todos los formularios físicos serán digitalizados e indexados en el sistema seguro con respaldo en la nube cifrada.",
          ],
        },
        {
          number: 88,
          title: "Actualización Normativa de Formularios",
          content: [
            "Cualquier modificación a los formularios requerirá aprobación del Pastor Fundador y del Comité de Salvaguardas.",
          ],
        },
      ],
    },
    {
      number: "23",
      romanNumeral: "XXIII",
      title: "PROTECCIÓN INTEGRAL A DENUNCIANTES DE BUENA FE (POLÍTICA WHISTLEBLOWER)",
      description: "Garantías incondicionales contra intimidaciones y represalias.",
      articles: [
        {
          number: 89,
          title: "Principio de Inmunidad frente a Represalias",
          content: [
            "Ninguna persona que reporte de buena fe una sospecha de abuso, irregularidad ética o riesgo de seguridad sufrirá represalias, degradación ministerial, expulsión de membresía ni hostigamiento.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 90,
          title: "Confidencialidad de la Identidad del Denunciante",
          content: [
            "La identidad del denunciante se mantendrá en estricta reserva, revelándose únicamente a las autoridades civiles cuando la ley lo exija.",
          ],
        },
        {
          number: 91,
          title: "Sanción Severa ante Actos de Represalia",
          content: [
            "Cualquier ministro o líder que intimide o tome represalias contra un denunciante será destituido de forma fulminante de su cargo.",
          ],
        },
        {
          number: 92,
          title: "Tratamiento de Denuncias Deliberadamente Falsas",
          content: [
            "Una denuncia que no pueda ser comprobada no se presumirá falsa automáticamente. Sin embargo, la formulación deliberada y maliciosa de falsos testimonios con dolo comprobado dará lugar a disciplina conforme a REN-DOC-005.",
          ],
          dependencies: ["REN-DOC-005"],
        },
      ],
    },
    {
      number: "24",
      romanNumeral: "XXIV",
      title: "PRESERVACIÓN DE EVIDENCIA MATERIAL Y DIGITAL ANTE INCIDENTES",
      description: "Custodia de grabaciones, mensajes y documentos relevantes.",
      articles: [
        {
          number: 93,
          title: "Deber de Custodia y No Alteración",
          content: [
            "Al tomar conocimiento de un incidente grave o presunto delito, los administradores asegurarán y preservarán de inmediato grabaciones de cámaras de seguridad, correos electrónicos, bitácoras y registros físicos relevantes.",
          ],
        },
        {
          number: 94,
          title: "Prohibición Absoluta de Destrucción de Pruebas",
          content: [
            "Se prohíbe terminantemente borrar mensajes, destruir documentos o manipular registros para encubrir responsabilidades. Tal conducta constituirá falta ética de máxima gravedad y causal de expulsión inmediata.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 95,
          title: "Entrega Formal a la Autoridad Judicial",
          content: [
            "Toda evidencia requerida por orden judicial o fiscalía será entregada formalmente mediante acta notarial o recibo oficial de entrega.",
          ],
        },
        {
          number: 96,
          title: "Cadena de Custodia Interna",
          content: [
            "La administración llevará un registro de quién accedió, copió o custodió cualquier material sensible relativo a investigaciones de salvaguardas.",
          ],
        },
      ],
    },
    {
      number: "25",
      romanNumeral: "XXV",
      title: "LÍMITES DE LAS EVALUACIONES INTERNAS Y NO OBSTRUCCIÓN DE LA JUSTICIA",
      description: "Delimitación funcional frente a tribunales y agencias estatales.",
      articles: [
        {
          number: 97,
          title: "Límites de la Indagación Eclesiástica",
          content: [
            "Las indagaciones internas de salvaguardas tienen por único fin determinar la idoneidad ministerial del servidor y adoptar medidas cautelares de protección. No determinan culpabilidad penal civil.",
          ],
        },
        {
          number: 98,
          title: "Prohibición de Obstruir la Acción de la Justicia",
          content: [
            "Ningún ministro podrá solicitar a una víctima que retire una denuncia penal o que desista de colaborar con la fiscalía a cambio de promesas de restauración espiritual o ayuda económica.",
          ],
        },
        {
          number: 99,
          title: "Subordinación a Procedimientos Penales en Curso",
          content: [
            "Si una investigación penal civil está en curso, la evaluación interna eclesiástica se coordinará para no entorpecer ni contaminar el proceso judicial del Estado [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 100,
          title: "Respeto a Resoluciones Judiciales",
          content: [
            "La iglesia acatará de forma inmediata cualquier orden de restricción (restraining order) o mandato de alejamiento emitido por tribunales competentes.",
          ],
        },
      ],
    },
    {
      number: "26",
      romanNumeral: "XXVI",
      title: "MEDIDAS PROVISIONALES CAUTELARES Y DEBIDO PROCESO INSTITUCIONAL",
      description: "Separación preventiva de funciones y garantías procesales.",
      articles: [
        {
          number: 101,
          title: "Adopción de Medidas Provisionales Inmediatas",
          content: [
            "Ante una denuncia verosímil de abuso o falta grave, el Pastor Fundador y el Comité de Salvaguardas dispondrán la suspensión preventiva y temporal del denunciado de todo contacto con niños, liderazgo o púlpito.",
          ],
        },
        {
          number: 102,
          title: "Naturaleza No Sancionatoria de la Medida Cautelar",
          content: [
            "La suspensión preventiva es una medida de prudencia y protección incondicional hacia la comunidad y las presuntas víctimas; no constituye de por sí una declaración definitiva de culpabilidad.",
          ],
        },
        {
          number: 103,
          title: "Garantías de Debido Proceso y Derecho de Descargo",
          content: [
            "El ministro o líder suspendido tendrá la oportunidad de presentar sus descargos y elementos probatorios ante el comité evaluador en el momento procesal oportuno.",
          ],
        },
        {
          number: 104,
          title: "Resolución de Cierre del Caso",
          content: [
            "Una vez concluida la evaluación interna y los procesos legales externos pertinentes, se emitirá una resolución formal disponiendo el sobreseimiento o la apertura de juicio disciplinario.",
          ],
        },
      ],
    },
    {
      number: "27",
      romanNumeral: "XXVII",
      title: "ARTICULACIÓN CON DISCIPLINA, RESTAURACIÓN Y NO RESTITUCIÓN AUTOMÁTICA",
      description: "Conexión con REN-DOC-005 y REN-DOC-010 y principio de no retorno automático al cargo.",
      articles: [
        {
          number: 105,
          title: "Articulación con el Manual de Disciplina (REN-DOC-005)",
          content: [
            "En caso de comprobarse abuso, negligencia grave o falta ética de salvaguardas, el caso se remitirá al Consejo de Gobierno y Pastor Fundador para la aplicación de sanciones disciplinarias bajo REN-DOC-005.",
          ],
          dependencies: ["REN-DOC-005"],
        },
        {
          number: 106,
          title: "El Perdón Espiritual no Suprime la Responsabilidad Legal ni Ministerial",
          content: [
            "El perdón cristiano concedido por Dios ante el arrepentimiento genuino sana la condición espiritual del pecador, pero no borra las consecuencias jurídicas, civiles ni cancela la inhabilitación para el liderazgo pastoral.",
          ],
          dependencies: ["REN-DOC-010", "REN-DOC-011"],
        },
        {
          number: 107,
          title: "Prohibición de Restitución Automática al Ministerio con Menores",
          content: [
            "Toda persona que haya incurrido en abuso sexual de menores o conductas delictivas graves quedará inhabilitada de forma permanente y perpetua para ejercer funciones pastorales, docencia o servicio en áreas que involucren a la niñez.",
          ],
        },
        {
          number: 108,
          title: "Acompañamiento Espiritual de Restauración",
          content: [
            "El proceso de restauración pastoral buscará la reconciliación con Dios y la sanidad personal del individuo, manteniéndose siempre las medidas de protección y seguridad de la comunidad.",
          ],
        },
      ],
    },
    {
      number: "28",
      romanNumeral: "XXVIII",
      title: "LÍMITES DE AUTORIDAD MINISTERIAL Y PROHIBICIÓN DE CONTROL SOBRE VIDAS PRIVADAS",
      description: "Salvaguarda contra la extralimitación pastoral y el autoritarismo eclesiástico.",
      articles: [
        {
          number: 109,
          title: "Límites Claros de la Autoridad Pastoral",
          content: [
            "La autoridad del ministro es espiritual y de servicio (1 Pedro 5:2-3). No confiere facultades de control civil, laboral, conyugal ni financiero sobre los miembros.",
          ],
          dependencies: ["REN-DOC-004", "REN-DOC-006"],
        },
        {
          number: 110,
          title: "Prohibición de Invasión a la Autonomía Médica y Sanitaria",
          content: [
            "Ningún pastor o líder podrá prohibir a un miembro congregacional acudir al médico, someterse a cirugías o tomar medicamentos prescritos.",
          ],
        },
        {
          number: 111,
          title: "Prohibición de Imposición Marital y Relaciones Afectivas",
          content: [
            "Los pastores no concertarán matrimonios obligatorios ni forzarán rupturas conyugales legítimas bajo pretexto de revelaciones o visiones espirituales.",
          ],
        },
        {
          number: 112,
          title: "Libertad de Conciencia y Voto Ciudadano",
          content: [
            "Se respeta la libertad de conciencia, empleo, residencia y voto cívico de todos los creyentes sin interferencias autoritarias.",
          ],
        },
      ],
    },
    {
      number: "29",
      romanNumeral: "XXIX",
      title: "PRIVACIDAD DE DATOS SENSIBLES, HISTORIAL DE SALVAGUARDAS Y CONTROL RBAC",
      description: "Protección de datos personales, expedientes médicos y control server-side.",
      articles: [
        {
          number: 113,
          title: "Clasificación de la Información de Salvaguardas como Confidencial Restringida",
          content: [
            "Todos los expedientes de denuncias, reportes de abuso, historiales médicos y fichas de menores son información de máxima confidencialidad.",
          ],
        },
        {
          number: 114,
          title: "Control de Acceso Basado en Roles (RBAC Server-Side)",
          content: [
            "El acceso digital a estos registros está restringido a nivel de servidor exclusivamente a los roles autorizados (ADMINISTRADOR, PASTOR_FUNDADOR, COMITE_SALVAGUARDAS), bloqueando el acceso para MIEMBRO, LÍDER o SOLO_LECTURA.",
          ],
        },
        {
          number: 115,
          title: "Exclusión de Datos Sensibles de Motores de Búsqueda Públicos",
          content: [
            "Los nombres de víctimas, detalles de denuncias y reportes confidenciales no serán indexados en motores de búsqueda generales ni accesibles vía IA para usuarios no autorizados.",
          ],
        },
        {
          number: 116,
          title: "Auditoría de Accesos al Archivo de Salvaguardas",
          content: [
            "El sistema registrará automáticamente cada consulta, descarga o modificación realizada sobre expedientes confidenciales de protección.",
          ],
        },
      ],
    },
    {
      number: "30",
      romanNumeral: "XXX",
      title: "PÓLIZAS DE SEGURO CORPORATIVO, RESPONSABILIDAD CIVIL Y ASESORÍA LETRADA",
      description: "Protección patrimonial, seguros institucionales y revisión letrada periódica.",
      articles: [
        {
          number: 117,
          title: "Pólizas de Seguro de Responsabilidad General e Institucional",
          content: [
            "RENACER CHURCH, INC. mantendrá vigentes pólizas de seguro comerciales adecuadas para proteger sus actividades, voluntarios y participantes ante eventuales siniestros [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 118,
          title: "Cobertura de Responsabilidad Civil Pastoral y Consejería",
          content: [
            "Se procurarán coberturas específicas de responsabilidad civil ministerial para actos de consejería y cuidado pastoral.",
          ],
        },
        {
          number: 119,
          title: "Asesoría Jurídica Colegiada Permanente",
          content: [
            "La corporación contará con el dictamen de abogados habilitados en New Jersey para la revisión periódica de protocolos de salvaguardas y contratos de seguro.",
          ],
        },
        {
          number: 120,
          title: "Inspecciones de Seguridad Edilicia y Cumplimiento Normativo",
          content: [
            "Las sedes se someterán a revisiones anuales de seguridad, sistemas de extinción de incendios y señalética.",
          ],
        },
      ],
    },
    {
      number: "31",
      romanNumeral: "XXXI",
      title: "QUEJAS, DENUNCIAS Y PROCEDIMIENTOS CONTRA MINISTROS Y PASTOR FUNDADOR",
      description: "Canales de reporte institucional imparcial y ausencia de inmunidad personal.",
      articles: [
        {
          number: 121,
          title: "Principio de Imparcialidad y Nadie es Juez de su Propia Causa",
          content: [
            "Cualquier queja o denuncia contra un pastor, ministro, directivo o líder de área será tramitada garantizando que el denunciado no ejerza autoridad sobre el comité evaluador.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 122,
          title: "Procedimiento Específico ante Quejas contra el Pastor Fundador",
          content: [
            "Se preserva la autoridad doctrinal e histórica del Pastor Fundador conforme a la Constitución (REN-DOC-002); no obstante, dicha autoridad no confiere inmunidad personal frente a denuncias de presuntos abusos o delitos civiles (DEC-DEF-004).",
            "Ante una denuncia formal de salvaguardas contra el Pastor Fundador, el Comité de Ética y Salvaguardas, en consulta con la asesoría legal externa, activará los protocolos correspondientes y la notificación a autoridades competentes.",
          ],
          dependencies: ["DEC-DEF-004", "REN-DOC-002", "REN-DOC-011"],
        },
        {
          number: 123,
          title: "Canal Independiente de Escalación",
          content: [
            "Los miembros y víctimas tienen la plena libertad de presentar denuncias directamente ante autoridades civiles o a través del canal confidencial seguro.",
          ],
        },
        {
          number: 124,
          title: "Transparencia Institucional sin Difamación",
          content: [
            "La resolución de casos de alto impacto se comunicará a la congregación con prudencia y respeto a la verdad, evitando tanto el encubrimiento como el escándalo innecesario.",
          ],
        },
      ],
    },
    {
      number: "32",
      romanNumeral: "XXXII",
      title: "ARCHIVO DOCUMENTAL, REVISIÓN PERIÓDICA, CLÁUSULA DE NO ADOPCIÓN Y DISPOSICIONES FINALES",
      description: "Custodia permanente con REN-DOC-019, estado de borrador y vigencia estatutaria.",
      articles: [
        {
          number: 125,
          title: "Custodia y Archivo Permanente con REN-DOC-019",
          content: [
            "Todos los expedientes de salvaguardas, actas de incidentes y autorizaciones parentales se conservarán de forma protegida bajo el Reglamento de Archivo y Registros (REN-DOC-019) [PENDIENTE_DEFINIR plazos de retención documental].",
          ],
          dependencies: ["REN-DOC-019"],
          isPendingDefinition: true,
        },
        {
          number: 126,
          title: "Revisión Anual del Sistema de Salvaguardas",
          content: [
            "El presente manual será revisado anualmente para incorporar lecciones aprendidas y actualizaciones legales de New Jersey.",
          ],
        },
        {
          number: 127,
          title: "Cláusula Formal de No Adopción y Estado de Borrador",
          content: [
            "El presente Manual Oficial de Protección, Seguridad y Salvaguardas (REN-DOC-014) se expide formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION.",
            "Su adopción oficial requerirá la ratificación solemne del Pastor Fundador y el dictamen letrado colegiado.",
          ],
        },
        {
          number: 128,
          title: "Cláusula de Entrada en Vigencia y Supremacía Estatutaria",
          content: [
            "Una vez adoptado formalmente, este manual regirá con fuerza obligatoria en todas las sedes y ministerios de RENACER CHURCH, INC.",
            "En caso de contradicción entre este Manual y los Bylaws o la Constitución, prevalecerán en todo momento estos últimos.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
      ],
    },
  ],
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-014
 */
export function generateFullSafetyManualMarkdown(): string {
  const d = SAFETY_MANUAL_DRAFT;

  let md = `# ${d.title}\n\n`;
  md += `**Código:** ${d.documentNumber} | **Versión:** ${d.version} | **Nivel:** ${d.hierarchyLevel}\n`;
  md += `**Categoría:** ${d.category} | **Subcategoría:** ${d.subcategory}\n`;
  md += `**DocumentState:** ${d.documentState} | **DecisionState:** ${d.decisionState} | **Adoption:** ${d.adoptionState}\n`;
  md += `**LegalState:** ${d.legalState} | **Área Responsable:** ${d.responsibleArea}\n`;
  md += `**Autor:** ${d.author} | **Autoridad de Aprobación:** ${d.approvalAuthority}\n\n`;
  md += `> [!IMPORTANT]\n`;
  md += `> **BORRADOR — NO ADOPTADO**\n`;
  md += `> **REQUIERE REVISIÓN LEGAL**\n`;
  md += `> El presente manual no sustituye asesoramiento legal o médico profesional ni reemplaza las obligaciones legales vigentes en el Estado de New Jersey.\n\n`;

  md += `## RESUMEN EJECUTIVO\n\n${d.pithySummary}\n\n`;

  md += `## PREÁMBULO TEOLÓGICO Y PASTORAL\n\n${d.preamble}\n\n`;

  md += `## PRINCIPIO INSTITUCIONAL FUNDAMENTAL\n\n`;
  md += `La dignidad, integridad y seguridad de las personas prevalecen sobre cualquier consideración de jerarquía, celo institucional o secreto pastoral. Ninguna doctrina, mediación interna o confidencialidad podrá ser utilizada jamás para encubrir presuntos delitos, impedir denuncias civiles o evitar el auxilio médico y policial inmediato.\n\n`;

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
        md += `*Vínculos y Dependencias:* ${art.dependencies.join(", ")}\n\n`;
      }

      if (art.requiresLegalReview) {
        md += `> [!WARNING]\n> **Nota de Revisión Especial:** Este artículo contiene materias sujetas a dictamen profesional de abogados habilitados en New Jersey [REQUIERE_REVISION_LEGAL].\n\n`;
      }

      if (art.isPendingDefinition) {
        md += `> [!NOTE]\n> **Parámetro Pendiente:** Criterio o umbral cuantitativo [PENDIENTE_DEFINIR].\n\n`;
      }
    });

    md += `---\n\n`;
  });

  // Catálogo de Formularios
  md += `## CATÁLOGO OFICIAL DE FORMULARIOS DE SALVAGUARDAS Y SEGURIDAD\n\n`;
  md += `Se establece el siguiente padrón oficial de doce (12) formularios de seguridad para la operatividad de REN-DOC-014:\n\n`;
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
    md += `- \`${dec}\`: Vinculada en las disposiciones de protección, dignidad humana, gobierno, igualdad y salvaguardas.\n`;
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
