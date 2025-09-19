import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";

function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I’ve earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              title="INTRO TO PYTHON PROGRAMMING"
              description="In this Kaggle platform, I had completed a skill certificate on Intermediate-level problem solving in Python involves tackling problems that require a good understanding of Python's core concepts and libraries."
              credentialLink="https://drive.google.com/file/d/18DxEVprvjSb6YDT0PPxYlUlGkFmaD_Ac/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              title="DATASTRUCTURES USING C++"
              description="Completed a comprehensive C++ course by IBM covering OOP, collections, streams, and concurrency."
              credentialLink="https://drive.google.com/file/d/1I8D3rOV21B9vqjIjjq0LojhciWmutb0G/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              title="SMART CODER"
              description="This provided rigorous training in Data Structures and Algorithms (DSA) with hands-on problem solving. It strengthened my ability to design optimized solutions, analyze complexities, and tackle real-world coding challenges. This certification reflects strong interview readiness and competitive programming skills."
              credentialLink="https://smartinterviews.in/certificate/3076fc17"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
