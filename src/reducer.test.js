import renderer from 'react-test-renderer';
import { ActionsCreater, reducer } from './reducer';

describe(`Reducer work cureectly`, () => {
  it(`Actions Creater get Films By Genre`, () => {
    expect(ActionsCreater.getFilmsByGenre()).toEqual({
      type: `GET_FILMS`,
    })
  });
  it(`Actions Creater get changeGenre`, () => {
    expect(ActionsCreater.changeGenre(``)).toEqual({
      type: `CHANGE_GENRE`,
      payload: ``,
    })
  });
  it(`Reducer in the absence of parameters will return init state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      films: [
        {
          name: `Fantastic Beasts: The Crimes of Grindelwald`,
          img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          genre: `Kids & Family`,
        },
        {
          name: `Bohemian Rhapsody`,
          img: `img/bohemian-rhapsody.jpg`,
          video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          genre: `Dramas`,
        },
        {
          name: `Macbeth`,
          img: `img/macbeth.jpg`,
          video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          genre: `Documentary`,
        },
        {
          name: `Aviator`,
          img: `img/aviator.jpg`,
          video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          genre: `Crime`,
        },
        {
          name: `Snatch`,
          img: `img/snatch.jpg`,
          video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          genre: `Thrillers`,
        },
      ]
    })
  });
  it(`Reducer actions get films`, () => {
    expect(reducer({
      genre: `current`,
      films: [
        {
          name: `current1`,
          genre: `current`,
        },
        {
          name: `uncurrent`,
          genre: `uncurrent`,
        },
        {
          name: `current2`,
          genre: `current`,
        },
      ]
    }, {
      type: `GET_FILMS`,
    })).toEqual({
      genre: `current`,
      films: [
        {
          name: `current1`,
          genre: `current`,
        },
        {
          name: `current2`,
          genre: `current`,
        },
      ]
    })
  });
  it(`Reducer actions change genre`, () => {
    expect(reducer({
      genre: `All`,
      films: [{name: `name`, genre: `All`}]
    }, {
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    })).toEqual({
      genre: `Comedy`,
      films: [{name: `name`, genre: `All`}]
    })
  })
});
