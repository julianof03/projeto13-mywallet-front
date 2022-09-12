import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function ListScreen() {
    const [list, SetList] = useState([]);
    const [userName, SetUseName] = useState('')
    const [numz, SetNumZ] = useState(0)
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    let soma = 0;
    useEffect(() => {

        const config = {headers:{Autorization:`Bearer ${user.token}`}}
		const requisicao = axios.get("http://localhost:5000/listscreen", config);
        requisicao.then(resposta => {

            SetList(resposta.data);
            SetUseName(resposta.data[0].User)

            resposta.data.map((e)=> { 
                let num = parseFloat(e.amount)
                if(e.type ===  "in"){
                    soma = soma + num;
                }else{
                    soma = soma - num;
                }
                })
                    SetNumZ(soma/2);   
		    }) 
	}, []);

    function LogOf(){
        let confirm = window.confirm("deseja mesmo sair?")
        if(confirm){
            navigate('/') 
        }
        else{  
        }   
    }
    
    return (
        <Container>
            <TopBar placeholder="topbar">
                <p>Ola, {user.name}</p>
                <button onClick={LogOf}><ion-icon name="log-out-outline"></ion-icon></button>
            </TopBar>
            <Wrapper>     
                <List>
                <p className="listitem">{list.map((e) =>
                    <div className="singleItem">
                        <div><p className="day">{e.day.replace(':', '/')}</p> <p>{e.text}</p></div>
                        <p className={e.type}>{e.amount}</p>
                    </div>
                )}</p>
            </List>
            <SaldoBar>
                    <p className="saldo">Saldo</p>
                    <Saldo numz = {numz}>{numz}</Saldo>
                </SaldoBar>
            </Wrapper>
            
            <Buttons>
                <Link to={"/newinscreen"} style={{ textDecoration: "none" }}>
                    <div>
                        <p><ion-icon name="add-circle-outline"></ion-icon></p>
                        <p>Nova<br />entrada</p>
                    </div>
                </Link>
                <Link to={"/newoutscreen"} style={{ textDecoration: "none" }}>
                    <div >
                        <p><ion-icon name="remove-circle-outline"></ion-icon></p>
                        <p>Nova<br /> saída</p>
                    </div>
                </Link>
            </Buttons>
        </Container>);
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8c11be;
    border-color: #D4D4D4;
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
        margin-bottom: 6px;
    }

    .linkCadastro{
        color:#ffffff;
    }
`;

const TopBar = styled.div`
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    display:flex;
    flex-direction:row;
    align-items:center;
    width:325px;
    justify-content: space-between;
    button{
        background-color: #8c11be;
        border-style:none;
        font-size:25px;
        color:white;
        width:23px;
        height:24px;
    }
`;
const List = styled.div`
    display: flex;
    position:relative;
    width: 326px;
    min-height:390px;
    max-height: 390px;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    border-radius:5px;
    font-family: 'Raleway', sans-serif;
    overflow-y:scroll;
    padding-bottom:50px;
    .singleItem{
        width:320px;
        height:40px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        p{
            margin-right:10px;
        }
        div{
            width:250px;
            display:flex;
            align-items:center;
            margin-left:15px;
            justify-content:flex-start;
        }
        .day{
            color:#C6C6C6;
        }
        .in{
            color:#03AC00;
        }
        .out{
            color:#C70000;
        }
    }
    .status{
        display:none;
    }
    .numSaldo{
        position:absolute;
        bottom:-6px;
        right:16px;
        font-family: 'Raleway', sans-serif;
        font-weight:bold; 
        color: ${(props) => {
        if(parseFloat(props.numz) > 0)
        {
            return('red');
           
        }else{
            return('#f7c52b');
        }
        } };
    }
`;


const Buttons = styled.div`
    display:flex;
    margin-top:13px;
    justify-content: space-between;
    width: 326px;
    div{
        font-family: 'Raleway', sans-serif;
        font-weight:700;
        font-size: 17px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        color: #ffffff;
        border-radius: 5px;
        background-color: #A328D6;
        width: 136px;
        height: 114px;
        padding-left:20px;
    }
    ion-icon{
        font-size:25px;
    }
`;
const Saldo = styled.div`
    position:absolute;
    bottom:10px;
    right:16px;
    font-family: 'Raleway', sans-serif;
    font-weight:bold; 
    color: ${(props) => {
    if(parseFloat(props.numz) >= 0)
    {
        return('#03AC00');
           
    }else{
        return('#C70000');
    }
    } };
`;
const SaldoBar = styled.div`
position:absolute;
bottom:-41px;
left:5px;
height:35px;
padding-bottom:15px;
border-radius:5px;
width:310px;
background-color:white;
.saldo{
        position:absolute;
        bottom:-6px;
        left:16px;
        font-family: 'Raleway', sans-serif;
        font-weight:bold;
    }
`;
const Wrapper = styled.div`
margin-bottom:40px;
background-color:blue;
    position:relative;
    width: 326px;
    min-height:399px;
    max-height: 390px;
`;