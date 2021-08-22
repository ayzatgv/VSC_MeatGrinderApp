import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GetUser extends Component {

  render() {
    let Tableee = this.props.Users.map((item) => {
      return (
        <tr key={item.ID} >
          <td>
            <Link to={`/user/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link>
          </td>
          <td>{item.Username}</td>
          <td>{item.Role_Name}</td>
        </tr>
      );
    })
    return (
      <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
        <Row>
          <Link to={`/user/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
        </Row>
        <Row>
          <Col >
            <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  <th>Edit</th>
                  <th>Username</th>
                  <th>Role Name</th>
                </tr>
              </thead>
              <tbody>
                {Tableee}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Users: state.Users.items
  }
}

export default connect(mapStateToProps)(GetUser);