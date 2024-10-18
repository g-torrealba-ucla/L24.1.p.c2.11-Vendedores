export default class Cl_vendedor {
  constructor(codigo, ventas, clientes) {
    this.codigo = codigo;
    this.ventas = ventas;
    this.clientes = clientes;
  }
  rendimiento() {
    return this.ventas / this.clientes * 10;
  }
}
