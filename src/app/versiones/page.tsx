import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function VersionesPage() {
  return (
    <ModulePlaceholderView
      number="18"
      name="Revisiones y Control de Versiones"
      category="Gobernanza Documental"
      description="Historial inmutable de versiones de todos los documentos, comparación de cambios lado a lado (Diff) y aprobaciones."
      expectedJson="versiones.json"
      details={[
        "Regla crítica activa: Nunca se eliminan versiones previas",
        "Comparador visual de texto con resaltado en verde (adiciones) y rojo (eliminaciones)",
        "Registro de autor, fecha, hora y motivo del cambio por versión",
        "Separación estricta entre estados de Borrador, Revisión y Adopción Oficial",
      ]}
    />
  );
}
