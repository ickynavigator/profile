import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Message from "../components/Message";
import SiteHelmet from "../components/SiteHelmet";
import { ownerJobStatus, ownerName, ownerPic, ownerTitle } from "../Constants";

const HomeScreen: React.FC = () => {
  const statusCheck = (status: typeJobStatus) => {
    let message: string;
    let messageAlert: "success" | "danger" | "warning";
    let messageIcon: IconProp;

    switch (status) {
      case "open":
        message = "Available for Hire";
        messageAlert = "success";
        messageIcon = ["fas", "check-circle"];
        break;
      case "close":
        message = "Not Available for Hire";
        messageAlert = "danger";
        messageIcon = ["fas", "hourglass"];
        break;
      case "inbetween":
        message = "Less Busy at the moment";
        messageAlert = "warning";
        messageIcon = ["fas", "times-circle"];
        break;
    }

    return { message, messageAlert, messageIcon };
  };

  const jobStatus = statusCheck(ownerJobStatus);

  return (
    <>
      <SiteHelmet />
      <div className="text-center">
        <img
          src={`/assets/${ownerPic}`}
          className="rounded-circle m-2 w-25 h-25"
          alt={ownerName}
        />
        <h3>{ownerName}</h3>
        <hr className="w-25 inline mx-auto" />
        <h4 className="text-muted">{ownerTitle}</h4>

        <h5 className="text-muted">Job Status</h5>
        <Message variant={jobStatus.messageAlert}>
          {`${(
            <FontAwesomeIcon
              icon={jobStatus.messageIcon}
              color="white"
              size="1x"
            />
          )} - ${jobStatus.message}`}
        </Message>
      </div>
    </>
  );
};

export default HomeScreen;
