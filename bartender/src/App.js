import logo from './logo.svg';
import './App.css';
import recipe from './Data.js'

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={recipe[0].image} className="App-logo" alt="logo" />
        <p>
          {recipe[0].name}
        </p>
        <p>
          {recipe[0].ingredients}
        </p>
        <p>
          {recipe[0].recipe}
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
