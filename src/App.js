import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from '../src/pages/home-page/home-page'
import { FirstPage } from '../src/pages/first-page/first-page'
import { FooterPage } from '../src/pages/footer-page/footer-page'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/first-page">
          <FirstPage />
        </Route>
        <Route path="/footer-page">
          <FooterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
