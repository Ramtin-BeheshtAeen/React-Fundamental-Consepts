import React from 'react';

function JSX_Conditional_Rendering_Using_Ternary_Operator() {
    let status = false
    return (
        <div>
        <h3>JSX_Conditional_Rendering_Using_Ternary_Operator:</h3>
            {status ?
            /* If it is true:*/
            <button>Logout</button>
            : 
            /* If it is false:*/
            <button>Login</button>}
        </div>
    );
};

export default JSX_Conditional_Rendering_Using_Ternary_Operator;