import { useState } from "react";
import { Form } from "react-bootstrap";

import Message from "../components/Message";
import { userLogin } from "../components/NetFunctions";

const HomeScreen = () => {
  const [secret, setsecret] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [userLoginStatus, setuserLoginStatus] = useState(false);

  const handleSubmit = async (event: eventInterface) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      seterrorMsg("");
      setuserLoginStatus(await userLogin({ secret }));
      if (userLoginStatus === false) {
        seterrorMsg("Incorrect Secret");
      } else {
      }
    }
  };

  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-center">
        <h1 className="text-center">
          Welcome to <a href="https://obifortune.tech">Obi Fortune</a> Profile
          Admin Page
        </h1>
        {errorMsg && <Message variant="danger">{errorMsg}</Message>}
        <Form name="contact" onSubmit={handleSubmit} method="POST">
          <Form.Group controlId="password" className="text-center">
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
