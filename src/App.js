import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL= 'http://www.omdbapi.com?apikey=5f40d412'

const movie1={
"Title": "Italian Spiderman",
"Type" : "movie",
"Year" : "2007",
"imdbID" : "tt2705436",
"Poster": "N/A"
}


const App = () =>{
  const [movies,setMovies]= useState([]);
  const [searchTerm,setSearchTerm]= useState([])
  const searchMovie= async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
   setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie('Spiderman');
  },[]);
  return(
    <div className='app'>
      <h1>MovieApp</h1>

      <div  className='search'>
        <input 
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      
        />
        <img 
        src={SearchIcon}
        alt='search'
        onClick={() =>searchMovie(searchTerm)}
        />
      </div>
      {movies?.length>0 
         ?(
      
      <div className='container'>
       {movies.map((movie)=>(
        <MovieCard movie={movie} />
       ))}

      </div>
      ) :(
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )
    }
    </div>
  )
}

export default App;
