import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SearchTable from './SearchTable';


class UserSearch extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  _handleSubmit(e){
    alert("Search Submitted");
    e.preventDefault();
  }

  render() {
    const style = {
      width: '15%',
      marginRight: 16,
    };
    const style1 = {
      width: '15%',
      margin: 16,
    };

    const style2 = {
      width: '10%',
      margin: 16,
    };
    const style3 = {
      width: '15%',
      margin: 16,
      verticalAlign: 'bottom',
    };



    return (
      <Grid fluid>
        <Row className="search_user">
          <Col xsOffset={2} xs={10} sm={6} md={6} lg={10}>
            <h1 className="seach_title">Search Users</h1>
          </Col>
        </Row>
        <Row className="text_field_row">
          <Col xsOffset={2} xs={10} sm={6} md={6} lg={8}>
            <TextField
              floatingLabelText="First name"
              floatingLabelFixed={true}
              style={style}
            />
            <TextField
              floatingLabelText="Last name"
              floatingLabelFixed={true}
              style={style1}
            />
            <TextField
              floatingLabelText="Email"
              floatingLabelFixed={true}
              style={style1}
            />
            <TextField
              floatingLabelText="User ID"
              floatingLabelFixed={true}
              style={style2}
            />
            <SelectField
              floatingLabelText="User Type"
              value={this.state.value}
              onChange={this.handleChange}
              style={style3}
              className="select_field_user"
            >
              <MenuItem value={1} primaryText="All" />
              <MenuItem value={2} primaryText="Student" />
              <MenuItem value={3} primaryText="Teacher" />
            </SelectField>
            <RaisedButton label="Search" backgroundColor="#168644" labelColor="white" onTouchTap={this._handleSubmit.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col xsOffset={2} xs={10} sm={6} md={6} lg={8}>
            <SearchTable />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserSearch;
