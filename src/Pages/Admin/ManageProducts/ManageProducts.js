import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Shop.css'

const ManageProducts = () => {
     const [products,setProducts] = useState([]);
     useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
     },[])

     const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {"content-type" : "application/json"},
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
             alert("Are you delete this product?")
             const remaining = products.filter(product => product._id !== id);
             setProducts(remaining);
            }
           
      });
     }

    return (
        <div>
            <div className="">
                <h2 className="fw-bold text-dark pt-5">Manage Your Products</h2>
            </div>
            <div className="mb-4">
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {products.map(product => (
                   
                    <Col  key = {product._id}>
                    <Card className="pb-3 shop-card">
                        <Card.Img className="drone-image" variant="top" src={product.img} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold service-name">{product.name}</Card.Title>
                        {/* <Card.Text className="text-slice">
                            {product.description}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                           Price : ${product.price}
                        </Card.Text> */}
                        </Card.Body>

                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger w-50 m-auto">Delete</button> 
                        
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default ManageProducts;