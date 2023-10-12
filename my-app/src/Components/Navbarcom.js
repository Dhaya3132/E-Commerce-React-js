import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarcom.css';


function Navbarcom ()
{
    return (
        <Navbar bg="#11111" data-bs-theme="light">
        <Container className="nav-section">
          <Navbar.Brand href="#home" className="title">Furnitura</Navbar.Brand>
          <Nav className="me-auto-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Navbarcom;

