import React from "react";
import BaseIcon from "./BaseIcon";
import { FooterLinks } from "../Constants";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {FooterLinks.map((x, ind) => BaseIcon(x, ind))}
      </footer>
    </>
  );
};

export default Footer;
