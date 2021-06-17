import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const AboutScreen = () => {
  return (
    <div className="text-center">
      <p>
        I’m an IT student in my third year, studying Information & Technology,
        at Eastern Mediterranean University in Northern Cyprus.
      </p>
      <p>
        I am passionate about Web development and currently I am learning
        TypeScript (a superset of JS). I like to practice my skills on sites
        like Code wars, CSS battle and Try Hack Me.
      </p>
      <p>
        I am currently seeking internship opportunities to help me harness and
        develop my skills in these areas.
      </p>
      <a href="/assets/cv.pdf" download>
        <Button variant="secondary">
          Download my CV <FontAwesomeIcon icon="save" color="white" size="1x" />
        </Button>
      </a>
    </div>
  );
};

export default AboutScreen;
