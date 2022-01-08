import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Cart = () => {
    const {user} = useAuth();
    const [myOrders,setMyOrders] = useState([]);
    const email = `${user.email}`;
    console.log(myOrders);
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
                // Swal.fire({
                //     title: 'Are you sure?',
                //     text: "You won't be able to revert this!",
                //     icon: 'warning',
                //     showCancelButton: true,
                //     confirmButtonColor: '#3085d6',
                //     cancelButtonColor: '#d33',
                //     confirmButtonText: 'Yes, delete it!'
                //   }).then((result) => {
                //     if (result.isConfirmed) {
                //       Swal.fire(
                //         'Deleted!',
                //         'Your Order has been deleted.',
                //         'success'
                //       )
                //     }
                //   })
             const remaining = myOrders.filter(order => order._id !== id);
             setMyOrders(remaining);
            }
           
      });
     }
    return (
        <div>
            <div>
                <img className='w-25' src="./images/quality/emptycart.png" alt="" />
                <h4 className='my-3'>Add your favourite drone to your cart and checkout them</h4>
            </div>
            <div className="my-order">
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {foundProduct.map(service => (
                   
                    <Col  key = {service._id}>
                         <div className="order-card mb-3">
                         <Card className="pb-3 row">
                        <div className="col-md-4">
                        <Card.Img className="order-image" variant="top" src={service.img} />
                        </div>
                        <div className="col-md-4">
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold service-name">{service.name}</Card.Title>
                        {/* <Card.Text className="text-slice">
                            {service.description}
                        </Card.Text> */}
                        {/* <Card.Text className="fw-bold">
                           Price : ${service.price}
                        </Card.Text> */}
                        </Card.Body>
                        </div>

                       <div className="col-md-4">
                       <button onClick={() => handleDelete(service._id)} className="btn btn-danger w-50 m-auto">cancel</button> 
                       </div>
                        
                    </Card>
                         </div>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default Cart;