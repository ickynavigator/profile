import React from "react";
import { Navbar } from "react-bootstrap";
import { navMenuLinks } from "../Constants";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-center m-3 p-0">
        {navMenuLinks.map((x, ind) => NavButton(...x, ind))}
      </Navbar>
    </>
  );
};

export default Header;
