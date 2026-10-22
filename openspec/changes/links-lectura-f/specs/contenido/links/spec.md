# Spec Delta

## Purpose

Los links del blueprint prometen su destino con las primeras palabras para que el ojo en patron F los encuentre y quiera darles click.

## ADDED Requirements

### Requirement: Textos de link descriptivos
Todo link SHALL usar palabras que describen el destino (que gana quien da click), NUNCA filenames ni genericos ("click aqui", "ver mas", "indice"). Las 2 primeras palabras del link SHALL llevar la promesa.

#### Scenario: Link filename
- **WHEN** se auditan los links del blueprint
- **THEN** ninguno muestra `.md` ni genericos; todos prometen contenido ("Los 7 roles NT: quien hace que")

### Requirement: Sin links rotos ni huerfanas
Tras reescribir, SHALL verificarse con script: 0 links rotos y cada .md con entrada y salida.

#### Scenario: Verificacion
- **WHEN** se corre la revision de links
- **THEN** el script reporta OK sin rotos y sin paginas huerfanas
