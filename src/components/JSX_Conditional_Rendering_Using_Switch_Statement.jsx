import React from 'react';


function JSX_Conditional_Rendering_Using_switch(){
    const status = true;
      
    switch(status){
        case true: return <button>Log out</button>;
        case false: return <button>Log in</button>;
        default: return null;

    }
    
};

export default JSX_Conditional_Rendering_Using_switch;
