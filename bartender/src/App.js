import logo from './logo.svg';
import './App.css';
import recipes from './Data.js'

import 'semantic-ui-css/semantic.min.css'
import DrinksContainer from './Containers/DrinksContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Missing Ingredient</h1>
        <DrinksContainer recipes={recipes}/>
        {/* {recipes.map(recipe => 
          <div>
            <img src={recipe.image} className="App-logo" alt="logo" />
            <p>
              {recipe.name}
            </p>
            <p>
              Ingredients - {recipe.ingredients}
            </p>
            <p>
              Instructions - {recipe.instructions}
            </p>
          </div>
          )} */}
      </header>
    </div>
  );
}

export default App;
