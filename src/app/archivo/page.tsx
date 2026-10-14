import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function ArchivoPage() {
  return (
    <ModulePlaceholderView
      number="16"
      name="Archivo Digital y Multimedia"
      category="Repositorio Institucional"
      description="Repositorio centralizado conectado a Backblaze B2 para PDFs, imágenes, videos de ceremonias, grabaciones y actas escaneadas."
      expectedJson="archivo-digital.json"
      details={[
        "Conexión nativa con Backblaze B2 (API AWS S3) a costo mínimo ($0.006/GB)",
        "URLs firmadas de alta seguridad para documentos privados",
        "Clasificación por carpetas: Actas, Fotos, Audios de prédicas, Clases grabadas",
        "Control de acceso por rol a archivos confidenciales",
      ]}
    />
  );
}
