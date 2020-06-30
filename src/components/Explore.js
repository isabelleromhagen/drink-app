import React, { useState, useEffect } from 'react';
import '../styling/App.css';
import Data from '../data/drinks.json'
import Drink from './Drink';
import DrinkInfo from './DrinkInfo';

const Explore = () => {

    const [imageClicked, setImageClicked] = useState(false);
    const [name, setName] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        setResults("Enter something above and click search to search");
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e) {
            const search = e.target.elements.searchField.value.trim();
            handleSearch(search);
        }
    }

    const handleSearch = (search) => {
         setResults(
             Data.cocktails.filter(cocktail => 
                cocktail.name.toLowerCase().includes(search.toLowerCase())) 
                .map((result, index) => ( 
                        <Drink result={result} key={index} handleOnClick={handleOnClick}/>
                    ))
         ); 

         console.log(results); 
    }
    
    const handleOnClick = (result) => {
        if (result) {
            setName(result.name);
            setPreparation(result.preparation)
            setImage(result.image);
            setImageClicked(true);
        } 
    }

    const handleReturn = () => {
        console.log('returning');
        setImageClicked(false);
    }
 
  return (
      <div>
            {!imageClicked ? 
            <div >
                <h1>Find your favorite drink!</h1>
                <form onSubmit={handleSubmit}>
                        <input type="textField" name="searchField"></input>
                        <button>Search</button>
                </form>
                {results.length > 0 ? <div>{results}</div> : <h2>No such drink found</h2>}
            </div>
                : 
            <div>
                <DrinkInfo name={name} preparation={preparation} image={image} handleReturn={handleReturn}/>
            </div>}
      </div>
  );

}

export default Explore;

