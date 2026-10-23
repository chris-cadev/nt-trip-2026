# viaje/presupuesto-reparto Specification

## Purpose

Reparte el fondo comun por puesto con duenos claros: el tesorero entrega y reporta, cada puesto maneja y devuelve, y los gastos grandes se consultan antes.

## Requirements

### Requirement: Reparto por puesto con reporte al director

PRESUPUESTO.md SHALL establecer que el tesorero da a cada puesto lo que necesita segun su chamba y le reporta todo al director: que puesto, cuanto y para que.

#### Scenario: Reparto reportado
- **WHEN** el tesorero entrega presupuestos
- **THEN** el director sabe cuanto tiene cada puesto y para que, antes de que se gaste

### Requirement: Cada puesto maneja y devuelve

PRESUPUESTO.md SHALL establecer que cada puesto maneja su presupuesto y devuelve lo que sobre al cierre, y ROLES.md SHALL reflejarlo en chef ("maneja su presupuesto y devuelve lo que sobra").

#### Scenario: Sobrante devuelto
- **WHEN** termina el viaje
- **THEN** cada puesto devolvio lo que no gasto y no hay dinero perdido entre puestos

### Requirement: Regla del 1/3 con consulta

PRESUPUESTO.md SHALL establecer que ningun gasto de un solo consumible de 1/3 o mas del presupuesto se hace sin consultar antes al director y al tesorero.

#### Scenario: Gasto grande frenado a tiempo
- **WHEN** un puesto quiere gastar 1/3 o mas en un solo consumible
- **THEN** primero lo consulta con director y tesorero, y solo sigue con su visto bueno
