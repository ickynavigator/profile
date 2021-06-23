// import React from "react";
import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// TODO setup logout handler
const LogoutHandler = () => {};

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand>
        <Link to="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Button onClick={LogoutHandler} variant="secondary">
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
