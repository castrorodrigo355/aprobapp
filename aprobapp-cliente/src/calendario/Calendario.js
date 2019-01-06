import React, { Component } from 'react';
import {connect} from "react-redux";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

// const MONTHS = [
//     'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//   ];

// const WEEKDAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const birthdayStyle = `

.DayPicker {
    display: inline-block;
    font-size: 2.6vh;
}

.DayPicker-Day{
    color: aqua;
}

.DayPicker-wrapper {
    position: relative;
  
    flex-direction: row;
    padding-bottom: 0em;
  
    -webkit-user-select: none;
  
       -moz-user-select: none;
  
        -ms-user-select: none;
  
            user-select: none;
  }

.DayPicker-Weekday {
    display: table-cell;
    padding: 0;
    color: white;
    text-align: center;
    font-size: 2.4vh;
}

.DayPicker-Caption {
    display: table-caption;
    margin: 0px;
    margin-bottom: 0em;
    padding: 0px 0px -1px 0px;
    text-align: left;
    color: white
}

.DayPicker-Month {
    display: table;
    margin: 0 1em;
    margin-top: 0;
    border-spacing: 0;
    border-collapse: collapse;
  
    -webkit-user-select: none;
  
       -moz-user-select: none;
  
        -ms-user-select: none;
  
            user-select: none;
}

.DayPicker-NavButton--prev {
    margin-top: -12px;
    color:white
}

.DayPicker-NavButton--next {
    margin-top: -12px
}
`;

class Calendario extends Component {

    render() {

        const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

        const modifiers = {
            clasesCurso: this.props.clasesCurso,
            fechaActual: new Date()
        };
        
        const modifiersStyles = {
            clasesCurso: {
                color: 'white',
                backgroundColor: '#4AC1CF',
            },
            fechaActual: {
                color: 'white'
            }
        };
        return (
            <div className="" style={{marginTop:"0px"}}>
                <style>{birthdayStyle}</style>
                <DayPicker  firstDayOfWeek={1}
                            months={MONTHS}
                            weekdaysShort={WEEKDAYS_SHORT}
                            disabledDays={{ daysOfWeek: [0] }}
                            modifiers={modifiers}
                            modifiersStyles={modifiersStyles}
                            // selectedDays={this.props.clasesCurso}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clasesCurso : state.clasesCurso.map(unaClase => new Date(unaClase.fecha)), 
        // cursosMateria: state.cursosMateria
    }
}

export default connect(mapStateToProps)(Calendario);