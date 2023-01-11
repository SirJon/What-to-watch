import React, { PureComponent } from "react";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.timer
  }
  componentDidMount() {
    // this.video.current.play();
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
    const { name, img, onMouse } = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMouse(name);
          this.playVideo(this.video.current)
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
            <source src="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4" />
          </video>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#">{name}</a>
        </h3>
      </article>
    )
  }
};

export default VideoPlayer;
