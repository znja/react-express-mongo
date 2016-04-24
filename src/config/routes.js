import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app';
import SetName from 'containers/SetName';
import Hello from 'components/hello';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SetName} />
    <Route path="/hello" component={Hello} />
  </Route>
);

export default routes;
