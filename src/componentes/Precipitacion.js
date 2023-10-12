import React from 'react'
import gotas from '../iconos/raindrops.svg'

export const Precipitacion = ({siProbabilidadPre}) => {
  return (
    <div className='Back-fff Radius-10'>
        <p className='Letra-gris'>Precipitación</p>
        <div className='Flex'>
            <h1 className='Letra-35'>{siProbabilidadPre}</h1>
            <img src={gotas} alt='Gotas' width={'50px'}></img>
        </div>
        
    </div>
  )
}
