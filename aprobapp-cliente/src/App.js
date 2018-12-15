import React, { Component } from 'react';
import Historias from './Historias';
import TablaDeCursos from './TablaDeCursos';
import Calendario from './Calendario';
import TablaDeFechas from './TablaDeFechas';

class App extends Component {

    render() {
        return (
            <div>   
                <Historias />
                <TablaDeCursos />
                <Calendario />
                <TablaDeFechas />
            </div>
        );
    }
}

export default App;