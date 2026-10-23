# Spec Delta

## ADDED Requirements

### Requirement: Ruleta tolera datos raros
La ruleta SHALL aceptar la lista como viene y decir que esta mal sin romperse. Nombres con espacios SHALL limpiarse. Duplicados por mayusculas (Ana vs ana) SHALL marcarse como repetidos. Si la lista queda vacia o los items vienen vacios, girar SHALL seguir bloqueado con mensaje.

#### Scenario: Duplicado por mayusculas
- **WHEN** se escriben Ana y ana en la lista
- **THEN** aparece mensaje de repetido y girar sigue bloqueado

#### Scenario: Items vacios
- **WHEN** el momento no trae items
- **THEN** se lee turno vacio y girar sigue bloqueado con mensaje de nada que rifar

### Requirement: La rifa sigue aunque falle el sistema
Si no hay localStorage, si el dato guardado viene roto o si ya no hay espacio, la rifa SHALL seguir en memoria y avisar. La pagina SHALL mostrar que anote en papelitos.

#### Scenario: Dato guardado roto
- **WHEN** lo guardado no se puede leer
- **THEN** se empieza con lista vacia y se avisa que se perdio lo guardado

#### Scenario: Sin localStorage
- **WHEN** el navegador bloquea el guardado
- **THEN** la rifa sigue en memoria y se avisa que al recargar se pierde

### Requirement: Humano manda con registro
El grupo SHALL poder dar un rol a mano, re-girar uno o liberar, aunque rompa la regla, con motivo corto. Cada override SHALL verse en la tabla con quien decidio que. Tesorero con otro rol o director tesorero SHALL pedir confirmacion doble.

#### Scenario: Dar rol a mano por instinto
- **WHEN** el grupo decide que Ana lleva Chef aunque no salio
- **THEN** se asigna con motivo y la tabla marca que fue a mano

#### Scenario: Regla rota con confirmacion
- **WHEN** se quiere dar otro rol al tesorero
- **THEN** se pide confirmacion doble y queda registrado como decision humana

### Requirement: Modo papelitos
La ruleta SHALL dejar exportar la lista y el estado en texto para seguir en papel, y volver a cargar ese texto despues. El slide SHALL decirlo cuando la ruleta falla.

#### Scenario: Papelitos cuando falla
- **WHEN** la ruleta no gira
- **THEN** se copia la lista en papel, se rifa a mano y al volver se carga el resultado

### Requirement: Reset con confirmacion e historial
Reset y limpiar SHALL pedir confirmacion. La ultima accion SHALL poder deshacerse una vez.

#### Scenario: Reset accidental
- **WHEN** se pulsa reset con rifa avanzada
- **THEN** se pide confirmacion y sin ella nada se borra

#### Scenario: Deshacer ultima asignacion
- **WHEN** sale un nombre por error de dedo
- **THEN** se deshace y el rol vuelve a la bolsa
