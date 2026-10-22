# Design

## Context

Repo con 6 `.md` y 0 infra (ver proposal.md - Why). Docker 29.8 + Compose v5 disponibles. Sin `docker-compose.yml`, sin `docs/`, sin specs previas. Restricción: no tocar contenido existente, solo agregar visualización.

## Goals / Non-Goals

**Goals:**
- Un comando para ver todo (`docker compose up`), puerto fijo 3000.
- Sidebar manual que cubra los 6 archivos actuales.
- Volumen read-only + live-reload al editar.

**Non-Goals:**
- No auth, no deploy público, no edición web, no búsqueda avanzada.
- No auto-generación de sidebar (overkill para 6 archivos).

## Decisions

- **Docsify vía `node:20-alpine` + `docsify-cli`, no imagen `docsifyjs` sin mantener.** Por qué: imagen oficial desactualizada; con node alpine controlamos versión y sirve con `docsify serve docs -p 3000`. Alternativa MkDocs Material descartada: exige `mkdocs.yml` + build y rompe anclas `#` de ROLES.md con más frecuencia.
- **Estructura `docs/` con `index.html`, `_sidebar.md` y symlinks o copias referenciadas.** Por qué: Docsify sirve solo su root; `docs/` referencia `../ROLES.md` vía sidebar con rutas relativas y evita duplicar contenido. Alternativa servir raíz directa descartada: expondría `.git` y `openspec/.openspec.yaml`.
- **Volumen `./:/docs:ro` + `docsify serve` con livereload.** Por qué: edición en host se refleja con F5, sin rebuild. Alternativa bind rw descartada: riesgo de que el contenedor escriba.
- **Puerto 3000 fijo, sin TLS.** Por qué: solo local; exponer a red del grupo se hace después con `ports:` ya incluido. Ajuste en apply: publicado como `${PORT:-3000}:3000` porque el 3000 estaba ocupado por otro stack en la máquina (default sigue 3000, sin cambiar el spec).
- **Renderer de headings estilo GitHub en `docs/index.html`.** Por qué: Docsify colapsa `--` a `-` en slugs y rompía las 4 anclas internas de ROLES.md (estilo GitHub); el override genera slugs sin colapsar guiones. Hallazgo: el link de Turismo además no coincidía con su heading ni en GitHub — se corrigió el ancla en ROLES.md (1 línea, solo el `#...`).

## Risks / Trade-offs

- [Anclas `#turismo-...` de ROLES.md pueden cambiar de slug en Docsify] → Mitigación: verificar manualmente los 4 links internos en validación; no se reescriben en este change.
- [Symlinks en `docs/` no resuelven en Windows] → Mitigación: usar rutas relativas Docsify (`[Roles](../ROLES.md)`) en vez de symlinks si falla; tarea de validación lo cubre.
- [Imagen node:20-alpine descarga ~150MB primera vez] → Mitigación: aceptado; una sola vez por máquina.

## Migration Plan

Sin migración. Rollback: `docker compose down` + borrar `docker-compose.yml` y `docs/`; el repo vuelve a lectura en crudo.
