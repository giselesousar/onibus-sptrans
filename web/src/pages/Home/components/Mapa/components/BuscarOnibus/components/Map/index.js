import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Veiculos from './components/Veiculos';

export default function MapComponent(props) {
    const { veiculos } = props;
    return (
        <Map center={[-23.692865, -46.77835]} zoom={12} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {veiculos && <Veiculos veiculos={veiculos.vs} />}
        </Map>
    )
}
