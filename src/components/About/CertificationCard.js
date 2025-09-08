import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificationCard({ title, description, credentialLink }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {credentialLink && (
          <Button
            variant="primary"
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
