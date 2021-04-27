import React from 'react';
import Select from 'react-select'

const options = [
    {value: 'Tequila', label: 'Tequila'},
    {value: 'Rum', label: 'Rum'},
    {value: 'Gin', label: 'Gin'},
    {value: 'Crown Royal', label: 'Crown Royal'},
    {value: 'Bourbon', label: 'Bourbon'},
    {value: 'Peach Schnapps', label: 'Peach Schanpps'}
]

function myComponent(props) {
    return(
        <Select options={options} onChange={(e) => props.handleChange(e)}/>
    )
}

export default myComponent;