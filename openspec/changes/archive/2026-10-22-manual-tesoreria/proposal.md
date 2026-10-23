# Proposal

## Why

El rol de tesorero esta repartido entre ROLES, PRESUPUESTO y SPLIIT, sin un como paso a paso. Cada viaje depende de quien le toque el rol y de lo que esa persona ya sepa. Hace falta una pagina aparte que junte finanzas y consejos en un standard que sirva para este viaje y para otros grupos (familia, amigos, trabajo).

## What Changes

- Nueva pagina `TESORERIA.md`: manual del tesorero por fase (antes, durante, cierre) con consejos concretos.
- Base fija reutilizable mas seccion de adaptacion para familia, amigos y trabajo.
- Enlaces desde `ROLES.md` (tesorero), `PRESUPUESTO.md` y `CIERRE.md` hacia la nueva pagina.
- Entrada en `README.md` y espejo en `docs/` (`TESORERIA.md` y `_sidebar.md`).
- Todo en el estilo del blueprint: frases cortas, ejemplos concretos, sin raya em, sin nombres propios.

## Capabilities

### New Capabilities

- `tesoreria-manual`: pagina standard del tesorero con flujo por fase, consejos de finanzas y guia de adaptacion a otros grupos.

### Modified Capabilities

Ninguna.

## Impact

- Archivos nuevos: `TESORERIA.md` en raiz y espejo en `docs/`.
- Archivos tocados: `README.md`, `ROLES.md`, `PRESUPUESTO.md`, `CIERRE.md`, `docs/_sidebar.md`.
- Sin cambios de codigo ni dependencias. El visualizador docsify la muestra sola al existir el `.md`.
