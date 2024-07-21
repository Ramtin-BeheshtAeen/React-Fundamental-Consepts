import React from 'react';
import { useRef } from "react";

function UseRef_InputElements() {
    const firstName = useRef()
    const lastName = useRef()

    function showMessage(){
        let fName = firstName.current.value;
        let lName = lastName.current.value;
        alert("welcome" + " " + fName + " " + lName)
    }

    return (
        <div>
            <h1>UseRef_InputElements</h1>
            <input ref={firstName} placeholder='firstName' />           
            <input ref={lastName} placeholder='lastName' />            
            <button onClick={showMessage}> click </button>
        </div>
    );
};

export default UseRef_InputElements;