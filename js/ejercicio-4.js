/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(código, nombre, precio) {
      this.código = código;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      document.write(`<h2>Código: ${this.código} ${"<br>"}</h2>`);
      document.write(`Nombre: ${this.nombre} ${"<br>"}`);
      document.write(`Precio: ${this.precio} ${"<br>"}`);
    }
  }

  let productos = [
    new Producto("001", "Leche", "$50"),
    new Producto("002", "Pan", "$20"),
    new Producto("003", "Huevos", "$30")
  ];

  
  for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
  }
  
