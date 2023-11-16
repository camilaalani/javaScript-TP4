/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        document.write(`<p>¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p>`);
    }

    despedirse() {
        document.write(`<p>¡Hasta luego! Fue un placer presentarme.</p>`);
    }
}

let persona1 = new Persona("Juan", 30, "Ingeniero");
persona1.saludar();
persona1.despedirse();

let persona2 = new Persona("Ana", 25, "Diseñadora");
persona2.saludar();
persona2.despedirse();
