import React from 'react';
import '../styling/App.css';


const DrinkInfo = ({name, image, preparation, handleReturn}) => {

  return (
    <div className="drinkInfo">
      <h3>Name: {name}</h3>
      <p>Preparation: {preparation}</p>
      <img src={image} alt={name}></img>
      <button id="returnButton" onClick={() => handleReturn()}>Return</button>
    </div>
  );
}

export default DrinkInfo;
