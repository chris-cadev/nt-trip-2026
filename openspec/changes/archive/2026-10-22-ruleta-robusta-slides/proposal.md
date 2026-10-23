# Proposal

## Why

La ruleta de slides decide roles en vivo frente al grupo. Si falla, si hay un dato mal o si el grupo quiere decidir por instinto y no por sorteo, hoy se atora o se improvisa fuera del sistema. Esto lo hace tolerante y deja al humano mandar cuando hace falta.

## What Changes

- La ruleta aguanta datos raros: lista vacia, duplicados por mayusculas, nombres con espacios, items vacios, localStorage roto o lleno.
- Si el sistema falla (sin localStorage, props rotas, emoji perdido), la rifa sigue en memoria y avisa que anote en papelitos.
- El humano puede dar un rol a mano, re-girar uno, liberar y resetear con confirmacion, con registro de quien decidio que y por que.
- Modo papelitos: exporta la lista y el estado para seguir sin compu, y para volver a cargar despues.
- Reset y cambios con confirmacion e historial para deshacer un error de dedo.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `docs/presentacion`: la ruleta tolera edge cases y errores del sistema, y permite override humano con registro. Cambia requisitos de comportamiento, no solo codigo.

## Impact

- Toca `slides/components/Ruleta.vue`, `slides/rifaStore.js`, `slides/slides.md` (texto de fallback).
- No toca reglas de rifa (tesorero primero, director al final) ni catalogo de juegos.
- No rompe persistencia existente: misma clave `nt-rifa-v1`.
