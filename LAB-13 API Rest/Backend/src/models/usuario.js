const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    avatar: String,
    email: String,
    password: String,
    rol: String
});

module.exports = model('User', userSchema);