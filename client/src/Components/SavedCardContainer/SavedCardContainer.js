import React from "react";
import SavedCard from "../SavedCard/SavedCard";


 function ResultsBookList(props) {
    const BookList = props.booklist;
  return (
    <div className="container-fluid">
      {BookList.map((book, index) => (
        <SavedCard
          key={index}
          title={book.title}
          authors={book.authors}
          description={book.description}
          thumbnail={book.thumbnail}
          link={book.infoLink}
        />
      ))}
    </div>
  );
}

export default ResultsBookList;