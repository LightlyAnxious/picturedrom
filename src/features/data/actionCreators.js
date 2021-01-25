import ActionType from './actionTypes';

const loadFilms = films => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = film => ({
  type: ActionType.LOAD_PROMO,
  payload: film,
});

export {loadFilms, loadPromo};
