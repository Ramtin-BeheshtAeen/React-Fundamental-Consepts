import { useRef, React } from "react";

function UseRef_InnerHTML(){
    let myHeading = useRef()

    function changeHeader(){
        myHeading.current.innerHTML = "<ul><li>Hi</li></ul>"
    }

    return (
        <div>
            <h1 ref={myHeading}>useRef_InnerHTML</h1>
            <button onClick={changeHeader}>Click</button>
        </div>
    )
}

export default UseRef_InnerHTML;