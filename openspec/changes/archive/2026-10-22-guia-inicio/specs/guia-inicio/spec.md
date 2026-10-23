# Spec Delta

## Purpose

Pagina de inicio que guia a un novato por el blueprint completo: como funciona el sistema, en que orden leer y que hacer en cada fase del viaje, reusable para cualquier viaje del grupo.

## ADDED Requirements

### Requirement: Guia de como funciona
La pagina README.md SHALL explicar el sistema en 3 pasos (repartir roles, leer tu manual, cerrar en ceros) con un ejemplo de un viaje de principio a fin.

#### Scenario: Novato abre el inicio
- **WHEN** alguien que nunca vio el blueprint abre la portada
- **THEN** entiende en un minuto como se usa todo junto, sin leer las 15 paginas

#### Scenario: Ejemplo de viaje
- **WHEN** el lector sigue el ejemplo
- **THEN** ve que hace cada rol antes, durante y despues, con los manuales correspondientes

### Requirement: Orden de lectura y mapa por fase
La pagina SHALL dar un orden de lectura sugerido (reglas base primero, tu manual despues, herramientas al final) y un mapa que agrupe las paginas por fase del viaje.

#### Scenario: Solo me toco un rol
- **WHEN** a alguien le toca fotografo y no quiere leer todo
- **THEN** la guia le dice que leer primero (roles y su manual) y que dejar para despues

#### Scenario: Mapa completo
- **WHEN** el lector quiere ver todo lo que hay
- **THEN** encuentra la lista completa de paginas agrupada, sin links rotos ni huerfanas

### Requirement: Estilo y espejo en docs
La pagina SHALL cumplir ESTILO.md (sin raya em, frases cortas, ejemplos concretos, sin nombres propios) y SHALL tener espejo exacto en `docs/README.md` con links relativos.

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y todos los links del README abren su pagina

#### Scenario: Espejo sincronizado
- **WHEN** se compara el README raiz con el de docs
- **THEN** dicen lo mismo, solo cambian los prefijos de links (`./` contra directos)
