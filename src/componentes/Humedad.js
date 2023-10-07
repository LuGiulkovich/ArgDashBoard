import React from 'react'
import humedadIcon from '../iconos/humidity.svg';

export const Humedad = ({siUniHumedad, siHumedad}) => {

  const pseudoHumedad = siHumedad[0];

  return (
    <div className='Back-fff Radius-10 Flex Around'>  
        <div className='Grid'>
          <p className='Letra-gris p-Humedad'>Humedad</p>
          <h1 className='Letra-35'>{pseudoHumedad}<span>{siUniHumedad}</span></h1>
        </div>
        <img src={humedadIcon}  alt='Humedad Icono' width={'101px'}/>
    </div>
  )
}
