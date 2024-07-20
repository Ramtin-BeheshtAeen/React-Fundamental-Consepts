import { useRef, React } from "react";

function UseRef_InnerText(){
    let myHeading = useRef()

    function changeHeader(){
        myHeading.current.innerText = "Button is Clicked!"
    }

    return (
        <div>
            <h1 ref={myHeading}>useRef_InnerText</h1>
            <button onClick={changeHeader}>Click</button>
        </div>
    )
}

export default UseRef_InnerText;