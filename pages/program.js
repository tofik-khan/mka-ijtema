import React, { useState } from "react";
import MultiToggle from "react-multi-toggle";

import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProgramKhuddam from "../components/ProgramKhuddam.js";
import ProgramAtfal from "../components/ProgramAtfal.js";
import ProgramShura from "../components/ProgramShura.js";

import Footer from "../components/Footer.js";

export default function Program() {
  const programOptions = [
    {
      displayName: "Khuddam",
      value: "khuddam",
    },
    {
      displayName: "Atfal",
      value: "atfal",
    },
    {
      displayName: "Shura",
      value: "shura",
    },
  ];

  const [aux, updateAux] = useState("khuddam");
  let schedule;
  switch (aux) {
    case "khuddam":
      schedule = <ProgramKhuddam />;
      break;
    case "atfal":
      schedule = <ProgramAtfal />;
      break;
    case "shura":
      schedule = <ProgramShura />;
      break;

    default:
      let schedule = (
        <h1 className="text-center text-error">Error: Can not load Content</h1>
      );
  }
  return (
    <>
      <Header
        data={{
          title: "Program - Ijtema 2022",
          description: "A detailed plan for activities during Ijtema 2022.",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col sm={12} md={6}>
              <MultiToggle
                options={programOptions}
                selectedOption={aux}
                onSelectOption={(value) => updateAux(value)}
                label="Select Auxilary"
              />
            </Col>
          </Row>
        </Container>
        {schedule}
      </main>
      <Footer />
    </>
  );
}
