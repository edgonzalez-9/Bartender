import React from 'react';

function CardFront(props) {
    let recipe = props.recipe

    return(
        <div class="card" style={{width: `18rem`, height: `flex`}}>
            <img class="card-img-top" src={recipe.image} alt="..."/>
            <div class="card-body" style={{paddingBottom: `10px`}}>
                <h3 class="card-title">{recipe.name}</h3>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => props.handleClick()}>Show Recipe</button>
        </div>
    )
}

export default CardFront;
