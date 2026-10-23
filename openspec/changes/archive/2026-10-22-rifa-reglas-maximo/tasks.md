# Tasks

## 1. Tope de 2 roles

- [ ] 1.1 Excluir de `candidatos()` a quien ya trae 2 roles y verificar que el giro no lo saca.
- [ ] 1.2 Bloquear tercer rol en `puedeAsignar()` más entrada en `esReglaDura()` y verificar mensaje más doble confirmación.
- [ ] 1.3 Documentar tope en `ROLES.md` sin nombres y verificar sin raya em.

## 2. Deck y verificación

- [ ] 2.1 Borrar el momento `Rifa final: director` y verificar un solo momento de director.
- [ ] 2.2 Probar flujo con Playwright (tope en giro, bloqueo en voluntariado, override con confirm, bolsa vacía avisa, director distinto de tesorero) y verificar que todo pasa.
- [ ] 2.3 Exportar PNG y PDF y verificar sin recortes.
- [ ] 2.4 Correr `openspec validate rifa-reglas-maximo --strict` y verificar que pasa sin errores.
