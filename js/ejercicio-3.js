/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.
*/

class Rectángulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    get area() {
      return this.alto * this.ancho;
    }
  
    get perímetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    set alto(nuevoAlto) {
      this._alto = nuevoAlto;
    }
  
    get alto() {
      return this._alto;
    }
  
    set ancho(nuevoAncho) {
      this._ancho = nuevoAncho;
    }
  
    get ancho() {
      return this._ancho;
    }
  }

  
  let miRectángulo = new Rectángulo(8, 10);


  document.write("El alto es: " + miRectángulo.alto + "<br>");
document.write("El ancho es: " + miRectángulo.ancho + "<br>");


miRectángulo.alto = 9;
miRectángulo.ancho = 11;


document.write("El area es: " + miRectángulo.area + "<br>");
document.write("El perimetro es: " + miRectángulo.perímetro + "<br>");


