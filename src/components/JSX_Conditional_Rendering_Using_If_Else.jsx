import React from 'react';

function loginButton(isLoggedIn) {
    if (isLoggedIn){
        return<button>Logout</button>
    }
    else{
        return<button>Login</button>
    }
}


function JSX_Conditional_Rendering_Using_If_Else(){
    return (
        <div>
            <h3>JSX_Conditional_Rendering_Using_If_Else:</h3>
            {loginButton(true)}
        </div>
    );
};

export default JSX_Conditional_Rendering_Using_If_Else;