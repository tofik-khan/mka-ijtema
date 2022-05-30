import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/Ijtema-logomark.png" width={218} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://www.atfalusa.org/ijtema/">
                Atfal Syllabus
              </NavDropdown.Item>
              <NavDropdown.Item href="https://mkausa.org/syllabus2022">
                Khuddam Syllabus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
