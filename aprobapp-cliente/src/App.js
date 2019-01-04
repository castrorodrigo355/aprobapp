import React, { Component } from 'react';
import Historias from './historias/Historias';
import TablaDeCursos from './tabla_de_cursos/TablaDeCursos';
import Calendario from './calendario/Calendario';
// import TablaDeFechas from './tabla_de_fechas/TablaDeFechas';
import GridDeFechas from './tabla_de_fechas/GridDeFechas';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>

                {/* <MyCalendario /> */}
                
                <Historias />
                 
                <TablaDeCursos/>
                
                
                <Calendario />
                
                
                {/* <TablaDeFechas />  */}
                

                <GridDeFechas />
                
            </div>
        );
    }
}

export default App;