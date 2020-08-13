import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

import MapComponent from './components/Map';
import Linhas from './components/Linhas';
import Search from './components/Search';
import Contador from './components/Contador';
import VeiculoDetails from './components/VeiculoDetails';
import TooltipComponent from './components/Tooltip';

export default function Section2(props) {

    const { api } = props;

    const [mostrarParadas, setMostrarParadas] = useState(false);
    const [veiculos, setVeiculos] = useState([]);
    const [atualizacaoHora, setAtualizacaoHora] = useState(null);
    const [veiculoBuscado, setVeiculoBuscado] = useState(null);
    const [atualizar, setAtualizar] = useState(false);


    const [paradas, setParadas] = useState([]);

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
                console.log(response.data.hr);
            })
            .catch(function (error) {
                console.log("erro")
            })
    }

    function loadParadas() {

        api.get('Parada/Buscar?termosBusca=*')
            .then(response => {
                setParadas(response.data);
            })
            .catch(function (error) {
                //error
            })
    }


    useEffect(() => {
        loadParadas();
    }, [])

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
                    <Search veiculos={veiculos} setVeiculoBuscado={setVeiculoBuscado} atualizar={atualizar} />
                    <h4>Mostrar todas as paradas</h4>

                    <div style={{
                        display: "flex",
                        direction: "row"
                    }}>
                    <Button variant="outline-success" onClick={() => {
                        setMostrarParadas(!mostrarParadas);
                    }}>{mostrarParadas ? "Ocutar paradas" : "Mostrar paradas"}</Button>
                    <TooltipComponent content="Clicando no ícone da parada no mapa aparecerá o nome da parada, se houver."/>
                    </div>
                    </Card>
                    {veiculoBuscado && <VeiculoDetails veiculo={veiculoBuscado}/>}

                </Col>
                <Col md={7} xs={12} style={{
                    justifyContent: "center",
                    display: "flex"
                }}>
                    <MapComponent
                        paradas={paradas}
                        mostrarParadas={mostrarParadas}
                        veiculoBuscado={veiculoBuscado}
                    />
                </Col>
            </Row>
        </Container>
    )
}