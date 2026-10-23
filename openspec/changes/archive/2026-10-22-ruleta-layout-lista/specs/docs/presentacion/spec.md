# Spec Delta

## Purpose

Dar a la ruleta un layout legible en vivo con los mismos emojis de las tarjetas de rol, desde una sola fuente.

## ADDED Requirements

### Requirement: Layout en 2 columnas
La ruleta SHALL mostrar el listado de roles a la izquierda y la ruleta (display más botón girar) a la derecha, en pantallas de deck. En PDF SHALL verse igual sin recortes.

#### Scenario: Columnas visibles
- **WHEN** se abre el momento de rifa en vivo
- **THEN** la lista queda a la izquierda y el display con girar a la derecha.

### Requirement: Emojis desde fuente única
Cada fila de la tabla SHALL traer el emoji del rol desde `slides/roles.js`. Los títulos de tarjetas SHALL usar el mismo archivo vía `RolEmoji.vue`. Ningún PNG de emoji SHALL estar hardcodeado en más de un lugar.

#### Scenario: Mismo emoji en ruleta y tarjeta
- **WHEN** se compara la fila de un rol con su tarjeta
- **THEN** ambas muestran el mismo PNG.

#### Scenario: Cambio en un lugar
- **WHEN** se cambia el PNG de un rol en `roles.js`
- **THEN** ruleta y tarjeta lo muestran sin más ediciones.
