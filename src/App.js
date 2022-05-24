import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame"
import GameDetails from "./components/GameDetails"
import GameCatalog from "./components/GameCatalog/GameCatalog"
import ErrorPage from "./components/ErrorPage"

function App() {
  const routes = {
    '/home': <WelcomeWorld />,
    '/login': <Login />,
    '/register': <Register />,
    '/create-game': <CreateGame />,
    '/editGame': <EditGame />,
    '/gameDetails': <GameDetails />,
    '/games': <GameCatalog />,

  }

  const [page, setPage] = useState('/home')

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {routes[page] || <ErrorPage />}
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
