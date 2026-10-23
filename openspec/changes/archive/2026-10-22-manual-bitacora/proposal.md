# Proposal

## Why

DIRECTOR.md dice "queda anotado" en empates, rifas, retro y semilla, pero no dice donde ni como. El chat no sirve de archivo: se pierde en el scroll y al cierre solo queda copy paste. Hace falta una pagina estilo SPLIIT.md que explique la bitacora en Google Docs: el director escribe, el resto lee, y a todos les llega aviso.

## What Changes

- Nueva pagina `BITACORA.md`: que es la bitacora, como la crea el director, como comparte (director editor, resto lectores), como activa cada quien los avisos y como avisa el director en el chat con el link.
- La pagina sigue el modelo de `SPLIIT.md`: pasos con ejemplos y textos listos para copiar.
- `DIRECTOR.md` enlaza a `BITACORA.md` donde hoy dice "queda anotado".
- Entrada en `README.md` y espejo en `docs/` (`BITACORA.md` y `_sidebar.md`).
- Todo en el estilo del blueprint: frases cortas, ejemplos concretos, sin raya em, sin nombres propios.

## Capabilities

### New Capabilities

- `bitacora-manual`: pagina standard de la bitacora en Google Docs con setup de permisos, avisos y flujo de anuncio por decision.

### Modified Capabilities

Ninguna.

## Impact

- Archivos nuevos: `BITACORA.md` en raiz y espejo en `docs/`.
- Archivos tocados: `README.md`, `DIRECTOR.md`, `docs/_sidebar.md`.
- Sin cambios de codigo ni dependencias. Google Docs es externo y gratis; el blueprint solo documenta su uso.
