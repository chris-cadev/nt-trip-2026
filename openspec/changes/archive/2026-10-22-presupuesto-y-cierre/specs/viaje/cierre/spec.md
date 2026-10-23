# Spec Delta

## Purpose

Define como se cierra el viaje: cuentas en cero, retro para aprender y semilla del proximo viaje elegida entre todos.

## ADDED Requirements

### Requirement: Cuentas finales en cero

CIERRE.md SHALL establecer que el tesorero cierra Spliit al final del viaje, cobra lo que falte y nadie queda debiendo.

#### Scenario: Cierre sin deudas
- **WHEN** termina el viaje
- **THEN** cada gasto quedo apuntado y cada saldo quedo cobrado, sin deudas pendientes

### Requirement: Retro dirigida

CIERRE.md SHALL establecer que la retro la dirigen actividades y director, con que funciono y que no para el proximo viaje.

#### Scenario: Retro con duenos
- **WHEN** se hace la retro
- **THEN** actividades y director la dirigen y queda escrito que se repite y que se cambia

### Requirement: Proxima semilla entre todos

CIERRE.md SHALL establecer que la semilla del proximo viaje (destino o idea) se elige entre todos con una dinamica, y que si hay que rifar se usa la ruleta de RULETA.md.

#### Scenario: Semilla elegida en grupo
- **WHEN** se elige la semilla del proximo viaje
- **THEN** todos participaron de la dinamica y el resultado quedo registrado
