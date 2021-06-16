import React from "react";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="py-2 text-align-center">
        <Button variant="outline-dark" className="rounded-pill mx-3">
          About
        </Button>

        <Button variant="outline-dark" className="rounded-pill mx-3">
          Home
        </Button>

        <Button variant="outline-dark" className="rounded-pill mx-3">
          Contact
        </Button>
      </div>
      <hr />
    </>
  );
};

export default Header;
