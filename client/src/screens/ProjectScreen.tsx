import React from "react";
import { Row } from "react-bootstrap";
import BaseProjectCard from "../components/BaseProjectCard";
import TagArgs from "../components/TagArgs";
import { projList } from "../Constants";

const ProjectScreen: React.FC = () => {
  TagArgs();
  return (
    <div>
      <Row xs={1} className="g-4">
        {projList.map((foo, ind) => {
          return BaseProjectCard({ foo, ind });
        })}
      </Row>
    </div>
  );
};

export default ProjectScreen;
