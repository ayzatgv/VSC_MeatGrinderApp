import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import api from '../api';
import jwt_decode from "jwt-decode";

import { setLoginStatus } from '../Actions/LoginAction';
import { getUser } from '../Actions/UserAction';
import { getTask } from '../Actions/TaskAction';
import { getSite } from '../Actions/SiteAction';
import { getCluster } from '../Actions/ClusterAction';
import { getCategory } from '../Actions/CategoryAction';
import { getRole } from '../Actions/RoleAction';
import { getOpen, getOpen7Day, getOpenSLApass, getCompletePass,  } from '../Actions/WorkOrderAction';

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: '',
            width: 0,
            height: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    handleClick() {
        api.post(`user/login`, { Username: this.state.Username, Password: this.state.Password })
            .then(res => {
                localStorage.setItem('Token', res.data);

                const Role_ID = jwt_decode(res.data).roleid;
                this.props.setLoginStatus(Role_ID);

                if (Role_ID === '1') {
                    this.props.getUser();
                    this.props.getRole();
                    this.props.getTask();
                    this.props.getSite();
                    this.props.getCategory();
                    this.props.getCluster();

                    this.props.getOpen();
                    this.props.getOpen7Day();
                    this.props.getOpenSLApass();
                    this.props.getCompletePass();
                }
                if (Role_ID === '2') {
                    this.props.getTask();
                    this.props.getSite();
                    this.props.getCategory();
                    this.props.getCluster();

                    this.props.getOpen();
                    this.props.getOpen7Day();
                    this.props.getOpenSLApass();
                    this.props.getCompletePass();
                }
                if (Role_ID === '3') {
                    this.props.getTask();
                }

                this.props.setLoginStatus(Role_ID);
            })
            .catch(error => {
                alert(error.response.data.Message)
            });
    }

    render() {

        return (
            <div className="Login">
                <div style={{ position: 'absolute', marginLeft: (this.state.width / 2) - 55 }}>
                    <img src={require('../Images/MTGR.png').default} alt="" style={{ width: 100 }}>
                    </img>
                </div>
                <div style={{ padding: "10vh" }}>
                </div>
                <div className="aha">
                    <FormGroup controlId="username">
                        <div>Username</div>
                        <FormControl
                            autoFocus
                            value={this.state.username}
                            onChange={(e) => this.setState({ Username: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <div>Password</div>
                        <FormControl
                            value={this.state.password}
                            onChange={(e) => this.setState({ Password: e.target.value })}
                            type="password"
                        />
                    </FormGroup>
                    <Button onClick={this.handleClick} block>
                        Sign In
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    LoginStatus: state.LoginStatus,
    Users: state.Users.items,
    Roles: state.Roles.items,
    Tasks: state.Tasks.items,
    Sites: state.Sites.items,
    Clusters: state.Clusters.items,
    Categories: state.Categories.items,
    WO_Open: state.WorkOrders.Open_items,
    WO_Open7Day: state.WorkOrders.Open7Day_items,
    WO_OpenSLApass: state.WorkOrders.OpenSLApass_items,
    WO_CompletePass: state.WorkOrders.CompletePass_items
});

export default connect(mapStateToProps, { setLoginStatus, getUser, getRole, getTask, getSite, getCluster, getCategory, getOpen, getOpen7Day, getOpenSLApass, getCompletePass })(Login);