import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import mt from "../myTypes";

const dateMaker = (date: [number, number, number?]) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date[1] - 1]}, ${date[0]}`;
};

interface childProps {
  cert: mt.typeCerts;
}
const BaseCertificate: React.FC<childProps> = ({ cert }) => {
  const { idx, name, authority, authorityImg, startDate, endDate, url } = cert;
  return (
    <Card key={idx} className="my-3">
      <Card.Header>{name}</Card.Header>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Card.Footer>
        <Row>
          <Col>Issued on {dateMaker(startDate)}</Col>
          <Col className="text-end">
            {endDate
              ? `Expires on ${dateMaker(endDate)}`
              : `No Expiration Date`}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default BaseCertificate;
