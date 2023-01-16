import renderer from 'react-test-renderer';
import films from './mocks/films';
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
      films,
      amount: 8,
    })
  });

  it(`Reducer custom init state`, () => {
    expect(reducer({test: 1}, {})).toEqual({
      test: 1
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
      ],
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
      ],
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
  });
  
});
