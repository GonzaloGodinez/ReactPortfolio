import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Naveg() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Gonzalo Godinez-Luna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/">
              Home
            </Nav.Link>
            <Nav.Link  href="/about">
              About Me
            </Nav.Link>
            <Nav.Link  href="/project">
              Profile
            </Nav.Link>
            <Nav.Link  href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link  href="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naveg;