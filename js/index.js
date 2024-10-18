/**
 * VENDEDORES
 * Una compañía especializada contrata a sus vendedores de manera que la consideración de la cantidad
 * de ventas concretadas es determinante para los honorarios respectivos. Para el cálculo del
 * rendimiento en ventas concretadas, divide la cantidad de ventas efectivos entre los clientes
 * visitados, y lo multiplica por 10, lo que da el rendimiento del vendedor. Para los vendedores
 * novatos se les cancela sueldo mínimo más una bonificación de $10 que se multiplica por el
 * rendimiento; los vendedores expertos se contratan por un monto anual y el doble del rendimiento se
 * multiplica por $100 mensual para su pago. Realice un programa que procese estos datos y muestre lo
 * siguiente: Por cada vendedor el monto a pagar mensual, y por la compañía el monto promedio que paga
 * mensual a los expertos.
 * Considere los novatos:
 * (codigo, ventas, clientes, sueldo)
 * (11, 20, 100, 50)
 * (33, 40, 80, 100)
 * (55, 15, 60, 150)
 * (66, 10, 50, 50)
 * Considere los expertos:
 * (codigo, ventas, clientes, anualidad)
 * (22, 30, 40, 3000)
 * (77, 10, 25, 6000)
 * (99, 60, 120, 12000)
 * (44, 8, 32, 2400)
 */

import Cl_novato from "./Cl_novato.js";
import Cl_experto from "./Cl_experto.js";
import Cl_compania from "./Cl_compania.js";

let novato1 = new Cl_novato(11, 20, 100, 50);
let novato2 = new Cl_novato(33, 40, 80, 100);
let novato3 = new Cl_novato(55, 15, 60, 150);
let novato4 = new Cl_novato(66, 10, 50, 50);
let experto1 = new Cl_experto(22, 30, 40, 3000);
let experto2 = new Cl_experto(77, 10, 25, 6000);
let experto3 = new Cl_experto(99, 60, 120, 12000);
let experto4 = new Cl_experto(44, 8, 32, 2400);
let salida = document.getElementById("salida");
let compania = new Cl_compania();
compania.procesarVendedor(novato1);
compania.procesarVendedor(novato2);
compania.procesarVendedor(novato3);
compania.procesarVendedor(novato4);
compania.procesarVendedor(experto1);
compania.procesarVendedor(experto2);
compania.procesarVendedor(experto3);
compania.procesarVendedor(experto4);

let mostrarVendedor = (vendedor) => {
  return `<tr>
    <td>${vendedor.codigo}</td>
    <td>${vendedor instanceof Cl_novato ? "Novato" : "Experto"}</td>
    <td>${vendedor.ventas}</td>
    <td>${vendedor.clientes}</td>
    <td>$${vendedor.sueldoMinimo ?? "--"}</td>
    <td>$${vendedor.anualidad ?? "--"}</td>
    <td>$${vendedor.bono ? vendedor.bono().toFixed(2) : "--"}</td>
    <td>$${vendedor.pagarMensual().toFixed(2)}</td>
  </tr>`;
};

salida.innerHTML = `
<table>
  <tr>
    <th>Código</th>
    <th>Tipo</th>
    <th>Ventas</th>
    <th>Clientes</th>
    <th>Sueldo mínimo</th>
    <th>Anualidad</th>
    <th>Bono</th>
    <th>Pagar mensual</th>
  </tr>
${mostrarVendedor(novato1)}
${mostrarVendedor(novato2)}
${mostrarVendedor(novato3)}
${mostrarVendedor(novato4)}
${mostrarVendedor(experto1)}
${mostrarVendedor(experto2)}
${mostrarVendedor(experto3)}
${mostrarVendedor(experto4)}
</table>
<br>Monto promedio pagado a expertos: $${compania.mtoPromExpertos().toFixed(2)}
`;
