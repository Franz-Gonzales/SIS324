const express = require("express");
const app = express();
const router = require('./router');

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(5000, () => {
  console.log("Servidor escuchando en https://localhost:5000");
});

// app.get("/", (req, res) => {
//   res.send("Hola mundo \n LAB-10 SIS324 \n Gonzales Suyo Franz Reinaldo  GL-1");
// });
