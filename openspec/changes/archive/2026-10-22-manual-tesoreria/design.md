# Design

## Context

Ver propuesta (Why y What Changes). Estado actual: el rol vive en `ROLES.md`, el tope y el bote en `PRESUPUESTO.md`, el registro en `SPLIIT.md` y el cierre en `CIERRE.md`. No hay pagina del como diario del tesorero. El sitio es docsify: cada `.md` en raiz tiene espejo en `docs/` y el indice en `docs/_sidebar.md`. Ver specs: `specs/tesoreria-manual/spec.md`.

## Goals / Non-Goals

**Goals:**
- Una pagina `TESORERIA.md` que un tesorero nuevo pueda seguir sin ayuda.
- Base fija separable de ajustes por grupo, para reusar en familia, amigos y trabajo.
- Integracion con la navegacion actual sin paginas huerfanas.

**Non-Goals:**
- No se crea app ni hoja de calculo, solo markdown.
- No se cambian las reglas de PRESUPUESTO ni de ROLES, solo se enlazan.
- No se reescribe SPLIIT, solo se referencia su flujo.

## Decisions

- **Pagina nueva `TESORERIA.md` en vez de crecer `PRESUPUESTO.md`.** PRESUPUESTO es regla de los 5, TESORERIA es chamba de uno. Mezclarlas confunde al lector. Alternativa (seccion dentro de PRESUPUESTO) se descarta porque ese archivo ya mezcla tope, bote y Spliit.
- **Estructura por fase: antes, durante, cierre, mas adaptacion.** Sigue el orden real del viaje y deja la parte reusable al final como capa separada. Alternativa (por tema: dinero, papeles, cobros) se descarta porque repite los mismos pasos en cada tema.
- **Espejo en `docs/` mas entrada en `_sidebar.md` y `README.md`.** Docsify sirve `docs/`, asi que sin espejo la pagina no se ve en local. Entrada como item al mismo nivel que Presupuesto y Cierre, no anidada bajo Spliit.
- **Enlaces minimos de ida y vuelta.** ROLES (tesorero), PRESUPUESTO, SPLIIT y CIERRE apuntan a TESORERIA, y TESORERIA devuelve a cada una. Sin reescribir esas paginas, solo una linea de ver tambien donde falte.

## Risks / Trade-offs

- [Riesgo] La pagina crece y repite lo de PRESUPUESTO o SPLIIT. Mitigacion: TESORERIA enlaza en vez de copiar reglas; la verificacion de contenido revisa duplicados.
- [Riesgo] Consejos muy atados al viaje de 5 y poco reusables. Mitigacion: seccion de adaptacion con tabla fijo contra variable y 3 casos cortos.
- [Riesgo] Espejo `docs/` desactualizado. Mitigacion: tarea explicita de copiar y revisar sidebar, mas prueba de links.

## Migration Plan

Sin migracion. Agregar archivos nuevos y 5 ediciones de enlaces. Rollback: borrar `TESORERIA.md` y revertir enlaces.
