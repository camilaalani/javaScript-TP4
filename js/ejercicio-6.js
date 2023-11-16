/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(iSBN, título, autor, numPáginas) {
      this.iSBN = iSBN;
      this.título = título;
      this.autor = autor;
      this.numPáginas = numPáginas;
    }
  
    get iSBN() {
      return this._iSBN;
    }
  
    set iSBN(nuevoiSBN) {
      this._iSBN = nuevoiSBN;
    }
  
    get título() {
      return this._título;
    }
  
    set título(nuevoTítulo) {
      this._título = nuevoTítulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(nuevoAutor) {
      this._autor = nuevoAutor;
    }
  
    get numPáginas() {
      return this._numPáginas;
    }
  
    set numPáginas(nuevoNumPáginas) {
      this._numPáginas = nuevoNumPáginas;
    }
  
    mostrarLibro() {
      document.write(`<p>El libro ${this.título} con iSBN ${this.iSBN} creado por el autor ${this.autor} tiene ${this.numPáginas} páginas.</p>`);
    }
  }

  
  let libro1 = new Libro("1234567890", "El Quijote", "Miguel de Cervantes", 863);
  let libro2 = new Libro("0987654321", "Cien años de soledad", "Gabriel García Márquez", 417);

  libro1.mostrarLibro();
  libro2.mostrarLibro();


 if (libro1.numPáginas > libro2.numPáginas) {
    document.write(`<p>El libro ${libro1.título} tiene más páginas que el libro ${libro2.título}.</p>`);
  } else if (libro1.numPáginas < libro2.numPáginas) {
    document.write(`<p>El libro ${libro2.título} tiene más páginas que el libro ${libro1.título}.</p>`);
  } else {
    document.write("<p>Los dos libros tienen el mismo número de páginas.</p>");
  }

  
