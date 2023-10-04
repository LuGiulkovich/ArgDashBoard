import React from 'react'
import amanecer from '../iconos/sunrise.svg';
import atardercer from '../iconos/sunset.svg';

export const AmaOca = () => {
  return (
    <div className='Back-fff Radius-10'>
      <p className='Letra-gris'>Amanecer y Atardecer</p>
      <div className='Grid'>
        <div className='Flex'>
          <img src={amanecer} alt='Amanecer' width={'50px'} />
          <p className='Letra-35 Letra-t3'>6:35 AM</p>
        </div>
        <div className='Flex'>
          <img src={atardercer} alt='Atardecer' width={'50px'} />
          <p className='Letra-35 Letra-t3'>5:42 PM</p>
        </div>
      </div>
    </div>
  )
}
