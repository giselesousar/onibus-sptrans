import React from 'react';

import api from '../../services/api';
import Informacoes from './components/Informacoes';
import Mapa from './components/Mapa';
import './styles.css';
import Main from '../../layouts/Main';

export default function Home() {

    return (
        <Main>
            <div style={{
            width: "100%",
            margin: 0,
        }}>
                <Informacoes />
                <Mapa api={api} />
                </div>
        </Main>
    )
}