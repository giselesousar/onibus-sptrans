import React from 'react';
import {Container, Card, Form, FormControl, Button} from 'react-bootstrap';
import JumbotronComponent from './components/Jumbotron';
import CardComponent from './components/Card';
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
                <CardComponent
                    title="Buscar por linhas"
                    placeholder="Buscar linha"
                    path="/linhas"
                    linhas={true}
                />
                <CardComponent
                    title="Buscar por corredores"
                    placeholder="Buscar corredor"
                    path="/corredores"
                    corredores={true}
                />
                <CardComponent
                    title="Buscar por paradas"
                    placeholder="Buscar parada"
                    path="/paradas"
                    paradas={true}
                />
                </div>
            </Container>
        </div>
    )
}