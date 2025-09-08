import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={emotion}
              isBlog={false}
              title="Image Captioning"
              description="In this project, I developed an image captioning system that automatically generates descriptive 
              captions for uploaded images. Using deep learning models, I trained the system on large datasets and integrated computer vision techniques to recognize objects in images. The goal was to create an application that can describe any given image with meaningful, human-like captions."
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Captioning"
              description="In this project, I developed an image captioning system that automatically generates descriptive 
              captions for uploaded images. Using deep learning models, I trained the system on large datasets and integrated computer vision techniques to recognize objects in images. The goal was to create an application that can describe any given image with meaningful, human-like captions."
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Captioning"
              description="In this project, I developed an image captioning system that automatically generates descriptive 
              captions for uploaded images. Using deep learning models, I trained the system on large datasets and integrated computer vision techniques to recognize objects in images. The goal was to create an application that can describe any given image with meaningful, human-like captions."
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FOOD4ALL"
              description="FoodForAll is a sustainable food-sharing platform designed to connect users who want to donate leftover food with those in need. Built using the MERN stack, it allows users to post 
              food donations, select recipients, and coordinate pickups. The platform emphasizes reducing food waste and promoting community sharing."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PIZZA PLANK"
              description="PizzaPlank is a dynamic pizza delivery app built with React. Initially, it supported a fixed set of six pizza items. I enhanced it by integrating a backend to fetch live data from a database, making the pizza menu dynamic and real-time. The app allows users to browse, order, 
              and track deliveries, offering a smooth, user-friendly experience with a focus on efficient functionality."
              ghLink="https://github.com/SrinehaMukku/PIZZA_PLANK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Captioning"
              description="In this project, I developed an image captioning system that automatically generates descriptive 
              captions for uploaded images. Using deep learning models, I trained the system on large datasets and integrated computer vision techniques to recognize objects in images. The goal was to create an application that can describe any given image with meaningful, human-like captions."
    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
