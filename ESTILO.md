# Estilo NT: sin raya em

Empieza aqui: [indice del blueprint](./README.md). Donde se usa: [roles](./ROLES.md) y [ruleta](./RULETA.md).

Regla: ningun documento del blueprint usa la raya em (em dash, U+2014). Si la ves, es error y se corrige.

## Tabla de reemplazos

- Titulo con aclaracion: dos puntos. Ej: `## Tesorero: Ulises (fijo)`.
- Bullet con link: dos puntos entre el link y la descripcion. Ej: `[Los 7 roles NT](./ROLES.md): legos, asignacion y reglas`.
- Inciso en frase: comas o parentesis. Ej: `Ulises, que no tiene licencia, gira` o `Ulises (sin licencia) gira`.
- Remate dato-consecuencia: punto y seguido. Ej: `...localhost:3000. La pagina se recarga sola`.

## Excepciones

Solo citas textuales o nombres propios que la lleven. Fuera de eso no hay excepciones.

## Verificacion

`grep -rPn -- '\x{2014}' README.md ROLES.md RULETA.md ESTILO.md` devuelve 0. Mas el script de links: 0 rotos, 0 huerfanas.
