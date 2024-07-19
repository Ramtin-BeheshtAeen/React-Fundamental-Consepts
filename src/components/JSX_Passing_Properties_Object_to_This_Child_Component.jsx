import React from 'react';

function JSX_Passing_Properties_Object_to_This_Child_Component(props) {
    return (
        <div>
            <h3>JSX_Passing_Properties_Object_to_This_Child_Component</h3>
            <h4>message from parent component:</h4>
            <ul>
                <li>Name of the brand: {props.car["brand"]} </li>
                <li>Origin country of the brand: {props.car["countryOfOrigin"]} </li>
                <li>Date of origination: {props.car["productionDate"]} </li>
            </ul>
        </div>
    );
};

export default JSX_Passing_Properties_Object_to_This_Child_Component;