import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteCluster } from '../Actions/ClusterAction';
import { Link } from 'react-router-dom';

class GetCluster extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.deleteCluster(id);
    }

    render() {
        let Tableee = this.props.Clusters.map((item) => {
            return (
                <tr key={item.ID}>
                    <td><Button onClick={() => this.handleClick(item.ID)} variant="primary" >Delete</Button></td>
                    <td><Link to={`/cluster/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link></td>
                    <td>{item.User_Username}</td>
                    <td>{item.Site.Site_Name}</td>
                    <td>{item.Site.Address}</td>
                    <td>{item.Site.Province}</td>
                    <td>{item.Site.City}</td>
                </tr>
            );
        })
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Link to={`/cluster/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
                </Row>
                <Row>
                    <Col >
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>FME</th>
                                    <th>Site Name</th>
                                    <th>Site Address</th>
                                    <th>Site Province</th>
                                    <th>Site City</th>
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
        Clusters: state.Clusters.items
    }
}

export default connect(mapStateToProps, { deleteCluster })(GetCluster);