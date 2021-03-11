import React from "react";

const ShowMsg = (props) => {
  return (
    <div
      className="showMsgContainer"
      style={
        props.type === "success"
          ? { backgroundColor: "green" }
          : { backgroundColor: "#c7001b" }
      }
    >
      <p>{props.msg}</p>
    </div>
  );
};

export default ShowMsg;
