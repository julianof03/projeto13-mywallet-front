import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function ListScreen() {

    const [list, SetList] = useState([]);
    const [numz, SetNumZ] = useState(0)

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    let soma = 0;

    useEffect(() => {

        const config = { headers: { Autorization: `Bearer ${user.token}` } }

        const requisicao = axios.get("http://localhost:5000/listscreen", config);
        requisicao.then(resposta => {

            SetList(resposta.data);
            resposta.data.map((e) => {
                let num = parseFloat(e.amount)
                if (e.type === "in") {
                    soma = soma + num;
                } else {
                    soma = soma - num;
                }
            })
            SetNumZ((soma / 2).toFixed(2));
        })
    }, []);


    function LogOf() {
        let confirm = window.confirm("deseja mesmo sair?")
        if (confirm) {
            navigate('/')
        }
        else {
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
                    <Saldo numz={numz}>{numz}</Saldo>
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
        </Container>
    );
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

        font-size:19px;
        color: #D4D4D4;

        border-radius: 5px; 
        border-width: 1px;
        border-style: solid;
        border-color: #D4D4D4;

        margin-bottom: 6px;
        padding-left:10px;
    }

    .linkCadastro{
        color:#ffffff;
    }
`;

const TopBar = styled.div`
    width:325px;
    font-size: 26px;

    color: #ffffff; 
    font-weight: bold;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;

    button{
        width:23px;
        height:24px;

        font-size:25px;
        color:white;

        background-color: #8c11be;

        border-style:none;   
    }
`;

const List = styled.div`  

    width: 326px;
    min-height:390px;
    max-height: 390px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    overflow-y:scroll;

    background-color: #ffffff;
    font-family: 'Raleway', sans-serif;

    border-radius:5px;
    padding-bottom:50px;

    position:relative;

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
            margin-left:15px;

            display:flex;
            align-items:center;
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
        bottom:-6px;
        right:16px;

        font-family: 'Raleway', sans-serif;
        font-weight:bold; 

        position:absolute;

        color: ${(props) => {
        if (parseFloat(props.numz) > 0) {
            return ('red');

        } else {
            return ('#f7c52b');
        }
    }};
    }
`;

const Buttons = styled.div`
    width: 326px;
    margin-top:13px;

    display:flex;
    justify-content: space-between;

    div{
        width: 136px;
        height: 114px;

        padding-left:20px;

        font-weight:700;
        font-size: 17px;
        color: #ffffff;
        font-family: 'Raleway', sans-serif;

        display:flex;
        flex-direction:column;
        justify-content:center;

        border-radius: 5px;
        background-color: #A328D6;
        
    }

    ion-icon{
        font-size:25px;
    }
`;

const Saldo = styled.div`
    bottom:10px;
    right:16px;

    position:absolute;
    
    font-family: 'Raleway', sans-serif;
    font-weight:bold; 
    color: ${(props) => {
        if (parseFloat(props.numz) >= 0) {
            return ('#03AC00');

        } else {
            return ('#C70000');
        }
    }};
`;

const SaldoBar = styled.div`
    height:35px;
    width:310px;

    bottom:-41px;
    left:5px;

    padding-bottom:15px;
    border-radius:5px;

    background-color:white;
    position:absolute;

    .saldo{
            bottom:-6px;
            left:16px;
            font-family: 'Raleway', sans-serif;
            font-weight:bold;
            position:absolute;
        }
`;

const Wrapper = styled.div`
    width: 326px;

    min-height:399px;
    max-height: 390px;

    margin-bottom:40px;

    position:relative;
`;