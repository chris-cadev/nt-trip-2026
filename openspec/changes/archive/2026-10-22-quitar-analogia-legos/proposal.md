# Proposal

## Why

ROLES.md todavia explica cada rol con la analogia de "legos" (lineas `Legos:` con codigos `d1`, `c1`, `t2`...) heredada del blueprint inicial. El usuario pidio quitarla: mete jerga y codigos que hay que memorizar, cuando los bullets ya dicen lo mismo en lenguaje directo.

## What Changes

- Quita las 7 lineas `Legos:` de ROLES.md (una por rol) con todos sus codigos (`d1-d3+m3`, `c1-c4`, `a1-a3+m2`, `t1-t3+m1`, `p1-p2`, `v1-v3`, `j1-j2+s1-s2`).
- Reescribe los bullets que citan codigos en parentesis para que se lean sin claves: chef (confirmed/por confirmar en palabras), actividades (`m2`), turismo (`t2`, `t3`, `m1`). Ninguna responsabilidad se pierde, solo cambia la redaccion.
- Quita la palabra "legos" de la linea indice de `docs/README.md` (homepage de docsify) para no contradecir el documento.
- No toca nada mas: mismos 7 roles anonimos, misma nota de tareas derivadas, mismo nucleo de 5 sin nombres, mismas reglas.

## Capabilities

### New Capabilities

- `viaje/roles`: roles descritos solo con responsabilidades en lenguaje directo, sin analogia de legos ni codigos (supersede los deltas de `organizar-roles-nt` y `roles-sin-nombres` aun no archivados).

### Modified Capabilities

- Ninguna (no hay specs archivadas en `openspec/specs/`).

## Impact

- Solo ROLES.md (7 lineas `Legos:` + 5 bullets con codigos) y una linea de `docs/README.md`.
- Sin codigo ni dependencias. Fuera de alcance: ejemplos de ESTILO.md que mencionan "legos" (ilustran sintaxis de dos puntos, otro change si se quieren renovar) y specs viejas en `openspec/changes/` (artefactos historicos, no se reescriben).
