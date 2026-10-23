# contenido/estilo Specification

## Purpose

Los documentos del blueprint se leen sin em dash: cada "—" tiene reemplazo definido y lo existente queda corregido sin romper links.

## Requirements

### Requirement: Sin em dash en documentos nuevos
Todo documento markdown nuevo del blueprint SHALL escribirse sin el caracter "—". Para unir titulo y aclaracion SHALL usarse dos puntos; para incisos SHALL usarse comas o parentesis; para remates SHALL usarse punto y seguido.

#### Scenario: Revision de documento nuevo
- **WHEN** se agrega un .md al blueprint
- **THEN** un grep de "—" devuelve 0 resultados en ese archivo

### Requirement: Correccion de lo existente con links intactos
Los 12 usos actuales en `README.md` (4), `ROLES.md` (7) y `RULETA.md` (1) SHALL reescribirse caso por caso: titulos con dos puntos (`## Tesorero: Ulises (fijo)`), bullets con dos puntos o punto, aclaraciones con parentesis o coma. Cada encabezado renombrado SHALL actualizar sus links entrantes en el mismo change, y al final SHALL verificarse 0 rotos y 0 huerfanas con script.

#### Scenario: Encabezado renombrado
- **WHEN** `## Tesorero — Ulises (fijo)` pasa a `## Tesorero: Ulises (fijo)`
- **THEN** todo link `#tesorero--ulises-fijo` se actualiza al nuevo anchor en el mismo edit y el script reporta 0 rotos

### Requirement: Excepciones
El caracter "—" SHALL permitirse solo dentro de citas textuales o nombres propios que lo lleven. Fuera de eso no hay excepciones.

#### Scenario: Cita con em dash
- **WHEN** un documento cita un texto que trae "—"
- **THEN** se conserva tal cual dentro de la cita
