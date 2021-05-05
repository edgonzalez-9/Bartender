import React from 'react';
import Select from 'react-select'

const options = [
    {value: 'Tequila', label: 'Tequila'},
    {value: 'Rum', label: 'Rum'},
    {value: 'Gin', label: 'Gin'},
    {value: 'Crown Royal', label: 'Crown Royal'},
    {value: 'Bourbon', label: 'Bourbon'},
    {value: 'Peach Schnapps', label: 'Peach Schanpps'},
    {value: 'Crème de Cassis', label: 'Crème de Cassis'}
]

function myComponent(props) {
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