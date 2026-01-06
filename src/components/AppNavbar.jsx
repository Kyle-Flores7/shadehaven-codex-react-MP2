import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Shadehaven Codex
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="codex-nav" />
        <Navbar.Collapse id="codex-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/characters">
              Characters
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
