import React from "react";
import "./ResultCard.css";

export default function ResultCard(props) {
  const title = props.title;
  const authors = props.authors;
  const thumbnail = props.thumbnail;
  const description = props.description;
  const link = props.link;

  return (
    <div className="card card-fluid mt-2 bg-dark text-white">
      <h1 className="card-header">{title}</h1>
      <div className="card-body">
        <img src={thumbnail} alt="book" className="float-left mr-2"></img>
        <p className="">Authors: {authors}</p>
        <p>Synopsis: {description}</p>
        <p>Link: {link}</p>
        
      </div>
    </div>
  );
}
