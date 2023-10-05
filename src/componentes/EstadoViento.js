import React from 'react'
//import viento from '../iconos/wind-beaufort-11.svg';

//<img src={viento} alt='Viento' width={'100px'}/>

export const EstadoViento = ({ siVelocidad, siUnidadVelViento ,siDireccion }) => {
  return (
    <div className='Back-fff Radius-10 Grid'>
      <div>
        <p className='Letra-gris'>Estado del Viento</p>
        <h1 className='Letra-35'>{siVelocidad} <span className='Letra-35 Letra-t2'>{siUnidadVelViento}</span></h1>
      </div>
      <div>
        <p className='Letra-gris'>Direccion del Viento</p>
        <h1 className='Letra-35'>{siDireccion}</h1>
      </div>
    </div>
  )
}
