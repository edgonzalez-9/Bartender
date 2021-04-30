import React from 'react';

const DrinkCard = props => {

    // let recipe = props.recipe

    return(
        <div class="card border-light mb-3; w-25" >
            <img src={props.recipe.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3 class="card-title"> {props.recipe.name}</h3>
                <p class="card-text"> {props.recipe.ingredients}</p>
                <p class="card-text"> {props.recipe.instructions}</p>
            </div>
        </div>
    )
}

export default DrinkCard;