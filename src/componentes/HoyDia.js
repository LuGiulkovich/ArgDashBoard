import React from 'react'
import nublado from '../iconos/partly-cloudy-day.svg';
import celsius from '../iconos/thermometer-celsius.svg';

export const HoyDia = ({siHoyTemperatura, siDdMmFfHh}) => {
    return (
        <div className='HoyDia Back-Grad-NaranjaFuerte Radius-10 Flex'>
            <img src={nublado} alt='Nublado' width={"200px"} className=''/>
            <div className='HoyDia-Datos Grid'>
                <p className='Letra-size'>Nublado</p>
                <div className='Flex Around A-Center'>
                    <p className='Letra-size Letra-t3'>{siHoyTemperatura}</p>
                    <img src={celsius} alt='Celsius'  width={'100px'}/>
                </div>
                <p className='Letra-size'>Mar, 3 Oct</p>
            </div>
            
        </div>
    )
}
