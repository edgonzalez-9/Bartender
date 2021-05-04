import React from 'react';

function CardBack(props) {
    let recipe = props.recipe
    return(
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
                            <button type="button" class="btn btn-primary" onClick={() => props.handleClick()}>Hide Recipe</button>
                        </div>
                    </div>
    )
}

export default CardBack;