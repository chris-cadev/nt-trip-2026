# Proposal

## Why

El deck no tiene scroll: lo que se sale de la pagina se pierde en vivo. La ruleta ya crecio con voluntario, papelitos y avisos, y en pantallas chicas o con mucho texto se corta.

## What Changes

- Cada momento cabe en su pagina sin scroll: ruleta, tarjetas y portadas recortan o compactan en vez de salirse.
- Responsive por ancho: en deck angosto la ruleta pasa a una columna y achica display, tabla y botones.
- Textareas y tablas no empujan la pagina: crecen hasta un tope y luego llevan su propio scroll interno.
- Regla visual: nada de overflow en el slide, texto que sobra se compacta.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `docs/presentacion`: cada momento cabe sin scroll y se adapta al ancho. Cambia comportamiento visible, no solo codigo.

## Impact

- Toca `slides/components/Ruleta.vue` y estilos en `slides/slides.md`.
- No toca rifa, reglas ni persistencia.
