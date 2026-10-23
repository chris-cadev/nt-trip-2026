# Design

## Context

Ver `slides/components/Ruleta.vue` (giro, voluntario, reset), `slides/rifaStore.js` (lista, candidatos, puedeAsignar, persistencia `nt-rifa-v1`) y `slides/slides.md` (texto papelitos). Ya hay validacion basica, voluntario con reglas y persistencia con try/catch. Ver specs en `specs/docs/presentacion/spec.md` y proposal para el que.

## Goals / Non-Goals

Goals:
- Normalizar nombres en un solo lugar y reusar en validacion y asignacion.
- Fallos del sistema degradan a memoria con aviso, sin romper la rifa.
- Override humano con motivo y marca visible, sin quitar las reglas actuales.
- Papelitos como exportar/cargar texto, no como parche oral.

Non-Goals:
- No cambia orden tesorero-primero ni director-final.
- No cambia catalogo de juegos ni clave de localStorage.
- No mete libs nuevas ni backend.

## Decisions

- Normalizar en `listaNombres()`: trim + colapsar espacios, comparar en minusculas para duplicados, guardar display original. Antes que validar en cada llamada.
  Alternativa: validar solo en UI. Se descarta porque `puedeAsignar` y `candidatos` usan la misma lista.
- `cargar()` devuelve `{ estado, aviso }`: si el JSON viene roto, empieza vacio y avisa que se perdio. Si no hay localStorage o no hay espacio, sigue en memoria con bandera `soloMemoria`.
  Alternativa: tirar error. Se descarta porque mata la rifa en vivo.
- Override con motivo: `asignarManual(rol, nombre, motivo)` guarda `{ por, motivo, aMano: true }` junto al asignado. Reglas duras (tesorero con otro rol) piden confirmacion doble en UI, no en store.
  Alternativa: flag libre sin motivo. Se descarta porque luego nadie sabe por que se rompio la regla.
- Papelitos = textarea de exportar/importar: una linea por `rol: nombre (motivo)`. Reusa el parser de nombres. Sin formato nuevo.
- Historial de un paso: pila con ultimo `{ asignados, display }` para deshacer. Reset/limpiar con `confirm()` nativo. Simple y sin deps.
  Alternativa: historial completo. Se descarta por sobra para una rifa de 7 roles.

## Risks / Trade-offs

- Dos instancias de Ruleta comparten el store: el turno de director puede chocar con roles ya dados. Se mitiga filtrando bolsa por ocupados tambien fuera de tesorero, salvo doblete permitido con marca.
- Confirm nativo bloquea el deck. Se acepta porque solo sale en reset y regla rota.
- Motivo corto queda en localStorage junto a nombres. Riesgo bajo: son nombres del grupo, misma clave actual.

## Migration Plan

- Sin migracion: misma clave, mismo formato mas campos opcionales. Dato viejo se lee igual.
- Rollback: volver al commit anterior de los 3 archivos.

## Open Questions

- Ninguna.
