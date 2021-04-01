import React from 'react';

const DrinkCard = props => {
    return(
        <div>
            <img src={props.recipe.image} className="App-logo" alt="logo" />
            <p>
                {props.recipe.name}
            </p>
            <p>
                Ingredients - {props.recipe.ingredients}
            </p>
            <p>
                Instructions - {props.recipe.instructions}
            </p>
        </div>
    )
}

export default DrinkCard;