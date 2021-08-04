import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteHelmet from "../components/SiteHelmet";
import { aboutDetails, cvLocation } from "../Constants";

const AboutScreen: React.FC = () => {
  return (
    <>
      <SiteHelmet />
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
    </>
  );
};

export default AboutScreen;
