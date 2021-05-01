import React from 'react';

class DrinkCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flipCard: true
        }
    }

    handleFlip = () => {
        this.setState({
            flipCard: !this.state.flipCard
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
        return(
            <div class="card border-light mb-3; w-25" >
                {this.state.flipCard ?
                <div>
                    <img src={this.props.recipe.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title"> {this.props.recipe.name}</h3>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.handleFlip()}>See Ingredients</button>
                </div>
                :
                <div>
                    <div class="card-body">
                        <p class="card-text"> {this.props.recipe.ingredients}</p>
                        <p class="card-text"> {this.props.recipe.instructions}</p>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.handleFlip()}>See Picture</button>
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