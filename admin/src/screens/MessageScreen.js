import React, { useState, useEffect } from "react";
import { readMessage } from "../components/NetFunctions";

const MessageScreen = ({ match }) => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    const readMsg = async () => {
      const { data } = await readMessage(match.params.id);
      const { id } = data.ref["@ref"];
      const { Name, Email, Reviewed, Created } = data.data;
      setMessage({ id, Name, Email, Reviewed, Created });
    };
    readMsg();
  }, [match]);

  return (
    <div>
      <h1>Message ID: {JSON.stringify(message)}</h1>
    </div>
  );
};

export default MessageScreen;
