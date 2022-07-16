import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hamburger from "hamburger-react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/Ijtema-logomark.png" width={164} height={75} />
        </Navbar.Brand>
        <Navbar.Toggle>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>
            <Nav.Link href="/faq">FAQs</Nav.Link>
            <Nav.Link href="/stats">Stats</Nav.Link>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="http://www.atfalusa.org/ijtema/"
                target="_blank"
                rel="noreferrer"
              >
                Atfal Syllabus
              </NavDropdown.Item>
              <NavDropdown.Item href="/taleem">
                Khuddam Syllabus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
