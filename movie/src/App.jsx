import { useState, useEffect } from "react";

import styled from "styled-components";
import { Container, MovieContainer, MovieCard } from "./Style";
import { Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  const imageTmdb = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6ee8a05a0786a90c90a4bafdf492d0ff&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
      console.log({movies});
  }, []);

  return (
    <>
      <Container>
        <h1>Movies</h1>
        <MovieContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`${imageTmdb}${movie.poster_path}`} alt={movie.title} /></Link>
              
              <h2>{movie.title}</h2>
            </MovieCard>
          ))}
        </MovieContainer>
      </Container>
    </>
  );
}

export default App;
