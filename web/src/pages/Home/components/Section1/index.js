import React from 'react';
import {Container} from 'react-bootstrap';
export default function Section1() {
    return(
        <div style={{
            width: "100%",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            height: "100vh",
        }} className="section-1">
            <Container style={{
                textAlign: "center",
                marginTop: 30,
            }}>
                <h1>
                    Desafio Aiko
                    </h1>
                <p>
                    Aplicação desenvolvida para o desafio técnico do programa de estágio Aiko.
                    </p>
            </Container>
        </div>
    )
}