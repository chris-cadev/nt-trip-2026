# Spec Delta

## Purpose

Manual standard del fotografo que explica como guardar la memoria del viaje en fotos y video y compartirla el mismo dia, reusable en otros grupos como familia, amigos o trabajo.

## ADDED Requirements

### Requirement: Pagina del fotografo por fase
La pagina FOTOGRAFO.md SHALL explicar la chamba en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que preparar antes del viaje, que tomar cada dia y como entregar todo al cierre

### Requirement: Consejos de memoria compartida
La pagina SHALL incluir consejos practicos con frases cortas: fotos de momentos del grupo (no solo parejas), subida y compartida el mismo dia, coordinacion de spots con turismo, y respaldo de archivos.

#### Scenario: Fin del dia
- **WHEN** termina el dia
- **THEN** las fotos ya estan subidas al grupo y nadie tiene que pedirlas

#### Scenario: Espacio lleno
- **WHEN** el celular se llena a media tarde
- **THEN** el fotografo ya traia memoria libre y respaldo, porque la lista previa lo pedia

### Requirement: Base fija mas adaptacion y estilo
La pagina SHALL separar la base fija (momentos del grupo, subida el mismo dia, respaldo) de la adaptacion para familia, amigos y trabajo, SHALL cumplir ESTILO.md y SHALL enlazar con ROLES y TURISMO en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en FOTOGRAFO.md
- **THEN** puede saltar a roles y turismo, y desde esas paginas puede volver a fotografo

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
