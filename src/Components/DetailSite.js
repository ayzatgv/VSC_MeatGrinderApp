import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { editSite } from '../Actions/SiteAction';
import api from '../api';

class DetailSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Site_Name: '',
            Address: '',
            Province: '',
            City: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        api.get(`site/get/${id}`)
            .then(res => {
                this.setState({
                    Site_Name: res.data.Site_Name,
                    Address: res.data.Address,
                    Province: res.data.Province,
                    City: res.data.City
                })
            })
            .catch(error => {
            });
    }

    handleClick() {
        if (!this.state.Site_Name.match(/^T[0-9]{4}$/)) {
            alert('Site Name must start with Capital T and followed by 4 digits => T1234')
            return
        }
        if (!this.state.Address) {
            alert('Please add a Site Address')
            return
        }
        if (!this.state.Province) {
            alert('Please add a Site Province')
            return
        }
        if (!this.state.City) {
            alert('Please add a Site City')
            return
        }

        const site = {
            ID: this.props.match.params.id,
            Site_Name: this.state.Site_Name,
            Address: this.state.Address,
            Province: this.state.Province,
            City: this.state.City
        };

        this.props.editSite(site);
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
                                    <Form.Group controlId="Site_Name">
                                        <Form.Label>Site Name</Form.Label>
                                        <Form.Control value={this.state.Site_Name}
                                            onChange={(e) => { this.setState({ Site_Name: e.target.value }) }}
                                            placeholder="ID" />
                                    </Form.Group>

                                    <Form.Group controlId="Address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control value={this.state.Address}
                                            onChange={(e) => { this.setState({ Address: e.target.value }) }}
                                            placeholder="Address" />
                                    </Form.Group>

                                    <Form.Group controlId="Province">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control value={this.state.Province}
                                            onChange={(e) => { this.setState({ Province: e.target.value }) }}
                                            placeholder="Province" />
                                    </Form.Group>

                                    <Form.Group controlId="City">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control value={this.state.City}
                                            onChange={(e) => { this.setState({ City: e.target.value }) }}
                                            placeholder="City" />
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

});

export default connect(mapStateToProps, { editSite })(DetailSite);