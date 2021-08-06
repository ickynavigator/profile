// import React from "react";
import { useEffect, useState } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserLogout, UserCheck } from "./UserFunctions";

const LogoutHandler = () => {
  UserLogout();
};

const Header = () => {
  const [userName, setuserName] = useState("");

  useEffect(() => {
    UserCheck();
    return () => {};
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
