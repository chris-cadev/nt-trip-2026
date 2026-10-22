# Spec Delta

## Purpose

El orden de cada pagina sigue el patron F: navegacion arriba, lo importante en los 2 primeros parrafos y encabezados que dicen de que va la seccion.

## ADDED Requirements

### Requirement: Navegacion arriba
Cada pagina SHALL abrir con a donde ir (links "Ver tambien" o "Empieza aqui") dentro de las primeras lineas, antes del principio rector o detalles.

#### Scenario: Llegada a ROLES.md
- **WHEN** un NT abre ROLES.md por primera vez
- **THEN** en las primeras lineas ve a donde ir (RULETA, indice) sin scrollear

### Requirement: Encabezados informativos
Todo encabezado SHALL empezar con la palabra que mas informa; ningun encabezado SHALL ser numeracion sola ("3. Asignacion" sin contexto). Bullets de listas SHALL variar su primera palabra (anti-bypassing).

#### Scenario: Auditoria layer-cake
- **WHEN** se leen solo los encabezados de corrido
- **THEN** cuentan la historia del archivo sin leer el cuerpo
