import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.jpeg";
import { NavDropdown } from "react-bootstrap";
import Link from "next/link";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{
      minHeight:"5rem",
      fontWeight:"bold",
      color:"white"
    }}>
      <Container style={{width:"80%",margin:"auto",fontSize:"1vmax"}}>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} href="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/ourstory">
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/approach">
                Approach
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/vision">
                Vision & Mission
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/trustee">
              Board of Trustees
            </Nav.Link>
            <Nav.Link as={Link} href="/governance">
              Governance
            </Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} href="/project">
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/education">
                Education
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/environment">
                Environment
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/csr">
              CSR
            </Nav.Link>
            <Nav.Link as={Link} href="/volunteer">
              Volunteer
            </Nav.Link>
            <Nav.Link as={Link} href="/donate">
              Donate Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
