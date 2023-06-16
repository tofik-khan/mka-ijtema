import React from "react";

import Nav from "../partials/Nav.js";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ijtema 2023 | Taleem</title>
        <meta
          name="description"
          content="Majlis Khuddam-ul-Ahmadiyya (MKA) holds its National Ijtema for 2023 at Bait-ur-Rehman Mosque, MD for a weekend of fun activites and brotherly connection."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main className="mainContent">
        <Container className="mt-3 py-5" fluid>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center">
                Taleem Events &amp; Participation Guidelines
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          <Row>
            <Col>
              <p>
                <strong>Live Audience Voting at Ijtema</strong>
              </p>
              <p>
                The Taleem Competitions at the National Ijtema brings together
                incredible talent from across the country. Our khuddam go head
                to head in competition, vying with one another in good. This
                year at the National Ijtema 2023, you will get an opportunity to
                be engaged during the Taleem Competitions finals even if
                you&apos;re not participating. MKA USA is introducing Live
                Audience Rating during the Taleem Finals on Sunday! Instead of
                being on the sidelines, you will get a chance to be a part of
                the action! For three events, Nazam (Urdu Poem), English Poem
                and Impromptu Speech, you will get a chance to rate the
                participant using your smartphone. The audience rating will
                contribute towards the competitors final score.
              </p>
              <p>
                <strong>
                  Introducing 15-18 and 19-40 Age Groups for Select Competitions
                </strong>
              </p>
              <p>
                To give an opportunity to our young Khuddam, we added two age
                groups for some key Taleem competitions this year: Tilawat,
                Nazam (Urdu Poem), English Speech, Urdu Speech. It&apos;s
                important to make sure you have 3 names for each of these events
                from your Region filled out. If you were18 on November 1st,
                2022, you will be a part of the 15-18 group even if you turned
                19 during the Khuddam year.
              </p>
              <p>
                <strong>NEW: Video Competition</strong>
              </p>
              <p>
                We are calling all aspiring content creators to Showcase your
                talent! The competition is to make a 2-3 min video about
                &apos;The Holy Quran - Our Guiding Light&apos; with the help of
                any software of your liking. The videos can be uploaded to:{" "}
                <Link href="https://khudd.am/videocompetition2023">
                  Video Upload Dropbox
                </Link>{" "}
                by June 23rd, 2023. Top three finalist will be announced at the
                National Ijtema and we will try to play their videos at the
                Taleem Finals on Sunday. These videos will be judged by the MTA
                USA Team!
              </p>
              <p>
                <strong>NEW! Regional Team Presentation Competition</strong>
              </p>
              <p>
                This year we&apos;re introducing new competition. A team of up
                to three Khuddam from each region can take part in the
                competition; at least one will deliver the presentation, while
                the other members can control the presentation. The whole region
                can help the team to prepare the presentation. Topics:
                <ol>
                  <li>Preservation of the Holy Quran</li>
                  <li>Refuting the Theory of Quranic Abrogation</li>
                  <li>The Holy Quran: Guidance for Everyday life</li>
                  <li>The Holy Quran as a motivator of change</li>
                </ol>
                Duration is 7 minutes. Requesting we ensure your Regional team
                is registered{" "}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc3jEFp8sQEuTSXp4z2rkbVnfjGjJiNZnD0QJb4OdP4gN4ukQ/viewform">
                  here
                </Link>
                .
              </p>
              <p>
                <strong>Individual Quiz</strong>
              </p>
              <p>
                InshAllah, we will be holding a special Quiz competition over
                Kahoot! The event will be open to all, and a phone with data
                will be required to participate. Keeping in line with theme of
                the year the Holy Quran our Guiding Light, the questions will be
                coming from a set of Friday Sermons delivered by Hudhur-e-Anwar
                (aba) on the Holy Quran this year and the book of the year,
                Introduction to the Study of the Holy Quran. Khuddam are
                encouraged to rewatch and re-read through these inspirational
                sermons and complete the book reading. Here&apos;s the syllabus
                in a convenient format:
                <ul>
                  <li>
                    Book of the Year - Introduction to the Study of the Holy
                    Quran / Deebacha Tafseer-ul-Quran [See{" "}
                    <Link href="mkausa.org/taleem">mkausa.org/taleem</Link> for
                    links]
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-02-03.html">
                      The Promised Messiah (as): Preeminent Guidance, Endless
                      Benefits and Virtues of The Holy Quran
                    </Link>{" "}
                    (February 3, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-02-10.html">
                      The Promised Messiah (as): Preeminent Guidance, Endless
                      Benefits and Virtues of The Holy Quran
                    </Link>{" "}
                    (February 10, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-03-03.html">
                      The Promised Messiah (as): Status and Glory of The Holy
                      Quran
                    </Link>{" "}
                    (March 3, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-03-10.html">
                      The Promised Messiah (as): Status and Glory of The Holy
                      Quran
                    </Link>{" "}
                    (March 10, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-03-17.html">
                      The Promised Messiah (as): The Unique and Superior
                      Features of The Holy Quran
                    </Link>{" "}
                    (March 17, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-03-31.html">
                      Ramazan and The Holy Quran
                    </Link>{" "}
                    (March 31, 2023)
                  </li>
                  <li>
                    <Link href="https://www.alislam.org/friday-sermon/2023-04-07.html">
                      Islam: The Perfect Religion, Quran: The Perfect Book
                    </Link>{" "}
                    (April 7, 2023)
                  </li>
                </ul>
              </p>
              <p>
                <strong>
                  FAQ: I missed the Regional Ijtema. Can I still participate?
                </strong>
              </p>
              <p>
                If a khadim missed the Regional Ijtema due to a genuine reason,
                we will let him participate in the Taleem Qualifiers being held
                on Sunday. Please see the schedule for the exact time. Just show
                up on time. There&apos;s no sign up required. Please note that
                the Hifz competitions are open to all so you don&apos;t need to
                be qualified to participate in those.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
