import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import MapComponent from './components/Map';
import Linhas from './components/Linhas';
import Search from './components/Search';
import Contador from './components/Contador';
import VeiculoDetails from './components/VeiculoDetails';

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
        <div className="section-2" style={{ height: "100vh" }}>
            <Row style={{
            }}>
                <Col md={4} style={{
                    justifyContent: "center",
                    marginTop: 20
                }}>
                    <div className="container-atualizacao" style={{
                        borderRadius: "8px",
                        border: "1px solid green"
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
                    <Search veiculos={veiculos} setVeiculoBuscado={setVeiculoBuscado} atualizar={atualizar} />
                    <Button variant="outline-success" onClick={() => {
                        setMostrarParadas(mostrarParadas ? false : true);
                    }}>{mostrarParadas ? "Ocutar paradas" : "Mostrar paradas"}</Button>
                    {/**veiculoBuscado && <Linhas veiculoBuscado={veiculoBuscado} />*/}
                    {veiculoBuscado && <VeiculoDetails veiculo={veiculoBuscado}/>}
                </Col>
                <Col md={8}>
                    <MapComponent
                        paradas={paradas}
                        mostrarParadas={mostrarParadas}
                        veiculoBuscado={veiculoBuscado}
                    />
                </Col>
            </Row>
        </div>
    )
}