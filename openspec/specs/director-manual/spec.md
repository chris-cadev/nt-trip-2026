# director-manual Specification

## Purpose

Manual standard del director que explica como destrabar decisiones, cuidar la convivencia y responder ante emergencias, y que se puede reusar en otros grupos como familia, amigos o trabajo.

## Requirements

### Requirement: Pagina del director por fase
La pagina DIRECTOR.md SHALL explicar la chamba del director en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que preparar antes del viaje, que hacer cada dia y como cerrar con la retro

#### Scenario: Ejemplo concreto por paso
- **WHEN** el lector lee un paso como destrabar un empate o levantar al grupo
- **THEN** ve un ejemplo concreto de que decir o hacer (que frase usa, a quien avisa, donde lo anota)

### Requirement: Consejos para destrabar y convivir
La pagina SHALL incluir consejos practicos con frases cortas y sin tecnicismos: destrabe en maximo 10 minutos a favor de los 5, deteccion de roces, aviso al grupo y respeto a los momentos solo del grupo.

#### Scenario: Empate sin salida
- **WHEN** el grupo no se pone de acuerdo en que hacer
- **THEN** la pagina da el paso a paso para decidir en 10 minutos y una frase lista para decirlo

#### Scenario: Roce entre dos
- **WHEN** dos del grupo chocan o alguien se aisla
- **THEN** la pagina explica como intervenir sin forzar y cuando avisar al resto

### Requirement: Seguridad y salud del grupo
La pagina SHALL cubrir botiquin, alergias y medicinas anotadas, y datos de emergencia guardados, con una lista de que traer y donde guardarla.

#### Scenario: Revisar antes de salir
- **WHEN** el director prepara el viaje
- **THEN** encuentra la lista de botiquin, la hoja de alergias y los datos de emergencia para pedir al grupo

#### Scenario: Emergencia en el viaje
- **WHEN** alguien se siente mal o pasa algo grave
- **THEN** el director sabe donde estan los datos y quien hace que, sin improvisar

### Requirement: Base fija mas adaptacion reusable
La pagina SHALL separar la base fija (destrabe rapido, convivencia, seguridad) de la guia de adaptacion para familia, amigos y trabajo.

#### Scenario: Adaptar a familia
- **WHEN** el lector la usa en un viaje familiar
- **THEN** encuentra que ajustar (los papas deciden mas, los pleitos se hablan distinto)

#### Scenario: Adaptar a trabajo
- **WHEN** el lector la usa en un grupo de trabajo
- **THEN** encuentra que ajustar (roles por puesto, decisiones por responsable, nada se rifa)

### Requirement: Estilo y enlaces del blueprint
La pagina SHALL cumplir ESTILO.md (sin raya em, frases cortas, ejemplos concretos, sin nombres propios) y SHALL enlazar con ROLES, CIERRE, RULETA y TESORERIA en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en DIRECTOR.md
- **THEN** puede saltar a roles, cierre, ruleta y tesoreria, y desde esas paginas puede volver a director

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
