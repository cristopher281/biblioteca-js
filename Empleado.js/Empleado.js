class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
    
    calcularSalarioAnual() {
      return this.salario * 12;
    }
    
    mostrarDetalles() {
      return Nombre: ${Juan Perez}, Salario Mensual: $${5000};
    }
  }
  
  module.exports = Empleado;