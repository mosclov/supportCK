import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Col } from 'react-flexbox-grid/lib/index'

class LoginForm extends Component {

  _handleSubmit(e){
    alert("Login Submitted");
    e.preventDefault();
  }
  render() {
    const styleButton = {
      width: '100%',
    };
    const style = {
      width: '100%',
    };

    return (
        <form>
          <TextField
            className="loginForm2" style={style}  floatingLabelText="Email" floatingLabelFixed={true}
          />
          <br />
          <TextField
            className="loginForm2" style={style}  floatingLabelText="Password"
            type="password" floatingLabelFixed={true}
          />
          <br/><br/><br/>
          <RaisedButton
            className="loginButton"
            backgroundColor="#168644" labelColor="white"
            label="LOGIN" type="submit"
            fullWidth
            onTouchTap={this._handleSubmit.bind(this)}
          />
        </form>
    );
  }
}

LoginForm.propTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default muiThemeable()(LoginForm);
