# Spec Delta

## Purpose

Mantiene los 7 roles del viaje NT como descripciones anonimas de responsabilidades, sin asignar nombres, para evitar compromisos prematuros.

## ADDED Requirements

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
