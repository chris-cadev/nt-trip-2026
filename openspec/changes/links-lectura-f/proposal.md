# Proposal

## Why

Los links del blueprint usan filenames como texto clickeable (`ROLES.md`) y esconden la promesa a la derecha, justo donde el patron F de lectura no mira. Resultado: menos clicks y "pierde sobre que leer".

## What Changes

- Reescribir textos de links con palabras que prometen el destino (nunca filenames ni "click aqui"), front-loaded en las 2 primeras palabras.
- Mover la instruccion de navegacion ("por donde empiezo") al tope del README.
- Auditar encabezados para layer-cake: empiezan con la palabra informativa; sin cambiar estructura de roles ni juegos.

## Capabilities

### New Capabilities
- `contenido/links`: textos de links descriptivos y front-loaded en README, ROLES y RULETA, sin links rotos ni paginas huerfanas.
- `contenido/lectura`: orden de lectura F (navegacion arriba, importante en 2 primeros parrafos, encabezados informativos).

### Modified Capabilities
- Ninguna.

## Impact

- Solo edicion de `README.md`, `ROLES.md` y `RULETA.md` (textos y orden, sin cambiar reglas).
- Sin codigo. Referencia: patron F de Nielsen Norman Group (eye-tracking).
