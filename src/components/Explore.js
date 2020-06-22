import React from 'react';
import '../styling/App.css';
import data from '../data/drinks.json'
import Drink from './Drink';

const Explore = () => {
    
    let searchResults = [];
    searchResults = data.cocktails;
    const handleSearch = () => {
        let searchResults = data[0];
        return searchResults;
    }
  return (
    <div className="Explore">
      <h1>Find your favorite drink!</h1>
      <input type="textField"></input>
      <button onClick={handleSearch}>Search</button>
      {
        searchResults.map((result, index) => 
            <Drink name={result.name} image={result.image} key={index}/>
        )
      }
    </div>
  );
}

export default Explore;