export {default as cinemaReducer} from './cinemaReducer';
export {
  getGenres,
  chooseGenre,
  resetGenres,
  loadFavorite,
  loadComments,
  setVisibleFilms,
  setCurrentFilm,
  loadCurrentFilm,
} from './actionCreators';
export {
  fetchCurrentFilm,
  fetchFavorite,
  manageFavorite,
  fetchComments,
  sendComment,
} from './apiActions';
export {
  selectActiveGenre,
  selectCurrentFilm,
  selectGenres,
  selectFavorite,
  selectVisible,
} from './selectors';
