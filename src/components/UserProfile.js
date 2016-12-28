import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



class UserProfile extends Component {

  render() {
    const style = {
      backgroundColor: "#ffffff",
      color: "#737373",
      width: '100%',
    };

    return (
      <Grid fluid>
        <Row>
          <Col xsOffset={2} xs={10} sm={6} md={6} lg={1}>
            <img
              className="avatar"
              src={'../../public/images/avatar.png'} alt={"avatar"}
            />
          </Col>
          <Col xs={10} sm={6} md={6} lg={5}>
            <h1 className="user_profile_name">CourseKey Student</h1>
          </Col>
          <Col xs={10} sm={6} md={6} lg={2}>
            <div className="login_as_link">
              <a href="" className="link">Log in as CourseKey</a>
            </div>
          </Col>
          <Col xs={10} sm={6} md={6} lg={2}></Col>
        </Row>
      <Row>
        <Col xsOffset={2} xs={10} sm={6} md={6} lg={8}>
          <Tabs inkBarStyle={{background: '#168644'}} style={{width: '50%'}}>
            <Tab label="General Information" style={style} >
            </Tab>
            <Tab label="Attendance" style={style} >
            </Tab>
            <Tab label="Assessments" style={style} >
            </Tab>
          </Tabs>
        </Col>
      </Row>
      </Grid>
    );
  }
}

export default UserProfile;
