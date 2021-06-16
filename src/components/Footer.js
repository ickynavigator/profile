import React from "react";
import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Footer = () => {
  return (
    <div>
      <hr />
      <a href="https://github.com/ickynavigator">
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
      <a href="https://twitter.com/obifortunebleh">
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/obifortune/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
      </a>
      <a href="https://www.facebook.com/obi.fortune2">
        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
      </a>
    </div>
  );
};

export default Footer;
