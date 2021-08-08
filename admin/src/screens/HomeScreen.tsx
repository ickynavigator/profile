import { useState } from "react";
import { Form } from "react-bootstrap";
import Message from "../components/Message";

import { userLogin } from "../components/NetFunctions";

const HomeScreen = () => {
  const [secret, setsecret] = useState("");

  const [errorMsg, seterrorMsg] = useState("");

  // const [validated, setValidated] = useState(false);
  // const [formSuc, setFormSuc] = useState(false);
  // const [formErr, setFormErr] = useState(false);

  const handleSubmit = async (event: eventInterface) => {
    // setFormSuc(false);
    // setFormErr(false);

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      // setValidated(true);
      seterrorMsg("");

      await userLogin({ secret });
      // if (userLogin({secret}) === false) {
      //   seterrorMsg("Incorrect Secret");
      // } else {
      //   seterrorMsg("Correct Secret");
      // }
    }
  };

  return (
    <>
      <div className="justify-content-center align-items-center">
        <h1>
          Welcome to <a href="https://obifortune.tech">Obi Fortune</a> Profile
          Admin Page
        </h1>
        {errorMsg && <Message variant="danger">{errorMsg}</Message>}
        <Form name="contact" onSubmit={handleSubmit} method="POST">
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              value={secret}
              onChange={(e) => setsecret(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide your password.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default HomeScreen;
