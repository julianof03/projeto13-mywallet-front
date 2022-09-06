import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import LoginScreen from './source/loginscreen';
// import UserContext from "./contexts/UserContext";


export default function App() {

  const [stateaba, SetStateaba] = useState(false);

  const weekday = [
    {
        dayname: 'D',
        daynumber: 0
    },
    {
        dayname: 'S',
        daynumber: 1
    },
    {
        dayname: 'T',
        daynumber: 2
    },
    {
        dayname: 'Q',
        daynumber: 3
    },
    {
        dayname: 'Q',
        daynumber: 4
    },
    {
        dayname: 'S',
        daynumber: 5
    },
    {
        dayname: 'S',
        daynumber: 6
    }
    
]

  return (
    <UserContext.Provider value={{
      stateaba,   SetStateaba,
      }}>
  <Container>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginScreen />}></Route>
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

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
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