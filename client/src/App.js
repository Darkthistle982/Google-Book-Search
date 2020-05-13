import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import API from "../src/utils/API";
import ResultCardContainer from "./Components/ResultCardContainer/ResultCardContainer";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    booklist: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm)
    .then( (result) => {
      const searchresult = result.data.items;
      this.setState({ booklist: searchresult });
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };
  //Need to setup a save click event//
  handleBookSave = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Jumbotron />
          <div className="container">
            <form
              className="mt-2 p-2 border border-dark bg-light"
              onSubmit={this.handleFormSubmit}
            >
              <div className="form-group">
                <h1>Find a Book to Explore!</h1>
                <hr />
                <label htmlFor="searchBar" className="mr-1">
                  Search for Books
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
          <ResultCardContainer booklist={this.state.booklist} />
        </div>
      </div>
    );
  }
}

export default App;
