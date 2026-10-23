# Proposal

## Why

TESORERIA y DIRECTOR ya tienen manual con formato fijo: fases, consejos y adaptacion. Los otros 5 roles (chef, actividades, turismo, fotografo, animador) siguen con 3 o 4 bullets en ROLES. Cada viaje depende de quien le toque cada rol. Hace falta completar la coleccion con el mismo formato para que los 7 roles queden parejos.

## What Changes

- 5 paginas nuevas con el formato de TESORERIA y DIRECTOR: `CHEF.md`, `ACTIVIDADES.md`, `TURISMO.md`, `FOTOGRAFO.md`, `ANIMADOR.md`.
- Cada pagina: flujo por fase (antes, durante, cierre), consejos concretos y adaptacion para familia, amigos y trabajo.
- Enlaces de ida y vuelta: cada seccion de `ROLES.md` apunta a su pagina y cada pagina devuelve a ROLES y a sus roles vecinos (chef con tesorero, actividades con director y turismo, turismo con actividades y tesorero, fotografo con turismo, animador con director).
- Entradas en `README.md` y espejo en `docs/` (symlinks mas `_sidebar.md` y `docs/README.md`).
- Todo en el estilo del blueprint: frases cortas, ejemplos concretos, sin raya em, sin nombres propios.

## Capabilities

### New Capabilities

- `chef-manual`: pagina standard del chef con flujo por fase, consejos de comida y adaptacion a otros grupos.
- `actividades-manual`: pagina standard de actividades con flujo por fase, consejos de ritmo y adaptacion a otros grupos.
- `turismo-manual`: pagina standard de turismo con flujo por fase, consejos de ruta y adaptacion a otros grupos.
- `fotografo-manual`: pagina standard del fotografo con flujo por fase, consejos de memoria compartida y adaptacion a otros grupos.
- `animador-manual`: pagina standard del animador con flujo por fase, consejos de ambiente y adaptacion a otros grupos.

### Modified Capabilities

Ninguna.

## Impact

- Archivos nuevos: 5 paginas en raiz y espejo en `docs/`.
- Archivos tocados: `README.md`, `ROLES.md`, `TESORERIA.md` (chef y alergias), `DIRECTOR.md` (actividades y animador), `docs/_sidebar.md`.
- Sin cambios de codigo ni dependencias. El visualizador docsify muestra cada pagina sola al existir el `.md`.
