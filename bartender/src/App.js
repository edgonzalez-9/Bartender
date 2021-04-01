import './App.css';
import recipes from './Data.js'

import 'semantic-ui-css/semantic.min.css'
import DrinksContainer from './Containers/DrinksContainer';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showTitle: true,
      showButton: false
    }
  }



  render(){
    return(
      <div className="App">
        <header className="App-header">
          {this.showTitle ? 
          <h1>
            Project Drinks Working Title
          </h1>
          : 
          <DrinksContainer recipes={recipes}/>
          }
        </header>
      </div>
    )
  }
}

export default App;
