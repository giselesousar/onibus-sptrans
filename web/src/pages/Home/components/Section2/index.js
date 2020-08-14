import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

import MapComponent from './components/Map';
import Linhas from './components/Linhas';
import SearchVeiculo from './components/SearchVeiculo';
import SearchParada from './components/SearchParada';
import Contador from './components/Contador';
import VeiculoDetails from './components/VeiculoDetails';
import ParadaDetails from './components/ParadaDetails';
import TooltipComponent from './components/Tooltip';

export default function Section2(props) {

    const { api } = props;

    const [veiculos, setVeiculos] = useState([]);
    const [atualizacaoHora, setAtualizacaoHora] = useState(null);
    const [veiculoBuscado, setVeiculoBuscado] = useState(null);
    const [atualizar, setAtualizar] = useState(false);


    const [parada, setParada] = useState(null);

    function atualizarDados() {
        loadVeiculos();
        if (veiculoBuscado) {
            veiculos.forEach(veiculo => {
                if (veiculoBuscado.c == veiculo.c) {
                    setVeiculoBuscado(veiculo);
                }
            })
        }
    }

    function loadVeiculos() {

        api.get('Posicao')
            .then(response => {
                setAtualizacaoHora(response.data.hr);
                setVeiculos(response.data.l);
            })
            .catch(function (error) {
                console.log("erro")
            })
    }

    useEffect(() => {
        loadVeiculos();
    }, [])

    return (
        <Container className="section-2" style={{ marginTop: 30, marginBottom: 30 }}>
            <Row style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <h1>Ver no mapa</h1>
            </Row>
            <Row style={{
                marginTop: 30,
            }}>
                <Col md={5} xs={12} style={{
                    justifyContent: "center",
                    marginTop: 20
                }}>
                    <div className="container-atualizacao" style={{
                   
                    }}>
                        <h3>Última atualização: {atualizacaoHora}</h3>
                    </div>
                    {veiculoBuscado &&
                        <Contador
                            atualizarDados={atualizarDados}
                            atualizar={atualizar}
                            setAtualizar={setAtualizar}
                        />
                    }
                    <Card body>
                    <h4>Mostrar ônibus no mapa</h4>
                    <SearchVeiculo veiculos={veiculos} setVeiculoBuscado={setVeiculoBuscado} atualizar={atualizar} />
                    {veiculoBuscado && 
                        <>
                            <VeiculoDetails veiculo={veiculoBuscado}/>
                            <SearchParada
                                setParada={setParada}
                                veiculo={veiculoBuscado}
                            />
                            {
                                parada && 
                                <ParadaDetails parada={parada}/>
                            }
                        </>
                    }
                    </Card>
                </Col>
                <Col md={7} xs={12} style={{
                    justifyContent: "center",
                    display: "flex"
                }}>
                    <MapComponent
                        parada={parada ? parada.p : null}
                        veiculoBuscado={veiculoBuscado}
                    />
                </Col>
            </Row>
        </Container>
    )
}