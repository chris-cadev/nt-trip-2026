# Spec Delta

## MODIFIED Requirements

### Requirement: Reglas estructurales sin nombres

ROLES.md SHALL mantener las reglas (ningun rol vacio, 2 personas dobletean con los 2 jokers, prohibido juntar director + tesorero, sorteo random de los 2 jokers, principio los 5 primero, tesorero con un solo rol sin dobletear, director se rifa al final y aparte entre quienes no salieron tesoreros, nadie lleva 3 roles o mas) redactadas sin nombres propios.

#### Scenario: Reglas sin dueno nominal
- **WHEN** se leen las reglas de ROLES.md
- **THEN** ninguna regla asigna una persona por nombre como operadora, candidata o excluida del sorteo

#### Scenario: Tesorero sin doblete
- **WHEN** se lee la regla del tesorero
- **THEN** dice que quien sale tesorero lleva solo ese rol y sale de la bolsa de la rifa

#### Scenario: Director al final
- **WHEN** se lee la regla del director
- **THEN** dice que el director se rifa al final y aparte, solo entre quienes no salieron tesoreros

#### Scenario: Tope de roles
- **WHEN** se lee la regla del tope
- **THEN** dice que nadie lleva 3 roles o mas
