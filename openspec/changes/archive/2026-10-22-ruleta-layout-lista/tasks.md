# Tasks

## 1. Fuente única y layout

- [x] 1.1 Crear `slides/roles.js` con el mapa de los 7 roles a su PNG y verificar que los 7 paths existen en `public/emoji/`.
- [x] 1.2 Crear `slides/components/RolEmoji.vue` con prop `rol` y verificar en modo vivo que renderiza el PNG.
- [x] 1.3 Reescribir el layout de `Ruleta.vue` en 2 columnas (lista izquierda, display más girar derecha) con emoji por fila, verificar con captura ancha y angosta.
- [x] 1.4 Cambiar los 7 títulos de tarjetas a `<RolEmoji>` y verificar que ningún `img` a emoji queda hardcodeado (`grep -r img slides/slides.md` devuelve 0).

## 2. Verificación final

- [x] 2.1 Re-correr flujo Playwright (nombres, giros, re-giro, recarga) y verificar que todo sigue pasando.
- [x] 2.2 Exportar PNG y PDF y verificar columnas, emojis y tarjetas sin recortes.
- [x] 2.3 Correr `openspec validate ruleta-layout-lista --strict` y verificar que pasa sin errores.
