# Tasks

## 1. Proyecto Slidev

- [x] 1.1 Crear `slides/package.json` con `@slidev/cli` y verificar con `npx slidev --version` que responde versión.
- [x] 1.2 Retirar fuente Marp (`presentacion.md`, `tema.css`, HTML exportado) y verificar que `slides/` solo trae proyecto Slidev más `export/`.

## 2. Historia en 7 momentos

- [x] 2.1 Escribir momentos 1 a 3 (enganche, los 5 primero, los 7 roles) con foto grande y 3 líneas o menos, verificar lectura en voz alta en 4 minutos o menos.
- [x] 2.2 Escribir momentos 4 a 6 (dinero, bitácora y cierre, tu manual) con links a PRESUPUESTO, SPLIIT, BITACORA y CIERRE, verificar que cada link abre su doc.
- [x] 2.3 Escribir momento 7 (ahora rifamos roles) con reglas (ningún rol vacío, director no es tesorero, el que rifa no juega, todo se anota), verificar con `grep -rPn -- '\x{2014}' slides/slides.md` que devuelve 0.

## 3. Imagen y export

- [x] 3.1 Crear placeholders SVG en `slides/public/` (uno por momento) y verificar que el modo vivo los muestra sin error.
- [x] 3.2 Exportar PDF a `slides/export/` y verificar que abre offline con las 7 imágenes.

## 4. Cierre y verificación final

- [x] 4.1 Actualizar `slides/README.md` con comandos Slidev (ver, exportar) y verificar que cada comando corre como está escrito.
- [x] 4.2 Correr `openspec validate presentacion-viaje-nt-2026 --strict` y verificar que pasa sin errores.
