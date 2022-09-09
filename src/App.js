import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import UserContext from "./contexts/UserContext";
import React from 'react';
import styled from 'styled-components';
import LoginScreen from './component/loginscreen';
import RegScreen from './component/regscreen';
import ListScreen from './component/listscreen';
import NewInScreen from './component/newinscreen';
import NewOutScreen from './component/newoutscreen';

export default function App() {

  const [stateaba, SetStateaba] = useState(false);
  const num = 10;
  const [regUsers, SetRegUsers] = useState([]);

  return (
    <UserContext.Provider value={{
      stateaba,   SetStateaba,
      num, regUsers, SetRegUsers
    }}>
      <Container>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}></Route>
                <Route path="/registerscreen" element={<RegScreen />}></Route>
                <Route path="/listscreen" element={<ListScreen />}></Route>
                <Route path="/newinscreen" element={<NewInScreen />}></Route>
                <Route path="/newoutscreen" element={<NewOutScreen />}></Route>
            </Routes>
          </BrowserRouter>
      </Container>
    </UserContext.Provider>
  );
}



const Container = styled.div`
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}`;
