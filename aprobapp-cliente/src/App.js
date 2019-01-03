import React, { Component } from 'react';
import Historias from './Historias';
import TablaDeCursos from './TablaDeCursos';
import Calendario from './Calendario';
import TablaDeFechas from './TablaDeFechas';
import GridDeFechas from './GridDeFechas';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Historias />
                {/* <TablaDeCursos/>
                <Calendario /> */}

                {/* <TablaDeFechas /> */}

                {/* <GridDeFechas /> */}
            </div>
        );
    }
}

export default App;