# Spec Delta

## Purpose

Que el navegador muestre solo los cambios de los markdown del viaje al guardarlos, sin recarga manual ni reinicio del contenedor.

## ADDED Requirements

### Requirement: Recarga automática al guardar
El sistema SHALL recargar la página del visualizador automáticamente cuando un `.md` servido cambie en el host.

#### Scenario: Editar y ver sin F5
- **WHEN** el usuario guarda un cambio en un `.md` con el visualizador abierto en el navegador
- **THEN** la página se recarga sola en menos de 5 segundos mostrando el cambio, sin tocar el teclado ni reiniciar el contenedor

#### Scenario: Sin cambios no hay recarga
- **WHEN** ningún archivo cambia durante 60 segundos
- **THEN** el navegador no recarga ni parpadea (sin recargas espurias)

### Requirement: Sin nuevas dependencias ni puertos sorpresa
La recarga SHALL usar el livereload ya incluido en `docsify serve`, con su puerto publicado en el compose y documentado.

#### Scenario: Puertos publicados
- **WHEN** se corre `docker compose config`
- **THEN** aparecen publicados el puerto de docs (3000 por defecto) y el de livereload (35729)
