# Tasks

## 1. Scaffold Docsify en Docker

- [x] 1.1 Crear `docker-compose.yml` (servicio docsify con `node:20-alpine`, `docsify serve`, puerto 3000:3000, volumen `./:/docs:ro`) y verificar con `docker compose config` que el YAML es válido
- [x] 1.2 Crear `docs/index.html` mínimo con CDN Docsify y verificar que el archivo existe y referencia `/_sidebar.md`

## 2. Navegación y cobertura

- [x] 2.1 Crear `docs/_sidebar.md` con enlaces a ROLES.md y a los 4 artefactos de organizar-roles-nt y verificar que cada ruta abre el archivo correspondiente en `http://localhost:3000`
- [x] 2.2 Levantar con `docker compose up -d`, verificar que `/` responde 200 y que recargar tras editar ROLES.md refleja el cambio, luego `docker compose down` y verificar que el puerto 3000 queda libre

## 3. Uso e integración

- [x] 3.1 Documentar uso (`up`/`down`, URL, qué archivos cubre) en README corto y verificar que los comandos documentados corren tal cual están escritos
- [x] 3.2 Validar anclas internas de ROLES.md (turismo, actividades, director, tesorero) dentro del visualizador y verificar que las 4 navegan sin 404
