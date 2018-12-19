import React, { Component } from 'react';
import Historias from './Historias';
import TablaDeCursos from './TablaDeCursos';
import Calendario from './Calendario';
import TablaDeFechas from './TablaDeFechas';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                {/* <span className="border redondear">selkfnlsefnekl</span> */}
                <Historias />
                <TablaDeCursos />
                <Calendario />
                <TablaDeFechas />
            </div>
        );
    }
}

export default App;