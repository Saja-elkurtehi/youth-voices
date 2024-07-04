import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Adjust the path to your logo
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/connect" className="text-white">Connect</Nav.Link>
            <Nav.Link href="/learnact" className="text-white">Learn & Act</Nav.Link>
            <Nav.Link href="/stories" className="text-white">Narratives</Nav.Link>
            <Nav.Link href="/campaign" className="text-white">Campaign</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className="mx-auto text-white navbar-center">
          <img src={logo} alt="Logo" className="logo" />
          Youth Voices
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
