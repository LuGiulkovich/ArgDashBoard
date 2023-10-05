import React from 'react'
import nublado from '../iconos/partly-cloudy-day.svg';
import celsius from '../iconos/thermometer-celsius.svg';

export const HoyDia = ({siHoyTemperatura, siDdMmFfHh}) => {

    const datosDeHoy = siDdMmFfHh.split("T");
    let nombreMes = '';
    let fechaDeHoy = '';
    const separarDatos = () => {
        console.log(datosDeHoy);
        let dMA = datosDeHoy[0].split("-");
        console.log(dMA);

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
        console.log(nombreMes);
        console.log(fechaDeHoy);
    }
    separarDatos();

    return (
        <div className='HoyDia Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <img src={nublado} alt='Nublado' width={"200px"} className=''/>
            <div className='HoyDia-Datos Grid'>
                <p className='Letra-size'>Nublado</p>
                <div className='Flex Around A-Center'>
                    <p className='Letra-size Letra-t3'>{siHoyTemperatura}</p>
                    <img src={celsius} alt='Celsius'  width={'100px'}/>
                </div>
                <p className='Letra-size'>{fechaDeHoy}</p>
            </div>
            
        </div>
    )
}
