import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { addTask } from '../Actions/TaskAction';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Task_Name: '',
            Task_Description: '',
            Task_Assigned_To_ID: '',
            Service_Date: '',
            Site_ID: '',
            Category_ID: '',
            WO: '',
            TT: '',

            SLA_Date: new Date()
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.Task_Name) {
            alert('Please add a Task Name')
            return
        }
        if (!this.state.Task_Description) {
            alert('Please add a Task Description')
            return
        }
        if (!this.state.Task_Assigned_To_ID) {
            alert('Please select a fme')
            return
        }
        if (!this.state.Service_Date) {
            alert('Please select a sla date')
            return
        }
        if (!this.state.Site_ID) {
            alert('Please select a site')
            return
        }
        if (!this.state.Category_ID) {
            alert('Please select a category')
            return
        }

        const task = {
            Task_Name: this.state.Task_Name,
            Task_Description: this.state.Task_Description,
            Task_Assigned_To_ID: this.state.Task_Assigned_To_ID,
            Service_Date: document.getElementById("slatime").value,
            Site_ID: this.state.Site_ID,
            Category_ID: this.state.Category_ID,
            WO: this.state.WO,
            TT: this.state.TT
        };

        this.props.addTask(task);
    }

    render() {
        const ExampleCustomInput = ({ value, onClick }) => (
            <Form.Group>
                <Form.Control id="slatime" defaultValue={value} onClick={onClick} />
            </Form.Group>
        );
        let Categories = this.props.Categories.map(
            (item) => {
                return (
                    <option key={item.ID} value={item.ID}>{item.Category_Name}</option>
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
        let FMEs = this.props.Users
            .filter((item) => item.Role_ID === 3)
            .map(
                (item) => {
                    return (
                        <option key={item.ID} value={item.ID}>{item.Username}</option>
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
                                    <Form.Label>Site Name</Form.Label>
                                    <Form.Group controlId="Siteid">
                                        <Form.Control onChange={(e) => { this.setState({ Site_ID: e.target.value }) }} as="select">
                                            <option value={0}>Please select an option</option>
                                            {Sites}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="Task_Name">
                                        <Form.Label>Task Name</Form.Label>
                                        <Form.Control value={this.state.Task_Name}
                                            onChange={(e) => { this.setState({ Task_Name: e.target.value }) }}
                                            placeholder="Task Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Task_Description">
                                        <Form.Label>Task Description</Form.Label>
                                        <Form.Control value={this.state.Task_Description}
                                            onChange={(e) => { this.setState({ Task_Description: e.target.value }) }}
                                            placeholder="Task Description" />
                                    </Form.Group>

                                    <Form.Label>SLA Date</Form.Label>
                                    <Form.Group controlId="Taskservicedate">
                                        <DatePicker
                                            selected={this.state.Service_Date}
                                            onChange={date => this.setState({ Service_Date: date })}
                                            customInput={<ExampleCustomInput />}
                                        />
                                    </Form.Group>

                                    <Form.Label>FMEs</Form.Label>
                                    <Form.Group controlId="Asignedto">
                                        <Form.Control onChange={(e) => { this.setState({ Task_Assigned_To_ID: e.target.value }) }} as="select">
                                            <option value={0}>Please select an option</option>
                                            {FMEs}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Label>Category</Form.Label>
                                    <Form.Group controlId="Category">
                                        <Form.Control onChange={(e) => { this.setState({ Category_ID: e.target.value }) }} as="select">
                                            <option value={0}>Please select an option</option>
                                            {Categories}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="WO">
                                        <Form.Label>WO</Form.Label>
                                        <Form.Control value={this.state.WO}
                                            onChange={(e) => { this.setState({ WO: e.target.value }) }}
                                            placeholder="WO" />
                                    </Form.Group>

                                    <Form.Group controlId="TT">
                                        <Form.Label>TT</Form.Label>
                                        <Form.Control value={this.state.TT}
                                            onChange={(e) => { this.setState({ TT: e.target.value }) }}
                                            placeholder="TT" />
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
    Categories: state.Categories.items,
    Sites: state.Sites.items
});

export default connect(mapStateToProps, { addTask })(AddTask);