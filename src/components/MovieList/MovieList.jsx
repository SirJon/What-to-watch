import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';

const MovieList = (props) => {
  const { films } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <MovieCard
            key={film.name + i}
            film={film}
          />
        )
      })}
    </div>
  );
}

export default MovieList;
