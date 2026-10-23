# Design

## Context

5 NT, 7 roles, 0 specs previas. Ver proposal.md para motivacion y specs/viaje/roles/spec.md para requisitos. Este change solo define y asigna roles; no ejecuta el viaje.

## Goals / Non-Goals

**Goals:**
- 1 tabla rol->legos que cualquiera entiende y con nombre asignado por rol.
- Reglas de dobleteo claras para 5 personas.
- Principio "los 5 primero" publicado.

**Non-Goals:**
- No destino, fechas, presupuesto, reservas, botiquin fisico ni itinerario (futuro change).
- No app ni sistema complejo; vale tabla en Whats.

## Decisions

- **7 roles fijos con legos anexados (salud/energia repartidos, no roles nuevos).** Por que: 5 personas no dan para mas roles; alternativa de crear medico/intendente se descarta en este change y se revisa en el de viaje si director se quema.
- **Turismo absorbe quien maneja (m1) + descanso conductor; actividades conserva hospedaje (m2).** Por que: quien investiga la ruta conoce tramos y prepara relevos; la reserva real se hace en el change de viaje.
- **Director y turismo son jokers sorteados por Ulises (menos Ulises).** Por que: Ulises es tesorero fijo (no puede doblar director) y sin licencia (no puede manejar); el sorteo evita dedazos.
- **Prohibir director+tesorero en misma persona.** Por que: evita concentrar decision y dinero; combinaciones afines permitidas: director+fotografo, animador+fotografo.

## Risks / Trade-offs

- [Asignacion nominal sin fecha de viaje pierde fuerza] -> Mitigacion: re-confirmar roles cuando se fije destino/fecha.
- [Actividades se ve gordo] -> Mitigacion: permitir rotar arreador por dia (se detalla en change de viaje).
- [Parejas vs NT genera roces] -> Mitigacion: regla solo-NT publicada desde ahora.

## Migration Plan

No aplica. Rollback: disolver tabla y volver a "todos hacen todo".
