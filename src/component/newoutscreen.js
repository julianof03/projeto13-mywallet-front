import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function NewOutScreen(){
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const [disbleinput, SetDisbleinput] = useState('');
    const [loading, SetLoading] = useState(false);

    return(
    <Container> 
        <TopBar className="TopBar"> 
            <p>Nova Saída</p>
        </TopBar>
            <input disabled={disbleinput} type="email" placeholder="Valor"
                onChange={(e) => SetEmail(e.target.value)}
                value = {email}>
            </input>
            <input disabled={disbleinput} type="password" placeholder="Descrição"
                onChange={(e) => SetPassword(e.target.value)}
                value = {password}>
            </input>
            <Link to={"/listscreen"} style={{textDecoration:"none"}}>
                <Responde>
                    <p>Salvar Saída</p>
                </Responde>
            </Link>
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