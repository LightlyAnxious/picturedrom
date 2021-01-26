import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import {
  chooseGenre,
  resetGenres,
  selectGenres,
  selectActiveGenre,
} from 'features/cinema';
import {DEFAULT_GENRE} from 'utils/const';

const GenresList = () => {
  const activeGenre = useSelector(selectActiveGenre, shallowEqual);
  const genres = useSelector(selectGenres, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = genre => {
    if (genre === DEFAULT_GENRE) {
      dispatch(resetGenres());
    } else {
      dispatch(chooseGenre(genre));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        const classes = classNames('catalog__genres-item', {
          'catalog__genres-item--active': activeGenre === genre,
        });

        return (
          <li className={classes} key={`${genre}`}>
            <Link
              to="/"
              href="#"
              onClick={() => handleClick(genre)}
              className="catalog__genres-link">
              {genre}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export {GenresList};
export default GenresList;
