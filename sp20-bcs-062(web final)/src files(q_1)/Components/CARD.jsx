import React from "react";
import "./CARD.css";

function Card({ id, title, body, userId, tags }) {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="id">{id}</div>
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="userId">{userId}</div>
        <div className="tags">{tags}</div>
      </div>
    </div>
  );
}

export default Card;
