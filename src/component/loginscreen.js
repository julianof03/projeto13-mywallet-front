import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function LoginScreen(){
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const [disbleinput, SetDisbleinput] = useState('');
    const [loading, SetLoading] = useState(false);

    return(
    <Container> 
        <div className="logoBox"> 
        <p>MyWallet</p>
        </div>
        <form className="loginBox">
            <input disabled={disbleinput} type="email" placeholder="email"
                onChange={(e) => SetEmail(e.target.value)}
                value = {email}>
            </input>
            <input disabled={disbleinput} type="password" placeholder="senha"
                onChange={(e) => SetPassword(e.target.value)}
                value = {password}>
            </input>
            <Responde onClick={''} loading = {loading}>
                <p>Entrar</p>
            </Responde>
        </form> 
            <Link to={"/cadastro"} style={{textDecoration:"none"}}><p className="linkCadastro">Primeira vez? Cadastre-se!</p></Link>     
    </Container>);
}
const Container = styled.div`
width: 375px;
height: 597px;
background-color: #8c11be;
border-color: #D4D4D4;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-top:60px;
img{
    width: 180px;
    height:180px;
}
.loginBox{
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.logoBox{
    margin-top: 70px;
    margin-bottom:40px;
    width: 147px;
    height: 50px;
    font-size: 32px;
    font-family: "Saira Stencil One";
    color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
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
    margin-bottom: 6px;
}

.linkCadastro{
    color:#ffffff;
}
`;
const Responde = styled.div`
display:flex;
align-items:center;
justify-content:center;
    width:309px;
    height: 45px;
    font-size:28px;
    color: #ffffff;
    background-color: #a328b6;
    border-radius: 5px; 
    border-width: 0px;
    border-style: solid;
    margin-bottom: 6px;
    p{
        display:${({loading})=> {
        if(loading){
            return("none");
            }
            else{
                return("flex");}
            }}};
`;