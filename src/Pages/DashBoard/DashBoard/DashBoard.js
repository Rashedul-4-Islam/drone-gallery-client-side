import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import Button from 'react-bootstrap/Button'
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import './DashBoard.css'
import ReviewForm from '../ReviewForm/ReviewForm';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 pt-3 dashboard">
                <div className="pb-2 dash-button">
                <Link className="text-decoration-none fw-bold" to={`${url}`}>Dashboard</Link>
                </div>
                <div className="pb-2 dash-button">
                <Link className="text-decoration-none fw-bold" to={`${url}/myorders`}><span><i className="fab fa-first-order"></i></span> MyOrders</Link>
                </div>
                <div className="pb-2 dash-button">
                <Link className="text-decoration-none fw-bold" to={`${url}/pay`}><span><i className="fas fa-dollar-sign"></i></span> Pay</Link>
                </div>
                <div className="pb-2 dash-button">
                <Link className="text-decoration-none fw-bold" to={`${url}/review`}><span><i className="fas fa-dollar-sign"></i></span>Review</Link>
                </div>
                </div>
                <div className="col-md-9">
                 
                       <Switch>
                       <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                      </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <ReviewForm></ReviewForm>
                        </Route>
                       </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;