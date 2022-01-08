import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='container-fluid'>
             <div className="row">
             <div className="about-banner">
                <h2>About</h2>
            </div>
             </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <img className="w-50 mt-5" src="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/Untitled-1.png" alt="" />
                    <h1 className="fw-bold second-section w-25">HD 4K <span className="fs-2 text-danger">RESOLUTION!</span></h1>
                </div>
                <div className="col-md-6">
                     <div className="ms-3 text-start">
                     <p className="fw-bold text-danger">-About</p>
                       <h1 className="fw-bold w-75">Specializing in Drone Services, and Aerial Photography</h1>
                       <p>Drone services, also known as unmanned aerial vehicle (UAV) services, is the emerging market for services built around flying robots that can be remote-controlled or flown autonomously using software-controlled flight plans in their embedded systems.</p>
                       <h5 className="fw-bold"><span><i className="fas fa-gamepad"></i></span> Mobile Device Supported</h5>
                       <h5 className="fw-bold"><span><i className="fas fa-gamepad"></i></span> Easy integrative control</h5>
                       <h5 className="fw-bold"><span><i className="fas fa-gamepad"></i></span> Customized Commands</h5>
                       <button className="btn btn-danger">Read More</button>
                     </div>
                </div>
            </div>
            <div>
                <div className="quality">
                    <h6>About Quality</h6>
                    <h1>We're about Quality and Trust.</h1>
                </div>
                <div className="row all-cards">
                       <div className="col-md-4 pb-3">
                       <Card className="cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="w-75 card-image" src="./images/quality/quality3.png" />
                        <Card.Body>
                            <Card.Title className="fw-bold fs-4">How To Use Battery</Card.Title>
                            <Card.Text>
                            The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.
                            </Card.Text>
                            <p className="fw-bold text-danger">-Read More-</p>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-4 pb-3">
                       <Card className="cards" style={{ width: '18rem' }}>
                        <Card.Img  variant="top"className="w-75 card-image" src="./images/quality/quality1.png" />
                        <Card.Body>
                            <Card.Title className="fw-bold fs-4">How To Use Controller</Card.Title>
                            <Card.Text>
                            The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.
                            </Card.Text>
                            <p className="fw-bold text-danger">-Read More-</p>
                        </Card.Body>
                        </Card>
                       </div>
                       <div className="col-md-4 pb-3">
                       <Card className="cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="w-75 card-image" src="./images/quality/quality2.png" />
                        <Card.Body>
                            <Card.Title className="fw-bold fs-4">How To fly Drone</Card.Title>
                            <Card.Text>
                            The majority have suffered alteration in some form, by injected humor, words which don't look even slightly.
                            </Card.Text>
                            <p className="fw-bold text-danger">-Read More-</p>
                        </Card.Body>
                        </Card>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default About;