import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { readAllMessages } from "../components/NetFunctions";

const ListMessagesScreen: React.FC = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const readAllMsg = async () => {
      const { data } = await readAllMessages();
      setMessages(data);
    };
    readAllMsg();
  }, []);

  return (
    <>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Reviewed</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {messages.map(({ data, ref }, index) => {
            const { id } = ref["@ref"];
            const { Name, Email, Reviewed, Created } = data;

            return (
              <tr key={index}>
                <td>{Name}</td>
                <td>
                  <a href={`mailto:${Email}`}>{Email}</a>
                </td>
                <td>
                  {Reviewed ? (
                    <FontAwesomeIcon icon={"check"} color="green" size="2x" />
                  ) : (
                    <FontAwesomeIcon icon={"times"} color="red" size="2x" />
                  )}
                </td>
                <td>{new Date(Created).toDateString()}</td>
                <td>
                  <Link to={`/message/${id}`}>
                    <Button>View Message</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListMessagesScreen;

// [
//     {
//       id: 1,
//       name: "Home",
//       email: "home@fortawesome.com",
//       date: new Date("October 13, 2014 11:13:00"),
//     },
//     {
//       id: 1,
//       name: "Home",
//       email: "home@fortawesome.com",
//       date: new Date("October 13, 2014 11:13:00"),
//     },
//     {
//       id: 1,
//       name: "Home",
//       email: "home@fortawesome.com",
//       date: new Date("October 13, 2014 11:13:00"),
//     },
//     {
//       id: 1,
//       name: "Home",
//       email: "home@fortawesome.com",
//       date: new Date("October 13, 2014 11:13:00"),
//     },
//   ]
