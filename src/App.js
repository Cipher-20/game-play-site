import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame"
import GameDetails from "./components/GameDetails"
import GameCatalog from "./components/GameCatalog/GameCatalog"
import ErrorPage from "./components/ErrorPage"



function App() {
  const [page, setPage] = useState('/home')
  
  const navigationChangeHandler = (path) => {
    setPage(path);
  }
  
  const router = (path) =>{

    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
      'login': <Login />,
      'register': <Register />,
      'create-game': <CreateGame />,
      'editGame': <EditGame />,
      'details': <GameDetails id={argument} />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler}/>,
  
    };


    return routes[rootPath];
  }

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {router(page) || <ErrorPage />}
        {/* <Login />
      <Register />
      <CreateGame />
      <EditGame />
      <GameDetails />
      <GameCatalog /> */}

      </main>

    </div>

  );
}

export default App;
