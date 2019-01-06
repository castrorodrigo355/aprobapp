import React, { Component } from 'react';
import { obtenerFechas } from "../redux_config/ActionCreators"
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group";
import './estilos_cursos.css';

class TablaDeCursos2 extends Component {

    render() {
        const cantCursos = this.props.cursosMateria.length;
        return (
            <div className="container tipografia" 
                // style={{marginBottom:"-22px"}}
                >
                {
                    !(cantCursos === 0) ?
                    <CSSTransition in={true} appear={true} timeout={5000} classNames="fade">
                        <table className="table table-sm" style={{marginBottom:0}}>
                            {/* <thead>
                                <tr className="alert alert-danger">
                                <th scope="col">Inicio</th>
                                <th scope="col">Final</th>
                                <th scope="col">Fechas</th>
                                </tr>
                            </thead> */}
                            {
                                this.props.cursosMateria.map((curso, i) => {
                                return(
                                    <tbody className="alert" key={i}>
                                        <tr style={{color:"white"}}>
                                            <td>Inicio: {curso.inicio}</td>
                                            <td>Final: {curso.fin}</td>
                                            <td><button type="submit" onClick={() => this.props.obtenerFechas(curso._id)} className="badge badge-pill badge-info">Clases</button></td>
                                        </tr>
                                    </tbody>
                                )          
                                })
                            }
                        </table>
                    </CSSTransition>
                    
                    :
                    <div>
                    {""}
                    </div>
                    // <CSSTransition in={true} appear={true} timeout={5000} classNames="fade">
                    //     <div>
                    //         no hay cursos
                    //     </div>
                    // </CSSTransition>
                }
                
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

export default connect(mapStateToProps, mapDispatchToProps)(TablaDeCursos2);