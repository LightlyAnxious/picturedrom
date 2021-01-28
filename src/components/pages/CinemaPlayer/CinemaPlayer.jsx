import React, {useEffect} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import {findMovieById} from 'utils/filter';
import {getMemoFilms, fetchMovies} from 'features/data';
import {selectCurrentFilm} from 'features/cinema';

import Player from 'components/common/Player';

const CinemaPlayer = () => {
  const dispatch = useDispatch();
  const id = Number(useParams().id);

  useEffect(() => dispatch(fetchMovies), [dispatch]);

  const films = useSelector(getMemoFilms);
  const currentFilm = useSelector(selectCurrentFilm, shallowEqual);
  const film = currentFilm || findMovieById(id, films);

  if (!film) {
    return null;
  }

  return (
    <div className="player" style={{backgroundColor: '#000'}}>
      <Player film={film} />
    </div>
  );
};

export {CinemaPlayer};
export default CinemaPlayer;
