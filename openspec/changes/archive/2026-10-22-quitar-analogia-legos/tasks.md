# Tasks

## 1. Quitar analogia de legos en ROLES.md

- [x] 1.1 Borrar las 7 lineas `Legos:` de ROLES.md sin tocar bullets, y verificar con `grep -n "^Legos:" ROLES.md` que devuelve vacio
- [x] 1.2 Reescribir los 5 bullets que citan codigos (`c1`-`c4`, `m2`, `t2`, `t3`, `m1`) en lenguaje directo, y verificar con `grep -En "`[a-z][0-9]`|legos|Legos" ROLES.md` que devuelve vacio
- [x] 1.3 Quitar la palabra "legos" de la linea indice de `docs/README.md`, y verificar con `grep -rni "lego" README.md ROLES.md docs/README.md` que solo queda el ejemplo de ESTILO.md

## 2. Validar

- [x] 2.1 Correr `grep -rPn -- '\x{2014}' README.md ROLES.md RULETA.md ESTILO.md docs/README.md` y `openspec validate --changes`, y verificar 0 rayas em y 0 fallos
