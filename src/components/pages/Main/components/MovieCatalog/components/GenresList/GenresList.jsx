import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import classNames from 'classnames';

import {
  chooseGenre,
  resetGenres,
  selectGenres,
  selectActiveGenre,
} from 'features/cinema';
import {useWindowSize} from 'hooks';
import {DEFAULT_GENRE, WindowSize} from 'utils/const';

import Select from 'components/shared/Select/Select';
import GenreItem from './components/GenreItem';

const GenresList = () => {
  const activeGenre = useSelector(selectActiveGenre, shallowEqual);
  const genres = useSelector(selectGenres, shallowEqual);
  const dispatch = useDispatch();
  const currentWindowSize = useWindowSize();
  const isMobile = currentWindowSize.width <= WindowSize.MOBILE;

  const handleClick = genre => {
    if (genre === DEFAULT_GENRE) {
      dispatch(resetGenres());
    } else {
      dispatch(chooseGenre(genre));
    }
  };

  const renderGenreList = () => (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        const classes = classNames('catalog__genres-item', {
          'catalog__genres-item--active': activeGenre === genre,
        });

        return (
          <li className={classes} key={`${genre}`}>
            <GenreItem onClick={() => handleClick(genre)}>{genre}</GenreItem>
          </li>
        );
      })}
    </ul>
  );

  const renderGenresListOrSelect = () =>
    !isMobile ? (
      renderGenreList()
    ) : (
      <Select
        classes="movies-list__select"
        options={genres}
        optionItem={GenreItem}
        onClick={handleClick}
      />
    );

  return renderGenresListOrSelect();
};

export {GenresList};
export default GenresList;
