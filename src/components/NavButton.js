import { Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const NavButton = (link, title, ind) => {
  const location = useLocation();
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
