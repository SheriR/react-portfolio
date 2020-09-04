import React from "react";
import burgerLogger from "../images/Eat-Da-Burger.JPG";
import dayPlanner from "../images/DayPlanner.JPG";
import noteTaker from "../images/notetaker.png";
import employeetracker from "../images/Employee Tracker.png";
import team from "../images/team-hw10.png";
import weather from "../images/Weather Dashboard.png";
import project3 from "../images/project3.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <div>
      <section className="portfolio bg-light" id="portfolio">
        <Container>
          <h1 className style={{ padding: "1rem" }}>
            Projects
          </h1>
          <Row>
            <Col xs={6} md={4}>
              <Card
                style={{ width: "22rem", marginBottom: "1rem" }}
                className="projectCards"
              >
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={burgerLogger}
                />
                <Card.Body>
                  <Card.Title>Burger-Logger</Card.Title>
                  <Card.Text>
                    A burger logger using MySQL, Node, Express, Handlebars and a
                    homemade ORM deployed on Heroku
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    style={{ margin: "1rem" }}
                    variant="primary"
                    href="https://eat-da-burger-sheri.herokuapp.com/"
                    target="_blank"
                  >
                    App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/burger"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4}>
              <Card style={{ width: "22rem", marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={dayPlanner}
                />
                <Card.Body>
                  <Card.Title>Day Planner</Card.Title>
                  <Card.Text>
                    A simple calendar application that allows the user to save
                    events for each hour of their work day
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    style={{ margin: "1rem" }}
                    variant="primary"
                    href="https://sherir.github.io/Day-Planner/"
                    target="_blank"
                  >
                    App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/Day-Planner"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: "22rem", marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={noteTaker}
                />
                <Card.Body>
                  <Card.Title>Note Taker</Card.Title>
                  <Card.Text>
                    An application that can be used to write, save and delete
                    notes using an express backend.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    style={{ margin: "1rem" }}
                    variant="primary"
                    href="https://notetakersheri.herokuapp.com/"
                    target="_blank"
                  >
                    App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/Note-Taker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card
                style={{ width: "22rem", marginBottom: "1rem" }}
                className="projectCards"
              >
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={employeetracker}
                />
                <Card.Body>
                  <Card.Title>Employee Tracker</Card.Title>
                  <Card.Text>
                    Content Managemenent System allows users to view and
                    interact with information stored in our emplpoyee database.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/Employee-Tracker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4}>
              <Card
                style={{ width: "22rem", marginBottom: "1rem" }}
                className="projectCards"
              >
                <Card.Img variant="top" className="projectpics" src={team} />
                <Card.Body>
                  <Card.Title>Team Profile Generator</Card.Title>
                  <Card.Text>
                    This is a software engineering team generator command line
                    application. The application prompts the user for
                    information about the team manager and team members.
                    members, and they may be a mix of engineers and interns.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/Template-Engine-Employee-Summary"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4}>
              <Card
                style={{ width: "22rem", marginBottom: "1rem" }}
                className="projectCards"
              >
                <Card.Img variant="top" className="projectpics" src={weather} />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    A weather app to view today's weather and the 5 day
                    forecast.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    style={{ margin: "1rem" }}
                    variant="primary"
                    href="https://sherir.github.io/Weather-Dashboard/"
                    target="_blank"
                  >
                    App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/SheriR/Weather-Dashboard"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <Card
                style={{ width: "22rem", marginBottom: "1rem" }}
                className="projectCards"
              >
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={project3}
                />
                <Card.Body>
                  <Card.Title>Centaur Trading Game</Card.Title>
                  <Card.Text>
                    A website designed for gamers to buy, sell and trade games.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    style={{ margin: "1rem" }}
                    variant="primary"
                    href="https://video-game-trader-052020.herokuapp.com/"
                    target="_blank"
                  >
                    App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/tboyd4/video-game-trader"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
