# Tasks

## 1. Circuito por puesto

- [x] 1.1 Agregar a PRESUPUESTO.md la seccion `## Reparto por puesto` despues de fondo comun y la regla del 1/3 en `## Reglas`, y verificar que existen los titulos y la frase "1/3"
- [x] 1.2 Sumar los 3 bullets a ROLES.md (tesorero reparte y reporta, chef maneja y devuelve, director recibe reporte), y verificar con `grep -n "reparte\|devuelve\|reporte" ROLES.md` que aparecen las 3 lineas

## 2. Validar

- [x] 2.1 Correr `grep -rPn -- '\x{2014}' PRESUPUESTO.md ROLES.md`, `grep -En '\bNT\b' PRESUPUESTO.md ROLES.md` y `openspec validate --changes`, y verificar 0 rayas em, 0 NT y 0 fallos
