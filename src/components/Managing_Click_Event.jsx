import React from "react";


function onClickFunction(){
    alert("you have clicked the button")
}

function ButtonComponent(){
    return(
    <div>
        <h3>Managing_Click_Events</h3>
        <h4>Button component for managing click events</h4>
        <button onClick={onClickFunction}> Submit </button>
    </div>
    )
}

export default ButtonComponent;