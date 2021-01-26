import {getUniqueGenres} from 'utils/filter';
import {MAX_GENRES} from 'utils/const';
import ActionType from './actionTypes';

const setCurrentFilm = film => ({
  type: ActionType.SET_CURRENT,
  payload: film,
});

const loadCurrentFilm = film => ({
  type: ActionType.LOAD_CURRENT,
  payload: film,
});

const getGenres = films => ({
  type: ActionType.GET_GENRES,
  payload: getUniqueGenres(films).slice(0, MAX_GENRES),
});

const chooseGenre = genre => ({
  type: ActionType.SELECT_GENRE,
  payload: genre,
});

const resetGenres = () => ({
  type: ActionType.RESET_GENRES,
});

const loadFavorite = films => ({
  type: ActionType.LOAD_FAVORITE,
  payload: films,
});

const loadComments = comments => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

const setVisibleFilms = count => ({
  type: ActionType.SET_VISIBLE_FILMS,
  payload: count,
});

export {
  getGenres,
  chooseGenre,
  resetGenres,
  loadFavorite,
  loadComments,
  setVisibleFilms,
  setCurrentFilm,
  loadCurrentFilm,
};
