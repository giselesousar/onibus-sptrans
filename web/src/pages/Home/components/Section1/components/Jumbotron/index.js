import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default function JumbotronComponent(){
    return(
        <Jumbotron>
            <h1>
                    Desafio Aiko - Frontend
                    </h1>
                <p>
                    Aplicação desenvolvida para o desafio técnico do programa de estágio Aiko.
                    </p>
            <p>
                <Button variant="outline-success">Ver documentação</Button>
            </p>
        </Jumbotron>
    )
}