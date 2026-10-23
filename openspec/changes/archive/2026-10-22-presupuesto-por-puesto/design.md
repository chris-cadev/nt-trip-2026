# Design

## Context

Ver proposal.md y specs/viaje/presupuesto-reparto/spec.md. PRESUPUESTO.md tiene fondo comun, gastos en curso y reglas; ROLES.md tiene tesorero, chef y director con bullets simples. Estilo cerebro de 14, sin raya em, sin nombres, sin NT.

## Goals / Non-Goals

**Goals:**
- Circuito de dinero por puesto escrito en PRESUPUESTO.md y reflejado en ROLES.md.
- Regla del 1/3 clara y facil de aplicar en el momento de comprar.

**Non-Goals:**
- No montos ni topes concretos (salen del tope ciego de cada viaje).
- No herramienta del chef ni tutoriales de apps.
- No renombrar titulos ni tocar indices (no hay documentos nuevos).

## Decisions

- **Nueva seccion `## Reparto por puesto` en PRESUPUESTO.md despues de fondo comun.** Por que: el reparto sale del techo ya definido; ponerlo antes rompe el orden logico (primero el techo, luego el reparto).
- **La regla del 1/3 vive en `## Reglas` como un bullet mas, no en cada puesto.** Por que: aplica a todos por igual; repetirla en ROLES.md por puesto la vuelve fragil.
- **ROLES.md solo suma 3 bullets de una linea (tesorero, chef, director).** Por que: el detalle vive en PRESUPUESTO.md; ROLES.md solo dice quien hace que.

## Risks / Trade-offs

- [Que es "consumible" queda ambiguo (una cena? un hospedaje?)] -> Mitigacion: redactar como "un solo gasto en una sola cosa" con ejemplo (una cena, un ingrediente); si el grupo lo discute, se aclara en el viaje, no en el doc.
- [Director se vuelve cuello de botella] -> Mitigacion: solo frena lo de 1/3 o mas; lo demas fluye sin consulta.

## Migration Plan

No aplica. Rollback: revert del commit.
