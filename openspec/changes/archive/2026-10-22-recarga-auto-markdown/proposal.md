# Proposal

## Why

El visualizador muestra los `.md` pero exige F5 manual tras cada edición; editando roles con los 5 NT el ciclo editar-recargar se vuelve tedioso. El contenedor ya observa los archivos (volumen bind), falta que el navegador se entere solo.

## What Changes

- Expone el servidor livereload que `docsify serve` ya levanta dentro del contenedor (puerto 35729) mediante el compose, sin nuevas dependencias.
- El navegador recarga la página automáticamente al guardar un `.md`, sin F5 ni reinicio del contenedor.
- Documenta el comportamiento en el README (una línea).

## Capabilities

### New Capabilities
- `docs/recarga-auto`: el navegador recarga solo el contenido al modificarse un markdown servido, sin acción manual ni rebuild.

### Modified Capabilities
- Ninguna (no hay specs archivadas en `openspec/specs/`; `docs/visualizador` existe solo como delta sin archivar).

## Impact

- Cambia: `docker-compose.yml` (puerto livereload), `README.md` (una línea).
- Sin cambios en `docs/index.html` salvo que la verificación demuestre que el snippet livereload no se inyecta (entonces una línea de script; se decide en design).
- Fuera de alcance: hot-reload sin recarga completa, edición en web, vigilar archivos fuera del volumen.
