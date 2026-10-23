# Proposal

## Why

El deck llega bien hasta la rifa del tesorero con su tono actual. Falta el resto de información relevante del blueprint: cómo se cuida el dinero, dónde queda anotado todo y cómo se cierra en ceros, más las reglas de qué no se rifa. Sin ese bloque la rifa queda sin contexto.

## What Changes

- 3 momentos nuevos en `slides/slides.md` con estilo cerebro de 14 (frases cortas, una idea por frase, ejemplo concreto, tono Tijuana claro, sin raya em): dinero (tope ciego más Spliit más bote), bitácora más cierre en ceros, reglas de qué no se rifa.
- Colocación: bloque antes de `Rifa final: director`, sin mover ni reescribir los momentos existentes del usuario.
- Unificación solo visual en `Dinámica de roles`: Turista pasa a Turismo, Itinerario pasa a Actividades, Fotografo con acento. Sin tocar items de rifa, store ni tarjetas (esos strings mueven lógica).
- Corrección menor: `¿Porqué` pasa a `¿Por qué`.

## Capabilities

### New Capabilities

- `docs/presentacion`: bloque dinero, bitácora, cierre y reglas de rifa en estilo cerebro de 14.

### Modified Capabilities

Ninguna. Los docs del blueprint no se tocan.

## Impact

- Cambia: `slides/slides.md` (3 momentos nuevos más 2 líneas de display), `slides/export/`.
- Sin cambios de lógica, componentes, store ni reglas.
- Requiere Node más `@slidev/cli` (ya instalado). Sin servicio nuevo.
