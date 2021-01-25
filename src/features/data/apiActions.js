import {ApiRoute} from 'utils/const';
import {loadFilms, loadPromo} from 'features/data/actionCreators';
import {getGenres} from 'features/cinema';
import {snakeToCamelObjAdapter} from 'utils/common';

const fetchPromoMovie = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.PROMO).then(({data}) => {
    const promoMovie = snakeToCamelObjAdapter(data);
    dispatch(loadPromo(promoMovie));
  });

const fetchMovies = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.FILMS).then(({data}) => {
    const preparedFilms = data.reduce(
      (films, film) => films.concat(snakeToCamelObjAdapter(film)),
      []
    );

    dispatch(getGenres(preparedFilms));
    dispatch(loadFilms(preparedFilms));
  });

export {fetchMovies, fetchPromoMovie};
