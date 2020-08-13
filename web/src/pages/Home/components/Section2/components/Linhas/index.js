import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import api from '../../../../../../services/api';

export default function Linhas(props) {
    const { veiculoBuscado } = props;
    const [linhas, setLinhas] = useState([]);

    function loadLinhas() {
        api.get(`/Linha/Buscar?termosBusca=${veiculoBuscado.c}`)
            .then(response => {
                setLinhas(response.data);
                console.log("entrou")
            })
            .catch(function(error){
                //error
            })
    }

    useEffect(() => {
        loadLinhas();
    }, [])

    return (
        <>
            {
                linhas.map(linha => {
                    return(
                        <div>
                        <h5>Código identificador: {linha.cl}</h5>
                        <p>
                            Sentido: {
                                linha.sl == 1 ? 
                                `${linha.tp} -> ${linha.ts}`:
                                `${linha.ts} -> ${linha.tp}`
                                    }
                        </p>
                        </div>
                    )
                })
            }
        </>
    )
}