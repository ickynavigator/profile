import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Card, Button } from "react-bootstrap";

interface childProps {
  foo: any;
  ind: number;
}
const BaseChallengesCard: React.FC<childProps> = ({ foo, ind }) => {
  const { challengeName, challengeLink } = foo;

  return (
    <Col key={ind}>
      <Card>
        <Card.Header as="h3">
          <a href={challengeLink} target="_blank" rel="noreferrer">
            <Button className="w-100" variant="secondary">
              View {challengeName} Challenges
              <FontAwesomeIcon icon="code" color="white" size="1x" />
            </Button>
          </a>
        </Card.Header>
      </Card>
    </Col>
  );
};

export default BaseChallengesCard;
