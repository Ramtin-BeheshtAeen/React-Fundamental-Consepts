import React from "react";

function JSX_Loop() {
  const cars = ["Honda", "Ford", "Toyota"];
  return (
      <ul>
        {cars.map( (item, index) => { return (<li key={index.toString()}> {item} </li>) } ) }
      </ul>
  );
}

export default JSX_Loop;
