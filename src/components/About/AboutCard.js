import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>
              <span className="purple">Information Technology Engineering student</span>,
              my journey is all about connecting the dots between our digital world and the
              magic of web-based applications. While I may lean towards introversion, my passion
              for technology and my drive to make a mark push me to embrace every opportunity
              that comes my way. 🚀
              <br /><br />
              Despite my quiet nature, I’m deeply motivated by the challenge of expressing ideas
              and contributing to projects that bring value and innovation to the virtual
              landscape. My academic path has been more than just codes and protocols—it has
              been an exploration of how technology can transform lives and industries. 🌐
            </p>
          </p>
          <ul>
            <b>HOBBIES INCLUDES</b>
            <li className="about-activity">
              <ImPointRight /> Handicrafts
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You may wait a moment, a day, or longer—but what you truly deserve never misses its time."{" "}
          </p>
          <footer className="blockquote-footer">Srineha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
