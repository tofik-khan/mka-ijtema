import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hamburger from "hamburger-react";
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
            <Nav.Link
              href="https://www.atfalusa.org/ijtema/"
              target="_blank"
              rel="noreferrer"
            >
              Atfal Syllabus
            </Nav.Link>
            <Nav.Link
              href="https://khudd.am/syllabus2023"
              target="_blank"
              rel="noreferrer"
            >
              Khuddam Syllabus
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
