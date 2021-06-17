import React from "react";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Footer = () => {
  const baseIcon = ({ link, icon }, ind) => {
    return (
      <a
        href={link}
        className="mx-3"
        target="_blank"
        rel="noreferrer"
        key={ind}
        aria-label={icon[1]}
      >
        <FontAwesomeIcon icon={icon} color="grey" size="2x" />
      </a>
    );
  };

  const links = [
    {
      link: "https://github.com/ickynavigator",
      icon: ["fab", "github"],
    },
    // {
    //   link: "https://twitter.com/obifortunebleh",
    //   icon: ["fab", "twitter"],
    // },
    {
      link: "https://www.linkedin.com/in/obifortune/",
      icon: ["fab", "linkedin-in"],
    },
    {
      link: "https://www.facebook.com/obi.fortune2",
      icon: ["fab", "facebook"],
    },
  ];
  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {links.map((x, ind) => baseIcon(x, ind))}
      </footer>
    </>
  );
};

export default Footer;
