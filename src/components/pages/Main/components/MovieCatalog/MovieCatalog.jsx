import React, {memo} from 'react';
import {useSelector} from 'react-redux';

import {getFilteredFilms} from 'features/data';
import {selectVisible} from 'features/cinema';

import MovieList from 'components/common/MovieList';
import ShowMore from './components/ShowMore';
import GenresList from './components/GenresList';

import './MovieCatalog.scss';

const MovieCatalog = () => {
  const films = useSelector(getFilteredFilms);
  const visible = useSelector(selectVisible);
  const visibleFilms =
    visible >= films.length ? films : films.slice(0, visible);

  return (
    <>
      <GenresList />
      <MovieList films={visibleFilms} />
      {visible < films.length ? <ShowMore /> : null}
    </>
  );
};

export {MovieCatalog};
export default memo(MovieCatalog);
