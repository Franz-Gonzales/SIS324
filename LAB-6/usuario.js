// Crear los datos de 5 usuarios, utilizando las clases usuario y control usuario, y mostrar los datos de los usuarios Enviar la imagen de los usuarios, y el nombre del estudiante, enviar el archivo pdf

class Usuario {
    constructor(id, nombre, cuenta, clave, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.clave = clave;
        this.email = email;
        this.rol = rol;
    }
}

class CtrlUsuario {
    constructor() {
        this.lista = [];
    }

    adicionar(usuario) {
        this.lista.push(usuario);
    }

    modificar(id, nuevoNombre, nuevaCuenta, nuevaClave, nuevoEmail, nuevoRol) {
        const usuarioAModificar = this.lista.find(usuario => usuario.id === id);

        if (usuarioAModificar) {
            usuarioAModificar.nombre = nuevoNombre;
            usuarioAModificar.cuenta = nuevaCuenta;
            usuarioAModificar.clave = nuevaClave;
            usuarioAModificar.email = nuevoEmail;
            usuarioAModificar.rol = nuevoRol;
        } else {
            console.log(`No se encontró un usuario con el ID ${id}`);
        }
    }

    eliminar(id) {
        const indiceUsuario = this.lista.findIndex(usuario => usuario.id === id);

        if (indiceUsuario !== -1) {
            this.lista.splice(indiceUsuario, 1);
        } else {
            console.log(`No se encontró un usuario con el ID ${id}`);
        }
    }
    static obtenerListaUsuarios() {
        let usuarios = [
            [1, "Juan", "Perez", "abc", "juan@gmail.com", "admin"],
            [2, "Lucas", "Mendez", "def", "lucas@gmail.com", "usuario"],
            [3, "Elena", "Paredes", "ghi", "elena@gmail.com", "usuario"],
            [4, "Margarita", "Loaiza", "jkl", "margarita@gmail.com", "admin"]
        ];

        let listaUsuarios = [];

        for (let i = 0; i < usuarios.length; i++) {
            let user = new Usuario(usuarios[i][0], usuarios[i][1], usuarios[i][2], usuarios[i][3], usuarios[i][4], usuarios[i][5]);
            listaUsuarios.push(user);
        }

        return listaUsuarios;
    }
}


let crt_Usuario = new CtrlUsuario();
let lista_Usuarios = CtrlUsuario.obtenerListaUsuarios();

console.log("LAB-6 DE SIS324 Usuario y Control Usuario");
console.log("Gonzales Suyo Franz Reinaldo   GL-1")

console.log("Mostrar Lista de Usuarios: ", lista_Usuarios);


