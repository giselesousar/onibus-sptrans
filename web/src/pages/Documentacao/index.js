import React from 'react';
import Detail from '../../layouts/Detail';
import {Container, Image, Col} from 'react-bootstrap';

export default function Documentacao(){

    const buscarLinhas = require("./assets/images/buscarlinhas-info.png");
    const buscarParadas = require("./assets/images/buscarparadas-info.png");
    const buscarCorredores = require("./assets/images/buscarcorredores-info.png");
    const buscaronibus = require("./assets/images/buscaronibus.png");
    const buscarparada = require("./assets/images/buscarparadas.png");
    const buscarprevisao = require("./assets/images/buscarprevisao.png");
    const comp1 = require("./assets/images/comp1.png");
    const comp2 = require("./assets/images/comp2.png");

    return(
        <Detail title="Documentação">
            <Container>
                <h3>Introdução</h3>
                <p> 
                    Esta aplicação foi desenvolvida para o desafio técnico do programa de estágio Aiko. O objetivo desta aplicação é prover para o usuário informações sobre os ônibus da cidade de São Paulo, como a posição dos veículos, paradas e outros. Para isso, as informações mostradas provêm da <a href="http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/">API Olho Vivo</a>.
                </p>
                <h3>Funcionalidades</h3>
                    <p>As funcionalidades da aplicação estão divididas em dois tópicos para melhor compreensão.</p>
                    <h4>Informações</h4>
                    <ul style={{
                        margin: 10
                    }}>
                        <li>Buscar por linhas: informando o número da linha ou o nome do terminal principal ou secundário neste campo, o usuário é direcionado para /linhas.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarLinhas}/>
                        <li>Buscar por paradas: informando o nome ou endereço da parada, o usuário é direcionado para /paradas, onde terá acesso a uma lista de paradas filtradas pela informação pela qual ele buscou. O usuária ainda será capaz de fazer um filtro na lista gerada digitando o nome ou edereço da parada no campo localizado acima da lista.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarParadas}/>
                        <li>Buscar por corredores: selecionando o corredor, o usuário é direcionado para /corredores, onde onde terá acesso à lista de todas as paradas compõem aquele corredor. O usuária ainda será capaz de fazer um filtro na lista gerada digitando o nome ou edereço da parada no campo localizado acima da lista.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarCorredores}/>
                    </ul>
                    <h4>Mapa</h4>
                    <ul style={{
                        margin: 10
                    }}>
                        <li>Buscar por ônibus: como mostrado na imagem abaixo, ao informar um valor válido do código de uma linha, todos os ônibus encontrados serão exibidos no mapa. O contador é iniciado e a cada 30 segundos a posição dos veículos é atualizada no mapa. O usuário também tem a opção de clicar no botão de atualizar para fazer a atualização antes dos 30 segundos ou clicar no botão de deletar para limpar a pesquisa. Clicando no ícone do ônibus no mapa, o ícone de acessibilidade estará presente se o ônibus for acessível para pessoas com deficiência. Algumas informações sobre a linha procurada e veículos encontrados é exibida logo acima do mapa.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscaronibus}/>
                        <li>Buscar por paradas: ao buscar pelo nome ou endereço da parada, as paradas correspondentes a esse filtro serão exibidas no mapa. Clicando no ícone da parada no mapa, será mostrado o nome da parada, se houver. O usuário também pode buscar paradas por linha ou corredor, clicando no botão "filtrar". Ao clicar em ocultar, as paradas serão ocultadas do mapa e clicando novamente serão exibidas. O botão deletar exclui a busca.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarparada}/>
                        <li>Calcular previsão de chegada: ao buscar pelo nome ou endereço da parada, as paradas correspondentes a esse filtro serão exibidas no mapa. Clicando no ícone da parada no mapa, será mostrado o nome da parada, se houver. O usuário também pode buscar paradas por linha ou corredor, clicando no botão "filtrar". Ao clicar em ocultar, as paradas serão ocultadas do mapa e clicando novamente serão exibidas. O botão deletar exclui a busca.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarprevisao}/>
                    </ul>
                <p></p>
                <h3>Componentização</h3>                
                <p>A seguir são detalhados os principais componentes da aplicação.</p>
                <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={comp1}/>
                <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={comp2}/>
                <h3>Tecnologias</h3>
                <p>Framework utilizado: <a href="https://reactjs.org/">React</a>.</p>
                <strong>Bibliotecas: </strong>
                <ul style={{
                    marginLeft: 30
                }}>
                    <li>react-bootstrap</li>
                    <li>react-icons</li>
                    <li>react-leaflet</li>
                    <li>react-router-dom</li>
                    <li>axios</li>
                </ul>
            </Container>
        </Detail>
    )
}