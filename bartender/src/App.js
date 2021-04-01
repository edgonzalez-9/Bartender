import './App.css';
import recipes from './Data.js'

import 'semantic-ui-css/semantic.min.css'
import DrinksContainer from './Containers/DrinksContainer';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }

  

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Missing Ingredient</h1>
          <DrinksContainer recipes={recipes}/>
        </header>
      </div>
    )
  }
}

export default App;
