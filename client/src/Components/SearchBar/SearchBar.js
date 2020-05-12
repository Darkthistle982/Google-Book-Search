import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <form className="mt-2 p-2 border border-dark bg-light">
          <div className="form-group">
            <h1>Find a Book to Explore!</h1>
            <hr />
            <label htmlFor="searchBar" className="mr-1">
              Search Books by Title
            </label>
            <input type="text" className="form-control" id="searchBar"></input>
          </div>
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
