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

  showDrinks = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          {this.state.showTitle ? 
          <h1>
            Project Drinks Working Title
          </h1>
          : 
          <DrinksContainer recipes={recipes}/>
          }
          <button onClick={() => this.showDrinks()}> 
            Click Here to Get Started 
          </button>
        </header>
      </div>
    )
  }
}

export default App;
