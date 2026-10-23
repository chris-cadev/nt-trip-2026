# Spec Delta

## Purpose

Presentar el viaje NT 2026 con estructura concreta: reglas de la rifa, rifa en vivo con ruleta integrada, una tarjeta por rol y cierre con fechas y lugares tentativos.

## ADDED Requirements

### Requirement: Estructura de 14 momentos
El deck SHALL tener 14 momentos: portada, dinámica de roles, qué no se puede hacer, qué sí se puede hacer, rifa de tesorero más 5 roles, 7 tarjetas de rol, rifa del director y final con tentativas. Sin límite de duración.

#### Scenario: Orden completo
- **WHEN** se navega el deck de inicio a fin
- **THEN** aparecen los 14 momentos en ese orden con transición animada entre ellos.

### Requirement: Ruleta reusable con nombres
El momento de rifa SHALL incluir una ruleta reusable que acepta los 5 nombres de integrantes, valida errores con mensajes claros y rifa rol por rol con animación. La UI SHALL mostrar la tabla de roles con su nombre asignado.

#### Scenario: Nombres válidos
- **WHEN** se escriben 5 nombres distintos y no vacíos
- **THEN** se habilita el botón de girar.

#### Scenario: Error visible
- **WHEN** falta un nombre, hay uno vacío o uno repetido
- **THEN** aparece un mensaje que dice cuál es el problema y girar sigue bloqueado.

#### Scenario: Rifa en vivo
- **WHEN** el que expone gira la ruleta para un rol
- **THEN** sale un nombre al azar con animación y la tabla marca ese rol como asignado.

#### Scenario: Control por fila
- **WHEN** un resultado no convence
- **THEN** se puede re-girar ese rol sin borrar los demás.

### Requirement: Orden tesorero primero y director al final
La rifa SHALL seguir este orden: tesorero entre los 5, luego 5 roles entre los 4 restantes, director al final entre esos 4. Quien sale tesorero SHALL salir de la bolsa y llevar solo ese rol.

#### Scenario: Cierre exacto
- **WHEN** termina la rifa completa
- **THEN** el tesorero tiene 1 rol, quedan los 7 cubiertos y 2 personas dobletean.

### Requirement: Persistencia local
Nombres y asignaciones SHALL guardarse en localStorage. Tras recargar el deck SHALL mostrar lo guardado y las tarjetas SHALL mostrar su nombre asignado.

#### Scenario: Recarga sin pérdida
- **WHEN** hay nombres y asignaciones y se recarga la página
- **THEN** nombres, tabla y tarjetas muestran lo mismo que antes.

#### Scenario: Tarjeta con asignado
- **WHEN** un rol ya salió rifado
- **THEN** su tarjeta muestra el nombre asignado; si no, muestra sin asignar.

### Requirement: Tarjetas de rol genéricas
Cada tarjeta SHALL traer un emoji, el nombre del rol y sus 3 puntos más importantes. Ninguna tarjeta SHALL traer nombres de personas.

#### Scenario: Tarjeta completa
- **WHEN** se abre la tarjeta de cualquier rol
- **THEN** se ve su emoji, su nombre y 3 puntos con foto grande y 3 líneas o menos de texto.

### Requirement: Final con tentativas
El momento final SHALL traer 3 fechas tentativas y 3 lugares tentativos como placeholders editables.

#### Scenario: Placeholders visibles
- **WHEN** se abre el momento final
- **THEN** se ven 3 opciones de fecha y 3 de lugar marcadas como tentativas.

### Requirement: Estilo de viernes
Cada momento SHALL usar frases cortas, una idea por frase, tono claro y sin raya em. El tema SHALL verse glitch/tech en negro amarillo blanco. El contenido puede reescribir los docs pero no cambia las reglas.

#### Scenario: Revisión de estilo
- **WHEN** se pasa `grep -rPn -- '\x{2014}' slides/slides.md`
- **THEN** devuelve 0.
