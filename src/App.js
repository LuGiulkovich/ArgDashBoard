import './App.css';
import { AmaOca } from './componentes/AmaOca';
import BarraClima from './componentes/BarraClima';
import { EstadoViento } from './componentes/EstadoViento';
import { HoyDia } from './componentes/HoyDia';
import { Humedad } from './componentes/Humedad';
import { Localidad } from './componentes/Localidad';
import { MinimaMaxima } from './componentes/MinimaMaxima';
import { UvIndex } from './componentes/UvIndex';
import { Visibilidad } from './componentes/Visibilidad';
import json from './Json/primerGet.json';
import codigoClima from './Json/CodigoClima.json';
import { Precipitacion } from './componentes/Precipitacion';

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

  /* Precipitacion.js */
  const probabilidadPre = json.daily.precipitation_probability_max;

  return (
    <div className="Dash-clima Grid">
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
          <div className='Contenidos Grid '>
            <UvIndex siUvIndexMax={uvMax}/>
            <Visibilidad siUniVisibilidad={uniVisibilidad}/>
            <Humedad siUniHumedad={uniHumedad}
              siHumedad={humedad}
            />
          </div>
          <div className='Contenidos Grid'>
            <AmaOca siAmanecer={amanecer}
              siAtardecer={atardecer}
            />
            <EstadoViento siVelocidad={velocidadViento}
              siDireccion={direccionViento}
              siUnidadVelViento={unidadVelViento}
              siUnidadDirViento={unidadDirViento}
            />
            <Precipitacion siProbabilidadPre={probabilidadPre}/>
          </div>
        </div>
      </div>
      <div className='Datos-barra Back-Grad-NaranjaFuerte'>
        <BarraClima siHorarios={horarios}
          siTemperatura={temperatura}
          siHumedad={humedadHoraria}
          siMaxima={maxima}
        />
      </div>
    </div>
  );
}

export default App;