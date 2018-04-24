import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import VariableDeclarationSlide from './slides/VariableDeclarationSlide';

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/variable-declaration" />
      <Route path="/variable-declaration" component={VariableDeclarationSlide} />
    </Switch>
  </Router>
);

export default App;
