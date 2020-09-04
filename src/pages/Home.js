import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Sheri2 from "../images/Sheri2.jpg";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <Jumbotron style={{ marginBottom: "0" }}>
      <h1>Sheri Rhoades</h1>
      <h4 className="text-secondary">
        Hi! I am a KU Full-Stack Coding Bootcamp graduate seeking new
        opportunities to learn and grow as a developer.
      </h4>
      <container>
        <row>
          <Image src={Sheri2} style={{ width: "18rem" }} />
        </row>
      </container>
    </Jumbotron>
  );
}

export default Home;
