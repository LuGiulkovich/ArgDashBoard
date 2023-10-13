import React from 'react'
import BarraClima from '../componentes/BarraClima'
import { HoyDia } from '../componentes/HoyDia'
import { Localidad } from '../componentes/Localidad'
import { MinimaMaxima } from '../componentes/MinimaMaxima'
import { UvIndex } from '../componentes/UvIndex'
import { Visibilidad } from '../componentes/Visibilidad'
import { EstadoViento } from '../componentes/EstadoViento'
import { AmaOca } from '../componentes/AmaOca'
import { VelocidadViento } from '../componentes/VelocidadViento'
import { Humedad } from '../componentes/Humedad'



export const DashClima = ({ siClimaDatos, siClimaIconos, siCalidadAire}) => {

  return (
    <div className='Dash-clima'>
      <div className='Datos-barra Back-Grad-NaranjaFuerte'>
        <BarraClima siClimaDatos={siClimaDatos}/>
      </div>
      <div className='Datos-importantes Flex Gap-10'>
        <div className='Clima-Hoy Grid Gap-10'>
          <HoyDia siClimaDatos={siClimaDatos}
            siClimaIconos={siClimaIconos}/>
          <Localidad siClimaDatos={siClimaDatos}/>
          <MinimaMaxima siClimaDatos={siClimaDatos}/>
        </div>
        <div className='Datos-Hoy Flex Gap-10'>
          <div className='Contenidos Grid Gap-10'>
            <UvIndex siClimaDatos={siClimaDatos}/>
            <Visibilidad siClimaDatos={siClimaDatos}/>
            <EstadoViento siCalidadAire={siCalidadAire}/>
          </div>
          <div className='Contenidos Grid Gap-10'>
            <AmaOca siClimaDatos={siClimaDatos}/>
            <VelocidadViento siClimaDatos={siClimaDatos}/>
            <Humedad siClimaDatos={siClimaDatos}/>
          </div>
        </div>
      </div>
    </div>
  )
}
