import React from "react";
import SiteHelmet from "../components/SiteHelmet";
import { ownerName, ownerPic, ownerTitle } from "../Constants";

const HomeScreen: React.FC = () => {
  return (
    <>
      <SiteHelmet title="Home Page" />
      <div className="text-center">
        <img
          src={`/assets/${ownerPic}`}
          className="rounded-circle m-2 w-25 h-25"
          alt={ownerName}
        />
        <h3>{ownerName}</h3>
        <hr className="w-25 inline mx-auto" />
        <h4 className="text-muted">{ownerTitle}</h4>
      </div>
    </>
  );
};

export default HomeScreen;
