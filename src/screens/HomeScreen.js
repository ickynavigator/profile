import React from "react";

const HomeScreen = ({ logo }) => {
  return (
    <div className="text-center">
      <img
        src="/myPic.jpg"
        className="rounded-circle m-2 w-25 h-25"
        alt="Obi Fortune"
      />
      <h2>OBI FORTUNE DUBEM</h2>
      <hr className="w-25 inline mx-auto" />
      <h5>Student / Web developer</h5>
    </div>
  );
};

export default HomeScreen;
