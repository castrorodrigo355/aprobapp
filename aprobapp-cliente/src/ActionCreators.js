import axios from "axios"

let idMiMateria = "";

const obtenerMaterias = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/materias")
            .then(response => dispatch({
                type: "GET_MATERIAS",
                materias : response.data
            })
    )}
}

const obtenerMateria = idMateria => {
    idMiMateria = idMateria
    return (dispatch) => {
        axios.get(`http://localhost:3000/materias/${idMateria}`)
            .then(response => dispatch({
                type: "GET_CURSOS",
                cursosMateria : response.data.cursos
            })
    )}
}

const obtenerFechas = idCurso => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/materias/${idMiMateria}/cursos/${idCurso}`)
            .then(response => dispatch({
                type: "GET_FECHAS",
                clasesCurso : response.data.clases
            })
    )}
}

export {obtenerMaterias, obtenerMateria, obtenerFechas}