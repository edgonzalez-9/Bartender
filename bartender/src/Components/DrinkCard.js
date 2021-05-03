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

    handleFlip = () => {
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
            <div class="card border-light mb-3; w-25">
                {this.state.cardFront ? 
                    <CardFront recipe={recipe} handleFlip={() => this.handleFlip()}/>
                :
                <div>
                    <CardFront recipe={recipe} handleFlip={() => this.handleFlip()}/>
                    <CardBack recipe={recipe} handleFlip={() => this.handleFlip()}/>
                </div>
                }
            </div>
        )
    }
}


export default DrinkCard;


// const DrinkCard = props => {

//     return(
//         <div class="card border-light mb-3; w-25" >
//             <img src={props.recipe.image} class="card-img-top" alt="..." />
//             <div class="card-body">
//                 <h3 class="card-title"> {props.recipe.name}</h3>
//                 <p class="card-text"> {props.recipe.ingredients}</p>
//                 <p class="card-text"> {props.recipe.instructions}</p>
//             </div>
//         </div>
//     )
// }