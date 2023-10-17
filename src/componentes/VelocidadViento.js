import React from 'react'

export const VelocidadViento = ({ siClimaDatos }) => {

  let estadoViento;

  let siVelocidad = siClimaDatos["current"]["windspeed_10m"];
  let siUnidadVelViento = siClimaDatos["current_units"]["windspeed_10m"];

  let siDireccion = siClimaDatos["current"]["winddirection_10m"];
  let siUnidadDirViento = siClimaDatos["current_units"]["winddirection_10m"];


  const rangoViento = ["Tranquilo", "Suave", "Moderado", "Vivo", "Fuerte", "Muy Fuerte", "Masivo", "Huracanes"];

  if (siVelocidad >= 0 && siVelocidad <= 2) {
    estadoViento = rangoViento[0];
  } else if (siVelocidad > 2 && siVelocidad <= 12) {
    estadoViento = rangoViento[1];
  } else if (siVelocidad > 12 && siVelocidad <= 29) {
    estadoViento = rangoViento[2];
  } else if (siVelocidad > 29 && siVelocidad <= 39) {
    estadoViento = rangoViento[3];
  } else if (siVelocidad > 39 && siVelocidad <= 61) {
    estadoViento = rangoViento[4];
  } else if (siVelocidad > 61 && siVelocidad <= 87) {
    estadoViento = rangoViento[5];
  } else if (siVelocidad > 87 && siVelocidad <= 116) {
    estadoViento = rangoViento[6];
  } else if (siVelocidad > 116) {
    estadoViento = rangoViento[7];
  }

  let direccionViento;

  const direccionesViento = ["Norte", "Sur", "Este", "Oeste"];

  if ((siDireccion >= 0 && siDireccion <= 45) || (siDireccion >= 316 && siDireccion <= 360)) {
    direccionViento = direccionesViento[0];
  } else if (siDireccion >= 46 && siDireccion <= 135) {
    direccionViento = direccionesViento[2];
  } else if (siDireccion >= 136 && siDireccion <= 225) {
    direccionViento = direccionesViento[1];
  } else if (siDireccion >= 226 && siDireccion <= 315) {
    direccionViento = direccionesViento[3];
  }

  return (
    <div className='VelocidadViento Back-fff Radius-10 Grid'>
      <div>
        <p className='Letra-gris'>Velocidad del Viento</p>
        <h1 className='Letra-35'>{siVelocidad}<span className='Letra-t2'>{siUnidadVelViento}</span> {estadoViento}<span className='Letra-t2'></span></h1>
      </div>
      <div>
        <p className='Letra-gris'>Direccion del Viento</p>
        <h1 className='Letra-35'>{siDireccion}{siUnidadDirViento}<span className='Letra-35'>{direccionViento}</span></h1>
      </div>
    </div>
  )
}
