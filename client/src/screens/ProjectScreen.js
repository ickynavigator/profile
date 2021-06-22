import React from "react";
import { Row } from "react-bootstrap";
import BaseProjectCard from "../components/BaseProjectCard";
import TagArgs from "../components/TagArgs";
import { ProjList } from "../Constants";

const ProjectScreen = () => {
  TagArgs();
  return (
    <div>
      <Row xs={1} className="g-4">
        {ProjList.map((x, ind) => {
          return BaseProjectCard(x, ind);
        })}
      </Row>
    </div>
  );
};

export default ProjectScreen;
