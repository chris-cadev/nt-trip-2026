# Proposal

## Why

El blueprint crecio de 5 paginas a 15 y el inicio sigue siendo una lista plana de links. Un novato no sabe por donde empezar ni como se usa todo junto en un viaje real. Hace falta que el README sea una guia: como funciona el sistema, en que orden leer y que hacer antes, durante y despues del viaje.

## What Changes

- Reescritura de `README.md` como guia del blueprint: como funciona (repartir roles, leer tu manual, cerrar en ceros), orden de lectura sugerido y mapa de paginas por fase del viaje.
- La lista de links se conserva pero agrupada: reglas base, manuales por rol y herramientas.
- Espejo en `docs/README.md` con el mismo contenido y links relativos.
- Sin cambios en las paginas de contenido ni en el sidebar, salvo que la guia lo pida.
- Todo en el estilo del blueprint: frases cortas, ejemplos concretos, sin raya em, sin nombres propios.

## Capabilities

### New Capabilities

- `guia-inicio`: pagina de inicio como guia de uso del blueprint con flujo, orden de lectura y mapa de paginas.

### Modified Capabilities

Ninguna.

## Impact

- Archivos tocados: `README.md` en raiz y espejo en `docs/`.
- Sin cambios de codigo ni dependencias. El visualizador docsify muestra el README como portada sin tocar `index.html`.
