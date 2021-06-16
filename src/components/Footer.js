import React from "react";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Footer = () => {
  const baseIcon = ({ link, icon }) => {
    return (
      <a href={link} className="mx-3" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} color="grey" size="2x" />
      </a>
    );
  };

  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {baseIcon({
          link: "https://github.com/ickynavigator",
          icon: ["fab", "github"],
        })}
        {/* {baseIcon({
          link: "https://twitter.com/obifortunebleh",
          icon: ["fab", "twitter"],
        })} */}
        {baseIcon({
          link: "https://www.linkedin.com/in/obifortune/",
          icon: ["fab", "linkedin-in"],
        })}
        {baseIcon({
          link: "https://www.facebook.com/obi.fortune2",
          icon: ["fab", "facebook"],
        })}
      </footer>
    </>
  );
};

export default Footer;
