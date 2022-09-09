import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function RegScreen(){
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [spassword, SetSPassword] = useState('');
    const { num, regUsers, SetRegUsers } = useContext(UserContext);
    const navigate = useNavigate();


    function SubForm(event){
        event.preventDefault();
        console.log(regUsers);
        if(password === spassword){
            let newarr = {
                name,
                email,
                password,
            }  
            SetRegUsers(newarr);
            console.log(regUsers);
            navigate('/');
            return
        }
        
        window.alert("Senha incopativeis");
        SetName('');
        SetEmail('');
        SetPassword('');
        SetSPassword('');
    }
    function LogIn(event){
        event.preventDefault();
        const dados = { 
            name,
            email,
            password, };
        const requisicao = axios.post("http://localhost:5000/register", dados);
        requisicao.then(console.log('deucerto'));
        requisicao.catch(console.log('deunao')); 
    }
    
    return(
    <Container> 
        <div className="logoBox"> 
            <p>MyWallet</p>
        </div>
        <form className="loginBox">
            <input type="name" placeholder="Nome"
                onChange={(e) => SetName(e.target.value)}>
            </input>
            <input type="email" placeholder="E-mail"
                onChange={(e) => SetEmail(e.target.value)}>
            </input>
            <input type="password" placeholder="Senha"
                onChange={(e) => SetPassword(e.target.value)}>
            </input>
            <input type="password" placeholder="Confirme a senha"
                onChange={(e) => SetSPassword(e.target.value)}>
            </input>
            <button  onClick={LogIn}>
                <p>Cadastrar</p>
            </button>
        </form> 
            <Link to={"/"} style={{textDecoration:"none"}}><p className="linkCadastro">Já tem uma conta? Entre agora!</p></Link>     
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