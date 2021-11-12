import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className="fw-bold fs-2 text-warning" href="#home">DroneX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
              
                {
                    admin ? <Nav.Link as={Link} to="/admin">Admin</Nav.Link> : <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
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