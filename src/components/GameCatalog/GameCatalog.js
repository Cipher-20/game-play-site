import { useEffect, useState} from 'react';

import GameCard from './GameCard';

function GameCatalog() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category')
      .then(res => res.json())
      .then(gameResult =>{
        setGames(gameResult);
      })
  },[]);

    return (
      <section id="catalog-page">
      <h1>All Games</h1>

      {games.map(game => <GameCard game={game}/>)}

      <h3 className="no-articles">No articles yet</h3>
    </section>
    );
};

export default GameCatalog;