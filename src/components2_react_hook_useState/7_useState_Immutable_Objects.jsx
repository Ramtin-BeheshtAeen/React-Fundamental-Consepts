import {React, useState} from 'react'

function UseState_Immutable_Objects(){
    
    const[cars, setCars]= useState({
        name:"chevrolet chevelle malibu",
        cylinders:8,
        origin:""
    })

    function changeCarInfo(){
        setCars( (previousCar) => ( {...previousCar, origin:"USA"} )  )
    }

    return (
        <div>
            <h1>UseState_Immutable_Objects</h1>
            <h2>Name: {cars.name} cylinders: {cars.cylinders} origin:{cars.origin}</h2>
            <button onClick={changeCarInfo}> add </button>
        </div>
    )
}
export default UseState_Immutable_Objects;