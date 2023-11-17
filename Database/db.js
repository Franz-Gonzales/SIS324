// const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql');


const Database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seguridad',
    port: 3307
});


Database.connect((error) =>{
    if(error){
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('Conexión exitosa');

});



module.exports = Database;




// const dbPath = "./seguridad.db";
// const Strings = require('../Utils/strings.js');
// const str = new Strings();

// class Database {

//     constructor() {
//         this.usuarios = [];
//         this.db = new sqlite3.Database(dbPath, (err) => {
//             if (err) {
//                 console.error('Error al abrir la base de datos Seguridad:', err.message);
//             } else {
//                 console.log(str.getStr('Conexion exitosa a la BD'));
//                 this.getAllUsuarios();
//             }
//         });
//     }

//     close() {
//         this.db.close((err) => {
//             if (err) {
//                 console.error('Error al cerrar la base de datos:', err.message);
//             } else {
//                 console.log('Conexión de la base de datos Seguridad cerrada');
//             }
//         });
//     }

//     crearTablas() {
//         const queryUser = 'CREATE TABLE IF NOT EXISTS usuario(id integer NOT NULL PRIMARY KEY AUTOINCREMENT,nombre text NOT NULL,cuenta text NOT NULL,clave text NOT NULL,email text,rol text,estampa timestamp)';
//         const queryPerfil = 'CREATE TABLE IF NOT EXISTS  perfil(id integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,nombre text NOT NULL,crud text NOT NULL)';
//         const queryAcceso = 'CREATE TABLE IF NOT EXISTS acceso(id integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,fecha timestamp,usuario integer,accion text)';
//         this.db.run(queryUser);
// //        console.log('Tabla usuario creada o actualizada con exito');
//         this.db.run(queryPerfil);
// //        console.log('Tabla perfil creada o actualizada con exito');
//         this.db.run(queryAcceso);
// //        console.log('Tabla Acceso creada o actualizada con exito');
//     }



//     getAllUsuarios(callback) {
//         const query = 'SELECT * FROM usuario';
//         this.db.all(query, [], (err, rows) => {
//             if (typeof callback === 'function') {
//                 callback(err, rows);
//             }
//         });
//     }


//     // FunciÃ³n para agregar un nuevo usuario
//     addUsuario(usuario) {
//         const query = 'INSERT INTO usuario (nombre, cuenta, clave, email, rol, estampa) VALUES (?, ?, ?, ?, ? ,?)';
//         const params = [usuario.nombre, usuario.cuenta, usuario.clave, usuario.email, usuario.rol, usuario.estampa];
//         this.db.serialize(() => {
//             this.db.run(query, params, function (err) {
//                 if (err) console.log(err.message);
//                 else console.log("Nuevo usuario creado con exito");
//             });
//         });

//     }

//     // FunciÃ³n para actualizar un usuario existente
//     updateUsuario(id, usuario) {
//         const query = 'UPDATE usuario SET nombre = ?, cuenta = ?, clave = ?, email = ? , rol = ? , estampa = ? WHERE id = ?';
//         const params = [usuario.nombre, usuario.cuenta, usuario.clave, usuario.email, usuario.rol, new Date(), id];
//         this.db.run(query, params,  function (err) {
//             if (err) console.log(err.message);
//             else console.log("Usuario actualizado con exito");
//         });
//     }

//     // FunciÃ³n para eliminar un usuario por su ID
//     deleteUsuario(id) {
//         const query = 'DELETE FROM usuario WHERE id = ?';
//         this.db.run(query, id, function (err) {
//             if (err) console.log(err.message);
//             else console.log("Usuario eliminado con exito");
//         });
//     }
// }

// module.exports = Database;