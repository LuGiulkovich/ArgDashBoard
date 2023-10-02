import React from 'react'

export const ClimaHoy = () => {
  return (
    <div className='ClimaHoy-contenedor'>
        <h1 className='H1'>Hoy</h1>
        <div className='ClimaHoy-Cont-Datos'>
            <div className='ClimaHoy-temp-escala'>
                <p>40</p>
                <p>20</p>
                <p>0</p>
                <p></p>
            </div>
            <div className='ClimaHoy-temp-hora'>
                <div className='ClimaHoy-temp-cont-barra'>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                    <div className='ClimaHoy-temp-barra'></div>
                </div>
                <div className='ClimaHoy-temp-cont-hora-x'>
                    <p className='ClimaHoy-temp-hora-x'>12:00 AM</p>
                    <p className='ClimaHoy-temp-hora-x'>3:00 AM</p>
                    <p className='ClimaHoy-temp-hora-x'>6:00 AM</p>
                    <p className='ClimaHoy-temp-hora-x'>9:00 AM</p>
                    <p className='ClimaHoy-temp-hora-x'>12:00 PM</p>
                    <p className='ClimaHoy-temp-hora-x'>3:00 PM</p>
                    <p className='ClimaHoy-temp-hora-x'>6:00 PM</p>
                    <p className='ClimaHoy-temp-hora-x'>9:00 PM</p>
                    <p className='ClimaHoy-temp-hora-x'>12:00 AM</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
