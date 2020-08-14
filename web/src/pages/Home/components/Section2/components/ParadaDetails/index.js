import React from 'react';

export default function ParadaDetails(props){
    const {parada} = props;

    return(
    <p>{parada.np}</p>
    )
}