import { useEffect, useState } from 'react';

import * as gameServices from '../../services/gameServices'
import LatestGame from './LatestGame';
function WelcomeWorld({
    navigationChangeHandler
}) {

    const [games, setGame] = useState([]);

    useEffect(() => {
        gameServices.gameLatest()
            .then(result => {
                setGame(result);
            })
    }, []);
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.length > 0
                    ? games.map(game => <LatestGame key={game._id} game={game} navigationChangeHandler={navigationChangeHandler}/>)
                    : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    );
};

export default WelcomeWorld;