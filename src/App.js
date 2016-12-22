import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import Login from './components/Login';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
