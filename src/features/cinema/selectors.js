const selectActiveGenre = state => state.CINEMA.activeGenre;
const selectCurrentFilm = state => state.CINEMA.currentFilm;
const selectGenres = state => state.CINEMA.genres;
const selectFavorite = state => state.CINEMA.favorite;

export {selectActiveGenre, selectCurrentFilm, selectGenres, selectFavorite};
