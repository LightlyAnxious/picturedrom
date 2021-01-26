import {createSelector} from 'reselect';

import {DEFAULT_GENRE} from 'utils/const';
import {selectActiveGenre} from '../cinema';

const selectRawFilms = state => state.DATA.films;
const selectPromo = state => state.DATA.promo;
const selectFilms = state => state.DATA.films;
const getMemoFilms = createSelector([selectFilms], films => films);

const getFilteredFilms = createSelector(
  [selectRawFilms, selectActiveGenre],
  (films, activeGenre) => {
    const filteredFilms = [];

    if (activeGenre === DEFAULT_GENRE) {
      return films;
    }

    films.forEach(film => {
      const genreRegExp = new RegExp(activeGenre);
      if (genreRegExp.test(film.genre)) {
        /* eslint-disable */
        filteredFilms.push(film);
        /* eslint-enable */
      }
    });

    return filteredFilms;
  }
);

export {selectPromo, getMemoFilms, getFilteredFilms};
