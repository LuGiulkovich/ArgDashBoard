import React from 'react'
import amanecerIcon from '../iconos/sunrise.svg';
import atardercerIcon from '../iconos/sunset.svg';

export const AmaOca = ({ siAmanecer, siAtardecer }) => {

  const amanecer = siAmanecer[0].split('T');
  const atardecer = siAtardecer[0].split("T");
  let sunrise = '';
  let sunset = '';

  const separarDatos = () => {
    sunrise = amanecer[1];
    sunset = atardecer[1];

  }


  separarDatos();

  return (
    <div className='Back-fff Radius-10'>
      <p className='Letra-gris'>Amanecer y Atardecer</p>
      <div className='Grid'>
        <div className='Flex'>
          <img src={amanecerIcon} alt='Amanecer' width={'50px'} />
          <p className='Letra-35 Letra-t3'>{sunrise} AM</p>
        </div>
        <div className='Flex'>
          <img src={atardercerIcon} alt='Atardecer' width={'50px'} />
          <p className='Letra-35 Letra-t3'>{sunset} PM</p>
        </div>
      </div>
    </div>
  )
}
