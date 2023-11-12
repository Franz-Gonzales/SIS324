
class Usuario {
    constructor(id, nombre, cuenta, clave, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.clave = clave;
        this.email = email;
        this.rol = rol;
    }

    toString(){
        return this.nombre;
    }

    getRol(){
        return this.rol;
    }
}


class ControlUsuario {
    constructor() {
        this.listaUsuario = [];
    }

    adicionar_Usuario(usuario) {
        this.listaUsuario.push(usuario);
    }

    ver_Usuario(){
        console.log(this.listaUsuario);
    }

    obtenerListaUsuarios(){
        return this.listaUsuario;
    }

    modificar(id, nuevoNombre, nuevaCuenta, nuevaClave, nuevoEmail, nuevoRol) {
        const usuarioAModificar = this.listaUsuario.find(usuario => usuario.id === id);

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
        const indiceUsuario = this.listaUsuario.findIndex(usuario => usuario.id === id);

        if (indiceUsuario !== -1) {
            this.listaUsuario.splice(indiceUsuario, 1);
        } else {
            console.log(`No se encontró un usuario con el ID ${id}`);
        }
    }
    static obtenerListaUsuarios() {
        let usuarios = [
            [1, "Juan", "Perez", "abc", "juan@gmail.com", "admin"],
            [2, "Lucas", "Mendez", "def", "lucas@gmail.com", "usuario"],
            [3, "Elena", "Paredes", "ghi", "elena@gmail.com", "usuario"],
            [4, "Margarita", "Loaiza", "jkl", "margarita@gmail.com", "admin"],
            [5, "Franz", "Gonzales", "frgs", "gonzalesfranz2019@gmail.com", "admin"]
        ];

        let listaUsuarios = [];

        for (let i = 0; i < usuarios.length; i++) {
            let user = new Usuario(usuarios[i][0], usuarios[i][1], usuarios[i][2], usuarios[i][3], usuarios[i][4], usuarios[i][5]);
            listaUsuarios.push(user);
        }

        return listaUsuarios;
    }

}

