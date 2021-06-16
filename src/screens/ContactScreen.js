import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import CharacterCounter from "react-character-counter";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
    }

    setValidated(true);
  };

  return (
    <div>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h2>Contact Me</h2>
            <Form
              name="contact"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide your Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide your Email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <CharacterCounter value={message} maxLength={300} overrideStyle>
                  <Form.Control
                    required
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Enter Message"
                    maxLength={300}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></Form.Control>
                </CharacterCounter>
              </Form.Group>

              <Form.Group className="mt-3">
                <Button type="submit" variant="outline-secondary">
                  Contact
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactScreen;
