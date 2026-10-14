import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function UsuariosPage() {
  return (
    <ModulePlaceholderView
      number="17"
      name="Usuarios y Seguridad"
      category="Control de Accesos"
      description="Gestión de cuentas de usuarios, asignación de roles jerárquicos (RBAC), sesiones activas y seguridad en el servidor."
      expectedJson="usuarios.json"
      details={[
        "Autenticación con Google OAuth (1 clic) y Correo/Contraseña vía Firebase Auth",
        "Matriz estricta de 13 roles con verificación obligatoria en servidor",
        "Control de sesiones y tokens seguros en cookies httpOnly",
        "Trazabilidad de accesos e intentos fallidos",
      ]}
    />
  );
}
