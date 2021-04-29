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
      showTitle: !this.state.showTitle,
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
          {/* {this.state.showTitle ? 
          <h1>
            Project Drinks Working Title
          </h1>
          : 
          <div class="container-fluid">
            <SearchBar handleChange={this.handleChange}/>
            <DrinksContainer recipes={this.state.selectedDrinks}/>
          </div>
          } */}
          <h1>Project Drinks Working Title</h1>
          <div class="container">
          <SearchBar handleChange={this.handleChange}/>
          <DrinksContainer recipes={this.state.selectedDrinks}/>
          </div>
          <button onClick={() => this.showDrinks()}> 
            Click Here to Get Started 
          </button>
        </header>
      </div>
    )
  }
}

export default App;
