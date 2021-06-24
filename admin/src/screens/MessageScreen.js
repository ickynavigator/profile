import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { readMessage, reviewMessage } from "../components/NetFunctions";

const MessageScreen = ({ match }) => {
  const [message, setMessage] = useState({
    id: Number(),
    Name: String(),
    Email: String(),
    Message: String(),
    Reviewed: Boolean(),
    Created: new Date(),
  });
  const { id, Name, Email, Message, Reviewed, Created } = message;

  const [review, setReview] = useState(Reviewed);

  // TODO MAKE SURE REVIEW WORKS PROPERLY
  const reviewMsg = () => {
    const val = !review;
    reviewMessage(id, { Reviewed: review });
    setReview(val);
  };

  useEffect(() => {
    const readMsg = async () => {
      const { data } = await readMessage(match.params.id);

      const { id } = data.ref["@ref"];
      const { Name, Email, Message, Reviewed, Created } = data.data;

      setMessage({ id, Name, Email, Message, Reviewed, Created });
    };

    readMsg();
  }, [match, review, setReview, message, setMessage]);

  return (
    <>
      <Row>
        <Col sm={6}>
          <ListGroup className="text-start">
            <h1>Message</h1>
            <ListGroup.Item>
              <h5>Message ID</h5>
              {id}
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>Name</h5>
              {Name}
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>Email</h5>
              <a href={`mailto:${Email}`}>{Email}</a>
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>Message Sent</h5>
              {new Date(Created).toDateString()}
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>
                Reviewed{" "}
                {Reviewed ? (
                  <FontAwesomeIcon icon={"check"} color="green" />
                ) : (
                  <FontAwesomeIcon icon={"times"} color="red" />
                )}
              </h5>
              <Button variant={"secondary"} onClick={reviewMsg}>
                Review
              </Button>
            </ListGroup.Item>

            <ListGroup.Item style={{ wordWrap: "break-word" }}>
              <h5>Message:</h5>
              <p>{Message}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={6}></Col>
      </Row>
    </>
  );
};

export default MessageScreen;
