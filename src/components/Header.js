import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  /**
   * @param {string} link
   * @param {string} title
   */
  const baseButton = (link, title) => {
    return (
      <Link to={link}>
        <Button
          active={location.pathname === link ? true : false}
          variant="outline-secondary"
          className="rounded-pill mx-3"
        >
          {title}
        </Button>
      </Link>
    );
  };

  return (
    <>
      <Navbar className="d-flex justify-content-center m-3 p-0">
        {baseButton("/about", "About")}
        {baseButton("/", "Home")}
        {baseButton("/contact", "Contact")}
      </Navbar>
    </>
  );
};

export default Header;
