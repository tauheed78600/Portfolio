import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="An Expense Tracker website made using NestJS and ReactJS."
              description="A System designed to track the daily expenses of a user. User will be able track it's expenses, set monthly budget, visualize the expenses
category wise or payment mode wise, get daily, monthly and weekly reports for the expenses. The backend of this system is developed using
NestJS Framework and UI is designed using ReactJS"
              ghLink="https://github.com/tauheed78600/Expense-Tracker-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="A Telegram Bot for Weather update using NestJS"
              description="A Web Application for Bus Reservation with a login page where users can create and login their account and reserve the seats, display the
seats available and cancel the reservation. This Application follows MVC Software methodology. The UI for this web application is made using
HTML and CSS."
              ghLink="https://github.com/tauheed78600/A-Telegram-bot-for-Weather-Updates-using-NestJS"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
