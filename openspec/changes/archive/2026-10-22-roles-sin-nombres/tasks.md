# Tasks

## 1. Anonimizar ROLES.md

- [x] 1.1 Quitar nombres de los 7 titulos y cuerpos de rol conservando legos y bullets, y verificar con `grep -Ei "lazcas|said|ulises|gerardo|camacho|g0play|preco|endaa|gerawey|xentyo" ROLES.md` que no queden menciones en secciones de rol
- [x] 1.2 Agregar la nota de tareas derivadas al principio o al final y verificar que el texto completo de la nota aparece una vez en el documento
- [x] 1.3 Redactar la mencion unica del nucleo de 5 sin nombres y las reglas sin nombres propios, y verificar que `grep -Ei "lazcas|said|ulises|gerardo|camacho" ROLES.md` devuelve vacio

## 2. Sincronizar indice y validar

- [x] 2.1 Ajustar las lineas de README.md que nombran personas por rol y verificar que el indice describe roles sin asignar nombres
- [x] 2.2 Correr `openspec validate --change "roles-sin-nombres"` y verificar que no hay errores
