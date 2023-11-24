import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import '../component/navbar.css'

function BasicExample() {
  return (
<Navbar expand="lg" variant="dark" className="bg-primary custom-navbar">
    <Container>
        <Navbar.Brand href="/">Linit-Exports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home" className="text-light">Home</Nav.Link>
            <Nav.Link href="/About" className="text-light">About</Nav.Link>
            <Nav.Link href="/Visitors" className="text-light">VisitorRegister</Nav.Link>
            <Nav.Link href="/Alldata" className="text-light">Alldata</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;