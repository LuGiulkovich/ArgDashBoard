import React from 'react'
import luna from '../iconos/moon-last-quarter.svg';

export const MinimaMaxima = ({siUniMin, siUniMax, siMin, siMax}) => {

    const soleado = 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg';

    return (
        <div className='MinMax Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <div className='Grid'>
                <p>{siMax}{siUniMax}</p>
                <div className='Flex'>
                    <p>MAXIMA</p>
                    <img src={soleado} alt='Sol' width={'50px'} />
                </div>
            </div>
            <div className='Grid'>
                    <p>{siMin}{siUniMin}</p>
                <div className='Flex'>
                    <p>MINIMA</p>
                    <img src={luna} alt='Luna' width={'50px'} />
                </div>
            </div>
        </div>
    )
}
