import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Login from './components/Login';
import UserSearch from './components/UserSearch';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: '#168644',
//   }
// });


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          {/* <UserSearch /> */}
          <div className="content">
            {this.props.children}
            {/* <Login /> */}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
