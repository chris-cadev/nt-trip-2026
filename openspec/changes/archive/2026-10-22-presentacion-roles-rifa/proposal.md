# Proposal

## Why

El deck actual cuenta el sistema en abstracto y se siente como documentación recortada. El grupo pide estructura concreta: portada, reglas claras de la rifa, rifa en vivo con ruleta integrada, una tarjeta por rol y cierre con fechas y lugares tentativos. Sin límite de 10 minutos.

## What Changes

- Reescritura de `slides/slides.md` en 14 momentos: portada NT Trip 2026, dinámica de roles, qué no se puede hacer, qué sí se puede hacer, rifa de tesorero más 5 roles con ruleta reusable, 7 tarjetas de rol (emoji más 3 puntos cada una), rifa del director al final, cierre con 3 fechas y 3 lugares tentativos como placeholders.
- Componente Vue de ruleta reusable en `slides/components/` más estado compartido en `slides/rifaStore.js`: acepta nombres de integrantes, valida (5 nombres, sin vacíos ni repetidos) con mensajes claros, rifa rol por rol con animación, permite re-girar por fila y muestra tabla rol contra nombre asignado.
- Orden de rifa: tesorero primero entre los 5, el ganador sale de la bolsa y lleva solo ese rol; luego 5 roles entre 4; director al final entre esos 4. Cierra exacto: tesorero con 1, 2 personas dobletean.
- Nombres y asignaciones persisten en localStorage: tras recargar siguen ahí y las tarjetas muestran su asignado.
- Tema glitch/tech en negro amarillo blanco: estilo global en el deck, misma paleta.
- Reglas nuevas documentadas en `ROLES.md`: tesorero no dobletea, director se rifa al final y aparte.
- Tarjetas de rol genéricas (sin nombres): los nombres salen en la rifa en vivo y van a la bitácora, no al deck.
- Imágenes locales por momento en `slides/public/`.

## Capabilities

### New Capabilities

- `docs/presentacion`: deck Slidev de 13 momentos con ruleta integrada, tarjetas por rol y cierre con tentativas.

### Modified Capabilities

- `viaje/roles`: suma 2 reglas estructurales sin nombres (tesorero no dobletea, director se rifa al final y aparte).

## Impact

- Cambia: `slides/slides.md`, `slides/components/`, `slides/rifaStore.js`, `slides/public/`, `slides/export/presentacion.pdf`, `ROLES.md`.
- Docsify y `docs/` no cambian.
- Requiere Node más `@slidev/cli` (ya instalado en `slides/`). Sin servicio nuevo.
