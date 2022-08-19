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
            <NavDropdown title="Info" id="nav-info-dropdown">
              <NavDropdown.Item href="/files/ijtema-info.pdf">
                Khuddam Info
              </NavDropdown.Item>
              <NavDropdown.Item href="/files/atfal-info.pdf">
                Atfal Info
              </NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contacts</Nav.Link>
            <Nav.Link href="/program">Program</Nav.Link>
            <Nav.Link href="/mkahub">MKAHub</Nav.Link>
            <Nav.Link href="/map">Site Map</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <NavDropdown title="Taleem" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="http://www.atfalusa.org/ijtema/"
                target="_blank"
                rel="noreferrer"
              >
                Atfal
              </NavDropdown.Item>
              <NavDropdown.Item href="/taleem">Khuddam</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
