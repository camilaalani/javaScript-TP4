/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
*/

const auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
    encender: function() {
      this.encendido = true;
    },
    apagar: function() {
      this.encendido = false;
    },
    mostrarEstado: function() {
      if (this.encendido) {
        document.write(`<p>Auto encendido.</p>`);
      } else {
        document.write(`<p>El auto se apagó. ${"<br>"}</p>`);
      }
    }
  };

  
  document.write(auto);
  document.write(`<h1>El auto es de color: ${auto.color}</h1>`);
  document.write(`<h1>El auto es de la marca: ${auto.marca}</h1>`);
  document.write(`<h1>El auto es modelo: ${auto.modelo}</h1>`);


  auto.encender();
  auto.mostrarEstado();
  auto.apagar()
  auto.mostrarEstado();