import React from 'react';

function JSX_Immediately_invoked_function() {
    let points =99;

    return (
        <div>
        <h3> JSX_Immediately_invoked_function: </h3>
          {(
    
            () => {
    
              /* Functions Body: */
              if(points>=80 && points<100){
                return <h1>A+</h1>
              }
              else if(points>=70 && points<80){
                return <h1>A-</h1>
              }
              else if(points>=60 && points<70){
                return <h1>B</h1>
              }
              else {
                return <h1>Failed</h1>
              }
    
            }
    
            /* Calling the function in this section:*/
          ) ()}

        </div>
      );
};

export default JSX_Immediately_invoked_function;