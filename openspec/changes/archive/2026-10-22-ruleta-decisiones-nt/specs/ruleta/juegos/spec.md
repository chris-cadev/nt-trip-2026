# Spec Delta

## Purpose

Define el catalogo de juegos de decision NT y que tipo de decision resuelve cada uno, con material, tiempo y jugadores.

## ADDED Requirements

### Requirement: Catalogo de juegos
El grupo SHALL mantener el catalogo cerrado: volado, piedra-papel-tijera (PPT), canicas, rayuela, poker de juguete (fichas = favores, nunca dinero), tictactoe-torneo y ruleta. Cada juego SHALL tener ficha con jugadores, material, tiempo y mejor uso.

#### Scenario: Juego sin ficha
- **WHEN** alguien propone un juego nuevo (ej: dados, loteria)
- **THEN** no se usa hasta tener ficha completa y tabla de uso aprobada por los 5

### Requirement: Tabla decision-juego
Toda decision por suerte SHALL clasificarse en binaria, 1 de N, reparto o desempate, y SHALL resolverse con el juego de su tipo: binaria con volado o PPT; 1 de N con ruleta, canicas o rayuela; reparto con poker de juguete o canicas por puntos; desempate con PPT best-of-3 o volado del tesorero.

#### Scenario: Decision 1 de N (destino)
- **WHEN** hay 5 destinos propuestos (uno por NT) ya filtrados
- **THEN** se resuelve con ruleta a ciegas, un giro, sin reintentos

#### Scenario: Reparto (cuartos o turnos)
- **WHEN** hay que repartir cuartos o turnos de manejo
- **THEN** se usa poker de juguete o canicas por puntos, nunca dinero real

### Requirement: Links sin paginas huerfanas
`RULETA.md` SHALL linkear a `ROLES.md` y al indice raiz, y ambos SHALL linkear de vuelta. Ninguna pagina del blueprint SHALL quedar sin links de entrada y salida.

#### Scenario: Verificar links
- **WHEN** se revisa el blueprint antes del viaje
- **THEN** cada archivo .md tiene al menos un link de entrada y uno de salida, y no hay links rotos
