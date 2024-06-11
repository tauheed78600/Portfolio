import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Tauheed Darekar </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a Software Developer at Parkar Digital.
            <br />
            I have completed Bachelors from Trinity Academy of Engineering in 2022 and I am currently pursuing Master's in CSE from NIT Goas
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis/ Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Shoot for the moon. Even if you miss, you'll land among the stars"{" "}
          </p>
          <footer className="blockquote-footer">Norman Vincent Peale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
