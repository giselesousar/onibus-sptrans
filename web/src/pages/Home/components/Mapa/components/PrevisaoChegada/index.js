import React, {useState, useEffect} from 'react';
import {Col, Row, Card, Button} from 'react-bootstrap';
import MapComponent from './components/Map';
import Search from './components/Search';
import TooltipComponent from '../../../components/Tooltip';
import Details from './components/Details';
import { FaTrash } from 'react-icons/fa';
import Contador from './components/Contador';

export default function PrevisaoChegada(){
    const [resultados, setResultados] = useState(null);
    const [atualizar, setAtualizar] = useState(false);

    function handleDelete() {
        setResultados(null)
        setAtualizar(false);
    }

    function atualizarDados(){

    }

    return(
        <Col>
        <Row>
                <Card style={{
                    width: "100%"
                }} body>
                    <h4>Calcular previsão de chegada <TooltipComponent content="Informe o nome ou endereço da parada (informações totais ou parciais). Ou clique no filtro para buscar paradas por linhas ou corredores." /></h4>
                    <Search
                        resultados={resultados}
                        setResultados={setResultados}
                        atualizar={atualizar}
                        setAtualizar={setAtualizar}
                    />{resultados &&
                    <Details
                        resultados={resultados}
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
                    }
                </Card>
        </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    resultados={resultados}
                />
            </Row>
        </Col>
    )
}