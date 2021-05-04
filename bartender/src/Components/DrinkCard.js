import React from 'react';

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
                    <div class="card border-light mb-3; w-25">
                        <img src={recipe.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h3 class="card-title">{recipe.name}</h3>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={() => this.handleClick()}>Show Recipe</button>
                    </div>
                :
                    <div class="drink-container">
                        <div class="card border-light mb-3; w-25">
                            <img src={recipe.image} class="card-img-top" alt ="..."/>
                            <div class="card-body">
                                <h3 class="card-title">{recipe.name}</h3>
                            </div>
                        </div>
                        <div class="card border-light mb-3; w-25">
                            <div class="card-body">
                                <p class="card-text">{recipe.ingredients}</p>
                                <p class="card-text">{recipe.instructions}</p>
                            </div>
                            <button type="button" class="btn btn-primary" onClick={() => this.handleClick()}>Hide Recipe</button>
                        </div>
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