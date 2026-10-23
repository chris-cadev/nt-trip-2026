# Spec Delta

## Purpose

Define como se junta, se gasta y se divide el dinero del viaje sin que nadie exponga su sueldo, con el tesorero operando las herramientas.

## ADDED Requirements

### Requirement: Fondo comun con tope ciego

PRESUPUESTO.md SHALL describir la dinamica del tope ciego en papel: cada participante escribe su tope en un papelito doblado que junta el tesorero, nadie ve los numeros de los demas, y el tope mas bajo manda como techo del viaje (luego se puede pasar a software).

#### Scenario: Tope sin exponer sueldos
- **WHEN** se fija el fondo comun
- **THEN** cada quien dio su numero en privado y el viaje se planea con el mas bajo, sin que nadie revele cuanto gana

### Requirement: Gastos en curso en Spliit

PRESUPUESTO.md SHALL establecer que todos los gastos compartidos se apuntan en Spliit al momento, y que el tesorero lo opera y lo mantiene al dia.

#### Scenario: Gasto apuntado al momento
- **WHEN** alguien paga algo del grupo
- **THEN** queda registrado en Spliit con quien pago, cuanto y para quienes

### Requirement: Bote comun vs personal

PRESUPUESTO.md SHALL separar el bote comun (solo lo que usan todos) de lo personal (extras y caprichos los paga quien los pide, sin entrar al reparto).

#### Scenario: Extra fuera del bote
- **WHEN** alguien pide algo que solo el usa
- **THEN** lo paga esa persona y no entra al reparto del grupo
