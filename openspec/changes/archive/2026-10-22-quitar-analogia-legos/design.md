# Design

## Context

Ver proposal.md para motivacion y specs/viaje/roles/spec.md para requisitos. ROLES.md anonimo actual: 7 lineas `Legos:` con codigos mas 5 bullets que citan codigos en parentesis. Los bullets ya describen cada responsabilidad en palabras; los codigos solo duplican.

## Goals / Non-Goals

**Goals:**
- ROLES.md sin la palabra "legos" ni codigos, con las mismas responsabilidades en lenguaje directo.
- `docs/README.md` sin la palabra "legos".

**Non-Goals:**
- No cambiar roles, nota de tareas derivadas, nucleo ni reglas.
- No tocar ESTILO.md, RULETA.md ni specs historicas en `openspec/changes/`.

## Decisions

- **Borrar las 7 lineas `Legos:` completas en vez de convertirlas en subtitulos.** Por que: su contenido ya vive en los bullets; alternativa de reescribirlas como "Responsabilidades:" duplica el texto.
- **Reescribir los 5 bullets con codigos quitando el parentesis y poniendo la frase en palabras.** Por que: un bullet debe entenderse sin mirar otra linea; los casos son mecanicos (chef: confirmed/por confirmar en palabras; `m2`/`t2`/`t3`/`m1`: borrar el codigo entre parentesis porque la frase ya lo dice).
- **Tocar `docs/README.md` (homepage docsify, archivo real separado) pero no ESTILO.md.** Por que: la linea indice quedaria mintiendo sobre el contenido; el ejemplo de ESTILO.md ilustra sintaxis de dos puntos y sigue valido como ejemplo.

## Risks / Trade-offs

- [Bullets de turismo pierden precision sin codigo] -> Mitigacion: las frases ya dicen clima, plan B y turnos; el codigo no agregaba info.
- [Referencias futuras a codigos en conversacion del grupo] -> Mitigacion: ninguna, los codigos nunca salieron del documento.

## Migration Plan

No aplica. Rollback: revert del commit.
