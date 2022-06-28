import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MomentsCard from "../components/MomentsCard.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function Moments() {
  return (
    <Container className="my-5 pt-5">
      <h2 className="my-5 text-center">Memories from Past Ijtema</h2>
      <Row className="my-3">
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2018.jpg",
              title: "2018 - Rocky Mountains",
              album: "https://flic.kr/s/aHsmqEyr1b",
            }}
          />
        </Col>
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2017.jpg",
              title: "2017 - Los Angeles",
              album: "https://flic.kr/s/aHsm2DmrJ6",
            }}
          />
        </Col>
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2019.jpg",
              title: "2019 - Bait ur Rehman",
              album: "https://flic.kr/s/aHsmEHm2ZJ",
            }}
          />
        </Col>
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2015.jpg",
              title: "2015 - Pennsylvania",
              album: "https://flic.kr/s/aHske3wMrD",
            }}
          />
        </Col>
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2016.jpg",
              title: "2016 - Yosemite",
              album: "https://flic.kr/s/aHskxFvxrW",
            }}
          />
        </Col>
        <Col lg={4} md={6} className="mb-3">
          <MomentsCard
            content={{
              image: "2014.jpg",
              title: "2014 - Pennsylvania",
              album: "https://flic.kr/s/aHsk35Bkqi",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
