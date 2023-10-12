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

export const DashClima = () => {
  return (
    <div>
        <div className='Datos-barra Back-Grad-NaranjaFuerte'>
            <BarraClima />
        </div>
        <div className='Datos-importantes Flex Gap-10'>
            <div className='Clima-Hoy Grid Gap-10'>
                <HoyDia />
                <Localidad />
                <MinimaMaxima />
            </div>
            <div className='Datos-Hoy Flex Gap-10'>
                <div className='Contenidos Grid Gap-10'>
                    <UvIndex />
                    <Visibilidad />
                    <EstadoViento />
                </div>
                <div className='Contenidos Grid Gap-10'>
                    <AmaOca />
                    <VelocidadViento />
                    <Humedad />
                </div>
            </div>
        </div>
    </div>
  )
}
