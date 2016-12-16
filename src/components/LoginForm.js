import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

class LoginForm extends Component {

  _handleSubmit(e){
    alert("Login Submitted");
    e.preventDefault();
  }
  render() {
    const style = {
      margin: 50,
      width: '40%',
    };
    return (
      <div className="loginForm2">
        <form>
          <TextField hintText="example@example.com" floatingLabelText="Email"/><br />
          <TextField hintText="********" floatingLabelText="Password"
            type="password"/><br />
          <RaisedButton label="LOG IN" primary={true} style={style} type="submit" onClick={this._handleSubmit.bind(this)} />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default muiThemeable()(LoginForm);
