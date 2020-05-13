import React from "react";
import ResultCard from "../ResultCard/ResultCard";


export default function ResultsBookList(props) {
    const BookList = props.booklist;
    
  return (
    <div className="container book-container">
      {BookList.map((book, index) => (
        <ResultCard
          key={index}
          title={book.title}
          authors={book.authors}
          thumbnail={book.thumbnail}
          description={book.description}
          link={book.link}
        />
      ))}
    </div>
  );
}
