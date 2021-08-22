import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteCategory } from '../Actions/CategoryAction';
import { Link } from 'react-router-dom';

class GetCategory extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.deleteCategory(id);
    }

    render() {
        let Tableee = this.props.Categories.map((item) => {
            return (
                <tr key={item.ID} >
                    <td><Button onClick={() => this.handleClick(item.ID)} variant="primary" >Delete</Button></td>
                    <td><Link to={`/category/detail/${item.ID}`}><Button variant="primary" >Edit</Button></Link></td>
                    <td>{item.Category_Name}</td>
                </tr>
            );
        })
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Link to={`/category/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
                </Row>
                <Row>
                    <Col >
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>Category Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tableee}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Categories: state.Categories.items
    }
}

export default connect(mapStateToProps, { deleteCategory })(GetCategory);