import React from 'react'
import { GaugeChart } from './EjemploChart/GaugeChart';

export const UvIndex = ({ siClimaDatos }) => {

  let siUvIndexMax = siClimaDatos["daily"]["uv_index_max"];
  let estadoUv;

  const rangosUv = ["Bajo", "Moderado", "Alto", "Muy Alto", "Extremo"];

  if (siUvIndexMax <= 2) {
    estadoUv = rangosUv[0];
  } else if (siUvIndexMax > 2 && siUvIndexMax <= 5) {
    estadoUv = rangosUv[1];
  } else if (siUvIndexMax > 5 && siUvIndexMax <= 7) {
    estadoUv = rangosUv[3];
  } else if (siUvIndexMax > 7 && siUvIndexMax <=10) {
    estadoUv = rangosUv[4];
  } else if (siUvIndexMax > 10) {
    estadoUv = rangosUv[5];
  }

  return (
    <div className='uVIndex Back-fff Radius-10'>
        <p className='Letra-gris'>UV INDEX</p>
        <h1 className='Letra-35'>{siUvIndexMax}</h1>
        <div className='UvIndex-Gauge TA-Center'>
          <GaugeChart siUvIndexMax={siUvIndexMax}/>
        </div>
        <p className='Letra-35'>{estadoUv}</p>
    </div>
  )
}
