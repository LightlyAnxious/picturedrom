import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import browserHistory from 'utils/browser-history';

import PageHeader from 'components/common/PageHeader';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact component={PageHeader} path="/" />
    </Switch>
  </Router>
);

export default App;
