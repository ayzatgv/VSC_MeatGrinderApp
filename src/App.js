import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";

import { setLoginStatus } from './Actions/LoginAction';
import { getUser } from './Actions/UserAction';
import { getTask } from './Actions/TaskAction';
import { getSite } from './Actions/SiteAction';
import { getCluster } from './Actions/ClusterAction';
import { getCategory } from './Actions/CategoryAction';
import { getRole } from './Actions/RoleAction';
import { getOpen, getOpen7Day, getOpenSLApass, getCompletePass } from './Actions/WorkOrderAction';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

import GetTask from './Components/GetTask';
import GetUser from './Components/GetUser';
import GetCategory from './Components/GetCategory';
import GetSite from './Components/GetSite';
import GetCluster from './Components/GetCluster';

import AddTask from './Components/AddTask';
import AddUser from './Components/AddUser';
import AddCategory from './Components/AddCategory';
import AddSite from './Components/AddSite';
import AddCluster from './Components/AddCluster';

import DetailTask from './Components/DetailTask';
import DetailUser from './Components/DetailUser';
import DetailCategory from './Components/DetailCategory';
import DetailSite from './Components/DetailSite';
import DetailCluster from './Components/DetailCluster';
import DetailWorkOrder from './Components/DetailWorkOrder';

import ChangePassword from './Components/ChangePassword';


class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('Token') != null) {

      const Role_ID = jwt_decode(localStorage.getItem('Token')).roleid;
      this.props.setLoginStatus(Role_ID);

      if (Role_ID === '1') {
        this.props.getUser();
        this.props.getRole();
        this.props.getTask();
        this.props.getSite();
        this.props.getCategory();
        this.props.getCluster();

        this.props.getOpen();
        this.props.getOpen7Day();
        this.props.getOpenSLApass();
        this.props.getCompletePass();
      }
      if (Role_ID === '2') {
        this.props.getTask();
        this.props.getSite();
        this.props.getCategory();
        this.props.getCluster();

        this.props.getOpen();
        this.props.getOpen7Day();
        this.props.getOpenSLApass();
        this.props.getCompletePass();
      }
      if (Role_ID === '3') {
        this.props.getTask();
      }
    }
    else {
      this.props.setLoginStatus('0');
    }
  }

  render() {
    return (
      (this.props.LoginStatus === '1') ?  /////// Manager
        (
          <div>
            <Router >
              <Navigation />
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/user" exact component={GetUser} />
                <Route path="/user/add" exact component={AddUser} />
                <Route path="/user/detail/:id" exact component={DetailUser} />
                <Route path="/task" exact component={GetTask} />
                <Route path="/task/add" exact component={AddTask} />
                <Route path="/task/detail/:id" exact component={DetailTask} />
                <Route path="/category" exact component={GetCategory} />
                <Route path="/category/add" exact component={AddCategory} />
                <Route path="/category/detail/:id" exact component={DetailCategory} />
                <Route path="/site" exact component={GetSite} />
                <Route path="/site/add" exact component={AddSite} />
                <Route path="/site/detail/:id" exact component={DetailSite} />
                <Route path="/cluster" exact component={GetCluster} />
                <Route path="/cluster/add" exact component={AddCluster} />
                <Route path="/cluster/detail/:id" exact component={DetailCluster} />
                <Route path="/user/changepassword" exact component={ChangePassword} />
                <Route path="/detailworkorder" exact component={DetailWorkOrder} />
              </Switch>
            </Router>
          </div>
        )
        : (this.props.LoginStatus === '2') ?  /////// Dispatcher
          (
            <div>
              <Router>
                <Navigation />
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path="/task" exact component={GetTask} />
                  <Route path="/task/add" exact component={AddTask} />
                  <Route path="/task/detail/:id" exact component={DetailTask} />
                  <Route path="/category" exact component={GetCategory} />
                  <Route path="/category/add" exact component={AddCategory} />
                  <Route path="/category/detail/:id" exact component={DetailCategory} />
                  <Route path="/site" exact component={GetSite} />
                  <Route path="/site/add" exact component={AddSite} />
                  <Route path="/site/detail/:id" exact component={DetailSite} />
                  <Route path="/cluster" exact component={GetCluster} />
                  <Route path="/cluster/add" exact component={AddCluster} />
                  <Route path="/cluster/detail/:id" exact component={DetailCluster} />
                  <Route path="/user/changepassword" exact component={ChangePassword} />
                  <Route path="/detailworkorder" exact component={DetailWorkOrder} />
                </Switch>
              </Router>
            </div>
          )
          : (this.props.LoginStatus === '3') ?   /////// FME
            (
              <div>
                <Router>
                  <Navigation />
                  <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/task" exact component={GetTask} />
                    <Route path="/user/changepassword" exact component={ChangePassword} />
                  </Switch>
                </Router>
              </div>
            )
            : (this.props.LoginStatus === '0') ? <Login /> : <></>
    );
  }
}

const mapStateToProps = state => ({
  LoginStatus: state.LoginStatus,
  Users: state.Users.items,
  Roles: state.Roles.items,
  Tasks: state.Tasks.items,
  Sites: state.Sites.items,
  Clusters: state.Clusters.items,
  Categories: state.Categories.items,
  WO_Open: state.WorkOrders.Open_items,
  WO_Open7Day: state.WorkOrders.Open7Day_items,
  WO_OpenSLApass: state.WorkOrders.OpenSLApass_items,
  WO_CompletePass: state.WorkOrders.CompletePass_items
});

export default connect(mapStateToProps, { setLoginStatus, getUser, getRole, getTask, getSite, getCluster, getCategory, getOpen, getOpen7Day, getOpenSLApass, getCompletePass })(App);