import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'
// import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders,setMyOrders] = useState([]);
    const email = `${user.email}`;
    // console.log(email);
    useEffect(() =>{
           fetch('https://quiet-cove-48574.herokuapp.com/myorders')
           .then(res => res.json())
           .then(data => setMyOrders(data))
    },[myOrders])
    
            const foundProduct = myOrders.filter(ser => ser.email === email);
         
    const handleDelete = id => {
        const url = `https://quiet-cove-48574.herokuapp.com/myorders/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {"content-type" : "application/json"},
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
             alert("Are you cancel Order?")
             const remaining = myOrders.filter(order => order._id !== id);
             setMyOrders(remaining);
            }
           
      });
     }

    return (
        <div className="mt-5">
            <h3 className="fw-bold">My orders : {foundProduct.length}</h3>
            <div className="my-order">
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {foundProduct.map(service => (
                   
                    <Col  key = {service._id}>
                         <div className="order-card  mb-3">
                         <Card className="pb-3  ">
                        <Card.Img className="order-image" variant="top" src={service.img} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold service-name">{service.name}</Card.Title>
                        {/* <Card.Text className="text-slice">
                            {service.description}
                        </Card.Text> */}
                        <Card.Text className="fw-bold">
                           Price : ${service.price}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                           Status : {service.status}
                        </Card.Text>
                        </Card.Body>

                        <button onClick={() => handleDelete(service._id)} className="btn btn-danger w-50 m-auto">cancel</button> 
                        
                    </Card>
                         </div>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default MyOrders;