import React from 'react'
import sol from '../iconos/partly-cloudy-day.svg';
import luna from '../iconos/moon-last-quarter.svg';

export const MinimaMaxima = () => {
    return (
        <div className='MinMax Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <div className='Grid'>
                <h1>29°C</h1>
                <div className='Flex'>
                    <p className='Letra-size'>MAXIMA</p>
                    <img src={sol} alt='Sol' width={'50px'} />
                </div>
            </div>
            <div className='Grid'>
                    <h1>13°C</h1>
                <div className='Flex'>
                    <p className='Letra-size'>MINIMA</p>
                    <img src={luna} alt='Luna' width={'50px'} />
                </div>
            </div>
        </div>
    )
}
