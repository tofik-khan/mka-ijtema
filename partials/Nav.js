import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <NavDropdown title="Information" id="nav-info-dropdown">
              <NavDropdown.Item href="https://form.typeform.com/to/RIIZNR2Z">
                Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="/accommodation">
                Accommodations
              </NavDropdown.Item>
              <NavDropdown.Item href="/transport">Transport</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/document/d/1REWCBlnDkhb-tD6Rqxy5h_LKL-vt5S8ExnXmDGOfb1g/edit#heading=h.t1zqufmn5l18">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item href="/tentcity">Tent City</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://docs.google.com/spreadsheets/d/1U-l8Q9LVjHhBXYCGnAWGJkxgEToy9aFtMWfRJN_Mehk/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Program
            </Nav.Link>
            <Nav.Link href="/taleem" target="_blank" rel="noreferrer">
              Taleem
            </Nav.Link>
            <Nav.Link href="/sports" target="_blank" rel="noreferrer">
              Sports
            </Nav.Link>
            <NavDropdown title="Syllabus" id="nav-info-dropdown">
              <NavDropdown.Item href="https://www.atfalusa.org/ijtema/">
                Atfal Syllabus
              </NavDropdown.Item>
              <NavDropdown.Item href="https://khudd.am/syllabus2023">
                Khuddam Syllabus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
