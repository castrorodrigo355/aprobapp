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

                <Historias />
                 
                <TablaDeCursos/>
                
                
                <Calendario />
                
                
                {/* <TablaDeFechas />  */}
                

                <GridDeFechas />

                <a href="https://api.whatsapp.com/send?phone=5491159484443&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...%20" 
                        className="float border" 
                        target="_blank">
                        <i className="fa fa-whatsapp my-float"></i>
                </a>

                <a href="https://api.instagram.com/v1/users/self/follows?access_token=ACCESS-TOKEN"
                        className="float2 border" 
                        target="_blank">
                        <i className="fa fa-instagram my-float2"></i>
                </a>
                
                <a href="https://api.facebook.com/method/fql.query?query=fql&format=json&access_token=t"
                        className="float3 border" 
                        target="_blank">
                        <i className="fa fa-facebook my-float3"></i>
                </a>
                
                <a href="href=https://www.youtube.com/user/YouTubeDev"
                        className="float4 border" 
                        target="_blank">
                        <i className="fa fa-youtube my-float4"></i>
                </a>

                
            </div>
        );
    }
}

export default App;