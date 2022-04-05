import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logout,admin} = useAuth();
    // console.log(admin);
    return (
        <div className='header-nav'>
           <Navbar collapseOnSelect expand="lg" className='brand-nav' variant="dark">
            <Container>
            <Navbar.Brand className="fw-bold fs-1 text-warning" href="#home"><img style={{width:'70px'}} src="./images/quality/quality2.png" alt="" /> DroneX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto fs-5">
                <Nav.Link as={Link} to="/home" className="fw-bold">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop" className="fw-bold">Shop</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold">About</Nav.Link>
                <Nav.Link as={Link} to="/blog" className="fw-bold">Blog</Nav.Link>
                </Nav>
                <Nav>
                {
                    (user.email && !admin) &&  <div className='d-flex'>
                        <Nav.Link className="fw-bold dash-itemss" as={Link} to="/dashboard">DashBoard</Nav.Link>
                        <Nav.Link className="btn shadow-none position-relative py-1 px-1 my-2 my-md-0 dash-itemss" as={Link} to="/cart"><i className="fas fa-shopping-cart text-light h3 m-0"></i>
                         <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center">
                              <small>0</small>
                         </div>
                        </Nav.Link>
                    </div>
                }
              
                {
                    admin && <Nav.Link className="fw-bold dash-itemss" as={Link} to="/admin">Admin</Nav.Link> 
                }
                {
                    user.email &&  <p className="text-light  ms-3 pt-1 display-name fw-bold">{user.displayName}</p>
                }
             
                {
                    user.email ?  <Link to="/login" onClick={logout} className="btn btn-warning fw-bold ms-4"><span><i className="fas fa-sign-out-alt"></i></span> Log Out</Link> :
                    <div>
                        <Link to="/register" className="btn btn-primary fw-bold fs-5 mx-3">Register</Link>
                        <Link to="/login" className="btn btn-warning fs-5 fw-bold">Login</Link>
                    </div>
                }
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;