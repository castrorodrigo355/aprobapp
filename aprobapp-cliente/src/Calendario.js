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
    background-color: orange;
    color: white;
}`;
  
const modifiers = {
    highlighted: new Date(),
};

class Calendario extends Component {

    render() {
        return (
            <div className="border">
                <DayPicker  firstDayOfWeek={1}
                            months={MONTHS}
                            weekdaysShort={WEEKDAYS_SHORT}
                            modifiers={modifiers}
                            selectedDays={this.props.clasesCurso}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clasesCurso : state.clasesCurso.map(unaClase => new Date(unaClase.fecha))
    }
}

export default connect(mapStateToProps)(Calendario);