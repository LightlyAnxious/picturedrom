export {default as cinemaReducer} from './cinemaReducer';
export {
  getGenres,
  selectGenre,
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
} from './selectors';
