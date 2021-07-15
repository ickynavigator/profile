import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import mt from "../myTypes";

interface childProps {
  foo: mt.typeFooterLinks;
  ind: number;
}
const BaseIcon: React.FC<childProps> = ({ foo, ind }) => {
  const { link, icon, title } = foo;

  // @ts-ignore
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
