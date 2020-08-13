import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import './styles.css';

export default function Home() {

    return (
        <div fluid style={{
        }}>
            <Section1 />
            <Section2 api={api} />
        </div>
    )
}