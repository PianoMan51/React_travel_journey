import React from "react";
import gpsIcon from "../images/Fill 219.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={process.env.PUBLIC_URL + props.item.img} />
        <div className="content">
          <span className="title">
            <img src={gpsIcon} height="7px" />
            {props.item.title}
            <a href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
          <h3 className="location">{props.item.location}</h3>
          <span className="date">
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
