import {ApiRoute, AppRoute} from 'utils/const';

import {requestAuthorization, redirectToRoute} from './actionCreators';

const checkAuthAsync = () => (dispatch, _getState, api) =>
  api
    .get(ApiRoute.LOGIN, {credentials: 'include'})
    .then(res => {
      dispatch(requestAuthorization(res.data));
    })
    .catch(() => {
      redirectToRoute(AppRoute.MAIN);
    });

const login = ({login: email, password}) => (dispatch, _getState, api) =>
  api.post(ApiRoute.LOGIN, {email, password}).then(res => {
    dispatch(requestAuthorization(res.data));
  });

export {checkAuthAsync, login};
