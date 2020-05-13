import React, { Component } from "react";
import API from "../../utils/API";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm).then(function (data) {
      console.log(data.data.items[0]);
    });
  };

  handleInputChange = (event) => {
    // const name = event.target.name;
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    return (
      <div className="container">
        <form
          className="mt-2 p-2 border border-dark bg-light"
          onSubmit={this.handleFormSubmit}
        >
          <div className="form-group">
            <h1>Find a Book to Explore!</h1>
            <hr />
            <label htmlFor="searchBar" className="mr-1">
              Search Books by Title
            </label>
            <input
              type="text"
              className="form-control"
              id="searchBar"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
              name="searchTerm"
            ></input>
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
