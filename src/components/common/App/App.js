import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';

import {checkAuthAsync} from 'features/user';
import {fetchMovies} from 'features/data';
import browserHistory from 'services/browser-history';

import Main from 'components/pages/Main';
import PrivateRoute from 'components/common/PrivateRoute';
import SignIn from 'components/pages/SignIn';
import MyList from 'components/common/MyList';
import CinemaPlayer from 'components/pages/CinemaPlayer';
import ErrorPage from 'components/common/ErrorPage';

const App = () => {
  const dispatch = useDispatch();

  // /** Init app config settings  */
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(checkAuthAsync());
  }, [dispatch]);
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact component={Main} path="/" />
        <PrivateRoute
          exact
          path="/login"
          redirectPath="/"
          render={() => <SignIn />}
          reverse
        />
        <PrivateRoute
          exact
          path="/mylist"
          redirectPath="/login"
          render={() => <MyList />}
        />
        <Route exact path="/player/:id">
          <CinemaPlayer />
        </Route>
        <Route path="*" render={() => <ErrorPage />} />
      </Switch>
    </Router>
  );
};

export default App;
