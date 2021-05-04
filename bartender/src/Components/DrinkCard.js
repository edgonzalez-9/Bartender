import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';

class DrinkCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardFront: true
        }
    }

    handleClick = () => {
        this.setState({
            cardFront: !this.state.cardFront
        })
    }

    // render(){
    //     return(
    //         <div class="card border-light mb-3; w-25" >
    //             <img src={this.props.recipe.image} class="card-img-top" alt="..." />
    //             <div class="card-body">
    //                 <h3 class="card-title"> {this.props.recipe.name}</h3>
    //                 <p class="card-text"> {this.props.recipe.ingredients}</p>
    //                 <p class="card-text"> {this.props.recipe.instructions}</p>
    //             </div>
    //         </div>
    //     )
    // }

    render(){
        let recipe = this.props.recipe

        return(
            <div>
                {this.state.cardFront ? 
                    <CardFront recipe={recipe} handleClick={() => this.handleClick()}/>
                :
                    <CardBack recipe={recipe} handleClick={() => this.handleClick()}/>
                }
            </div>
        )
    }
}


export default DrinkCard;
