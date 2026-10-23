# Tasks

## 1. Toques a ROLES.md

- [x] 1.1 Sumar a Actividades el bullet de que llevar y a Tesorero el de juntar papelitos y operar Spliit, y verificar con `grep -n "que llevar\|papelito\|Spliit" ROLES.md` que aparecen las 2 lineas
- [x] 1.2 Verificar que ROLES.md sigue sin nombres, sin NT, sin legos y sin rayas em con `grep -En '\bNT\b|legos|`[a-z][0-9]`' ROLES.md` y `grep -rPn -- '\x{2014}' ROLES.md`, ambos vacios

## 2. Documentos nuevos

- [x] 2.1 Crear PRESUPUESTO.md (fondo comun, gastos en curso, reglas) en lenguaje cerebro de 14, y verificar que existen los titulos `## Fondo comun`, `## Gastos en curso` y `## Reglas`
- [x] 2.2 Crear CIERRE.md (cuentas finales, retro, proxima semilla) en lenguaje cerebro de 14, y verificar que existen los titulos `## Cuentas finales`, `## Retro` y `## Proxima semilla`

## 3. Cableado y validacion

- [x] 3.1 Agregar los 2 documentos a README.md, docs/README.md y docs/_sidebar.md respetando la convencion de links de cada archivo, y verificar con `grep -c "PRESUPUESTO\|CIERRE" README.md docs/README.md docs/_sidebar.md` que cada indice los menciona
- [x] 3.2 Agregar lineas "Ver tambien" cruzadas (ROLES a los 4, RULETA a CIERRE, PRESUPUESTO a ROLES y CIERRE, CIERRE a los 4) con anclas solo a `##`, y verificar con script que ningun `(#[a-z-]+)` apunta a un titulo inexistente
- [x] 3.3 Correr `grep -rPn -- '\x{2014}' *.md docs/*.md` y `openspec validate --changes`, y verificar 0 rayas em y 0 fallos
