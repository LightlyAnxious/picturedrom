import {ApiRoute, AuthorizationStatus} from 'utils/const';
import {snakeToCamelObjAdapter} from 'utils/common';
import {selectAuthStatus} from 'features/user';
import {loadFavorite, loadComments, loadCurrentFilm} from './actionCreators';

const HttpCode = {
  BAD_REQUEST: 400,
};

const fetchCurrentFilm = id => (dispatch, _getState, api) =>
  api
    .get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => snakeToCamelObjAdapter(data))
    .then(film => dispatch(loadCurrentFilm(film)));

const fetchFavorite = () => (dispatch, getState, api) => {
  const isAuth =
    selectAuthStatus(getState()) === AuthorizationStatus.AUTHORIZED;

  if (isAuth) {
    return api.get(ApiRoute.FAVORITE).then(({data}) => {
      const preparedFilms = data.reduce(
        (films, film) => films.concat(snakeToCamelObjAdapter(film)),
        []
      );

      dispatch(loadFavorite(preparedFilms));
    });
  }

  return null;
};

const manageFavorite = (id, status) => (_dispatch, getState, api) => {
  const isAuth =
    selectAuthStatus(getState()) === AuthorizationStatus.AUTHORIZED;

  if (isAuth) {
    return api.post(`${ApiRoute.FAVORITE}/${id}/${status}`);
  }

  return null;
};

const fetchComments = filmId => (dispatch, _getState, api) =>
  api
    .get(`${ApiRoute.COMMENTS}/${filmId}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(err => {
      throw err;
    });

const sendComment = (comment, id, onSuccess, onError = () => {}) => (
  _dispatch,
  _getState,
  api
) =>
  api
    .post(`${ApiRoute.COMMENTS}/${id}`, comment)
    .then(onSuccess)
    .catch(error => {
      const {response} = error;
      if (response.status === HttpCode.BAD_REQUEST) {
        onError();
      }
    });

export {
  fetchCurrentFilm,
  fetchFavorite,
  manageFavorite,
  fetchComments,
  sendComment,
};
