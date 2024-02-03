import React from "react";
import Alert from "react-bootstrap/Alert";

const MessageBox = ({ variant = "info", children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default MessageBox;
