import React from 'react'

export const HoyDia = ({siHoyTemperatura, siDdMmFfHh, siUniHoy, siComoEstaHoy, siClimaIcono}) => {

    const datosDeHoy = siDdMmFfHh.split("T");
    let nombreMes = '';
    let fechaDeHoy = '';
    const separarDatos = () => {
        let dMA = datosDeHoy[0].split("-");

        switch (dMA[1]) {
            case '1':
                nombreMes = "Enero";
            break;
            case '2':
                nombreMes = "Febrero";
            break;
            case '3':
                nombreMes = "Marzo";
            break;
            case '4':
                nombreMes = "Abril";
            break;
            case '5':
                nombreMes = "Mayo";
            break;
            case '6':
                nombreMes = "Junio";
            break;
            case '7':
                nombreMes = "Julio";
            break;
            case '8':
                nombreMes = "Agosto";
            break;
            case '9':
                nombreMes = "Septiembre";
            break;
            case '10':
                nombreMes = "Octubre";
            break;
            case '11':
                nombreMes = "Noviembre";
            break;
            case '12':
                nombreMes = "Diciembre";
            break;
        }
        fechaDeHoy = nombreMes + " " + dMA[2] + ", " + dMA[0];
    }
    separarDatos();

    return (
        <div className='Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <img src={siClimaIcono} alt='Nublado' width={"140vw"}/>
            <div className='HoyDia-Datos Grid'>
                <h3>{siComoEstaHoy}</h3>
                <h3>{siHoyTemperatura}{siUniHoy}</h3>
                <h4>{fechaDeHoy}</h4>
            </div>
            
        </div>
    )
}
