import './App.css';
import recipes from './Data.js'

import 'semantic-ui-css/semantic.min.css'
import DrinksContainer from './Containers/DrinksContainer';
import SearchBar from './Containers/SearchBar'
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showTitle: true,
      showButton: false,
      ingredientProvided: false,
      selectedDrinks: []
    }
  }

  showDrinks = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  startAgain = () => {
    this.setState({
      selectedDrinks: []
    })
  }

  handleChange = (e) => {
    let drinks = recipes.filter(recipe => recipe.liquor.includes(e.value))
    this.setState({
      selectedDrinks: drinks
    })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          {this.state.showTitle ? 
          <div class="container-fluid">
            <h1>Project Drinks Working Title</h1>
            <button onClick={() => this.showDrinks()}> 
              Click Here to Get Started 
            </button>
          </div>
          : 
          <div class="container-fluid">
            <SearchBar handleChange={this.handleChange}/>
            <DrinksContainer recipes={this.state.selectedDrinks}/>
            <button onClick={() => this.startAgain()}>
              Another Round!
            </button>
          </div>
          }
        </header>
      </div>
    )
  }
}

export default App;
