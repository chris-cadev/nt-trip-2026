# Design

## Context

Ver propuesta (Why y What Changes). Estado actual: `README.md` raiz y `docs/README.md` son listas planas de 15 links con una linea de principio rector. El sidebar ya ordena por tema pero no dice por donde empezar. Docsify usa el README como portada sin tocar `index.html`. Ver specs: `specs/guia-inicio/spec.md`.

## Goals / Non-Goals

**Goals:**
- Un novato entiende el sistema en un minuto y sabe por donde empezar.
- La portada agrupa las 15 paginas por uso, no solo por tema.
- Cero links rotos y espejo sincronizado.

**Non-Goals:**
- No se reescriben las paginas de contenido.
- No se toca el sidebar ni `index.html`.
- No se agrega navegacion nueva (botones, portadas, imagenes).

## Decisions

- **Reescribir el README, no agregar otra pagina.** La portada ya existe y docsify la muestra sola. Una pagina `COMO-EMPEZAR.md` separada compite con la portada y deja dos inicios.
- **Estructura: como funciona, orden de lectura, mapa por fase.** Tres bloques cortos mas la lista agrupada. Alternativa (solo reordenar la lista) se descarta porque no explica el uso.
- **Espejo manual en `docs/README.md`.** Igual que el resto del blueprint: mismo texto, links sin `./`. El docsify sirve `docs/`, asi que el espejo es la portada real en local.
- **Agrupar por uso: reglas base, manuales por rol, herramientas.** Refleja el viaje real. Se conserva cada link existente, solo cambia el orden y el encabezado.

## Risks / Trade-offs

- [Riesgo] La guia repite contenido de ROLES o CIERRE. Mitigacion: la guia enlaza y resume en una linea, no copia secciones.
- [Riesgo] El espejo se desincroniza. Mitigacion: tarea explicita de copiar y comparar, mas prueba de links en ambos.
- [Riesgo] Orden sugerido que nadie sigue. Mitigacion: el orden sigue el viaje real (antes, durante, cierre), no un orden inventado.

## Migration Plan

Sin migracion. Se reescribe un archivo y su espejo. Rollback: git revert de los 2 archivos.
