import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DemoProduct.css'

const DemoProduct = () => {
       const [demoProducts,setDemoProducts] = useState([]);
       useEffect(() =>{
            fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setDemoProducts(data))
       },[])

    return (
        <div>
            <h1 className="fw-bold mt-5"> <span className="fs-5 font-style">Choose Your</span> <br /> Favourite Drone</h1>
            <div>
                 <Row xs={1} md={2} className="g-5 mx-4 mt-3">
                {demoProducts.slice(0,6).map(demoProduct => (
                    <Col key={demoProduct._id}>
                   <div className="card mb-3 demo-product">
                  <div className="row g-0">
                    <div className="col-md-4 py-2 ps-2">
                    <img src={demoProduct.img} className="image-size w-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{demoProduct.name}</h3>
                        <p className="card-text fw-bold text-slice">Description :{demoProduct.description}</p>
                        <p className="card-text fw-bold">Price : $ {demoProduct.price}</p>
                        <p className="card-text fw-bold">Flight-time : {demoProduct.time}</p>
                        <Link to={`/purchase/${demoProduct._id}`}
                        >
                            <button className="btn btn-danger w-50 m-auto">Purchase Now</button> 
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default DemoProduct;