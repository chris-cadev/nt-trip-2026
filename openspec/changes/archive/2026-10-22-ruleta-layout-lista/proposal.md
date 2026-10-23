# Proposal

## Why

La ruleta actual apila todo en una columna y la tabla no trae emojis. En vivo se lee mejor con el listado a la izquierda y la ruleta a la derecha, y cada rol debe traer el mismo emoji de sus slides para reconocerlo al instante.

## What Changes

- Layout de `Ruleta.vue` en 2 columnas: listado de roles a la izquierda, ruleta (display más girar) a la derecha.
- Fuente única de emojis en `slides/roles.js` (rol contra PNG Twemoji local). La tabla de la ruleta y los títulos de las tarjetas usan esa fuente.
- Títulos de tarjetas en `slides.md` usan componente `RolEmoji.vue` en vez de `img` hardcodeado.

## Capabilities

### New Capabilities

- `docs/presentacion`: layout de ruleta en 2 columnas con emojis por rol desde fuente única.

### Modified Capabilities

Ninguna. Los docs del blueprint no se tocan.

## Impact

- Cambia: `slides/components/Ruleta.vue`, `slides/components/RolEmoji.vue` (nuevo), `slides/roles.js` (nuevo), `slides/slides.md` (7 títulos), `slides/export/`.
- Lógica de rifa, store y reglas intactos.
- Requiere Node más `@slidev/cli` (ya instalado). Sin servicio nuevo.
