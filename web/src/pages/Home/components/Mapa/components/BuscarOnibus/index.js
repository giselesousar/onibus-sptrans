import React, {useState} from 'react';
import {Col, Row, Card, Button} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';


import TooltipComponent from '../../../components/Tooltip';
import SearchVeiculo from './components/SearchVeiculo';
import VeiculoDetails from './components/VeiculoDetails';
import Contador from './components/Contador';
import MapComponent from './components/Map';
import api from '../../../../../../services/api'

export default function BuscarOnibus(props) {

    const {} = props;

    const [veiculoBuscado, setVeiculoBuscado] = useState({
        veiculos: null,
        linha: null
    });
    const [atualizar, setAtualizar] = useState(false);

    function atualizarDados() {
        api.get(`Posicao/Linha?codigoLinha=${veiculoBuscado.linha}`)
            .then(response => {
                setVeiculoBuscado({
                    veiculos: response.data,
                    linha: veiculoBuscado.linha
                })
            })
            .catch(function(error){
            })
    }


    function handleDelete() {
        setVeiculoBuscado({
            veiculos: null,
            linha: null
        });
        setAtualizar(false);
    }

    return (
        <Col>
            <Row style={{
                justifyContent: "center",
            }}>
              
                <Card style={{
                    width: "100%"
                }} body>
                    <h4>Mostrar ônibus no mapa <TooltipComponent content="Informe o código da linha para vizualizar a posição dos veículos dessa linha no mapa" /></h4>
                    <SearchVeiculo
                        setVeiculoBuscado={setVeiculoBuscado}
                    />
                    {veiculoBuscado.linha &&
                        <>
                            <VeiculoDetails
                                linha={veiculoBuscado.linha}
                                veiculoBuscado={veiculoBuscado}
                                options={<div style={{
                                    display: "flex",
                                    direction: "row"
                                }}>
                                    <Contador
                                        atualizarDados={atualizarDados}
                                        atualizar={atualizar}
                                        setAtualizar={setAtualizar}
                                    /> {' '}
                                    <Button style={{
                                        margin: 5
                                    }} variant="outline-danger" onClick={handleDelete} size="sm"><FaTrash /></Button>
                                </div>
                                }
                            />
                            <h4>Calcular previsão de chegada: </h4>

                        </>
                    }
                </Card>
            </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    veiculos={veiculoBuscado.veiculos}
                />
            </Row>
        </Col>
    )
}