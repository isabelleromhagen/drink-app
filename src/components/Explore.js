import React, { useState, useEffect } from 'react';
import '../styling/App.css';
import Information from '../data/drinks.json'
import Drink from './Drink';
import DrinkInfo from './DrinkInfo';

const Explore = () => {

    useEffect(() => {
        console.log('useEffect');
    }, [])

    const [imageClicked, setImageClicked] = useState(false);
    const [name, setName] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setResults] = useState([]);
    

    let handleSearch = (e) => {
        e.preventDefault()
        console.log('searching ');

        if(e) {
            console.log('inside search if');
            const search = e.target.elements.searchField.value.trim();
            setSearch(search);
            searchMethod(search);
            console.log('handling search for', search);
        }
    }
      
    const searchMethod = () => {
        console.log('looking for segvd', search);
        setResults(
            Information.cocktails.map(
                (cocktail)=>(Information.cocktails.cocktail.name.toLowerCase().includes(search.toLowerCase())))
                
                );
    
    }
    
    let handleOnClick = (result) => {

        if (result) {
            
            setName(result.name);
            setPreparation(result.preparation)
            setImage(result.image);
            setImageClicked(true);
            console.log(result);
        } 
        else {
            console.log('missed if');
        }
    }
 
  return (
      <div>
            {!imageClicked ? 
            <div >
                <h1>Find your favorite drink!</h1>
                <form onSubmit={handleSearch}>
                        <input type="textField" name="searchField"></input>
                        <button>Search</button>
                </form>
                <div>
                {
                    searchResults.map((result, index) => 
                        <Drink result={result} key={index} handleOnClick={handleOnClick}/>
                    )
                    
                }
                </div>
                   
            </div>
                : 
            <div>
                <DrinkInfo name={name} preparation={preparation} image={image}/>
            </div>}
      </div>
    
    
  );

}

export default Explore;