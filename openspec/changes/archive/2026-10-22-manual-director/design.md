# Design

## Context

Ver propuesta (Why y What Changes). Estado actual: el rol vive en `ROLES.md` con 4 bullets, la retro en `CIERRE.md` y las reglas de sorteo en `RULETA.md`. No hay pagina del como diario del director. El sitio es docsify: cada `.md` en raiz tiene espejo en `docs/` (symlink) y el indice en `docs/_sidebar.md` mas `docs/README.md`. Modelo a seguir: `TESORERIA.md` del change manual-tesoreria. Ver specs: `specs/director-manual/spec.md`.

## Goals / Non-Goals

**Goals:**
- Una pagina `DIRECTOR.md` que un director nuevo pueda seguir sin ayuda.
- Base fija separable de ajustes por grupo, para reusar en familia, amigos y trabajo.
- Integracion con la navegacion actual sin paginas huerfanas.

**Non-Goals:**
- No se crea app ni formato nuevo, solo markdown.
- No se cambian las reglas de ROLES ni de RULETA, solo se enlazan.
- No se reescribe CIERRE, solo se referencia la retro.

## Decisions

- **Pagina nueva `DIRECTOR.md` en vez de crecer ROLES.** ROLES describe los 7 roles, DIRECTOR es chamba de uno. Mezclarlas confunde al lector. Misma decision que TESORERIA.
- **Estructura por fase: antes, durante, cierre, mas adaptacion.** Sigue el orden real del viaje y deja la parte reusable al final. Alternativa (por tema: decisiones, convivencia, seguridad) se descarta porque repite los mismos pasos en cada tema.
- **Espejo en `docs/` via symlink mas entradas en `_sidebar.md`, `README.md` y `docs/README.md`.** Igual que TESORERIA: sin symlink la pagina no se ve en local.
- **Enlaces minimos de ida y vuelta.** ROLES (director), CIERRE (retro), RULETA (rifas y desempates) y TESORERIA (saldos) apuntan a DIRECTOR, y DIRECTOR devuelve a cada una. Sin reescribir esas paginas, solo una linea de ver tambien donde falte.

## Risks / Trade-offs

- [Riesgo] La pagina repite lo de ROLES o RULETA. Mitigacion: DIRECTOR enlaza en vez de copiar reglas; la verificacion de contenido revisa duplicados.
- [Riesgo] Consejos muy atados al viaje de 5 y poco reusables. Mitigacion: seccion de adaptacion con base fija contra variable y 3 casos cortos.
- [Riesgo] Regla de no juntar director y tesorero se pierde. Mitigacion: la pagina recuerda la regla con enlace a ROLES, sin cambiarla.

## Migration Plan

Sin migracion. Agregar archivos nuevos y ediciones de enlaces. Rollback: borrar `DIRECTOR.md` y revertir enlaces.
