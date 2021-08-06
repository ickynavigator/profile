import { useState } from "react";
import { Form } from "react-bootstrap";

import { checkPassword } from "../components/NetFunctions";

const HomeScreen = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const [errorMsg, seterrorMsg] = useState("");

  const [validated, setValidated] = useState(false);
  const [formSuc, setFormSuc] = useState(false);
  const [formErr, setFormErr] = useState(false);

  const handleSubmit = (event: eventInterface) => {
    setFormSuc(false);
    setFormErr(false);

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      setValidated(true);
      const userDetails: typeUser = { password, userName };
      checkPassword(userDetails)
        .then(() => {
          setFormSuc(true);
          setValidated(false);

          setpassword("");
          setuserName("");
          seterrorMsg("");
        })
        .catch((err) => {
          if (process.env?.NODE_ENV === "development") console.log(err);
          seterrorMsg(err);
          setFormErr(true);
        });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h1>
          Welcome to <a href="#">Obi Fortune</a> Profile Admin Page
        </h1>
        <Form name="contact" onSubmit={handleSubmit} method="POST">
          <Form.Group></Form.Group>
        </Form>
      </div>
    </>
  );
};

export default HomeScreen;
