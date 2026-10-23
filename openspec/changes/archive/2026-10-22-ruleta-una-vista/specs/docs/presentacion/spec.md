# Spec Delta

## Purpose

Hacer que el slide de ruleta se vea completo en una sola vista sin scroll.

## ADDED Requirements

### Requirement: Todo visible sin scroll
El momento de rifa SHALL mostrar tabla, nombres, display, botones y mensajes dentro de la altura del slide, sin scroll, en vista de deck 16:9.

#### Scenario: Una vista
- **WHEN** se abre el slide de rifa en vivo a 1280x720
- **THEN** ningún elemento queda cortado abajo y no aparece scroll.

### Requirement: Sin perder funciones
Todas las funciones actuales SHALL seguir disponibles: entrada de nombres, validación, girar, re-girar, voluntariado, reset, pendientes y tabla rol contra nombre.

#### Scenario: Funciones intactas
- **WHEN** se usa la ruleta compacta
- **THEN** cada función responde igual que antes del cambio.
