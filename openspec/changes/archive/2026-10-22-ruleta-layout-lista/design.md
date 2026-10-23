# Design

## Context

Ver proposal.md (Why). Estado actual: `Ruleta.vue` en 1 columna con tabla sin emojis; títulos de tarjetas con `img` a PNG Twemoji hardcodeado; store y lógica de rifa probados con Playwright. Sin cambios de reglas ni de flujo.

## Goals / Non-Goals

**Goals:**

- 2 columnas en la ruleta: lista izquierda, display más girar derecha.
- `roles.js` como única fuente rol contra emoji.
- `RolEmoji.vue` reusable en tabla y títulos.

**Non-Goals:**

- No cambia lógica de rifa, validación ni store.
- No cambia estructura de 14 momentos ni contenido de tarjetas.
- No se agregan emojis nuevos (los 7 PNG actuales).

## Decisions

- **Grid CSS de 2 columnas con fallback a 1 en angosto.** Por qué: en tablet vertical o PDF angosto las columnas se apilan solas. Media query a 1 columna bajo 700px.
- **`roles.js` exporta mapa `{ Tesorero: '/emoji/1f4b0.png', ... }` más helper `emojiDe(rol)`.** Por qué: un import en Ruleta y RolEmoji, cero duplicados. Los nombres de rol ya son las claves del store, mismo vocabulario.
- **`RolEmoji.vue` con prop `rol`, renderiza `img.emj`.** Por qué: títulos de markdown usan `<RolEmoji rol="Tesorero" />`; la tabla lo usa por fila. Reusa la clase `.emj` global que ya existe.
- **Entradas de nombres y botones quedan en la columna derecha con el display.** Por qué: la acción (escribir, girar) va junta; la izquierda solo informa (lista y tabla).

## Risks / Trade-offs

- [2 columnas no caben en tablet vertical] → Media query apila a 1 columna; verificar con captura angosta.
- [Títulos con componente rompen el PDF] → Verificar export PNG de una tarjeta; si falla, volver a `img` con path desde `roles.js` documentado.

## Open Questions

Ninguna. Todo lo visual se verifica con capturas en tasks.
