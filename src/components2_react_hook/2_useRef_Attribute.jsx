import React from "react";
import { useRef } from "react";

function UseRef_Attribute(){
    
    const myImg = useRef();

    function onClick(){
        myImg.current.src = "https://placehold.co/600x400/000000/FFF"
        myImg.current.setAttribute("Height", 1000)
    }

    return (
        <div>
        <h3>UseRef_Attribute</h3>
        <img ref={myImg} src="https://placehold.co/600x400" ></img>
        <button onClick={onClick} > Click Me </button>
        </div>
    )
}
export default UseRef_Attribute;