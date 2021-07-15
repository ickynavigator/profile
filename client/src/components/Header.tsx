import React from "react";
import { Navbar } from "react-bootstrap";
import { navMenuLinks } from "../Constants";
import NavButton from "./NavButton";

const Header: React.FC = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-center m-1 pt-3">
        {navMenuLinks.map((foo, ind) => NavButton({ foo, ind }))}
      </Navbar>
    </>
  );
};

export default Header;
