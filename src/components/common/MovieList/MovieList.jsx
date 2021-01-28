import React, {memo} from 'react';

import filmsPropTypes from 'proptypes/films.prop';

import SmallMovieCard from './components/SmallMovieCard';

const MovieList = props => {
  const {films} = props;

  if (films.length === 0 || !films) {
    return null;
  }

  return (
    <div className="catalog__movies-list">
      {films.map(film => {
        const {name, id} = film;
        return <SmallMovieCard film={film} key={`${id}-${name}`} />;
      })}
    </div>
  );
};

MovieList.propTypes = {
  films: filmsPropTypes,
};

export default memo(MovieList);
