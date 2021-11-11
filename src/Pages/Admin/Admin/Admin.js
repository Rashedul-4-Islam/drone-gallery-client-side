import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AllOrders from '../AllOrders/AllOrders';
// import Button from 'react-bootstrap/Button'


const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 pt-3 dashboard">
                <div className="pb-2">
                <Link className="text-decoration-none fw-bold" to={`${url}`}>Admin</Link>
                </div>
                <div className="pb-2">
                <Link className="text-decoration-none fw-bold" to={`${url}/allorders`}><span><i className="fab fa-first-order"></i></span>All Orders</Link>
                </div>
                {/* <div className="pb-2">
                <Link className="text-decoration-none fw-bold" to={`${url}/allorders`}><span><i className="fab fa-first-order"></i></span>All Orders</Link>
                </div>
                <div className="pb-2">
                <Link className="text-decoration-none fw-bold" to={`${url}/pay`}><span><i className="fas fa-dollar-sign"></i></span> Pay</Link>
                </div> */}
                </div>
                <div className="col-md-9">
                 
                       <Switch>
                       <Route exact path={`${path}/allorders`}>
                        <AllOrders></AllOrders>
                      </Route>
                           {/* <Route path={`${path}/myorders`}>
                               <MyOrders></MyOrders>
                           </Route>
                           <Route path={`${path}/pay`}>
                               <Pay></Pay>
                           </Route> */}
                       </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;