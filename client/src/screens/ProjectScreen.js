import React from "react";
import { Row } from "react-bootstrap";
import BaseProjectCard from "../components/BaseProjectCard";
import TagArgs from "../components/TagArgs";

const ProjectScreen = () => {
  TagArgs();
  return (
    <div>
      <Row sm={1} className="g-4">
        {[
          {
            name: "Raneda Hair and Makeup",
            image: "raneda.png",
            info: "An Ecommerce Website",
            built: "MongoDB, Express, React JS and Node",
            link: "https://raneda.herokuapp.com/",
            src: "https://github.com/ickynavigator/raneda",
            disabled: [],
          },
          {
            name: "Recipe Management",
            image: "327Project.png",
            info: "A website showcasing recipes and managing the Recipes.",
            built: "PHP",
            link: "https://itec327-termproject.herokuapp.com/",
            src: "https://github.com/ickynavigator/itec327-termproject",
            disabled: [],
          },
          {
            name: "Personal Website/Portfolio",
            image: "profile.png",
            info: "The Website you are currently on 😂.",
            built: "ReactJS and Netlify AWS Lambda functions",
            link: "#",
            src: "https://github.com/ickynavigator/profile",
            disabled: [],
          },
        ].map((x, ind) => {
          return BaseProjectCard(x, ind);
        })}
      </Row>
    </div>
  );
};

export default ProjectScreen;
