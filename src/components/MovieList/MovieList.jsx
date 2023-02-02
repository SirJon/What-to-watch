import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';

const MovieList = (props) => {
  const [film, setFilm] = useState();
  const onCLickButton = (e, film) => {
    e.preventDefault;
    setFilm(film);
  };
  const { films } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <MovieCard
            key={film.name + i}
            film={film}
            onCLick={(e) => onCLickButton(e, film)}
          />
        )
      })}
    </div>
  )
};

export default MovieList;
