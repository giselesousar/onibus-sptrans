import React from 'react';

export default function VeiculoDetails(props) {
    const { veiculo } = props;

    return (
        <div>
            <h5>Informações sobre o veículo: {veiculo.c}</h5>
            <hr/>
            <p>
               <strong>
                    Código identificador da linha: 
               </strong>
               {veiculo.cl}
            </p>
            <p>
               <strong>
                    Sentido: 
               </strong>
                {veiculo.sl === 1 ? "Terminal Principal para Terminal Secundário" : "Terminal Secundário para Terminal Principal"}
            </p>
            <p>
               <strong>
                    Letreiro de destino da linha: 
               </strong>
               {veiculo.lt0}
            </p>
            <p>
               <strong>
                    Letreiro de origem da linha: 
               </strong>
               {veiculo.lt1}
            </p>
            <p>
               <strong>
                    Quantidade de veículos localizados: 
               </strong>
               {veiculo.qv}
            </p>
            <hr/>
        </div>
    
    )
}