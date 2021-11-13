import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logout,admin} = useAuth();
    // console.log(admin);
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" style={{background:'#373833  '}} variant="dark">
            <Container>
            <Navbar.Brand className="fw-bold fs-2 text-warning" href="#home"><img style={{width:'70px',color:'white'}} src="./images/quality/quality2.png" alt="" /> DroneX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home" className="fw-bold">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop" className="fw-bold">Shop</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold">About</Nav.Link>
                <Nav.Link as={Link} to="/blog" className="fw-bold">Blog</Nav.Link>
                </Nav>
                <Nav>
                {
                    (user.email && !admin) &&  <Nav.Link className="fw-bold" as={Link} to="/dashboard">DashBoard</Nav.Link>
                }
              
                {
                    admin && <Nav.Link className="fw-bold" as={Link} to="/admin">Admin</Nav.Link> 
                }
                {
                    user.email &&  <p className="text-light  ms-3 pt-1">{user.displayName}</p>
                }
             
                {
                    user.email ?  <Link to="/login" onClick={logout} className="btn btn-warning fw-bold ms-4"><span><i className="fas fa-sign-out-alt"></i></span> Log Out</Link> :
                    <div>
                        <Link to="/register" className="btn btn-primary fw-bold mx-3">Register</Link>
                        <Link to="/login" className="btn btn-warning fw-bold">Login</Link>
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