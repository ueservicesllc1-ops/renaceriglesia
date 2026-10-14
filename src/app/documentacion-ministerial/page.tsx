import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function DocumentacionMinisterialPage() {
  return (
    <ModulePlaceholderView
      number="15"
      name="Documentación Ministerial e Inmigración"
      category="Legal & Asuntos Eclesiásticos"
      description="Cartas testimoniales, avales ministeriales, cartas consulares y documentación de soporte eclesial para procesos migratorios."
      expectedJson="doc-ministerial-inmigracion.json"
      details={[
        "Plantillas oficiales de cartas testimoniales y de servicio eclesial",
        "Control de firmas autorizadas y sello de la iglesia",
        "Diferenciación estricta entre soporte eclesial y asesoría legal externa",
        "Registro de cartas emitidas con código de verificación",
      ]}
    />
  );
}
