import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { editCategory } from '../Actions/CategoryAction';
import api from '../api';

class DetailCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Category_Name: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        api.get(`category/get/${id}`)
            .then(res => {
                this.setState({ Category_Name: res.data.Category_Name })
            })
            .catch(error => {
            });
    }

    handleClick() {
        if (!this.state.Category_Name) {
            alert('Please add a Category Name')
            return
        }

        const category = {
            ID: this.props.match.params.id,
            Category_Name: this.state.Category_Name
        };

        this.props.editCategory(category);
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
                                    <Form.Group controlId="Category_Name">
                                        <Form.Label>Category Name</Form.Label>
                                        <Form.Control value={this.state.Category_Name}
                                            onChange={(e) => { this.setState({ Category_Name: e.target.value }) }}
                                            placeholder="Category Name" />
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

export default connect(mapStateToProps, { editCategory })(DetailCategory);