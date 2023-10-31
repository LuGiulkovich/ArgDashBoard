import React, { useState, useEffect } from 'react';
import './App.css';
import climaIconos from './Json/CodigoClima.json';
import { DashClima } from './compsPadres/DashClima';
import { DashTransporte } from './compsPadres/DashTransporte';

function App() {

  const [datosClima, setDatosClima] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [calidadAire, setCalidadAire] = useState(null);
  const [datosTrans, setDatosTrans] = useState(null);


  useEffect(() => {
    setLoading1(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,is_day,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1').then(resp => resp.json()).then(data => {
      setDatosClima(data);
      setLoading1(false);
    }).catch(ex => {
      console.error(ex);
    })
  }, []);

  useEffect(() => {
    setLoading1(true);
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=us_aqi,pm10&hourly=pm10&timezone=America%2FSao_Paulo').then(resp => resp.json()).then(data => {
      setCalidadAire(data);
      setLoading1(false);
    }).catch(ex => {
      console.error(ex);
    })
  }, []);

  useEffect(() => {
    setLoading2(true);
    fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6').then(resp => resp.json()).then(data => {
      setDatosTrans(data);
      setLoading2(false);
    }).catch(ex => {
      console.log(ex);
    })
  })

  return (
    <div className='DashBoard Flex'>
        <div className='Grid'>
          <div className='mensaje-cargando'>{loading1 && <h1>Cargando Clima</h1>}</div>
          <div className='Contenedor-Clima'>{!loading1 && datosClima && calidadAire && <DashClima siClimaDatos={datosClima} siClimaIconos={climaIconos} siCalidadAire={calidadAire}/>}</div>
        </div>
         <div className='mensaje-cargando'>{loading1 && <h1>Cargando Transporte</h1>}</div>
         <div className=''>{!loading2 && datosTrans && <DashTransporte siTransDatos={datosTrans}/>}</div>
    </div>
  );
}

export default App;