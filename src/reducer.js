import films from "./mocks/films";

const initState = {
  genre: `All genres`,
  films,
  amount: 8,
};

export const ActionsCreater = {
  changeGenre: (activGenre) => ({
    type: `CHANGE_GENRE`,
    payload: activGenre,
  }),
  getFilmsByGenre: () => ({
    type: `GET_FILMS`,
  }),
  changeAmount: () => ({
    type: `CHANGE_AMOUNT`,
    payload: 8,
  }),
  resetAmount: () => ({
    type: `RESET_AMOUNT`,
  }),
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return({...state, ...{
      genre: action.payload
    }});

    case `GET_FILMS`: return({...state, ...{
      films: initState.films.filter(film => film.genre === state.genre || state.genre === `All genres`)
    }});

    case `CHANGE_AMOUNT`: return({...state, ...{
      amount: state.amount + action.payload
    }});

    case `RESET_AMOUNT`: return({...state, ...{
      amount: initState.amount
    }});
      
  }
  return state
};