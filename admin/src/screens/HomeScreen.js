import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { readAllMessages } from "../components/NetFunctions";

// const allMsg = async () => {
//   const res = await readAllMessages();
//   return res;
// };
// const messages = allMsg();
// console.log(messages);

const HomeScreen = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {readAllMessages().then((res) => {
            console.log(res);
          })}
        </tbody>
      </Table>
    </>
  );
};

export default HomeScreen;

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

// {
//   /* res.map(({ id, name, email, date }, index) => {
//     return (
//       <tr key={index}>
//         <td>{name}</td>
//         <td>
//           <a href={`mailto:${email}`}>{email}</a>
//         </td>
//         <td>{date.toUTCString()}</td>
//         <td>
//           <Link to={`/message/${index}`}>
//             <Button>View Message</Button>
//           </Link>
//         </td>
//       </tr>
//     );
//   }); */
// }
