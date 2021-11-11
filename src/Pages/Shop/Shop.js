import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {
     const [products,setProducts] = useState([]);
     useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
     },[])
    return (
        <div>
            <div className="shop">
                <h2 className="fw-bold text-light pt-5">OUR SHOP</h2>
            </div>
            <div>
            <h1 className="fw-bold mt-5"> <span className="fs-5 font-style">Choose Your</span> <br /> Perfect Drone</h1>
            <div>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {products.map(product => (
                   
                    <Col  key = {product._id}>
                    <Card className="pb-3 shop-card">
                        <Card.Img className="drone-image" variant="top" src={product.img} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold">{product.name}</Card.Title>
                        <Card.Text className="text-slice">
                            {product.description}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                           Price : ${product.price}
                        </Card.Text>
                        </Card.Body>

                        <Link to={`/purchase/${product._id}`}
                 
                        >
                           <button className="btn btn-danger w-50 m-auto">Purchase Now</button> 
                         </Link>
                        
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
        </div>
    );
};

export default Shop;