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

    render(){
        let recipe = this.props.recipe

        return(
            <div class="drink-child">
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
