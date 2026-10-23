# Tasks

## 1. Datos y sistema que no rompe

- [x] 1.1 Normalizar nombres en rifaStore (trim, minusculas para duplicados) y verificar que Ana y ana marcan repetido y girar se bloquea
- [x] 1.2 Cargar con aviso y modo memoria (dato roto, sin localStorage, sin espacio) y verificar que la rifa sigue y muestra aviso mas papelitos
- [x] 1.3 Items vacios y bolsa vacia con mensaje y verificar que girar bloqueado dice nada que rifar

## 2. Humano manda con registro

- [x] 2.1 Dar rol a mano con motivo y marca a mano en tabla y verificar que queda asignado con motivo visible
- [x] 2.2 Regla rota con doble confirmacion (tesorero con otro rol) y verificar que sin confirmar nada cambia y con confirmar queda registrado
- [x] 2.3 Re-girar y liberar por fila mas deshacer ultimo y verificar que el rol vuelve a la bolsa

## 3. Papelitos y cierre

- [x] 3.1 Exportar e importar estado en texto y verificar que copiar, rifar en papel y pegar deja la tabla igual
- [x] 3.2 Reset y limpiar con confirmacion y texto de papelitos en slides y verificar que sin confirmar nada se borra y que `openspec validate --change ruleta-robusta-slides` pasa
