import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { addUser } from '../Actions/UserAction';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: '',
            Role_ID: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.Username) {
            alert('Please add a Username')
            return
        }
        if (!this.state.Password) {
            alert('Please add a Password')
            return
        }
        if (!this.state.Role_ID) {
            alert('Please select a role')
            return
        }

        const user = {
            Username: this.state.Username,
            Password: this.state.Password,
            Role_ID: this.state.Role_ID
        };

        this.props.addUser(user);
    }

    render() {
        let Roles = this.props.Roles.map(
            (item) => {
                return (
                    <option key={item.ID} value={item.ID}>{item.Role_Name}</option>
                );
            }
        );

        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={3}></Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="Username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control value={this.state.Username}
                                            onChange={(e) => { this.setState({ Username: e.target.value }) }}
                                            placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="Password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={this.state.Password}
                                            onChange={(e) => { this.setState({ Password: e.target.value }) }}
                                            placeholder="Password" />
                                    </Form.Group>

                                    <Form.Label>Roles</Form.Label>
                                    <Form.Group controlId="Roles">
                                        <Form.Control onChange={(e) => { this.setState({ Role_ID: e.target.value }) }} as="select">
                                        <option value={0}>Please select an option</option>
                                            {Roles}
                                        </Form.Control>
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
    Roles: state.Roles.items
});

export default connect(mapStateToProps, { addUser })(AddUser);