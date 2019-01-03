import React, { Component } from 'react';
import Historias from './Historias';
import Historias2 from './Historias2';
import TablaDeCursos from './TablaDeCursos';
import Calendario from './Calendario';
import TablaDeFechas from './TablaDeFechas';
import GridDeFechas from './GridDeFechas';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="">
                <Historias2 />
                {/* 
                <TablaDeCursos/>
                <Calendario />
                <TablaDeFechas /> 
                */}

                {/* <GridDeFechas /> */}
            </div>
        );
    }
}

export default App;