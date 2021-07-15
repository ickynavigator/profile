import { Alert } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

interface childProps {
  variant: Variant;
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
