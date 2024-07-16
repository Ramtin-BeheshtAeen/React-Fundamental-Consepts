import React from 'react';

function JSX_Passing_Properties_String_to_This_Child_Component(props) {
    return (
        <div>
            <h3>JSX_Passing_Properties_String_to_This_Child_Component:</h3>
            <h4>message from parent component:</h4>
            <p>{props.message}</p>
        </div>
    );
};

export default JSX_Passing_Properties_String_to_This_Child_Component;