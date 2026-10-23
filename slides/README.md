# Slides NT Trip 2026

Presentacion con 14 momentos para exponer sin prisa. Proyecto Slidev en `slides.md`. Imágenes locales en `public/`. PDF listo en `export/`.

Corre todo desde `slides/`:

```
cd slides
```

## Instalar una vez

```
npm i
```

El export usa `playwright-chromium`, que ya viene en `package.json`.

## Ver en vivo

```
npx slidev slides.md
```

Abre http://localhost:3030/ en el navegador. Se actualiza solo al guardar. Para Discord comparte esa ventana. Para exponer a pantalla completa pulsa `F11`.

Si el tema se ve blanco al abrir, espera unos segundos o recarga. Los estilos llegan después del primer pintado.

La rifa guarda nombres y asignaciones en el navegador. Si recargas, todo sigue.

## Exportar PDF para la tablet

```
npx slidev export slides.md --format pdf --output export/presentacion.pdf
```

El PDF abre offline con los 14 momentos.

## Si la ruleta falla en vivo

Back-up: papelitos. Un papel por rol, se sacan de una bolsa, el que rifa no juega y todo se anota en el grupo.

## Reglas

Historia nueva, los docs no se tocan salvo `ROLES.md` (tesorero no dobletea, director al final). Foto grande y 3 líneas o menos por momento. Frases cortas, sin raya em. Verifica con `grep -rPn -- '\x{2014}' slides/slides.md` que devuelve 0.

## Fotos

Los SVG en `public/` son placeholders. Pasa fotos del grupo y se cambian uno a uno sin tocar el guion. Los emojis viven en `public/emoji/` (Twemoji, locales y offline).
