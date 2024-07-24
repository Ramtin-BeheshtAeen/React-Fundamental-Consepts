import React from 'react';
import { useRef } from "react";

function UseRef_Css() {

    const myHeader = useRef()

    function changeColor(){
        myHeader.current.classList.remove('text-success')
        myHeader.current.classList.add('text-danger')
    }

    return (
        <div>
            <h1 className='text-success' ref={myHeader}> UseRef_Css </h1>
            <button onClick={changeColor}> Change Header Color </button>
        </div>
    );
};

export default UseRef_Css;