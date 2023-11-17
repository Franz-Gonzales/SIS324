const Database = require('../Database/db');


exports.create = (req, res) =>{
    const nombre = req.body.nombre;
    const cuenta = req.body.cuenta;
    const clave = req.body.clave;
    const email = req.body.email;
    const rol = req.body.rol;
    // const estampa = new Date();
    const estampa = req.body.estampa;

    // console.log(nombre + ' - ' + cuenta);

    Database.query('INSERT INTO usuario SET ?', {
            nombre: nombre,
            cuenta: cuenta,
            clave: clave,
            email: email,
            rol: rol,
            estampa: estampa
        }, (error, results) => {
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
}



exports.update = (req, res) =>{

    const id = req.body.id;
    const nombre = req.body.nombre;
    const cuenta = req.body.cuenta;
    const clave = req.body.clave;
    const email = req.body.email;
    const rol = req.body.rol;
    const estampa = req.body.estampa;

    // var sql = "UPDATE usuario SET"
    Database.query("UPDATE usuario SET ? WHERE id = ?", [{
        nombre: nombre,
        cuenta: cuenta,
        clave: clave,
        email: email,
        rol: rol,
        estampa: estampa
      }, id], (error, results) =>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}