import React from 'react'
//import uVIndex6 from '../iconos/uv-index-6.svg';
import { GaugeChart } from './EjemploChart/GaugeChart';

//<img src={uVIndex6} alt='uVIndex6'/>

export const UvIndex = ({siUvIndexMax}) => {
  return (
    <div className='Back-fff Radius-10'>
        <p className='Letra-gris'>UV INDEX</p>
        <div className='UvIndex-Gauge'>
          <GaugeChart siUvIndexMax={siUvIndexMax}/>
        </div>
    </div>
  )
}
