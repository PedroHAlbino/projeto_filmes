import React from 'react'

import { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const imageUrl = import.meta.env.VITE_IMG

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRateMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(imageUrl)
    setTopMovies(data.results)
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRateMovies(topRatedUrl);
  }, [])
  return (
    <div className='container'>
      <h2 className='title'>Melhores filmes: </h2>
        <div className='movies-container'>
          {topMovies.length > 0 && topMovies.map((movie)=> <p key={movie.id}>{movie.title}</p>)}
        </div>      
    </div>
  )
}

export default Home