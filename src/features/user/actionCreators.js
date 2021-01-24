import ActionType from './actionTypes';

const requestAuthorization = authInfo => ({
  type: ActionType.REQUEST_AUTHORIZATION,
  payload: authInfo,
});

const redirectToRoute = url => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {requestAuthorization, redirectToRoute};
