# docs/visualizador Specification

## Purpose

Permitir a cualquiera del grupo ver todos los markdown del viaje renderizados en local con un solo comando Docker, sin instalar tooling extra.

## Requirements

### Requirement: Arranque con un comando
El sistema SHALL arrancar el visualizador con `docker compose up` y servirlo en `http://localhost:3000` sin pasos manuales extra.

#### Scenario: Arranque en limpio
- **WHEN** un usuario con Docker corre `docker compose up -d` desde la raíz del repo
- **THEN** el servicio queda corriendo y `http://localhost:3000` responde 200 con el índice de docs

#### Scenario: Apagado limpio
- **WHEN** el usuario corre `docker compose down`
- **THEN** el contenedor se detiene y el puerto 3000 queda libre

### Requirement: Cobertura de archivos actuales
El visualizador SHALL exponer ROLES.md y los 4 artefactos del change organizar-roles-nt (proposal, design, tasks, spec de viaje/roles) navegables desde un sidebar.

#### Scenario: Ver ROLES.md
- **WHEN** el usuario abre el índice y elige "Roles NT"
- **THEN** ve el contenido renderizado de `ROLES.md` con sus anclas internas funcionando

#### Scenario: Ver artefactos OpenSpec
- **WHEN** el usuario navega la sección del change organizar-roles-nt
- **THEN** puede leer proposal, design, tasks y spec sin salir del visualizador

### Requirement: Solo lectura y recarga
El contenido SHALL servirse read-only desde el repo y reflejar ediciones locales sin rebuild manual.

#### Scenario: Edición local reflejada
- **WHEN** se edita `ROLES.md` en el host con el visualizador corriendo
- **THEN** recargar la página muestra el cambio sin reiniciar el contenedor
