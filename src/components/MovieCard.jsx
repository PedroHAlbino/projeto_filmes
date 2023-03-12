import React from 'react'

import { FaStar } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
    console.log(MovieCard);
  return (
    <div className='movie-card'>
        <img src={imageUrl + movie.poster_path} alt="{movie.title}"/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard