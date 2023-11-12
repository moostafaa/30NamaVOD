import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import Home from './components/Home';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            {/* Add navigation links */}
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" component={Home} />

          {/* Protected Routes */}
          <PrivateRoute exact path="/profile" component={Profile} />

          {/* Authentication Routes */}
          <Route path="/auth" component={AuthContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;