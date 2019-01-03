import React, { Component } from 'react';
import { obtenerMaterias, obtenerCursos } from "./ActionCreators"
import { connect } from "react-redux"
import './App2.css';

class Historias extends Component {

    componentWillMount(){
        this.props.obtenerMaterias();
    }

    render() {
    //    const urlEpyca = "http://torneos9dearea.com/wp-content/uploads/2018/03/EPYCA-200PX.png";
    //    const whatsapp = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA8QEBIVFRAVEBUWFRcWFRAVFhUYFhUWFhYVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0iHyUtLS0tLS0tLSstKy0tLTctLS0tKy0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tKy0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBwQFBgj/xABDEAABAwIBCAYIAwUIAwAAAAABAAIDBBESBQYHITFBUWETInGBobEUMkJSYpHB0SNDcjOCkqLwFSRTY2ST0uE0RML/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/8QAKREAAgIBBAECBgMBAAAAAAAAAAECEQMEEiExQSJRBRMUQnGhsdHhI//aAAwDAQACEQMRAD8AvFCEIAEIQgAQhCABCEIAEIUFZWxQtxyyMY3i5waPFAm0uWToXI1+kKkjuI8cp+EFrfm77LQVekiZ1+iiY0cXEuPy1KbyxXk5p63DH7r/AByWahU9NnvXO/NDf0saPO6xTnRWnbUyfyjyCx9RE538TxrpP9f2XWhUq3OesH/syfy/ZZUGeda387F+prPoAl9RH2EvimPyn+v7LgQqzpNIdQ39pHG/su37re0OkCmfYStfGeNsY8NfgtrNB+S8Nfgl91fk69CxaHKMM4xQyMePhIJHaNo71lKt2daaatAhCEDBCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAFgZXyzBSMxzyBo3Da53JrRrK5LO7SEyAuhpLSSjU5+2Nh4D3neHkqvra6Sd5kmeXvO0k37hwHJSnlS4Rw59bGHEOX+jucuaSJZLtpW9G33nWLzztsb4rjKqrkldjle57uLiSe6+xY8MbnmzQSeS21LkbfI7uH1K525S7PMnPJmfqd/wa0FZMVHI7Yw+Q+ZW+gp2M9VoHn81PiS2CWD3ZpWZIlO3CO0/YKVuRnb3j5FbYOShyexD+TE1X9jO98fIpjskSDYWnvP1C3OJLiS2ITwxOfkopW7WHusfJQXttXUYkyWJrvWaCk4GHp14Zz0MzmODmOLXDYWkgjvC6vI2fc8VmzDpWcdQeO/YVpqjJIOthseB2fNayaJzDZwt/XFJOUOjEZZcLuLounI2XoKsXhf1t7DqeO0fUals1QcE7mOD2OLXA3BBsR3rvs2s+7lsVZq3CUbP3xu7R/wBrohnT4kerpviMZenJw/fx/h3yEjHAgEG4OwjYUq6D0wQhCABCEIAEIQgAQhCABCEFADZHhoLnEAAXJOoADeVUmfOfrpy6npHFsGx0g1Ok4hvBviVHpIz1M7nUlM78BptI4fmOHsg+4PFcBiUMk/CPN1Wpb9ECYOWfk+gdLrOpnHj2KLJdH0hu71B4nguiaQAANQU1E44475ZJTxNYLNFh59pU2JY4clDlorRkYkuJQYkuJIRPiShygxJQ5AifElxKDElxJCJ8SUOUGJLiQInxJJGhws4XCiDk7EkI1Vdk8su5utviPuFggro8S1GUqTD12+rvHD/pTlE58mKuUbzNPO59IRHJd9OTs9pnNvLkrVpqhsrGyRuDmOFwRsIXn8FdPmZnQ6jkEchvTOPWHuE+236hVxZa4fR1aPWOD2T6/j/C3kJscgcA5pBaRcEbCDvTl1nuAhCEACEIQAIQhAAq60rZ2mBnoUDrTSD8Vw2sYfZHBzvAX46uxzmy0yhpZal/sjqje551NaO0/VecK6ufPLJNK7FI9xc48zuHJTnKuDl1WXatq7Y0FSQML3Bo2krHutrkNmtz+God+3+uajR5qjbN5AwMaGjYApMSgxJcS0WonD04OWNiS40CMkOShyx8aloYJZ3YII3SO34RqHa7YEUCi30ShyXEt/RZh1T7GWSOIcBd7vstrFo6j9uplP6Q1v3T+Wyq002cZiShy7V2juD2aicHtYfosKp0fSj9jUh3KRlvEI+WwelmcwHJcSnyjkWrprmWElg9uPrt7wNYWvinDhcG6y4tdkJY5R7RlYkuJQYkocsmDIxIdYgg7CocSXEkI0tVFgcW7t3Yog5bDK7bta7gbdx/rxWrDlNo5Jxplh6N85C13oczuqf2JO472Hkdo7+VrJXnaOQtILTYg3BG0EbCFdmZuXBW0zXn9q3qSD4gNvYRrXThnfpZ62g1Fr5cvHRvUIQrnpAhCEACELCy1lFtLTz1D/Viic887C4A5k2HegCodM2X+lqWUbD1Idb+cjhv7GnxVegptRVOmkklkN3veXuPNxue5JdQfLPJyS3SbJLreZH1R9rj9voufut3kl/4fY4/f6pIzFcmzxJcSgxpcaZQnxoL9gAJJNgBrJJ2ADeVAZO87gNpPAKz8ys1hTNbUTi9S4agdfRA7h8XEpqNm8eJzZr83MxC/DLW3ttEINv43DyC7yGOOCOzGsjjaNwa1oHkFps5c5oqFl39aUjqRg6zzPAc1U2Xc46isdeV5wX1RtuGDu3nmVThHXccfCLRynn7Rw3DXmVw3Ri4/iOpaGfSj/h02r4n2PgCq5awncpBTniluJPOzvWaUX310zbcpHf8VtaDSVTPIEsb4+epw8Naq70bmmugcOaW4Szv3L+ydlSGobigka8b7HWO0bQtLl/M+CpvJGOhn99gsHH427D27VTdNVPheHxucx42FpIIVj5p5/CQthrCGv2Nk2Nd+seyeezsWrT7KrJGfEjmMoUktLJ0NQ3C72XD1Xji0/RRhytrLGTIquIxTNuDsO9p3OadxVTZToZKSZ0E2s7WO3PbuI58QpzhXKOTPg2croMSXEoA9KHKRyhXG8b+zy1rShy2lbJ+G/s89S0wcsyI5FyTBy6fR9lr0ara1xtHLZjuF79Q/PV3rlA5KHJJ07MQk4SUl4PSSFp80cqelUcExPXw4X/rb1XfO1+9bhdqdqz6OMlJJryCEITNAq603ZT6OgZADrnlF/0x9c/zBvyViqjdONdjroYd0cF+95P/ABWZdEszqDK8YNSddKAkIUjzAutjkib1m94+v0WtToZC1wcNyBo6TEjEsdktwCNhT2NL3NY0Xc5wa0cybBModxo4yIJZDVyDqRutGDsL97u7zXa5zZeZRQOldredUbfed9hvUuSKJtPBFAzYxgHafaPebnvVSZ65aNXVvwm8UZLI+Bsdbu8+FlTpHa/+cKNZWVklRI6WVxdI43JPkOAHBEbdYABLtwAJPcFCHWCtvMnITaWBsjh+PI0Ocd4B1hg4LKVnPCLyMq9ziDZwc0/ECPNKHq08+cm+k0cmEXkj/EZxu31mjtbfvsqkbJcXSlGjOXHsZk40oesbGnB6yRonfZ21Yk0VuYUoelxoToabR3ejvOouw0c7tdrQuO8D8sns2Lpc7siispy1v7ZnWiPxD2b8DsVLPJY4OYSCCCCNoI1ghXZm1lcVdNFN7RFnjg8anffvVU7O3FJTW1lTxS3GvUdhB1EEbQQpMS2ee9B0Fa5zRZkwxj9Q9f795Wk6RRkqZwZIbZNDMpzdUN4nyWuDklTPjcTu3KMOU2csuWTBycHKEOShyVGaLR0PZQ/8mnJ3iRvf1XeTfkrKVG6Nq3o8owDdIHM+YuPJXkunE/SexopXir2BCEKh1gvOGk2o6TK1Zwa9jB3MbfxJXo9eYc7n4spVx/1Ug+TiPosT6ObVP0o1xCaQpCE0hTPOsYQmp5CQhA0yejqcOo+qfBdfmLTdLXw31hgc/wCQ1ea4chdzokefSp77GwC3K7rLUey+HmaRZmc1f0FJUSA9YRkN7Xah5+CpGMq0dJE1qEgb5WDxVWrUi+ofNErXi7b7MQv2X1q/cfDZuXnt51K38yssippWXP4kYDHjsGo94REenfaOlLuOxUdlYMbUVDYjeISuw9l9duV7qz88+nNFN6OSH6sVvWLPbDedvAFU5G5Eh6h9IysaXGsfElxLByGQHpwesYPS40gonebiy7XRXXkGogPAPHk76LhA9dDo+lw5Qb8UTx5H6LUeymF1JHW6TIL00Uu+OYfJwsfIKsKyrv1W7N/2Vp6RXXyZV8msI/3Gf9qmWuRk7DVr1GSHJ4csYOTg5So4nEyA5ODlAHJwclRmjbZv1HR1dK/hPH8i4A+BK9HLzBTyWew8HNPyIK9Ox7B2BVxeT0ND1JDkIQrHeC8wZ0stlKtH+rlPzeT9V6fXm3SHD0eV6wbjM1w/eY0+ZKxPo5dUvSjTkJhClITSFI8xMjITSFIQmkJmkyNdhoqltWTN96DyddciQtvmVW9BlGncTZryYz+/qHjZOPZfA6miwtJjT6A9zdrZGHuvrVWMq/eV3ZwUHpFLUQ73xuA/Vtb4gKhW7Ne3YVqZfUqpJmyDwdhWyzby26inbINbDqkb7zfuNoXNpTK7ikmRjOmeiKSpZKxskbg5jhcHiFXmemaTo3OqKZt4zrewbWHeWje3yXPZnZ5von4JBipnHrAXuw+8z6jergoq6OZjZInB7HDUQdS3wztTjljRRYcszJWT5amQRQtu+19tgAN5O5WTl3M2nqSXtvFKfaZbCT8TNh7rFZubOQWUMRa04pHG73kWLuAA3NHBLaSWB3z0VblTJU9KbTxlo97a09jhqWCZANpV6zMDwWuALTtBAIKqjSXkGCldDJACwyOdiZe7dQvdoOzs2IcaFkw7VaObfWgbNfkug0bYpMoBx2MheeWstA8yuNurK0R0BDaipI9YiNv7uskd5WYrknhVzR0OkWXDk2p+LA0f7jT5AqnGuVl6W63DTQw73y4j2MH3KrAFE+zWp5kTBycHKAOTg5Yo5aMgOTg5Y4cnByVGXEy4dZaOLgPmbL1HHsHYF5iyFH0lTSs96oiHzeL+C9PAKmPydmiVbmKhCFU7gVDaa6Po8otktqlgae9pIP0V8qsNOuTcVNTVIGuOXA7seNXiPFZl0Rzq4MqgawDySEJKQ3aOWpSEKB4z4dERCYQpSE0hM0mREKGckFrmmxBuDwI1g/NZBCZIy4ITNxdMvDNvKoq6WGcbXNAeODxqcPn4EKsNIORPRap0rR+DOS4cGvOt7e86+9dLojgeKed5J6N0tmjddo6xHzCXSzXhsEMGrFJJi5hrN47yFV8o9LJ68VsrJIQnkJpCkcBE9q2GQ8v1FE7FA+wPrMOtju1v1FisMhMc1OzcZUWpkbSTTyWbUNML+I6zD37R3hdfRZQhmAMUrHg+64HwXnktQxxGwkHkSFtSOiOofnk9A5TyxBTNLppWtA3XBceQaNapzPLOI184eBhiYC2MHbY6y53M2GrkFoXOJ1kknnrQ0bANZOoAayeQCTlZnJlcuCWkpnzSMijF3vcGtHM/RX5kLJjaWnip268DbE+8463O7zdcxo+zS9Gb6TOP7w5vVafy2n/6PgszP/OMUlOY4z/eJQWtttaDqc/7c1pKuS2OOyO5leZ/5X9KrX4TeOL8NvA2PWI7/Jc4CmoWDlk9ztkmJKHKJLdIzRMHJQ5Qhyc0oE0djo0pOmynSDaGOLz2NafqQvRKpvQZk7FNVVJGpjGxt7Xaz4DxVyLcFwdumjUPyCEIWzoBajO3JAraKppt74jg5Pb1mH+IBbdCBNWqPKNES1zmOFjrBB2gjaD4/JZpC6DSzkL0PKBlYLRT/iN4B9+uPnr71oI3YgCN655KmeLng4yIyEwhTEJpCRJMhIUUxsDbbu7VkELZZp5P9IrqdhF2sPSu7Gax42TXJXGt0ki1c2snei0lPB7TYxi5vd1n/wAxKqnPqtdV5RkZGHPEZ6JrWguJLfXs0fFcdwV0qCko44gRFG1gJucLQLniSNp5lXas9eePclEqPJuY9bPYuYIWnfIdf8I+tkzL2ZlVSXcB00VtbmA3b+pm23NWblTOmjpriSdmIey043dlm7O9ZOSMtQVbcUErXatYvZzf1N2hZ2ol8jH15KFa4HYUEK9MqZtUlSSZoGFx9oDC7vc3b3rQT6NaQ+o+Vn7wd5hLYyT00l0VQUhVps0ZU99c0pH7oW1ocxaGI36LpD/mOLvDYjawWnmVJkjI89W7DTxl2uxdsY39Ttg7NqtLNPMiKjwyy2kqNxt1WfoHHmuoJjhZ7McbR8LGtHkFxOcmkWKMOjpLSybMZv0Y7N7lqkiyxwx8s6LObOOKhixPN5COowHW4/Qc1SWVMoyVMr5pnYnuPcBua0bgEytrJJ5HSyvL5HHW4+Q4DkFCst2RyZHMRIUqRIkCEJEDBPZxTF02YWQfTq6CEi8YOOXhgbrIPabDvQKr4Rdmi7I3omTYA4WklvM/jd9sIPYwMHaCutSNFgANgSqqPSiqVAhCEDBCEIA5rSDm2Mo0UkTQOmZ14T8bfZvwcLjvB3LzxRPLHGN4INyLHUWuGogjcvVipfTHmiYn/wBoQN/DeQJwB6jt0nYdh524rE42cmqxbo2cUQmEJlHUYxY+sNvPmpiFA8hpp0yEhb/MfLdLRCpnneelc4MaxrS52FovfgLk8dxWkIWolic57uqdv9a1uLo6NPPbKzvMp6T3m4poQ34pDc/wj7rkMqZxVVTcTTvLT7IOFnZhbt77rFZQnebdimbTNG6/am5F56i/JgNYTsCVjnMcHNJa8HUQSCOwjWFscKY9gO1KyayG1yfn3XQ2HSiRvCRocf4hY/O63cOlGUevTsPMOcPCy4h1ONyYafmtbiyzv3O9dpTfupm35vP2WurdJFY+4jEcY5AuI7CfsuR6Hml6JG5jeeT8k2Ucpz1JxTyvkO7EdQ7G7B3BYoapcASEJE3KxlkieU1ACJEpSIGIkTkgF0wHMG9egdEmbBo6TppW2qKiziCNbGewzkdZJ7eSrvRTmia2o6eVv91hcCb7JJNoYOIG093FX+AtRXk6dPD7mCEIWzqBCEIAEIQgAUVTTtlY+ORocxzS1wOsEHUQVKhAHnTP3NGTJdRiZc0zyTE/hxjfzHiO9aumnDxcbd4XpPK2TYqqF8E7A+N4sQfAg7iOK8/Z65nT5KlxC76Zx/DkA2fBJwd4FSnA83U6byjAITCE2mqg/Vsdw+ymIUjzuU6ZAQmEKchMITNJkJCYQpiEwhBtMiITSFIQmkJmkyIhNIUpCaQmaTIymkJ5CQhBpMjKQp5CaQmaGFInFJZAxLLf5nZsS5RqGwx6mDXLJuY36uO4IzSzWnyjMI4RZgP4khBwsH1dwC9EZt5AhoIGwQNsBrc4+s929zjxWkrL4sTny+jJyRkyKkhjp4W4Y2NsBx4k8STrWYhCodwIQhAAhCEACEIQAIQhAAoaykZNG6KVgfG4Wc1wuCFMhAFH58aMJaYunobyQbTHtkj7Pfb4jntXCwV5HVkGzVfeO0L1UuOzu0dUlfeQDoag/mMAs4/5jNju3UeaxKFnHm0ql0UmCCLg3CQhZ+cGZFfk8lzmF8Q/Mju5tuLhtb3rRxZQ94d4+yk4tHnTwSizKITCE5kzXbClISJ9EJCaQpiEwhBpMhITSFKQmEJm0yMhNIUhCY4hM0hhCaUOet3m9mlWV5HQRHB/iO6sY/eO3uTKRi30aEruMydHFRXFss14aW97kdeQcGNOy/vH5FWHmjoupqQtlqD6ROLEYh+Ew8Ws3nme4Bd6AtqPudePT+ZGHkjJUNJE2GnYGRt3DfzJ3nms1CFs6+gQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAEIXL5f0fZPrCXPh6OU/mRHo3X4kDquPaCupQihOKfZTOVtDUrbmlqGvG5sjcJ7MQuFy1dmJlOnvene4DfGWvHgb+C9HoWdqIy08GeVp4KmL9pFK39cT2+YWL6afh/rvXrItB2hRvpmHaxp7WgrOwl9HH3PKBrObf671PBBPL+zikf+iN7vIFep2UsbdjGjsa0KUNA2AI2AtIvc810OZOUp7YaWQA732YO8O1+C6nJWhypfY1M7IhvDAZHfPUFdiFraikdNBHG5C0Z5PpbOMZnkHtTHEL8mCzR8iea7FjQBYAAcBqCVC1ReMVHoEIQgYIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAH/2Q=="
       
        // UTN INGRESO
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGOcVmn-vRW68viTPaZWgUSDpeHkMe1QxAZPXYJFR1vIw_QDhyQ"

        // BIOFISICA
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDCYreEcCCaUbVxR1sKN_ceASxuumT8CkK3DHGXyUaexbS7-w_w"

        // ALGORITMOS
        // const imagen = "http://bp1.blogger.com/_ISF8DP9N9hg/R_MqQBEk_hI/AAAAAAAAANY/EAe5gMmXIeo/s400/ArrayBusLin.JPG"

        // ALGEBRA
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0YdktJUj-wMG1nJOxK61cPPB0XJezXhtAugrzQaJor25zQNN"

        // AM 1
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzPw3xUdgvnDPbCj-dnugLuPAkiIMh2d8GAdzXJa57Sj_kKUf"

        // FISICA 1
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ngS7Zh0nW71YJy3y3mpmH7pdC8aLG_SfihO0ct4Had0uFirH5g"
        
        // AM 2
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJnRrSkf7vR-7dPy8d419GTmUDuDCpa28rylGy8AZsgEgFyX2rw"
        
        // FISICA 2
        // const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_f12v4lO6XBNbKx0wRXCJctR8PPv2WzE9eDJNDuX7paISvFKz"

        return (
            <div className="Menu fondoHistorias">
                {
                    this.props.materias.map((materia, i) => {
                        return(
                            <div key={i} className="recipe" style={{marginRight:"12px", marginLeft:"8px"}}>
                                    <span className="bg rounded-circle" style={{backgroundImage:`url(${materia.url})`}}
                                            onClick={() => this.props.obtenerCursos(materia._id)}></span>
                                    <span className="info"><h6 style={{color:"white"}}>{materia.nombre}</h6></span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        materias : state.materias
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        obtenerMaterias : () => { 
            dispatch(obtenerMaterias())
        },
        obtenerCursos : (idMateria) => {
            dispatch(obtenerCursos(idMateria))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Historias);