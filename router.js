const express = require("express");
const router = express.Router();

// const ControlUsuario = require("./controllers/controlUsuario.js");
// const Usuario = require("./models/usuario.js");
// const ctrlUsuario = new ControlUsuario();

const Database = require('./Database/db');
const db = new Database();

router.get('/', (req, res) =>{
    // db.db.all("SELECT * FROM usuario", [], (err, rows) =>{
        
    db.getAllUsuarios((err, rows) =>{
        if(err){
            console.error(err.message);
            res.status(500).send("Error al recuperar los datos");
        }else{
            res.render("index", { lista: rows });
        }
    });
});








// router.get('/', (req, res) => {
//     ctrlUsuario.getAllUsuarios();
//     let results = ctrlUsuario.usuarios;
//     res.render("index", { lista: results });
// });

// router.get('/usuarios', (req, res) => {
//     ctrlUsuario.getAllUsuarios();
//     let results = ctrlUsuario.usuarios;
//     res.render("index", { lista: results });
// });

// router.get('/usuarios/edit/:id', (req, res) => {
//     const id = req.params.id;
//     const usuario = ctrlUsuario.getById(id);
//     res.render("edit", { user: usuario });

// });

// router.post('/usuarios/save', (req, res) => {
//     const id = req.body.id;
//     const nombre = req.body.nombre;
//     const cuenta = req.body.cuenta;
//     const clave = req.body.clave;
//     const email = req.body.email;
//     const rol = req.body.rol;
//     const estampa = new Date();
//     let usuario = new Usuario(id, nombre, cuenta, clave, email, rol, estampa);
//     if (id == undefined || id == 0 || id=="0") {
//         ctrlUsuario.adicionar(usuario);
//     }
//     else ctrlUsuario.actualizar(id, usuario);
//     let results = ctrlUsuario.getAllUsuarios();
//     res.render("index", { lista: results });

// });

// router.get('/usuarios/create', (req, res) => {
//     res.render("create");

// });

// router.get('/usuarios/delete/:id', (req, res) => {
//     const id = req.params.id;
//     ctrlUsuario.eliminar(id);
//     let results = ctrlUsuario.getAllUsuarios();
//     res.render("index", { lista: results });

// });


module.exports = router;