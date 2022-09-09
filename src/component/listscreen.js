import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import "@fontsource/saira-stencil-one";


export default function ListScreen(){
    const [name, SetName] = useState([]);
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const [spassword, SetSPassword] = useState([]);
    const [disbleinput, SetDisbleinput] = useState('');
    const [loading, SetLoading] = useState(false);

    return(
    <Container> 
        <TopBar placeholder="topbar">
                <p>Ola, (nome aqui)</p>
                <button></button>
        </TopBar>
        <List placeholder="list">
                <div></div>
        </List>
        <Buttons>
            <Link to={"/newinscreen"} style={{textDecoration:"none"}}>
                <div>
                    <p>+</p>
                    <p>Nova<br />entrada</p>
                </div>
            </Link>
            <Link to={"/newoutscreen"} style={{textDecoration:"none"}}>
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
    div{
        display: flex;
        width: 326px;
        height: 446px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;
        border-radius:5px;
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