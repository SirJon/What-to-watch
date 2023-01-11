import React, { PureComponent } from "react";

class Films extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      films: `undefined`,
    };
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((filmsData, i) => {
          const { name, img } = filmsData;
          return (
            <article
              className="small-movie-card catalog__movies-card"
              key={name + i}
              onMouseOver={() => {
                this.setState((prevState) => ({
                  ...prevState,
                  films: `${name}`,
                }));
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <div className="small-movie-card__image">
                <img src={img}
                  alt={name} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="#">{name}</a>
              </h3>
            </article>
          );
        })}
      </div>
    );
  }
};

export default Films;
