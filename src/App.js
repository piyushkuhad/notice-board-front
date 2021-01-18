import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import ProtectedRoute from './components/protected-route/ProtectedRoute.component';
import HomePage from './pages/homepage/Home.page';
import AuthPage from './pages/auth/Auth.page';
import { useSelector } from 'react-redux';
import SetLocation from './pages/set-location/SetLocation.page';

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    palette: {
      type: 'light',
      primary: {
        main: '#2b8ee2',
      },
    },
  });

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute
              exact
              path="/set-location"
              component={SetLocation}
            />
            <Route
              path="/auth"
              render={() =>
                isAuthenticated ? <Redirect to="/" /> : <AuthPage />
              }
            />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
