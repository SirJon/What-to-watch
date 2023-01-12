import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.timer
  }
  playVideo(video) {
    this.timer = setTimeout(() => {
      video.play();
    }, 1000)
  };
  stopVideo(video) {
    this.timer = clearTimeout(this.timer);
    video.load();
  };
  render() {
    const { name, img, video, onMouse } = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMouse(name);
          this.playVideo(this.video.current);
        }
        }
        onMouseOut={() => this.stopVideo(this.video.current)}
      >
        <div className="small-movie-card__image">
          <video
            width="280"
            height="175"
            poster={img}
            ref={this.video}
            muted="muted"
          >
            <source src={video} />
          </video>
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="#"
            onClick={(e) => e.preventDefault()}
          >{name}</a>
        </h3>
      </article>
    )
  }
};

VideoPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  onMouse: PropTypes.func.isRequired,
};

export default VideoPlayer;
