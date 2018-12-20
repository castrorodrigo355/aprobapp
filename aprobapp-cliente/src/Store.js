import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const reducer = (state, action) => {
    if(action.type === "GET_MATERIAS"){
        return{
            ...state, materias : action.materias
        }
    } 
    else if(action.type === "GET_CURSOS"){
        return {
            state, clasesCurso : [],
            ...state, cursosMateria : action.cursosMateria
            
        }
        

    } else if(action.type === "GET_FECHAS"){
        return {
            ...state, clasesCurso : action.clasesCurso
        }
    }
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer, {materias: [], cursosMateria: [], clasesCurso: []}, applyMiddleware(logger, thunk))