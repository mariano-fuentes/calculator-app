import React from "react";
import Button from "./Button";

const Pad = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, i) => (
        <Button key={i} output={button}></Button>
      ))}
    </div>
  );
};

export default Pad;
