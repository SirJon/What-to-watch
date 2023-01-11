import React, { PureComponent } from "react";
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
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((filmsData, i) => {
          const { name, img } = filmsData;
          return (
            <VideoPlayer
              key={name + i}
              name={name}
              img={img}
              onMouse={this.onMouseOver}
            />
          );
        })}
      </div>
    );
  }
};

export default Films;
