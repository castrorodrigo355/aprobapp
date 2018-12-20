import React, { Component } from 'react';
import {connect} from "react-redux"
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';

const MONTHS = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

const WEEKDAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: silver;
    color: white;
}`;
  
const modifiers = {
    highlighted: new Date(),
};

class Calendario extends Component {

    render() {
        const cantCursos = this.props.cursosMateria.length;
        return (
            <div>
                { !(cantCursos == 0) ?
                    <div>
                        <style>{birthdayStyle}</style>
                        <DayPicker  firstDayOfWeek={1}
                                    months={MONTHS}
                                    weekdaysShort={WEEKDAYS_SHORT}
                                    disabledDays={{ daysOfWeek: [0] }}
                                    modifiers={modifiers}
                                    selectedDays={this.props.clasesCurso}
                        />
                    </div>
                    :
                    <div>
                        {"NO HAY CURSOS"}
                    </div>
                }
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clasesCurso : state.clasesCurso.map(unaClase => new Date(unaClase.fecha)), 
        cursosMateria: state.cursosMateria
    }
}

export default connect(mapStateToProps)(Calendario);