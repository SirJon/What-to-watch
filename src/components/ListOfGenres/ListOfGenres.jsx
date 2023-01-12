import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class ListOfGenres extends PureComponent {
  constructor(props) {
    super(props);
    this.genre = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
  }

  withActiveClass = (genre, activeGenre = `All genres`) => {
    return genre === activeGenre ? `catalog__genres-item--active` : ``;
  };

  render() {
    return (
      <ul className="catalog__genres-list">
        {this.genre.map((it, i) => {
          return (
            <li key={it + i} className={`catalog__genres-item ${this.withActiveClass(it)}`}>
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(e) => e.preventDefault()}
              >{it}</a>
            </li>
          )
        })}
      </ul>
    )
  };
};

ListOfGenres.propTypes = {
};

export default ListOfGenres;
