/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import About from 'containers/About/Loadable';
// import StyleGuide from 'containers/StyleGuide/Loadable';
// import Contact from 'containers/Contact/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/styleguide" component={StyleGuide} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch> */}

      <Route
        render={({ location }) => (
          <TransitionGroup component={null}>
            <CSSTransition timeout={300} classNames="page" key={location.key}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

      <GlobalStyle />
    </div>
  );
}
