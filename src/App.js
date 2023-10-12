import React, { useState, useEffect } from 'react';
import './App.css';
import climaIconos from './Json/CodigoClima.json';
import { DashClima } from './compsPadres/DashClima';

function App() {

  const [datosClima, setDatosClima] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,is_day,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1').then(resp => resp.json()).then(data => {
        setDatosClima(data);
        setLoading(false);
      }).catch(ex => {
        console.error(ex);
      })
    }, []);

  console.log(datosClima);

  return (
    <div>
      <div>{loading && <h1>Cargando...</h1>}</div>
      <div>{!loading && datosClima && <DashClima siClimaDatos={datosClima} siClimaIconos={climaIconos}/>}</div>
    </div>
  );
}

export default App;