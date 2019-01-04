import axios from "axios"

let idMateriaStore = "";
let url = "https://rodriclases.herokuapp.com/materias/";

const obtenerMaterias = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/materias")
        // axios.get(url)
            .then(response => dispatch({
                type: "GET_MATERIAS",
                materias : response.data
            })
    )}
}

const obtenerCursos = idMateria => {
    idMateriaStore = idMateria
    return (dispatch) => {
        axios.get(`http://localhost:3000/materias/${idMateriaStore}`)
        // axios.get(`${url}${idMateriaStore}`)
            .then(response => dispatch({
                type: "GET_CURSOS",
                cursosMateria : response.data.cursos
            })
    )}
}

const obtenerFechas = idCurso => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/materias/${idMateriaStore}/cursos/${idCurso}`)
        // axios.get(`${url}${idMateriaStore}/cursos/${idCurso}`)
            .then(response => dispatch({
                type: "GET_FECHAS",
                clasesCurso : response.data.clases
            })
    )}
}

export {obtenerMaterias, obtenerCursos, obtenerFechas}