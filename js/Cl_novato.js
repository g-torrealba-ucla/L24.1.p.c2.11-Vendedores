import Cl_vendedor from "./Cl_vendedor.js";

export default class Cl_novato extends Cl_vendedor {
  constructor(codigo, ventas, clientes, sueldoMinimo) {
    super(codigo, ventas, clientes);
    this.sueldoMinimo = sueldoMinimo;
  }
  bono() {
    return 10 * this.rendimiento();
  }
  pagarMensual() {
    return this.sueldoMinimo + this.bono();
  }
}
