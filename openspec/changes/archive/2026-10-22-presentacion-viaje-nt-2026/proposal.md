# Proposal

## Why

El blueprint ya está completo y nadie lo ha visto junto. Una charla de 10 minutos o menos, un viernes por la tarde, lo pone en común y cierra con la rifa de roles.

## What Changes

- Proyecto Slidev en `slides/` (dev con animaciones y transiciones), historia nueva contada para motivar, sin copiar los docs.
- Tema con layouts vistosos: foto grande y poco texto por slide. Imágenes locales en `slides/public/`.
- Export a PDF (tablet) desde el mismo proyecto. HTML en vivo vía `npx slidev`.
- Guion de 7 momentos: enganche, los 5 primero, los 7 roles, dinero, bitácora y cierre, tu manual, ahora rifamos roles.
- Cada momento apunta a su doc (ROLES, RULETA, PRESUPUESTO, SPLIIT, BITACORA, CIERRE) con link corto.
- Cierre con dinámica de asignación de roles según reglas (ningún rol vacío, director no es tesorero, el que rifa no juega, todo se anota).

## Capabilities

### New Capabilities

- `docs/presentacion`: proyecto Slidev, guion de 7 momentos, export PDF, cierre con rifa de roles.

### Modified Capabilities

Ninguna. Los docs del blueprint no se tocan.

## Impact

- Nuevo: proyecto Slidev en `slides/` (`package.json`, `slides.md`, `public/`), PDF en `slides/export/`.
- Docsify y `docs/` no cambian.
- Requiere Node más `@slidev/cli` para ver y exportar. Sin servicio nuevo.
