import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function FormacionPastoresPage() {
  return (
    <ModulePlaceholderView
      number="14"
      name="Formación de Pastores"
      category="Desarrollo Pastoral"
      description="Programa avanzado de mentoría, preparación teológica y consejería para la ordenación e instalación de nuevos pastores."
      expectedJson="formacion-pastores.json"
      details={[
        "Malla de mentoría directa con el Pastor Fundador",
        "Evaluación de carácter pastoral, familia y teología práctica",
        "Protocolo de ordenación pastoral e imposición de manos",
        "Manual de asignación pastoral para nuevas congregaciones",
      ]}
    />
  );
}
