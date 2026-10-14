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

export interface MembershipStateDefinition {
  state: string;
  description: string;
  rights: string;
  limitations: string;
  transitionCondition: string;
  administrativeCategoryOnly?: boolean;
}

export interface ResponsibilityMatrixRow {
  proceso: string;
  pastor: string;
  consejoGobierno: string;
  consejoMinisterial: string;
  lider: string;
  secretarioRegistro: string;
  miembro: string;
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

export interface MembershipManualTitle {
  titleNumber: string;
  titleName: string;
  description: string;
  sections: ManualSection[];
}

export interface MasterMembershipManualDraft {
  code: string;
  id: string;
  title: string;
  shortTitle: string;
  version: string;
  status: "EN_REDACCION";
  adoptionStatus: "NO_ADOPTADA";
  legalState: "REQUIERE_REVISION_LEGAL";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  category: "MEMBRESIA_Y_DISCIPLINA";
  author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno";
  authorId: "usr-fundador-001";
  responsibleArea: "PASTORAL_Y_GOBIERNO";
  confidentiality: "INTERNO_CONGREGACION";
  documentTarget: "MANUAL_INSTITUCIONAL";
  createdAt: string;
  updatedAt: string;
  preamble: string;
  titles: MembershipManualTitle[];
  membershipStates: MembershipStateDefinition[];
  responsibilityMatrix: ResponsibilityMatrixRow[];
  operationalWorkflows: OperationalWorkflow[];
}

export const MASTER_MEMBERSHIP_MANUAL_TITLES: MembershipManualTitle[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "PROPÓSITO, ALCANCE Y PRINCIPIOS DE MEMBRESÍA",
    description: "Establece los fines institucionales, espirituales y comunitarios del presente manual, definiendo sus límites y principios rectores.",
    sections: [
      {
        sectionNumber: "1.1",
        title: "Propósito y Naturaleza del Manual",
        content:
          "El presente Manual de Membresía, Disciplina y Restauración (REN-DOC-005) tiene como propósito regular operativamente los procesos de admisión, formación, registro, derechos, responsabilidades, disciplina restauradora, cuidado mutuo y desvinculación de los miembros de RENACER CHURCH. Su finalidad es edificar el cuerpo de Cristo en amor, preservar la sana doctrina, salvaguardar la santidad y unidad de la iglesia, y garantizar el debido proceso y la dignidad de cada creyente sin menoscabo de sus derechos espirituales y civiles.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-003"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        practicalProtocol:
          "Toda aplicación de este manual debe armonizarse jerárquicamente con la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003) y el Manual de Gobierno (REN-DOC-004).",
      },
      {
        sectionNumber: "1.2",
        title: "Límites Fundamentales del Gobierno Eclesiástico",
        content:
          "La relación de membresía en RENACER es una pertenencia voluntaria, espiritual e institucional al cuerpo local de creyentes. En ningún caso la membresía o la disciplina eclesial podrán ser utilizadas para ejercer control sobre la vida privada, las finanzas individuales, las relaciones matrimoniales o de noviazgo legítimas, el empleo, las decisiones médicas privadas, la militancia política o el libre pensamiento de los miembros. Queda terminantemente prohibida toda forma de manipulación psicológica, aislamiento social o imposición de servidumbre bajo pretexto de autoridad ministerial.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002"],
        practicalProtocol:
          "Cualquier intento de un líder o ministro de coaccionar decisiones privadas de un miembro invocando autoridad espiritual será considerado falta grave y causal de remoción disciplinaria inmediata.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "NATURALEZA DE LA MEMBRESÍA EN RENACER",
    description: "Define el carácter teológico, relacional y organizativo del vínculo eclesiástico.",
    sections: [
      {
        sectionNumber: "2.1",
        title: "Diferenciación de Vínculos Congregacionales",
        content:
          "RENACER reconoce diversos niveles de vinculación dentro de la vida de la congregación:\n1. Asistente / Visitante: Toda persona que acude libremente a los cultos y actividades públicas de la iglesia, recibiendo acogida cristiana y predicación de la Palabra, sin asumir obligaciones institucionales ni poseer derechos de voto o servicio oficial.\n2. Creyente en Formación / Discípulo: Persona convertida al Señor Jesucristo que cursa activamente los programas de discipulado inicial de la iglesia.\n3. Miembro de RENACER: Creyente bautizado que ha completado su proceso formativo, ha sido formalmente admitido conforme a las normas constitucionales y estatutarias, y figura inscrito en el Registro Oficial de Miembros.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-015"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
        practicalProtocol:
          "El equipo pastoral y de bienvenida mantendrá claridad en la acogida fraterna sin exigir a los visitantes compromisos correspondientes a miembros plenos.",
      },
      {
        sectionNumber: "2.2",
        title: "Compromiso de Pacto Comunitario",
        content:
          "La membresía constituye un pacto de amor fraternal, edificación mutua y sujeción espiritual voluntaria en Cristo. Los miembros se comprometen a buscar la santidad, participar en la comunión de los santos, perseverar en la oración, respaldar la misión evangelizadora y respetar los instrumentos doctrinales e institucionales de la iglesia.",
        decisionIds: ["DEC-DEF-001"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "REQUISITOS PARA LA MEMBRESÍA",
    description: "Establece los requisitos esenciales e indispensables para ser admitido como miembro de la iglesia.",
    sections: [
      {
        sectionNumber: "3.1",
        title: "Requisitos Esenciales de Admisión",
        content:
          "Para ser admitido formalmente como miembro de RENACER CHURCH se requiere:\n1. Haber profesado fe genuina en el Señor Jesucristo como único y suficiente Salvador y Señor.\n2. Haber sido bautizado en agua por inmersión en el nombre del Padre, del Hijo y del Espíritu Santo, o dar testimonio verificado de dicho bautismo cristiano previo conforme a la doctrina bíblica.\n3. Haber completado satisfactoriamente el ciclo formativo inicial de discipulado (Escuela de Discípulos o curso de membresía equivalente aprobado por el Pastor Fundador y el Consejo Ministerial).\n4. Aceptar de manera voluntaria, íntegra y sin reservas la Declaración de Fe y Doctrina (REN-DOC-001), la Constitución (REN-DOC-002), los Bylaws (REN-DOC-003) y las normas de gobernanza de RENACER.\n5. Formalizar la solicitud de membresía ante el área pastoral competente y ser recibido en ceremonia congregacional de bienvenida.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-007", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
        practicalProtocol:
          "La Secretaría de la Iglesia verificará documentalmente el cumplimiento de cada requisito antes de elevar la solicitud al Consejo Ministerial para su admisión oficial.",
      },
      {
        sectionNumber: "3.2",
        title: "Universalidad e Igualdad Espiritual",
        content:
          "No existirá discriminación alguna en la admisión y pleno ejercicio de la membresía por razones de nacionalidad, origen étnico, condición socioeconómica, edad (cumplida la mayoría requerida para derechos corporativos) ni sexo. Las mujeres tienen plena y total participación en la vida ministerial, formativa, diaconal, de liderazgo y pastoral de RENACER CHURCH, sin restricción de género para el ejercicio de sus dones espirituales.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "PROCESO DE INCORPORACIÓN",
    description: "Regula el itinerario formativo y administrativo desde la conversión hasta la recepción oficial.",
    sections: [
      {
        sectionNumber: "4.1",
        title: "Itinerario del Creyente hacia la Membresía",
        content:
          "El camino regular de incorporación en RENACER CHURCH sigue la secuencia pedagógica y espiritual:\nPERSONA NUEVA → DISCIPULADO BÁSICO → BAUTISMO EN AGUA → SOLICITUD DE MEMBRESÍA → ACEPTACIÓN FORMAL → RECEPCIÓN EN COMUNIÓN.\nLa membresía no es la meta final del crecimiento del creyente, sino el punto de partida para su integración activa en Familias de Grupo, servicio ministerial y discipulado continuo.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-007"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
        practicalProtocol:
          "Los líderes de Familias de Grupo acompañarán a los nuevos creyentes facilitando su inscripción y seguimiento durante todas las etapas del itinerario formativo.",
      },
      {
        sectionNumber: "4.2",
        title: "Incorporación de Creyentes Procedentes de Otras Congregaciones",
        content:
          "Los creyentes bautizados en agua que provengan de otras iglesias evangélicas de sana doctrina que deseen incorporarse a RENACER deberán:\n1. Presentar carta pastoral de recomendación o testimonio creíble de su trayectoria y salida en paz de su congregación anterior.\n2. Cursar el módulo de orientación institucional y doctrinal de RENACER para asegurar la comprensión y alineación con los principios y visión de la iglesia.\n3. Suscribir la solicitud formal de membresía y aceptación de las normas institucionales.",
        decisionIds: ["DEC-DEF-001"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "BAUTISMO Y MEMBRESÍA",
    description: "Regula el sacramento/ordenanza del bautismo en agua y su vinculación con la membresía.",
    sections: [
      {
        sectionNumber: "5.1",
        title: "Significado y Práctica del Bautismo",
        content:
          "Conforme al Artículo 7 de la Declaración de Fe (REN-DOC-001), el bautismo en agua se administra por inmersión a creyentes que hayan hecho profesión pública y consciente de su fe en Jesucristo. El bautismo simboliza la muerte al pecado y la resurrección a una vida nueva en Cristo.",
        decisionIds: ["DEC-DEF-007"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
        practicalProtocol:
          "Los candidatos al bautismo recibirán instrucción doctrinal previa impartida por el cuerpo pastoral o instructores autorizados por el Consejo Ministerial.",
      },
      {
        sectionNumber: "5.2",
        title: "Registro y Certificación Bautismal",
        content:
          "Todo acto bautismal será registrado por el Secretario en el Libro Oficial de Bautismos de la Iglesia, consignando fecha, lugar, ministro oficiante y datos del bautizado. Se expedirá el Certificado Oficial de Bautismo correspondiente.",
        decisionIds: ["DEC-DEF-007"],
        dependencies: ["REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "REGISTRO OFICIAL DE MIEMBROS",
    description: "Norma la administración, actualización, seguridad y privacidad del padrón institucional.",
    sections: [
      {
        sectionNumber: "6.1",
        title: "Custodia y Naturaleza del Padrón de Miembros",
        content:
          "La iglesia mantendrá un Registro Oficial de Miembros, único y fidedigno, bajo la custodia administrativa del Secretario de la Iglesia y la supervisión del Consejo de Gobierno. El registro podrá llevarse en soporte físico y plataforma digital segura con copias de respaldo periódicas.",
        decisionIds: ["DEC-DEF-015", "DEC-DEF-021"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        practicalProtocol:
          "El acceso al padrón de datos personales está estrictamente restringido mediante controles de acceso basados en roles (RBAC). Ningún dato sensible será expuesto públicamente ni transferido a terceros.",
        legalReviewRequired: true,
      },
      {
        sectionNumber: "6.2",
        title: "Campos Obligatorios del Registro",
        content:
          "El registro de cada miembro consignará obligatoriamente: nombres y apellidos completos, fecha de nacimiento, fecha de profesión de fe, fecha y lugar de bautismo, fecha de admisión formal a la membresía, estado actual (Activo, Con Restricción Temporal, En Restauración, Transferido, Renunciado, Fallecido), participación en Familias de Grupo y constancia de aceptación de los documentos institucionales.",
        decisionIds: ["DEC-DEF-015"],
        dependencies: ["REN-DOC-002", "REN-DOC-003"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "CATEGORÍAS Y ESTADO DEL MIEMBRO",
    description: "Clasifica y describe los diferentes estados institucionales de vinculación de los miembros.",
    sections: [
      {
        sectionNumber: "7.1",
        title: "Estados Institucionales y Administrativos",
        content:
          "El padrón clasifica la vinculación en las siguientes categorías:\n1. Visitante / Asistente Regular (Administrativo): No miembro.\n2. Creyente en Discipulado (Formativo): En proceso pedagógico preparatorio.\n3. Candidato a Membresía: Ha completado el curso y tramita su admisión.\n4. Miembro Activo: En plena comunión, asidua participación y pleno goce de derechos espirituales y congregacionales.\n5. Miembro con Restricción Temporal: Sujeto a medida disciplinaria o formativa temporal con suspensión cautelar de derechos de voto y ministerio.\n6. Miembro en Proceso de Restauración: En plan pastoral estructurado de reintegro espiritual y comunión.\n7. Miembro Transferido: Desvinculado formalmente por traslado a otra congregación.\n8. Miembro Renunciado: Desvinculado por manifestación voluntaria expresa.\n9. Miembro Fallecido: Baja administrativa por deceso.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-015", "DEC-PEND-004", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-003"],
        practicalProtocol:
          "Cualquier modificación del estado de un miembro requiere resolución pastoral o administrativa debidamente registrada por la Secretaría.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "MIEMBRO ACTIVO Y DERECHO AL VOTO",
    description: "Regula las condiciones para el ejercicio del voto congregacional y el control del quórum asambleario.",
    sections: [
      {
        sectionNumber: "8.1",
        title: "Calidad de Miembro Activo con Derecho al Voto",
        content:
          "Son miembros activos con derecho a voz y voto en las Asambleas Generales de la Iglesia aquellos creyentes mayores de dieciocho (18) años que figuren inscritos como Miembros Activos en el Registro Oficial, mantengan una asistencia regular comprobable a los cultos y actividades congregacionales, contribuyan con su servicio y mayordomía, y no se encuentren bajo medida de restricción temporal, disciplina formal ni inactividad no justificada conforme a las normas estatutarias aplicables.",
        decisionIds: ["DEC-DEF-015", "DEC-DEF-022"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        practicalProtocol:
          "Con anterioridad a cada Asamblea General ordinaria o extraordinaria, el Secretario confeccionará el Padrón Electoral habilitado, verificando el cumplimiento estricto de las condiciones de miembro activo.",
        legalReviewRequired: true,
      },
      {
        sectionNumber: "8.2",
        title: "Quórums y Mayorías en la Asamblea General",
        content:
          "Conforme a los Artículos 15 y 16 de la Constitución (REN-DOC-002) y los Bylaws (REN-DOC-003), el quórum para sesionar válidamente en Asamblea General es del cincuenta por ciento (50%) de los miembros activos habilitados. Las resoluciones sobre asuntos ordinarios se adoptan por mayoría simple de votos presentes. Las materias de naturaleza extraordinaria requieren el voto favorable de dos tercios (2/3) del Consejo de Gobierno y el consentimiento formal por escrito del Pastor Fundador, conforme a DEC-DEF-022.",
        decisionIds: ["DEC-DEF-015", "DEC-DEF-022"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "DERECHOS DE LOS MIEMBROS",
    description: "Consagra las prerrogativas espirituales, pastorales y comunitarias de los miembros de la iglesia.",
    sections: [
      {
        sectionNumber: "9.1",
        title: "Catálogo de Derechos de los Miembros",
        content:
          "Todo miembro en comunión de RENACER CHURCH tiene derecho a:\n1. Recibir alimentación espiritual sana, enseñanza bíblica ortodoxa y cuidado pastoral diligente.\n2. Participar de la Santa Cena del Señor y los sacramentos/ordenanzas comunitarias.\n3. Recibir acompañamiento pastoral en situaciones de duelo, enfermedad, crisis familiar o necesidad espiritual.\n4. Integrarse y participar en las Familias de Grupo y programas de discipulado de la iglesia.\n5. Postular y ejercer cargos de servicio y ministerio voluntario conforme a sus dones y los requisitos específicos de cada ministerio.\n6. Participar con voz y voto en las Asambleas Generales cuando reúna los requisitos de Miembro Activo.\n7. Ser tratado con respeto, dignidad, amor cristiano y absoluta reserva en sus confidencias espirituales legítimas.\n8. Disfrutar del debido proceso, presunción de buena fe y derecho a ser escuchado ante cualquier inquietud o señalamiento disciplinario.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-015", "DEC-PEND-004", "DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "RESPONSABILIDADES DE LOS MIEMBROS",
    description: "Establece los deberes éticos, espirituales y comunitarios que asumen voluntariamente los miembros.",
    sections: [
      {
        sectionNumber: "10.1",
        title: "Deberes Espirituales y Comunitarios",
        content:
          "Son deberes y responsabilidades de los miembros de RENACER:\n1. Procurar una vida de santidad personal, testimonio cristiano íntegro y conducta ejemplar en su hogar, trabajo y sociedad.\n2. Congregarse con fidelidad y constancia en los cultos, vigilias y reuniones de la iglesia (Hebreos 10:25).\n3. Preservar activamente la unidad de la iglesia, evitando la murmuración, el chisme, la discordia y el faccionalismo (Efesios 4:3).\n4. Honrar y orar por las autoridades espirituales e institucionales de la iglesia (1 Tesalonicenses 5:12-13).\n5. Sostener la obra del Señor mediante su mayordomía financiera voluntaria, diezmos y ofrendas conforme a la enseñanza bíblica y DEC-DEF-026.\n6. Servir a los demás poniendo sus dones y talentos a disposición de la edificación del cuerpo de Cristo.\n7. Participar activamente en la evangelización y en el discipulado continuo de la iglesia.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-018", "DEC-PEND-003"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "PARTICIPACIÓN, DISCIPULADO Y VIDA CONGREGACIONAL",
    description: "Norma el sistema pedagógico y de grupos pequeños para la formación continua de los miembros.",
    sections: [
      {
        sectionNumber: "11.1",
        title: "Escuela de Discípulos y Formación Continua",
        content:
          "La formación del creyente se canaliza a través de la Escuela de Discípulos de RENACER, estructurada en un programa de nueve (9) meses distribuido en tres (3) niveles consecutivos de tres (3) meses cada uno:\n- Nivel I: Conociendo a Cristo (Fundamentos de la fe, salvación y vida cristiana).\n- Nivel II: Creciendo en Cristo (Carácter cristiano, vida en el Espíritu, disciplinas espirituales y mayordomía).\n- Nivel III: Haciendo Discípulos (Evangelismo, mentoría, liderazgo de servicio y multiplicación espiritual).\nLa culminación de la Escuela de Discípulos no confiere credenciales ni ordenación ministerial formal, las cuales se rigen por su propia normativa.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-013"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
        practicalProtocol:
          "La coordinación pedagógica mantendrá el registro de asistencia y avance académico de cada estudiante en coordinación con el Consejo Ministerial.",
      },
      {
        sectionNumber: "11.2",
        title: "Familias de Grupo (Células / Grupos Pequeños)",
        content:
          "Las Familias de Grupo constituyen la unidad celular básica de pastoreo, comunión íntima, cuidado mutuo y evangelización relacional de RENACER. Se estimula a todo miembro y visitante regular a integrarse activamente en una Familia de Grupo en su área geográfica o afinidad comunitaria.",
        decisionIds: ["DEC-DEF-001"],
        dependencies: ["REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "DISCIPLINA ECLESIAL",
    description: "Establece la naturaleza pastoral, bíblica, protectora y restauradora de la disciplina en la iglesia.",
    sections: [
      {
        sectionNumber: "12.1",
        title: "Fundamentos y Finalidades de la Disciplina",
        content:
          "La disciplina en RENACER CHURCH tiene un propósito esencialmente pastoral, preventivo, protector y restaurador (Gálatas 6:1; Mateo 18:15-17; Hebreos 12:5-11). No constituye un instrumento de castigo punitivo, venganza, escarmiento público ni humillación. Sus fines supremos son: rescatar al creyente que ha caído en falta, preservar la santidad y testimonio del cuerpo de Cristo, proteger a las personas vulnerables y fomentar la reconciliación sincera con Dios y con el prójimo.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
      {
        sectionNumber: "12.2",
        title: "Graduación y Proporcionalidad de Medidas Disciplinarias",
        content:
          "Toda medida disciplinaria debe ser estrictamente proporcional a la gravedad de la conducta, las circunstancias del hecho y la actitud del creyente. Se contemplan las siguientes intervenciones formativas y restauradoras:\n1. Amonestación y consejería pastoral privada.\n2. Exhortación formal pastoral ante testigos ministeriales.\n3. Plan de acompañamiento espiritual y mentoreo con restricción temporal de funciones de servicio público o liderazgo.\n4. Suspensión temporal de derechos de membresía activa (voto y cargos ministeriales).\n5. Retiro y pérdida formal de la membresía de la iglesia.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
        practicalProtocol:
          "Ninguna sanción podrá aplicarse de forma arbitraria o sumaria sin el debido proceso pastoral y la constancia correspondiente en acta reservada.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIII",
    titleName: "PROCEDIMIENTO DISCIPLINARIO",
    description: "Detalla las etapas procesales para el conocimiento y resolución de asuntos disciplinarios.",
    sections: [
      {
        sectionNumber: "13.1",
        title: "Etapas del Proceso Disciplinario Pastoral",
        content:
          "El procedimiento disciplinario ordinario consta de las siguientes fases:\n1. Recepción de la inquietud o queja formal ante el cuerpo pastoral.\n2. Evaluación preliminar para verificar verosimilitud y tipología del hecho (pecado personal, conflicto interpersonal, falta administrativa o presunto delito).\n3. Diálogo pastoral inicial confidencial bajo el principio de Mateo 18:15.\n4. Si el asunto persiste o reviste gravedad, citación formal a entrevista confidencial ante el Pastor Fundador y/o delegados del Consejo Ministerial.\n5. Oportunidad plena de descargo, defensa y presentación de elementos explicativos por parte de la persona involucrada.\n6. Deliberación en oración y emisión de resolución motivada con señalamiento de medidas restauradoras claras.\n7. Notificación escrita privada y establecimiento del plan de seguimiento pastoral.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIV",
    titleName: "PROTECCIÓN, CONFIDENCIALIDAD Y DEBIDO PROCESO",
    description: "Garantiza el sigilo pastoral y los límites éticos y legales del secreto ministerial.",
    sections: [
      {
        sectionNumber: "14.1",
        title: "Deber de Confidencialidad y Manejo Responsable",
        content:
          "Los pastores, ancianos, consejeros y líderes que intervengan en procesos disciplinarios o de consejería espiritual están obligados al más estricto sigilo y reserva pastoral. Queda prohibida la divulgación pública de detalles íntimos, pecados confesados o circunstancias personales, salvo lo estrictamente necesario para la edificación y protección de la congregación con la autorización expresa del Pastor Fundador y el Consejo Ministerial.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002"],
      },
      {
        sectionNumber: "14.2",
        title: "Límites Absolutos de la Confidencialidad ante Delitos",
        content:
          "La confidencialidad eclesial NO es absoluta y no puede invocarse para encubrir la comisión de delitos, abusos contra menores de edad o agresiones físicas y sexuales. En tales casos, prevalece el deber moral, ético y legal ineludible de formular la denuncia inmediata ante las autoridades civiles y policiales competentes conforme a la ley del Estado de New Jersey (N.J.S.A. 9:6-8.10) y DEC-DEF-044.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
        practicalProtocol:
          "Cualquier líder o ministro que tenga conocimiento fundado de abuso infantil o violencia criminal deberá notificar inmediatamente a las autoridades policiales y a la línea de protección infantil de New Jersey (1-877-NJ-ABUSE), sin retrasar la denuncia por trámites eclesiales internos.",
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XV",
    titleName: "ABUSO, VIOLENCIA Y CONDUCTAS GRAVES",
    description: "Norma la política de tolerancia cero frente al abuso, la violencia y la defraudación.",
    sections: [
      {
        sectionNumber: "15.1",
        title: "Tolerancia Cero frente al Abuso y la Violencia",
        content:
          "RENACER mantiene una postura de tolerancia cero absoluta ante el abuso sexual, abuso infantil, abuso físico, acoso, explotación financiera, intimidación y violencia doméstica. La persona denunciada formalmente por estos hechos será inmediatamente suspendida de forma preventiva y cautelar de toda función ministerial y de liderazgo mientras se sustancian las investigaciones judiciales y eclesiásticas correspondientes.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
        practicalProtocol:
          "La iglesia cooperará de manera total y transparente con las autoridades policiales, judiciales y de fiscalía.",
        legalReviewRequired: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVI",
    titleName: "SUSPENSIÓN Y LIMITACIÓN TEMPORAL DE DERECHOS",
    description: "Regula las medidas cautelares de suspensión de derechos congregacionales y ministeriales.",
    sections: [
      {
        sectionNumber: "16.1",
        title: "Naturaleza de la Suspensión Temporal",
        content:
          "La suspensión de derechos es una medida cautelar y restauradora de carácter temporal. Implica la privación provisional del derecho al voto en asambleas, el cese provisional en funciones de liderazgo o ministerio público, y la abstención temporal de ministrar la Santa Cena u orar públicamente, manteniendo su derecho a congregarse y recibir instrucción bíblica salvo que exista riesgo para la seguridad de terceros.",
        decisionIds: ["DEC-DEF-015", "DEC-PEND-004", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
      },
      {
        sectionNumber: "16.2",
        title: "Temporalidad y Revisión Periódica",
        content:
          "Toda suspensión temporal deberá fijar un período de acompañamiento con revisiones periódicas por el cuerpo pastoral. La suspensión no podrá tener carácter indefinido sin evaluación estructurada.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVII",
    titleName: "RESTAURACIÓN",
    description: "Establece el protocolo pastoral para el perdón, la sanidad espiritual y la reconciliación plena.",
    sections: [
      {
        sectionNumber: "17.1",
        title: "Proceso de Restauración Integral",
        content:
          "El proceso de restauración se fundamenta en la gracia divina y requiere: reconocimiento sincero de la falta, genuino arrepentimiento, reparación del daño cuando sea materialmente posible, cumplimiento del plan de consejería pastoral y demostración de frutos dignos de arrepentimiento a lo largo del tiempo (2 Corintios 2:6-8; Mateo 3:8).",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-001", "REN-DOC-002"],
      },
      {
        sectionNumber: "17.2",
        title: "Distinción entre Perdón Espiritual y Reintegro al Liderazgo",
        content:
          "El perdón de Dios y la comunión eclesiástica se otorgan plenamente al creyente arrepentido. No obstante, el restablecimiento a cargos de liderazgo, enseñanza o ministerio público exige una evaluación rigurosa del testimonio, prudencia pastoral y cumplimiento cabal de los requisitos éticos y espirituales correspondientes. El perdón espiritual no confiere un derecho automático e inmediato al cargo o función previamente desempeñada.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVIII",
    titleName: "RENUNCIA, TRANSFERENCIA Y PÉRDIDA DE MEMBRESÍA",
    description: "Norma las causales y formalidades para la desvinculación formal de la membresía.",
    sections: [
      {
        sectionNumber: "18.1",
        title: "Causales de Baja de Membresía",
        content:
          "La condición de miembro de RENACER cesa por las siguientes causas:\n1. Renuncia voluntaria expresa, presentada por escrito ante la Secretaría de la Iglesia.\n2. Transferencia formal y expedición de carta pastoral de traslado hacia otra iglesia de sana doctrina.\n3. Inasistencia e inactividad injustificada prolongada, tras haberse agotado los esfuerzos pastorales de contacto y acompañamiento.\n4. Exclusión formal por resolución disciplinaria en casos de rebeldía persistente, herejía no retractada o comisión de conductas graves sin arrepentimiento.\n5. Fallecimiento del miembro.",
        decisionIds: ["DEC-DEF-001", "DEC-DEF-015", "DEC-PEND-004", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-003"],
        practicalProtocol:
          "La Secretaría de la Iglesia asentará la novedad en el Registro Oficial consignando la fecha y causal de la baja, notificando al Consejo de Gobierno.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIX",
    titleName: "APELACIONES, REVISIÓN Y REGISTRO",
    description: "Consagra el derecho a solicitar reconsideración y revisión de resoluciones disciplinarias.",
    sections: [
      {
        sectionNumber: "19.1",
        title: "Recurso de Revisión Pastoral",
        content:
          "El miembro que considere que una medida disciplinaria fue adoptada con vicios de procedimiento o manifiesta desproporción podrá solicitar por escrito la revisión pastoral del caso ante el Pastor Fundador y el Consejo Ministerial, aportando los elementos de hecho pertinentes. La resolución que adopte el Pastor Fundador en conjunto con el Consejo Ministerial será definitiva en el orden eclesiástico.",
        decisionIds: ["DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-004"],
      },
    ],
  },
  {
    titleNumber: "TÍTULO XX",
    titleName: "PROTECCIÓN CONTRA ABUSO DE AUTORIDAD",
    description: "Establece salvaguardas explícitas contra el autoritarismo, el abuso de poder y la coerción religiosa.",
    sections: [
      {
        sectionNumber: "20.1",
        title: "Prohibición de Extralimitación y Coerción Espiritual",
        content:
          "Ningún ministro, pastor, oficial, consejero o líder de RENACER podrá utilizar su cargo o influencia para:\n1. Coaccionar decisiones financieras privadas de los miembros o exigir aportes patrimoniales bajo amenaza de maldición espiritual.\n2. Intervenir o imponer decisiones en el noviazgo, matrimonio o vida de pareja de los creyentes fuera de la libre consejería bíblica solicitada voluntariamente.\n3. Intimidar a miembros con amenazas de juicio divino, expulsión o condenación ante preguntas sinceras o desacuerdos administrativos respetuosos.\n4. Usar fórmulas coercitivas como 'Dios me dijo que tienes que obedecerme' para doblegar el libre albedrío de una persona.\n5. Imponer servidumbre personal, trabajos domésticos forzados o beneficios privados indebidos a favor de líderes o sus familiares.",
        decisionIds: ["DEC-DEF-013", "DEC-PEND-008", "DEC-PEND-010"],
        dependencies: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        practicalProtocol:
          "Toda denuncia fundamentada de abuso de autoridad será procesada con carácter prioritario e independiente por el Consejo de Gobierno y el Consejo Ministerial.",
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXI",
    titleName: "REVISIÓN Y DISPOSICIONES FINALES",
    description: "Norma el régimen de actualización técnica, subordinación jerárquica y armonización del manual.",
    sections: [
      {
        sectionNumber: "21.1",
        title: "Subordinación y Régimen de Modificaciones",
        content:
          "Este manual está subordinado a las Sagradas Escrituras, la Declaración de Fe y Doctrina (REN-DOC-001), la Constitución de RENACER (REN-DOC-002) y los Bylaws (REN-DOC-003). Cualquier enmienda requerirá informe técnico de armonización, revisión legal previa y aprobación por el Consejo de Gobierno con el consentimiento formal del Pastor Fundador.",
        decisionIds: ["DEC-DEF-003", "DEC-DEF-022"],
        dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
        legalReviewRequired: true,
      },
    ],
  },
];

export const MASTER_MEMBERSHIP_STATES: MembershipStateDefinition[] = [
  {
    state: "VISITANTE",
    description: "Persona que acude libremente a los servicios y actividades comunitarias de la iglesia.",
    rights: "Asistencia a cultos públicos, recepción de enseñanza bíblica y acogida pastoral.",
    limitations: "Sin derecho a voto en asambleas ni ejercicio de ministerios oficiales.",
    transitionCondition: "Inscripción en discipulado o solicitud formal.",
    administrativeCategoryOnly: true,
  },
  {
    state: "EN_DISCIPULADO",
    description: "Creyente que cursa activamente los módulos de formación inicial en la Escuela de Discípulos.",
    rights: "Formación bíblica, consejería de discipulado e integración en Familias de Grupo.",
    limitations: "Sin derecho a voto ni cargos de liderazgo.",
    transitionCondition: "Culminación del discipulado y bautismo.",
  },
  {
    state: "CANDIDATO_A_MEMBRESIA",
    description: "Creyente bautizado que ha finalizado su formación y solicita formalmente su admisión.",
    rights: "Participación comunitaria y evaluación pastoral para recepción formal.",
    limitations: "Voto en suspenso hasta formalización de recepción.",
    transitionCondition: "Aprobación y bienvenida congregacional.",
  },
  {
    state: "MIEMBRO_ACTIVO",
    description: "Creyente admitido formalmente, en plena comunión, asidua participación y vida cristiana íntegra.",
    rights: "Plena participación sacramental, voz y voto en Asambleas Generales, ejercicio de ministerios.",
    limitations: "Ninguna, sujeto a fidelidad doctrinal y comunitaria.",
    transitionCondition: "Mantenimiento de asistencia y mayordomía activa.",
  },
  {
    state: "MIEMBRO_CON_RESTRICCION_TEMPORAL",
    description: "Miembro sujeto a medida cautelar o disciplinaria formativa.",
    rights: "Asistencia a cultos y recepción de cuidado pastoral.",
    limitations: "Suspensión provisional de voto en asambleas y cargos de ministerio público.",
    transitionCondition: "Superación del proceso disciplinario o pastoral.",
  },
  {
    state: "MIEMBRO_EN_RESTAURACION",
    description: "Miembro en cumplimiento voluntario de un plan pastoral de sanidad y reintegro espiritual.",
    rights: "Acompañamiento pastoral intensivo, consejería y comunión espiritual.",
    limitations: "Funciones ministeriales públicas restringidas hasta alta pastoral.",
    transitionCondition: "Evaluación favorable y reintegración plena.",
  },
  {
    state: "TRANSFERIDO",
    description: "Ex-miembro desvinculado formalmente por traslado de membresía a otra iglesia.",
    rights: "Expedición de carta pastoral de recomendación de traslado.",
    limitations: "Cese absoluto de derechos y obligaciones en RENACER.",
    transitionCondition: "Emisión y entrega de carta de transferencia.",
    administrativeCategoryOnly: true,
  },
  {
    state: "RENUNCIADO",
    description: "Ex-miembro desvinculado por manifestación voluntaria por escrito.",
    rights: "Constancia de baja administrativa.",
    limitations: "Cese absoluto de derechos en RENACER.",
    transitionCondition: "Presentación de carta de renuncia.",
    administrativeCategoryOnly: true,
  },
  {
    state: "FALLECIDO",
    description: "Miembro fallecido registrado para memoria y honra institucional.",
    rights: "Acompañamiento y consolación pastoral a deudos.",
    limitations: "Baja definitiva por deceso.",
    transitionCondition: "Certificado o constancia de defunción.",
    administrativeCategoryOnly: true,
  },
];

export const MASTER_MEMBERSHIP_RESPONSIBILITY_MATRIX: ResponsibilityMatrixRow[] = [
  {
    proceso: "Admisión de Miembros",
    pastor: "Autoridad final y bienvenida",
    consejoGobierno: "Supervisión institucional",
    consejoMinisterial: "Evaluación y aprobación formal",
    lider: "Acompañamiento y reporte de avance",
    secretarioRegistro: "Recepción de solicitud e inscripción",
    miembro: "Presentación voluntaria de solicitud",
  },
  {
    proceso: "Bautismo en Agua",
    pastor: "Ministración u ordenación de ministros",
    consejoGobierno: "Facilitación logística",
    consejoMinisterial: "Examen doctrinal de candidatos",
    lider: "Preparación de candidatos",
    secretarioRegistro: "Asiento en Libro de Bautismos",
    miembro: "Profesión pública de fe",
  },
  {
    proceso: "Registro Oficial y Padrón",
    pastor: "Supervisión espiritual",
    consejoGobierno: "Custodia fiduciaria y seguridad de datos",
    consejoMinisterial: "Validación periódica",
    lider: "Reporte de novedades locales",
    secretarioRegistro: "Administración directa del padrón",
    miembro: "Actualización de datos personales",
  },
  {
    proceso: "Disciplina Pastoral Ordinaria",
    pastor: "Conducción y resolución pastoral",
    consejoGobierno: "Apoyo en caso de implicación fiduciaria",
    consejoMinisterial: "Acompañamiento y discernimiento",
    lider: "Intervención inicial Mateo 18 (privado)",
    secretarioRegistro: "Archivo confidencial de actas",
    miembro: "Disposición a la verdad y arrepentimiento",
  },
  {
    proceso: "Suspensión Temporal de Derechos",
    pastor: "Decreto pastoral motivado",
    consejoGobierno: "Notificación y salvaguarda corporativa",
    consejoMinisterial: "Deliberación y recomendación",
    lider: "Acompañamiento pastoral asignado",
    secretarioRegistro: "Registro de novedad en padrón",
    miembro: "Acatamiento y participación en restauración",
  },
  {
    proceso: "Restauración Espiritual",
    pastor: "Evaluación final y reintegro pleno",
    consejoGobierno: "Restablecimiento administrativo",
    consejoMinisterial: "Seguimiento del plan de mentoreo",
    lider: "Apoyo discipular cercano",
    secretarioRegistro: "Actualización de estado a Miembro Activo",
    miembro: "Frutos de arrepentimiento y perseverancia",
  },
  {
    proceso: "Apelación y Revisión Pastoral",
    pastor: "Decisión eclesiástica final",
    consejoGobierno: "Verificación de debido proceso estatutario",
    consejoMinisterial: "Revisión conjunta del expediente",
    lider: "Sin competencia resolutiva",
    secretarioRegistro: "Custodia del expediente reservado",
    miembro: "Presentación escrita fundamentada",
  },
  {
    proceso: "Pérdida o Baja de Membresía",
    pastor: "Confirmación pastoral",
    consejoGobierno: "Resolución de baja institucional",
    consejoMinisterial: "Recomendación fundamentada",
    lider: "Informe de inactividad o traslado",
    secretarioRegistro: "Baja formal del padrón activo",
    miembro: "Notificación o recepción de carta",
  },
  {
    proceso: "Habilitación de Derecho al Voto",
    pastor: "Validación de comunión espiritual",
    consejoGobierno: "Supervisión de legalidad estatutaria",
    consejoMinisterial: "Verificación de membresía activa",
    lider: "Sin intervención directa",
    secretarioRegistro: "Emisión de lista de habilitados",
    miembro: "Ejercicio libre y responsable del voto",
  },
];

export const MASTER_MEMBERSHIP_OPERATIONAL_WORKFLOWS: OperationalWorkflow[] = [
  {
    id: "WORKFLOW-A",
    title: "Incorporación de Nuevo Miembro",
    trigger: "Creyente finaliza el ciclo formativo inicial y solicita formalmente su admisión.",
    evaluation: "Verificación de bautismo por inmersión, culminación de discipulado y adhesión doctrinal a REN-DOC-001.",
    responsible: "Consejo Ministerial / Secretaría de la Iglesia.",
    decision: "Aprobación de ingreso y fijación de fecha para bienvenida congregacional.",
    documentation: "Formulario de Solicitud de Membresía firmado y certificado de bautismo.",
    followUp: "Asignación a Familia de Grupo y registro en el padrón activo.",
    steps: [
      "1. Entrega y recepción del Formulario de Solicitud de Membresía en la Secretaría.",
      "2. Verificación de requisitos doctrinales, formativos y de bautismo por el Consejo Ministerial.",
      "3. Entrevista pastoral de bienvenida y clarificación de compromisos comunitarios.",
      "4. Emisión de dictamen favorable de admisión por el Consejo Ministerial.",
      "5. Asiento formal en el Registro Oficial de Miembros por el Secretario.",
      "6. Presentación pública y bienvenida fraterna en culto congregacional.",
    ],
  },
  {
    id: "WORKFLOW-B",
    title: "Registro Oficial y Actualización del Padrón",
    trigger: "Ocurrencia de un hecho que altere el estado de un miembro (alta, traslado, suspensión, baja).",
    evaluation: "Examen de la documentación respaldatoria que sustenta el cambio de estado.",
    responsible: "Secretario de la Iglesia.",
    decision: "Actualización informática y documental del Registro Oficial de Miembros.",
    documentation: "Acta pastoral, resolución disciplinaria, carta de traslado o partida de defunción.",
    followUp: "Emisión periódica de reportes consolidados al Consejo de Gobierno.",
    steps: [
      "1. Notificación formal de la novedad respaldada por documento oficial.",
      "2. Ingreso seguro al sistema de padrón con credenciales autorizadas (RBAC).",
      "3. Modificación del estado del miembro y archivo digital del documento respaldo.",
      "4. Generación de bitácora inmutable de auditoría del cambio de estado.",
      "5. Notificación al área pastoral correspondiente.",
    ],
  },
  {
    id: "WORKFLOW-C",
    title: "Verificación de Miembro Activo",
    trigger: "Convocatoria a Asamblea General o postulación a funciones de servicio.",
    evaluation: "Comprobación de membresía formal, asistencia regular comprobable y ausencia de medidas disciplinarias vigentes.",
    responsible: "Secretaría de la Iglesia / Consejo de Gobierno.",
    decision: "Certificación de la calidad de Miembro Activo.",
    documentation: "Certificado o listado oficial de verificación.",
    followUp: "Inclusión en el padrón de habilitados correspondiente.",
    steps: [
      "1. Solicitud de verificación por parte del órgano convocante.",
      "2. Cotejo en el Registro Oficial de Miembros del estado y antigüedad.",
      "3. Verificación con el cuerpo pastoral de la no existencia de sanciones disciplinarias activas.",
      "4. Emisión de constancia oficial de Miembro Activo.",
    ],
  },
  {
    id: "WORKFLOW-D",
    title: "Preparación del Padrón Electoral para Asambleas",
    trigger: "Publicación formal de la convocatoria a Asamblea General Ordinaria o Extraordinaria.",
    evaluation: "Cierre temporal del padrón y depuración de miembros habilitados mayores de 18 años.",
    responsible: "Secretario de la Iglesia con fiscalización del Consejo de Gobierno.",
    decision: "Aprobación y publicación del Padrón Electoral Definitivo.",
    documentation: "Libro de Padrón Electoral Asambleario con firmas de autoridades.",
    followUp: "Control de asistencia y verificación del quórum del 50% al inicio de la asamblea.",
    steps: [
      "1. Cierre administrativo del padrón con la antelación establecida por los reglamentos aplicables.",
      "2. Identificación de miembros activos mayores de 18 años al día en sus compromisos estatutarios.",
      "3. Publicación del padrón provisional para observaciones o aclaraciones de los miembros.",
      "4. Resolución de observaciones por la Secretaría y cierre definitivo del Padrón Electoral.",
      "5. Entrega de la lista oficial a la mesa receptora de acreditaciones de la Asamblea.",
    ],
  },
  {
    id: "WORKFLOW-E",
    title: "Proceso Disciplinario Pastoral Ordinario",
    trigger: "Recepción de queja, informe pastoral o notoriedad de conducta contraria a la fe o santidad.",
    evaluation: "Verificación de indicios, tipología de la falta y diálogo pastoral confidencial (Mateo 18).",
    responsible: "Pastor Fundador / Consejo Ministerial.",
    decision: "Adopción de medida pastoral restauradora, formativa o disciplinaria.",
    documentation: "Acta confidencial del proceso disciplinario en archivo reservado.",
    followUp: "Designación de mentor pastoral y seguimiento del plan restaurador.",
    steps: [
      "1. Recepción confidencial del asunto y valoración preliminar en oración.",
      "2. Entrevista pastoral inicial en privado con la persona involucrada.",
      "3. Si la falta reviste gravedad o persiste, convocatoria formal ante el Consejo Ministerial.",
      "4. Audiencia confidencial para escuchar descargos y valorar actitud del creyente.",
      "5. Emisión de resolución pastoral motivada y plan de acompañamiento.",
      "6. Notificación privada por escrito y registro confidencial en Secretaría.",
    ],
  },
  {
    id: "WORKFLOW-F",
    title: "Protocolo ante Casos de Abuso o Posible Delito",
    trigger: "Denuncia, sospecha fundada o detección de abuso infantil, violencia o delito penal.",
    evaluation: "Evaluación inmediata de seguridad física y salvaguarda de víctimas (sin investigación eclesial obstructiva).",
    responsible: "Pastor Fundador / Consejo de Gobierno / Oficial de Protección.",
    decision: "Denuncia policial obligatoria inmediata y suspensión cautelar preventiva del presunto infractor.",
    documentation: "Registro legal del reporte ante autoridades de New Jersey (N.J.S.A. 9:6-8.10).",
    followUp: "Cooperación irrestricta con la fiscalía y asistencia terapéutica y pastoral a las víctimas.",
    steps: [
      "1. Recepción de la alerta y atención prioritaria inmediata a la seguridad de la víctima.",
      "2. Comunicación obligatoria inmediata a la policía local y a la línea de abuso infantil (1-877-NJ-ABUSE).",
      "3. Suspensión cautelar e inmediata del denunciado de todo cargo, acceso o ministerio en la iglesia.",
      "4. Abstención absoluta de realizar investigaciones internas que interfieran con la justicia civil.",
      "5. Cooperación plena con los organismos judiciales y policiales del Estado.",
      "6. Brindamiento de contención pastoral y psicológica profesional a los afectados.",
    ],
  },
  {
    id: "WORKFLOW-G",
    title: "Suspensión Temporal de Derechos de Membresía",
    trigger: "Resolución disciplinaria que ordena la suspensión cautelar o correctiva de un miembro.",
    evaluation: "Valoración de la proporcionalidad y establecimiento de términos claros de restauración.",
    responsible: "Pastor Fundador en consulta con el Consejo Ministerial.",
    decision: "Decreto formal de suspensión temporal de voto y funciones públicas.",
    documentation: "Resolución formal notificada por escrito al miembro y asentada en Secretaría.",
    followUp: "Revisiones periódicas de cumplimiento y actitud espiritual.",
    steps: [
      "1. Emisión de la resolución formal detallando motivos, alcance y término de revisión.",
      "2. Notificación en entrevista pastoral privada al creyente.",
      "3. Asiento cautelar del cambio de estado en el padrón por el Secretario.",
      "4. Asignación de consejero o mentor para el acompañamiento durante la suspensión.",
      "5. Evaluación periódica del progreso de la restauración.",
    ],
  },
  {
    id: "WORKFLOW-H",
    title: "Restauración y Reintegración Plena",
    trigger: "Cumplimiento satisfactorio del plan pastoral y manifestación inequívoca de arrepentimiento y sanidad.",
    evaluation: "Informe favorable del mentor pastoral y entrevista de evaluación con el Consejo Ministerial.",
    responsible: "Pastor Fundador / Consejo Ministerial.",
    decision: "Reintegro formal a la condición de Miembro Activo en plena comunión.",
    documentation: "Acta de Restauración y actualización del padrón.",
    followUp: "Seguimiento pastoral continuo en amor fraterno.",
    steps: [
      "1. Presentación del informe de avance por parte del mentor pastoral.",
      "2. Entrevista de evaluación espiritual con el Pastor Fundador y el Consejo Ministerial.",
      "3. Dictamen favorable de restauración eclesial plena.",
      "4. Actualización del estado del miembro a 'Miembro Activo' en el padrón oficial.",
      "5. Reintegración fraterna en comunión y oración pastoral de bendición.",
    ],
  },
  {
    id: "WORKFLOW-I",
    title: "Renuncia o Transferencia de Membresía",
    trigger: "Solicitud escrita de renuncia voluntaria o petición de carta pastoral de traslado a otra iglesia.",
    evaluation: "Verificación de la voluntad libre del miembro y estado de paz comunitaria.",
    responsible: "Secretario de la Iglesia con visto bueno del Pastor Fundador.",
    decision: "Expedición de carta de traslado o registro de baja por renuncia.",
    documentation: "Carta Pastoral de Transferencia o constancia de recepción de renuncia.",
    followUp: "Archivo definitivo y baja del padrón activo.",
    steps: [
      "1. Recepción de la solicitud por escrito en la Secretaría.",
      "2. Comunicación con el creyente para expresar gratitud pastoral y bendición en su nueva etapa.",
      "3. Emisión de la Carta de Transferencia o acuse de recibo de renuncia.",
      "4. Asiento de la novedad en el padrón oficial como 'Transferido' o 'Renunciado'.",
      "5. Cierre administrativo del expediente de membresía.",
    ],
  },
  {
    id: "WORKFLOW-J",
    title: "Revisión o Apelación Pastoral",
    trigger: "Escrito de apelación interpuesto por un miembro contra una medida disciplinaria.",
    evaluation: "Examen de posibles vicios de forma, desproporción o nuevos elementos de prueba.",
    responsible: "Pastor Fundador y Consejo Ministerial.",
    decision: "Ratificación, modificación o revocación de la medida disciplinaria.",
    documentation: "Resolución de Apelación debidamente motivada y archivada.",
    followUp: "Notificación al recurrente y ejecución de las determinaciones adoptadas.",
    steps: [
      "1. Recepción del recurso de revisión por escrito dentro del término reglamentario.",
      "2. Verificación de formalidades por el Consejo de Gobierno (debido proceso).",
      "3. Sesión extraordinaria conjunta del Pastor Fundador y Consejo Ministerial para analizar el caso.",
      "4. Audiencia aclaratoria con el recurrente si fuese deemed necesaria.",
      "5. Emisión de la resolución final e inapelable en el orden eclesiástico.",
      "6. Notificación escrita al miembro y actualización de registros si correspondiese.",
    ],
  },
];

export const FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT: MasterMembershipManualDraft = {
  code: "REN-DOC-005",
  id: "doc-ren-005",
  title: "MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN DE RENACER",
  shortTitle: "Manual de Membresía y Disciplina",
  version: "0.1",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "MEMBRESIA_Y_DISCIPLINA",
  author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno",
  authorId: "usr-fundador-001",
  responsibleArea: "PASTORAL_Y_GOBIERNO",
  confidentiality: "INTERNO_CONGREGACION",
  documentTarget: "MANUAL_INSTITUCIONAL",
  createdAt: "2026-09-04T12:00:00.000Z",
  updatedAt: "2026-09-04T12:00:00.000Z",
  preamble:
    "El presente Manual de Membresía, Disciplina y Restauración de RENACER CHURCH constituye el instrumento normativo, operativo y pastoral que regula el itinerario del creyente, la vida comunitaria, el cuidado mutuo, la preservación de la santidad, el debido proceso disciplinario y la restauración en la gracia de Dios. Subordinado a la Declaración de Fe y Doctrina (REN-DOC-001), la Constitución (REN-DOC-002) y los Bylaws (REN-DOC-003), este documento articula el orden eclesial sin menoscabo del amor fraterno ni de las libertades y derechos fundamentales de cada creyente en Cristo.",
  titles: MASTER_MEMBERSHIP_MANUAL_TITLES,
  membershipStates: MASTER_MEMBERSHIP_STATES,
  responsibilityMatrix: MASTER_MEMBERSHIP_RESPONSIBILITY_MATRIX,
  operationalWorkflows: MASTER_MEMBERSHIP_OPERATIONAL_WORKFLOWS,
};

export function getAllMembershipManualSections(): ManualSection[] {
  return MASTER_MEMBERSHIP_MANUAL_TITLES.flatMap((t) => t.sections);
}

export function generateFullMembershipManualMarkdown(): string {
  const manual = FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT;
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

  md += `## TABLA DE ESTADOS DE MEMBRESÍA\n\n`;
  md += `| Estado | Descripción | Derechos | Limitaciones | Condición de Transición |\n`;
  md += `|---|---|---|---|---|\n`;
  for (const st of manual.membershipStates) {
    md += `| **${st.state}** | ${st.description} | ${st.rights} | ${st.limitations} | ${st.transitionCondition} |\n`;
  }
  md += `\n---\n\n`;

  md += `## MATRIZ DE RESPONSABILIDADES DE MEMBRESÍA Y DISCIPLINA\n\n`;
  md += `| Proceso | Pastor | Consejo Gobierno | Consejo Ministerial | Líder | Secretario/Registro | Miembro |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  for (const row of manual.responsibilityMatrix) {
    md += `| **${row.proceso}** | ${row.pastor} | ${row.consejoGobierno} | ${row.consejoMinisterial} | ${row.lider} | ${row.secretarioRegistro} | ${row.miembro} |\n`;
  }
  md += `\n---\n\n`;

  md += `## FLUJOS OPERATIVOS Y DE DECISIÓN INSTITUCIONAL (WORKFLOWS A AL J)\n\n`;
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

  return md;
}
