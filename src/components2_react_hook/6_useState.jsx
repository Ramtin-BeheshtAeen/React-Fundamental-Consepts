import {React, useState} from 'react'

function UseState(){

    const[number, setNumber]= useState(0)

    return (
        <div>
            <h1>UseState:</h1>
            <h2>Number: {number}</h2>
            <button onClick={ ()=>setNumber(number+1) } >+1</button>
        </div>
    )

}

export default UseState;