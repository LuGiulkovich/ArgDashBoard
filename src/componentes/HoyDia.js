import React from 'react'

export const HoyDia = ({ siClimaDatos, siClimaIconos }) => {
    /** Codigo para mostrar la fecha actual */
    let datos = siClimaDatos["current"]["time"];

    let datosDeHoy = datos.split("T");

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
            default:
                nombreMes = "Enero";
        }
        fechaDeHoy = nombreMes + " " + dMA[2] + ", " + dMA[0];
    }
    separarDatos();


    /** Codigo para mostrar el estado del clima actual */
    const codigoClima = siClimaDatos["current"]["weathercode"];

    let siComoEstaHoy = siClimaIconos[codigoClima]["name"];
    let siIconoHoy = siClimaIconos[codigoClima]["image_src"];

    return (
        <div className='Hoy-Dia Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <img src={siIconoHoy} alt='Nublado' width={"140vw"} className='Hoy-Dia-img'/>
            <div className='HoyDia-Datos Grid'>
                <h3>{siComoEstaHoy}</h3>
                <h3>{siClimaDatos["current"]["temperature_2m"]}{siClimaDatos["current_units"]["temperature_2m"]}</h3>
                <h4>{fechaDeHoy}</h4>
            </div>
            
        </div>
    )
}
