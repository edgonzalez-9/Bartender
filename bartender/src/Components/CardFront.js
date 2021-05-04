import React from 'react';

function CardFront(props) {
    let recipe = props.recipe
    return(
        <div class="card border-light mb-3; w-25">
            <img src={recipe.image} class="card-img-top" alt=""/>
            <div class="card-body">
                <h3 class="card-title"> {recipe.name} </h3>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => props.handleFlip()}> See Recipe </button>
        </div>
    )
}

export default CardFront;