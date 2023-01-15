import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class ListOfGenres extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.genres = [`All genres`, ...(new Set(this.props.films.map(it => it.genre)))];
  }

  withActiveClass = (genre, activeGenre = `All genres`) => {
    return genre === activeGenre ? `catalog__genres-item--active` : ``;
  };

  onClickGenre = (e) => {
    e.preventDefault();
    this.props.onGenreClick(e.target.textContent);
    this.props.onFilmsGet();
  }

  render() {
    return (
      <ul className="catalog__genres-list">
        {this.genres.map((it, i) => {
          return (
            <li key={it + i} className={`catalog__genres-item ${this.withActiveClass(it, this.props.genre)}`}>
              <a
                className="catalog__genres-link"
                onClick={(e) => this.onClickGenre(e)}
              >{it}</a>
            </li>
          )
        })}
      </ul>
    )
  };
};

ListOfGenres.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func,
  onFilmsGet: PropTypes.func,
};

export default ListOfGenres;
