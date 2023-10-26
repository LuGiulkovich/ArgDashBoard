import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Buses from '../Json/transporteApi1.json';

export const DashTransporte = () => {



    const busN60 = Buses.filter((bus) => bus.agency_id === 60);

    console.log(busN60);

    const latitudes = busN60.map((lat) => lat.latitude);
    const longitudes = busN60.map((lon) => lon.longitude);


    let sumaLats = 0;
    let sumaLogs = 0;

    let cantLats = latitudes.length;
    let cantLogs = longitudes.length;


    for (let i = 0; i < latitudes.length; i++) {
        sumaLats += latitudes[i];
    }

    for (let i = 0; i < longitudes.length; i++) {
        sumaLogs += longitudes[i];
    }

    let promedioLat = sumaLats / cantLats;
    let promedioLong = sumaLogs / cantLogs;

    const position = [promedioLat, promedioLong];

    /*const {segundos, setSegundos} = useState(0);*/

    /*useEffect(() => {
        const intervalo = setInterval(() => {
            fetch()...then
        }, 3100);
        return () => clearInterval(intervalo);
    }, []);*/

    return (
        <div className='Dash-trans'>
            <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {busN60.map((item, index) => {
                    return (
                        <Marker key={index} position={[item["latitude"], item["longitude"]]}>
                            <Popup>
                                Linea N°: {item["agency_id"]}, Velocidad: {item["speed"]}Km.
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div >

    )
}