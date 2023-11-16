/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = new Array(tamano);
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log("La agenda está llena.");
            return;
        }
        this.contactos.push(contacto);
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre === contacto.nombre);
    }

    listarContactos() {
        this.contactos.forEach(contacto => {
            console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
        });
    }

    buscarContacto(nombre) {
        let contacto = this.contactos.find(c => c.nombre === nombre);
        if (contacto) {
            console.log(`Teléfono de ${nombre}: ${contacto.telefono}`);
        } else {
            console.log(`No se encontró el contacto con nombre ${nombre}`);
        }
    }

    eliminarContacto(contacto) {
        let index = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if (index !== -1) {
            this.contactos.splice(index, 1);
            console.log(`Se eliminó el contacto con nombre ${contacto.nombre}`);
        } else {
            console.log(`No se encontró el contacto con nombre ${contacto.nombre}`);
        }
    }

    agendaLlena() {
        return this.contactos.length === this.contactos.filter(Boolean).length;
    }

    huecosLibres() {
        return this.contactos.length - this.contactos.filter(Boolean).length;
    }
}

let agenda = new Agenda();
let menu = `1. Añadir contacto\n2. Verificar si existe contacto\n3. Listar contactos\n4. Buscar contacto\n5. Eliminar contacto\n6. Verificar si la agenda está llena\n7. Ver cuántos huecos libres hay\n8. Salir`;
let opcion;

do {
    opcion = parseInt(prompt(menu));
    switch(opcion) {
        case 1:
            let nombre = prompt("Ingrese el nombre del contacto");
            let telefono = prompt("Ingrese el teléfono del contacto");
            let contacto = new Contacto(nombre, telefono);
            agenda.aniadirContacto(contacto);
            break;
        case 2:
            nombre = prompt("Ingrese el nombre del contacto a verificar");
            contacto = new Contacto(nombre, '');
            console.log(agenda.existeContacto(contacto) ? "El contacto existe" : "El contacto no existe");
            break;
        case 3:
            agenda.listarContactos();
            break;
        case 4:
            nombre = prompt("Ingrese el nombre del contacto a buscar");
            agenda.buscarContacto(nombre);
            break;
        case 5:
            nombre = prompt("Ingrese el nombre del contacto a eliminar");
            contacto = new Contacto(nombre, '');
            agenda.eliminarContacto(contacto);
            break;
        case 6:
            console.log(agenda.agendaLlena() ? "La agenda está llena" : "La agenda no está llena");
            break;
        case 7:
            console.log(`Hay ${agenda.huecosLibres()} huecos libres`);
            break;
        case 8:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }
} while (opcion !== 8);
