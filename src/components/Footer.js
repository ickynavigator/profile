import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseIcon from "./BaseIcon";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {[
          {
            link: "https://github.com/ickynavigator",
            icon: ["fab", "github"],
            title: "Github",
          },
          // {
          //   link: "https://twitter.com/obifortunebleh",
          //   icon: ["fab", "twitter"],
          //   title: "Twitter",
          // },
          {
            link: "https://www.linkedin.com/in/obifortune/",
            icon: ["fas", "code"],
            title: "Site Source Code",
          },
          {
            link: "https://www.linkedin.com/in/obifortune/",
            icon: ["fab", "linkedin-in"],
            title: "Linkedin",
          },
          {
            link: "https://www.facebook.com/obi.fortune2",
            icon: ["fab", "facebook"],
            title: "Facebook",
          },
        ].map((x, ind) => BaseIcon(x, ind))}
      </footer>
    </>
  );
};

export default Footer;
