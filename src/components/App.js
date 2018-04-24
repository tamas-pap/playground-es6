import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Slide from './Slide';

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/variable-declaration" />
      <Route path="/:slideId" component={Slide} />
    </Switch>
  </Router>
);

export default App;
