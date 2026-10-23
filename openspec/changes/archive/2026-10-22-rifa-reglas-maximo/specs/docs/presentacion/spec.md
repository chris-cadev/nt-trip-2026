# Spec Delta

## Purpose

Forzar entre sorteos que nadie pase de 2 roles y quitar la ronda final duplicada.

## ADDED Requirements

### Requirement: Tope de 2 roles por persona
Nadie con 2 roles SHALL entrar a la bolsa del giro ni aceptar voluntariado. Romperlo SHALL pedir doble confirmación como decisión humana registrada.

#### Scenario: Giro excluye al que tiene 2
- **WHEN** una persona ya tiene 2 roles y toca girar
- **THEN** no sale en la bolsa.

#### Scenario: Voluntariado bloqueado
- **WHEN** se da un tercer rol a mano
- **THEN** aparece mensaje y solo pasa con doble confirmación.

#### Scenario: Bolsa vacía avisa
- **WHEN** nadie queda libre para el turno
- **THEN** el display dice que liberen un rol con re-giro.

### Requirement: Sin ronda final duplicada
El deck SHALL traer un solo momento de rifa de director (`Rifa de Director`). El momento `Rifa final: director` SHALL no existir.

#### Scenario: Un solo momento
- **WHEN** se busca `Rifa final` en el deck
- **THEN** no aparece.
