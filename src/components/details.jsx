import React from "react";

export default function Details(props) {
  console.log("details", props);
  return (
    <div className="bottom">
      <p className="info">{props.details}</p>
      <p className="info">{props.mailId}</p>
    </div>
  );
}
