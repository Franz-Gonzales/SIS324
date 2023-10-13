class Usuario {
  constructor(id, nombre, apellido, clave, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.clave = clave;
    this.email = email;
    this.rol = rol;
  }
  toString() {
    return this.nombre;
  }
  getRol() {
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
  verUsuarios() {
    console.log(this.listaUsuario);
  }
  eliminarUsuarios(id) {
    // this.listaUsuario.splice(parseInt(id), 1);
    // console.log(this.listaUsuario);

    for (var i = 0; i < this.listaUsuario.length; i++) {
      if (id == this.listaUsuario[i].id) {
        this.listaUsuario.splice(parseInt(i), 1);
      }
    }
  }
  obtenerListaUsuarios() {
    return this.listaUsuario;
  }
  comprobarUsuario(usuario) {
    let usuarioValido = false;
    for (let i = 0; i < this.listaUsuario.length; i++) {
      if (
        this.listaUsuario[i].email == usuario.email &&
        this.listaUsuario[i].clave == usuario.clave
      ) {
        usuarioValido = true;
        break;
      }
    }
    return usuarioValido;
  }
}
let controlUsuario = new ControlUsuario();
function Iniciar_secion() {
  let email = document.getElementById("email").value;
  let clave = document.getElementById("clave").value;
  let usuario = {
    email: email,
    clave: clave,
  };
  let usuarioValido = controlUsuario.comprobarUsuario(usuario);
  if (usuarioValido) {
    alert("Bienvenido" + " " + email + ", Contraseña: " + clave);
    open("usuarios.html");
  } else {
    alert("Usuario inválido");
  }
  controlUsuario.verUsuarios();
}
function rellenar_usuarios() {
  let usuarios = [
    [, "Brayan", "Simon", "polo", "brayan@gmail.com", "admin"],
    [, "Lucas", "Mendex", "bca", "tumb@gmail.com", "user"],
    [, "Elena", "Paredes", "cba", "tum@gmail.com", "user"],
    [, "polo", "Loaiza", "polo", "polo", "admin"],
    [, "Jose", "Palacios", "bac", "t@gmail.com", "user"],
  ];
  // console.log(usuarios);
  var pos = 0;
  for (let i = 0; i < usuarios.length; i++) {
    let user = new Usuario(
      (usuarios[i][0] = pos++),
      usuarios[i][1],
      usuarios[i][2],
      usuarios[i][3],
      usuarios[i][4],
      usuarios[i][5]
    );
    controlUsuario.adicionar_Usuario(user);
  }
}
rellenar_usuarios();
