import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
            <Carousel.Item>
                <div className="row banner-bg">
                       <div className="col-12 col-md-6">
                       <div className="text-light info text-start w-75">
                        <h5 className="fw-bold">Capturing Moments</h5>
                        <h1 className="text-danger fw-bold">FROM EVERY ANGELS</h1>
                        <p>Drones do more than improve communication and help keep projects on track.</p>
                        </div>
                       </div>
                       <div className="col-12 col-md-6 mt-5">
                                <img
                            className="d-block w-100 animation-image"
                            src="./images/banner/banner1.png"
                            alt="First slide"
                            />
                       </div>
                </div>
               
            </Carousel.Item>
            <Carousel.Item>
            <div className="row banner-bg">
                       <div className="col-12 col-md-6">
                       <div className="text-light info text-start w-75">
                        <h5 className="fw-bold">Gives You the </h5>
                        <h1 className="text-danger fw-bold">VISIBLE DIFFERENCE</h1>
                        <p>Drones provide construction teams with an overhead view of jobsites, materials, machinery and people.</p>
                        </div>
                       </div>
                       <div className="col-12 col-md-6 mt-5">
                                <img
                            className="d-block w-100 animation-image"
                            src="./images/banner/banner2.png"
                            alt="First slide"
                            />
                       </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row banner-bg">
                       <div className="col-12 col-md-6">
                       <div className="text-light info text-start w-75">
                        <h5 className="fw-bold">We Capture the</h5>
                        <h1 className="text-danger fw-bold">PRECIOUS MOMENTS</h1>
                        <p>Drones do more than improve communication and help keep projects on track.</p>
                        </div>
                       </div>
                       <div className="col-12 col-md-6 mt-5">
                                <img
                            className="d-block w-100 animation-image"
                            src="./images/banner/banner3.png"
                            alt="First slide"
                            />
                       </div>
                </div>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;