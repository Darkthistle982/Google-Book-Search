import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SearchBar from "./Components/SearchBar/SearchBar";
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

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Jumbotron />
          <SearchBar 
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          />
          <ResultCardContainer 
          booklist={this.state.booklist}
         />
        </div>
      </div>
    );
  }
}

export default App;
