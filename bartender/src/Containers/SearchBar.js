import React from 'react';
import Select from 'react-select'

function myComponent(props) {

    
    const options = [
        {label: 'Tequila'},
        {label: 'Rum'},
        {label: 'Gin'},
        {label: 'Crown Royal'},
        {label: 'Bourbon'},
        {label: 'Peach Schnapps'},
        {label: 'Vodka'}
    ]
    
    // let recipes = props.recipes
    // let options = [];
    // options = recipes.ingredients.map(ingredient => {{label: ingredient}})

    return(
        <div>
            <h3> Select Your Liquor </h3>
            <Select
                className="text-dark"
                options={options} 
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    )
}

export default myComponent;