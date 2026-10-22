# Design

## Context

5 NT + 4 parejas opcionales, roles fijos en `ROLES.md` (tesorero Ulises, sorteo de jokers). Ver proposal.md y specs/ruleta/*/spec.md. Este change solo define juegos y reglas de sorteo; no ejecuta ningun sorteo real.

## Goals / Non-Goals

**Goals:**
- 1 tabla decision->juego memorizable y 7 fichas de juego con material/tiempo.
- Sorteos con operador neutral y resultado registrado.
- Todo linkeado: indice + `RULETA.md` <-> `ROLES.md`.

**Non-Goals:**
- No app de ruleta ni codigo; vale botella, moneda, papel o app gratuita existente.
- No ejecutar sorteos reales (destino, jokers) aqui; eso pasa en el viaje o en su change.
- No cambiar roles existentes.

## Decisions

- **Suerte solo para quien/que/cuando chico; dinero y seguridad deliberados.** Por que: el poker con dinero real entre NT + parejas rompe "no salir pelados"; alternativa de sortearlo todo se descarta por riesgo de inconformidad.
- **Ruleta para 1-de-N, volado/PPT para binarias y desempates, canicas/rayuela para momentos NT con publico.** Por que: cada tipo pide su drama y tiempo; una sola ruleta para todo aburre y alarga.
- **Opera quien no participa (Ulises en manejo/turismo y director).** Por que: Ulises no tiene licencia y no es candidato a director; alternativa de auto-sorteo se descarta por sospecha de trampa.
- **Poker solo de juguete (fichas = favores/turnos).** Por que: conserva la diversion sin tocar dinero; si alguien propone dinero real, se rechaza por spec.
- **Indice raiz + links cruzados obligatorios.** Por que: el repo es blueprint reutilizable; paginas huerfanas = "pierde sobre que leer".

## Risks / Trade-offs

- [Canicas/rayuela necesitan espacio y 20-30 min] -> Mitigacion: solo para decisiones con show (orden de cuartos, turnos); lo urgente va a volado/PPT.
- [Veto de 1 por NT puede dejar ruleta vacia] -> Mitigacion: si quedan <2 finalistas, se re-propone o se vota deliberadamente con director desempatando.
- [Sorteo sin registro se olvida o se impugna] -> Mitigacion: mensaje fijo en el grupo con fecha, juego y ganador.

## Migration Plan

No aplica. Rollback: decidir todo deliberadamente con director como desempate.
