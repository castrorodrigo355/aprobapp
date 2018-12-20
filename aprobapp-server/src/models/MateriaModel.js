const {Schema, mongoose} = require("../database/database")

var clase = new Schema({
            fecha: Date,
            contenido: String,
            horario: String});

var curso = new Schema({ 
            inicio: String,
            fin: String,
            clases: [clase] });

var materia = new Schema({  
            nombre: String,
            url: String,
            cursos: [curso]})
            
var Materia = mongoose.model("Materia", materia)

module.exports = Materia