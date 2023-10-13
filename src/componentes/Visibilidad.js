import React from 'react'

export const Visibilidad = ({ siClimaDatos }) => {

  let siVisibilidad = siClimaDatos["hourly"]["visibility"][0];
  let siUniVisibilidad = siClimaDatos["hourly_units"]["visibility"];
  let estadoVisibilidad;

  const rangoVisibilidad = ["Sin Visibilidad", "Muuy poca", "Escasa", "Moderada", "Buena", "Muy Buena", "Excelente"];

  if (siVisibilidad < 50) {
    estadoVisibilidad = rangoVisibilidad[0];
  } else if (siVisibilidad > 50 && siVisibilidad <= 500) {
    estadoVisibilidad = rangoVisibilidad[1];
  } else if (siVisibilidad > 500 && siVisibilidad <= 4000) {
    estadoVisibilidad = rangoVisibilidad[2];
  } else if (siVisibilidad > 4000 && siVisibilidad <= 10000) {
    estadoVisibilidad = rangoVisibilidad[3];
  } else if (siVisibilidad > 10000 && siVisibilidad <= 20000) {
    estadoVisibilidad = rangoVisibilidad[4];
  } else if (siVisibilidad > 20000 && siVisibilidad <= 50000) {
    estadoVisibilidad = rangoVisibilidad[5];
  } else if (siVisibilidad > 50000) {
    estadoVisibilidad = rangoVisibilidad[6];
  }

  return (
    <div className='Back-fff Radius-10'>
        <p className='Letra-gris'>Visibilidad</p>
        <h1 className='Letra-35'>{siVisibilidad}<span className='Letra-t2'>{siUniVisibilidad}</span></h1>
        <p className='Letra-35'>{estadoVisibilidad}</p>
    </div>
  )
}
