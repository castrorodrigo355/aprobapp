const express = require("express");
const Materia = require("../models/MateriaModel")
const router = express.Router();

// ***********************************************************************************
// ***********************************************************************************

// CREAR UN USUARIO
router.post("/", (req, res) => {
    let data = req.body;
    let materia = new Materia(data);
    materia.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE MATERIAS
router.get("/", (req, res) => {
    Materia.find({}).then(materias => res.json (materias));
})

// OBTENER UNA MATERIA MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Materia.findById(req.params.id)
        .then(materia => {
            if (materia){
                res.json(materia)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UNA MATERIA MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Materia.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UNA MATERIA MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    Materia.findByIdAndUpdate(req.params.id, {$set: {
                                        "nombre": req.body.nombre
                                                  }}, {new: true}, (err, doc) => {
        err ? res.json(err) : res.json(doc)
    })
})

// ***********************************************************************************
// ***********************************************************************************

// CREAR UN CURSO PARA UNA DETERMINADA MATERIA "id"
router.post("/:id/cursos", (req, res) => {
    let curso = {inicio: req.body.inicio, 
                   fin: req.body.fin};
    Materia.findOne({_id: req.params.id}, (err, materia) => {
        err ? res.json(err) : res.json(materia)
        materia.cursos.push(curso)
        materia.save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(503).json(err));
    })
})

// OBTENER LOS CURSOS DE UNA DETERMINADA MATERIA "ID"
router.get("/:id/cursos", (req, res) => {
    Materia.findById(req.params.id)
        .then( materia => res.json(materia.cursos))
        .catch( err => res.status(503).json(err));
})

// OBTENER EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.get("/:idMateria/cursos/:idCurso", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        curso = materia.cursos.find(curso => curso._id == req.params.idCurso);
        if(!curso){
            res.json({Message:"Imposible!!"});
        }else{
            res.json(curso);
        }
    })
})

// ELIMINAR EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.delete("/:idMateria/cursos/:idCurso", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        materia.cursos = materia.cursos.filter(curso => curso._id != req.params.idCurso);
        materia.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
    })
})

// EDITAR EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.put("/:idMateria/cursos/:idCurso", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        index = materia.cursos.findIndex(curso => curso._id == req.params.idCurso);
        materia.cursos[index].inicio = req.body.inicio;
        materia.cursos[index].fin = req.body.fin;
        materia.save()
            .then(result => res.status(201).json(materia.cursos))
            .catch(err => res.status(503).json(err));
    })
})

// ***********************************************************************************
// ***********************************************************************************

// CREAR UNA CLASE PARA EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.post("/:idMateria/cursos/:idCurso/clases", (req, res) => {
    let clase = {fecha: req.body.fecha, 
                 contenido: req.body.contenido,
                 horario: req.body.horario};
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) : 
        index = materia.cursos.findIndex(curso => curso._id == req.params.idCurso)
        materia.cursos[index].clases.push(clase)
        materia.save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(503).json(err));
    })
})

// OBTENER LAS CLASES PARA EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.get("/:idMateria/cursos/:idCurso/clases", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        index = materia.cursos.findIndex(curso => curso._id == req.params.idCurso);
        res.json(materia.cursos[index].clases)
        // .then(result => res.json(usuario))
        // .catch(err => res.status(503).json(err));
    })
})

// OBTENER LA CLASE "idClase" PARA EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.get("/:idMateria/cursos/:idCurso/clases/:idClase", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        index = materia.cursos.findIndex(curso => curso._id == req.params.idCurso);
        subindex = materia.cursos[index].clases.findIndex(clase => clase._id == req.params.idClase)
        res.json(materia.cursos[index].clases[subindex])
        // .then(result => res.json(usuario))
        // .catch(err => res.status(503).json(err));
    })
})

// ELIMINAR LA CLASE "idClase" PARA EL CURSO "idCurso" DE LA MATERIA "idMateria"
router.delete("/:idMateria/cursos/:idCurso/clases/:idClase", (req, res) => {
    Materia.findOne({_id: req.params.idMateria}, (err, materia) => {
        err ? res.json(err) :
        index = materia.cursos.findIndex(curso => curso._id == req.params.idCurso);
        miCurso = materia.cursos[index]
        misClases = miCurso.clases.filter(clase => clase._id != req.params.idClase);
        materia.cursos[index].clases = misClases
        materia.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
    })
})

module.exports = router;