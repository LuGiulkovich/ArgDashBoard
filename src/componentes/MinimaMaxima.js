import React from 'react'
import sol from '../iconos/partly-cloudy-day.svg';
import luna from '../iconos/moon-last-quarter.svg';

export const MinimaMaxima = ({siUniMin, siUniMax}) => {
    return (
        <div className='MinMax Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <div className='Grid'>
                <p>29{siUniMax}</p>
                <div className='Flex'>
                    <p>MAXIMA</p>
                    <img src={sol} alt='Sol' width={'50px'} />
                </div>
            </div>
            <div className='Grid'>
                    <p>13{siUniMin}</p>
                <div className='Flex'>
                    <p>MINIMA</p>
                    <img src={luna} alt='Luna' width={'50px'} />
                </div>
            </div>
        </div>
    )
}
