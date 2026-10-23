# Proposal

## Why

El slide de ruleta hoy se desborda: tabla de nombres, textarea, validación, display, botones, voluntariado, pendientes y regla no caben en una vista y estos slides no tienen scroll. En vivo se corta contenido.

## What Changes

- Layout compacto de `Ruleta.vue` que cabe en una vista de 16:9: tabla densa a la izquierda, columna de acción condensada a la derecha.
- Jerarquía por tamaño: lo que se usa en vivo (display, girar, tabla) grande; lo secundario (regla, pendientes, voluntariado) compacto o colapsable.
- Sin quitar funciones: nombres, validación, giros, re-giro, voluntariado, reset, pendientes y tabla siguen.

## Capabilities

### New Capabilities

- `docs/presentacion`: slide de ruleta visible completo en una vista sin scroll.

### Modified Capabilities

Ninguna. Los docs del blueprint no se tocan. Lógica de rifa intacta.

## Impact

- Cambia: `slides/components/Ruleta.vue` (solo estilos y orden), `slides/export/`.
- Sin cambios de lógica, store, reglas ni estructura de momentos.
- Requiere Node más `@slidev/cli` (ya instalado). Sin servicio nuevo.
