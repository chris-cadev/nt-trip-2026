# Spec Delta

## Purpose

Completar el deck con dinero, bitácora, cierre y reglas de rifa, escritos para cerebro de 14.

## ADDED Requirements

### Requirement: Bloque dinero, bitácora y cierre
El deck SHALL traer 3 momentos nuevos antes de `Rifa final: director`: dinero, bitácora más cierre, reglas de qué no se rifa. Cada momento SHALL traer foto grande, 3 líneas o menos de texto y link a su doc.

#### Scenario: Bloque completo
- **WHEN** se navega del Director a `Rifa final`
- **THEN** aparecen dinero, bitácora más cierre y reglas, en ese orden.

### Requirement: Estilo cerebro de 14
Cada momento nuevo SHALL usar frases cortas con una idea por frase, ejemplo concreto, tono claro y sin raya em. Sin tecnicismos ni estados pendientes dentro del texto.

#### Scenario: Revisión de estilo
- **WHEN** se pasa `grep -rPn -- '\x{2014}' slides/slides.md`
- **THEN** devuelve 0.

### Requirement: Nombres de display unificados
El slide `Dinámica de roles` SHALL listar Turismo, Actividades y Fotógrafo con acento, igual que los items de rifa y las tarjetas. Ningún string de lógica SHALL cambiar.

#### Scenario: Nombres consistentes
- **WHEN** se comparan dinámica, rifa y tarjetas
- **THEN** los 7 nombres coinciden letra por letra.
