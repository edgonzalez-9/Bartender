import React from 'react';

function CardBack(props) {
    let recipe = props.recipe

    return(
        <div class="card mb-3" style={{width: `600px`, height: `flex`}}>
            <div class="row g-0">
                <div class="col-md-4" style={{paddingBottom: `10px`}}>
                    <img src={recipe.image} alt="..." style={{maxWidth: `200px`}}/>
                    <h3 class="card-title">{recipe.name}</h3>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">Ingredients</h3>
                        <ul style={{textAlign: `left`}}>
                            {recipe.ingredients.map(ingredient => <li class="drink-list" style={{fontSize: `medium`}}>{ingredient}</li>)} 
                        </ul> 
                        <h3 class="card-title">Instructions</h3>
                        <ul style={{textAlign: `left`}}>
                            {recipe.instructions.map(instruction => <li class="drink-list" style={{fontSize: `medium`}}>{instruction}</li>)}
                        </ul>
                    </div>
                </div>
                <button type="button" class="btn btn-dark" onClick={() => props.handleClick()}>Hide Recipe</button>
            </div>
        </div>
    )

}

export default CardBack;