# Spec Delta

## ADDED Requirements

### Requirement: Todo cabe sin scroll de pagina
Cada momento SHALL caber en su pagina sin scroll del slide. Ningun bloque SHALL salirse ni tapar botones o texto.

#### Scenario: Ruleta completa en vivo
- **WHEN** se abre la rifa con nombres, tabla, display, voluntario y papelitos
- **THEN** todo se ve sin bajar y girar sigue a la vista

#### Scenario: Tarjeta sin cortes
- **WHEN** se abre cualquier tarjeta de rol
- **THEN** emoji, nombre, puntos y asignado se ven sin scroll

### Requirement: Responsive angosto
En ancho angosto la ruleta SHALL pasar a una columna, con tabla arriba y giro abajo. Display, tabla y botones SHALL achicarse para no romper.

#### Scenario: Deck angosto
- **WHEN** el ancho baja de 700px
- **THEN** las columnas se apilan y nada se sale a los lados

### Requirement: Crecimiento topado con scroll interno
Textareas, tablas y papelitos SHALL crecer hasta un tope y luego llevar su propio scroll interno. La pagina SHALL quedarse fija.

#### Scenario: Muchos nombres
- **WHEN** la lista pasa de 8 nombres
- **THEN** la tabla lleva su scroll y el resto del momento no se mueve

#### Scenario: Papelitos abierto
- **WHEN** se abre papelitos con texto largo
- **THEN** el textarea lleva su scroll y girar sigue visible
