/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioDeNacimiento = anioDeNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
      let rasgoCaracteristico = "";
  
      if (this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948) {
        generacion = "Generación silenciosa";
        rasgoCaracteristico = "Austeridad";
      } else if (this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968) {
        generacion = "Baby Boomers";
        rasgoCaracteristico = "Ambición";
      } else if (this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980) {
        generacion = "Generación X";
        rasgoCaracteristico = "Obsesión por el éxito";
      } else if (this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993) {
        generacion = "Millennials";
        rasgoCaracteristico = "Frustración";
      } else if (this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgoCaracteristico = "Irreverencia";
      }
      document.write(`La persona pertenece a la ${generacion} y su rasgo característico es: ${rasgoCaracteristico}.`);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write("<p>La persona es mayor de edad.</p>");
      } else {
        document.write("<p>La persona es menor de edad.</p>");
      }
    }
  
    mostrarDatos() {
      document.write(`<p>Nombre: ${this.nombre}</p>`);
      document.write(`<p>Edad: ${this.edad}</p>`);
      document.write(`<p>DNI: ${this.dni}</p>`);
      document.write(`<p>Sexo: ${this.sexo}</p>`);
      document.write(`<p>Peso: ${this.peso}</p>`);
      document.write(`<p>Altura: ${this.altura}</p>`);
      document.write(`<p>Año de nacimiento: ${this.anioDeNacimiento}</p>`);
    }
  
    generaDNI() {
      let dni = Math.floor(Math.random() * 100000000);
      document.write(`El DNI generado es: ${dni}.`);
    }
  }

  
  let persona = new Persona("Maria Elena del Valle", 25, "12345678", "Mujer", 70, 1.66, 1998);

persona.mostrarGeneracion();

persona.esMayorDeEdad();

persona.mostrarDatos();

persona.generaDNI();



