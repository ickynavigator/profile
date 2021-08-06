declare module "react-character-counter";

interface typeMessage {
  /** Message Sender Name */
  Name: string;
  /** Message Sender Email */
  Email: string;
  /** Message to send */
  Message: string;
  /** Message Reviewed check */
  Reviewed: boolean;
  /** Message created when */
  Created: Date;
}
interface eventInterface {
  currentTarget: any;
  preventDefault: () => void;
  stopPropagation: () => void;
}
