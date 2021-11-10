import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className="fw-bold fs-2" href="#home">DroneX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Products</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">DashBoard</Nav.Link>
                <Link to="/register" className="btn btn-primary fw-bold mx-3">Register</Link>
                <button className="btn btn-warning fw-bold">Login</button>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;