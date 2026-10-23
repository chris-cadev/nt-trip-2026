# Spec Delta

## Purpose

Manual standard del chef que explica como alimentar al grupo con compra, cocina y agua siempre disponible, y que se puede reusar en otros grupos como familia, amigos o trabajo.

## ADDED Requirements

### Requirement: Pagina del chef por fase
La pagina CHEF.md SHALL explicar la chamba del chef en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que comprar y preguntar antes del viaje, que cocinar cada dia y como cerrar cuentas de comida

### Requirement: Consejos de comida sin tecnicismos
La pagina SHALL incluir consejos practicos con frases cortas: alergias y restricciones antes del viaje, presupuesto de comida y devolucion de sobras, agua y snacks todos los dias, y donde comer fuera.

#### Scenario: Alergias cubiertas
- **WHEN** el chef pregunta antes del viaje
- **THEN** tiene la lista de alergias y el menu evita esos ingredientes desde el dia uno

#### Scenario: Sobras devueltas
- **WHEN** sobra dinero del presupuesto de comida
- **THEN** el chef lo devuelve al tesorero con cuentas claras, sin que nadie lo pida

### Requirement: Base fija mas adaptacion y estilo
La pagina SHALL separar la base fija (alergias primero, agua diaria, cuentas claras) de la adaptacion para familia, amigos y trabajo, SHALL cumplir ESTILO.md y SHALL enlazar con ROLES, TESORERIA y DIRECTOR en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en CHEF.md
- **THEN** puede saltar a roles, tesoreria y director, y desde esas paginas puede volver a chef

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
