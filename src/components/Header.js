import React from "react";
import { Navbar } from "react-bootstrap";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-center m-3 p-0">
        {[
          ["/projects", "Projects"],
          ["/about", "About"],
          ["/", "Home"],
          ["/contact", "Contact"],
        ].map((x, ind) => NavButton(...x, ind))}
      </Navbar>
    </>
  );
};

export default Header;
