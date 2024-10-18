import Cl_vendedor from "./Cl_vendedor.js";

export default class Cl_experto extends Cl_vendedor {
  constructor(codigo, ventas, clientes, anualidad) {
    super(codigo, ventas, clientes);
    this.anualidad = anualidad;
  }
  pagarMensual() {
    return this.anualidad / 12 + this.rendimiento() * 2 * 100;
  }
}
