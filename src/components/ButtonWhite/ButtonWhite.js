import React from "react";
import { Button } from "./ButtonWhite.styles";

const ButtonWhite = props => {
  const { isFooter } = props;
  return (
    <Button isFooter={isFooter} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default ButtonWhite;
