const express = require("express");
const app = express();


// Motor de plantilla
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));  // para capturar los datos del formulario
app.use(express(express.json));

app.use('/', require('./router'));
app.use(express.static('Views'));  // para reconocer css
app.use(express.static('Utils')); 

app.listen(5000, () => {
  console.log("Servidor respondiendo en https://localhost:5000");
});

// app.get("/", (req, res) => {
//   res.send("Hola mundo \n LAB-10 SIS324 \n Gonzales Suyo Franz Reinaldo  GL-1");
// });
