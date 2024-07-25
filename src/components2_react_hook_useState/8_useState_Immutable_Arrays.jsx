import {React, useState} from 'react'

function UseState_Immutable_Arrays(){
    
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    function addItemToList(){
        setList( (previousList) => ([...previousList, item]))
    }

    function showArray(){
        console.log(list)
    }

    return (
        <div>
            <h1>UseState_Immutable_Arrays_adding</h1>
            <table>
                <tbody>
                    { list.length!==0 
                      ? (
                            list.map((element,index) => (
                                <tr key={index}>
                                    <td>{element}</td>
                                </tr>
                            ))
                        ) 
                      : (
                            <tr>
                                <td> Add Some Thing </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <input placeholder='item' onChange={(event)=>(setItem(event.target.value))}/> 
            <button onClick={addItemToList}> add </button>
            <button onClick={showArray}> show </button>
        </div>
    )
}
export default UseState_Immutable_Arrays;