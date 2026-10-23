# Proposal

## Why

Entre sorteo y sorteo nada impide que una persona acumule 3 roles o más, contra la regla de 2 dobletes. Además sobra la ronda final de director teniendo su momento propio. Hay que forzar las reglas en lógica y quitar el momento duplicado.

## What Changes

- `rifaStore.js`: nadie con 2 roles entra a la bolsa (giro y voluntariado). Tesorero solo ese rol y distinto de director siguen como están.
- Romper el máximo pide doble confirmación por decisión humana, igual que las otras reglas duras.
- `ROLES.md`: nueva regla sin nombres (nadie lleva 3 roles o más) con su porqué de una línea.
- `slides.md`: se borra el momento `Rifa final: director`. Director sale en `Rifa de Director`.

## Capabilities

### New Capabilities

- `docs/presentacion`: tope de 2 roles por persona forzado en giro y voluntariado, sin ronda final duplicada.

### Modified Capabilities

- `viaje/roles`: suma la regla de máximo 2 roles sin nombres.

## Impact

- Cambia: `slides/rifaStore.js`, `slides/slides.md` (borra 1 momento), `slides/export/`, `ROLES.md`.
- Sin cambios de componentes, tema ni estructura restante.
- Requiere Node más `@slidev/cli` (ya instalado). Sin servicio nuevo.
