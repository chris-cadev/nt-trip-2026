# Spec Delta

## Purpose

Describe los 7 roles del viaje NT solo con responsabilidades en lenguaje directo, sin la analogia de legos ni codigos que obligan a memorizar claves.

## ADDED Requirements

### Requirement: Roles sin lineas de legos

ROLES.md SHALL NOT contener ninguna linea `Legos:` ni codigos de la forma letra+numero (como `d1`, `c3`, `t2`, `m1`) en titulos, cuerpos o bullets de los 7 roles.

#### Scenario: Sin jerga de legos
- **WHEN** se lee cualquier seccion de rol en ROLES.md
- **THEN** no aparece la palabra "legos" ni codigos entre backticks con formato letra+numero

### Requirement: Responsabilidades completas en lenguaje directo

Cada rol SHALL conservar todas sus responsabilidades actuales redactadas en palabras, sin perder ninguna al quitar los codigos.

#### Scenario: Ninguna responsabilidad perdida
- **WHEN** se compara cada rol con su version anterior
- **THEN** todo lo que decian las lineas `Legos:` y los bullets sigue cubierto: fondo comun, registro de gastos, cobro de saldos, papeles y sorteo (tesorero); despensa, cocina, donde comer fuera, agua y snacks (chef); horarios, pausas, arreador, checkins y llaves (actividades); que visitar, clima, plan B, turnos de manejo (turismo); fotos y compartir (fotografo); musica, integracion, bloques solo-NT (animador); empates, convivencia, botiquin y emergencias (director)

### Requirement: Indice de docs sin legos

`docs/README.md` SHALL describir el link a ROLES.md sin la palabra "legos".

#### Scenario: Homepage consistente
- **WHEN** se lee `docs/README.md`
- **THEN** la linea del link a ROLES.md no menciona "legos"
