import Task from "../../images/taskmanage.jpg";
import Social from "../../images/social.jpg";
import Text from "../../images/textReminder.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";

import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <>
      <div className="services">
        <h1>Our Services</h1>
      </div>
      <section className="project-container">
        <Row>
          <Col lg={true}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="cardimg" src={Social} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h2>Social Challenges</h2>
                  <p>
                    Social challenges allows you to choose from any category and
                    it will spit out challenges for your to complete. Write them
                    down and input them into the task manager
                  </p>
                  <Link to="/challenges">
                    <button type="button" className="btn btn-dark">
                      Start
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={true}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="cardimg" src={Task} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h2>Task Manager</h2>
                  <p>
                    The task manager allows you to input your challenges and
                    mark them complete when finished and delete them afterwards.
                  </p>
                  <Link to="/taskmanagement">
                    <button type="button" className="btn btn-dark">
                      Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={true}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="cardimg" src={Text} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h2>Text Reminder</h2>
                  <p>
                    This service will have you enter your phone number and allow
                    us to send you reminders to finish your tasks and check them
                    off in the task manager. (COMING SOON)
                  </p>
                  <button type="button" className="btn btn-dark" disabled>
                    Start
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
