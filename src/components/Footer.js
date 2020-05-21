import React from "react";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card>
      <Card.Body
        className="footer"
        style={{
          backgroundColor: "#393842",
          color: "lightgray",
          fontSize: "20px",
        }}
        variant="dark"
      >
        Sheri Rhoades
      </Card.Body>
    </Card>
  );
}

export default Footer;
