// import React from "react";
import { useEffect } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userCheck, userLogout } from "./NetFunctions";

const LogoutHandler = () => {
  userLogout();
};

const Header = () => {
  useEffect(() => {
    (async function UC() {
      await userCheck();
    })();
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand>
        <Link to="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </Navbar.Brand>
      <Nav className="ms-auto">
        {localStorage.getItem("secret") && (
          <Button onClick={LogoutHandler} variant="secondary">
            Logout
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
