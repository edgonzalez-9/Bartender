import logo from './logo.svg';
import './App.css';
import recipe from './Data.js'

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={recipe.image[0]} className="App-logo" alt="logo" />
        <p>
          {recipe.name[0]}
        </p>
        <p>
          {recipe.ingredients[0]}
        </p>
        <p>
          {recipe.recipe[0]}
        </p>
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
