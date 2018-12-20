import React, { Component } from 'react';
import Historias from './Historias';
import TablaDeCursos from './TablaDeCursos';
import TablaDeCursos2 from './TablaDeCursos2';
import Calendario from './Calendario';
import TablaDeFechas from './TablaDeFechas';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Historias />
                <TablaDeCursos2 />
                <Calendario />
                <TablaDeFechas />
            </div>
        );
    }
}

export default App;