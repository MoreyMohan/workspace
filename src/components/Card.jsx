import React from "react";
import Details from "./details";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imageUrl} alt="avatar_img" />
      </div>
      <Details details={props.contact} mailId={props.mailId} />
    </div>
  );
}
