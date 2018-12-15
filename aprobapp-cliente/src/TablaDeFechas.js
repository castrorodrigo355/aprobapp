import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';

class TablaDeFechas extends Component {

    render() {
        return (
            <div className="border">
                <table className="table table-sm table-hover letrablanca">
                    <thead>
                        <tr className="alert alert-danger">
                        <th scope="col">Fecha</th>
                        <th scope="col">Contenido</th>
                        <th scope="col">Horario</th>
                        </tr>
                    </thead>
                    {this.props.clasesCurso.map((unaClase, i) => {
                        return(
                            <tbody className="alert clickable-row'" key={i}>
                                <tr>
                                    <td>{unaClase.fecha}</td>
                                    <td>{unaClase.contenido}</td>
                                    <td>{unaClase.horario}</td>
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
    function funcionRodrigo({fecha, contenido, horario}){
        const nuevaClase = {}
        const unaFecha = new Date(fecha)
        nuevaClase.fecha = unaFecha.getDate()+"/"+(unaFecha.getMonth() + 1)+"/"+unaFecha.getFullYear()
        nuevaClase.contenido = contenido
        nuevaClase.horario = horario
        return nuevaClase
    }
    return {
        clasesCurso : state.clasesCurso.map(unaClase => funcionRodrigo(unaClase))
    }
}

export default connect(mapStateToProps)(TablaDeFechas);