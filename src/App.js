import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame"
import GameDetails from "./components/GameDetails"
import GameCatalog from "./components/GameCatalog"

function App() {
  const router = {
    '/home':WelcomeWorld,
    '/login':Login,
    '/register':Register,
    '/create-game':CreateGame,
    '/editGame':EditGame,
    '/gameDetails':GameDetails,
    '/games':GameCatalog,

  }
  return (
    <div id="box">
    <Header />

      <main id="main-content">
      <WelcomeWorld />
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
