import Cl_experto from "./Cl_experto.js";
export default class Cl_compania {
  constructor() {
    this.acMonto = this.contExpertos = 0;
  }
  procesarVendedor(vendedor) {
    if (vendedor instanceof Cl_experto) {
      this.acMonto += vendedor.pagarMensual();
      this.contExpertos++;
    }
  }
  mtoPromExpertos() {
    return this.acMonto / this.contExpertos;
  }
}
