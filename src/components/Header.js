import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const baseButton = (link, title, ind) => {
    return (
      <Link to={link} key={ind}>
        <Button
          active={location.pathname === link ? true : false}
          variant="outline-secondary"
          className="rounded-pill mx-1 mx-md-3"
        >
          {title}
        </Button>
      </Link>
    );
  };

  const buttons = [
    ["/projects", "Projects"],
    ["/about", "About"],
    ["/", "Home"],
    ["/contact", "Contact"],
  ];

  return (
    <>
      <Navbar className="d-flex justify-content-center m-3 p-0">
        {buttons.map((x, ind) => baseButton(...x, ind))}
      </Navbar>
    </>
  );
};

export default Header;
