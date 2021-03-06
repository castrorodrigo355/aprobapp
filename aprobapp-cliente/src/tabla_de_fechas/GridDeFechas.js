import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux"
import '../App.css';

class GridDeFechas extends Component {

    render() {
        return (
            <div className="Menu" style={{height:"85px"}}>
                {
                this.props.clasesCurso.map((unaClase, i) => {
                    return(
                        <CSSTransition key={i} in={true} appear={true} timeout={5000} classNames="fade">
                        <div className="recipe card_container border badge-info" 
                            style={{marginBottom:"15px", paddingTop:"8px", marginRight:"12px", marginLeft:"8px", height:"80px", width:"80px"}}>
                            {/* <span className="bg rounded-circle"></span> */}
                            <span className="info rounded-circle"><h6>{unaClase.fecha}</h6></span>
                            <span className="info rounded-circle"><h6 style={{fontSize:"0.8rem"}}>{unaClase.contenido}</h6></span>
                            <span className="info rounded-circle"><h6>{unaClase.horario}</h6></span>
                        </div>
                        </CSSTransition>
                    )          
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    function funcionRodrigo({fecha, contenido, horario}){
        const nuevaClase = {}
        const unaFecha = new Date(fecha)
        nuevaClase.fecha = unaFecha.getDate()+"/"+(unaFecha.getMonth() + 1)
                                                        // +"/"+unaFecha.getFullYear()
        nuevaClase.contenido = contenido
        nuevaClase.horario = horario
        return nuevaClase
    }
    return {
        clasesCurso : state.clasesCurso.map(unaClase => funcionRodrigo(unaClase))
    }
}

export default connect(mapStateToProps)(GridDeFechas);