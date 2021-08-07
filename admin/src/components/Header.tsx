// import React from "react";
import { useEffect } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userLogout, userCheck } from "./NetFunctions";

const LogoutHandler = () => {
  userLogout();
};

const Header = () => {
  useEffect(() => {
    userCheck();
  }, []);

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
