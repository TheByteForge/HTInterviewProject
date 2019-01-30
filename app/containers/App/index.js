/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 * It also contains react-transition group for route animations.
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import About from 'containers/About/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Route
        render={({ location }) => (
          <TransitionGroup component={null}>
            <CSSTransition timeout={300} classNames="page" key={location.key}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NotFoundPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

      <GlobalStyle />
    </div>
  );
}
