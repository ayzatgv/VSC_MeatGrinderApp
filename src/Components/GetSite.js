import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteSite } from '../Actions/SiteAction';
import { Link } from 'react-router-dom';

class GetSite extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.deleteSite(id);
  }

  render() {
    let Tableee = this.props.Sites.map((item) => {
      return (
        <tr key={item.ID}>
          <td><Button onClick={() => this.handleClick(item.ID)} variant="primary" >Delete</Button></td>
          <td><Link to={`/site/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link></td>
          <td>{item.Site_Name}</td>
          <td>{item.Address}</td>
          <td>{item.Province}</td>
          <td>{item.City}</td>
        </tr>
      );
    })
    return (
      <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
        <Row>
          <Link to={`/site/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
        </Row>
        <Row>
          <Col >
            <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Edit</th>
                  <th>Site Name</th>
                  <th>Address</th>
                  <th>Province</th>
                  <th>City</th>
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
    Sites: state.Sites.items
  }
}

export default connect(mapStateToProps, { deleteSite })(GetSite);