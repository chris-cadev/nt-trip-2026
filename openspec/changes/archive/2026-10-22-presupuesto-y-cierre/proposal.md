# Proposal

## Why

El blueprint cubre quien hace que (ROLES.md) y como decidir a la suerte (RULETA.md), pero no cubre dinero ni cierre. Sin eso, el fondo comun se improvisa, nadie sabe cuanto poner sin exponer su sueldo y el viaje termina sin cuentas claras ni retro. Se necesitan dos documentos nuevos conectados con lo que ya existe.

## What Changes

- Nuevo `PRESUPUESTO.md`: fondo comun con dinamica de tope ciego en papel (cada quien escribe su tope en un papelito doblado, el mas bajo manda; luego se puede pasar a software), gastos en curso en Spliit, y reglas (bote comun solo para lo de todos, extras los paga quien los pide). El tesorero junta los papelitos y opera Spliit.
- Nuevo `CIERRE.md`: cuentas finales (tesorero cierra Spliit, nadie queda debiendo), retro (dirigen actividades + director) y proxima semilla (dinamica entre todos, se rifa con la ruleta).
- Toques a ROLES.md: actividades suma "arma la lista de que llevar"; tesorero suma "junta papelitos y opera Spliit".
- Cableado: indices (README.md, docs/README.md, docs/_sidebar.md) con los 2 documentos nuevos; lineas "Ver tambien" cruzadas entre los 4 documentos; links con ancla solo a titulos `##` (`#tesorero`, `#actividades`, `#director`, `#ruleta`, `#fondo-comun`, `#gastos-en-curso`, `#cuentas-finales`, `#retro`, `#proxima-semilla`).

## Capabilities

### New Capabilities

- `viaje/presupuesto`: fondo comun con tope ciego, gastos en curso y reglas de bote comun vs personal.
- `viaje/cierre`: cuentas finales, retro y proxima semilla.

### Modified Capabilities

- Ninguna (no hay specs archivadas en `openspec/specs/`).

## Impact

- 2 archivos nuevos + toques a ROLES.md e indices. Sin codigo.
- Fuera de alcance: documento de destino/fechas, reservas e itinerario detallado (futuros changes); asignar nombres a roles (futuro change de asignacion).
