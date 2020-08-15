import React, { useState } from 'react';
import Detail from '../../layouts/Detail';
import { Container, Col, Card, Accordion, ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Linhas(props) {

    const busca = props.location.state.busca;
    const history = useHistory();

    const [filtro, setFiltro] = useState(busca);
    const [paradas, setParadas] = useState([]);
    const [value, setValue] = useState('');

    function handleGoBack() {
        history.goBack();
    }

    function onClickLinha(codigo) {
        setParadas([]);
        api.get(`Parada/BuscarParadasPorLinha?codigoLinha=${codigo}`)
            .then(response => {
                setParadas(response.data);
            })
            .catch(function (error) {
                //erro
            })
    }

    function onChange(e) {
        setValue(e.target.value);
        if (e.target.value.length > 0) {
            setFiltro(busca.filter(item => { return item.lt.match(e.target.value) || item.tp.toLowerCase().match(e.target.value.toLowerCase()) || item.ts.toLowerCase().match(e.target.value.toLowerCase()) }))
        } else {
            setFiltro(busca);
        }
    }

    return (
    <Detail title="Buscar por linhas">
        <Card style={{}}>
            <Card.Header>
                <Form inline >
                    <FormControl
                        type="text"
                        placeholder="filtrar"
                        className="mr-sm-2"
                        value={value}
                        onChange={onChange}
                    />
                </Form>
            </Card.Header>
            <Accordion >

                {
                    filtro.map(item => {
                        return (

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey={item.cl}
                                        onClick={() => onClickLinha(item.cl)}
                                        style={{
                                            textAlign: "left",
                                            textDecoration: "none"
                                        }}
                                    >
                                        {item.lt} - {item.tl} <br />
                                        {item.sl === 1 ?
                                            <p>
                                                {item.tp} <FaArrowRight color="green" /> {item.ts}
                                            </p> :
                                            <p>
                                                {item.ts} <FaArrowRight color="green" /> {item.tp}
                                            </p>
                                        }
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={item.cl}>
                                    <ListGroup>
                                        {paradas.length > 0 &&
                                            <Card.Body>
                                                {paradas.map(parada => {
                                                    return (
                                                        <ListGroup.Item>
                                                             <strong> {parada.np} </strong><br/>
                                                                {parada.ed} 
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </Card.Body>
                                        }
                                    </ListGroup>
                                </Accordion.Collapse>
                            </Card>
                        )

                    })
                }
            </Accordion>

        </Card> 
    </Detail>  
    )
}