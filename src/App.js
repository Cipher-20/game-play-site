import { useState } from "react";
import { Route, Switch } from 'react-router-dom'

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
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" component={GameCatalog} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/details/:id" component={GameDetails} />
        </Switch>
      </main>

    </div>

  );
}

export default App;
