import React, {useState, useEffect} from 'react';
import './App.css';
import { DashClima } from './compsPadres/DashClima';

function App() {

  const [datosClima, setDatosClima] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
      .then(resp => resp.json()
      ).then(data => {
        setDatosClima(data);
        setLoading(false);
      }).catch(ex => {
        console.log(ex);
      })
  }, [])





  return (
    <div className="Border-red">
      <DashClima />
    </div>
  );
}

export default App;