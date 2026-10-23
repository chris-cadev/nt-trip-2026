# Design

## Context

Ver propuesta (Why y What Changes). Estado actual: TESORERIA, DIRECTOR y BITACORA tienen manual con formato fijo (fases, consejos, adaptacion). Los 5 roles restantes solo tienen bullets en `ROLES.md`. El sitio es docsify con espejo en `docs/` via symlink. Ver specs: `specs/chef-manual`, `specs/actividades-manual`, `specs/turismo-manual`, `specs/fotografo-manual`, `specs/animador-manual`.

## Goals / Non-Goals

**Goals:**
- 5 paginas que un novato en cada rol pueda seguir sin ayuda.
- Formato identico al de TESORERIA y DIRECTOR para que la coleccion se lea pareja.
- Integracion con la navegacion actual sin paginas huerfanas.

**Non-Goals:**
- No se cambian las reglas de ROLES, solo se enlazan.
- No se reescriben TESORERIA ni DIRECTOR, solo se agregan enlaces de ida.
- No se tocan PRESUPUESTO, SPLIIT, CIERRE ni RULETA salvo que un vecino lo pida.

## Decisions

- **Un change con 5 paginas en vez de 5 changes.** El formato y la integracion son los mismos; 5 changes multiplican ceremonia sin beneficio. Alternativa (un change por rol) se descarta por costo.
- **Mismo formato: fases, consejos, adaptacion.** El lector que ya vio TESORERIA sabe donde esta todo. Alternativa (formato libre por rol) se descarta porque rompe la coleccion.
- **Espejo en `docs/` via symlink mas entradas en `_sidebar.md`, `README.md` y `docs/README.md`.** Igual que los manuales previos.
- **Enlaces minimos de ida y vuelta por rol.** Cada seccion de ROLES apunta a su pagina. Vecinos: chef con tesorero y director (alergias), actividades con director y turismo, turismo con actividades y tesorero, fotografo con turismo, animador con director. Sin reescribir esas paginas.

## Risks / Trade-offs

- [Riesgo] El change crece (5 paginas mas 15 ediciones de enlaces) y algo queda a medias. Mitigacion: tasks separan contenido por pagina y la verificacion final es por pagina.
- [Riesgo] Paginas delgadas que repiten ROLES. Mitigacion: cada pagina enlaza en vez de copiar reglas; la revision de contenido detecta duplicados.
- [Riesgo] Orden de lectura confuso con 10 paginas. Mitigacion: README y sidebar agrupan las 7 de roles juntas en el mismo orden que ROLES.

## Migration Plan

Sin migracion. Agregar archivos nuevos y ediciones de enlaces. Rollback: borrar las 5 paginas y revertir enlaces.
