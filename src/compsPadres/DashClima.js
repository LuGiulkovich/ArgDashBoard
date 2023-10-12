import React from 'react'
/* import BarraClima from '../componentes/BarraClima'
import { MinimaMaxima } from '../componentes/MinimaMaxima'
import { UvIndex } from '../componentes/UvIndex'
import { Visibilidad } from '../componentes/Visibilidad'
import { EstadoViento } from '../componentes/EstadoViento'
import { AmaOca } from '../componentes/AmaOca'
import { VelocidadViento } from '../componentes/VelocidadViento'
import { Humedad } from '../componentes/Humedad' */
import { HoyDia } from '../componentes/HoyDia'
import { Localidad } from '../componentes/Localidad'

export const DashClima = ({ siClimaDatos, siClimaIconos}) => {

  return (
    <div>
      <div className='Datos-importantes Flex Gap-10'>
        <div className='Clima-Hoy Grid Gap-10'>
          <HoyDia siClimaDatos={siClimaDatos}
            siClimaIconos={siClimaIconos}
          />
          <Localidad siClimaDatos={siClimaDatos}/>
        </div>
      </div>

    </div>
  )
}
