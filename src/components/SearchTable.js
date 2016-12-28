import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

class SearchTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };


  render() {
    const style = {
      color: '#2D2A32',
      fontWeight: 'bold',
      marginBottom: 0,
    };

    const bottomBorderStyle = {
      borderColor: '#168644',
    };

    return (
      <div className="search_table">
        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow style={bottomBorderStyle}>
              <TableHeaderColumn className="table_pic" tooltip="User Pic"></TableHeaderColumn>
              <TableHeaderColumn className="table_header" tooltip="The First Name" style={style}>First name</TableHeaderColumn>
              <TableHeaderColumn className="table_header"  tooltip="The Last Name" style={style}>Last Name</TableHeaderColumn>
              <TableHeaderColumn className="table_header table_email" tooltip="The Email" style={style}>Email</TableHeaderColumn>
              <TableHeaderColumn className="table_header" tooltip="The User Id" style={style}>User Id</TableHeaderColumn>
              <TableHeaderColumn className="table_header" tooltip="The User Type" style={style}>User Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn className="table_pic"></TableRowColumn>
                <TableRowColumn className="table_data">{row.name}</TableRowColumn>
                <TableRowColumn className="table_data">{row.status}</TableRowColumn>
                <TableRowColumn className="table_data table_email">{row.status}</TableRowColumn>
                <TableRowColumn className="table_data">{row.status}</TableRowColumn>
                <TableRowColumn className="table_data">{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>

      </div>

    );
  }
}

export default SearchTable;
