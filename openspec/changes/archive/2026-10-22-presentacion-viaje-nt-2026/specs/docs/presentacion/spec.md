# Spec Delta

## Purpose

Contar el viaje NT 2026 en 10 minutos o menos, un viernes por la tarde, con slides simples que apuntan a los docs y cierran con la rifa de roles.

## ADDED Requirements

### Requirement: Fuente separada en Slidev
La presentación SHALL vivir en `slides/slides.md` como proyecto Slidev, historia propia y sin editar los docs del blueprint.

#### Scenario: Docs intactos
- **WHEN** se arma o se exporta la presentación
- **THEN** ningún `.md` de la raíz ni de `docs/` cambia.

#### Scenario: Un proyecto arma todo
- **WHEN** se edita `slides/slides.md`
- **THEN** de ese proyecto salen el modo vivo y el PDF sin copiar contenido a mano.

### Requirement: Historia con imagen y movimiento
Cada momento SHALL traer foto grande y poco texto, con transición animada entre momentos. La historia SHALL motivar al grupo, no recitar reglamento.

#### Scenario: Nada de muro de texto
- **WHEN** se abre cualquier momento
- **THEN** se ve una imagen dominante y como máximo 3 líneas de texto.

### Requirement: Guion de 7 momentos en 10 minutos
La presentación SHALL tener 7 momentos: enganche, los 5 primero, los 7 roles, dinero, bitácora y cierre, tu manual, ahora rifamos roles. Duración total SHALL ser 10 minutos o menos.

#### Scenario: Pase en tiempo
- **WHEN** se expone a ritmo normal con una idea por slide
- **THEN** la charla cierra en 10 minutos o menos y deja tiempo para la rifa.

#### Scenario: Contenido por slide
- **WHEN** se revisa cada slide
- **THEN** cada uno trae un ejemplo concreto (quien lava platos, quien pide la ronda) y un link corto a su doc.

### Requirement: Export para tablet y modo vivo
La presentación SHALL exportar a PDF (tablet offline) y correrse en vivo con `npx slidev` (Discord con pantalla compartida) desde el mismo proyecto.

#### Scenario: Tablet sin internet
- **WHEN** se abre el PDF en la tablet sin red
- **THEN** todo el texto y el orden se ven completos y legibles con letra grande.

#### Scenario: Discord con pantalla
- **WHEN** se comparte el modo vivo en Discord
- **THEN** se navega momento por momento con transiciones y los links se pueden pegar en el chat.

### Requirement: Cierre con rifa de roles
El último momento SHALL lanzar la dinámica de asignación: ningún rol vacío, 2 personas dobletean, director no es tesorero, el que rifa no juega, cada resultado se anota.

#### Scenario: Rifa válida
- **WHEN** se rifan los 7 roles entre 5 personas
- **THEN** quedan los 7 cubiertos, se respeta la regla de director y tesorero, y el resultado queda anotado en el grupo.

#### Scenario: Empate se destraba
- **WHEN** hay empate en la rifa
- **THEN** el director desempata en 10 minutos o menos a favor de los 5.

### Requirement: Estilo de viernes
Cada momento SHALL usar frases cortas, una idea por frase, tono claro y sin raya em. Los momentos pueden reescribir el texto de los docs pero no cambian las reglas.

#### Scenario: Revisión de estilo
- **WHEN** se pasa `grep -rPn -- '\x{2014}' slides/slides.md`
- **THEN** devuelve 0 y cada momento se lee en voz alta en menos de un minuto.
