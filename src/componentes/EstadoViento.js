import React from 'react'
import viento from '../iconos/wind-beaufort-11.svg';

export const EstadoViento = () => {
  return (
    <div className='Back-fff Radius-10'>
        <p className='Letra-gris'>Estado del Viento</p>
        <h1 className='Letra-35'>11.12 <span className='Letra-35 Letra-t2'>km/h</span></h1>
        <img src={viento} alt='Viento' width={'100px'}/>
    </div>
  )
}
