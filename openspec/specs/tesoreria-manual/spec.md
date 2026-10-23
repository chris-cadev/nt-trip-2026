# tesoreria-manual Specification

## Purpose

Manual standard del tesorero que explica como cuidar el dinero comun por fase y que se puede reusar en otros grupos como familia, amigos o trabajo.

## Requirements

### Requirement: Pagina de tesoreria por fase
La pagina TESORERIA.md SHALL explicar la chamba del tesorero en tres fases: antes, durante y cierre, con pasos en orden y ejemplos concretos.

#### Scenario: Lector sigue el flujo completo
- **WHEN** una persona nueva en el rol lee la pagina de inicio a fin
- **THEN** encuentra que hacer antes del viaje, que hacer cada dia y como cerrar sin deudas

#### Scenario: Ejemplo concreto por paso
- **WHEN** el lector lee un paso como pedir aportes o apuntar un gasto
- **THEN** ve un ejemplo concreto de que decir o hacer (quien paga los tacos, como lo apunta, cuando lo cobra)

### Requirement: Consejos de finanzas sin tecnicismos
La pagina SHALL incluir consejos practicos de dinero comun con frases cortas y sin tecnicismos: fondo de emergencia, fecha limite, comprobantes, corte diario, efectivo y seguridad del bote.

#### Scenario: Fondo de emergencia claro
- **WHEN** el lector busca como manejar imprevistos
- **THEN** encuentra cuanto apartar, donde guardarlo y cuando usarlo

#### Scenario: Cobro sin pena
- **WHEN** falta un aporte o un saldo al cierre
- **THEN** la pagina da texto listo para copiar para pedirlo con fecha limite

### Requirement: Base fija mas adaptacion reusable
La pagina SHALL separar la base fija (tope, apuntar al momento, corte diario, cierre en ceros) de la guia de adaptacion para familia, amigos y trabajo.

#### Scenario: Adaptar a familia
- **WHEN** el lector la usa para un gasto familiar
- **THEN** encuentra que ajustar (aportes desiguales, un adulto que no cobra de mas)

#### Scenario: Adaptar a trabajo
- **WHEN** el lector la usa para gastos de trabajo
- **THEN** encuentra que ajustar (facturas, comprobantes, responsable de caja)

### Requirement: Estilo y enlaces del blueprint
La pagina SHALL cumplir ESTILO.md (sin raya em, frases cortas, ejemplos concretos, sin nombres propios) y SHALL enlazar con ROLES, PRESUPUESTO, SPLIIT y CIERRE en ambos sentidos.

#### Scenario: Navegacion completa
- **WHEN** el lector esta en TESORERIA.md
- **THEN** puede saltar a roles, presupuesto, Spliit y cierre, y desde esas paginas puede volver a tesoreria

#### Scenario: Verificacion de estilo
- **WHEN** se corre grep de raya em sobre los `.md` tocados
- **THEN** devuelve 0 y los links internos no dejan paginas huerfanas
