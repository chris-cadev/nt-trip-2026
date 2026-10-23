# Design

## Context

Ver proposal.md (Why). Estado actual: 14 docs en raíz más `docs/` con Docsify en `docker-compose.yml`. Docsify sirve para leer. La primera versión de slides fue Marp y quedó estática, como documentación recortada. El grupo pide historia con imagen y movimiento. Restricción: estilo sin raya em, frases cortas, foto grande y poco texto por momento.

## Goals / Non-Goals

**Goals:**

- Un proyecto Slidev en `slides/` que se corre en vivo y exporta a PDF.
- 7 momentos en 10 minutos o menos, foto grande y poco texto, con transiciones.
- Cierre que lanza la rifa de roles con reglas válidas.

**Non-Goals:**

- No se reescribe ningún doc del blueprint.
- No se automatiza la rifa (es física: papelitos o ruleta).
- No se define fecha ni lugar del viaje (aún no existen).

## Decisions

- **Slidev sobre Marp.** Por qué: el grupo pide animaciones y Marp no da (verificado: solo trucos CSS, sin transiciones reales). Slidev trae transiciones, layouts e imágenes. Cuesta un proyecto Node, pero es lo pedido.
- **`slides/` como proyecto Slidev.** Por qué: `slides.md` con la historia, `public/` con imágenes locales (offline en tablet), `package.json` con `@slidev/cli`. La fuente Marp anterior se retira para no tener dos orígenes.
- **PDF más modo vivo, sin HTML estático.** Por qué: PDF va offline en tablet, `npx slidev` se comparte en Discord. El HTML de Marp se retira con su fuente.
- **Foto grande y 3 líneas por momento.** Por qué: eso separa historia de reglamento. El detalle vive en los docs linkeados.
- **Placeholders locales hasta tener fotos del grupo.** Por qué: fecha y lugar no existen, no hay fotos del destino. SVG locales mantienen el PDF offline y se cambian por fotos reales sin tocar el guion.

## Risks / Trade-offs

- [Instalación pesada de Slidev y su navegador para PDF] → Instalar una vez, documentar comandos en `slides/README.md`, exportar el PDF y guardarlo en `export/`.
- [Sin fotos reales el deck se ve genérico] → Placeholders SVG locales por momento, el grupo pasa fotos y se cambian uno a uno.
- [Enganche sin anécdota real suena inventado] → Enganche genérico (el pleito del dinero) marcado para cambiar por anécdota real cuando el grupo la dé.
- [Nombres en slides chocan con ROLES sin nombres] → Docs sin nombres, slides con nombres solo en la rifa en vivo, no en el archivo base.

## Migration Plan

Se retira la fuente Marp (`presentacion.md`, `tema.css`, HTML exportado). Queda Slidev más el PDF. Rollback: el PDF viejo se regenera del historial git. Docsify sigue igual.

## Open Questions

- ¿Qué fotos del grupo usamos por momento? No bloquea: hay placeholders y se cambian sin tocar el guion.
- ¿Hay anécdota real para el enganche (un pleito o momento de otro viaje)? No bloquea: el enganche genérico se cambia por la real en una línea.
- ¿Hay roles fijos o se rifa todo? Default: se pregunta por voluntarios y se rifa el resto. Si cambia, solo cambia el texto del momento 7.
