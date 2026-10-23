# Design

## Context

Ver proposal.md para motivacion y specs/viaje/roles/spec.md para requisitos. ROLES.md actual asigna nombres en 7 secciones + reglas + principio; README.md repite asignaciones en su indice. Cambio solo documental, un archivo principal.

## Goals / Non-Goals

**Goals:**
- ROLES.md anonimo que cualquiera del nucleo entiende sin saber quienes son.
- Nota de tareas derivadas visible al principio o al final.
- Mencion unica del nucleo de 5 sin nombres.

**Non-Goals:**
- No reasignar roles ni fijar fecha de asignacion futura (futuro change).
- No cambiar legos, areas ni principio los 5 primero.
- No tocar RULETA.md ni ESTILO.md.

## Decisions

- **Quitar nombres con edicion directa por seccion, conservando legos y bullets.** Por que: el texto de responsabilidades ya sirve; alternativa de reescribir todo el documento se descarta por riesgo de perder detalle.
- **Sorteo redactado como "sorteo random entre los elegibles" sin operador nominal.** Por que: el operador se define al asignar; alternativa de dejar "sortea el tesorero" nombra rol no persona y es valida si se prefiere.
- **Ubicar la nota de tareas derivadas donde quede mejor al editar (preferencia: principio, despues del indice).** Por que: se lee antes de los roles; alternativa valida al final junto a Reglas si rompe el flujo.
- **Ajustar README.md solo en las lineas que nombran personas por rol.** Por que: evita indice contradictorio; no se toca nada mas del README.

## Risks / Trade-offs

- [Sorteo sin operador queda ambiguo] -> Mitigacion: redactar "se sortea de forma random y se registra en el grupo" sin decir quien.
- [Exclusiones del sorteo (sin licencia, tesorero no dobla director) pierden sujeto] -> Mitigacion: redactarlas por rol ("quien lleve tesorero no lleva director") en vez de por nombre.
- [README desactualizado si se olvida] -> Mitigacion: tarea explicita de sincronizar indice.

## Migration Plan

No aplica. Rollback: revert del commit.
