import { Alert } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

interface childProps {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  children: string;
}
const Message: React.FC<childProps> = ({ variant, children }) => {
  return (
    <Alert variant={variant} className="my-3 py-1">
      {children}
    </Alert>
  );
};

export default Message;
