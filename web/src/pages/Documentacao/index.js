import React from 'react';
import Detail from '../../layouts/Detail';
import {Container} from 'react-bootstrap';

export default function Documentacao(){
    return(
        <Detail title="Documentação Desafio Aiko">
            <Container style={{
                margin: 40,
            }}>
                <h3>Introdução</h3>
                <p> 
                    Esta aplicação foi desenvolvida para o desafio técnico do programa de estágio Aiko.
                </p>
                <h3>Funcionalidades</h3>
                <p></p>
                <h3>Usabilidade</h3>
                <p></p>
                <h3>Componentização</h3>
                <p></p>
                <h3>Tecnologias</h3>
                <p></p>
            </Container>
        </Detail>
    )
}