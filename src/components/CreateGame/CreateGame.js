import * as gameServices from '../../services/gameServices';


function CreateGame() {

  const onSubmitHandler = (e) => {
    e.preventDefault();


    let formData = new FormData(e.currentTarget);

    let title = formData.get('title');
    let category = formData.get('category');
    let maxLevel = formData.get('maxLevel');
    let imageUrl = formData.get('imageUrl');
    let summary = formData.get('summary');

    gameServices.gameCreate({
      title,
      category,
      maxLevel,
      imageUrl,
      summary
    })
  }

  return (
    <section id="create-page" className="auth">
      <form id="create" method='POST' onSubmit={onSubmitHandler}>
        <div className="container">

          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" placeholder="Enter game title..." />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" placeholder="Enter game category..." />

          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};

export default CreateGame;