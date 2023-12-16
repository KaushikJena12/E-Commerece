import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="kk" />
      <div className="card-body">
        <h2 className="card-text">{props.details}</h2>
        <h3 className="price">{props.details}</h3>
        <div className="btn">
          <button>Add Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
