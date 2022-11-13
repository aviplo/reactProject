import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Erorr = () => {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>404</Alert.Heading>
        <p>
          If you got to here you probobly got confused please go back
          <button
            onClick={() => {
              console.log(1);
            }}
          >
            Home
          </button>
        </p>
      </Alert>
    </>
  );
};

export default Erorr;
