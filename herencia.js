//CLASE PADRE
function Usuario(nombre, correo, trabajo, telefono, descripcion) {
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.descripcion = descripcion;
    this.informacion = function () {
        return `Nombre: ${this.nombre}, correo: ${this.correo}`;
    };
}

//CLASE HIJA Cliente
function Cliente(nombre, correo, trabajo, telefono, descripcion, direccion) {
    //ENVIAMOS LOS ATRIBUTOS DECLARADOS EN PADRE A TRAVÉS DE CALL
    Usuario.call(this, nombre, correo, trabajo, telefono, descripcion);
    this.direccion = direccion;
    this.mostrarDireccion = function () {
        return this.direccion;
    };
}
//declaramos la herencia => cliente hereda las propiedad y métodos del padre
Cliente.prototype = Object.create(Usuario.prototype);

//hay que definir cuál será el constructor de Cliente.
Cliente.prototype.constructor = Cliente;

//CLASE HIJA Vendedor
function Vendedor(nombre, correo, trabajo, telefono, descripcion, sueldo) {
    //ENVIAMOS LOS ATRIBUTOS DECLARADOS EN PADRE A TRAVÉS DE CALL
    Usuario.call(this, nombre, correo, trabajo, telefono, descripcion);
    this.sueldo = sueldo;
    this.mostrarSueldo = function () {
        return this.sueldo * 0.78;
    };
}
//declaramos la herencia => cliente hereda las propiedad y métodos del padre
Vendedor.prototype = Object.create(Usuario.prototype);

//hay que definir cuál será el constructor de Cliente.
Vendedor.prototype.constructor = Vendedor;

let cliente = new Cliente(
    "Carlos",
    "carlos@gmail.com",
    "Programador",
    "+5691234567",
    "Soy un programador junior.",
    "Pasaje 1, macul, RM"
);

let vendedor = new Vendedor(
    "Pedro",
    "pedro@weplay.com",
    "Vendedor principal",
    "+5691234568",
    "Vendedor de juegos.",
    500000
);

/* console.log(cliente.informacion());
console.log(cliente.mostrarDireccion()); */

console.log(vendedor.informacion());
console.log(vendedor.mostrarSueldo());
