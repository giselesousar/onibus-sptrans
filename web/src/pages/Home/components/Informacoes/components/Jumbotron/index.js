import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function JumbotronComponent(){
    const history = useHistory();
    return(
        <Jumbotron>
            <h1>
                    Desafio Aiko - Frontend
                    </h1>
                <p>
                    Aplicação desenvolvida para o desafio técnico do programa de estágio Aiko.
                    </p>
            <p>
                <Button variant="outline-success" onClick={() => {
                    history.push("/documentacao")
                }}>Ver documentação</Button>
            </p>
        </Jumbotron>
    )
}