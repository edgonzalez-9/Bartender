import React from 'react';
import DrinkCard from '../Components/DrinkCard';

function DrinksContainer(props){
    return(
        <div>
            {props.recipes.map(recipe => <DrinkCard recipe={recipe}/>)}
        </div>
    )
}

export default DrinksContainer;