import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

import styled from "styled-components";

const StyledContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  min-height: 40vh;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-family: "Noto Serif";
  font-size: 72px;
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledHeadingLabel = styled.span`
  text-transform: none;
  font-family: "Lato";
  font-size: 18px;
`;

export default function StatsHero() {
  return (
    <StyledContainer>
      <Container>
        <Row className="text-center text-md-left">
          <Col sm={12} md={6}>
            <Image src="/Ijtema-logo.png" width={300} height={300} />
          </Col>
          <Col sm={12} md={6}>
            <StyledHeading>
              <StyledHeadingLabel>
                Majlis Khuddam-ul-Ahmadiyya USA
              </StyledHeadingLabel>
              <br />
              Ijtema
              <br />
              Stats
            </StyledHeading>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
}
