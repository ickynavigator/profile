// TODO CREATE THIS SCREEN
import React from "react";
import { myCerts } from "../Constants";
import BaseCertificate from "../components/BaseCertificate";

const CertificateScreen: React.FC = () => {
  return (
    <>
      {myCerts.map((cert) => {
        return BaseCertificate({ cert });
      })}
    </>
  );
};

export default CertificateScreen;
