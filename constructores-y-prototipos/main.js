// prototipo de personaProto

let personaProto = {
  caminar() {
    console.log(`${this.nombre} esta caminando`);
  },
  saludar() {
    console.log(`Hola! Soy ${this.nombre}`);
  },
  comer() {
    console.log(`${this.nombre} esta comiendo`);
  },
};

//Prototipo de estudiante proto

let estudianteProto = Object.create(personaProto);
estudianteProto.estudiar = function () {
  console.log(`${this.nombre} está estudiando`);
};
estudianteProto.dormir = function () {
  console.log(`${this.nombre} está durmiendo`);
};

//proto del profeProto

let profesorProto = Object.create(personaProto);
profesorProto.enseñar = function () {
  console.log(`${this.nombre} está enseñando`);
};
profesorProto.calificar = function () {
  console.log(`${this.nombre} está calificando`);
};

//Constructores

//estudiante

function EstudianteConstructor(nombre, edad, escuela) {
  this.nombre = nombre;
  this.edad = edad;
  this.escuela = escuela;
}
EstudianteConstructor.prototype = estudianteProto;

//profe

function ProfesorConstructor(nombre, carrera, escuela) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.escuela = escuela;
}
ProfesorConstructor.prototype = profesorProto;

//Objetos

let estudiante1 = new EstudianteConstructor(
  "Marilyn",
  20,
  "Universidad de Costa Rica"
);
estudiante1.saludar(); // Hola! Soy Marilyn.
estudiante1.caminar(); // Marilyn está caminando.
estudiante1.estudiar(); // Marilyn está estudiando.

let estudiante2 = new EstudianteConstructor(
  "Karina",
  19,
  "Universidad Nacional"
);
estudiante2.saludar(); // Hola! Soy Karina.
estudiante2.comer(); // Karina está comiendo.
estudiante2.dormir(); // Karina está durmiendo.

let profesor1 = new ProfesorConstructor(
  "Jose",
  "Ingeniería de Sistemas",
  "Tecnologico de Costa Rica"
);
profesor1.saludar(); // Hola! Soy Jose.
profesor1.caminar(); // Jose está caminando.
profesor1.enseñar(); // Jose está enseñando.

let profesor2 = new ProfesorConstructor("Pablo", "Matemáticas", "CETAV");
profesor2.saludar(); // Hola! Soy Pablo.
profesor2.comer(); // Pablo está comiendo.
profesor2.calificar(); // Pablo está calificando.
