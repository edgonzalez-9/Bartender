import React from 'react';
import Select from 'react-select'

function myComponent(props) {

    
    const options = [
        {label: 'Bourbon'},
        {label: 'Crown Royal'},
        {label: 'Gin'},
        {label: 'Peach Schnapps'},
        {label: 'Rum'},
        {label: 'Tequila'},
        {label: 'Vodka'}
    ]
    
    // let recipes = props.recipes
    // let options = [];
    // options = recipes.ingredients.map(ingredient => {{label: ingredient}})

    return(
        <div style={{width: `80vw`, margin: `auto`}}>
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