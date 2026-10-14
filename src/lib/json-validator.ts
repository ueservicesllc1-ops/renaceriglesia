import { ImportJsonPayloadSchema } from "@/schemas";
import { DoctrinaImportSchema } from "@/schemas/doctrina.schema";

export interface ValidationResult {
  isValid: boolean;
  itemCount: number;
  type: string;
  errors: string[];
  data?: any[];
  meta?: any;
}

/**
 * Validador estricto con diagnóstico detallado de JSON
 */
export function validateImportJson(rawJsonString: string, filename: string): ValidationResult {
  try {
    const parsed = JSON.parse(rawJsonString);

    // Si es tipo 'doctrina', aplicar esquema estricto de doctrina
    if (parsed?.meta?.type === "doctrina") {
      const doctrinaResult = DoctrinaImportSchema.safeParse(parsed);
      if (!doctrinaResult.success) {
        const errorMessages = doctrinaResult.error.errors.map(
          (err) => `Campo [${err.path.join(".")}] : ${err.message}`
        );
        return {
          isValid: false,
          itemCount: 0,
          type: "doctrina",
          errors: errorMessages,
        };
      }
      return {
        isValid: true,
        itemCount: doctrinaResult.data.data.length,
        type: "doctrina",
        errors: [],
        data: doctrinaResult.data.data,
        meta: doctrinaResult.data.meta,
      };
    }

    // Validación general para otros esquemas
    const generalResult = ImportJsonPayloadSchema.safeParse(parsed);
    if (!generalResult.success) {
      const errorMessages = generalResult.error.errors.map(
        (err) => `Campo [${err.path.join(".")}] : ${err.message}`
      );
      return {
        isValid: false,
        itemCount: 0,
        type: parsed?.meta?.type || "DESCONOCIDO",
        errors: errorMessages,
      };
    }

    const { meta, data } = generalResult.data;

    if (!Array.isArray(data) || data.length === 0) {
      return {
        isValid: false,
        itemCount: 0,
        type: meta.type,
        errors: ["El bloque 'data' debe ser un array con al menos 1 elemento."],
      };
    }

    return {
      isValid: true,
      itemCount: data.length,
      type: meta.type,
      errors: [],
      data,
      meta,
    };
  } catch (err: any) {
    return {
      isValid: false,
      itemCount: 0,
      type: "ERROR_SINTAXIS",
      errors: [`Error de sintaxis JSON en '${filename}': ${err.message}`],
    };
  }
}
