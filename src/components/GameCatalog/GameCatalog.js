import { useEffect, useState } from 'react';

import * as gameServices from '../../services/gameServices'
import GameCard from './GameCard';

function GameCatalog() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameServices.getAll()
    .then(gameResult => {
      setGames(gameResult);
    })
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0
        ? games.map(game => <GameCard key={game._id} game={game}/>)
        :<h3 className="no-articles">No articles yet</h3>
        } 


    </section>
  );
};

export default GameCatalog;