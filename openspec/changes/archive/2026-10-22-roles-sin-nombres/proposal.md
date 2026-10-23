# Proposal

## Why

ROLES.md asigna cada rol a una persona por nombre (Ulises, Camacho, Gerardo, Lazcas, Said). De momento no debe haber nombres asignados: genera compromiso prematuro y roces si alguien falta. Se necesita una version anonima que describa que hacer en cada rol y deje claro quienes forman el nucleo considerado.

## What Changes

- Quita todos los nombres asignados a roles en ROLES.md (titulos, lineas de candidatos, notas de sorteo con nombre, relaciones entre roles).
- Mantiene por rol: descripcion de que hace y lista de responsabilidades a su cargo (legos + bullets actuales).
- Agrega una nota visible (al principio o al final, donde quede mejor) que diga: esas son las responsabilidades descritas pero al comprender la responsabilidad les dara mas tareas por hacer relacionadas y las tienen que hacer.
- Describe una sola vez que hay un nucleo de 5 personas considerado y que si falta alguna no se arma nada, sin nombrar a nadie ni listar candidatos por rol.
- Mantiene reglas estructurales (ningun rol vacio, 2 personas dobletean con los 2 jokers, prohibido juntar director + tesorero, sorteo random de los 2 jokers, principio los 5 primero) sin nombres propios.

## Capabilities

### New Capabilities

- `viaje/roles`: recompone los 7 roles en version anonima (descripcion + responsabilidades por rol, nota de tareas derivadas, mencion del nucleo de 5 sin nombres, reglas estructurales sin nombres). Supersede el delta de `organizar-roles-nt` aun no archivado.

### Modified Capabilities

- Ninguna (no hay specs archivadas en `openspec/specs/`).

## Impact

- Solo ROLES.md (y referencias inversas en README.md si nombran personas por rol).
- Sin codigo ni dependencias. Cambio **BREAKING** solo en el sentido documental: despues de este change ningun rol tiene dueno nominal hasta un futuro change de asignacion.
