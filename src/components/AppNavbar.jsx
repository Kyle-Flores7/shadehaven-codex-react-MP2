import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="codex-navbar" variant="dark">
      <Container className="codex-container">
        <Navbar.Brand as={NavLink} to="/">
          Land of Solitude Codex
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/characters">
              Characters
            </Nav.Link>

            <Nav.Link as={NavLink} to="/factions">
              Factions
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
