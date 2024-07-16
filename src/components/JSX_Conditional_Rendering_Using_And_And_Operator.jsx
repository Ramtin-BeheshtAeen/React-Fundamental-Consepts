import React from 'react';

function JSX_Conditional_Rendering_Using_And_And_Operator() {
    let status = true
    return (
        <div>
        <h3>JSX_Conditional_Rendering_Using_And_And_Operator</h3>
        {status && <button>Logout</button>}
        </div>
    );
};

export default JSX_Conditional_Rendering_Using_And_And_Operator;