import { useState } from "react";
import { Route, Routes } from 'react-router-dom'


import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import EditGame from "./components/EditGame/EditGame"
import GameDetails from "./components/GameDetails/GameDetails"
import GameCatalog from "./components/GameCatalog/GameCatalog"
import ErrorPage from "./components/ErrorPage"



function App() { 
  return (

    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" exact element={<WelcomeWorld />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<GameDetails />} />
        </Routes>
      </main>

    </div>

  );
}

export default App;
