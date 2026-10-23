# Proposal

## Why

Los 3 markdown del blueprint abusan del em dash (12 usos: titulos, bullets, aclaraciones). El "—" en cada linea cansa el ojo, rompe el patron F y huele a texto generado. Sin regla se seguira colando en cada documento nuevo.

## What Changes

- Regla de estilo: en documentos nuevos no usar "—"; reemplazar por dos puntos, coma, parentesis o punto segun el caso, con tabla de reemplazos.
- Correccion de lo existente: reescribir los 12 usos en `README.md`, `ROLES.md` y `RULETA.md` caso por caso, manteniendo anchors y links funcionando (0 rotos tras el cambio).

## Capabilities

### New Capabilities
- `contenido/estilo`: regla anti em dash para documentos nuevos + correccion de los existentes con links intactos.

### Modified Capabilities
- Ninguna.

## Impact

- Solo edicion de `README.md`, `ROLES.md` y `RULETA.md` (textos; encabezados cambian solo si se actualizan sus links).
- Sin codigo. Sin cambios de reglas, roles ni juegos.
