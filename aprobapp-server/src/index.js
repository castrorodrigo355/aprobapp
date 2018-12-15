const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// const routerLogin = require('./routes/login');
// app.use('/login', routerLogin);

const routerMaterias = require("./routes/materias");
// const authValidator = require('./middlewares/authValidator');
// app.use("/usuarios", authValidator, routerUsuarios);
app.use("/materias", routerMaterias);

app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});

app.listen(3000, () => {
    console.log("Servidor funcionando");
});