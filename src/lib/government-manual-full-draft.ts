import {
  MasterGovernmentManualDocument,
  ManualTitle,
  ManualSection,
  ResponsibilityMatrixRow,
  DecisionWorkflow,
} from "@/types/government-manual";

export const FULL_GOVERNMENT_MANUAL_DRAFT: MasterGovernmentManualDocument = {
  documentNumber: "REN-DOC-004",
  title: "MANUAL DE GOBIERNO DE RENACER",
  subtitle: "Guía Operativa, Funcional, Fiduciaria y Administrativa del Gobierno Institucional",
  organization: "RENACER CHURCH, INC.",
  publicName: "RENACER CHURCH",
  founder: "Luis Uchubanda Falconí",
  version: "0.1",
  status: "EN_REDACCION",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  legalNotice:
    "BORRADOR EN REDACCIÓN — DOCUMENTO NO ADOPTADO. Este Manual Operativo Institucional se subordina jerárquicamente a la Ley civil aplicable, al Certificate of Incorporation, a los Bylaws de RENACER CHURCH, INC. (REN-DOC-003) y a la Constitución de RENACER (REN-DOC-002). Requiere revisión legal calificada previa a su adopción formal.",

  preamble: {
    title: "PROPÓSITO OPERATIVO Y FUNDAMENTO DEL GOBIERNO INSTITUCIONAL",
    content:
      "El presente Manual de Gobierno tiene por objeto normar, ordenar y operativizar el funcionamiento cotidiano del gobierno institucional de RENACER CHURCH. Establece de manera transparente quién toma las decisiones, qué competencias posee cada órgano, cómo se convocan y ejecutan las sesiones, cómo se previenen los conflictos de interés y cómo se protege simultáneamente la autoridad espiritual-doctrinal del Pastor Fundador y la integridad fiduciaria corporativa del Board of Trustees ante las leyes de New Jersey y los estándares del IRS.",
  },

  responsibilityMatrix: [
    {
      materia: "Doctrina y Declaración de Fe (20 Artículos)",
      pastorFundador: "Autoridad final, exclusiva y privativa de reforma",
      consejoGobierno: "Sin competencia doctrinal (deber de subordinación fiduciaria)",
      consejoMinisterial: "Custodia pastoral y consulta teológica",
      asambleaGeneral: "Sin competencia sobre la doctrina",
      fundamento: "DEC-DEF-005, DEC-DEF-021, REN-DOC-001, REN-DOC-002 Art. 8",
    },
    {
      materia: "Visión y Dirección Espiritual Institucional",
      pastorFundador: "Conducción principal, visión y magisterio nato",
      consejoGobierno: "Apoyo fiduciario y ejecución administrativa",
      consejoMinisterial: "Acompañamiento ministerial y pastoreo",
      asambleaGeneral: "Recepción, respaldo y participación espiritual",
      fundamento: "DEC-DEF-004, DEC-DEF-008, REN-DOC-002 Art. 12",
    },
    {
      materia: "Selección de Consejeros de Gobierno (Trustees)",
      pastorFundador: "Paso 1: Nominación y propuesta exclusiva",
      consejoGobierno: "Paso 2: Evaluación formal de idoneidad ética/legal",
      consejoMinisterial: "Sin intervención fiduciaria directa",
      asambleaGeneral: "Paso 3: Confirmación por mayoría simple",
      fundamento: "DEC-DEF-006, DEC-DEF-009, REN-DOC-003 Art. 21",
    },
    {
      materia: "Presupuesto Operativo y Finanzas Ordinarias",
      pastorFundador: "Supervisión general y presidencia nata",
      consejoGobierno: "Aprobación formal por mayoría simple de quórum",
      consejoMinisterial: "Propuesta de necesidades departamentales",
      asambleaGeneral: "Recepción de informe financiero anual",
      fundamento: "DEC-DEF-018, DEC-DEF-023, REN-DOC-003 Art. 24 y 35",
    },
    {
      materia: "Materias Extraordinarias (Inmuebles, Préstamos, Gravámenes)",
      pastorFundador: "Consentimiento explícito y por escrito obligatorio",
      consejoGobierno: "Aprobación por mayoría calificada de 2/3",
      consejoMinisterial: "Consulta no vinculante si afecta sedes",
      asambleaGeneral: "Informativa conforme a estatutos (sin voto resolutivo salvo mandato legal expreso)",
      fundamento: "DEC-DEF-006, DEC-PEND-003, REN-DOC-003 Art. 25 y 26",
    },
    {
      materia: "Licenciamiento y Ordenación de Ministros",
      pastorFundador: "Imposición solemne de manos y aprobación final",
      consejoGobierno: "Verificación de contratación/compensación si aplica",
      consejoMinisterial: "Evaluación teológica, examen y recomendación",
      asambleaGeneral: "Sin voto en credenciales eclesiales",
      fundamento: "DEC-DEF-014, DEC-DEF-015, DEC-DEF-016, REN-DOC-002 Art. 32",
    },
    {
      materia: "Disciplina y Restauración Ministerial",
      pastorFundador: "Dirección del proceso y resolución final solemne",
      consejoGobierno: "Intervención fiduciaria si compromete patrimonio",
      consejoMinisterial: "Comisión pastoral de acompañamiento y debido proceso",
      asambleaGeneral: "Confidencialidad absoluta; sin juicio asambleario",
      fundamento: "DEC-DEF-019, DEC-DEF-020, REN-DOC-002 Art. 42 y 43",
    },
    {
      materia: "Padrón y Habilitación de Membresía con Voto",
      pastorFundador: "Supervisión de admisión pastoral y bautismos",
      consejoGobierno: "Custodia administrativa del padrón oficial",
      consejoMinisterial: "Discipulado y formación de nuevos miembros",
      asambleaGeneral: "Conformada por los miembros activos acreditados",
      fundamento: "DEC-DEF-012, DEC-DEF-013, REN-DOC-003 Art. 5 a 8",
    },
    {
      materia: "Sucesión Pastoral (con designación previa)",
      pastorFundador: "Designación exclusiva por escrito mientras conserve capacidad",
      consejoGobierno: "Formalización fiduciaria y transición civil",
      consejoMinisterial: "Consagración espiritual del sucesor",
      asambleaGeneral: "Recepción en culto solemne (sin votación)",
      fundamento: "DEC-DEF-004, DEC-DEF-008, REN-DOC-002 Art. 45, REN-DOC-003 Art. 54",
    },
    {
      materia: "Sucesión Pastoral (vacancia imprevista sin designación)",
      pastorFundador: "No aplicable por vacancia/incapacidad",
      consejoGobierno: "Comisión Conjunta: Voto unánime indispensable",
      consejoMinisterial: "Comisión Conjunta: Voto unánime indispensable",
      asambleaGeneral: "Sin ratificación asamblearia (decisión definitiva de Comisión Conjunta)",
      fundamento: "DEC-DEF-008, DEC-PEND-001, REN-DOC-002 Art. 45, REN-DOC-003 Art. 55",
    },
    {
      materia: "Reformas a los Bylaws Corporativos (REN-DOC-003)",
      pastorFundador: "Consentimiento explícito y por escrito obligatorio",
      consejoGobierno: "Aprobación por mayoría calificada de 2/3",
      consejoMinisterial: "Sin intervención fiduciaria directa",
      asambleaGeneral: "Informativo ante la Asamblea ordinaria",
      fundamento: "DEC-PEND-006, REN-DOC-003 Art. 57",
    },
    {
      materia: "Disolución Corporativa y Destino de Activos",
      pastorFundador: "Subordinación a cláusula no lucrativa federal",
      consejoGobierno: "Liquidación y transferencia a entidad 501(c)(3) cristiana",
      consejoMinisterial: "Acompañamiento en el cierre ministerial",
      asambleaGeneral: "Notificación formal de liquidación",
      fundamento: "DEC-DEF-001, DEC-PEND-009, REN-DOC-002 Art. 48, REN-DOC-003 Art. 60 y 61",
    },
  ],

  decisionWorkflows: [
    {
      id: "WORKFLOW-A",
      name: "Flujo A: Adopción de Decisión Ordinaria del Consejo de Gobierno",
      description: "Trámite regular para aprobación presupuestaria ordinaria, contrataciones estándar y supervisión operativa.",
      decisionLevel: "ORDINARIA",
      steps: [
        "1. Inclusión del punto en el Orden del Día por el Secretario con la antelación razonable establecida por los reglamentos aplicables.",
        "2. Remisión de antecedentes financieros o fiduciarios a todos los Consejeros.",
        "3. Verificación de quórum legal (3 consejeros -> 2 presentes; 4 o 5 consejeros -> 3 presentes).",
        "4. Declaración obligatoria de abstención si existe conflicto de interés de algún consejero.",
        "5. Deliberación técnica y votación por mayoría simple de los presentes.",
        "6. Asentamiento en Acta oficial firmada por Presidente y Secretario Corporativo.",
      ],
    },
    {
      id: "WORKFLOW-B",
      name: "Flujo B: Decisión Extraordinaria Fiduciaria (Inmuebles, Deudas, Gravámenes)",
      description: "Procedimiento calificado para compras de bienes raíces, préstamos bancarios, hipotecas o gastos fuera de presupuesto.",
      decisionLevel: "EXTRAORDINARIA",
      steps: [
        "1. Elaboración del estudio fiduciario de viabilidad financiera y dictamen legal calificado en New Jersey.",
        "2. Convocatoria formal extraordinaria con la antelación debida establecida estatutariamente y entrega del expediente.",
        "3. Verificación de quórum fiduciario del Consejo de Gobierno.",
        "4. Votación nominal con exigencia de dos tercios (2/3) de los votos afirmativos del Consejo.",
        "5. Emisión del Consentimiento Formal por Escrito firmado por el Pastor Fundador.",
        "6. Formalización y registro corporativo conforme a los requisitos legales y estatutarios aplicables en New Jersey.",
      ],
    },
    {
      id: "WORKFLOW-C",
      name: "Flujo C: Proceso de Selección de Consejeros de Gobierno en Tres Pasos",
      description: "Mecanismo estatutario inmutable para renovar o cubrir vacantes en el Board of Trustees.",
      decisionLevel: "CONSTITUCIONAL",
      steps: [
        "1. PASO 1 (Nominación): El Pastor Fundador propone por escrito a los candidatos idóneos (1 Timoteo 3, 2 años de membresía).",
        "2. PASO 2 (Evaluación): El Consejo de Gobierno en funciones audita antecedentes, solvencia moral y ausencia de conflictos.",
        "3. Emisión de dictamen favorable de idoneidad fiduciaria por el Consejo.",
        "4. PASO 3 (Confirmación): Presentación de la candidatura ante la Asamblea General ordinaria.",
        "5. Votación de confirmación por mayoría simple de los miembros activos presentes con derecho a voto.",
        "6. Juramentación fiduciaria e inscripción en el libro corporativo de Trustees.",
      ],
    },
    {
      id: "WORKFLOW-D",
      name: "Flujo D: Convocatoria, Celebración y Actas de la Asamblea General",
      description: "Protocolo para la reunión de los miembros activos de la congregación.",
      decisionLevel: "ORDINARIA",
      steps: [
        "1. Emisión de convocatoria formal por el Pastor Fundador y el Secretario con la antelación estatutaria correspondiente conforme a los Bylaws y leyes aplicables.",
        "2. Publicación de la fecha, hora, lugar y Orden del Día en los medios institucionales autorizados.",
        "3. Cierre y emisión del Padrón Oficial de Miembros Activos con derecho a voto (mayores de 18 años).",
        "4. Verificación de quórum a la hora señalada (50% de los miembros registrados en el Padrón).",
        "5. Desarrollo de la agenda, debate ordenado y votación (mayoría simple para ordinarias, 2/3 para extraordinarias).",
        "6. Levantamiento y firma del Acta Asamblearia con lista de asistencia verificada.",
      ],
    },
    {
      id: "WORKFLOW-E",
      name: "Flujo E: Acreditación, Licenciamiento y Ordenación Ministerial",
      description: "Procedimiento espiritual y curricular para conferir credenciales del ministerio.",
      decisionLevel: "MINISTERIAL",
      steps: [
        "1. Postulación del candidato con título o constancia de egreso del Seminario Bíblico RENACER o formación teológica equivalente.",
        "2. Apertura del expediente ministerial y examen doctrinal por el Consejo Ministerial.",
        "3. Evaluación de testimonio ético, vida familiar irreprensible y respaldo ministerial de base.",
        "4. Emisión de recomendación favorable unánime por el Consejo Ministerial al Pastor Fundador.",
        "5. Aprobación y decreto solemne de ordenación por el Pastor Fundador.",
        "6. Ceremonia pública de imposición de manos y entrega de Credencial Ministerial Oficial.",
      ],
    },
    {
      id: "WORKFLOW-F",
      name: "Flujo F: Gestión de Conflictos Institucionales y Mediación Bíblica",
      description: "Proceso restaurador para controversias entre miembros o líderes según Mateo 18.",
      decisionLevel: "MINISTERIAL",
      steps: [
        "1. Nivel 1 (Diálogo Privado): Conversación directa entre las partes con espíritu de mansedumbre.",
        "2. Nivel 2 (Acompañamiento): Intervención del Líder de Área o Supervisor como facilitador imparcial.",
        "3. Nivel 3 (Mediación Ministerial): Audiencia ante una comisión del Consejo Ministerial con debido proceso.",
        "4. Suscripción de Acta de Conciliación y plan pastoral de restauración mutua.",
        "5. Cláusula de Salvaguarda: Si el conflicto involucra presuntos delitos o abusos, se activa la denuncia penal inmediata ante las autoridades civiles.",
      ],
    },
    {
      id: "WORKFLOW-G",
      name: "Flujo G: Protocolo ante Incapacidad Médica Calificada del Pastor Fundador",
      description: "Activación del gobierno provisional en estricta sujeción al marco constitucional y reserva legal de DEC-PEND-001.",
      decisionLevel: "CONSTITUCIONAL",
      steps: [
        "1. Evaluación y emisión de dictamen médico formal e independiente por profesionales legalmente calificados.",
        "2. Sesión conjunta de emergencia del Consejo de Gobierno y el Consejo Ministerial.",
        "3. Declaración formal de incapacidad temporal o definitiva y registro en acta fiduciaria.",
        "4. Asunción de la conducción interina colegiada por ambos Consejos para mantener la marcha de la Iglesia.",
        "5. Ejecución de directivas fiduciarias conforme a DEC-PEND-001 y las leyes de New Jersey.",
      ],
    },
    {
      id: "WORKFLOW-H",
      name: "Flujo H: Transición y Sucesión Pastoral Institucional",
      description: "Consagración de la continuidad de liderazgo sin vacíos de autoridad conforme a REN-DOC-002.",
      decisionLevel: "CONSTITUCIONAL",
      steps: [
        "1. Verificación de la designación sucesoria por escrito dejada por el Pastor Fundador.",
        "2. Si existe designación válida: Apertura formal del pliego por el Consejo de Gobierno y ratificación solemne.",
        "3. Si hay vacancia imprevista sin designación: Convocatoria de la Comisión Conjunta (Gobierno + Ministerial).",
        "4. Deliberación espiritual y votación unánime de la Comisión Conjunta sobre el sucesor calificado.",
        "5. Notificación formal y proclamación en Culto Solemne de Instalación (sin votación asamblearia).",
        "6. Notificación civil y actualización de registros corporativos ante el Estado de New Jersey.",
      ],
    },
    {
      id: "WORKFLOW-I",
      name: "Flujo I: Enmienda y Reforma de Instrumentos Normativos",
      description: "Descripción de los procedimientos estatutarios de reforma establecidos por la Constitución y los Bylaws.",
      decisionLevel: "CONSTITUCIONAL",
      steps: [
        "1. Presentación de la propuesta fundamentada por el Consejo de Gobierno o el Pastor Fundador.",
        "2. Verificación de armonización estricta con la Declaración de Fe (REN-DOC-001) y la Constitución (REN-DOC-002).",
        "3. Revisión legal obligatoria en materias civiles, fiscales o fiduciarias.",
        "4. Aprobación por dos tercios (2/3) del Consejo de Gobierno con consentimiento explícito del Pastor Fundador.",
        "5. Publicación en el catálogo documental institucional y emisión de la nueva versión semántica.",
      ],
    },
  ],

  titles: [
    {
      titleNumber: 1,
      romanNumeral: "TÍTULO I",
      title: "PROPÓSITO, ALCANCE Y PRINCIPIOS DE GOBIERNO INSTITUCIONAL",
      summary: "Objetivo práctico del manual, ámbito de aplicación, subordinación legal y principios rectores.",
      sections: [
        {
          sectionNumber: "1.1",
          title: "Objetivo y Función Operativa del Manual",
          summary: "Fijar el propósito del manual como guía práctica para el funcionamiento institucional.",
          content:
            "El presente Manual de Gobierno constituye la guía técnica, operativa y funcional que describe cómo se administra, lidera y supervisa RENACER CHURCH. Su finalidad es proporcionar a líderes, ministros, consejeros y miembros una comprensión exacta, transparente y ordenada del ejercicio de la autoridad, la toma de decisiones y los canales institucionales.",
          practicalProtocol:
            "Todo nuevo miembro del Consejo de Gobierno, del Consejo Ministerial o líder de área recibirá una copia íntegra de este manual durante su proceso de inducción y firmará constancia de conocimiento.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-006", "DEC-DEF-236"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "1.2",
          title: "Ámbito de Aplicación y Sujetos Obligados",
          summary: "Definir los órganos, oficiales, ministros y líderes bajo el alcance del manual.",
          content:
            "Las disposiciones de este manual son de observancia obligatoria para: (a) El Pastor Fundador y pastores asociados; (b) Los Fideicomisarios integrantes del Consejo de Gobierno (Board of Trustees); (c) Los ministros del Consejo Ministerial; (d) Los oficiales corporativos ejecutivos; (e) Los directores de departamentos, supervisores y líderes de Familias de Grupo; (f) La Asamblea General en el ejercicio de sus atribuciones.",
          practicalProtocol:
            "Ningún líder u oficial podrá alegar desconocimiento de las normas de este manual para justificar actos fuera de sus competencias reglamentadas.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-014", "DEC-DEF-017"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "1.3",
          title: "Principio de Subordinación y Prevalencia Normativa",
          summary: "Establecer la jerarquía documental en caso de contradicción normativa.",
          content:
            "Este manual se encuentra estrictamente subordinado a los instrumentos superiores. En caso de discrepancia o conflicto normativo, prevalecerá el siguiente orden de jerarquía: 1. Leyes civiles y fiscales aplicables; 2. Articles of Incorporation; 3. Bylaws de RENACER CHURCH, INC. (REN-DOC-003); 4. Constitución de RENACER (REN-DOC-002); 5. Declaración de Fe y Doctrina (REN-DOC-001); 6. El presente Manual de Gobierno (REN-DOC-004).",
          practicalProtocol:
            "Cualquier disposición de este manual que contradiga un documento superior queda automáticamente sin efecto fiduciario ni eclesial.",
          decisionIds: ["DEC-PEND-006", "DEC-DEF-236", "DEC-DEF-250"],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Asegurar que la subordinación a las leyes de New Jersey se mantenga inalterada en todas las actuaciones corporativas.",
        },
      ],
    },
    {
      titleNumber: 2,
      romanNumeral: "TÍTULO II",
      title: "ARQUITECTURA INSTITUCIONAL Y DISTINCIÓN DE COMPETENCIAS",
      summary: "Estructura orgánica de RENACER, separación de funciones y prohibición de concentración absolutista.",
      sections: [
        {
          sectionNumber: "2.1",
          title: "Los Cuatro Pilares del Gobierno Institucional",
          summary: "Definir los cuatro ámbitos diferenciados de autoridad y servicio en la Iglesia.",
          content:
            "El gobierno de RENACER no se organiza como una pirámide de poder arbitrario, sino como una arquitectura funcional basada en cuatro pilares complementarios: (1) Autoridad Espiritual y Magisterio Doctrinal (Pastor Fundador); (2) Gobierno Fiduciario y Administración Patrimonial (Consejo de Gobierno / Board of Trustees); (3) Supervisión Teológica y Acompañamiento Pastoral (Consejo Ministerial); (4) Participación y Respaldo Congregacional (Asamblea General).",
          practicalProtocol:
            "Cada órgano opera dentro de sus competencias estatutarias sin invadir las facultades reservadas a los demás órganos.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-005", "DEC-DEF-006", "DEC-DEF-010", "DEC-DEF-014"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "2.2",
          title: "Naturaleza del Liderazgo de Discipulado vs. Control Privado",
          summary: "Definir la estructura de cuidado pastoral y prohibir el control de la vida personal.",
          content:
            "La estructura pastoral que fluye desde el Pastor a los Líderes de Área, Supervisores, Familias de Grupo y Discípulos tiene una naturaleza exclusivamente espiritual, formativa y de cuidado fraternal. No constituye una jerarquía de dominación ni confiere autoridad sobre las decisiones privadas, civiles, laborales o médicas de los miembros.",
          practicalProtocol:
            "Queda terminantemente prohibido a todo líder: fiscalizar finanzas privadas ajenas a la mayordomía voluntaria, imponer directivas sobre matrimonios o noviazgos, interferir en decisiones médicas o profesionales, y exigir sumisión personal incondicional.",
          decisionIds: ["DEC-DEF-018", "DEC-DEF-020", "DEC-DEF-218"],
          dependencies: ["REN-DOC-002", "REN-DOC-011"],
        },
      ],
    },
    {
      titleNumber: 3,
      romanNumeral: "TÍTULO III",
      title: "EL PASTOR FUNDADOR: FUNCIONES OPERATIVAS Y LÍMITES",
      summary: "Magisterio pastoral, visión ministerial, presidencia nata y facultades fiduciarias regladas.",
      sections: [
        {
          sectionNumber: "3.1",
          title: "Funciones y Deberes Cotidianos del Pastor Fundador",
          summary: "Operativizar el rol del Pastor Fundador en la conducción de la Iglesia.",
          content:
            "El Pastor Fundador ejerce la presidencia espiritual y el magisterio de la Iglesia, siendo responsable de: (a) Ministrar la Palabra de Dios y custodiar la ortodoxia de la fe; (b) Trazar la visión misionera, evangelística y formativa; (c) Presidir de forma nata el Consejo de Gobierno y las Asambleas Generales; (d) Nominar a los candidatos a Consejeros de Gobierno; (e) Emitir el consentimiento formal en materias extraordinarias.",
          practicalProtocol:
            "El Pastor Fundador ejerce sus funciones con apego a las Escrituras, la Constitución y los presentes manuales, rindiendo testimonio ético e intachable ante la congregación.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-005", "DEC-DEF-008", "DEC-DEF-009"],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "3.2",
          title: "Límites Institucionales del Liderazgo Pastoral",
          summary: "Blindar a la corporación contra la confusión patrimonial o la arbitrariedad.",
          content:
            "La autoridad del Pastor Fundador no implica propiedad personal sobre los activos de la Iglesia ni facultad para disponer de fondos corporativos sin respaldo fiduciario. Todos los recursos, cuentas bancarias e inmuebles pertenecen a RENACER CHURCH, INC., y cualquier desembolso extraordinario requiere la concurrencia formal del Consejo de Gobierno.",
          practicalProtocol:
            "Los gastos pastorales deben estar contemplados en el presupuesto anual o contar con la aprobación fiduciaria correspondiente.",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-018", "DEC-PEND-003"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Asegurar que la separación patrimonial cumpla los estándares de exención fiscal federal IRC § 501(c)(3).",
        },
      ],
    },
    {
      titleNumber: 4,
      romanNumeral: "TÍTULO IV",
      title: "EL CONSEJO DE GOBIERNO (BOARD OF TRUSTEES)",
      summary: "Operación del órgano fiduciario, 3 a 5 miembros, mandato de 2 años y tabla de quórum exacto.",
      sections: [
        {
          sectionNumber: "4.1",
          title: "Composición y Perfil Fiduciario de los Trustees",
          summary: "Estructura del Board of Trustees y requisitos de calificación.",
          content:
            "El Consejo de Gobierno actúa como el Board of Trustees legal de la corporación. Se compone de un mínimo de tres (3) y un máximo de cinco (5) miembros activos de probada solvencia moral, mayordomía intachable y al menos dos (2) años de membresía ininterrumpida, elegidos por períodos de dos (2) años mediante el proceso de tres pasos.",
          practicalProtocol:
            "Los miembros del Consejo ejercen deber fiduciario de cuidado y lealtad exclusiva a los fines no lucrativos de RENACER CHURCH, INC.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-007", "DEC-PEND-002"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Verificar cumplimiento del número de Trustees bajo la ley de New Jersey (N.J.S.A. Title 15A/16).",
        },
        {
          sectionNumber: "4.2",
          title: "Tabla Matemática de Quórum y Adopción de Acuerdos",
          summary: "Regla matemática inmutable de quórum para sesionar válidamente.",
          content:
            "El Consejo de Gobierno sesiona con el siguiente quórum estricto: (a) Con 3 miembros activos: quórum de dos (2); (b) Con 4 miembros activos: quórum de tres (3); (c) Con 5 miembros activos: quórum de tres (3). Las decisiones ordinarias se adoptan por mayoría simple de los presentes en quórum válido.",
          practicalProtocol:
            "Si no se alcanza el quórum mínimo requerido a la hora fijada, la sesión no podrá instalarse y el Secretario convocará a una nueva fecha dentro del plazo prudencial estatutario correspondiente.",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-002"],
          dependencies: ["REN-DOC-003 Art. 24"],
        },
      ],
    },
    {
      titleNumber: 5,
      romanNumeral: "TÍTULO V",
      title: "EL CONSEJO MINISTERIAL: SUPERVISIÓN Y FORMACIÓN",
      summary: "Órgano pastoral consultivo, evaluación doctrinal, credenciales y acompañamiento ministerial.",
      sections: [
        {
          sectionNumber: "5.1",
          title: "Misión y Competencias del Consejo Ministerial",
          summary: "Definir las atribuciones pastorales y consultivas del cuerpo de ministros.",
          content:
            "El Consejo Ministerial está integrado por los ministros ordenados y pastores de área. Es el órgano consultivo encargado de: (a) Evaluar y examinar a los candidatos a credenciales y ordenación; (b) Asesorar al Pastor Fundador en materias pastorales y eclesiológicas; (c) Conducir procesos de mediación y restauración bíblica; (d) Integrar la Comisión Conjunta en caso de vacancia pastoral imprevista.",
          practicalProtocol:
            "El Consejo Ministerial se reúne periódicamente de forma ordinaria bajo la presidencia del Pastor Fundador o del Ministro Coordinador designado.",
          decisionIds: ["DEC-DEF-014", "DEC-DEF-015", "DEC-DEF-016"],
          dependencies: ["REN-DOC-002", "REN-DOC-005"],
        },
      ],
    },
    {
      titleNumber: 6,
      romanNumeral: "TÍTULO VI",
      title: "LA ASAMBLEA GENERAL DE MIEMBROS",
      summary: "Participación congregacional, quórum del 50%, mayorías y materias reservadas.",
      sections: [
        {
          sectionNumber: "6.1",
          title: "Convocatoria, Padrón y Quórum del 50%",
          summary: "Reglas para la instalación válida de la Asamblea General ordinaria y extraordinaria.",
          content:
            "La Asamblea General se reúne de forma ordinaria una (1) vez al año y extraordinariamente cuando sea convocada con la antelación estatutaria formal establecida en los Bylaws y la ley civil aplicable. El quórum legal obligatorio para sesionar válidamente es del cincuenta por ciento (50%) de los Miembros Activos registrados en el Padrón Oficial que tengan al menos 18 años de edad y derecho corporativo a voto.",
          practicalProtocol:
            "El control de ingreso y firma del padrón estará a cargo del Secretario y dos veedores designados antes de dar inicio a la sesión.",
          decisionIds: ["DEC-DEF-010", "DEC-DEF-011", "DEC-DEF-012", "DEC-DEF-013"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "6.2",
          title: "Límites de la Competencia Asamblearia",
          summary: "Materias excluidas de la deliberación o votación asamblearia.",
          content:
            "La Asamblea General no posee facultades para: (a) Modificar o votar reformas a la Declaración de Fe y Doctrina; (b) Anular decisiones doctrinales del Pastor Fundador; (c) Revocar credenciales ministeriales; (d) Interferir en la designación pastoral sucesoria que corresponda al Fundador o a la Comisión Conjunta.",
          practicalProtocol:
            "Cualquier moción formulada en la Asamblea que vulnere estos límites será declarada improcedente de pleno derecho por la mesa directiva.",
          decisionIds: ["DEC-DEF-005", "DEC-DEF-008", "DEC-DEF-021"],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
        },
      ],
    },
    {
      titleNumber: 7,
      romanNumeral: "TÍTULO VII",
      title: "RELACIÓN INTERINSTITUCIONAL Y SEPARACIÓN DE PODERES",
      summary: "Coordinación armónica, respeto fiduciario y resolución de solapamientos entre órganos.",
      sections: [
        {
          sectionNumber: "7.1",
          title: "Coordinación entre Gobierno Fiduciario y Dirección Ministerial",
          summary: "Mecanismo de comunicación regular entre el Consejo de Gobierno y el Consejo Ministerial.",
          content:
            "El Consejo de Gobierno administra los recursos y aprueba los presupuestos para hacer posible el ministerio; el Consejo Ministerial implementa la labor espiritual. Ningún Fideicomisario intervendrá en la liturgia o doctrina en razón de su cargo fiduciario, ni ningún ministro comprometerá financieramente a la Iglesia sin autorización corporativa previa.",
          practicalProtocol:
            "Se celebrarán sesiones de coordinación periódicas para armonizar los planes ministeriales con la disponibilidad presupuestaria.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-014", "DEC-DEF-018"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
      ],
    },
    {
      titleNumber: 8,
      romanNumeral: "TÍTULO VIII",
      title: "REUNIONES, SESIONES Y PROTOCOLO DE CONVOCATORIA",
      summary: "Preparación de agenda, formalidad de convocatorias, desarrollo de debates y orden parlamentario cristiano.",
      sections: [
        {
          sectionNumber: "8.1",
          title: "Procedimiento de Convocatoria y Envío de Información",
          summary: "Pautas formales para citar a sesiones ordinarias y extraordinarias.",
          content:
            "Toda sesión del Consejo de Gobierno o del Consejo Ministerial requiere notificación por escrito (física o digital) con la antelación establecida por los instrumentos estatutarios aplicables para sesiones ordinarias y un plazo prudencial para extraordinarias de urgencia, adjuntando el Orden del Día y antecedentes de respaldo.",
          practicalProtocol:
            "No se adoptarán resoluciones válidas sobre materias no contempladas en el Orden del Día, salvo acuerdo unánime de los miembros en sesión con quórum pleno.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-011"],
          dependencies: ["REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar conformidad de plazos de convocatoria con la ley corporativa de New Jersey.",
        },
      ],
    },
    {
      titleNumber: 9,
      romanNumeral: "TÍTULO IX",
      title: "TOMA DE DECISIONES, RESOLUCIONES Y MAYORÍAS",
      summary: "Clasificación de decisiones ordinarias y extraordinarias, votación calificada y consentimiento pastoral.",
      sections: [
        {
          sectionNumber: "9.1",
          title: "Decisiones Ordinarias y Mayoría Simple",
          summary: "Régimen de adopción de acuerdos de gestión regular.",
          content:
            "Las decisiones ordinarias abarcan la administración corriente, gastos presupuestados, contratos de mantenimiento y operación mensual. Se aprueban por mayoría simple de los miembros presentes en sesión con quórum válido.",
          practicalProtocol:
            "En caso de empate en votaciones ordinarias del Consejo de Gobierno, el Presidente Corporativo tendrá voto de calidad dirimente.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-017"],
          dependencies: ["REN-DOC-003 Art. 24"],
        },
        {
          sectionNumber: "9.2",
          title: "Decisiones Extraordinarias: Mayoría de 2/3 y Consentimiento Pastoral",
          summary: "Régimen reforzado para actos fiduciarios de alta trascendencia.",
          content:
            "Constituyen materias extraordinarias: (a) Compra, venta o hipoteca de bienes raíces; (b) Contratación de deudas o líneas de crédito; (c) Modificación de firmantes bancarios; (d) Gastos extraordinarios no presupuestados que superen el umbral institucional; (e) Enmiendas estatutarias. Exigen voto favorable de dos tercios (2/3) del Consejo Y consentimiento escrito del Pastor Fundador.",
          practicalProtocol:
            "El umbral monetario cuantitativo en dólares para compras extraordinarias permanece PENDIENTE DE DEFINICIÓN conforme a DEC-PEND-003 hasta su adopción formal.",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-003", "DEC-DEF-240"],
          dependencies: ["REN-DOC-002", "REN-DOC-003 Art. 25"],
          legalReviewRequired: true,
          legalReviewNotes: "Garantizar la legalidad de los acuerdos extraordinarios bajo el régimen de corporaciones no lucrativas de New Jersey.",
          pendingDefinitionNotes: "Materia pendiente conforme a DEC-PEND-003: fijación del umbral exacto en dólares.",
        },
      ],
    },
    {
      titleNumber: 10,
      romanNumeral: "TÍTULO X",
      title: "ACTAS, DOCUMENTACIÓN Y REGISTRO INSTITUCIONAL",
      summary: "Formato obligatorio de actas, libro corporativo, custodia del Secretario y certificación de resoluciones.",
      sections: [
        {
          sectionNumber: "10.1",
          title: "Estructura y Formalidad de las Actas Oficiales",
          summary: "Requisitos de contenido para las actas del Consejo y Asambleas.",
          content:
            "Toda reunión oficial deberá constar en Acta que registre: fecha, hora, lugar, nombres de asistentes y ausentes, verificación de quórum, temas tratados, resoluciones adoptadas con indicación de votos, declaraciones de conflicto de interés y firmas del Presidente y Secretario.",
          practicalProtocol:
            "Las actas se asentarán en el Libro Oficial de Actas de RENACER CHURCH, INC. bajo custodia del Secretario Corporativo dentro del plazo oportuno establecido en los reglamentos institucionales posteriores a la sesión.",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-017", "DEC-DEF-234"],
          dependencies: ["REN-DOC-003 Art. 43"],
          legalReviewRequired: true,
          legalReviewNotes: "Los libros de actas constituyen prueba fiduciaria requerida por las leyes corporativas de New Jersey.",
        },
      ],
    },
    {
      titleNumber: 11,
      romanNumeral: "TÍTULO XI",
      title: "COMUNICACIÓN Y CADENA INSTITUCIONAL",
      summary: "Canales oficiales, comunicados del liderazgo y distinción entre opiniones personales y declaraciones institucionales.",
      sections: [
        {
          sectionNumber: "11.1",
          title: "Canales Oficiales y Vocería Institucional",
          summary: "Normar la emisión de declaraciones públicas y comunicados congregacionales.",
          content:
            "Las comunicaciones oficiales de RENACER CHURCH se canalizan exclusivamente por los medios formales autorizados: el púlpito principal, boletines oficiales, comunicados suscritos por el Pastor Fundador o el Consejo de Gobierno y plataformas digitales institucionales. Ningún líder o miembro podrá atribuirse la vocería institucional sin delegación expresa.",
          practicalProtocol:
            "Las opiniones personales emitidas en redes sociales por miembros o líderes no representan la postura oficial de RENACER CHURCH.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-017"],
          dependencies: ["REN-DOC-002"],
        },
      ],
    },
    {
      titleNumber: 12,
      romanNumeral: "TÍTULO XII",
      title: "SUPERVISIÓN, CONTROL INTERNO Y RENDICIÓN DE CUENTAS",
      summary: "Auditoría interna, control presupuestario, revisión de inventarios y salvaguarda de la mayordomía.",
      sections: [
        {
          sectionNumber: "12.1",
          title: "Mecanismos de Control Financiero y Conteo de Ofrendas",
          summary: "Protocolos de doble control para garantizar la transparencia económica.",
          content:
            "El control interno exige: (a) Conteo de diezmos y ofrendas realizado por al menos dos (2) personas no emparentadas inmediatamente después del culto; (b) Firma conjunta de la planilla de conteo; (c) Depósito bancario en el plazo más breve posible conforme a los protocolos financieros; (d) Emisión de constancias de donación al cierre del año fiscal.",
          practicalProtocol:
            "El Tesorero presentará informes financieros periódicos al Consejo de Gobierno y un informe balance anual a la Asamblea General.",
          decisionIds: ["DEC-DEF-018", "DEC-DEF-022", "DEC-DEF-023"],
          dependencies: ["REN-DOC-003 Art. 36", "REN-DOC-010"],
        },
      ],
    },
    {
      titleNumber: 13,
      romanNumeral: "TÍTULO XIII",
      title: "POLÍTICA DE CONFLICTOS DE INTERÉS Y ÉTICA FIDUCIARIA",
      summary: "Identificación, divulgación obligatoria, abstención de voto y prohibición de beneficio privado (Private Inurement).",
      sections: [
        {
          sectionNumber: "13.1",
          title: "Protocolo de Divulgación y Abstención Obligatoria",
          summary: "Procedimiento a seguir ante cualquier posible conflicto fiduciario.",
          content:
            "Todo fiduciario, oficial o ministro que posea un interés económico, familiar o contractual en una decisión sometida al Consejo deberá declararlo antes del inicio del debate. Deberá retirarse del recinto durante la deliberación y abstenerse de votar, dejándose constancia explícita en el acta.",
          practicalProtocol:
            "Las contrataciones con partes relacionadas sólo procederán si el precio es igual o menor al valor justo de mercado y tras evaluar cotizaciones independientes alternativas.",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-006", "DEC-PEND-008", "DEC-DEF-238"],
          dependencies: ["REN-DOC-003 Art. 46 a 48", "REN-DOC-011"],
          legalReviewRequired: true,
          legalReviewNotes: "Cumplimiento con las regulaciones sobre transacciones con exceso de beneficio bajo IRC § 4958.",
        },
      ],
    },
    {
      titleNumber: 14,
      romanNumeral: "TÍTULO XIV",
      title: "GESTIÓN DE CONFLICTOS INSTITUCIONALES Y MEDIACIÓN",
      summary: "Debido proceso de Mateo 18, conciliación eclesial y deber ineludible de denuncia penal ante delitos.",
      sections: [
        {
          sectionNumber: "14.1",
          title: "Etapas del Proceso de Conciliación Bíblica",
          summary: "Resolución fraternal de desacuerdos interpersonales o ministeriales.",
          content:
            "Los desacuerdos entre miembros o líderes se gestionarán en tres etapas: 1. Diálogo personal en privado (Mateo 18:15); 2. Mediación con el Líder de Área o Supervisor (Mateo 18:16); 3. Audiencia pastoral ante la Comisión del Consejo Ministerial. El objetivo primordial es la restauración, el perdón y la unidad del cuerpo de Cristo.",
          practicalProtocol:
            "Se levantará un acta pastoral de reconciliación reservada para dar seguimiento fraternal al proceso.",
          decisionIds: ["DEC-DEF-019", "DEC-PEND-010", "DEC-DEF-218"],
          dependencies: ["REN-DOC-002", "REN-DOC-011"],
        },
        {
          sectionNumber: "14.2",
          title: "Límites Legales y Deber Innegociable de Notificación a las Autoridades",
          summary: "Excepción absoluta del proceso interno ante conductas delictivas o abuso.",
          content:
            "Ningún procedimiento eclesiástico interno, mediación pastoral o invocación de confidencialidad podrá emplearse para encubrir, demorar o impedir la denuncia inmediata ante la policía, fiscalía o autoridades de protección de menores en casos de: abuso sexual, abuso infantil, violencia física o doméstica, delitos financieros graves o amenazas contra la integridad física.",
          practicalProtocol:
            "Todo oficial o ministro que tenga conocimiento de presunto abuso infantil tiene el deber legal irrenunciable de notificar de inmediato a la División de Protección Infantil de New Jersey (DCPP) y a las autoridades policiales.",
          decisionIds: ["DEC-DEF-020", "DEC-DEF-242"],
          dependencies: ["REN-DOC-002 Art. 43", "REN-DOC-003 Art. 50"],
          legalReviewRequired: true,
          legalReviewNotes: "Cumplimiento estricto con las leyes de New Jersey sobre notificación obligatoria de abuso de menores (N.J.S.A. 9:6-8.10).",
        },
      ],
    },
    {
      titleNumber: 15,
      romanNumeral: "TÍTULO XV",
      title: "GOBIERNO EN SITUACIONES EXTRAORDINARIAS Y CRISIS",
      summary: "Mecanismo operativo temporal de contingencia sin creación de autoridad independiente ni alteración estatutaria.",
      sections: [
        {
          sectionNumber: "15.1",
          title: "Mecanismo Operativo Temporal de Coordinación de Contingencia",
          summary: "Pautas de respuesta y auxilio ante desastres o situaciones de fuerza mayor.",
          content:
            "Ante emergencias graves, desastres naturales, pérdida de sede física o situaciones críticas de fuerza mayor, el Pastor Fundador y el Consejo de Gobierno podrán articular un mecanismo operativo temporal de coordinación de contingencia para salvaguardar vidas, resguardar archivos y coordinar el auxilio a la congregación. Este mecanismo operativo no constituye un órgano de gobierno independiente, no tiene facultades jurídicas propias, no sustituye al Consejo de Gobierno, al Pastor Fundador ni al Consejo Ministerial, y no modifica los quórums ni las competencias estatutarias establecidas.",
          practicalProtocol:
            "La coordinación de contingencia actuará bajo la directa supervisión de los órganos de gobierno regulares y emitirá reportes informativos periódicos a la congregación.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-006", "DEC-DEF-017"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
      ],
    },
    {
      titleNumber: 16,
      romanNumeral: "TÍTULO XVI",
      title: "PROTOCOLO ANTE INCAPACIDAD DEL PASTOR FUNDADOR",
      summary: "Determinación médica calificada, conducción interina colegiada y preservación de DEC-PEND-001.",
      sections: [
        {
          sectionNumber: "16.1",
          title: "Procedimiento de Evaluación Médica y Conducción Interina",
          summary: "Determinación de incapacidad conforme al marco institucional y reserva legal.",
          content:
            "La determinación de incapacidad del Pastor Fundador requiere certificación médica formal e independiente emitida por profesionales médicos legalmente autorizados, conforme al marco institucional y a las directivas fiduciarias que se formalicen bajo DEC-PEND-001. Declarada formalmente la incapacidad, el Consejo de Gobierno y el Consejo Ministerial asumirán conjuntamente la conducción interina de la Iglesia para mantener la continuidad espiritual y administrativa.",
          practicalProtocol:
            "Las directivas notariales de salud, poderes duraderos (Durable Power of Attorney) y representación fiduciaria civil permanecen formalmente PENDIENTES DE DEFINICIÓN y REQUIEREN REVISIÓN LEGAL calificada conforme a DEC-PEND-001.",
          decisionIds: ["DEC-PEND-001", "DEC-DEF-227", "DEC-DEF-228"],
          dependencies: ["REN-DOC-002 Art. 44", "REN-DOC-003 Art. 51 a 53"],
          legalReviewRequired: true,
          legalReviewNotes: "Materia fiduciaria y notarial sujeta a formalización bajo las leyes civiles de New Jersey.",
          pendingDefinitionNotes: "Materia formalmente pendiente conforme a DEC-PEND-001: requiere redacción notarial civil de poderes duraderos y directivas de salud.",
        },
      ],
    },
    {
      titleNumber: 17,
      romanNumeral: "TÍTULO XVII",
      title: "SUCESIÓN PASTORAL Y CONTINUIDAD DEL LIDERAZGO",
      summary: "Designación pastoral exclusiva previa o resolución unánime de la Comisión Conjunta sin ratificación asamblearia.",
      sections: [
        {
          sectionNumber: "17.1",
          title: "Sucesión Ordinaria por Designación del Pastor Fundador",
          summary: "Eficacia y primacía de la designación dejada por el Fundador.",
          content:
            "Mientras el Pastor Fundador conserve plena capacidad, tiene la potestad exclusiva de designar formalmente por escrito a su sucesor. Ocurrida la vacancia, el Consejo de Gobierno y el Consejo Ministerial procederán a la apertura del documento y darán cumplimiento solemne a la voluntad fundacional.",
          practicalProtocol:
            "La congregación será convocada a un Culto Solemne de Transición e Instalación para dar la bienvenida espiritual al nuevo Pastor Principal.",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-008", "DEC-DEF-226"],
          dependencies: ["REN-DOC-002 Art. 45", "REN-DOC-003 Art. 54"],
        },
        {
          sectionNumber: "17.2",
          title: "Sucesión Extraordinaria por Comisión Conjunta Unánime",
          summary: "Procedimiento ante vacancia imprevista sin designación previa.",
          content:
            "En caso de vacancia imprevista sin designación previa, el Consejo de Gobierno y el Consejo Ministerial formarán una Comisión Conjunta Extraordinaria. La designación del nuevo Pastor Principal exigirá el voto unánime de los miembros de la Comisión Conjunta y no estará sujeta a votación ni ratificación asamblearia congregacional conforme a las decisiones institucionales aprobadas.",
          practicalProtocol:
            "El sucesor deberá ser un ministro ordenado con credencial vigente, graduado del Seminario Bíblico RENACER o equivalente, con probado testimonio ético conforme a 1 Timoteo 3.",
          decisionIds: ["DEC-DEF-008", "DEC-PEND-001", "DEC-DEF-226", "DEC-DEF-227", "DEC-DEF-229"],
          dependencies: ["REN-DOC-002 Art. 45", "REN-DOC-003 Art. 55"],
        },
      ],
    },
    {
      titleNumber: 18,
      romanNumeral: "TÍTULO XVIII",
      title: "PROTECCIÓN DE LA AUTORIDAD Y MAGISTERIO DOCTRINAL",
      summary: "Inalterabilidad de la doctrina por órganos administrativos, blindaje teológico y fidelidad a las Escrituras.",
      sections: [
        {
          sectionNumber: "18.1",
          title: "Blindaje de la Declaración de Fe frente a Decisiones Administrativas",
          summary: "Garantizar que ninguna resolución fiduciaria altere las verdades de fe.",
          content:
            "La Declaración de Fe y Doctrina (REN-DOC-001) y sus 20 Artículos Fundamentales constituyen el marco teológico supremo de RENACER. Ni el Consejo de Gobierno, ni la Asamblea General, ni comisiones especiales poseen facultad para modificar, flexibilizar ni debilitar los principios doctrinales de la Iglesia.",
          practicalProtocol:
            "Cualquier resolución administrativa o contractual que entre en conflicto con la doctrina será nula de pleno derecho.",
          decisionIds: ["DEC-DEF-005", "DEC-DEF-021", "DEC-DEF-230"],
          dependencies: ["REN-DOC-001", "REN-DOC-002 Art. 8", "REN-DOC-003 Art. 58"],
        },
      ],
    },
    {
      titleNumber: 19,
      romanNumeral: "TÍTULO XIX",
      title: "RELACIÓN ENTRE EL GOBIERNO INSTITUCIONAL Y LOS MINISTERIOS",
      summary: "Coordinación con ministerios locales, departamentos, escuelas formativas, misiones y Familias de Grupo.",
      sections: [
        {
          sectionNumber: "19.1",
          title: "Gobernanza Ministerial y Líneas de Dependencia",
          summary: "Estructura operativa de departamentos y ministerios subordinados.",
          content:
            "Todos los departamentos (Alabanza, Educación, Niños, Jóvenes, Damas, Varones, Evangelismo, Misiones y Tecnología) operan bajo la supervisión del Consejo Ministerial y la dirección general del Pastor Fundador. Su reglamentación operativa específica se desarrollará en el Manual Ministerial (REN-DOC-005) y el Manual de Ministerios (REN-DOC-006).",
          practicalProtocol:
            "Los directores departamentales presentarán anualmente su plan operativo y presupuesto requerido ante el Consejo de Gobierno.",
          decisionIds: ["DEC-DEF-014", "DEC-DEF-018"],
          dependencies: ["REN-DOC-002", "REN-DOC-005", "REN-DOC-006"],
        },
      ],
    },
    {
      titleNumber: 20,
      romanNumeral: "TÍTULO XX",
      title: "PREVENCIÓN CONTRA EL ABUSO DE PODER Y LÍMITES ÉTICOS",
      summary: "Salvaguardas contra la manipulación espiritual, coerción financiera, acoso y protección irrestricta de las personas.",
      sections: [
        {
          sectionNumber: "20.1",
          title: "Prohibición Expresa de Manipulación y Abuso Espiritual",
          summary: "Establecer estándares claros de protección de la dignidad de las personas.",
          content:
            "En RENACER queda expresamente prohibido el uso de la investidura pastoral, profética o de liderazgo para coaccionar la conciencia, manipular afectos o imponer cargas ilegítimas. Las prácticas consistentes en intimidación espiritual ('Dios me dijo que tienes que...'), aislamiento familiar, exigencias de lealtad personal ciega o humillaciones públicas constituyen faltas graves sancionables con remoción inmediata.",
          practicalProtocol:
            "Cualquier miembro que considere vulnerada su dignidad podrá presentar comunicación confidencial ante el Comité de Ética y Protección.",
          decisionIds: ["DEC-DEF-020", "DEC-DEF-218", "DEC-DEF-242"],
          dependencies: ["REN-DOC-002", "REN-DOC-011", "REN-DOC-012"],
        },
      ],
    },
    {
      titleNumber: 21,
      romanNumeral: "TÍTULO XXI",
      title: "REVISIÓN, CONTROL Y DISPOSICIONES FINALES",
      summary: "Actualización periódica, nota de borrador no adoptado y subordinación a revisión legal calificada.",
      sections: [
        {
          sectionNumber: "21.1",
          title: "Revisión Periódica y Procedimiento de Actualización",
          summary: "Fijar la periodicidad de evaluación del manual de gobierno.",
          content:
            "Este manual será revisado periódicamente por una comisión conjunta de gobierno y ministerial, proponiendo las actualizaciones requeridas para acompañar el crecimiento institucional.",
          practicalProtocol:
            "Toda actualización se aprobará por el Consejo de Gobierno con el consentimiento del Pastor Fundador.",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-006"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
        {
          sectionNumber: "21.2",
          title: "Nota de Estado Institucional y Advertencia Legal Obligatoria",
          summary: "Dejar constancia formal de borrador no adoptado.",
          content:
            "El presente MANUAL DE GOBIERNO DE RENACER (REN-DOC-004 v0.1) se encuentra formalmente clasificado como BORRADOR EN REDACCIÓN y NO HA SIDO ADOPTADO. Sus disposiciones operativas, fiduciarias y legales quedan expresamente sujetas a DICTAMEN Y REVISIÓN LEGAL calificada por abogado admitido en el Estado de New Jersey antes de su promulgación oficial.",
          practicalProtocol:
            "Ninguna disposición de este manual se invocará como norma vigente frente a terceros hasta su adopción formal solemne.",
          decisionIds: ["DEC-PEND-006"],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisión legal obligatoria previa a la adopción institucional definitiva.",
        },
      ],
    },
  ],
};

export const MASTER_GOVERNMENT_MANUAL_TITLES = FULL_GOVERNMENT_MANUAL_DRAFT.titles;

export function getAllManualSections(): ManualSection[] {
  const list: ManualSection[] = [];
  for (const t of FULL_GOVERNMENT_MANUAL_DRAFT.titles) {
    for (const s of t.sections) {
      list.push(s);
    }
  }
  return list;
}

export function generateFullGovernmentManualMarkdown(): string {
  const doc = FULL_GOVERNMENT_MANUAL_DRAFT;
  let md = `# ${doc.title}\n\n`;
  md += `## ${doc.subtitle}\n\n`;
  md += `**Entidad Corporativa:** ${doc.organization}\n`;
  md += `**Denominación Ministerial:** ${doc.publicName}\n`;
  md += `**Pastor Fundador:** ${doc.founder}\n`;
  md += `**Código Documental:** ${doc.documentNumber}\n`;
  md += `**Jerarquía Documental:** ${doc.hierarchyLevel}\n`;
  md += `**Versión:** v${doc.version}\n`;
  md += `**Estado de Trabajo:** BORRADOR EN REDACCIÓN — NO ADOPTADA\n`;
  md += `**Estado Legal:** REQUIERE REVISION LEGAL (New Jersey & IRC § 501(c)(3))\n\n`;
  md += `> ⚠️ **AVISO INSTITUCIONAL Y LEGAL OBLIGATORIO:** ${doc.legalNotice}\n\n`;
  md += `---\n\n`;

  md += `## ${doc.preamble.title}\n\n`;
  md += `${doc.preamble.content}\n\n`;
  md += `---\n\n`;

  md += `## MATRIZ DE RESPONSABILIDADES Y COMPETENCIAS INSTITUCIONALES\n\n`;
  md += `| Materia Institucional | Pastor Fundador | Consejo de Gobierno (Trustees) | Consejo Ministerial | Asamblea General |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;
  for (const row of doc.responsibilityMatrix) {
    md += `| **${row.materia}** | ${row.pastorFundador} | ${row.consejoGobierno} | ${row.consejoMinisterial} | ${row.asambleaGeneral} |\n`;
  }
  md += `\n---\n\n`;

  md += `## FLUJOS OPERATIVOS DE DECISIÓN INSTITUCIONAL\n\n`;
  for (const wf of doc.decisionWorkflows) {
    md += `### ${wf.name} (${wf.decisionLevel})\n\n`;
    md += `*${wf.description}*\n\n`;
    for (const step of wf.steps) {
      md += `- ${step}\n`;
    }
    md += `\n`;
  }
  md += `---\n\n`;

  for (const t of doc.titles) {
    md += `## ${t.romanNumeral} — ${t.title}\n\n`;
    md += `*${t.summary}*\n\n`;

    for (const sec of t.sections) {
      md += `### Sección ${sec.sectionNumber} — ${sec.title}\n\n`;
      md += `**Resumen Operativo:** ${sec.summary}\n\n`;
      md += `${sec.content}\n\n`;

      if (sec.practicalProtocol) {
        md += `> 📋 **Protocolo Práctico:** ${sec.practicalProtocol}\n\n`;
      }
      if (sec.decisionIds && sec.decisionIds.length > 0) {
        md += `*Decisiones Institucionales Relacionadas:* ${sec.decisionIds.join(", ")}\n\n`;
      }
      if (sec.dependencies && sec.dependencies.length > 0) {
        md += `*Documentos Vinculados:* ${sec.dependencies.join(", ")}\n\n`;
      }
      if (sec.legalReviewRequired) {
        md += `> ⚠️ **REQUIERE REVISIÓN LEGAL:** ${sec.legalReviewNotes || "Materia operativa sujeta a revisión legal."}\n\n`;
      }
      if (sec.pendingDefinitionNotes) {
        md += `> ⏳ **PENDIENTE DE DEFINICIÓN:** ${sec.pendingDefinitionNotes}\n\n`;
      }
    }
    md += `---\n\n`;
  }

  md += `## DISPOSICIONES FINALES Y REGISTRO INSTITUCIONAL\n\n`;
  md += `1. **Naturaleza del Instrumento:** El presente Manual de Gobierno de RENACER (REN-DOC-004 v0.1) se encuentra en estado de **BORRADOR EN REDACCIÓN** y **NO HA SIDO ADOPTADO**.\n`;
  md += `2. **Subordinación Total:** Toda norma de este manual se subordina a la Ley civil, Articles of Incorporation, Bylaws (REN-DOC-003) y Constitución (REN-DOC-002).\n`;
  md += `3. **Preservación de Materias Pendientes:** Las decisiones DEC-PEND-001 (directivas de incapacidad) y DEC-PEND-003 (umbrales monetarios) se conservan como materias formalmente pendientes de adopción legal y fiduciaria.\n`;

  return md;
}
