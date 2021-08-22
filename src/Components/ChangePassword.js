import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import api from '../api';
import { setLoginStatus } from '../Actions/LoginAction';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OldPassword: '',
            NewPassword: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.OldPassword) {
            alert('Please add your old password')
            return
        }
        if (!this.state.OldPassword) {
            alert('Please add your new password')
            return
        }

        const data = {
            OldPassword: this.state.OldPassword,
            NewPassword: this.state.NewPassword
        };

        api.post(`user/changepassword`, data)
            .then(res => {
                localStorage.removeItem('Token');
                this.props.setLoginStatus('0');
                alert('success')
            })
            .catch(error => {
                alert(error.response.data.Message)
            });
    }

    render() {

        return (

            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={3}></Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Form>

                                    <Form.Group controlId="OldPassword">
                                        <Form.Label>OldPassword</Form.Label>
                                        <Form.Control value={this.state.OldPassword}
                                            onChange={(e) => { this.setState({ OldPassword: e.target.value }) }}
                                            placeholder="OldPassword" />
                                    </Form.Group>

                                    <Form.Group controlId="NewPassword">
                                        <Form.Label>NewPassword</Form.Label>
                                        <Form.Control value={this.state.NewPassword}
                                            onChange={(e) => { this.setState({ NewPassword: e.target.value }) }}
                                            placeholder="NewPassword" />
                                    </Form.Group>

                                    <Button onClick={this.handleClick} variant="primary" >
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    LoginStatus: state.LoginStatus
});

export default connect(mapStateToProps, {setLoginStatus})(ChangePassword);