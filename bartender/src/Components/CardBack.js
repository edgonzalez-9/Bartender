import React from 'react';

function CardBack(props) {
    let recipe = props.recipe

    return(
        <div class="card mb-3" style={{width: `600px`, height: `300px`}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={recipe.image} alt="..." style={{maxWidth: `200px`}}/>
                    <h5 class="card-title">{recipe.name}</h5>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">{recipe.ingredients}</p>
                        <p class="card-text">{recipe.instructions}</p>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => props.handleClick()}>Hide Recipe</button>
                </div>
            </div>
        </div>
    )

}

export default CardBack;