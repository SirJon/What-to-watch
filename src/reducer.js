import films from "./mocks/films";

const initState = {
  genre: `All genres`,
  films
};

export const ActionsCreater = {
  changeGenre: (activGenre) => ({
    type: `CHANGE_GENRE`,
    payload: activGenre,
  }),
  getFilmsByGenre: () => ({
    type: `GET_FILMS`,
  })
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return({...state, ...{
      genre: action.payload
    }});

    case `GET_FILMS`: return({...state, ...{
      films: state.films.slice().filter(film => film.genre === state.genre)
    }})
      
  }
  return state
};