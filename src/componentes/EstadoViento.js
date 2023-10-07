import React from 'react'

export const EstadoViento = ({ siVelocidad, siUnidadVelViento ,siDireccion, siUnidadDirViento }) => {
  return (
    <div className='Back-fff Radius-10 Grid'>
      <div>
        <p className='Letra-gris'>Velocidad del Viento</p>
        <h1 className='Letra-35'>{siVelocidad}<span className='Letra-35 Letra-t2'>{siUnidadVelViento}</span></h1>
      </div>
      <div>
        <p className='Letra-gris'>Direccion del Viento</p>
        <h1 className='Letra-35'>{siDireccion}{siUnidadDirViento}</h1>
      </div>
    </div>
  )
}
