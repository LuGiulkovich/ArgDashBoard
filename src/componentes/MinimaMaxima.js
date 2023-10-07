import React from 'react'
import maximaIcono from '../iconos/pressure-high.svg';
import minimaIcono from '../iconos/pressure-low.svg';

export const MinimaMaxima = ({siUniMin, siUniMax, siMin, siMax}) => {
    
    return (
        <div className='MinMax Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <div className='Grid'>
                <p>{siMax}{siUniMax}</p>
                <div className='Flex'>
                    <p>MAXIMA</p>
                    <img src={maximaIcono} alt='Maxima Icono' width={'50px'} />
                </div>
            </div>
            <div className='Grid'>
                    <p>{siMin}{siUniMin}</p>
                <div className='Flex'>
                    <p>MINIMA</p>
                    <img src={minimaIcono} alt='Minima Icono' width={'50px'} />
                </div>
            </div>
        </div>
    )
}
