import { MasterConstitutionDocument, ArticleDecisionStatus } from "@/types/constitution";

export const FULL_CONSTITUTION_DRAFT: MasterConstitutionDocument = {
  documentNumber: "REN-DOC-002",
  title: "CONSTITUCIÓN DE RENACER CHURCH",
  organization: "RENACER CHURCH, INC.",
  publicName: "RENACER CHURCH",
  tagline: "“Renacer, un nuevo inicio” / “RENACER — A New Beginning”",
  founder: "Luis Uchubanda Falconí",
  version: "0.1",
  status: "EN_REDACCION",
  legalNotice: "BORRADOR EN REDACCIÓN — DOCUMENTO NO ADOPTADO. Las disposiciones de carácter corporativo, fiduciario y estatutario deberán someterse a revisión legal exhaustiva bajo las leyes del Estado de New Jersey y la Sección 501(c)(3) del Código de Rentas Internas antes de su consideración formal para adopción.",

  preamble: {
    title: "PREÁMBULO SOLEMNE",
    contentSummary: "Invocación a la Santísima Trinidad y consagración de la Iglesia bajo la soberanía de Jesucristo y la autoridad infalible de las Sagradas Escrituras.",
    decisionStatus: "DEFINIDO",
    fullText: "EN EL NOMBRE DEL PADRE, DEL HIJO Y DEL ESPÍRITU SANTO. Nosotros, los creyentes congregados en RENACER CHURCH, reconociendo a Jesucristo como único Señor y Cabeza suprema de la Iglesia, y sometiéndonos a la autoridad inerrante de las Sagradas Escrituras, promulgamos este borrador de Constitución institucional para ordenar el gobierno, ministerio, servicio, discipulado y preservación de la Iglesia de Dios en la ciudad de Paterson, New Jersey, y hasta los confines de la tierra.",
  },

  chapters: [
    {
      chapterNumber: 1,
      romanNumeral: "TÍTULO I",
      title: "IDENTIDAD, NATURALEZA Y FINALIDAD",
      summary: "Denominación legal y pública, autonomía confesional, sede y propósito supremo de la Iglesia.",
      articles: [
        {
          articleNumber: 1,
          title: "Nombre Legal y Denominación Pública",
          objective: "Fijar el nombre legal corporativo y el nombre ministerial público de la Iglesia.",
          expectedContent: "El nombre legal corporativo es RENACER CHURCH, INC. y su denominación pública oficial es RENACER CHURCH.",
          fullText: "Sección 1.1. Denominación Legal. La corporación eclesiástica se denomina legalmente RENACER CHURCH, INC., constituida como corporación religiosa y sin fines de lucro bajo las leyes del Estado de New Jersey.\nSección 1.2. Denominación Pública. En todas sus actividades ministeriales, cultos, programas evangelísticos, publicaciones y relaciones comunitarias, la corporación operará públicamente bajo el nombre de RENACER CHURCH.\nSección 1.3. Lema Oficial. El lema distintivo institucional es «Renacer, un nuevo inicio» / «RENACER — A New Beginning».",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-002"],
          dependencies: ["REN-DOC-001", "REN-DOC-003"],
        },
        {
          articleNumber: 2,
          title: "Naturaleza Eclesial y Confesional",
          objective: "Definir la identidad pentecostal e independiente de la Iglesia.",
          expectedContent: "Iglesia cristiana pentecostal autónoma y no denominacional.",
          fullText: "Sección 2.1. Naturaleza Confesional. RENACER CHURCH es una iglesia cristiana evangélica de fe y práctica pentecostal, cristocéntrica, trinitaria, misionera y fundamentada exclusivamente en la Santa Biblia.\nSección 2.2. Autonomía Institucional. RENACER es una corporación eclesiástica autónoma e independiente, no subordinada a jerarquías o sínodos foráneos, que preserva su soberanía interna sobre doctrina, gobierno, disciplina y bienes bajo la guía del Espíritu Santo.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-003", "DEC-DEF-248"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 3,
          title: "Sede Principal y Jurisdicción Geográfica",
          objective: "Establecer la sede principal de operaciones ministeriales y administrativas.",
          expectedContent: "Sede fijada en Paterson, New Jersey.",
          fullText: "Sección 3.1. Domicilio Principal. La sede principal y oficina registrada de RENACER CHURCH, INC. está ubicada en la ciudad de Paterson, Condado de Passaic, Estado de New Jersey, Estados Unidos de América.\nSección 3.2. Extensión Misionera. La Iglesia podrá establecer campos misioneros, sedes locales filiales, misiones y dependencias eclesiásticas dentro y fuera de New Jersey conforme al plan de expansión aprobado por el Consejo de Gobierno.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-003"],
          dependencies: ["REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Verificar domicilio registrado y agente registrado corporativo ante la NJ Division of Revenue.",
        },
        {
          articleNumber: 4,
          title: "Propósito Supremo y Razón de Ser",
          objective: "Establecer el fin supremo espiritual de la Iglesia.",
          expectedContent: "Adoración a Dios, proclamación del Evangelio y manifestación del Espíritu Santo.",
          fullText: "Sección 4.1. Fin Supremo. El propósito supremo de RENACER CHURCH es glorificar al Dios Trino mediante la adoración en espíritu y en verdad, la proclamación incondicional del evangelio de Jesucristo, la manifestación del poder del Espíritu Santo y la edificación mutua de los creyentes.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-003"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 5,
          title: "Declaración de Misión",
          objective: "Definir la misión activa de la Iglesia en la sociedad.",
          expectedContent: "Evangelizar, restaurar, discipular y formar líderes.",
          fullText: "Sección 5.1. Misión. La misión de RENACER CHURCH es proclamar el mensaje redentor de Jesucristo, restaurar integralmente a personas y familias quebrantadas, discipularlas en obediencia a la Palabra de Dios y formar líderes siervos comprometidos con el Reino de Dios.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-003"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 6,
          title: "Declaración de Visión y Alcance Generacional",
          objective: "Fijar la visión de crecimiento espiritual y multiplicación.",
          expectedContent: "Iglesia viva, multiplicadora y de impacto transformador generacional.",
          fullText: "Sección 6.1. Visión. RENACER CHURCH se proyecta como una comunidad de fe viva, relevante, sólida en sana doctrina y multiplicadora, que transforma espiritualmente su entorno en New Jersey y trasciende como un legado espiritual para las futuras generaciones.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-002"],
          dependencies: ["REN-DOC-001"],
        },
      ],
    },
    {
      chapterNumber: 2,
      romanNumeral: "TÍTULO II",
      title: "BASE DOCTRINAL Y AUTORIDAD DE LAS ESCRITURAS",
      summary: "Norma suprema bíblica, remisión a la Declaración de Fe y preservación confesional.",
      articles: [
        {
          articleNumber: 7,
          title: "Autoridad Suprema e Infalible de las Sagradas Escrituras",
          objective: "Establecer la Biblia como única norma inerrante de fe, gobierno y conducta.",
          expectedContent: "La Biblia es la Palabra inspirada e inerrante de Dios.",
          fullText: "Sección 7.1. Inspiración e Inerrancia. Los sesenta y seis (66) libros canónicos del Antiguo y Nuevo Testamento constituyen la Santa Palabra de Dios plenamente inspirada, inerrante en sus manuscritos originales y regla suprema e inapelable de fe, doctrina, liturgia, gobierno y conducta en RENACER CHURCH.\nSección 7.2. Primacía Bíblica. Ninguna costumbre humana, tradición eclesiástica, decisión administrativa ni resolución corporativa prevalecerá sobre el texto y espíritu de las Sagradas Escrituras.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-003", "DEC-DEF-005"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 8,
          title: "Declaración de Fe (20 Artículos Fundamentales)",
          objective: "Vincular formalmente la Declaración de Fe sin duplicarla en la Constitución.",
          expectedContent: "Remisión a REN-DOC-001 como compendio doctrinal oficial.",
          fullText: "Sección 8.1. Compendio Doctrinal. La doctrina oficial de la Iglesia está contenida en el documento REN-DOC-001 (Declaración de Fe de RENACER), integrado por veinte (20) artículos fundamentales de fe, cuya reforma o modificación está reservada con exclusividad al Pastor Fundador mediante procedimiento solemne institucional.\nSección 8.2. Adhesión Obligatoria. Todo creyente admitido como miembro, líder, ministro u oficial suscribe formalmente los 20 artículos doctrinales de REN-DOC-001 como requisito indispensable de comunión y ejercicio ministerial.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-003", "DEC-DEF-005", "DEC-DEF-230"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 9,
          title: "Las Sagradas Ordenanzas Eclesiásticas",
          objective: "Establecer las dos ordenanzas instituidas por Jesucristo.",
          expectedContent: "Bautismo en agua por inmersión y la Santa Cena del Señor.",
          fullText: "Sección 9.1. El Bautismo en Agua. RENACER practica el bautismo en agua por inmersión en el Nombre del Padre, del Hijo y del Espíritu Santo, administrado a personas que hayan profesado conscientemente su fe y arrepentimiento en Jesucristo.\nSección 9.2. La Santa Cena. La Cena del Señor es celebrada solemnemente con pan y jugo de la vid como conmemoración del sacrificio de Cristo y proclamación de su segunda venida, participando creyentes en plena comunión espiritual.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-017"],
          dependencies: ["REN-DOC-001"],
        },
        {
          articleNumber: 10,
          title: "Preservación y Custodia de la Sana Doctrina",
          objective: "Establecer la custodia doctrinal bajo el Pastor Fundador y el Consejo Ministerial.",
          expectedContent: "Inmutabilidad doctrinal y custodia espiritual.",
          fullText: "Sección 10.1. Custodia Doctrinal. La preservación y salvaguarda de la sana doctrina bíblica corresponde al Pastor Fundador, asistido teológicamente por el Consejo Ministerial.\nSección 10.2. Prohibición de Doctrinas Extrañas. Queda terminantemente prohibida la enseñanza, difusión o tolerancia de doctrinas heréticas, contrarias a las Sagradas Escrituras o incompatibles con REN-DOC-001 en cualquier ámbito de la Iglesia.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-005", "DEC-DEF-230", "DEC-DEF-248"],
          dependencies: ["REN-DOC-001"],
        },
      ],
    },
    {
      chapterNumber: 3,
      romanNumeral: "TÍTULO III",
      title: "MEMBRESÍA Y VIDA CONGREGACIONAL",
      summary: "Categorías de membresía, requisitos de admisión, derechos espirituales, deberes y pérdida de membresía.",
      articles: [
        {
          articleNumber: 11,
          title: "Naturaleza y Requisitos de Admisión de Miembros",
          objective: "Fijar las condiciones espirituales y formativas para ser admitido como miembro.",
          expectedContent: "Fe, bautismo, discipulado y adhesión doctrinal.",
          fullText: "Sección 11.1. Requisitos de Ingreso. Para ser admitido como Miembro Activo de RENACER CHURCH se requiere: (a) Profesión pública de fe en Jesucristo; (b) Bautismo en agua por inmersión; (c) Compromiso formal de cursar y completar el ciclo de formación en la Escuela de Discípulos; (d) Adherir formalmente a la Declaración de Fe y Constitución; (e) Aprobación pastoral formal.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-010", "DEC-DEF-012", "DEC-PEND-004"],
          dependencies: ["REN-DOC-001", "REN-DOC-005"],
        },
        {
          articleNumber: 12,
          title: "Categorías de Membresía Eclesial",
          objective: "Distinguir entre miembros activos, en formación, inactivos y honorarios.",
          expectedContent: "Clasificación formal de membresía.",
          fullText: "Sección 12.1. Miembros Activos. Creyentes admitidos formalmente, bautizados, que asisten con regularidad, participan en la vida congregacional, apoyan con diezmos y ofrendas y constan en el Padrón Oficial.\nSección 12.2. Miembros en Formación. Asistentes en proceso de discipulado o preparación para bautismo.\nSección 12.3. Miembros Inactivos. Miembros que registren inasistencia injustificada mayor a noventa (90) días, pasando a seguimiento pastoral.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-004", "DEC-DEF-234"],
          dependencies: ["REN-DOC-005"],
        },
        {
          articleNumber: 13,
          title: "Derechos Espirituales y Deberes de los Miembros",
          objective: "Detallar las responsabilidades y privilegios de la vida congregacional.",
          expectedContent: "Cuidado pastoral, ordenanzas, servicio, apoyo con diezmos y ofrendas.",
          fullText: "Sección 13.1. Derechos. Los Miembros Activos tienen derecho al cuidado y consejería pastoral, participación en sacramentos, cobertura ministerial, formación espiritual y voz y voto en Asambleas Generales según esta Constitución.\nSección 13.2. Deberes. Es deber de los miembros perseverar en santidad, congregarse fielmente, honrar al liderazgo pastoral, sostener la Iglesia con diezmos y ofrendas voluntarias y servir con sus dones.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-018", "DEC-PEND-004"],
          dependencies: ["REN-DOC-005"],
        },
        {
          articleNumber: 14,
          title: "Suspensión, Restauración y Pérdida de Membresía",
          objective: "Normar las causales de cese voluntario o disciplinario de la membresía.",
          expectedContent: "Renuncia, traslado, disciplina bíblica o inactividad.",
          fullText: "Sección 14.1. Causales de Pérdida. La calidad de miembro cesa por: (a) Fallecimiento; (b) Renuncia voluntaria por escrito o carta de transferencia; (c) Inasistencia no justificada mayor a seis (6) meses; (d) Exclusión por disciplina eclesiástica conforme al debido proceso bíblico (Mateo 18:15-17).\nSección 14.2. Restauración. La Iglesia mantendrá siempre abiertas las puertas a la reconciliación y restauración espiritual del creyente arrepentido.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-019", "DEC-PEND-010"],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
      ],
    },
    {
      chapterNumber: 4,
      romanNumeral: "TÍTULO IV",
      title: "ESTRUCTURA GENERAL DE GOBIERNO",
      summary: "Gobierno eclesiástico teocrático y ordenado, órganos principales y separación funcional.",
      articles: [
        {
          articleNumber: 15,
          title: "Naturaleza Teocrática y Estructura de Gobierno",
          objective: "Definir el modelo de gobernanza bajo Cristo.",
          expectedContent: "Gobierno teocrático con liderazgo pastoral y órganos consultivos y administrativos.",
          fullText: "Sección 15.1. Modelo Teocrático. El gobierno de RENACER CHURCH es teocrático bajo la soberanía exclusiva de Jesucristo y la autoridad de las Sagradas Escrituras, ejercido espiritualmente a través del ministerio pastoral y fiduciariamente a través de órganos colegiados organizados conforme a esta Constitución.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-006", "DEC-DEF-209"],
          dependencies: ["REN-DOC-003", "REN-DOC-004"],
        },
        {
          articleNumber: 16,
          title: "Órganos Principales de la Iglesia",
          objective: "Enumerar los cuerpos eclesiásticos y administrativos.",
          expectedContent: "Pastor Fundador, Consejo de Gobierno, Consejo Ministerial y Asamblea Congregacional.",
          fullText: "Sección 16.1. Cuerpos Institucionales. Son órganos rectores de RENACER CHURCH: (1) El Pastor Fundador; (2) El Consejo de Gobierno; (3) El Consejo Ministerial; (4) La Asamblea General de Miembros Activos.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-006", "DEC-DEF-209"],
          dependencies: ["REN-DOC-003", "REN-DOC-004"],
        },
        {
          articleNumber: 17,
          title: "Separación Funcional y Cooperación Ministerial",
          objective: "Delimitar las facultades espirituales de las corporativas y administrativas.",
          expectedContent: "Delimitación clara entre liderazgo espiritual y administración fiduciaria.",
          fullText: "Sección 17.1. Esferas de Competencia. La dirección espiritual, litúrgica, teológica y la administración de sacramentos competen al Pastor Fundador y al Consejo Ministerial. La gestión fiduciaria, administración de bienes, cuentas bancarias, contratos civiles y cumplimiento legal corresponden al Consejo de Gobierno.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-006", "DEC-DEF-206", "DEC-DEF-209"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 18,
          title: "Representación Legal Corporativa",
          objective: "Definir los oficiales facultados para representar a la corporación.",
          expectedContent: "Presidente, Secretario y Tesorero ante entidades civiles y bancarias.",
          fullText: "Sección 18.1. Representación Civil. La representación legal de RENACER CHURCH, INC. ante autoridades civiles, judiciales, tributarias y bancarias corresponde al Presidente Corporativo (Pastor Principal/Fundador) o al oficial expresamente autorizado mediante resolución formal del Consejo de Gobierno.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-DEF-006", "DEC-DEF-236"],
          dependencies: ["REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar conformidad con estatutos de corporaciones religiosas y sin fines de lucro de NJ.",
        },
      ],
    },
    {
      chapterNumber: 5,
      romanNumeral: "TÍTULO V",
      title: "PASTOR FUNDADOR",
      summary: "Liderazgo espiritual vitalicio, facultades exclusivas, límites y autoridad.",
      articles: [
        {
          articleNumber: 19,
          title: "Reconocimiento y Autoridad del Pastor Fundador",
          objective: "Reconocer a Luis Uchubanda Falconí como Pastor Fundador de RENACER.",
          expectedContent: "Liderazgo pastoral vitalicio y autoridad espiritual de fundador.",
          fullText: "Sección 19.1. Llamamiento y Reconocimiento. RENACER CHURCH reconoce a Luis Uchubanda Falconí como su Pastor Fundador bajo llamamiento divino.\nSección 19.2. Permanencia Ministerial. El Pastor Fundador ejerce el liderazgo pastoral y espiritual de forma permanente mientras conserve vida, testimonio moral bíblico y capacidad de discernimiento.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-008", "DEC-DEF-211"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 20,
          title: "Facultades Exclusivas del Pastor Fundador",
          objective: "Enumerar las prerrogativas doctrinales, ministeriales y de propuesta del Fundador.",
          expectedContent: "Adopción doctrinal, designación de sucesor, propuesta de consejeros.",
          fullText: "Sección 20.1. Prerrogativas Exclusivas. Corresponde exclusivamente al Pastor Fundador: (a) Proponer e iniciar reformas a documentos doctrinales; (b) Designar por escrito a su sucesor ministerial; (c) Proponer a los candidatos para integrar el Consejo de Gobierno; (d) Presidir las reuniones de liderazgo pastoral; (e) Autorizar materias de gasto extraordinario reservadas.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-005", "DEC-DEF-008", "DEC-DEF-212", "DEC-DEF-213"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 21,
          title: "Incapacidad Temporal o Definitiva del Pastor Fundador",
          objective: "Establecer el protocolo médico y eclesiástico en caso de incapacidad.",
          expectedContent: "Evaluación médica calificada de 2 médicos certificados y transición ordenada.",
          fullText: "Sección 21.1. Determinación Médica. La incapacidad médica o física definitiva del Pastor Fundador requerirá la certificación formal e independiente de al menos dos (2) médicos especialistas colegiados.\nSección 21.2. Dirección Interina. Ante incapacidad declarada, el Consejo de Gobierno y el Consejo Ministerial asumirán conjuntamente la conducción interina para salvaguardar la continuidad institucional (DEC-PEND-001).",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-001", "DEC-DEF-177", "DEC-DEF-227", "DEC-DEF-228"],
          dependencies: ["REN-DOC-004"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar requisitos legales de poderes notariales médicos y fiduciarios en New Jersey.",
        },
      ],
    },
    {
      chapterNumber: 6,
      romanNumeral: "TÍTULO VI",
      title: "CONSEJO DE GOBIERNO",
      summary: "Composición (3-5 miembros), períodos de servicio, selección, quórums y materias extraordinarias.",
      articles: [
        {
          articleNumber: 22,
          title: "Composición y Requisitos del Consejo de Gobierno",
          objective: "Establecer el número de consejeros (3 a 5) y sus calidades morales y espirituales.",
          expectedContent: "3 a 5 miembros de testimonio intachable, madurez y membresía activa.",
          fullText: "Sección 22.1. Número de Fideicomisarios. El Consejo de Gobierno estará integrado por un mínimo de tres (3) y un máximo de cinco (5) miembros activos (Trustees).\nSección 22.2. Requisitos de Calificación. Cada miembro del Consejo deberá ser Miembro Activo con al menos dos (2) años de trayectoria ininterrumpida, de testimonio irreprensible (1 Timoteo 3:1-13), solvencia ética y lealtad probada a la visión institucional.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-002"],
          dependencies: ["REN-DOC-003", "REN-DOC-004"],
        },
        {
          articleNumber: 23,
          title: "Período de Servicio y Mecanismo de Elección",
          objective: "Establecer la duración de 2 años y el proceso de selección en 3 pasos.",
          expectedContent: "Pastor propone → Consejo evalúa → Congregación confirma por 2 años.",
          fullText: "Sección 23.1. Mandato. Los miembros del Consejo de Gobierno servirán por un período de dos (2) años, pudiendo ser reelegidos si son ratificados.\nSección 23.2. Proceso en Tres Pasos. La designación se realiza mediante: (1) Propuesta formal del Pastor Fundador; (2) Evaluación de antecedentes y requisitos por el Consejo de Gobierno; (3) Confirmación por la Asamblea General de Miembros Activos.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-007", "DEC-DEF-009", "DEC-PEND-002"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 24,
          title: "Quórums y Mayorías en el Consejo de Gobierno",
          objective: "Establecer la tabla de quórum exacto según el número de consejeros.",
          expectedContent: "3 miembros → 2; 4 miembros → 3; 5 miembros → 3.",
          fullText: "Sección 24.1. Tabla de Quórum Obligatorio. Para sesionar válidamente: (a) Con 3 consejeros en funciones: quórum de 2; (b) Con 4 consejeros en funciones: quórum de 3; (c) Con 5 consejeros en funciones: quórum de 3.\nSección 24.2. Decisiones Ordinarias. Las resoluciones ordinarias se aprueban por mayoría simple de los presentes con quórum.\nSección 24.3. Regla de Desempate. En caso de empate no dirimido, la propuesta se considerará no aprobada.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-002"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 25,
          title: "Materias Extraordinarias del Consejo de Gobierno",
          objective: "Enumerar las decisiones que requieren mayoría calificada de 2/3 y consentimiento del Pastor.",
          expectedContent: "Bienes inmuebles, endeudamiento, contratos mayores, cuentas bancarias.",
          fullText: "Sección 25.1. Decisiones Extraordinarias. Requerirán la aprobación de al menos dos tercios (2/3) de los miembros del Consejo y el consentimiento explícito del Pastor Fundador: (a) Adquisición, enajenación, hipoteca o gravamen de bienes inmuebles; (b) Contratación de endeudamiento o préstamos bancarios; (c) Apertura, cierre o modificación de firmantes de cuentas bancarias; (d) Contratos extraordinarios que superen los umbrales fiduciarios presupuestados.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-006", "DEC-PEND-002", "DEC-PEND-003", "DEC-DEF-240"],
          dependencies: ["REN-DOC-003", "REN-DOC-004", "REN-DOC-013"],
          legalReviewRequired: true,
          legalReviewNotes: "Coordinar poderes corporativos extraordinarios con los Bylaws corporativos (REN-DOC-003).",
        },
      ],
    },
    {
      chapterNumber: 7,
      romanNumeral: "TÍTULO VII",
      title: "CONSEJO MINISTERIAL",
      summary: "Composición pastoral, formación teológica, credenciales, evaluación y cuidado espiritual.",
      articles: [
        {
          articleNumber: 26,
          title: "Naturaleza y Funciones del Consejo Ministerial",
          objective: "Establecer el cuerpo consultivo y técnico de apoyo espiritual.",
          expectedContent: "Asuntos teológicos, credenciales, disciplina y evaluación ministerial.",
          fullText: "Sección 26.1. Atribuciones. El Consejo Ministerial es el cuerpo pastoral que asesora al Pastor Fundador en la supervisión doctrinal, estructuración del discipulado, examen de candidatos a credenciales, cuidado de las Familias de Grupo y acompañamiento en procesos de restauración ética y espiritual.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-005", "DEC-DEF-015", "DEC-DEF-016"],
          dependencies: ["REN-DOC-004", "REN-DOC-010"],
        },
        {
          articleNumber: 27,
          title: "Composición del Consejo Ministerial",
          objective: "Integrar a pastores asociados, ancianos y ministros ordenados.",
          expectedContent: "Ministros ordenados y pastores de área designados.",
          fullText: "Sección 27.1. Miembros Integrantes. El Consejo Ministerial estará integrado por el Pastor Fundador, pastores de área y ministros ordenados de testimonio intachable en RENACER CHURCH designados formalmente.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-005", "DEC-DEF-015", "DEC-DEF-016"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 28,
          title: "Evaluación de Candidatos y Credenciales Ministeriales",
          objective: "Normar el otorgamiento y revocación de credenciales.",
          expectedContent: "Examen de doctrina, testimonio y formación en el Seminario.",
          fullText: "Sección 28.1. Proceso de Evaluación. Ninguna persona será acreditada ministerialmente sin completar los requisitos del Seminario Bíblico RENACER, superar el examen teológico y ético del Consejo Ministerial y contar con la confirmación del Pastor Fundador.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-014", "DEC-DEF-015", "DEC-DEF-016"],
          dependencies: ["REN-DOC-009", "REN-DOC-010"],
        },
      ],
    },
    {
      chapterNumber: 8,
      romanNumeral: "TÍTULO VIII",
      title: "MINISTERIOS, LIDERAZGO Y CREDENCIALES",
      summary: "Estructura de liderazgo, departamentos ministeriales, credenciales y código de conducta.",
      articles: [
        {
          articleNumber: 29,
          title: "Estructura Piramidal y Funcional del Liderazgo",
          objective: "Consolidar la jerarquía de servicio pastoral y celular.",
          expectedContent: "Pastor → Líderes de Área → Supervisores → Familias de Grupo → Discípulos → Nuevos Discípulos.",
          fullText: "Sección 29.1. Niveles de Liderazgo y Servicio. La estructura funcional y de cobertura de RENACER CHURCH comprende seis (6) niveles: (1) Pastor Principal / Fundador; (2) Líderes de Área Ministerial; (3) Supervisores de Células; (4) Familias de Grupo; (5) Discípulos; (6) Nuevos Discípulos.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-010", "DEC-DEF-011"],
          dependencies: ["REN-DOC-006"],
        },
        {
          articleNumber: 30,
          title: "Familias de Grupo (Células de Crecimiento y Cuidado)",
          objective: "Establecer las células como unidad básica de pastoreo y evangelismo.",
          expectedContent: "Reuniones en hogares para oración, palabra y confraternidad.",
          fullText: "Sección 30.1. Células en Hogares. Las Familias de Grupo constituyen la unidad celular básica de evangelismo, comunión fraterna, edificación bíblica y cuidado pastoral directo en los hogares, operando bajo la supervisión pastoral.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-011", "DEC-DEF-231"],
          dependencies: ["REN-DOC-006"],
        },
        {
          articleNumber: 31,
          title: "Departamentos y Ministerios Especializados",
          objective: "Reconocer los ministerios de alabanza, ujieres, infantil, jóvenes, etc.",
          expectedContent: "Organización departamental para el servicio integral.",
          fullText: "Sección 31.1. Ministerios de Servicio. RENACER contará con ministerios especializados para el desarrollo congregacional: Alabanza y Adoración, Ujieres y Bienvenida, Ministerio Infantil (Kids), Ministerio de Jóvenes, Intercesión, Misiones y Acción Comunitaria.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-015", "DEC-DEF-020", "DEC-DEF-231"],
          dependencies: ["REN-DOC-006"],
        },
        {
          articleNumber: 32,
          title: "Tipos de Credenciales y Ordenación Ministerial",
          objective: "Definir los niveles de reconocimiento ministerial.",
          expectedContent: "Candidato Ministerial, Ministro Licenciado y Ministro Ordenado.",
          fullText: "Sección 32.1. Escalafón Ministerial. RENACER otorgará credenciales en las categorías oficiales de: (a) Candidato Ministerial; (b) Ministro Licenciado; (c) Ministro Ordenado, garantizando igualdad de acceso a hombres y mujeres de testimonio bíblico probado conforme a las decisiones institucionales aprobadas.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-015", "DEC-DEF-016"],
          dependencies: ["REN-DOC-010"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar efectos de ordenación ministerial para deducciones fiscales parsonage (IRC § 107).",
        },
      ],
    },
    {
      chapterNumber: 9,
      romanNumeral: "TÍTULO IX",
      title: "DISCIPULADO Y FORMACIÓN",
      summary: "Ruta de crecimiento: Escuela de Discípulos, Escuela de Líderes y Seminario Bíblico RENACER.",
      articles: [
        {
          articleNumber: 33,
          title: "Escuela de Discípulos (Formación Básica)",
          objective: "Establecer el programa inicial de fundamentos de la fe.",
          expectedContent: "Fundamentos de salvación, doctrina y vida cristiana.",
          fullText: "Sección 33.1. Formación Inicial. La Escuela de Discípulos es el programa institucional básico y obligatorio de nueve (9) meses destinado a cimentar a los nuevos creyentes en la doctrina bíblica, el bautismo y la vida cristiana fructífera.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-010", "DEC-DEF-012"],
          dependencies: ["REN-DOC-007"],
        },
        {
          articleNumber: 34,
          title: "Escuela de Líderes (Capacitación Ministerial)",
          objective: "Establecer el programa de capacitación para servicio y liderazgo celular.",
          expectedContent: "Herramientas prácticas para líderes de grupos y servidores.",
          fullText: "Sección 34.1. Capacitación de Siervos. La Escuela de Líderes imparte un ciclo de formación de seis (6) meses para capacitar a los discípulos en la dirección de Familias de Grupo, consejería básica y servicio ministerial.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-010", "DEC-DEF-013"],
          dependencies: ["REN-DOC-008"],
        },
        {
          articleNumber: 35,
          title: "Seminario Bíblico RENACER (Educación Teológica Superior)",
          objective: "Normar la institución de educación teológica y ministerial.",
          expectedContent: "Formación bíblica profunda para maestros, ministros y pastores.",
          fullText: "Sección 35.1. Institución Teológica. El Seminario Bíblico RENACER es la institución académica superior de la Iglesia para la preparación teológica, hermenéutica y pastoral profunda de futuros maestros y ministros ordenados.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-014", "DEC-DEF-016"],
          dependencies: ["REN-DOC-009"],
        },
      ],
    },
    {
      chapterNumber: 10,
      romanNumeral: "TÍTULO X",
      title: "REUNIONES Y PARTICIPACIÓN CONGREGACIONAL",
      summary: "Asambleas ordinarias y extraordinarias, quórum del 50%, requisitos de voto y mayorías.",
      articles: [
        {
          articleNumber: 36,
          title: "Asambleas Congregacionales Ordinarias y Extraordinarias",
          objective: "Fijar la periodicidad de reuniones de miembros y requisitos de convocatoria.",
          expectedContent: "Asamblea anual obligatoria y asambleas extraordinarias previa notificación.",
          fullText: "Sección 36.1. Periodicidad y Aviso. La Asamblea General Ordinaria se celebrará anualmente para rendición de cuentas financieras y ministeriales. Las Asambleas Extraordinarias se convocarán por el Pastor Fundador o el Consejo de Gobierno con al menos catorce (14) días de anticipación pública.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-004", "DEC-DEF-233"],
          dependencies: ["REN-DOC-003", "REN-DOC-004"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar requisitos de notificación previa en New Jersey Nonprofit Corporation Act.",
        },
        {
          articleNumber: 37,
          title: "Derecho a Voto y Padrón Congregacional",
          objective: "Definir quiénes tienen derecho a voz y voto en las decisiones asamblearias.",
          expectedContent: "Miembros activos mayores de 18 años con asistencia y compromiso probado.",
          fullText: "Sección 37.1. Requisitos de Votantes. Tienen derecho a voz y voto en las Asambleas los Miembros Activos mayores de 18 años inscritos en el Libro de Padrón Oficial que no estén sujetos a sanción disciplinaria ni inactividad.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-004", "DEC-DEF-234"],
          dependencies: ["REN-DOC-005"],
        },
        {
          articleNumber: 38,
          title: "Quórum Congregacional del 50% y Mayorías",
          objective: "Establecer la regla inmutable del quórum del 50% de miembros con derecho a voto.",
          expectedContent: "Quórum de 50% de miembros activos. Mayoría simple u ordinaria y 2/3 para extraordinarias.",
          fullText: "Sección 38.1. Quórum Inmutable del 50%. Para sesionar válidamente en Asamblea General se requerirá la presencia de al menos el cincuenta por ciento (50%) de los Miembros Activos con derecho a voto.\nSección 38.2. Mayorías. Los asuntos ordinarios se adoptan por mayoría simple. Los asuntos extraordinarios (bienes raíces o enmiendas) exigen mayoría calificada de dos tercios (2/3).",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-004", "DEC-DEF-234"],
          dependencies: ["REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Coordinar quórum congregacional con las exigencias estatutarias en New Jersey.",
        },
      ],
    },
    {
      chapterNumber: 11,
      romanNumeral: "TÍTULO XI",
      title: "PATRIMONIO, FINANZAS Y ADMINISTRACIÓN",
      summary: "Propiedad corporativa, administración fiduciaria, cuentas bancarias y auditorías.",
      articles: [
        {
          articleNumber: 39,
          title: "Titularidad y Propiedad Corporativa de los Bienes",
          objective: "Establecer que los bienes pertenecen exclusivamente a RENACER CHURCH, INC.",
          expectedContent: "Patrimonio exclusivo de la corporación y no de personas individuales.",
          fullText: "Sección 39.1. Titularidad Inalienable. Todos los bienes muebles, inmuebles, vehículos, instrumentos, fondos bancarios, donaciones y derechos adquiridos pertenecen única y exclusivamente a RENACER CHURCH, INC. y no a personas individuales a título privado.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-PEND-008", "DEC-DEF-240"],
          dependencies: ["REN-DOC-003", "REN-DOC-013"],
          legalReviewRequired: true,
          legalReviewNotes: "Verificar títulos de propiedad y exenciones de impuestos a la propiedad inmobiliaria en NJ.",
        },
        {
          articleNumber: 40,
          title: "Administración Financiera, Diezmos y Ofrendas",
          objective: "Normar la recaudación, depósito bancario y control contable.",
          expectedContent: "Depósitos bancarios íntegros, conteo por dos personas y contabilidad transparente.",
          fullText: "Sección 40.1. Manejo Fiduciario Transparente. Los diezmos y ofrendas son recibidos como acto de adoración y mayordomía bíblica voluntaria sin coerción legalista. Todo fondo se contabiliza por al menos dos (2) personas no emparentadas y se deposita íntegramente en las cuentas bancarias institucionales.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-018", "DEC-PEND-003", "DEC-DEF-232"],
          dependencies: ["REN-DOC-013"],
        },
        {
          articleNumber: 41,
          title: "Presupuesto Anual y Auditorías Contables",
          objective: "Exigir presupuesto anual aprobado y auditoría periódica.",
          expectedContent: "Presupuesto anual del Consejo y auditoría externa o de comité.",
          fullText: "Sección 41.1. Control Presupuestario. El Consejo de Gobierno aprobará anualmente el presupuesto operativo y someterá los estados financieros a revisión periódica y auditoría contable independiente para garantizar absoluta probidad fiduciaria.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-018", "DEC-PEND-003", "DEC-DEF-239"],
          dependencies: ["REN-DOC-013"],
        },
      ],
    },
    {
      chapterNumber: 12,
      romanNumeral: "TÍTULO XII",
      title: "ÉTICA, DISCIPLINA, RESTAURACIÓN Y PROTECCIÓN",
      summary: "Código de ética ministerial, disciplina bíblica restauradora y políticas de protección de menores.",
      articles: [
        {
          articleNumber: 42,
          title: "Código de Ética y Conducta Cristiana",
          objective: "Establecer estándares morales elevados para miembros y líderes.",
          expectedContent: "Integridad moral, honestidad y santidad en la vida pública y privada.",
          fullText: "Sección 42.1. Conducta Irreprensible. Todo ministro, oficial y líder de RENACER CHURCH está obligado a modelar una conducta intachable, honesta, sobria y santa en su vida familiar, ministerial y ciudadana conforme al Código de Ética (REN-DOC-011).",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-015", "DEC-PEND-010"],
          dependencies: ["REN-DOC-011"],
        },
        {
          articleNumber: 43,
          title: "Proceso Disciplinario y Ministerio de Restauración",
          objective: "Regular el debido proceso bíblico para corrección y perdón.",
          expectedContent: "Mateo 18, confidencialidad pastoral y deber indelegable de denunciar delitos ante autoridades civiles.",
          fullText: "Sección 43.1. Corrección Restauradora. La disciplina eclesiástica se fundamenta en Mateo 18:15-17 y Gálatas 6:1, orientada a la corrección en amor, la protección congregacional y la restauración del creyente arrepentido, garantizando confidencialidad pastoral en el ámbito espiritual.\nSección 43.2. Límites de la Confidencialidad y Deber Legal. La mediación y la confidencialidad pastoral interna en ningún caso impedirán, retrasarán ni sustituirán la denuncia obligatoria e inmediata ante las autoridades policiales, judiciales o de protección civil ante casos de abuso infantil, violencia, delitos penales o situaciones de riesgo inminente.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-019", "DEC-PEND-010", "DEC-DEF-218"],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
        {
          articleNumber: 44,
          title: "Política de Protección de Menores y Personas Vulnerables",
          objective: "Blindar a niños y jóvenes mediante verificación y protocolos estrictos.",
          expectedContent: "Verificación de antecedentes (background checks) y política de dos adultos.",
          fullText: "Sección 44.1. Tolerancia Cero y Regla de Dos Adultos. RENACER CHURCH mantiene política de tolerancia cero frente a cualquier abuso o maltrato infantil. Todo voluntario y maestro en contacto con menores deberá superar background checks oficiales y cumplir la regla de dos adultos presentes sin excepción (N.J.S.A. 9:6-8.10).",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-019", "DEC-DEF-218", "DEC-DEF-241"],
          dependencies: ["REN-DOC-014"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar cumplimiento con leyes de protección a la infancia de New Jersey y reporte obligatorio 1-877-NJ-ABUSE.",
        },
      ],
    },
    {
      chapterNumber: 13,
      romanNumeral: "TÍTULO XIII",
      title: "SUCESIÓN Y CONTINUIDAD INSTITUCIONAL",
      summary: "Designación sucesoria por el Fundador, protocolo de emergencia y requisitos del sucesor.",
      articles: [
        {
          articleNumber: 45,
          title: "Mecanismo de Sucesión Pastoral del Fundador",
          objective: "Establecer la designación directa por el Pastor Fundador y el protocolo en caso imprevisto.",
          expectedContent: "Designación exclusiva por el Fundador en vida o comisión conjunta Consejo de Gobierno + Ministerial.",
          fullText: "Sección 45.1. Designación por el Fundador. Mientras el Pastor Fundador conserve plena capacidad, tiene la potestad exclusiva de designar formalmente por escrito a su sucesor pastoral.\nSección 45.2. Protocolo en Vacancia Imprevista. En caso de fallecimiento o vacancia definitiva sin designación sucesoria previa, el Consejo de Gobierno y el Consejo Ministerial sesionarán en comisión conjunta y unánime para designar y comisionar al sucesor pastoral conforme a los requisitos institucionales establecidos.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-004", "DEC-DEF-008", "DEC-PEND-001", "DEC-DEF-226", "DEC-DEF-227"],
          dependencies: ["REN-DOC-004"],
        },
        {
          articleNumber: 46,
          title: "Requisitos Obligatorios del Sucesor Pastoral",
          objective: "Fijar el perfil riguroso teológico, moral y ministerial del futuro Pastor Principal.",
          expectedContent: "Miembro activo, ministro ordenado, graduado del Seminario, testimonio intachable.",
          fullText: "Sección 46.1. Calificaciones del Sucesor. El candidato a suceder la función pastoral principal deberá ser: (a) Miembro activo de RENACER; (b) Ministro ordenado con credencial vigente; (c) Graduado del Seminario Bíblico RENACER; (d) De testimonio moral e irreprensible (1 Timoteo 3); (e) Plenamente alineado con la Declaración de Fe y visión fundacional.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-014", "DEC-DEF-016", "DEC-DEF-229"],
          dependencies: ["REN-DOC-004", "REN-DOC-009", "REN-DOC-010"],
        },
      ],
    },
    {
      chapterNumber: 14,
      romanNumeral: "TÍTULO XIV",
      title: "JERARQUÍA, REFORMA, DISOLUCIÓN Y ADOPCIÓN",
      summary: "Pirámide documental institucional, cláusula de disolución no lucrativa, proceso de enmienda y formalidad de adopción.",
      articles: [
        {
          articleNumber: 47,
          title: "Jerarquía Documental Institucional",
          objective: "Fijar el orden de prelación jurídica e institucional interna.",
          expectedContent: "1. Ley aplicable; 2. Articles; 3. Bylaws; 4. Constitución; 5. Doctrina; 6. Manuales; 7. Reglamentos; 8. SOPs.",
          fullText: "Sección 47.1. Orden de Prelación Documental. El orden de jerarquía normativa interna en RENACER CHURCH es: (1) Legislación civil aplicable de New Jersey y de los EE.UU.; (2) Certificate / Articles of Incorporation; (3) Estatutos Corporativos (Bylaws — REN-DOC-003); (4) Constitución de RENACER (REN-DOC-002); (5) Declaración de Fe (REN-DOC-001); (6) Manuales de Operación; (7) Reglamentos específicos; (8) Procedimientos Operativos Estándar (SOPs).",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-PEND-006", "DEC-DEF-236", "DEC-DEF-250"],
          dependencies: ["REN-DOC-001", "REN-DOC-003", "REN-DOC-004"],
          legalReviewRequired: true,
          legalReviewNotes: "Someter jerarquía de documentos a revisión por abogado corporativo calificado en New Jersey.",
        },
        {
          articleNumber: 48,
          title: "Cláusula de Disolución y Destino de Bienes",
          objective: "Establecer la disolución no lucrativa y transferencia a organización religiosa compatible.",
          expectedContent: "Satisfacción de pasivos y traspaso de remanente a entidad 501(c)(3) cristiana compatible.",
          fullText: "Sección 48.1. Liquidación y Destino de Activos. En caso de disolución legal o liquidación de RENACER CHURCH, INC., tras satisfacer íntegramente todas las deudas y obligaciones legales, ningún remanente será distribuido a favor de pastores, fideicomisarios, oficiales ni particulares. Los activos netos remanentes serán transferidos exclusivamente a una o más organizaciones cristianas exentas bajo la Sección 501(c)(3) del Código de Rentas Internas de los Estados Unidos con confesión de fe análoga.",
          decisionStatus: "DEFINIDO",
          decisionIds: ["DEC-DEF-001", "DEC-PEND-009", "DEC-DEF-238"],
          dependencies: ["REN-DOC-003"],
          legalReviewRequired: true,
          legalReviewNotes: "Revisar cláusula de disolución obligatoria para mantener estatus de exención federal 501(c)(3) ante el IRS.",
        },
      ],
    },
  ],
};

export interface FlatConstitutionArticle {
  chapterNumber: number;
  chapterRoman: string;
  chapterTitle: string;
  articleNumber: number;
  title: string;
  objective: string;
  expectedContent: string;
  fullText: string;
  decisionStatus: ArticleDecisionStatus;
  decisionIds: string[];
  dependencies: string[];
  legalReviewRequired?: boolean;
  legalReviewNotes?: string;
  pendingDefinitionNotes?: string;
}

export function getAllConstitutionArticles(): FlatConstitutionArticle[] {
  const articles: FlatConstitutionArticle[] = [];
  for (const ch of FULL_CONSTITUTION_DRAFT.chapters) {
    for (const art of ch.articles) {
      articles.push({
        chapterNumber: ch.chapterNumber,
        chapterRoman: ch.romanNumeral,
        chapterTitle: ch.title,
        articleNumber: art.articleNumber,
        title: art.title,
        objective: art.objective,
        expectedContent: art.expectedContent,
        fullText: art.fullText || "",
        decisionStatus: art.decisionStatus,
        decisionIds: art.decisionIds || [],
        dependencies: art.dependencies || [],
        legalReviewRequired: art.legalReviewRequired,
        legalReviewNotes: art.legalReviewNotes,
        pendingDefinitionNotes: art.pendingDefinitionNotes,
      });
    }
  }
  return articles;
}

export function generateFullConstitutionMarkdown(): string {
  const doc = FULL_CONSTITUTION_DRAFT;
  let md = `# ${doc.title}\n\n`;
  md += `**Entidad Corporativa:** ${doc.organization}\n`;
  md += `**Denominación Pública:** ${doc.publicName}\n`;
  md += `**Lema:** ${doc.tagline}\n`;
  md += `**Pastor Fundador:** ${doc.founder}\n`;
  md += `**Código:** ${doc.documentNumber}\n`;
  md += `**Versión:** v${doc.version}\n`;
  md += `**Estado Institucional:** BORRADOR EN REDACCIÓN — NO ADOPTADA\n\n`;
  md += `> **AVISO LEGAL OBLIGATORIO:** ${doc.legalNotice}\n\n`;
  md += `---\n\n`;

  md += `## ${doc.preamble.title}\n\n`;
  md += `${doc.preamble.fullText}\n\n`;
  md += `---\n\n`;

  for (const ch of doc.chapters) {
    md += `## ${ch.romanNumeral} — ${ch.title}\n\n`;
    md += `*${ch.summary}*\n\n`;

    for (const art of ch.articles) {
      md += `### ARTÍCULO ${art.articleNumber} — ${art.title}\n\n`;
      md += `**Objetivo Constitucional:** ${art.objective}\n\n`;
      md += `${art.fullText}\n\n`;
      
      if (art.decisionIds && art.decisionIds.length > 0) {
        md += `*Decisiones Institucionales Vinculadas:* ${art.decisionIds.join(", ")}\n\n`;
      }
      if (art.dependencies && art.dependencies.length > 0) {
        md += `*Documentos Relacionados:* ${art.dependencies.join(", ")}\n\n`;
      }
      if (art.legalReviewRequired) {
        md += `> ⚠️ **REQUIERE REVISIÓN LEGAL:** ${art.legalReviewNotes || "Materia estatutaria/corporativa sujeta a validación jurídica en New Jersey."}\n\n`;
      }
      if (art.pendingDefinitionNotes) {
        md += `> ⏳ **PENDIENTE DE DEFINICIÓN:** ${art.pendingDefinitionNotes}\n\n`;
      }
    }
    md += `---\n\n`;
  }

  md += `## DISPOSICIONES FINALES Y NOTA DE ESTADO\n\n`;
  md += `1. **Naturaleza del Documento:** El presente texto de la Constitución de RENACER CHURCH (REN-DOC-002 v0.1) se encuentra en estado de **BORRADOR EN REDACCIÓN** y **NO HA SIDO ADOPTADO**.\n`;
  md += `2. **Reserva Legal:** Ninguna cláusula con implicación civil, corporativa, fiduciaria o de responsabilidad fiduciaria entrará en vigor hasta que se complete la revisión legal calificada y el decreto formal de adopción.\n`;
  md += `3. **Preservación Doctrinal:** Las disposiciones doctrinales se rigen supletoria y permanentemente por la Declaración de Fe (REN-DOC-001).\n`;

  return md;
}
