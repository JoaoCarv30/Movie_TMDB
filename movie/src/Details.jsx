import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './styleDetails'



function Details() {
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const imageTmdb = "https://image.tmdb.org/t/p/w500";
    console.log({movie});

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=6ee8a05a0786a90c90a4bafdf492d0ff&language=en-US&page=1`
        )
          .then(response => response.json())
          .then(data => {
                const movie = {
                    title: data.title,
                    overview: data.overview,
                    poster_path: data.poster_path,
                    imagePath: `${imageTmdb}${data.poster_path}`,
                    releaseDate: data.release_date,
                    voteAverage: data.vote_average,
                }

                setMovie(movie)
                console.log(data)
          })
      }, [id]);

  return (
    <Container>

      <div className="geral">
        <div className='image-left'>
          <img src={movie.imagePath} alt="image" />
        </div>
        <div className='info-right'>
          <div>
            <h1>{movie.title}</h1>
          </div>
          <div>
            <p><strong>Overview:</strong> {movie.overview}</p>
          </div>
          <div className='aditional-info'>
            <p>⭐{movie.voteAverage}</p>
            <p id='release'> Release Date: {movie.releaseDate}</p>
            <Link to='/'> <button>Go back</button></Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Details