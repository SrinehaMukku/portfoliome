import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Only keeping the images you actually use
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import multi from "../../Assets/Projects/multi.jpeg";
import dia from "../../Assets/Projects/dia.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built, highlighting my expertise in full-stack
          development, machine learning, and web technologies.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FOOD SPOTS CONNECT"
              description="Designed and developed a responsive web application that allows users to explore, discover, and connect with nearby food spots, ensuring an engaging and user-friendly interface."
              ghLink="https://github.com/SrinehaMukku/FOODEL"
              demoLink="https://food4all-demo.com"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dia}
              isBlog={false}
              title="Diabetes Prediction"
              description="Developed a predictive model using Support Vector Machine algorithm to diagnose diabetes, achieving 81% accuracy on Pima datasets. Identified key factors influencing diagnosis accuracy."
              ghLink="https://github.com/SrinehaMukku/Diabetes_Predictor"
              demoLink="https://nehapredictsyouuu.streamlit.app/"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Developed my personal portfolio website using React, Bootstrap, and modern CSS. Showcases my projects, skills, and experiences with responsive design, smooth animations, and interactive elements."
              ghLink="https://github.com/SrinehaMukku/Portfolio"
              demoLink="https://your-portfolio-live-link.com"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multi}
              isBlog={false}
              title="Multi Cloud Flex"
              description="Developed a centralized web platform that integrates multiple cloud storage services, allowing users to access, manage, and share their files from different providers in one secure space."
              ghLink="https://github.com/SrinehaMukku/Neha_cloudstorage"
              demoLink="https://github.com/SrinehaMukku/Neha_cloudstorage"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Captioning System"
              description="Designed an AI-powered image captioning system that generates natural language descriptions for images. Utilized deep learning models (CNN + LSTM) and trained on large datasets to improve accuracy."
              ghLink="https://github.com/SrinehaMukku/ImageCaptioning"
              demoLink="https://image-captioning-demo.com"
            />
          </Col>

          {/* Project 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PIZZA PLANK"
              description="Created a dynamic pizza delivery web app using React and Node.js. Enhanced the app to fetch live menu data from a backend database, allowing users to place and track orders in real time."
              ghLink="https://github.com/SrinehaMukku/PIZZA_PLANK"
              demoLink="https://pizzaplank-demo.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
