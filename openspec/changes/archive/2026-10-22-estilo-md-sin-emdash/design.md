# Design

## Context

12 usos de "—": 4 en README (titulo, 2 bullets, 1 linea docker), 7 en ROLES (encabezados de rol) y 1 en RULETA (titulo). Los encabezados de rol alimentan anchors linkeados (`#tesorero--ulises-fijo`, etc.). Ver proposal.md y specs/contenido/estilo/spec.md.

## Goals / Non-Goals

**Goals:**
- Regla simple con tabla de reemplazos para futuros docs.
- 12 usos corregidos caso por caso, 0 rotos al final.
- Encabezados que sigan contando la historia solos.

**Non-Goals:**
- No cambiar reglas, roles, juegos ni asignaciones.
- No tocar anchors salvo donde el encabezado cambie (ahi se actualiza el link).

## Decisions

- **Dos puntos como reemplazo por defecto en titulos y bullets.** Por que: `## Tesorero: Ulises (fijo)` y `[Los 7 roles NT](./ROLES.md): legos...` mantienen la jerarquia sin pausa larga; la coma se reserva para incisos dentro de frase y el parentesis para aclaraciones laterales.
- **Renombrar encabezado + actualizar sus links en el mismo edit.** Por que: el anchor de GitHub deriva del texto; cambiar uno sin el otro rompe. Alternativa de no tocar encabezados se descarta: 8 de los 12 usos estan ahi.
- **Tabla de reemplazos fija:** titulo `X — Y` -> `X: Y`; bullet `[link](url) — resto` -> `[link](url): resto`; inciso `frase — aclaracion — frase` -> comas o parentesis; remate `dato — consecuencia` -> punto y seguido.
- **Auditoria final con grep + script de links.** Por que: el grep prueba la regla (0 "—") y el script prueba que nada se rompio.

## Risks / Trade-offs

- [Renombrar 7 encabezados mueve 6+ anchors] -> Mitigacion: mapa viejo->nuevo antes de editar; correr script tras cada archivo, no solo al final.
- [Dos puntos en todos los titulos puede monotonizar] -> Mitigacion: donde el subtitulo es etiqueta (JOKER, fijo/alt) se permite parentesis: `## Turismo (JOKER: quien maneja, sortea Ulises)`.
- [Linea docker en README no es del blueprint] -> Mitigacion: se corrige igual el "—" pero sin reescribir su contenido tecnico.

## Migration Plan

No aplica. Rollback: revert de los 3 archivos.
