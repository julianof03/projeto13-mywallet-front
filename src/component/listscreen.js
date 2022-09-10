import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function ListScreen() {
    const [list, SetList] = useState([]);
    const listarr = {
        day: "03/03",
        text: "almoço com a mamãe",
        type: "in",
        amount: "2000"
    };
    let soma = 0;
    function refreshList(){
        let conta = 2;
        const requisicao = axios.get("http://localhost:5000/listscreen");
        requisicao.then(resposta => {
            SetList(resposta.data);
		})
        list.map((e)=> {
            let num = parseFloat(e.amount)
            console.log(num);
            conta += num;
            console.log(conta)});
        soma = conta;
    }
    
    return (
        <Container>
            <TopBar placeholder="topbar">
                <p>Ola, ({soma})</p>
                <button onClick={refreshList}></button>
            </TopBar>
            <List>
                <p className="listitem">{list.map((e) =>
                    <div className="singleItem">
                        <div><p className="day">{e.day}</p> <p>{e.text}</p></div>
                        <p className={e.type}>{e.amount}</p>
                    </div>
                )}</p>
            </List>
            <Buttons>
                <Link to={"/newinscreen"} style={{ textDecoration: "none" }}>
                    <div>
                        <p>+</p>
                        <p>Nova<br />entrada</p>
                    </div>
                </Link>
                <Link to={"/newoutscreen"} style={{ textDecoration: "none" }}>
                    <div >
                        <p>-</p>
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

const List = styled.div`
    display: flex;
    width: 326px;
    min-height:440px;
    max-height: 440px;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    border-radius:5px;
    font-family: 'Raleway', sans-serif;
    overflow-y:scroll;
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
            justify-content:space-evenly;
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
        background-color: white;
        width:23px;
        height:24px;
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
`;