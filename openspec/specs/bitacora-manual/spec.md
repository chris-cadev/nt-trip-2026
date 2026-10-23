# bitacora-manual Specification

## Purpose

Manual standard de la bitacora del viaje en Google Docs que explica como dejar constancia de decisiones con permisos de solo lectura y avisos automaticos, reusable en otros grupos.

## Requirements

### Requirement: Setup de la bitacora con permisos
La pagina BITACORA.md SHALL explicar como crear el doc, como compartirlo (director con edicion, resto con lectura) y que plantilla minima lleva (empates, rifas, retro, semilla).

#### Scenario: Director crea la bitacora
- **WHEN** el director sigue la pagina antes del viaje
- **THEN** termina con un doc compartido donde solo el puede escribir y el resto puede leer

#### Scenario: Lector entiende que se anota
- **WHEN** alguien abre la bitacora
- **THEN** ve las 4 secciones (empates, rifas, retro, semilla) con un ejemplo anotado en cada una

### Requirement: Avisos de cambios para todos
La pagina SHALL explicar como activa cada lector el aviso de ediciones en Google Docs y como confirma el director que todos lo activaron.

#### Scenario: Lector activa su aviso
- **WHEN** un lector sigue los pasos de avisos
- **THEN** recibe email cuando el director agrega o quita contenido, sin pedirle nada al director

#### Scenario: Director verifica cobertura
- **WHEN** el director pregunta en el chat quien ya activo su aviso
- **THEN** la pagina le da el texto listo para pedirlo y que contestar si alguien no puede

### Requirement: Flujo de anuncio por decision
La pagina SHALL definir el flujo: el director anota la decision en el doc al momento y avisa en el chat con el link, con textos listos para copiar.

#### Scenario: Empate decidido en el dia
- **WHEN** el grupo vota y el director anota el resultado
- **THEN** manda el aviso al chat y la decision queda en el doc con fecha, sin depender del scroll

#### Scenario: Cierre sin copy paste
- **WHEN** llega el cierre y la bitacora se llevo al dia
- **THEN** no hay que copiar nada del chat: el doc ya trae empates, rifas, retro y semilla

### Requirement: Estilo y enlaces del blueprint
La pagina SHALL cumplir ESTILO.md (sin raya em, frases cortas, ejemplos concretos, sin nombres propios), SHALL enlazar con DIRECTOR en ambos sentidos y SHALL aparecer en README y sidebar sin dejar huerfanas.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en BITACORA.md
- **THEN** puede saltar a director y al indice, y DIRECTOR.md enlaza a BITACORA donde dice "queda anotado"

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
