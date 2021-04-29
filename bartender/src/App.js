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
      selectedDrinks: [],
      anotherRound: false
    }
  }

  showDrinks = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  startAgain = () => {
    this.setState({
      selectedDrinks: [],
      anotherRound: !this.state.anotherRound
    })
  }

  handleChange = (e) => {
    let drinks = recipes.filter(recipe => recipe.liquor.includes(e.value))
    this.setState({
      selectedDrinks: drinks,
      anotherRound: !this.state.anotherRound
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
            <h1>Project Drinks Working Title</h1>
            <SearchBar handleChange={this.handleChange}/>
            <DrinksContainer recipes={this.state.selectedDrinks}/>
            {this.state.anotherRound ?
              <button onClick={() => this.startAgain()}>
                Another Round!
              </button>
              :
              <div>
                
              </div>
            }
          </div>
          }
        </header>
      </div>
    )
  }
}

export default App;
