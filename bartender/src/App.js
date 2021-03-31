import logo from './logo.svg';
import './App.css';
import recipes from './Data.js'

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Missing Ingredient</h1>
        {recipes.map(recipe => 
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
          )}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
