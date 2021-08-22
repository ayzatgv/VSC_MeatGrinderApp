import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editTask, deleteTask, statusTask } from '../Actions/TaskAction';
import { Link } from 'react-router-dom';
import api from '../api';
import { FaExclamationCircle } from 'react-icons/fa';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import './ContextMenu.css';

function collect(props) {
  return { Task: props.item };
}

class GetTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_Category: '',
      filter_Site: '',
      filter_FME: '',
      filter_WO: '',
      filter_TT: '',
      filter_Status: '',

      Tasks: [],
      SearchMode: false,
      Status: [
        { ID: 1, Status: "Open" },
        { ID: 2, Status: "Closed" },
        { ID: 3, Status: "Canceled" },
        { ID: 4, Status: "Complete" }
      ]
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleContext = this.handleContext.bind(this);
  }

  handleContext(e, data) {
    const Task = data.Task;
    Task.Task_Status = data.Task_Status
    this.props.editTask(Task);
  }

  handleReset() {
    this.setState({
      filter_Category: '',
      filter_Site: '',
      filter_FME: '',
      filter_WO: '',
      filter_TT: '',
      filter_Status: '',

      SearchMode: false
    });
  }

  handleSearch() {
    const data = {
      Category: this.state.filter_Category,
      Site: this.state.filter_Site,
      FME: this.state.filter_FME,
      WO: this.state.filter_WO,
      TT: this.state.filter_TT,
      Status: this.state.filter_Status,
    }

    api.post('task/search', data)
      .then(res => {
        this.setState({ Tasks: res.data, SearchMode: true })
      })
      .catch(error => {
        alert('nothing to show')
      });
  }

  handleClick(id) {
    this.props.deleteTask(id);
  }

  handleStatus(data) {
    this.props.statusTask(data);
  }

  render() {

    let Status = this.state.Status.map(
      (item) => {
        return (
          <option key={item.ID} value={item.Status}>{item.Status}</option>
        );
      }
    );

    let Tableee;

    (this.state.SearchMode === false) ?
      Tableee = this.props.Tasks
        .map((item) => {
          return (
            <tr key={item.ID}>
              {this.props.LoginStatus !== '3' && <td><Button onClick={() => this.handleClick(item.ID)} variant="primary" >Delete</Button></td>}
              {this.props.LoginStatus !== '3' && <td><Link to={`/task/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link></td>}
              <td>{item.Task_Name}</td>
              <td>
                {
                  this.props.LoginStatus !== '3' &&
                  <ContextMenuTrigger collect={collect} item={item} id="Task_Status_Context"><div>{item.Task_Status}</div></ContextMenuTrigger>
                }
                {this.props.LoginStatus === '3' && <div>{item.Task_Status}</div>}
                {this.props.LoginStatus === '3' && item.Task_Status === 'Open' && <Button onClick={() => this.handleStatus({ ID: item.ID, Task_Status: 'Complete' })} variant="primary" >Complete</Button>}
                {this.props.LoginStatus === '3' && item.Task_Status === 'Complete' && <Button onClick={() => this.handleStatus({ ID: item.ID, Task_Status: 'Open' })} variant="primary" >ReOpen</Button>}
              </td>
              <td>{item.Category.Category_Name}</td>
              <td>{item.Site.Site_Name}</td>
              <td>{item.Task_Assigned_To_Username}</td>
              <td>{item.Date_Raised}</td>
              <td>
                {item.Service_Date}
                {item.TaskDue && <FaExclamationCircle style={{ color: "red" }} />}
              </td>
              <td>{item.Date_Completed}</td>
              <td>{item.TT}</td>
              <td>{item.WO}</td>
            </tr>

          );

        })
      : Tableee = this.state.Tasks
        .map((item) => {
          return (
            <tr key={item.ID}>
              {this.props.LoginStatus !== '3' && <td><Button onClick={() => this.handleClick(item.ID)} variant="primary" >Delete</Button></td>}
              {this.props.LoginStatus !== '3' && <td><Link to={`/task/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link></td>}
              <td>{item.Task_Name}</td>
              <td>
                {item.Task_Status}
                {this.props.LoginStatus === '3' && item.Task_Status === 'Open' && <Button onClick={() => this.handleStatus({ ID: item.ID, Task_Status: 'Complete' })} variant="primary" >Complete</Button>}
                {this.props.LoginStatus === '3' && item.Task_Status === 'Complete' && <Button onClick={() => this.handleStatus({ ID: item.ID, Task_Status: 'Open' })} variant="primary" >ReOpen</Button>}
              </td>
              <td>{item.Category.Category_Name}</td>
              <td>{item.Site.Site_Name}</td>
              <td>{item.Task_Assigned_To_Username}</td>
              <td>{item.Date_Raised}</td>
              <td>
                {item.Service_Date}
                {item.TaskDue && <FaExclamationCircle />}
              </td>
              <td>{item.Date_Completed}</td>
              <td>{item.TT}</td>
              <td>{item.WO}</td>
            </tr>

          );

        })

    return (

      <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>

        <Row xs={1} md={6}>
          {this.props.LoginStatus !== '3' &&
            <Col>
              <Form.Group controlId="FME">
                <Form.Control value={this.state.filter_FME}
                  onChange={(e) => { this.setState({ filter_FME: e.target.value }) }}
                  placeholder="FME" />
              </Form.Group>
            </Col>
          }
          <Col>
            <Form.Group controlId="Category">
              <Form.Control value={this.state.filter_Category}
                onChange={(e) => { this.setState({ filter_Category: e.target.value }) }}
                placeholder="Category" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Site">
              <Form.Control value={this.state.filter_Site}
                onChange={(e) => { this.setState({ filter_Site: e.target.value }) }}
                placeholder="Site" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="WO">
              <Form.Control value={this.state.filter_WO}
                onChange={(e) => { this.setState({ filter_WO: e.target.value }) }}
                placeholder="WO" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="TT">
              <Form.Control value={this.state.filter_TT}
                onChange={(e) => { this.setState({ filter_TT: e.target.value }) }}
                placeholder="TT" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Status">
              <Form.Control onChange={(e) => { this.setState({ filter_Status: e.target.value }) }} as="select">
                <option value={''}>Task Status</option>
                {Status}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {this.props.LoginStatus !== '3' && <Link to={`/task/add`} className="mb-3"><Button variant="primary" >Add</Button></Link>}
        {this.props.LoginStatus !== '3' && <Link to={``} className="ml-3"><Button variant="primary" >Upload</Button></Link>}
        <Button variant="primary" className="mx-3" onClick={this.handleSearch}>search</Button>
        <Button variant="primary" onClick={this.handleReset}>Reset</Button>

        <Row className="mt-3">
          <Col >
            <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  {this.props.LoginStatus !== '3' && <th>Delete</th>}
                  {this.props.LoginStatus !== '3' && <th>Edit</th>}
                  <th>Task Name</th>
                  <th>Task Status</th>
                  <th>Category Name</th>
                  <th>Site Name</th>
                  <th>Asigned To FME</th>
                  <th>Date Raised</th>
                  <th>SLA</th>
                  <th>Date Completed</th>
                  <th>TT</th>
                  <th>WO</th>
                </tr>
              </thead>
              <tbody>
                {Tableee}
              </tbody>
            </Table>
            <div>
              <ContextMenu id="Task_Status_Context">
                <MenuItem data={{ Task_Status: 'Open' }} onClick={this.handleContext}>Open</MenuItem>
                <MenuItem data={{ Task_Status: 'Closed' }} onClick={this.handleContext}>Closed</MenuItem>
                <MenuItem data={{ Task_Status: 'Canceled' }} onClick={this.handleContext}>Canceled</MenuItem>
              </ContextMenu>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.LoginStatus,
    Tasks: state.Tasks.items
  }
}

export default connect(mapStateToProps, { editTask, deleteTask, statusTask })(GetTask);