import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Grid, Row, Col } from 'react-flexbox-grid';

console.log(Grid);
class Login extends Component {
  render() {
    return (
      <Grid>
        <Row center="xs">
          <h1>Support</h1>
        </Row>
        <Row center="xs">
          <Col xs={10} sm={6} md={6} lg={5}>
            <LoginForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
