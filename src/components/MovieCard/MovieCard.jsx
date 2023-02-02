import React, { useRef } from 'react';

const MovieCard = (props) => {
  const { film: { name, img, video }, onCLick } = props;
  const videoRef = useRef(null);
  let timer;
  const onOver = () => {
    timer = setTimeout(() => {
      videoRef.current.play();
    }, 1000)
  };
  const onOut = () => {
    timer = clearTimeout(timer);
    videoRef.current.load();
  };
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={(e) => onCLick(e, e.target)}
      onMouseOver={() => onOver()}
      onMouseOut={() => onOut()}
    >
      <div className="small-movie-card__image">
        <video
          width="280"
          height="175"
          poster={img}
          muted="muted"
          ref={videoRef}
        >
          <source src={video} />
        </video>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default MovieCard;