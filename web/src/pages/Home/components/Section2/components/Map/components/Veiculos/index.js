import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import {busIcon} from '../Icons';
import { FaWheelchair } from 'react-icons/fa'


export default function Veiculos(props){
    const { veiculos } = props;

    return(
        <>
        {veiculos.map(veiculo => {
                return (
                    <Marker key={veiculo.p} position={[veiculo.py, veiculo.px]} icon={busIcon}>
                        <Popup>
                            {veiculo.a && <FaWheelchair color="blue"/>}
                        </Popup>
                    </Marker>
                )
        })}
        </>
    )
}