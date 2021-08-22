import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image, Row, Col } from 'react-bootstrap';
import Jumbotron from "../Images/MTGR.png";
import jwt_decode from "jwt-decode";
import { setLoginStatus } from '../Actions/LoginAction';
import { connect } from 'react-redux';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.removeItem('Token');
        this.props.setLoginStatus('0');
    }

    render() {

        return (
            <>
                <Link id='GoToMain' style={{ display: 'none' }} to="/">a</Link>
                <Link id='GoToUsers' style={{ display: 'none' }} to="/user">a</Link>
                <Link id='GoToTasks' style={{ display: 'none' }} to="/task">a</Link>
                <Link id='GoToCategories' style={{ display: 'none' }} to="/category">a</Link>
                <Link id='GoToSites' style={{ display: 'none' }} to="/site">a</Link>
                <Link id='GoToClusters' style={{ display: 'none' }} to="/cluster">a</Link>
                <Link id='GoToChangePassword'style={{ display: 'none' }} to="/user/changepassword">a</Link>
                <Link id='GoToDetailWorkOrder'style={{ display: 'none' }} to="/detailworkorder">a</Link>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        <Row style={{ alignItems: 'center' }}>
                            <Col>
                                <Image src={Jumbotron} height={40} ></Image>
                            </Col >
                            <Col >
                                <div style={{ textAlign: 'center', marginLeft: -25 }} onClick={() => { document.getElementById('GoToMain').click(); }}>Meat Grinder</div>
                            </Col>
                        </Row>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link ><div onClick={() => { document.getElementById('GoToMain').click(); }}>Main</div></Nav.Link>
                            {this.props.LoginStatus === '1' && <Nav.Link ><div onClick={() => { document.getElementById('GoToUsers').click(); }}>Users</div></Nav.Link>}
                            {this.props.LoginStatus !== '3' && <Nav.Link ><div onClick={() => { document.getElementById('GoToCategories').click(); }}>Categories</div></Nav.Link>}
                            {this.props.LoginStatus !== '3' && <Nav.Link ><div onClick={() => { document.getElementById('GoToSites').click(); }}>Sites</div></Nav.Link>}
                            {this.props.LoginStatus !== '3' && <Nav.Link ><div onClick={() => { document.getElementById('GoToClusters').click(); }}>Clusters</div></Nav.Link>}
                            <Nav.Link ><div onClick={() => { document.getElementById('GoToTasks').click(); }}>Tasks</div></Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={jwt_decode(localStorage.getItem('Token')).unique_name} id="collasible-nav-dropdown">
                                <NavDropdown.Item className="" onClick={() => { document.getElementById('GoToChangePassword').click(); }}>Password</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="" onClick={this.handleClick}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        LoginStatus: state.LoginStatus
    }
}

export default connect(mapStateToProps, { setLoginStatus })(Navigation);