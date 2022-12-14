import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ServiceOne.css";

export default function ServiceOne() {
  const randomConversation = Math.floor(Math.random() * 23);
  const randomChallenge = Math.floor(Math.random() * 20);
  const randomPickupline = Math.floor(Math.random() * 12);

  const [text, setText] = useState("");
  const submit = () => {
    fetch(`/challenges`)
      .then((response) => response.json())
      .then((data) => {
        setText(data[randomChallenge].challenge);
      });
  };

  const clickHandler = () => {
    fetch(`/pickuplines`)
      .then((response) => response.json())
      .then((data) => {
        setText(data[randomPickupline].line);
      });
  };

  const click = () => {
    fetch(`/conversations`)
      .then((response) => response.json())
      .then((data) => {
        setText(data[randomConversation].conversationStarter);
      });
  };

  return (
    <>
      <div className="containerService1">
        <h1 id="title">Pick your challenge</h1>
        <p>
          *Click on a button to retrieve challenges from each category. Write
          down or remember the challenges you received and you will put them
          into the next service*
        </p>

        <div className="socialSkills">
          <Row>
            <Col sm={true}>
              <button onClick={submit} type="button" className="btn btn-dark">
                Random Challenge
              </button>
            </Col>
            <Col sm={true}>
              <button onClick={click} type="button" className="btn btn-dark">
                Conversation Starter
              </button>
            </Col>
            <Col sm={true}>
              <button
                onClick={clickHandler}
                type="button"
                className="btn btn-dark"
              >
                Pick up line
              </button>
            </Col>
          </Row>
        </div>

        <div id="text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
