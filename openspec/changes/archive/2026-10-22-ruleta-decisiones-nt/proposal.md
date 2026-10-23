# Proposal

## Why

Los NT ya tienen roles fijos y ahora necesitan decidir a la suerte (destino, turnos, cuartos, desempates) sin pleitos ni trampas. Sin regla, la suerte se vuelve dedazo y deja inconformes.

## What Changes

- Catalogo de juegos de decision: volado, piedra-papel-tijera, canicas, rayuela, poker de juguete (sin dinero real), tictactoe-torneo y ruleta.
- Tabla decision -> juego segun tipo: binaria, 1 de N, reparto, desempate.
- Reglas: que NUNCA va a suerte (tope, fondo, reglas NT, seguridad), filtros previos al sorteo, operador neutral, registro del resultado.
- Todo linkeado: indice raiz + `RULETA.md` <-> `ROLES.md` en ambas direcciones, sin paginas huerfanas.

## Capabilities

### New Capabilities
- `ruleta/juegos`: catalogo de juegos y tabla decision->juego con material, tiempo y numero de jugadores.
- `ruleta/reglas`: que va a suerte y que no, filtros/veto, operador neutral, registro y aceptacion.

### Modified Capabilities
- Ninguna.

## Impact

- Nuevo `RULETA.md` + indice linkeado (`README.md` o indice en raiz) + links cruzados con `ROLES.md`.
- Sin codigo. Reutilizable como blueprint para futuros viajes.
