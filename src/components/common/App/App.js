import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';

import {checkAuthAsync} from 'features/user';
import browserHistory from 'services/browser-history';

import Main from 'components/pages/Main';

const App = () => {
  const dispatch = useDispatch();

  // /** Init app config settings  */
  useEffect(() => dispatch(checkAuthAsync()), [dispatch]);
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact component={Main} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
