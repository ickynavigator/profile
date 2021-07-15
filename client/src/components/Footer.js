import React from "react";
import BaseIcon from "./BaseIcon";
import { footerLinks } from "../Constants";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {footerLinks.map((x, ind) => BaseIcon(x, ind))}
      </footer>
    </>
  );
};

export default Footer;
