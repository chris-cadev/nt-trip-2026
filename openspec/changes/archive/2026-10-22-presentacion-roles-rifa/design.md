# Design

## Context

Ver proposal.md (Why). Estado actual: deck Slidev de 7 momentos abstractos en `slides/slides.md`, proyecto Node con `@slidev/cli` v53 más `playwright-chromium` para PDF. Docsify intacto. El grupo pide estructura concreta de 13 momentos con ruleta integrada y tarjetas por rol. Sin límite de tiempo.

## Goals / Non-Goals

**Goals:**

- 14 momentos: portada, dinámica, qué no, qué sí, rifa de tesorero más 5 roles, 7 tarjetas, rifa del director, final con tentativas.
- Ruleta Vue reusable con nombres, validación, re-giro por fila y tabla rol contra nombre.
- Tarjetas genéricas con emoji más 3 puntos sacados de ROLES.md.
- 2 reglas nuevas en ROLES.md sin nombres.

**Non-Goals:**

- No se reescribe ningún doc del blueprint.
- No se automatiza el anotado (sigue en el grupo a mano).
- No se definen fechas ni lugares reales (placeholders).

## Decisions

- **Ruleta genérica con props más estado compartido.** Por qué: se usa 3 veces (tesorero entre 5, 5 roles entre 4, director entre 4) y sirve para futuras rifas. `Ruleta.vue` recibe `items` (roles a rifar) y lee candidatos de `rifaStore.js` (reactivo compartido entre slides). Emite cada asignación al store. Alternativa de 3 componentes copiados descartada por duplicar código.
- **Ruleta simple: giro al azar con animación CSS, sin librerías.** Por qué: nombres fijos por fase, no necesita física real. Menos código, menos riesgo antes del viernes.
- **Validación antes de girar (prevención de error).** Por qué: 5 nombres obligatorios, sin vacíos ni repetidos. Botón bloqueado hasta que todo vale, mensaje que dice cuál es el problema.
- **HCI aplicado.** Por qué: esto se usa en vivo frente al grupo. Visibilidad (bolsa restante y tabla rol contra nombre siempre a la vista), retro (animación más resultado grande), control (re-girar por fila, reiniciar fase), consistencia (mismos botones en las 3 fases), minimalismo (una acción por vez).
- **Orden tesorero primero y director al final.** Por qué: el ganador de tesorero sale de la bolsa y la cuenta cierra exacta (tesorero con 1, uno dobla en la media, el director dobla). Decidido con el grupo.
- **Persistencia en localStorage con clave versionada.** Por qué: la rifa pasa de corrido y una recarga no debe borrarla. `rifaStore.js` guarda nombres y asignaciones en cada cambio y los carga al iniciar. Reiniciar limpia la clave. Límite: mismo navegador y mismo origen.
- **Tema glitch/tech con bloque `<style>` global en `slides.md`.** Por qué: sin cambiar de tema ni sumar deps. Sombras neón amarillas, bordes gruesos, scanlines sutiles y monoespaciada en títulos. Paleta intacta: negro fondo, amarillo acento, blanco texto.
- **Tarjetas muestran su asignado con `Asignado.vue`.** Por qué: al llegar a cada tarjeta el grupo ya vio la rifa; el nombre sale directo del store. Sin asignar, muestra sin asignar.
- **3 puntos por tarjeta sacados de ROLES.md.** Por qué: nada se inventa. (listas ya registradas en el spec).
- **3 puntos por tarjeta sacados de ROLES.md.** Por qué: nada se inventa. Tesorero: aportes con fecha, anota cada gasto, cierre en ceros. Chef: compra y cocina, presupuesto propio, agua y snacks diario. Actividades: horario del día, pausas, checkins y llaves. Turismo: ruta y clima, plan B, turnos de manejo. Fotógrafo: fotos del grupo, comparte el mismo día, coordina spots. Animador: música y juego, integra al solo, avisa roces. Director: destraba en 10 minutos, botiquín y alergias, cuida saldos y ritmo.
- **Emojis propuestos por quien implementa, el grupo confirma.** Por qué: detalle visual que no cambia reglas.
- **Placeholders de tentativas como texto editable en el slide final.** Por qué: fechas y lugares no existen aún.

## Risks / Trade-offs

- [Ruleta con bug en vivo frente al grupo] → Probar flujo completo en modo vivo con Playwright (nombres, giros, errores, re-giro) y llevar papelitos como respaldo.
- [Estado compartido entre slides se pierde al recargar] → Aceptado: la rifa pasa de corrido en vivo; si se recarga, se empieza la fase de nuevo.
- [Emojis no renderizan sin fuente color emoji] → PNG Twemoji locales en `slides/public/emoji/`, se ven en vivo y van embebidos en el PDF.
- [13 momentos alargan a 20 minutos] → Aceptado por el grupo; las tarjetas se pueden saltar en vivo y repartirse después.
- [Nombres de la rifa no quedan en el deck] → Se anotan en el grupo según RULETA.md, el deck queda genérico a propósito.

## Open Questions

- ¿Qué emoji lleva cada rol? Propone quien implementa, confirma el grupo. No bloquea tareas.
- ¿Contenido exacto de los 3 placeholders de fecha y lugar? Default: "Fecha 1..3" y "Lugar 1..3". No bloquea.
- Orden de rifa resuelto: tesorero primero, director al final. No reconsiderar.
