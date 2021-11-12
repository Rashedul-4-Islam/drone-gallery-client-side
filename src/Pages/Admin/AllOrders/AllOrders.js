import React, { useEffect, useState} from 'react';
import {  Col, Row, Table } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import './AllOrders.css'

const AllOrders = () => {
    const [orders,setOrders] = useState([]);
    // const {user} = useAuth();
    useEffect(() =>{
        fetch('http://localhost:5000/myorders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orders]);

    const handleDelete = id => {
           const url = `http://localhost:5000/myorders/${id}`;
           fetch(url, {
               method: 'DELETE',
               headers: {"content-type" : "application/json"},
           })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount){
                alert("Are you delete this Order?")
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
               }
              
         });
        }

        const confirmHandler = id =>{
            const url = `http://localhost:5000/confirmation/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {"content-type" : "application/json"},
            })
            .then(res => res.json())
            .then(data => {})
        }
              

    return (
        <div className="my-5">
            <h1 className="fw-bold">All Buyer Orders: {orders.length}</h1>
            <div>
            <Table  responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>status</th>
                    <th>cancellation</th>
                    <th>Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                          <tr>
                          <td className="w-25"><img className="w-25" src={order.img} alt="" /></td>
                          <td>{order.name}</td>
                          <td>{order.email}</td>
                          <td>{order.status}</td>
                          <td> <button onClick={() => handleDelete(order._id)} className="btn btn-danger m-auto">Delete</button> </td>
                          <td><button onClick={() => confirmHandler(order._id)} className="btn btn-success">Confirm</button></td>
                          </tr>
                ))}
                </tbody>
                </Table>

            </div>
        </div>
    );
};

export default AllOrders;