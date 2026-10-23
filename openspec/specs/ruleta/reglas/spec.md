# ruleta/reglas Specification

## Purpose

Define que se decide a la suerte y que no, con filtros, operador neutral y registro para que nadie salga pelado ni inconforme.

## Requirements

### Requirement: Lo que nunca va a suerte
A suerte SHALL ir solo quien/que/cuando chico (destino filtrado, turnos, cuartos, desempates). NUNCA van a suerte: tope por persona, fondo comun, reglas NT, seguridad ni botiquin. Esos SHALL decidirse deliberadamente y por escrito.

#### Scenario: Propuesta de sortear dinero
- **WHEN** alguien propone sortear el tope o el fondo con poker
- **THEN** se rechaza y se decide deliberadamente con el tesorero

### Requirement: Filtros antes del sorteo
Todo sorteo 1 de N SHALL pasar filtros previos: tope de presupuesto, fechas posibles, clima/temporada y veto (cada NT veta 1 opcion sin explicar). Solo los finalistas SHALL entrar a la ruleta.

#### Scenario: Ruleta de destino
- **WHEN** hay 5 propuestas y filtros aplicados
- **THEN** solo los finalistas entran a la ruleta, un giro, sin reintentos, y el resultado se acata

### Requirement: Operador neutral y registro
Todo sorteo con interes SHALL operarlo quien no participa en el (Ulises gira manejo/turismo y director porque no entra en esos sorteos). El resultado SHALL registrarse en el grupo con fecha, juego usado y ganador.

#### Scenario: Sorteo operado por interesado
- **WHEN** el operador participa en el sorteo
- **THEN** el sorteo es invalido y se repite con operador neutral
