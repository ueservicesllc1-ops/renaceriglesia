import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function EscuelaLideresPage() {
  return (
    <ModulePlaceholderView
      number="08"
      name="Escuela de Líderes (6 Meses)"
      category="Formación Académica"
      description="Programa avanzado de 6 meses para la preparación, capacitación ministerial y carácter del liderazgo de RENACER."
      expectedJson="escuela-lideres.json"
      details={[
        "Módulos de mayordomía, liderazgo pastoral y ética ministerial",
        "Evaluaciones periódicas y prácticas de servicio",
        "Requisito previo para el servicio como líder o diácono",
        "Generación de certificados de graduación",
      ]}
    />
  );
}
