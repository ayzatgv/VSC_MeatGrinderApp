import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import api from '../api';
import pi from '../passingItems';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Total_Tasks_Counter: 0,
            Complete_Tasks_Counter: 0,
            Open_Tasks_Counter: 0,
            Closed_Tasks_Counter: 0,
            Sites_Involved_Counter: 0,
            Level_One_Counter: 0
        }
    }

    componentDidMount() {
        api.get(`/task/count`)
            .then(res => {
                this.setState({
                    Total_Tasks_Counter: res.data.Total_Tasks,
                    Complete_Tasks_Counter: res.data.Complete_Tasks,
                    Open_Tasks_Counter: res.data.Open_Tasks,
                    Closed_Tasks_Counter: res.data.Closed_Tasks,
                    Sites_Involved_Counter: res.data.Sites_Involved
                })
            })
    }

    render() {

        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={3}>
                        <Card className='mb-4' onClick={()=>{
                            pi.items=this.props.WO_Open;
                            pi.CM_Name ='Open CM WOs';
                            pi.PM_Name ='Open PM WOs';
                            pi.VAN_Name ='Open VAN WOs';
                            document.getElementById('GoToDetailWorkOrder').click();
                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>Open WO</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.props.WO_Open.length}</h3>
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
                    <Col md={12} xl={3}>
                    <Card className='mb-4' onClick={()=>{
                            pi.items=this.props.WO_Open7Day;
                            pi.CM_Name ='Open CM WOs SLA Near Pass';
                            pi.PM_Name ='Open PM WOs SLA Near Pass';
                            pi.VAN_Name ='Open VAN WOs SLA Near Pass';
                            document.getElementById('GoToDetailWorkOrder').click();
                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>Open WO Near SLA Pass</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.props.WO_Open7Day.length}</h3>
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
                    <Col md={12} xl={3}>
                    <Card className='mb-4' onClick={()=>{
                            pi.items=this.props.WO_OpenSLApass;
                            pi.CM_Name ='Open CM WOs SLA Passed';
                            pi.PM_Name ='Open PM WOs SLA Passed';
                            pi.VAN_Name ='Open VAN WOs SLA Passed';
                            document.getElementById('GoToDetailWorkOrder').click();
                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>Open WO SLA pass</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.props.WO_OpenSLApass.length}</h3>
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
                    <Col md={12} xl={3}>
                    <Card className='mb-4' onClick={()=>{
                            pi.items=this.props.WO_CompletePass;
                            pi.CM_Name ='Completed CM WOs SLA Pass';
                            pi.PM_Name ='Completed PM WOs SLA Pass';
                            pi.VAN_Name ='Completed VAN WOs SLA Pass';
                            document.getElementById('GoToDetailWorkOrder').click();
                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>Completed WO SLA Pass</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.props.WO_CompletePass.length}</h3>
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
                    <Col md={12} xl={3}>
                    <Card className='mb-4' onClick={()=>{
                            pi.items=this.props.WO_OpenLevelOne;
                            pi.CM_Name ='Open CM WOs Level 1';
                            pi.PM_Name ='Open PM WOs Level 1';
                            pi.VAN_Name ='Open VAN WOs Level 1';
                            document.getElementById('GoToDetailWorkOrder').click();
                        }}>
                            <Card.Body>
                                <h6 className='mb-4'>Open WO Level One</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.props.WO_OpenLevelOne.length}</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">0</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme3" role="progressbar" style={{ width: '100%',backgroundColor:'red' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                <Col md={12} xl={3}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>Total Tasks</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.Total_Tasks_Counter}</h3>
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
                    <Col md={12} xl={3}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>Tasks Complete</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.Complete_Tasks_Counter}</h3>
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
                    <Col md={12} xl={3}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>Tasks Open</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.Open_Tasks_Counter}</h3>
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
                    <Col md={12} xl={3}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>Tasks Closed</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.Closed_Tasks_Counter}</h3>
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
                    <Col md={12} xl={3}>
                        <Card className='mb-4'>
                            <Card.Body>
                                <h6 className='mb-4'>Total Sites Involved</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather icon-corner-left-down text-c-red f-30 m-r-5" />{this.state.Sites_Involved_Counter}</h3>
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

export default connect(mapStateToProps)(Main);