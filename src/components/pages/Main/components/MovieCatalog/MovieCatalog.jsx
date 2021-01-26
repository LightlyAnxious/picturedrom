import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchMovies, getFilteredFilms} from 'features/data';
import {selectVisible} from 'features/cinema';

// import MovieList from '../movie-list/movie-list';
// import ShowMore from '../show-more/show-more';
import GenresList from './components/GenresList';

import './MovieCatalog.scss';

const MovieCatalog = () => {
  const dispatch = useDispatch();
  const films = useSelector(getFilteredFilms);
  const visible = useSelector(selectVisible);
  const visibleFilms =
    visible >= films.length ? films : films.slice(0, visible);

  useEffect(() => dispatch(fetchMovies()), []);

  return (
    <>
      <GenresList />
      {/* <MovieList films={visibleFilms} />
      {visible < films.length ? <ShowMore /> : null} */}
    </>
  );
};

export {MovieCatalog};
export default memo(MovieCatalog);
