import React from "react";

import styles from "../styles/huzoorLetter.module.css";

import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";

import Footer from "../components/Footer.js";

export default function HuzoorHero() {
  return (
    <>
      <Header
        data={{
          title: "Message From Beloved Huzoor - Ijtema 2022",
          description:
            "Special Letter from Huzoor for MKA National Ijtema 2022",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={4}>
              <Image src="/letter/title.png" width={197} height={197} />
            </Col>
            <Col xs={4}>
              <Image src="/letter/bismillah.png" width={197} height={197} />
            </Col>
            <Col xs={4}></Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs="auto">
              Islamabad, UK
              <hr className="my-0" />
              HM - 03-06-2022
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8}>
              <p>Dear members of Majlis Khuddamul Ahmadiyya USA,</p>
              <p className="text-center">
                السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ
              </p>
              <p>
                Your Sadr Sahib had requested me to send you a message for your
                Annual National Ijtima. My message for you on this blessed
                occasion is that Allah Ta`ala has revived for us the true
                teachings of Islam through the advent of the Promised Messiah
                (as). At many places, the Promised Messiah (as) has elaborated
                that the underlying and primary purpose of his coming is to
                inculcate in man a sincere devotion, so that he may strive to
                his utmost to fulfil the rights of Allah and the rights towards
                His creation. He should be mindful of his duties in this regard
                and seek to please his Creator to the best of his abilities. We
                should try to endeavour to conduct our lives according to the
                true teachings of Islam and in accordance with the injunctions
                of Allah Ta`ala.
              </p>
              <p>
                After the demise of the Promised Messiah (as), Allah the
                Almighty established the blessed institution of Khilafat so that
                the mission of the Promised Messiah (as) continues to flourish
                and reach newer heights forever. At the same time, Allah
                Almighty created a responsibility upon each one of us as to
                safeguard the institution of Khilafat-e-Ahmadiyya from various
                forms of mischievous acts and plans that the opponents may
                devise by upholding our faith, love obedience, and sincerity for
                Khilafat.
              </p>
              <p>
                It should be kept in mind that unless we truly reform ourselves,
                this purpose will be difficult for us to achieve. Therefore, it
                is of utmost importance that we better and refine our personal
                lives, by following the teachings of Holy Quran, being devoted
                and sincere in our worship and prayers to Allah and by
                scrupulously adhering to the tenets of our faith. If we are able
                to fulfil these responsibilities, only then would we be able to
                benefit from being an Ahmadi Khadim or an Ahmadi youngster.
                Otherwise, there would be no difference between us and any other
                person.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6}>
              <p>The Promised Messiah (as) states at one place:</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6}>
              “The spiritual beauty of man is to walk along all the finer ways
              of righteousness. They are the attractive features of spiritual
              beauty. It is obvious that to be mindful of the trusts of God
              Almighty, and to fulfil all the covenants of faith, and to employ
              all faculties and limbs both overt, like eyes and ears and hands
              and feet and others like them, and those that are covert, like the
              mind and other faculties and qualities, on their proper occasions
              and to restrain them from coming into action on improper
              occasions, and to be warned against the subtle attacks of vice and
              to be mindful of the rights of one’s fellow beings, is the way of
              perfecting one’s spiritual beauty. God Almighty has in the Holy
              Qur’an designated righteousness as a raiment. “
              <em>Libas-ut-taqwa</em>” is an expression of the Holy Quran. This
              is an indication that spiritual beauty and spiritual ornament are
              achieved through righteousness. Righteousness means that one must
              be mindful of even the smallest details of the divine trusts and
              covenants and also of all the trusts and covenants of one’s fellow
              beings, as far as it may be possible. That is, one must try to
              fulfil, to the best of one’s ability, all the requirements in
              their minutest details.”
              <small>
                (Brahin-e-Ahmadiyya, Part V, Ruhani Khaza’in, vol. 21, pp.
                209-210)
              </small>
            </Col>
          </Row>
          <Row className="justify-content-center py-3">
            <Col xs={8}>
              May Allah Ta`ala enable us all to fulfil our obligations and
              responsibilities in a manner that is pleasing in Allah’s sight.
              May Allah strengthen your bond and relationship with
              Khilafat-e-Ahmadiyya and may Allah bless your Ijtima in every way
              and enable you all to benefit from its various programs and
              activities.
              <br />  <em>Amin</em>
            </Col>
          </Row>
          <Row className="justify-content-center py-3">
            <Col xs={8}>
              <em>Wassalam</em>
              <br />
              Yours sincerely,
              <br />
              <strong>  Mirza Masroor Ahmad </strong>
              <br />
              Khalifatul-Masih V
            </Col>
          </Row>
          <Row className="text-center py-5">
            <Col>
              <Link href="/files/letter-from-huzoor.pdf">
                <Button variant="warning btn-lg">Letter PDF</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
