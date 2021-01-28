import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import withActiveState from 'hocs/withActiveState';
import filmProptypes from 'proptypes/film.prop';
import {setCurrentFilm} from 'features/cinema';
import {pushToHistory} from 'utils/common';
import browserHistory from 'services/browser-history';
import {AppRoute, PLAY_DELAY} from 'utils/const';

import VideoPlayer from 'components/common/VideoPlayer';

import './SmallMovieCard.scss';

const SmallMovieCard = props => {
  const {film, isActive, onActiveToggle, onClickSetCurrent} = props;
  const dispatch = useDispatch();
  let toSetActiveTimer = null;

  const handleHover = () => {
    /* eslint-disable */
    toSetActiveTimer = setTimeout(() => {
      onActiveToggle(!isActive);
    }, PLAY_DELAY);
  };
  /* eslint-enable */

  const handleBlur = () => {
    if (isActive) {
      onActiveToggle(!isActive);
    }

    if (toSetActiveTimer) {
      clearTimeout(toSetActiveTimer);
    }
  };

  const {id, name, previewImage, previewVideoLink} = film;

  const handleClick = () => {
    const targetPath = `${AppRoute.FILMS}${id}`;
    onClickSetCurrent(film);
    dispatch(setCurrentFilm(film));

    pushToHistory(browserHistory, targetPath);
  };

  useEffect(() => () => clearTimeout(toSetActiveTimer));

  return (
    /* eslint-disable */
    <article
      onClick={handleClick}
      onFocus={handleHover}
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
      className="small-movie-card catalog__movies-card">
      <VideoPlayer
        name={name}
        previewImage={previewImage}
        previewVideoLink={previewVideoLink}
        isPlaying={isActive}
      />
      <h3 className="small-movie-card__title">
        <Link
          to="/films/:id"
          className="small-movie-card__link"
          href="movie-page.html">
          {name}
        </Link>
      </h3>
    </article>
    /* eslint-enable */
  );
};

SmallMovieCard.propTypes = {
  film: filmProptypes,
  isActive: PropTypes.bool.isRequired,
  onActiveToggle: PropTypes.func.isRequired,
  onClickSetCurrent: PropTypes.func,
};

export {SmallMovieCard};
export default withActiveState(SmallMovieCard);
