# Proposal

## Why

Los 6 `.md` del repo (ROLES.md + 4 artefactos del change organizar-roles-nt) hoy solo se leen en crudo en git o en el editor. Necesitamos verlos renderizados en local con un solo comando para revisar roles con los 5 NT sin instalar nada más que Docker.

## What Changes

- Agrega `docker-compose.yml` en la raíz con un servicio de visualizador markdown (Docsify, sin build) que sirve el repo en `http://localhost:3000`.
- Monta el repo como volumen read-only para ver los archivos actuales sin copiarlos.
- Agrega `docs/index.html` mínimo + `docs/_sidebar.md` generados a mano que enlazan ROLES.md y los artefactos existentes.
- Documenta uso (`docker compose up` / `down`) en README o en el propio proposal (una sección corta).

## Capabilities

### New Capabilities
- `docs/visualizador`: servir en local todos los markdown del repo vía Docker Compose con un solo comando, en modo solo-lectura y con recarga al editar.

### Modified Capabilities
- Ninguna (no hay specs previas).

## Impact

- Nuevo: `docker-compose.yml`, `docs/index.html`, `docs/_sidebar.md`, README corto.
- Sin código de negocio; no toca `ROLES.md` ni artefactos existentes.
- Fuera de alcance: edición colaborativa en web, autenticación, despliegue público, búsqueda avanzada y elección de otro motor (MkDocs/HedgeDoc) — se registra Docsify como default por ser el más simple sin build.
