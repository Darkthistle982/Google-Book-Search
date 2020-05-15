import React from "react";
import axios from 'axios';
import "./ResultCard.css";

export default function ResultCard(props) {
  const title = props.title;
  const authors = props.authors;
  const thumbnail = props.thumbnail;
  const description = props.description;
  const link = props.link;
  
  const book = {
    title: props.title,
    authors: props.authors,
    thumbnail: props.thumbnail,
    description: props.description,
    link: props.link
  }

  const handleSave = (book) => {
    axios
      .post('/api/books', book)
      .then(function() {
        console.log("Saved");
      })
      .catch(function(error) {
        console.log(error)
      })
    };

  return (
    <div className="card card-fluid mt-2 bg-dark text-white">
      <h1 className="card-header">
        {title}
        <button type="button" className="btn btn-sm btn-light float-right" onClick={() => handleSave(book)}>Save</button>
        {/* <button type="button" className="btn btn-sm btn-danger float-right mr-2">Delete</button> */}
        </h1>
      <div className="card-body">
        <img src={thumbnail} alt="book" className="float-left mr-2"></img>
        <p className="">Authors: {authors}</p>
        <p>Synopsis: {description}</p>
        <a rel="noopener noreferrer" href={link} target="_blank">Link: {link}</a>
        
      </div>
    </div>
  );
}
