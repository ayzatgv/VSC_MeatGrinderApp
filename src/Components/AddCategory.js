import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { addCategory } from '../Actions/CategoryAction';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Category_Name: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.Category_Name) {
            alert('Please add a Category Name')
            return
        }

        const category = {
            Category_Name: this.state.Category_Name
        };

        this.props.addCategory(category);
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

export default connect(mapStateToProps, { addCategory })(AddCategory);