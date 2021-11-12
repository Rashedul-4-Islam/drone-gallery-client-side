import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <div className="mb-4">
            <div className="blog">
                <h3>Blog</h3>
            </div>
            <div className="row">
            <div className="col-md-6">
                <p className=" mt-5 text-danger">December 12, 2020</p>
            <img className="w-75 mb-3" src="https://media-rd.s3.amazonaws.com/featured_image/2017/10/rd1710_drone.jpg" alt="" />
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="w-75 m-auto ">
                <Accordion.Header> How To Start A Drone Photography Business?</Accordion.Header>
                <Accordion.Body>
                <strong>Get Certified to Fly a Drone.</strong>Get Certified to Fly a Drone. In the United States, you have to be certified to fly a drone for commercial purposes, kind of like a drone license. ...Purchase the Perfect Drone for Photography.Purchase Drone Insurance.Practice Flying.Create a Portfolio.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>
            <div className="col-md-6">
            <p className=" mt-5 text-danger">June 12, 2021</p>
            <img className="w-75  mb-3" src="https://cdn.pixabay.com/photo/2018/05/21/22/34/drone-3419851_960_720.jpg" alt="" />
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="w-75 m-auto">
                <Accordion.Header>How Amazon Is Integrating Drones</Accordion.Header>
                <Accordion.Body>
                <strong>Get Certified to Fly a Drone.</strong>Get Certified to Fly a Drone. In the United States, you have to be certified to fly a drone for commercial purposes, kind of like a drone license. ...Purchase the Perfect Drone for Photography.Purchase Drone Insurance.Practice Flying.Create a Portfolio.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>
            </div>
        </div>
    );
};

export default Blog;