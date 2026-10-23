# Design

## Context

Ver proposal.md y specs/viaje/presupuesto/spec.md y specs/viaje/cierre/spec.md. ROLES.md y RULETA.md ya existen con enlaces internos verificados; README.md, docs/README.md y docs/_sidebar.md indexan 3 documentos. Estilo obligatorio: cerebro de 14 (AGENTS.md), sin raya em, sin nombres, sin NT.

## Goals / Non-Goals

**Goals:**
- 2 documentos nuevos con secciones linkeables y cableado completo sin rotos.
- Toques minimos a ROLES.md (2 bullets nuevos) e indices (2 renglones por indice).

**Non-Goals:**
- **No tutoriales de apps (Spliit se nombra, no se explica paso a paso).**
- No destino/fechas, reservas ni itinerario (futuros changes).
- No renombrar titulos existentes.

## Decisions

- **PRESUPUESTO.md en 3 secciones `##` (fondo comun, gastos en curso, reglas).** Por que: cada una se enlaza por separado (ROLES la referencia, CIERRE la cierra); alternativa de un solo bloque se descarta porque impide anclas utiles.
- **CIERRE.md en 3 secciones `##` (cuentas finales, retro, proxima semilla).** Por que: cada una tiene dueno distinto (tesorero, actividades+director, todos).
- **Links con ancla solo a titulos `##`, nunca a `###`.** Por que: los `### Responsabilidades principales` se repiten 7 veces en ROLES.md y esos anclas son fragiles; los `##` son unicos.
- **ROLES.md "Ver tambien" crece a 4 links; RULETA.md suma CIERRE (la semilla se rifa).** Por que: cada documento dice a donde ir segun la etapa del viaje; alternativa de solo linkear al indice obliga a un salto extra.
- **Orden de escritura: ROLES.md, PRESUPUESTO.md, CIERRE.md, indices al final.** Por que: los indices describen documentos que ya deben existir; escribirlos antes deja lineas que mienten.

## Risks / Trade-offs

- [Ancla de `## Tabla decision -> juego` es fragil (`->` en el slug)] -> Mitigacion: no enlazar a esa seccion; enlazar a `#ruleta` (juego especifico) en su lugar.
- [docs/_sidebar.md usa links sin `./`] -> Mitigacion: respetar la convencion de cada archivo (con `./` en raiz, sin `./` en docs).
- [Papelitos que se pierden o se reconoce la letra] -> Mitigacion: el tesorero los junta doblados y solo publica el tope mas bajo, no todos los numeros.

## Migration Plan

No aplica. Rollback: revert del commit.
