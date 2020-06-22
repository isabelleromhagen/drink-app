import React from 'react';
import '../styling/App.css';




const DrinkInfo = ({name, image, preparation}) => {

  return (
    <div className="DrinkInfo">
      <p>Name: {name}</p>
      <p>{preparation}</p>
      <img src={image} alt={name}></img>
      
    </div>
  );
}

export default DrinkInfo;