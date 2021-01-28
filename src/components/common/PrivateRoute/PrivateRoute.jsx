import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, shallowEqual} from 'react-redux';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from 'utils/const';
import {selectAuthStatus} from 'features/user';

const PrivateRoute = props => {
  const {render, path, exact, redirectPath = '/', reverse = false} = props;

  const authorizationStatus = useSelector(selectAuthStatus, shallowEqual);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTHORIZED;

  return (
    <Route
      path={path}
      exact={exact}
      render={routeProps => {
        if (reverse) {
          return !isAuth ? render(routeProps) : <Redirect to={redirectPath} />;
        }
        return isAuth ? render(routeProps) : <Redirect to={redirectPath} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  reverse: PropTypes.bool,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default PrivateRoute;
