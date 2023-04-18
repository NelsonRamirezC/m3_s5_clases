function Usuario(
    nombre,
    correo,
    trabajo = "S/Trab",
    telefono = "S/Tel",
    descripcion
) {
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.descripcion = descripcion;
    this.informacion = function () {
        return `Nombre: ${this.nombre}, correo: ${this.correo}`;
    };
}

Usuario.prototype.saludar = function () {
    return "Hola mundo!, mi nombre: " + this.nombre;
};

let carlos = new Usuario(
    "Carlos",
    "carlos@gmail.com",
    undefined,
    undefined,
    "Soy un programador junior."
);

console.log(carlos.informacion());
console.log(carlos.saludar());
