# Spec Delta

## Purpose

Manual standard de actividades que explica como marcar el ritmo del dia con horarios, pausas y control de llaves, y que se puede reusar en otros grupos como familia, amigos o trabajo.

## ADDED Requirements

### Requirement: Pagina de actividades por fase
La pagina ACTIVIDADES.md SHALL explicar la chamba en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que preparar antes del viaje, como publicar el horario cada dia y como cerrar llaves y pendientes

### Requirement: Consejos de ritmo sin tecnicismos
La pagina SHALL incluir consejos practicos con frases cortas: horario visible del dia, pausas cuando el grupo anda cansado, levantar a la gente a tiempo, control de checkins y llaves, y lista de que llevar segun clima y plan.

#### Scenario: Horario publicado
- **WHEN** empieza el dia
- **THEN** el grupo sabe a que hora se levanta, se sale, se come y se duerme, sin preguntar uno por uno

#### Scenario: Grupo cansado
- **WHEN** el grupo anda cansado a media tarde
- **THEN** actividades mete pausa y afloja el plan en vez de seguir por obligacion

### Requirement: Base fija mas adaptacion y estilo
La pagina SHALL separar la base fija (horario visible, pausas, llaves bajo control) de la adaptacion para familia, amigos y trabajo, SHALL cumplir ESTILO.md y SHALL enlazar con ROLES, DIRECTOR y TURISMO en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en ACTIVIDADES.md
- **THEN** puede saltar a roles, director y turismo, y desde esas paginas puede volver a actividades

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
