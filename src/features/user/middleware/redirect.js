import browserHistory from 'utils/browser-history';
import ActionType from '../actionTypes';

const redirect = _store => next => action => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    /* eslint-disable */
    browserHistory.push(action.payload);
  }

  return next(action);
};

export {redirect};
