import { useState } from "react";
import { useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false)
  }
  useEffect(() => {
    getMovies();
    
  },[]);
  console.log(movies)
  return (
    <div>
     {loading ? ( <h1>Loading...</h1> ): (
      movies.map( (movie) => (
        <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={movie.large_cover_image}></img>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((g) => (
            <li key= {g}>{g}</li>
          ))}
        </ul>
        </div>
      ))
     
     )}
    </div>
  );
}

export default App;
