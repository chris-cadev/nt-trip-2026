# Design

## Context

Ver proposal.md (Why). Estado actual: `Ruleta.vue` con 2 columnas que en contenido lleno (tabla con roles, textarea, error, display, 2 botones, barra de voluntariado, pendientes, regla) excede la altura del slide. Slidev no tiene scroll: lo que sobra se corta.

## Goals / Non-Goals

**Goals:**

- Todo el contenido del slide de rifa visible en una vista 16:9.
- Cero funciones perdidas.

**Non-Goals:**

- No cambia lógica de rifa, validación, store ni reglas.
- No cambia otros momentos del deck.

## Decisions

- **Compactar con jerarquía, no quitar.** Por qué: en vivo se mira display, girar y tabla. Regla y pendientes pasan a letra chica al pie. Voluntariado queda en una línea compacta.
- **Tabla densa y display moderado.** Por qué: el alto sobrante viene de paddings y display grande. Filas compactas, display de 2rem a 1.5rem, márgenes recortados. El salto animado sigue.
- **Textarea a 3 filas.** Por qué: 5 nombres caben con scroll interno del campo si hace falta; el campo no empuja el layout.
- **Medir antes y después en 1280x720.** Por qué: el canvas Slidev es fijo; si la altura interna cabe en el área útil una vez, cabe siempre. Verificación con captura completa del slide.

## Risks / Trade-offs

- [Letra chica ilegible en tablet] → Nada bajo 0.8rem; verificar captura a tamaño real.
- [Aún no cabe con tabla llena y voluntariado abierto] → Voluntariado colapsable (details) como respaldo; solo si la medición lo pide.

## Open Questions

Ninguna. La medición en tasks decide si hace falta el colapsable.
