# viaje/roles Specification

## Purpose

Mantiene los 7 roles del viaje NT como descripciones anonimas de responsabilidades, sin asignar nombres, para evitar compromisos prematuros.

## Requirements

### Requirement: Roles anonimos por responsabilidad

ROLES.md SHALL describir cada uno de los 7 roles (tesorero, chef, actividades, turismo, fotografo, animador, director) solo por lo que hace y su lista de responsabilidades a cargo, sin asignar ningun nombre de persona en titulos, cuerpos ni candidatos.

#### Scenario: Rol sin nombre asignado
- **WHEN** se lee cualquier seccion de rol en ROLES.md
- **THEN** no aparece ningun nombre propio como dueno, candidato o alternativa del rol

#### Scenario: Responsabilidades conservadas
- **WHEN** se compara cada rol con su version anterior
- **THEN** conserva sus legos y bullets de responsabilidades (tesorero d1-d3+m3, chef c1-c4, actividades a1-a3+m2, turismo t1-t3+m1, fotografo p1-p2, animador v1-v3, director j1-j2+s1-s2)

### Requirement: Nota de tareas derivadas

ROLES.md SHALL incluir una nota visible, al principio o al final, que diga que esas son las responsabilidades descritas pero que al comprender la responsabilidad saldran mas tareas relacionadas por hacer y que esas tambien hay que hacerlas.

#### Scenario: Nota presente
- **WHEN** se abre ROLES.md
- **THEN** la nota de tareas derivadas aparece completa al principio o al final del documento

### Requirement: Nucleo de 5 sin nombres

ROLES.md SHALL describir una sola vez que hay un nucleo de 5 personas considerado y que si falta alguna no se arma nada, sin nombrar a nadie.

#### Scenario: Nucleo mencionado sin nombres
- **WHEN** se lee la mencion del nucleo en ROLES.md
- **THEN** dice que son 5 personas y que sin alguna no se arma, sin listar nombres ni apodos

### Requirement: Reglas estructurales sin nombres

ROLES.md SHALL mantener las reglas (ningun rol vacio, 2 personas dobletean con los 2 jokers, prohibido juntar director + tesorero, sorteo random de los 2 jokers, principio los 5 primero) redactadas sin nombres propios.

#### Scenario: Reglas sin dueno nominal
- **WHEN** se leen las reglas de ROLES.md
- **THEN** ninguna regla asigna una persona por nombre como operadora, candidata o excluida del sorteo

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
