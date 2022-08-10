import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SportsHero() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="text-center py-2">Frequently Asked Questions</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-italic pt-3">
            What sports will be conducted at the National Ijtema?
          </h3>
          <p>
            <ul>
              <li>Basketball</li>
              <li>Soccer</li>
              <li>Volleyball</li>
              <li>Cricket</li>
              <li>Kabadi</li>
              <li>Obstacle Course (as part of MKA Hub)</li>
            </ul>
          </p>
          <h3 className="text-italic pt-3">
            Are the competitions open to all?
          </h3>
          <p>Yes, anyone can participate in sports.</p>
          <h3 className="text-italic pt-3">
            How do we register our team for the sports competitions?
          </h3>
          <p>
            A sports table will be set up near the entrance and registration
            area where each team captain can register their team.
          </p>
          <h3 className="text-italic pt-3">
            Do I have to play with my Masjlis or can we make our own team?
          </h3>
          <p>
            Yes, you can only participate within your majlis. If your majlis
            does not have enough players, you can participate as a Region. No
            players are allowed to play with other Regions unless there are no
            teams from the Region. In such cases, please inform Mohtamim
            Sehat-e-Jismani.
          </p>
          <h3 className="text-italic pt-3">What format are the sports?</h3>
          <p>
            All sports are in single elimination format. This means once you
            lose, your team is eliminated. Players are not allowed to change to
            a different team if they are eliminated. If caught, the entire team
            will be disqualified.
          </p>
          <h3 className="text-italic pt-3">What are the rules?</h3>
          <p>
            <strong>Basketball</strong>
            <ul>
              <li>5 vs 5</li>
              <li>
                12 minute halves with running clock (clock stops the last 1
                minute of the game)
              </li>
              <li>1 Timeout per game</li>
              <li>
                Free throws on all shooting fouls or intentional fouls within
                the last minute of the game
              </li>
              <li>
                Referee discretion on delay of game (i.e. holding the ball at
                the end of games to run out the clock)
              </li>
            </ul>
            <strong>Soccer</strong>
            <ul>
              <li>7 vs 7</li>
              <li>
                12 minute halves with running clock (clock stops the last 1
                minute of the game)
              </li>
              <li>1 Timeout per game</li>
            </ul>
            <strong>Volleyball</strong>
            <ul>
              <li>6 vs 6</li>
              <li>Games are best of 3 to 15 points</li>
              <li>Service rotations will be enforced</li>
            </ul>
            <strong>Tape-ball Cricket</strong>
            <ul>
              <li>Only 1 team allowed per Region (2 from VA Region)</li>
              <li>11 vs 11</li>
              <li>6 over match</li>
            </ul>
            <strong>Kabaddi</strong>
            <ul>
              <li>5 vs 5</li>
              <li>
                12 minute halves with running clock (clock stops the last 1
                minute of the game)
              </li>
              <li>1 Timeout per game</li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
