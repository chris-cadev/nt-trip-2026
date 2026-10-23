# Spec Delta

## Purpose

Manual standard de turismo que explica como armar la ruta con plan B y turnos de manejo, y que se puede reusar en otros grupos como familia, amigos o trabajo.

## ADDED Requirements

### Requirement: Pagina de turismo por fase
La pagina TURISMO.md SHALL explicar la chamba en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que investigar antes del viaje, como ajustar la ruta cada dia y que anotar al cierre

### Requirement: Consejos de ruta sin tecnicismos
La pagina SHALL incluir consejos practicos con frases cortas: investigar que visitar, avisar que llevar segun el clima, plan B por lluvia o cierre, turnos de manejo y descanso del conductor, y papeles con el tesorero.

#### Scenario: Lluvia el dia de salida
- **WHEN** llueve o algo esta cerrado
- **THEN** el grupo cambia al plan B sin discutir, porque ya estaba armado

#### Scenario: Manejo largo
- **WHEN** toca tramo largo de carretera
- **THEN** los turnos y descansos estan definidos antes de subir al carro

### Requirement: Base fija mas adaptacion y estilo
La pagina SHALL separar la base fija (ruta investigada, plan B, turnos claros) de la adaptacion para familia, amigos y trabajo, SHALL cumplir ESTILO.md y SHALL enlazar con ROLES, ACTIVIDADES y TESORERIA en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en TURISMO.md
- **THEN** puede saltar a roles, actividades y tesoreria, y desde esas paginas puede volver a turismo

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
