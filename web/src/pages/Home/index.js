import React from 'react';

import api from '../../services/api';
import Informacoes from './components/Informacoes';
import Mapa from './components/Mapa';
import './styles.css';

export default function Home() {

    return (
        <div fluid style={{
        }}>
            <Informacoes />
            <Mapa api={api} />
        </div>
    )
}