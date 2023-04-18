class Usuario {
    constructor(nombre, correo, trabajo, telefono, descripcion) {
        this.nombre = nombre;
        this.correo = correo;
        this.trabajo = trabajo;
        this.telefono = telefono;
        this.descripcion = descripcion;
    }
}

class Cliente extends Usuario {
    constructor(nombre, correo, trabajo, telefono, descripcion, direccion) {
        super(nombre, correo, trabajo, telefono, descripcion);
        this.direccion = direccion;
    }
}

let cliente = new Cliente(
    "Carlos",
    "correo@mail.cl",
    "programador",
    "123",
    "hola",
    "direccion 1"
);
