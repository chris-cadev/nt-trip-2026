# Design

## Context

Ver `slides/components/Ruleta.vue` (columnas 1.1fr/1fr, media 700px a 1 columna, display 2rem, tabla y textareas sin tope) y `slides/slides.md` (estilo global). El deck Slidev no lleva scroll: lo que sobra se corta.

## Goals / Non-Goals

Goals:
- La ruleta cabe en viewport de deck y de tablet sin scroll de pagina.
- En angosto se apila y compacta sin salirse a los lados.
- Lo que crece (tabla, papelitos) lleva scroll propio topado.

Non-Goals:
- No cambia logica de rifa ni textos.
- No mete libs ni rompe el tema glitch.

## Decisions

- Caja fija con `clamp()`: `.ruleta` con `max-height: 100%`, fuentes con `clamp()` y display mas chico en angosto. Antes que reescribir layouts por slide.
  Alternativa: paginar la ruleta. Se descarta porque rompe la rifa en vivo.
- Scroll interno topado: tabla con `max-height` y `overflow: auto`, textareas con `max-height` y `resize: vertical` dentro del tope. La pagina no se mueve.
  Alternativa: achicar todo sin tope. Se descarta porque con 8+ nombres se vuelve ilegible.
- Reusar el breakpoint 700px que ya existe para apilar y compactar. Sin breakpoints nuevos.
  Alternativa: mas breakpoints. Se descarta por sobra.

## Risks / Trade-offs

- [Pantalla muy baja] → Mitigacion: display y paddings compactos, tabla con scroll propio.
- [PDF export con otro viewport] → Mitigacion: verificar en `slides/export/` que no hay recortes.

## Migration Plan

- Solo CSS y estilos scoped. Rollback: volver al commit anterior.

## Open Questions

- Ninguna.
