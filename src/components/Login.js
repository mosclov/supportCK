import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Login extends Component {
  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <img
            className="ck-admin-logo"
            src={'../../public/images/cksupportadminlogo.png'} alt={"logo"}
          />
        </Row>
        <Row center="xs">
          <Col xs={10} sm={6} md={6} lg={4}>
            <LoginForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
