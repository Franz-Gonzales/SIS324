const mongoose = require('mongoose');
async function connect(){
    await mongoose.connect('mongodb://localhost/usuarios',{
        useNewUrlParser: true
        // useUnifiedTopology: true
    });
    console.log("Conexion Existosa");
};

module.exports = {connect};