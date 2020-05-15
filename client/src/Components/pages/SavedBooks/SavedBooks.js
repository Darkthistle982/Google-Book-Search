import React, { Component } from "react";
import axios from "axios";
import ResultCard from "../../ResultCard/ResultCard"


class SavedBooks extends Component {
state = {
    savedBooks: []
}

componentDidMount() {
    this.getSavedBooksFromDB();
}

getSavedBooksFromDB = () => {
    axios
      .get("/api/saved-books")
      .then(function (request, response) {
        response.json();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
      return (
      <div className="container">
          <ResultCard/>
      </div>
      )
      }
}

export default SavedBooks;
