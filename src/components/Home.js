import React from 'react';
import '../styling/App.css';
import drinks from '../images/drinks.jpg'


const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to The Cocktail Explorer!</h1>
      <img src={drinks} alt="drinks"></img>
    </div>
  );
}

export default Home;
