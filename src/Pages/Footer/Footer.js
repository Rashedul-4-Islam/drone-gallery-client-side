import React from 'react';
import ScrollToTop from 'react-scroll-to-top'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footers ">
                <ScrollToTop
                    smooth
                    top="500"
                    color="#ffffff"
                    viewBox="0 0 330 330"
                    svgPath="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
                    C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
                    c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
                    C261.465,190.251,261.465,199.749,255.606,205.606z"
                    style={{
                    borderRadius: '20px',
                    backgroundColor: '#4f46e5',
                    }}
                />
            <div className=" text-light pt-4 brand-nav">
                <div className=' container'>
                <div className="row ">
                    <div className="col-6 col-md-3">
                        <h1 className="text-warning fw-bold fs-1">Get In Touch</h1>
                        <p className='fs-5'><i className="fas fa-envelope me-2"></i> dronex@tech.com</p>
                        <p className='fs-5'><i className="fas fa-phone-alt me-2"></i> +8801574832566</p>
                        <p className='fs-5'><i className="fas fa-map-marker-alt me-2"></i> Gulshan-2,Dhaka,BD</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h1>Useful Links</h1>
                         <div className='fs-5'>
                            <Link className='text-decoration-none' to="/about">About</Link>
                            <br />
                            <Link className='text-decoration-none' to="/blog">Blog</Link>
                            <br />
                            <Link className='text-decoration-none' to="/shop">Shop</Link>
                           
                         </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <h2>Our Recent Posts</h2>
                        <h5 className="text-light mt-2 text-start"><span className="fs-6 text-danger">12 December</span> <br /> Planning approved for restoration town hall.</h5>
                        <h5 className="text-light mt-2 text-start"><span className="fs-6 text-danger">12 December</span> <br /> Planning approved for restoration town hall.</h5>
                    </div>
                    <div className="col-6 col-md-3">
                        <h2>Newsletter</h2>
                        <p className='fs-5'>Join our subscribers list to get the latest news, updates and special offers delivered directly in your inbox.</p>
                        <div className="subscribe">
                            <input className="form-control w-75 d-inline" type="text" placeholder="Enter your email"/>
                            <button className="btn btn-info footer-button fw-bold">Subscribe</button>
                        </div>
                    </div>
                  
                </div>
                <div className="w-75 bg-secondary m-auto d-flex justify-content-between pt-3 mt-3 rounded">
                    <h3 className="ps-3">DroneX</h3>
                    <div className="d-flex">
                        <p><i className="fab fa-facebook me-3"></i></p>
                        <p><i className="fab fa-instagram me-3"></i></p>
                        <p><i className="fab fa-twitter me-3"></i></p>
                    </div>
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