import { combineReducers } from 'redux';
import LoginStatus from './LoginReducer';
import Tasks from './TasksReducer';
import Sites from './SitesReducer';
import Categories from './CategoryReducer';
import Users from './UserReducer';
import Roles from './RoleReducer';
import Clusters from './ClusterReducer';
import WorkOrders from './WorkOrderReducer';

export default combineReducers({
    LoginStatus,
    Tasks,
    Sites,
    Clusters,
    Categories,
    Users,
    Roles,
    WorkOrders
});