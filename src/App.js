import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './components/Login';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();

class App extends Component {
  getChildContext(){
    return {muiTheme: getMuiTheme()};
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
