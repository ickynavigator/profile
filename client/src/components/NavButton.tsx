import { Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import mt from "../myTypes";

interface childProps {
  foo: mt.typeNavMenuLinks;
  ind: number;
}
const NavButton: React.FC<childProps> = ({ foo, ind }) => {
  const location = useLocation();
  const { link, title } = foo;
  return (
    <Link to={link} key={ind}>
      <Button
        active={location.pathname === link ? true : false}
        variant="outline-secondary"
        className="rounded-pill mx-1 mx-md-3"
      >
        {title}
      </Button>
    </Link>
  );
};

export default NavButton;
