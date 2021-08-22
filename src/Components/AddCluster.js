import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { addCluster } from '../Actions/ClusterAction';

class AddCluster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User_ID: '',
            Site_ID: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.User_ID) {
            alert('Please select a FME')
            return
        }
        if (!this.state.Site_ID) {
            alert('Please select a Site ID')
            return
        }

        const cluster = {
            User_ID: this.state.User_ID,
            Site_ID: this.state.Site_ID
        };

        this.props.addCluster(cluster);
    }

    render() {
        let FMEs = this.props.Users
            .filter((item) => item.Role_ID === 3)
            .map(
                (item) => {
                    return (
                        <option key={item.ID} value={item.ID}>{item.Username}</option>
                    );
                }
            );
        let Sites = this.props.Sites.map(
            (item) => {
                return (
                    <option key={item.ID} value={item.ID}>{item.Site_Name}</option>
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
                                    <Form.Label>FMEs</Form.Label>
                                    <Form.Group controlId="FMEs">
                                        <Form.Control onChange={(e) => { this.setState({ User_ID: e.target.value }) }} as="select">
                                      <option value={0}>Please select an option</option>
                                            {FMEs}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Label>Sites</Form.Label>
                                    <Form.Group controlId="Sites">
                                        <Form.Control onChange={(e) => { this.setState({ Site_ID: e.target.value }) }} as="select">
                                      <option value={0}>Please select an option</option>
                                            {Sites}
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
    Users: state.Users.items,
    Sites: state.Sites.items
});

export default connect(mapStateToProps, { addCluster })(AddCluster);