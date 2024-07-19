import React from 'react';

function JSX_Passing_Properties_Function_to_This_Child_Component(props) {
    return (
        <div>
            <h3>JSX_Passing_Properties_Function_to_This_Child_Component</h3>
            <h4>function from parent component:</h4>
            <button onClick={props.func} >Submit</button>
        </div>
    );
};

export default JSX_Passing_Properties_Function_to_This_Child_Component;