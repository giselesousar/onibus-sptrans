import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Paradas from './components/Paradas';
import Veiculos from './components/Veiculos';

export default function MapComponent(props) {
    const { mostrarParadas, paradas, veiculoBuscado } = props;
    return (
        <Map center={[-23.692865, -46.77835]} zoom={12} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mostrarParadas && <Paradas paradas={paradas} />}
            {veiculoBuscado && <Veiculos veiculos={veiculoBuscado.vs} />}
        </Map>
    )
}
