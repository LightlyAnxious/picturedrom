const selectActiveGenre = state => state.CINEMA.activeGenre;
const selectCurrentFilm = state => state.CINEMA.currentFilm;
const selectGenres = state => state.CINEMA.genres;
const selectFavorite = state => state.CINEMA.favorite;
const selectVisible = state => state.CINEMA.visible;
const selectReviews = state => state.CINEMA.comments;

export {
  selectActiveGenre,
  selectCurrentFilm,
  selectGenres,
  selectFavorite,
  selectVisible,
  selectReviews,
};
