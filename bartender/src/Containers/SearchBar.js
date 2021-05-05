import React from 'react';
import Select from 'react-select'

function myComponent(props) {

    // let recipes = props.recipes

    const options = [
        {label: 'Tequila'},
        {label: 'Rum'},
        {label: 'Gin'},
        {label: 'Crown Royal'},
        {label: 'Bourbon'},
        {label: 'Peach Schnapps'},
        {label: 'Crème de Cassis'}
    ]

    // let options = [];

    // options = recipes.ingredients.map(ingredient => label: ingredient)

    return(
        <div>
            <h3> Select Your Liquor </h3>
            <Select
                options={options} 
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    )
}

export default myComponent;