import React from 'react';
import {
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom";
import './Admin.css'
import AllOrders from '../AllOrders/AllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../SignIn/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
// import Button from 'react-bootstrap/Button'


const DashBoard = () => {
    const {logout} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 pt-3 dashboard">
                <div className="mb-2">
                   <h4>Admin Panel</h4>
                </div>
                <hr/>
                <div className="text-start ">
                <div className="mb-2 admin-panel ps-4">
                <Link className="text-decoration-none fw-bold" to={`${url}/allorders`}><span><i className="fab fa-first-order"></i></span> All Orders</Link>
                </div>
                <div className="mb-2 admin-panel ps-4">
                <Link className="text-decoration-none fw-bold" to={`${url}/addProducts`}><span><i className="fab fa-product-hunt"></i></span> Add Products</Link>
                </div>
                <div className="mb-2 admin-panel ps-4">
                <Link className="text-decoration-none fw-bold" to={`${url}/manageProducts`}><span><i className="fab fa-product-hunt"></i></span> Manage Products</Link>
                </div>
                <div className="mb-2 admin-panel ps-4">
                <Link className="text-decoration-none fw-bold" to={`${url}/makeAdmin`}><span><i className="fas fa-user-shield"></i></span> Make Admin</Link>
                </div>
                </div>
                <div className="my-3">
                <button className="btn btn-primary fw-bold" onClick={logout}><span><i className="fas fa-sign-out-alt"></i></span> Log Out</button>
                </div>
                </div>
                <div className="col-md-9">
                 
                       <Switch>
                       <AdminRoute exact path={`${path}/allorders`}>
                        <AllOrders></AllOrders>
                      </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                       </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;