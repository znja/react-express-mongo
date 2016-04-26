import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app';
import Welcome from 'components/welcome';
import List from 'containers/list';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/list" component={List} />
  </Route>
);

export default routes;
