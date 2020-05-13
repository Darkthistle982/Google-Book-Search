import React from "react";
import ResultCard from "../ResultCard/ResultCard";


export default function ResultsBookList(props) {
    const bookList = props.booklist;

  return (
    <div className="container book-container">
      {bookList.map((book, index) => (
        <ResultCard
          key={index}
        />
      ))}
    </div>
  );
}
