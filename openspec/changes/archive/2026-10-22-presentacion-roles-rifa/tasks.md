# Tasks

## 1. Reescritura a 14 momentos y reglas

- [x] 1.1 Reescribir `slides/slides.md` con portada, dinámica de roles, qué no se puede hacer y qué sí se puede hacer, verificar lectura en voz alta en 5 minutos o menos.
- [x] 1.2 Escribir las 7 tarjetas de rol con emoji, nombre y 3 puntos de ROLES.md, verificar con `grep -rPn -- '\x{2014}' slides/slides.md` que devuelve 0.
- [x] 1.3 Escribir el momento de rifa del director y el final con 3 fechas y 3 lugares tentativos, verificar 14 momentos en orden.
- [x] 1.4 Documentar en `ROLES.md` que el tesorero no dobletea y que el director se rifa al final, verificar sin raya em y sin nombres propios.

## 2. Ruleta reusable

- [x] 2.1 Persistir nombres y asignaciones en localStorage desde `rifaStore.js` y verificar que tras recargar todo sigue.
- [x] 2.2 Crear `slides/components/Asignado.vue` que muestra el asignado de un rol y montarlo en las 7 tarjetas, verificar que cada tarjeta muestra su nombre.
- [x] 2.3 Reescribir `slides/components/Ruleta.vue` con props, entrada de 5 nombres, validación con mensajes, giro con animación, re-giro por fila y tabla rol contra nombre, verificar en modo vivo que gira y asigna.
- [x] 2.4 Probar flujo completo con Playwright (nombres válidos, nombre vacío, repetido, 7 asignaciones, re-giro, recarga) y verificar que todo pasa.

## 3. Imagen y export

- [x] 3.1 Aplicar tema glitch/tech en negro amarillo blanco con bloque `<style>` global y verificar con captura que se ve.
- [x] 3.2 Agregar o reusar imágenes locales en `slides/public/` para los momentos nuevos y verificar que el modo vivo las muestra sin error.
- [x] 3.3 Exportar PDF a `slides/export/` y verificar que abre offline con ruleta y tarjetas visibles.

## 4. Cierre y verificación final

- [x] 4.1 Actualizar `slides/README.md` con el back-up de papelitos y verificar que cada comando corre como está escrito.
- [x] 4.2 Correr `openspec validate presentacion-roles-rifa --strict` y verificar que pasa sin errores.
