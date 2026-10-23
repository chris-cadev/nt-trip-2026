# Design

## Context

README, ROLES y RULETA existen y estan linkeados (verificado 0 rotos). Ver proposal.md y specs/contenido/*/spec.md. Este change solo reescribe textos y orden; no toca reglas de roles ni juegos.

## Goals / Non-Goals

**Goals:**
- Links con promesa front-loaded en los 3 archivos.
- Navegacion en las primeras lineas de cada pagina.
- Encabezados que cuentan la historia solos.

**Non-Goals:**
- No cambiar reglas, roles, juegos ni asignaciones.
- No agregar paginas nuevas ni app.

## Decisions

- **Texto descriptivo, destino entre parentesis solo si hace falta.** Por que: `[Los 7 roles NT](./ROLES.md)` promete; el filename desnudo no dice nada. Alternativa de link + descripcion a la derecha se descarta: la descripcion cae donde el patron F no mira.
- **Navegacion arriba del principio rector.** Por que: el principio ("los 5 primero") es identidad, pero el que llega perdido necesita primero a donde ir; NN/g: primeros 2 parrafos mandan.
- **No tocar IDs de legos ni anchors.** Por que: cambiar encabezados romperia los anchors que ya verificamos; solo se reescriben textos de link y orden de bloques.

## Risks / Trade-offs

- [Reescribir links puede introducir rotos] -> Mitigacion: correr el script de verificacion despues de cada archivo.
- [NT leen en WhatsApp lineal, no en GitHub] -> Mitigacion: el front-loading igual ayuda al copiar/pegar; no se optimiza solo para GitHub.

## Migration Plan

No aplica. Rollback: revert de los 3 archivos.
