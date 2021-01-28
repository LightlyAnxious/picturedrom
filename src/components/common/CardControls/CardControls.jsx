import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, shallowEqual} from 'react-redux';
import {Link} from 'react-router-dom';

import filmPropTypes from 'proptypes/film.prop';
import {AuthorizationStatus} from 'utils/const';
import {selectAuthStatus} from 'features/user';
import withState from 'hocs/withCardControlsState';

import {ReactComponent as PlayIcon} from 'assets/icons/play-button.svg';
import {ReactComponent as AddIcon} from 'assets/icons/add.svg';
import {ReactComponent as InListIcon} from 'assets/icons/in-list.svg';
import './CardControls.scss';

const CardControls = props => {
  const {film, isFull, onPlayRedirect, onMyListClick, isFavorite} = props;
  const isAuth =
    useSelector(selectAuthStatus, shallowEqual) ===
    AuthorizationStatus.AUTHORIZED;
  const {id} = film;

  return (
    <div className="movie-card__buttons">
      <button
        onClick={() => onPlayRedirect(id)}
        className="btn btn--play movie-card__button"
        type="button">
        <PlayIcon />
        <span>Play</span>
      </button>
      <button
        onClick={onMyListClick}
        className="btn btn--list movie-card__button"
        type="button">
        {!isFavorite ? <AddIcon /> : <InListIcon />}
        <span>My list</span>
      </button>
      {isAuth && isFull ? (
        <Link
          to={`/films/${id}/review`}
          href="add-review.html"
          className="btn movie-card__button">
          Add review
        </Link>
      ) : null}
    </div>
  );
};

CardControls.propTypes = {
  isFull: PropTypes.bool.isRequired,
  film: filmPropTypes,
  isFavorite: PropTypes.bool.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  onPlayRedirect: PropTypes.func.isRequired,
};

export {CardControls};
export default withState(CardControls);
