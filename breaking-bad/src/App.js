import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './components/ui/Search';

const App= ()=> {
  const [items, setItems]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [query, setQuery]=useState('')

  useEffect(() =>{
    const fetchItems= async() => {
      const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      //console.log(result.data); we will set result.data to items
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]) //query is a dependency. Whenever it changes, useEffect will execute
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>{
        setQuery(q)
      }}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
