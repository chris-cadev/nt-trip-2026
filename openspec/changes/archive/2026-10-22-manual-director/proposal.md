# Proposal

## Why

El rol de director esta descrito en ROLES con 4 bullets, sin un como paso a paso. Cada viaje depende de quien le toque el rol y de lo que esa persona ya sepa. Hace falta una pagina aparte que junte el como dirigir con consejos, con el mismo modelo del manual de tesoreria, para que sirva en este viaje y en otros grupos.

## What Changes

- Nueva pagina `DIRECTOR.md`: manual del director por fase (antes, durante, cierre) con consejos concretos.
- Cubre lo propio del rol: destrabar empates en maximo 10 minutos, cuidar la convivencia, botiquin y alergias, datos de emergencia, coordinacion con tesorero y actividades.
- Base fija reutilizable mas seccion de adaptacion para familia, amigos y trabajo.
- Enlaces desde `ROLES.md` (director), `CIERRE.md` (retro) y `RULETA.md` (rifas y desempates) hacia la nueva pagina.
- Entrada en `README.md` y espejo en `docs/` (`DIRECTOR.md` y `_sidebar.md`).
- Todo en el estilo del blueprint: frases cortas, ejemplos concretos, sin raya em, sin nombres propios.

## Capabilities

### New Capabilities

- `director-manual`: pagina standard del director con flujo por fase, consejos para destrabar y convivir, y guia de adaptacion a otros grupos.

### Modified Capabilities

Ninguna.

## Impact

- Archivos nuevos: `DIRECTOR.md` en raiz y espejo en `docs/`.
- Archivos tocados: `README.md`, `ROLES.md`, `CIERRE.md`, `RULETA.md`, `docs/_sidebar.md`.
- Sin cambios de codigo ni dependencias. El visualizador docsify la muestra sola al existir el `.md`.
