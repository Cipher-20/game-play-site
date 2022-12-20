import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'

import * as authService from './services/authServices';

import Header from "./components/Header/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import EditGame from "./components/EditGame/EditGame"
import GameDetails from "./components/GameDetails/GameDetails"
import GameCatalog from "./components/GameCatalog/GameCatalog"
import ErrorPage from "./components/ErrorPage"



function App() { 

  const [emailInfo, setEmailInfo] =useState({isAuthenticated: false, email: ''});

  useEffect(() =>{
    let email = authService.getUser();

    setEmailInfo({
      isAuthenticated: Boolean(email),
      email
    });

  },[]);


  const onLogin = (email) =>{
    setEmailInfo({
      isAuthenticated: true,
      email: email
    })
  }

  const onLogout = () =>{
    setEmailInfo({
      isAuthenticated: false,
      email: ''
    })
  }
  


  return (
    <div id="box">
      <Header {...emailInfo}/>

      <main id="main-content">
        <Routes>
          <Route path="/" exact element={<WelcomeWorld />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path='/logout' element={<Logout onLogout={onLogout} />} />
          <Route path="/details/:id" element={<GameDetails />} />
        </Routes>
      </main>

    </div>

  );
}

export default App;
