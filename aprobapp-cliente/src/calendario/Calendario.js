import React, { Component } from 'react';
import {connect} from "react-redux";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

// const MONTHS = [
//     'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//   ];

// const WEEKDAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: silver;
    color: white;
}`;

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
        // const cantCursos = this.props.cursosMateria.length;
        return (
            <div className="" style={{marginTop:"5px"}}>
                
                <style>{birthdayStyle}</style>
                <DayPicker  firstDayOfWeek={1}
                            months={MONTHS}
                            weekdaysShort={WEEKDAYS_SHORT}
                            disabledDays={{ daysOfWeek: [0] }}
                            modifiers={modifiers}
                            modifiersStyles={modifiersStyles}
                            // selectedDays={this.props.clasesCurso}
                />
                
                

                {/* <div className="d-flex align-items-start flex-row bd-highlight border" style={{height: "5vh"}}>
                    
                    

                    <div className="float-left">AAAAA</div>
                    <div className="float-right">BBBBB</div>
                    <div className="mb-auto p-2 bd-highlight">AAAAA</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-start flex-column bd-highlight border" style={{height: "40vh"}}>
                    <div className="mb-auto p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-start flex-column bd-highlight border" style={{height: "5vh"}}>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="mt-auto p-2 bd-highlight">CCCCC</div>
                </div> */}

            </div>
            // <div className="border">
            //     <style>{birthdayStyle}</style>
            //     <DayPicker  firstDayOfWeek={1}
            //                 months={MONTHS}
            //                 weekdaysShort={WEEKDAYS_SHORT}
            //                 disabledDays={{ daysOfWeek: [0] }}
            //                 modifiers={modifiers}
            //                 modifiersStyles={modifiersStyles}
            //                 // selectedDays={this.props.clasesCurso}
            //     />
            // </div>
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