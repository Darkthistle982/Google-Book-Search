import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SearchBar from "./Components/SearchBar/SearchBar";
import ResultCardContainer from "./Components/ResultCardContainer/ResultCardContainer";
import "./App.css";

class App extends Component {
  state = {
    booklist: [
      {
        title: "stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
      },
      {
        title: "other stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
      },
      {
        title: "more stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
      },
    ],
  };



  render() {
    return (
      <div>
        <div>
          <Navbar titlething={"Google Books"} />
          <Jumbotron />
          <SearchBar />
          <ResultCardContainer booklist={this.state.booklist}/>
        </div>
      </div>
    );
  }
}

export default App;
