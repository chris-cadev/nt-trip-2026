# Spec Delta

## Purpose

Define las areas, legos y 7 roles del viaje NT para que 5 personas cubran todo sin huecos ni dobles mandos.

## ADDED Requirements

### Requirement: Areas base del viaje
El grupo SHALL mantener la lista cerrada de areas: dinero, comida, movilidad+hospedaje, actividades, turismo, memoria, ambiente y direccion. Ningun area SHALL quedar sin dueno.

#### Scenario: Area sin dueno
- **WHEN** se revisa la tabla rol->legos antes del viaje
- **THEN** cada area tiene al menos un rol responsable y no hay area huerfana

### Requirement: Legos atomicos
Cada area SHALL descomponerse en legos de 1 chamba concreta (verbo + entregable), sin legos ambiguos tipo "apoyar en general".

#### Scenario: Lego entendido por cualquiera
- **WHEN** un NT lee un lego (ej: "c4 agua + electrolitos + snacks")
- **THEN** sabe que comprar/llevar sin preguntar nada mas

### Requirement: Composicion en 7 roles
El sistema de organizacion SHALL apilar los legos en: tesorero (d1-d3+m3) = Ulises fijo, chef (c1-c4) = Camacho, turismo (t1-t3+m1; el sorteado maneja y es el encargado de turismo) = JOKER menos Ulises, actividades (a1-a3+m2) = Gerardo, fotografo (p1-p2) = Lazcas (alt Said), animador (v1-v3) = Said fijo, director (j1-j2+s1-s2, vibe transversal previa) = JOKER menos Ulises. Ulises SHALL sortear los 2 jokers de forma random.

#### Scenario: Dobleteo para 5 personas
- **WHEN** son 5 NT para 7 roles
- **THEN** al menos 2 personas toman 2 roles y ningun rol queda vacio, con la restriccion de no juntar director+tesorero en la misma persona

### Requirement: Principio los 5 primero
El grupo SHALL aplicar la regla "los 5 primero": toda decision con parejas SHALL reservar momentos solo-NT y ninguna actividad obligatoria SHALL excluir a uno de los 5.

#### Scenario: Conflicto parejas vs NT
- **WHEN** hay propuesta de plan solo de parejas en horario estelar
- **THEN** director la mueve o crea alternativa solo-NT en ese bloque
