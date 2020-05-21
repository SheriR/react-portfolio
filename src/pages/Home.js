import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Sheri2 from "../images/Sheri2.jpg";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <Jumbotron style={{ marginBottom: "0" }}>
      <h1>Sheri Rhoades</h1>
      <h2 className="text-secondary">
        I am attending KU Bootcamp working to become a full stack programer
      </h2>
      <container>
        <row>
          <Image src={Sheri2} style={{ width: "18rem" }} />
        </row>

        <row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </row>
      </container>
    </Jumbotron>
  );
}

export default Home;
