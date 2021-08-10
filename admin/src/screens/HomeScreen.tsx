import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import Message from "../components/Message";
import { userCheck, userLogin } from "../components/NetFunctions";

const HomeScreen: React.FC = () => {
  const [secret, setsecret] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  useEffect(() => {
    (async function UC() {
      await userCheck();
    })();
  });

  const handleSubmit = async (event: eventInterface) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      seterrorMsg(``);

      await userLogin({ secret }).then((res) => {
        if (res) {
          const redirectPath = window.location.search
            ?.split("&")[0]
            ?.split(/\?redirect=/)[1];
          if (redirectPath) {
            window.location.pathname = `/${redirectPath}`;
          } else {
            window.location.pathname = `/message`;
          }
        } else {
          seterrorMsg(`Incorrect Secret`);
        }
      });
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
