import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagArgs from "../components/TagArgs";
import { aboutDetails, cvLocation } from "../Constants";

const AboutScreen = () => {
  TagArgs();
  return (
    <div className="text-center">
      {aboutDetails.map((x, ind) => {
        return <p key={ind}>{x}</p>;
      })}
      {cvLocation && (
        <a href={`/assets/${cvLocation}`} download>
          <Button variant="secondary">
            Download my CV{" "}
            <FontAwesomeIcon icon="save" color="white" size="1x" />
          </Button>
        </a>
      )}
    </div>
  );
};

export default AboutScreen;
