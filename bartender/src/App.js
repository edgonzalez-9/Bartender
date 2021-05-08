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
      anotherRound: false,
      drinkSelected: false,
      currentLiquor: '',
      showAll: false
    }
  }

  showSearchBar = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  showAll = () => {
    this.setState({
      selectedDrinks: recipes,
      showAll: !this.state.showAll
    })
  }

  hideAll = () => {
    this.setState({
      selectedDrinks: [],
      showAll: !this.state.showAll
    })
  }

  startAgain = () => {
    this.setState({
      selectedDrinks: [],
      anotherRound: !this.state.anotherRound,
      drinkSelected: !this.state.drinkSelected
    })
  }

  handleChange = (e) => {
    let drinks = recipes.filter(recipe => recipe.liquor.includes(e.label))
    this.setState({
      selectedDrinks: drinks,
      anotherRound: !this.state.anotherRound,
      drinkSelected: !this.state.drinkSelected,
      currentLiquor: e.label
    })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Project Drinks Working Title</h1>
          {this.state.showTitle ? 
          <div class="container-fluid">
            <button type="button" class="btn btn-outline-primary" onClick={() => this.showSearchBar()}> Click Here to Get Started </button>
          </div>
          : 
          <div class="container-fluid">
            {this.state.drinkSelected ?
              <div>
                <h2>{this.state.currentLiquor}</h2>
              </div>
            :
              <div>
                <SearchBar handleChange={this.handleChange} showAll={this.showAll}recipes={recipes}/>
                {this.state.showAll ?
                  <div style={{paddingTop: `10px`}}>
                    <button type="button" class="btn btn-outline-primary" onClick={() => this.hideAll()} > Hide All </button>
                  </div>
                :
                  <div style={{paddingTop: `10px`}}>
                    <button type="button" class="btn btn-outline-primary" onClick={() => this.showAll()} > Show All </button>
                  </div>
                }
              </div>
            }
            <DrinksContainer recipes={this.state.selectedDrinks}/>
            {this.state.anotherRound ?
              <button type="button" class="btn btn-outline-primary" onClick={() => this.startAgain()}> Another Round! </button>
              :
              <div></div>
            }
          </div>
          }
        </header>
      </div>
    )
  }
}

export default App;

// class function (

// )