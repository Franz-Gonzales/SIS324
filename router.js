const express = require("express");
const router = express.Router();

const Database = require('./Database/db');

router.get('/', (req, res) =>{

    // res.render('index');

    //? PARA MOSTRAR USUARIOS
    var sql = "SELECT * FROM usuario";
    Database.query(sql, (error, results) => {

        if(error){
            throw error;
        }else{
            // res.send(results);  
            res.render('index', { listaUsuarios: results });
        }
    });
});


 //? RUTA PARA CREAR UN NUEVO USUARIO
router.get('/create', (req, res) =>{
    res.render('create');
});

//? RUTA PARA EDITAR REGISTROS
router.get('/update/:id', (req, res)=>{
    const id = req.params.id;
    Database.query('SELECT * FROM usuario WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('update', {usuario: results[0]});
        }
    });
});


//? RUTA PARA ELIMINAR UN REGISTRO
router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    Database.query('DELETE FROM usuario WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

const crud = require('./Controllers/controlUsuario');
router.post('/create', crud.create);
router.post('/update', crud.update);

module.exports = router;






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


// module.exports = router;