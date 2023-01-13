import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";

class Films extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      films: `undefined`,
    };
  }

  onMouseOver = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      films: `${name}`,
    }));
  };

  render() {
    return (
      <div className="catalog__movies-list">
        {/* {this.props.onFilmsGet().films.map((filmsData, i) => {
          const { name, img, video } = filmsData;
          return (
            <VideoPlayer
              key={name + i}
              name={name}
              img={img}
              video={video}
              onMouse={this.onMouseOver}
            />
          );
        })} */}
        {this.props.films.map((filmsData, i) => {
          const { name, img, video } = filmsData;
          return (
            <VideoPlayer
              key={name + i}
              name={name}
              img={img}
              video={video}
              onMouse={this.onMouseOver}
            />
          );
        })}
      </div>
    );
  }
};

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    video: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
};

export default Films;
