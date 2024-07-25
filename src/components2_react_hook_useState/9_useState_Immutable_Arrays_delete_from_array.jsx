import {React, useState} from 'react'

function UseState_Immutable_Arrays_Deleting_Array_Element(){
    
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    function addItemToList(){
        setList( (previousList) => ([...previousList, item]))
    }

    function removeItem(index){
        list.splice(index, 1);
        setList([...list])
    }

    return (
        <div>
            <h1>UseState_Immutable_Arrays_Deleting_Array_Element</h1>
            <table>
                <tbody>
                    { list.length!==0 
                      ? (
                            list.map((element,index) => (
                                <tr key={index}>
                                    <td>{element}</td>
                                    <td> <button onClick={(index)=>(removeItem(index))}> Remove Item </button> </td>
                                </tr>
                            ))
                        ) 
                      : (
                            <tr>
                                <td> Add Some Note </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <input placeholder='item' onChange={(event)=>(setItem(event.target.value))}/> 
            <button onClick={addItemToList}> add </button>
        </div>
    )
}
export default UseState_Immutable_Arrays_Deleting_Array_Element;