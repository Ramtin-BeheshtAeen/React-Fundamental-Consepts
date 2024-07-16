import React from "react";

function JSX_Loop() {
  const cars = ["Honda", "Ford", "Toyota"];
  return (
    <div>
    <h3>JSX_Loop:</h3>
      <ul>
        {cars.map( (item, index) => { return (<li key={index.toString()}> {item} </li>) } ) }
      </ul>
    </div>
  );
}

export default JSX_Loop;
