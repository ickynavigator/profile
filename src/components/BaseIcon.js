import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const BaseIcon = ({ link, icon, title }, ind) => {
  const renderTooltip = (props) => (
    <Tooltip id="tooltip-top" {...props}>
      {title}
    </Tooltip>
  );

  return (
    <a
      href={link}
      className="mx-3"
      target="_blank"
      rel="noreferrer"
      key={ind}
      aria-label={title}
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <FontAwesomeIcon icon={icon} color="grey" size="2x" />
      </OverlayTrigger>
    </a>
  );
};

export default BaseIcon;
