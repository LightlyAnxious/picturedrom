import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';

import {selectAuthStatus} from 'features/user';
import {
  manageFavorite,
  setCurrentFilm,
  selectCurrentFilm,
} from 'features/cinema';
import {AuthorizationStatus, AppRoute} from 'utils/const';
import browserHistory from 'utils/browser-history';
import {pushToHistory} from 'utils/common';
import filmPropTypes from '../proptypes/film.prop';

const withCardControlsState = Component => props => {
  const dispatch = useDispatch();
  const film = useSelector(selectCurrentFilm, shallowEqual);
  const isAuth =
    useSelector(selectAuthStatus, shallowEqual) ===
    AuthorizationStatus.AUTHORIZED;
  const handleFavorite = status => {
    const {id, isFavorite} = film;
    const newCurrentFilm = {...film, isFavorite: !isFavorite};

    dispatch(manageFavorite(id, status));
    dispatch(setCurrentFilm(newCurrentFilm));
  };

  if (!film) {
    return null;
  }

  const {isFavorite = false} = film;
  const handlePlayBtn = path => {
    pushToHistory(browserHistory, `${AppRoute.PLAYER}${path}`);
  };

  const handleMyListBtn = () =>
    isAuth
      ? handleFavorite(film, Number(!isFavorite))
      : pushToHistory(browserHistory, AppRoute.MY_LIST);

  return (
    <Component
      {...props}
      onPlayRedirect={handlePlayBtn}
      onMyListClick={handleMyListBtn}
      isFavorite={isFavorite}
    />
  );
};

withCardControlsState.propTypes = {
  film: filmPropTypes,
  onMyListManageFavorite: PropTypes.func.isRequired,
};

export {withCardControlsState};
export default withCardControlsState;
