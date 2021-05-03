import React from 'react';

function CardBack(props) {
    let recipe = props.recipe
    return(
        <div>
            <div class="card-body">
                <p class="card-text"> {recipe.ingredients} </p>
                <p class="card-text"> {recipe.instructions} </p>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => props.handleFlip()}>See Image</button>
        </div>
    )
}

export default CardBack;