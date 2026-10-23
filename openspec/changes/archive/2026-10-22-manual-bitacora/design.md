# Design

## Context

Ver propuesta (Why y What Changes). Estado actual: DIRECTOR.md dice "queda anotado" sin decir donde; RULETA.md pide anotar resultados en el grupo; CIERRE.md pide retro escrita. Modelo a seguir: `SPLIIT.md` (herramienta externa documentada con pasos). El sitio es docsify con espejo en `docs/` via symlink. Ver specs: `specs/bitacora-manual/spec.md`.

## Goals / Non-Goals

**Goals:**
- Una pagina `BITACORA.md` que cualquiera pueda seguir para dejar constancia de decisiones.
- Permisos claros: escribe el director, leen los demas, avisan los cambios.
- Cero copy paste al cierre cuando la bitacora se lleva al dia.

**Non-Goals:**
- No se crea el Google Doc real, solo se documenta como hacerlo.
- No se cambian las reglas de DIRECTOR ni de RULETA, solo se enlazan.
- No se cubren otras apps (Telegram, Notion); el grupo eligio GDocs.

## Decisions

- **Pagina nueva `BITACORA.md` espejo de `SPLIIT.md`.** Misma receta: que es, como crear, como usar, reglas. El lector ya conoce ese formato.
- **Estructura: crear, compartir, activar avisos, anunciar, cierre.** Sigue el orden de uso real. Alternativa (por rol: director contra resto) se descarta porque mezcla pasos de tiempos distintos.
- **Espejo en `docs/` via symlink mas entradas en `_sidebar.md`, `README.md` y `docs/README.md`.** Igual que TESORERIA y DIRECTOR.
- **Enlaces minimos.** DIRECTOR.md apunta a BITACORA donde dice "queda anotado"; BITACORA devuelve a DIRECTOR y al indice. Sin reescribir esas paginas.

## Risks / Trade-offs

- [Riesgo] Google cambia los pasos de avisos y la pagina se desactualiza. Mitigacion: pasos descritos a nivel de menu (Herramientas y avisos), sin capturas fragiles de cada clic.
- [Riesgo] Alguien no activa su aviso y se pierde una decision. Mitigacion: el director siempre avisa en el chat con el link; el email es respaldo, no el unico canal.
- [Riesgo] Pide cuenta Google. Mitigacion: se dice al inicio como requisito; el que no tenga cuenta lee por el chat.

## Migration Plan

Sin migracion. Agregar archivos nuevos y ediciones de enlaces. Rollback: borrar `BITACORA.md` y revertir enlaces.
