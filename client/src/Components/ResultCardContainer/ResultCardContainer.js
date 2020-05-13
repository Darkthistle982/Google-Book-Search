import React from "react";
import ResultCard from "../ResultCard/ResultCard";


 function ResultsBookList(props) {
    const BookList = props.booklist;
    console.log(BookList);
  return (
    <div className="container book-container">
      {BookList.map((book, index) => (
        <ResultCard
          key={index}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          thumbnail={book.volumeInfo.imageLinks.thumbnail}
          description={book.volumeInfo.description}
          link={book.volumeInfo.infoLink}
        />
      ))}
    </div>
  );
}

export default ResultsBookList;