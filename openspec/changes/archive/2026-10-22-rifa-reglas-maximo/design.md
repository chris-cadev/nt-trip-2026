# Design

## Context

Ver proposal.md (Why). Estado actual: `rifaStore.js` con candidatos (excluye tesorero), puedeAsignar y esReglaDura (tesorero single, director distinto), historial, motivos y papelitos. Deck con 2 momentos de director (`Rifa de Director` y `Rifa final: director`).

## Goals / Non-Goals

**Goals:**

- Tope de 2 roles forzado en giro y voluntariado, con override humano registrado.
- Un solo momento de director. Regla max-2 en ROLES.md.

**Non-Goals:**

- No cambia componentes, tema, store salvo lo listado ni otros momentos.

## Decisions

- **Exclusión en `candidatos()` más filtro de tesorero intacto.** Por qué: un punto de corte para el giro; el filtro de ocupados para tesorero sigue igual. Bolsa vacía usa el mensaje existente.
- **Bloqueo en `puedeAsignar()` más entrada en `esReglaDura()`.** Por qué: el voluntariado muestra mensaje y solo pasa con la doble confirmación que ya existe. Sin código nuevo de UI.
- **Borrar `Rifa final: director`, conservar `Rifa de Director`.** Por qué: elimina el duplicado sin mover el orden (director sigue al final del flujo).
- **Regla en ROLES.md con porqué mecánico.** Por qué: con 3 roles en una persona un área queda corta; el tope reparte la carga.

## Risks / Trade-offs

- [Con pocos nombres la bolsa se vacía] → El display avisa que liberen un rol; aceptado, es el comportamiento pedido.
- [Doble delta sin archivar sobre viaje/roles] → Este delta trae el texto completo; al archivar manda el último.

## Open Questions

Ninguna.
