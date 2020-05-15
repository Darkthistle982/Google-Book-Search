import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SavedBooks from "./Components/pages/SavedBooks/SavedBooks";
import API from "../src/utils/API";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultCardContainer from "./Components/ResultCardContainer/ResultCardContainer";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    booklist: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm).then((result) => {
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
        <Router>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <SearchBar
                searchTerm={this.state.searchTerm}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <ResultCardContainer booklist={this.state.booklist} />
            </Route>
            <Route path="/saved">
              <SavedBooks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
