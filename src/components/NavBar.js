import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// class Loggedin extends Component {
//   static muiName = 'FlatButton';
//
//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }
//
// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );
//
// Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NavBar extends Component {
  state = {
    logged: true,
  };


  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {

    const appBarStyle = {
      backgroundColor: '#F0F2F2',
      // margin: '0',
    };

    const titleStyles = {
    title: {
      margin: '20%',}
    };

    return (
      <div>
        <AppBar
          style={appBarStyle}
          title={<img
            className="ck-admin-nav-logo"
            src={'../../public/images/cksupportadminlogo.png'}/>}
          showMenuIconButton={false}
          // iconElementLeft={<img
          //   className="ck-admin-nav-logo"
          //   src={'../../public/images/cksupportadminlogo.png'}/>}
          // iconElementRight={this.state.logged ? <Logged /> : <Loggedin />}
        />
      </div>
    );
  }
}

export default NavBar;
