import React from "react";

const Split = props => {
  return (
    <div>
      {props.highlight === true ? (
        <div className="highlight" onClick={() => props.onClick(props.time)}>
          {props.formatTime}
        </div>
      ) : (
        <div onClick={() => props.onClick(props.time)}>{props.formatTime}</div>
      )}
    </div>
  );
};

export default Split;
