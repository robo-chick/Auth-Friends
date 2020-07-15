import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';

import theme from './components/ui/Theme';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const logout = (e) => {
  window.localStorage.removeItem("token");
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/login" onClick={logout}>
              Log out
            </Link>
          </li>
          <li>
            <Link to="/friends">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
