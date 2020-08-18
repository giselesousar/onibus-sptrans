import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Veiculos from './components/Veiculos';

export default function MapComponent(props) {
    const { veiculos } = props;

    const mapRef = useRef();
    const didMountRef = useRef(false) 
    useEffect(() => {
        if (didMountRef.current) { 
        if (mapRef.current) {
            mapRef.current.leafletElement.invalidateSize(false);
        }
        } 
        else didMountRef.current = true
    })

    return (
        <Map center={[-23.692865, -46.77835]} zoom={12} ref={mapRef} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {veiculos && <Veiculos veiculos={veiculos.vs} />}
        </Map>
    )
}
