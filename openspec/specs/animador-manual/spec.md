# animador-manual Specification

## Purpose

Manual standard del animador que explica como cuidar el ambiente con musica, juego y medida, y que se puede reusar en otros grupos como familia, amigos o trabajo.

## Requirements

### Requirement: Pagina del animador por fase
La pagina ANIMADOR.md SHALL explicar la chamba en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que preparar antes del viaje, como mover el ambiente cada dia y como cerrar sin excesos

### Requirement: Consejos de ambiente con medida
La pagina SHALL incluir consejos practicos con frases cortas: musica y juegos con medida, peda con medida, integrar al que anda solo sin forzar, respetar momentos solo del grupo, y avisar al director si hay roces.

#### Scenario: Alguien aislado
- **WHEN** uno del grupo anda solo o aburrido
- **THEN** el animador lo integra al juego o a la platica sin forzarlo ni exhibirlo

#### Scenario: Roce que sube
- **WHEN** un roce no se calma con ambiente
- **THEN** el animador avisa al director en vez de intentar arreglarlo solo

### Requirement: Base fija mas adaptacion y estilo
La pagina SHALL separar la base fija (ambiente con medida, nadie solo, aviso a tiempo) de la adaptacion para familia, amigos y trabajo, SHALL cumplir ESTILO.md y SHALL enlazar con ROLES y DIRECTOR en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en ANIMADOR.md
- **THEN** puede saltar a roles y director, y desde esas paginas puede volver a animador

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
