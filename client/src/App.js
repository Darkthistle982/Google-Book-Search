import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import API from "../src/utils/API";
import ResultCardContainer from "./Components/ResultCardContainer/ResultCardContainer";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    booklist: [
      {
        title: "stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/N8bGxz7.png",
        link: "www.linkypoo.corn",
      },
      {
        title: "other stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/LVJhJrk.jpg",
      },
      {
        title: "more stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/rpgzGgh.jpg",
      },
    ],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm).then(function (data) {
      console.log(data.data.items[0]);
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };

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
