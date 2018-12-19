import React, { Component } from 'react';
import { obtenerFechas } from "./ActionCreators"
import { connect } from "react-redux"
import './App.css';

class TablaDeCursos extends Component {

    render() {
        return (
            <div>
                <table className="table table-sm letrablanca">
                    <thead>
                        <tr className="alert alert-danger">
                        <th scope="col">Inicio</th>
                        <th scope="col">Fin</th>
                        <th scope="col">Ver</th>
                        </tr>
                    </thead>
                        {
                            this.props.cursosMateria.map((curso, i) => {
                            return(
                                <tbody className="alert" key={i}>
                                    <tr style={{color:"white"}}>
                                        <td>{curso.inicio}</td>
                                        <td>{curso.fin}</td>
                                        <td><button type="submit" onClick={() => this.props.obtenerFechas(curso._id)} className="badge badge-pill badge-info">Ver Clases</button></td>
                                    </tr>
                                </tbody>
                            )          
                            })
                        }
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cursosMateria : state.cursosMateria
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        obtenerFechas : (idCurso) => { 
            dispatch(obtenerFechas(idCurso))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablaDeCursos);