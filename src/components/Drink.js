import React from 'react';
import '../styling/App.css';




const Drink = ({result, handleOnClick}) => {
  return (
    <div className="Drink">
      <p>Name: {result.name}</p>
      <img src={result.image} alt="drinks" onClick={() => handleOnClick(result)}></img>
    </div>
  );
}

export default Drink;
