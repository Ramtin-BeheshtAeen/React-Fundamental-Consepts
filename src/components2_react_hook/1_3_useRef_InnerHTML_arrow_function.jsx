import { useRef, React } from "react";

function UseRef_InnerHTML_with_arrow_function(){
    let myHeading = useRef()

    function changeHeader(){
        myHeading.innerHTML = "<ul><li>Hi</li></ul>"
    }

    return (
        <div>
            <h1 ref={(h1)=>(myHeading=h1)}>useRef_InnerHTML_with_arrow_function</h1>
            <button onClick={changeHeader}>Click</button>
        </div>
    )
}

export default UseRef_InnerHTML_with_arrow_function;