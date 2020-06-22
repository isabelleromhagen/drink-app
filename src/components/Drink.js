import React from 'react';
import '../styling/App.css';



const Drink = ({name, image}) => {
  return (
    <div className="Drink">
      <p>Name: {name}</p>
      <img src={image} alt="drinks"></img>
    </div>
  );
}

export default Drink;
