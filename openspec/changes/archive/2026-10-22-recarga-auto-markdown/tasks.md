# Tasks

## 1. Publicar livereload

- [x] 1.1 Agregar `35729:35729` fijo a `docker-compose.yml` y verificar con `docker compose config` que ambos puertos (docs + livereload) quedan publicados
- [x] 1.2 Levantar con `docker compose up -d` (o `PORT=3001` si el 3000 está ocupado) y verificar que el puerto 35729 responde (p. ej. `curl -s -o /dev/null -w "%{http_code}" http://localhost:35729/livereload.js` devuelve 200)

## 2. Verificación de recarga

- [x] 2.1 Verificar que el HTML servido en `/` incluye el snippet livereload (inyectado o manual) inspeccionando la respuesta de `curl http://localhost:<PORT>/`
- [x] 2.2 Editar un `.md` de prueba en `docs/` (crear y luego borrar `docs/.livereload-test.md`), verificar que el watcher lo detecta (log del contenedor o recarga en navegador) y limpiar el archivo de prueba sin dejar rastro
- [x] 2.3 Si el snippet no se inyecta solo, agregar el fallback `<script src="http://localhost:35729/livereload.js">` a `docs/index.html` y verificar que ahora sí aparece en el HTML servido; si se inyecta solo, registrar que no hizo falta y no tocar `index.html`

## 3. Documentación y cierre

- [x] 3.1 Agregar una línea al README sobre recarga automática y verificar que `docker compose down` deja ambos puertos libres
