import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as gameServices from '../services/gameServices'

function GameDetails({
  match
}) {

  let id = match.params.id
  const [game,setGame] = useState({});

  useEffect(() =>{
    gameServices.getOne(id)
      .then(result => {
        setGame(result)
      })
  },[])

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />

            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>

          <p className="text">{game.summary}</p>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            <p className="no-comment">No comments.</p>
          </div>

          <div className="buttons">
            <Link to="#" className="button">Edit</Link>
            <Link to="#" className="button">Delete</Link>
          </div>
        </div>

        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>

      </section>
    );
};

export default GameDetails;