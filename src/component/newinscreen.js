import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import "@fontsource/saira-stencil-one";


export default function NewInScreen(){
    const [valor, SetValor] = useState([]);
    const [text, SetText] = useState([]);
    const navigate = useNavigate();

    function AddList(event){
        event.preventDefault();
            const dados = { 
                valor,
                text, 
            }; 
            const requisicao = axios.post("http://localhost:5000/newinscreen", dados);
            requisicao.then(certo);
            requisicao.catch(errado); 
    }
    function certo(){
        navigate('/listscreen');
    }
    function errado(){
        alert('algo deu errado :(');
    }
    return(
    <Container> 
        <TopBar className="TopBar"> 
            <p>Nova Entrada</p>
        </TopBar>
            <input type="number" placeholder="Valor"
                onChange={(e) => SetValor(e.target.value)}
                value = {valor}>
            </input>
            <input type="text" placeholder="Descrição"
                onChange={(e) => SetText(e.target.value)}
                value = {text}>
            </input>
            <Responde onClick={AddList}>
                    <p>Salvar Entrada</p>
            </Responde>
    </Container>);
}
const Container = styled.div`
width: 375px;
height: 597px;
background-color: #8c11be;
border-radius:2px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

input{
    width:293px;
    height: 45px;
    padding-left:10px;
    font-size:19px;
    color: #D4D4D4;
    border-radius: 5px; 
    border-width: 1px;
    border-style: solid;
    border-color: #D4D4D4;
    margin-bottom: 13px;
}

`;
const Responde = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:309px;
    height: 45px;
    font-size:20px;
    font-weight:700;
    color: #ffffff;
    font-family:'Raleway', sans-serif;
    background-color: #a328b6;
    border-radius: 5px; 
    border-width: 0px;
    border-style: solid;
    p{
        display:${({loading})=> {
        if(loading){
            return("none");
            }
            else{
                return("flex");}
            }}};
`;

const TopBar = styled.div`
    margin-top: 20px;
    margin-bottom:20px;
    width: 308px;
    height: 50px;
    font-size: 26px;
    font-weight:700;
    font-family:'Raleway', sans-serif;
    color: white;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`;