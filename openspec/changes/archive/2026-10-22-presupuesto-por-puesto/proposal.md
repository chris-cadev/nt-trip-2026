# Proposal

## Why

El fondo comun ya tiene tope ciego, pero nadie dice como baja ese dinero a cada puesto. Sin reparto por puesto, el chef (y cualquier rol que gasta) compra a ciegas o pide permiso por cada cosa. Se necesita un circuito claro: tesorero reparte, cada puesto maneja y devuelve, director supervisa.

## What Changes

- PRESUPUESTO.md suma seccion de reparto por puesto: el tesorero da a cada puesto lo que necesita segun su chamba y le reporta todo al director.
- PRESUPUESTO.md suma 2 reglas: cada puesto maneja su presupuesto y devuelve lo que sobre; ningun gasto de un solo consumible de 1/3 o mas del presupuesto se hace sin consultar antes al director y al tesorero.
- ROLES.md: tesorero suma "reparte presupuesto por puesto y reporta al director"; chef suma "maneja su presupuesto y devuelve lo que sobra"; director suma "recibe el reporte de presupuestos".
- Sin tocar: tope ciego, Spliit, bote comun vs personal, herramienta del chef (se decide despues).

## Capabilities

### New Capabilities

- `viaje/presupuesto-reparto`: reparto de presupuesto por puesto, manejo y devolucion, regla del 1/3 con consulta a director y tesorero.

### Modified Capabilities

- Ninguna (no hay specs archivadas en `openspec/specs/`).

## Impact

- PRESUPUESTO.md (1 seccion + 2 reglas) y ROLES.md (3 bullets). Sin codigo.
- Fuera de alcance: herramienta del chef (hoja vs Shoplix), documento de destino, reservas, itinerario.
