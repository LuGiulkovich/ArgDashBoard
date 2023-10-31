import React from 'react'

export const EstadoViento = ({ siCalidadAire }) => {

    let estadoAire;
    let siUniAire = siCalidadAire["current_units"]["pm10"];
    let siAire = siCalidadAire["current"]["us_aqi"];

    const rangoAire = ["Bueno", "Moderado", "Insano"];

    if (siAire <= 50) {
        estadoAire = rangoAire[0];
    } else if (siAire > 50 && siAire <= 100) {
        estadoAire = rangoAire[1];
    } else if (siAire > 100) {
        estadoAire = rangoAire[2];
    }

  return (
    <div className='CalidadAire Back-fff Radius-10'>
        <p className='Letra-gris'>Calidad del Aire</p>
        <h1 className='Letra-35'>{siAire}{siUniAire}</h1>
        <p className='Letra-35'>{estadoAire}</p>
    </div>
  )
}
