import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Tab, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import pi from '../passingItems';
import { FaExclamationCircle } from 'react-icons/fa';

class DetailWorkOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CM_Name: '',
            PM_Name: '',
            VAN_Name: '',
            CM_Count: 0,
            PM_Count: 0,
            VAN_Count: 0,

            items: []
        }
    }

    componentDidMount() {
        this.setState({
            CM_Name: pi.CM_Name,
            PM_Name: pi.PM_Name,
            VAN_Name: pi.VAN_Name,
            items: pi.items,
            CM_Count: pi.items.filter((item) => item.Category === 'Corrective Maintenance').length,
            PM_Count: pi.items.filter((item) => item.Category === 'Preventative Maintenance').length,
            VAN_Count: pi.items.filter((item) => item.Category === 'Vandalism').length
        })
    }

    render() {

        let ALL_Tabel;
        let CM_Tabel;
        let PM_Tabel;
        let VAN_Tabel;

        ALL_Tabel = this.state.items
            .map((item) => {
                return (
                    <tr key={item.ID}>
                        <td>{item.Code}</td>
                        <td>{item.Description}</td>
                        <td>{item.Priority}</td>
                        <td>{item.Username}</td>
                        <td>{item.Site.Site_Name}</td>
                        <td>{item.Site.Province}</td>
                        <td>{item.Status_Description}</td>
                        <td>{item.Date_Raised}</td>
                        <td>{item.Service_Date}{item.TaskDue && <FaExclamationCircle />}</td>
                        <td>{item.Complete_Date}</td>
                        <td>{item.Type_Releted_To}</td>
                    </tr>
                );
            })
        CM_Tabel = this.state.items
            .filter((item) => item.Category === 'Corrective Maintenance')
            .map((item) => {
                return (
                    <tr key={item.ID}>
                        <td>{item.Code}</td>
                        <td>{item.Description}</td>
                        <td>{item.Priority}</td>
                        <td>{item.Username}</td>
                        <td>{item.Site.Site_Name}</td>
                        <td>{item.Site.Province}</td>
                        <td>{item.Status_Description}</td>
                        <td>{item.Date_Raised}</td>
                        <td>{item.Service_Date}{item.TaskDue && <FaExclamationCircle />}</td>
                        <td>{item.Complete_Date}</td>
                        <td>{item.Type_Releted_To}</td>
                    </tr>
                );
            })
        PM_Tabel = this.state.items
            .filter((item) => item.Category === 'Preventative Maintenance')
            .map((item) => {
                return (
                    <tr key={item.ID}>
                        <td>{item.Code}</td>
                        <td>{item.Description}</td>
                        <td>{item.Priority}</td>
                        <td>{item.Username}</td>
                        <td>{item.Site.Site_Name}</td>
                        <td>{item.Site.Province}</td>
                        <td>{item.Status_Description}</td>
                        <td>{item.Date_Raised}</td>
                        <td>{item.Service_Date}{item.TaskDue && <FaExclamationCircle />}</td>
                        <td>{item.Complete_Date}</td>
                        <td>{item.Type_Releted_To}</td>
                    </tr>
                );
            })
        VAN_Tabel = this.state.items
            .filter((item) => item.Category === 'Vandalism')
            .map((item) => {
                return (
                    <tr key={item.ID}>
                        <td>{item.Code}</td>
                        <td>{item.Description}</td>
                        <td>{item.Priority}</td>
                        <td>{item.Username}</td>
                        <td>{item.Site.Site_Name}</td>
                        <td>{item.Site.Province}</td>
                        <td>{item.Status_Description}</td>
                        <td>{item.Date_Raised}</td>
                        <td>{item.Service_Date}{item.TaskDue && <FaExclamationCircle />}</td>
                        <td>{item.Complete_Date}</td>
                        <td>{item.Type_Releted_To}</td>
                    </tr>
                );
            })

        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={4}>
                        <Card className='mb-4' onClick={() => {

                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>{this.state.CM_Name}</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.CM_Count}</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">0</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme3" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={4}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>{this.state.PM_Name}</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.PM_Count}</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">0</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme3" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={4}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>{this.state.VAN_Name}</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.VAN_Count}</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">0</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme3" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="All" id="uncontrolled-tab-example">
                            <Tab eventKey="All" title="All">
                                <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Priority</th>
                                            <th>Username</th>
                                            <th>Site Name</th>
                                            <th>Province</th>
                                            <th>Status</th>
                                            <th>Date Raised</th>
                                            <th>Service Date</th>
                                            <th>Complete Date</th>
                                            <th>Type Related To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ALL_Tabel}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="CM" title="CM">
                                <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Priority</th>
                                            <th>Username</th>
                                            <th>Site Name</th>
                                            <th>Province</th>
                                            <th>Status</th>
                                            <th>Date Raised</th>
                                            <th>Service Date</th>
                                            <th>Complete Date</th>
                                            <th>Type Related To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {CM_Tabel}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="PM" title="PM">
                                <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Priority</th>
                                            <th>Username</th>
                                            <th>Site Name</th>
                                            <th>Province</th>
                                            <th>Status</th>
                                            <th>Date Raised</th>
                                            <th>Service Date</th>
                                            <th>Complete Date</th>
                                            <th>Type Related To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PM_Tabel}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="VAN" title="VAN">
                                <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Priority</th>
                                            <th>Username</th>
                                            <th>Site Name</th>
                                            <th>Province</th>
                                            <th>Status</th>
                                            <th>Date Raised</th>
                                            <th>Service Date</th>
                                            <th>Complete Date</th>
                                            <th>Type Related To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {VAN_Tabel}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    LoginStatus: state.LoginStatus,
    WO_Open: state.WorkOrders.Open_items,
    WO_Open7Day: state.WorkOrders.Open7Day_items,
    WO_OpenSLApass: state.WorkOrders.OpenSLApass_items,
    WO_CompletePass: state.WorkOrders.CompletePass_items,
    WO_OpenLevelOne: state.WorkOrders.OpenLevelOne_items
});

export default connect(mapStateToProps)(DetailWorkOrder);