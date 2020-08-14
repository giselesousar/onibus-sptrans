import React from 'react';
import {Container, Card, Form, FormControl, Button} from 'react-bootstrap';
import JumbotronComponent from './components/Jumbotron';
import CardSearch from './components/CardSearch';
import CardDropdown from './components/CardDropdown';

export default function Section1() {
    return(
        <div style={{
            width: "100%",
            margin: 0,
        }} className="section-1">
            <Container style={{
                marginTop: 30,
            }}>
                <JumbotronComponent/>
                <div fluid style={{
                    display: "flex",
                    direction: "row",
                    justifyContent: "space-between",
                    
                }}>
                <CardSearch
                    title="Buscar por linhas"
                    placeholder="Buscar linha"
                    path="/linhas"
                    linhas={true}
                />
                <CardSearch
                    title="Buscar por paradas"
                    placeholder="Buscar parada"
                    path="/paradas"
                    paradas={true}
                />
                <CardDropdown
                    title="Buscar por corredores"
                    path="/corredores"
                />
                </div>
            </Container>
        </div>
    )
}