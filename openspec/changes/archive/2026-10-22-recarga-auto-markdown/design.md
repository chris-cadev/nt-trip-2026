# Design

## Context

`docsify serve` ya levanta livereload en el puerto 35729 dentro del contenedor (observado con netstat durante el change visualizar-markdown-docker), pero el compose solo publica el 3000, así que el navegador nunca se entera de los cambios. Volumen bind ro ya existe: el watcher ve los cambios sin hacer nada. Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Recarga automática del navegador al guardar un `.md`, con el stack actual.
- Cero dependencias nuevas; mismo `node:20-alpine` + `docsify-cli`.

**Non-Goals:**
- No hot-swap sin recarga completa; recarga de página entera basta.
- No vigilar rutas fuera del volumen; no livereload para el puerto configurable PORT (solo docs).

## Decisions

- **Publicar `35729:35729` fijo en el compose (sin variable de entorno).** Por qué: el snippet livereload que inyecta `docsify serve` apunta al puerto interno 35729 del host de la página; si se remapea, el navegador intenta el puerto equivocado. Alternativa `${LIVERELOAD_PORT}` + flag `-P` descartada: exige coordinar dos variables y el snippet inyectado no la respeta sin configurar host también.
- **No agregar script livereload a `docs/index.html` salvo que la verificación lo exija.** Por qué: `connect-livereload` inyecta el snippet en el HTML servido; si la prueba muestra que no llega (p. ej. por el CDN o el shell mínimo), se agrega una línea `<script src="http://localhost:35729/livereload.js">` como fallback. Se decide con evidencia en apply, no por adelantado.
- **Sin `--host` extra para livereload.** Por qué: corre sobre el mismo `docsify serve` que ya enlaza `0.0.0.0`; hereda el bind.

## Risks / Trade-offs

- [El snippet inyectado puede apuntar a un host inalcanzable tras `PORT=` distinto] → Mitigación: la verificación usa el puerto docs por defecto y uno custom; si falla con custom, se documenta usar 3000 para livereload.
- [Recargas dobles si el editor guarda dos veces (swap + write)] → Mitigación: aceptado; el escenario "sin recargas espurias" solo cubre inactividad.
- [35729 ocupado en el host] → Mitigación: mismo patrón que el 3000 — se reporta y se decide entonces; no se preconfigura variable por un caso no observado.

## Migration Plan

Sin migración. Rollback: quitar la línea del puerto del compose; vuelve a F5 manual.
