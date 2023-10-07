import './App.css';
import { AmaOca } from './componentes/AmaOca';
import BarraClima from './componentes/BarraClima';
import { VelocidadViento } from './componentes/VelocidadViento';
import { HoyDia } from './componentes/HoyDia';
import { Humedad } from './componentes/Humedad';
import { Localidad } from './componentes/Localidad';
import { MinimaMaxima } from './componentes/MinimaMaxima';
import { UvIndex } from './componentes/UvIndex';
import { Visibilidad } from './componentes/Visibilidad';
import json from './Json/primerGet.json';
import codigoClima from './Json/CodigoClima.json';
import calidadAire from './Json/CalidadAire.json';
//import { Precipitacion } from './componentes/Precipitacion';
import { EstadoViento } from './componentes/EstadoViento';

function App() {
  /* HoyDia.js */
  const hoyTemperatura = json.current_weather.temperature;
  const ddMmFfHh = json.current_weather.time;
  const unidadHoy = json.hourly_units.temperature_2m;
  const codigoClimaHoy = json.current_weather.weathercode;
    /* Obtener el clima de hoy */
  const comoEstaHoy = (codigoClima[codigoClimaHoy].name);
  const climaIcono = (codigoClima[codigoClimaHoy].image_src);

  /* EstadoViento.js */
  const velocidadViento = json.current_weather.windspeed;
  const direccionViento = json.current_weather.winddirection;
  const unidadVelViento = json.daily_units.windspeed_10m_max;
  const unidadDirViento = json.hourly_units.winddirection_80m;

  /* MinimaMaxima.js */
  const unidadMin = json.daily_units.temperature_2m_min;
  const unidadMax = json.daily_units.temperature_2m_max;
  const minima = json.daily.temperature_2m_min;
  const maxima = json.daily.temperature_2m_max;

  /* Localidad.js */
  const localidad = json.timezone;

  /* UvIndex.js */
  const uvMax = json.daily.uv_index_max;

  /* AmaOca.js */
  const amanecer = json.daily.sunrise;
  const atardecer = json.daily.sunset;

  /* BarraClima.js */
  const horarios = json.hourly.time;
  const temperatura = json.hourly.temperature_2m;
  const humedadHoraria = json.hourly.relativehumidity_2m;

  /* Humedad.js */
  const uniHumedad = json.hourly_units.relativehumidity_2m;
  const humedad = json.hourly.relativehumidity_2m;

  /* Visibilidad.js */
  const uniVisibilidad = json.hourly_units.visibility;
  const visibilidad = json.hourly.visibility[0];

  /* Precipitacion.js */
  const probabilidadPre = json.daily.precipitation_probability_max;

  /* EstadoViento.js */
  const uniAire = calidadAire.hourly_units.pm10;
  const aire = calidadAire.hourly.pm10[0];

  //<Precipitacion siProbabilidadPre={probabilidadPre}/>

  return (
    <div className="Dash-clima Grid">
      
      <div className='Datos-barra Back-Grad-NaranjaFuerte'>
        <BarraClima siHorarios={horarios}
          siTemperatura={temperatura}
          siHumedad={humedadHoraria}
          siMaxima={maxima}
        />
      </div>
      <div className='Datos-importantes Flex Gap-10'>
        <div className='Clima-Hoy Grid Gap-10'>
          <HoyDia siHoyTemperatura={hoyTemperatura}
            siDdMmFfHh={ddMmFfHh}
            siUniHoy={unidadHoy}
            siComoEstaHoy={comoEstaHoy}
            siClimaIcono={climaIcono}
          />
          <Localidad siLocalidad={localidad}/>
          <MinimaMaxima siUniMin={unidadMin}
            siUniMax={unidadMax}
            siMin={minima}
            siMax={maxima}
          />
        </div>
        <div className='Datos-Hoy Flex Gap-10'>
          <div className='Contenidos Grid Gap-10'>
            <UvIndex siUvIndexMax={uvMax}/>
            <Visibilidad siUniVisibilidad={uniVisibilidad}
              siVisibilidad={visibilidad}
            />
            <EstadoViento siUniAire={uniAire}
              siAire={aire}
            />
            
          </div>
          <div className='Contenidos Grid Gap-10'>
            <AmaOca siAmanecer={amanecer}
              siAtardecer={atardecer}
            />
            <VelocidadViento siVelocidad={velocidadViento}
              siDireccion={direccionViento}
              siUnidadVelViento={unidadVelViento}
              siUnidadDirViento={unidadDirViento}
            />
            <Humedad siUniHumedad={uniHumedad}
              siHumedad={humedad}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;