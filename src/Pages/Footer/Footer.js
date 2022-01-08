import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footers">
            <div className=" text-light mt-1 pt-4 brand-nav">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <h3 className="text-warning fw-bold">Get In Touch</h3>
                        <p><i className="fas fa-envelope me-2"></i> dronex@tech.com</p>
                        <p><i className="fas fa-phone-alt me-2"></i> +8801574832566</p>
                        <p><i className="fas fa-map-marker-alt me-2"></i> Gulshan-2,Dhaka,BD</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4>Useful Links</h4>
                        <p>About</p>
                        <p>FAQ</p>
                        <p>Shop</p>
                        <p>Services</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>Our Recent Posts</h3>
                        <h5 className="text-light mt-2 text-start"><span className="fs-6 text-danger">12 December</span> <br /> Planning approved for restoration town hall.</h5>
                        <h5 className="text-light mt-2 text-start"><span className="fs-6 text-danger">12 December</span> <br /> Planning approved for restoration town hall.</h5>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5>Newsletter</h5>
                        <p>Join our subscribers list to get the latest news, updates and special offers delivered directly in your inbox.</p>
                        <div className="subscribe">
                            <input className="form-control w-75 d-inline" type="text" placeholder="Enter your email"/>
                            <button className="btn btn-info footer-button fw-bold">Subscribe</button>
                        </div>
                    </div>
                  
                </div>
                <div className="w-75 bg-secondary m-auto d-flex justify-content-between pt-3 rounded">
                    <h3 className="ps-3">DroneX</h3>
                    <div className="d-flex">
                        <p><i className="fab fa-facebook me-3"></i></p>
                        <p><i className="fab fa-instagram me-3"></i></p>
                        <p><i className="fab fa-twitter me-3"></i></p>
                    </div>
                </div>
                <div className="row mt-4 text-center">
                    <p>Copyright <span>&copy;</span> 2021 DroneX. Developed By Rashedul Islam</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;