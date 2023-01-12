const initState = {
  genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`],
  activGenre: `All genres`,
};
const ActionsCreater = {
  changingFilterGenre: () => {},
  getMovies: (genre) => {}
};
const reducer = (state = initState, action) => {
  return {...state, activGenre: action.activGenre}
}