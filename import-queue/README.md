# RENACER CHURCH MAESTRO — Cola de Importación JSON

Coloca en esta carpeta los archivos `.json` que deseas importar al sistema.

## Archivos Soportados

| Archivo | Contenido |
|---|---|
| `doctrina.json` | Declaración de Fe y artículos doctrinales |
| `constitucion.json` | Constitución de RENACER CHURCH, INC. |
| `bylaws.json` | Estatutos y reglamentos internos |
| `seminario-clases.json` | Clases del Seminario Bíblico RENACER |
| `escuela-discipulos.json` | Programa de la Escuela de Discípulos |
| `escuela-lideres.json` | Programa de la Escuela de Líderes |
| `ministerios.json` | Registro y descripción de Ministerios |
| `centro-legal.json` | Procesos y checklists del Centro Legal |
| `categorias.json` | Taxonomía y categorías del sistema |

## Estructura Estándar de Metadatos

Cada archivo JSON debe contener un bloque `meta` y un bloque `data`:

```json
{
  "meta": {
    "type": "doctrina",
    "version": "1.0",
    "date": "2026-09-02",
    "author": "Luis Uchubanda Falconí",
    "description": "Declaración de Fe — Versión Inicial"
  },
  "data": [
    {
      "title": "Artículo 1 — Las Sagradas Escrituras",
      "docNumber": "DOC-DOC-001",
      "category": "Doctrina",
      "content": "Contenido del artículo...",
      "status": "DRAFT"
    }
  ]
}
```

El sistema validará automáticamente la estructura antes de permitirte previsualizarla, aprobarla y publicarla en la base de datos oficial.
