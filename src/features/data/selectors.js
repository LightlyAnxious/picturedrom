import {createSelector} from 'reselect';

const selectPromo = state => state.DATA.promo;
const selectFilms = state => state.DATA.films;
const getMemoFilms = createSelector([selectFilms], films => films);

export {selectPromo, getMemoFilms};
